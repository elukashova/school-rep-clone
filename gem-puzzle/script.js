class Game {
    constructor() {
        //general
        this.frameSize = 4;
        this.isWin = false;
        this.solvable == false;

        //media queries
        this.screen = {
            large: window.matchMedia('(max-width: 1280px)'),
            medium: window.matchMedia('(max-width: 768px)'),
            small: window.matchMedia('(max-width: 320px)'),
        }
        this.screenSize = null;

        //saving
        this.isSaved = false;
        this.savedGame = {};
        this.results = []; // array of objects with highest scoress

        //containers
        this.gameContainer = null;
        this.topContainer = null;
        this.statsContainer = null;
        this.bottomContainer = null;

        //sizes
        this.sizeContainer = null;
        this.size3 = null;
        this.size4 = null;
        this.size5 = null;
        this.size6 = null;
        this.size7 = null;
        this.size8 = null;

        //board
        this.gamingBoard = null;
        this.timer = null;
        this.timeCounter = null;
        this.time = {
            m: 0,
            s: 0
        };
        this.mover = null;
        this.movesCounter = null;
        this.moves = 0;
        this.pzlPieces = [];
        this.shuffled = [];
        this.inversions = null; 
        this.coords = [];
        this.neighbors = [];
        this.sound = true;

        //buttons
        this.shuffleBtn = null;
        this.loadBtn = null;
        this.saveBtn = null;
        this.resultsBtn = null;
        this.soundBtn = null;
    }

    //CREATE ALL NECESSARY ELEMENTS 
    go() {
        //1. containers
        let gameContainer = document.createElement("div");
        gameContainer.classList.add("game-field");
        this.gameContainer = gameContainer;

        let topContainer = document.createElement("div");
        topContainer.classList.add("buttons-container");
        this.topContainer = topContainer;

        let statsContainer = document.createElement("div");
        statsContainer.classList.add("stats-container");
        this.statsContainer = statsContainer;

        let bottomContainer = document.createElement("div");
        bottomContainer.classList.add("bottom-container");
        this.bottomContainer = bottomContainer;

        //2. board
        let gamingBoard = document.createElement("div");
        gamingBoard.classList.add("game-board");
        this.gamingBoard = gamingBoard;

        //3. buttons
        let shuffleBtn = document.createElement("button");
        shuffleBtn.classList.add("shuffle-button");
        shuffleBtn.innerText = "shuffle & start";
        this.shuffleBtn = shuffleBtn;
        this.startOver();

        let loadBtn = document.createElement("button");
        loadBtn.classList.add("load-button");
        loadBtn.innerText = "load";
        this.loadBtn = loadBtn;

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-button");
        saveBtn.innerText = "save";
        this.saveBtn = saveBtn;
        this.saveGame();

        let resultsBtn = document.createElement("button");
        resultsBtn.classList.add("results-button");
        resultsBtn.innerText = "results";
        this.resultsBtn = resultsBtn;
        
        let soundBtn = document.createElement("button");
        soundBtn.classList.add("sound-button");
        soundBtn.style.backgroundImage = "url(./assets/sound-on.svg)";
        this.soundBtn = soundBtn;
        this.soundOnOff();

        //4. stats
        let moves = document.createElement("span");
        moves.classList.add("moves");
        moves.innerText = "Moves: ";
        this.movesCounter = moves;

        let timer = document.createElement("span");
        timer.classList.add("timer");
        timer.innerText = "Time: ";
        this.timer = timer;

        //5. frame sizes links
        let sizeContainer = document.createElement("div");
        sizeContainer.classList.add("size-container");
        this.sizeContainer = sizeContainer;

        let sizeText = document.createElement("p");
        sizeText.classList.add("size-text");
        sizeText.innerText = "Frame size:";

        let size3 = document.createElement("a");
        size3.setAttribute("id", "frame-size3");
        size3.innerText = "3x3";
        this.size3 = size3;

        let size4 = document.createElement("a");
        size4.setAttribute("id", "frame-size4");
        size4.innerText = "4x4";
        this.size4 = size4;

        let size5 = document.createElement("a");
        size5.setAttribute("id", "frame-size5");
        size5.innerText = "5x5";
        this.size5 = size5;

        let size6 = document.createElement("a");
        size6.setAttribute("id", "frame-size6");
        size6.innerText = "6x6";
        this.size6 = size6;

        let size7 = document.createElement("a");
        size7.setAttribute("id", "frame-size7");
        size7.innerText = "7x7";
        this.size7 = size7;

        let size8 = document.createElement("a");
        size8.setAttribute("id", "frame-size8");
        size8.innerText = "8x8";
        this.size8 = size8;
        this.chooseSize();

        //append everything
        document.body.append(this.gameContainer);
        this.gameContainer.append(topContainer);
        this.topContainer.append(shuffleBtn);
        this.topContainer.append(loadBtn);
        this.topContainer.append(saveBtn);
        this.topContainer.append(resultsBtn);
        this.gameContainer.append(statsContainer);
        this.statsContainer.append(moves);
        this.statsContainer.append(timer);
        this.gameContainer.append(gamingBoard);
        this.gameContainer.append(bottomContainer);
        this.bottomContainer.append(soundBtn);
        this.bottomContainer.append(sizeContainer);
        this.sizeContainer.append(sizeText);
        this.sizeContainer.append(size3);
        this.sizeContainer.append(size4);
        this.sizeContainer.append(size5);
        this.sizeContainer.append(size6);
        this.sizeContainer.append(size7);
        this.sizeContainer.append(size8);

        //mediaqueries
        for (let [scr, mq] of Object.entries(this.screen)) {
            if (mq) {
                mq.addEventListener('change', this.mqChangeHandler());
            }
        }
        window.addEventListener('resize', this.resizeHandler());

        //initial methods
        this.loadSavedGame();
        this.loadSavedResults();
        this.mqChangeHandler();
        this.play();
        this.resizeHandler();

        this.loadBtn.addEventListener("click", () => {
            let saved = this.loadSavedGame();
            this.timeCounter.remove();
            this.gamingBoard.innerHTML = "";
            this.timeCounter.innerText = "";
            this.mover.remove();
            this.resetStats();
            this.createPieces(saved.frame);
            this.countUp();
            this.countMoves();
        })
    }

    //STARTING METHODS SET
    play() {
        this.createPieces(this.frameSize);
        this.countUp();
        this.countMoves();
        this.mqChangeHandler();
        this.resizeHandler();
    }

    //MEDIA QUERIES
    mqChangeHandler() {
        for (let [scr, mq] of Object.entries(this.screen)) {
            if (!mq || mq.matches) {
                this.screenSize = scr;
            }
        }
    }

    resizeHandler() {
        let iw = window.innerWidth;
        for (let [scr, mq] of Object.entries(this.screen)) {
            if (iw >= mq)  {
                this.screenSize = mq;
          }
        }
    }

    //CREATE PUZZLE
    createPieces(fieldSize) {
        //this.isSolvable(); //take a solvable shuffled array
        let piecesOrder = [];

        if (this.isSaved == true) {
            fieldSize = this.savedGame.frame;
            piecesOrder = this.savedGame.order;
        } else {
            this.shuffle(fieldSize);
            piecesOrder = this.shuffled;
        }

        for (let i = 0; i < piecesOrder.length; i++) {
            let pzlPiece = document.createElement("div");
            this.gamingBoard.append(pzlPiece);
            pzlPiece.classList.add("puzzle-piece");
            pzlPiece.setAttribute("draggable", 'true');
            pzlPiece.innerText = piecesOrder[i];
            this.stylePieces(pzlPiece, fieldSize);
            this.pzlPieces.push(pzlPiece);

            //add styles according to the frame size

            this.frameSize = fieldSize;

            //add coordinates as class
            this.getCoordinates(fieldSize);
            let xy = this.coords[i];
            pzlPiece.setAttribute('id', xy);
            
            //get zero space
            if(piecesOrder[i] === 0) { 
                pzlPiece.style.visibility = "hidden";
                pzlPiece.classList.add("empty");
                //pzlPiece.setAttribute("draggable", "false");
            }
        }

        //add pieces movement
        this.gamingBoard.addEventListener("click", (piece) => {
            let target = piece.target;
            this.movePieces(target);
        });

        this.resultsBtn.addEventListener("click", () => {
            let popup = this.showResults(this.results);
            popup.classList.toggle("active");
        })

    }

    stylePieces (pzlPiece, fieldSize) {
        if(fieldSize == 3) {
            this.gamingBoard.style.paddingTop = "6px";
            pzlPiece.classList.add("size-3");
            if (this.screenSize === "large") {
            }
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "4px";
            }
            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        if(fieldSize == 4) {
            pzlPiece.classList.add("size-4");
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "4px";
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "3px";
            }
            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        if(fieldSize == 5) {
            pzlPiece.classList.add("size-5");
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "4px";
            if (this.screenSize === "large") {
                this.gamingBoard.style.paddingTop = "3px";
            }
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "3px";
            }

            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        if(fieldSize == 6) {
            pzlPiece.classList.add("size-6");
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "5px";
            if (this.screenSize === "large") {
                this.gamingBoard.style.paddingTop = "2px";
            }
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "3px";
            }
            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        if(fieldSize == 7) {
            pzlPiece.classList.add("size-7");
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "3px";
            if (this.screenSize === "large") {
                this.gamingBoard.style.paddingTop = "2px";
            }
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "2px";
            }
            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        if(fieldSize == 8) {
            pzlPiece.classList.add("size-8");
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "3px";
            if (this.screenSize === "large") {
                this.gamingBoard.style.paddingTop = "2px";
            }
            if (this.screenSize === "medium") {
                this.gamingBoard.style.paddingTop = "2px";
            }
            if (this.screenSize === "small") {
                this.gamingBoard.style.paddingTop = "2px";
            }
        }

        return pzlPiece;
    }

    //create shuffled array
    shuffle (fieldSize) {
        let unshuffled = [];
        let n = fieldSize ** 2;
        for (let i = n-1; i >= 0; i--) {
            unshuffled.push(i);
        }
        this.shuffled = unshuffled.sort((a, b) => 0.5 - Math.random());

        this.solvable = this.isSolvable(this.shuffled);
        //console.log(this.solvable);
        if (this.solvable === false) {
            this.shuffle(fieldSize);
            //console.log(this.solvable);
        } else {
            return this.shuffled;
        }
    }

    //check for solvability
    isSolvable (arr) {
        //if (this.solvable == false) {
            let counter = 0;
            let row = 0;
            let zeroRow;
            for (let i = 0; i < arr.length; i++) {
                if (i % this.frameSize == 0) {
                    row++; // next row starts
                } 
                if(arr[i] == 0) { //find the empty piece
                    zeroRow = row;
                    continue;
                }
                for (let j = i +1; j < arr.length; j++) { //count inversions
                    if (arr[i] > arr[j] && arr[j] !=0) {
                        counter++;
                        //console.log(counter);
                    }
                };
            } 

            if (this.frameSize % 2 == 0) { //even frame
                if (zeroRow % 2 == 0) { //check if odd row from bottom + even inversions
                    //console.log("odd row");
                    return counter % 2 == 0;
                } else if (zeroRow % 2 !== 0) {  //check if even row from bottom + odd inversions
                    //console.log("even row");
                    return counter % 2 != 0;
                } //console.log("hey");
            } else { //odd frame
                return counter % 2 == 0;
            } 
        //this.solvable = this.isSolvable();
    }

    //create frame sizes
    chooseSize() {
        this.size3.addEventListener("click", () => {
            this.frameSize = 3;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });

        this.size4.addEventListener("click", () => {
            this.frameSize = 4;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });

        this.size5.addEventListener("click", () => {
            this.frameSize = 5;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });

        this.size6.addEventListener("click", () => {
            this.frameSize = 6;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });

        this.size7.addEventListener("click", () => {
            this.frameSize = 7;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });

        this.size8.addEventListener("click", () => {
            this.frameSize = 8;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.updateField();
            this.play();
        });
    }

    //restart the game and shuffle
    startOver() {
        this.shuffleBtn.addEventListener("click", () => {
            //localStorage.clear();
            this.updateField();
            this.play(this.frameSize);
        })
    }

    updateField() {
        this.timeCounter.remove();
        this.gamingBoard.innerHTML = "";
        this.timeCounter.innerText = "";
        this.timeCounter.innerHTML = "";
        this.mover.remove();
        this.resetStats();
        this.isSaved = false;
        this.solvable = false;
    }

    //SAVE THE CURRENT GAME
    saveGameData() {
        //delete previously saved game
        localStorage.removeItem("gemGameProgress");
        //saved the current game
        let currentPieces = [];
        let currentSet = document.querySelector(".game-board");
        let piecesOrder = currentSet.childNodes;
        piecesOrder.forEach(piece => {
            currentPieces.push(Number(piece.innerText));
        })
        let savedGame = {
            frame: this.frameSize,
            order: currentPieces,
            moves: this.moves,
            time: this.time,
        }
        let saveProgressString = JSON.stringify(savedGame);
        localStorage.setItem("gemGameProgress", saveProgressString);
    }

    //saving game by clicking on stop
    saveGame() {
        this.saveBtn.addEventListener("click", () => {
            this.saveGameData();
            let popup = this.savedPopup();
            popup.classList.toggle("active");
        })
    }

    //confirmation the game has been saved
    savedPopup () {
        let savedPopup = document.createElement("div");
        savedPopup.classList.add("popup");
        this.gameContainer.append(savedPopup);

        let notice = document.createElement("span");
        notice.innerText = "You game has been saved! Refresh the page to see it or click on 'LOAD'."
        savedPopup.append(notice);

        let okButton = document.createElement("button");
        okButton.classList.add("ok-button");
        okButton.innerText = "Ok";
        savedPopup.append(okButton);
        okButton.addEventListener("click", () => {
            savedPopup.classList.remove("active");
        })
        return savedPopup;
    }

    loadSavedGame() {
        if(localStorage.getItem("gemGameProgress") !== null) {
            this.savedGame = JSON.parse(localStorage.getItem("gemGameProgress"));
            this.isSaved = true;
            return this.savedGame;
        } else {
            return false
        }
    }

    //control sound
    soundOnOff() {
        this.soundBtn.addEventListener("click", () => {
            this.sound = !this.sound;
            if(this.sound == false) {
                this.soundBtn.style.backgroundImage = "url(./assets/sound-off.svg)";
            } else {
                this.soundBtn.style.backgroundImage = "url(./assets/sound-on.svg)";
            }
        });
    }

    getCoordinates(frameSize) {
        let rows = frameSize;
        let cols = frameSize;
        
        for (let i = 0; i<rows; i++) {
            for (let j = 0; j < cols; j++) {
                let xy = [i,j];
                this.coords.push(xy);
            }
        }
        return this.coords;
    }

    findPiecebyID(row, col) {
        return document.getElementById(`${row},${col}`);
    }

    //find interchangeable pieces
    getNeighbors (piece) { 
        let coords = piece.id.replace(",", "").split("");
        let r = Number(coords[0]);
        let c = Number(coords[1]);
        let neighbors = [];

        let n = this.frameSize;

        if(r < n-1){
            neighbors.push(this.findPiecebyID(r+1, c));
        }			
		if(r > 0){
            neighbors.push(this.findPiecebyID(r-1, c));
        }
		if(c < n-1){
            neighbors.push(this.findPiecebyID(r, c+1));
        }
		if(c > 0){
            neighbors.push(this.findPiecebyID(r, c-1));
        }

        this.neighbors = neighbors;
        return this.neighbors;
    }

    getEmptyNeighbor (piece) {
        let neighbor = this.getNeighbors(piece);
        for(let i = 0; i < neighbor.length; i++){
			if(neighbor[i].classList.contains("empty")) {
            return neighbor[i];
            }
		}
        return false
    }

    //MOVE PUZZLE PIECES
    movePieces(piece) {
        if(!piece.classList.contains("empty")) {
            let empty = this.getEmptyNeighbor(piece);
            if(empty) {
                //this.runAnimation(piece);
                let tempText = piece.innerText; 
                piece.classList.add("empty");
                piece.classList.add("move");
                //piece.classList.remove("dragging");
                piece.style.visibility = "hidden";
                piece.innerText = "0";
                //piece.setAttribute("draggable", "false");
                empty.classList.remove("empty");
                //empty.classList.add("dragging");
                empty.innerText = tempText;
                empty.style.visibility = "visible";
                //empty.setAttribute("draggable", "true");
                this.moves++;
                document.querySelector(".move-counter").innerHTML = this.moves;
                if(this.sound == true) {
                    let sound = new Audio("../assets/move-sound.mp3"); 
                    sound.play();
                }
                this.checkIfSolved();
                if (this.isWin == true) {
                    let wPopup = this.winPopup();
                    wPopup.classList.toggle("active");
                    this.checkHighScore(this.moves);
                }
            }
        }
    }

    //CHECK IF THE PUZZLE IS SOLVED SUCCESSFULLY
    checkIfSolved() {
        let currentPieces = [];
        let currentSet = document.querySelector(".game-board");
        let currentOrder = currentSet.childNodes;
        currentOrder.forEach(piece => {
            currentPieces.push(Number(piece.innerText));
        })
        let winningOrder = new Array(...currentPieces).sort((a,b) => a > b ? 1 : -1).filter(el => el != 0);
        winningOrder.push(0);
        if (currentPieces.join("") == winningOrder.join("")) {
            this.isWin = true;
        } else {
            this.isWin = false;
        }
    }

    winPopup() {
        let wPopup = document.createElement("div");
        wPopup.classList.add("win-popup");
        this.gameContainer.append(wPopup);

        let notice = document.createElement("span");
        let minutes = this.time.m >= 10 ? this.time.m : "0" + this.time.m;
        notice.innerText = `Hooray! You solved the puzzle in ${minutes} : ${this.time.s} and ${this.moves} moves!`
        wPopup.append(notice);

        let okButton = document.createElement("button");
        okButton.classList.add("ok-button");
        okButton.style.marginTop = "10px";
        okButton.innerText = "Nice!";
        wPopup.append(okButton);
        okButton.addEventListener("click", () => {
            wPopup.classList.remove("active");
        })
        return wPopup;
    }

    //SAVING HIGHEST SCORES
    //check if the highest
    checkHighScore(moves) {
        let maxNum = 10;
        this.results = JSON.parse(localStorage.getItem("highScores")) ?? [];
        let lowScore = this.results[maxNum - 1]?.moves ?? 0;
        
        if (moves > lowScore) {
          this.saveHighScore(this.frameSize, moves, this.time, this.results);
        }
    }

    saveHighScore(difficulty, moves, time, allResults) {
        let level = `${difficulty}x${difficulty}`;
        let mins = time.m >= 10 ? time.m : "0" + time.m;
        let timing = `${mins} : ${time.s}`;
        let newScore = { level, moves, timing };
        allResults.push(newScore);
        // sort the list
        allResults.sort((a, b) => a.moves - b.moves);
        // select new list
        allResults.splice(10);
        // save to local storage
        localStorage.setItem("highScores", JSON.stringify(allResults));
    };

    //results popup
    showResults(results) {
        let resultsPopup = document.createElement("div");
        resultsPopup.classList.add("results-popup");
        this.gameContainer.append(resultsPopup);

        let resultsTitle = document.createElement("span");
        resultsTitle.classList.add("results-title");
        resultsTitle.innerText = "top 10 results";
        resultsPopup.append(resultsTitle);

        let resultsSumup = document.createElement("table");
        resultsSumup.classList.add("results-table");
        resultsPopup.appendChild(resultsSumup);

        let thead = resultsSumup.createTHead();
        let tr = thead.insertRow();
        
        let headings = ["field", "moves", "time"];
        for (let i = 0; i < headings.length; i++) {
            let th = document.createElement("th");
            let text = document.createTextNode(headings[i]);
            th.appendChild(text);
            tr.appendChild(th);
        }

        let okbtn = document.createElement("button");
        okbtn.classList.add("ok-button");
        okbtn.innerText = "Ok";
        resultsPopup.append(okbtn);
        okbtn.addEventListener("click", () => {
            resultsPopup.classList.remove("active");
        })

        this.createTable(resultsSumup, this.results);

        return resultsPopup;
    }

    loadSavedResults() {
        if(localStorage.getItem("highScores") !== null) {
            this.results = JSON.parse(localStorage.getItem("highScores"));
            return this.results;
        } else {
            return false
        }
    }

    //create table with highest scores
    createTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (let key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
        }
    }

    //TIMER
    countUp() {
        let timeCounter = document.createElement("span");
        timeCounter.classList.add("time-counter");
        this.timer.append(timeCounter);
        timeCounter.innerText = "00 : 00";

        if (this.isSaved == true) {
            let m = this.savedGame.time.m >= 10 ? this.savedGame.time.m : "0" + this.savedGame.time.m;
            timeCounter.innerText = m + " : " + this.savedGame.time.s;
            this.time.m = this.savedGame.time.m;
            this.time.s = this.savedGame.time.s;
        }

        let counter = this.time.s || 0;
        let m = this.time.m || 0;
        let s = this.time.s || 0;

        setInterval(() => {
            counter++;
            s = counter >= 10 ? counter : "0" + counter;
            this.time.s = s;
            if(s > 59) {
                counter = 0;
                this.time.m ++;
            }

            if (s == 60) {
                s = "00";
            }

            m = this.time.m >= 10 ? this.time.m : "0" + this.time.m;

            timeCounter.innerText= m + " : " + s;

        }, 1000);

        this.timeCounter = timeCounter;
    }

    countMoves() {
        let moveNum = document.createElement("span");
        moveNum.classList.add("move-counter");
        this.movesCounter.append(moveNum);
        if (this.isSaved == true) {
            moveNum.innerHTML = this.savedGame.moves;
            this.moves = this.savedGame.moves;
        } else {
            moveNum.innerHTML = "0";
        }
        this.mover = moveNum;
    }

    resetStats() {
        this.time.m = 0;
        this.time.s = 0;
        this.moves = 0;
    }

}
 

let gem = new Game();
gem.go();