class Game {
    constructor() {
        //general
        this.frameSize = 4;
        this.isWin = false;
        //this.solvable == false;

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
        this.stopBtn = null;
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

        let stopBtn = document.createElement("button");
        stopBtn.classList.add("stop-button");
        stopBtn.innerText = "stop";
        this.stopBtn = stopBtn;

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
        this.topContainer.append(stopBtn);
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
        
        this.loadSavedGame();
        this.play();
    }

    //STARTING METHODS SET
    play() {
        this.createPieces(this.frameSize);
        this.countUp();
        this.countMoves();
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
            this.pzlPieces.push(pzlPiece);

            //add styles according to the frame size
            if(fieldSize == 3) {
                this.gamingBoard.style.padding = "50px";
            }

            if(fieldSize == 4) {
                this.gamingBoard.style.padding = "0px";
                this.gamingBoard.style.paddingTop = "6px";
            }

            if(fieldSize == 5) {
                pzlPiece.style.width = "75px";
                pzlPiece.style.height = "75px";
                this.gamingBoard.style.padding = "0px";
                this.gamingBoard.style.paddingTop = "4px";
            }

            if(fieldSize == 6) {
                pzlPiece.style.width = "60px";
                pzlPiece.style.height = "60px";
                pzlPiece.style.fontSize = "1.5em";
                this.gamingBoard.style.padding = "0px";
                this.gamingBoard.style.paddingTop = "5px";
            }

            if(fieldSize == 7) {
                pzlPiece.style.width = "52px";
                pzlPiece.style.height = "52px";
                pzlPiece.style.fontSize = "1.5em";
                this.gamingBoard.style.padding = "0px";
                this.gamingBoard.style.paddingTop = "3px";
            }

            if(fieldSize == 8) {
                pzlPiece.style.width = "45px";
                pzlPiece.style.height = "45px";
                pzlPiece.style.fontSize = "1.2em";
                this.gamingBoard.style.padding = "0px";
                this.gamingBoard.style.paddingTop = "3px";
            }

            this.frameSize = fieldSize;

            //add coordinates as class
            this.getCoordinates(fieldSize);
            let xy = this.coords[i];
            pzlPiece.setAttribute('id', xy);
            
            //get zero space
            if(piecesOrder[i] === 0) { 
                pzlPiece.style.visibility = "hidden";
                pzlPiece.classList.add("empty");
            }
        }

        //add pieces movement
        this.gamingBoard.addEventListener("click", (piece) => {
            let target = piece.target;
            this.movePieces(target);
        });

        this.resultsBtn.addEventListener("click", () => {
            this.showResults(this.results);
        })
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
            this.savedPopup();
        })
    }

    //confirmation the game has been saved
    savedPopup () {
        let savedPopup = document.createElement("div");
        savedPopup.classList.add("popup");
        savedPopup.style.display = "flex";
        this.gameContainer.append(savedPopup);
        let notice = document.createElement("span");
        notice.innerText = "You game has been saved!"
        savedPopup.append(notice);
        let okButton = document.createElement("button");
        okButton.classList.add("ok-button");
        okButton.innerText = "Ok";
        savedPopup.append(okButton);
        okButton.addEventListener("click", () => {
            savedPopup.style.display = "none";
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
                piece.style.visibility = "hidden";
                piece.innerText = "0";
                empty.classList.remove("empty");
                empty.innerText = tempText;
                empty.style.visibility = "visible";
                this.moves++;
                document.querySelector(".move-counter").innerHTML = this.moves;
                if(this.sound == true) {
                    let sound = new Audio("./assets/move-sound.mp3");
                    sound.play();
                }
                this.checkIfSolved();
                if (this.isWin == true) {
                    let wPopup = this.winPopup();
                    this.gameContainer.append(wPopup);
                    this.checkHighScore(this.moves);
                }
            }
        }
    }

    //ANIMATE THE MOVE
    //runAnimation (piece) {
    //     let dimensions = {
    //         width: document.querySelector(".game-board").width,
    //         height: document.querySelector(".game-board").height,
    //     }

    //     let animationRequest;
    //     let posX = dimensions.width / 2;
    //     let posY = dimensions.height / 2;
    //     let moveX = 5;
    //     let moveY = 5;

    //     animationRequest = window.requestAnimationFrame(runAnimation);

    //     posY += moveY;
    //     posX += moveX;

    //     if (posY < 0 || posY >= dimensions.height - piece.offsetHeight) {
    //         moveY = -moveY;
    //     }
        
    //     if (posX <= 0 || posX >= dimensions.width - piece.clientWidth) {
    //         moveX = -moveX;
    //     }
    
    //     piece.style.top = posY + 'px';
    //     piece.style.left = posX + 'px';

    //     window.requestAnimationFrame(runAnimation);
        
    //     setTimeout(() => {
    //       window.cancelAnimationFrame(animationRequest)
    //     }, 5000);
        
    //}

    //DRAG AND DROP
    // dragAndDrop (piece) {
    //     if(!piece.classList.contains("empty")) {
    //         let empty = this.getEmptyNeighbor(piece);
    //         if(empty) {
    //             piece.addEventListener("dragend", ()=>{
    //                 let tempText = piece.innerText; 
    //                 piece.classList.add("empty");
    //                 piece.classList.add("move");
    //                 piece.style.visibility = "hidden";
    //                 piece.innerText = "0";
    //                 empty.classList.remove("empty");
    //                 empty.innerText = tempText;
    //                 empty.style.visibility = "visible";
    //                 this.moves++;
    //                 document.querySelector(".move-counter").innerHTML = this.moves;
    //                 if(this.sound == true) {
    //                     let sound = new Audio("./assets/move-sound.mp3");
    //                     sound.play();
    //                 }
    //                 this.checkIfSolved();
    //                 if (this.isWin == true) {
    //                     let wPopup = this.winPopup();
    //                     this.gameContainer.append(wPopup);
    //                 }
    //             });
    //         }
    //     }
    // }

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
        wPopup.style.width = "300px";
        wPopup.style.height = "120px";

        let notice = document.createElement("span");
        notice.style.lineHeight = "25px";
        notice.style.marginTop = "10px";
        notice.style.paddingLeft = "5px";
        notice.style.paddingRight = "5px";
        let minutes = this.time.m >= 10 ? this.time.m : "0" + this.time.m;
        notice.innerText = `Hooray! You solved the puzzle in ${minutes} : ${this.time.s} and ${this.moves} moves!`
        wPopup.append(notice);

        let okButton = document.createElement("button");
        okButton.classList.add("ok-button");
        okButton.style.marginTop = "10px";
        okButton.innerText = "Nice!";
        wPopup.append(okButton);
        okButton.addEventListener("click", () => {
            wPopup.style.display = "none";
        })
        return wPopup;
    }

    //SAVING HIGHEST SCORES
    //check if the highest
    checkHighScore(moves) {
        let maxNum = 10;
        this.results = JSON.parse(localStorage.getItem('highScores')) ?? [];
        let lowScore = this.results[maxNum - 1]?.moves ?? 0;
        
        if (moves > lowScore) {
          this.saveHighScore(this.frameSize, this.time, moves, this.results);
        }
    }

    saveHighScore(difficulty, time, moves, allResults) {
        let level = `${difficulty}x${difficulty}`;
        let mins = time.m >= 10 ? time.m : "0" + time.m;
        let timing = `${mins} : ${time.s}`;
        let newScore = { level, timing, moves };
        allResults.push(newScore);
        // sort the list
        allResults.sort((a, b) => a.moves - b.moves);
        // select new list
        allResults.splice(10);
        // save to local storage
        localStorage.setItem('highScores', JSON.stringify(allResults));
    };

    //results popup
    showResults(results) {
        let resultsPopup = document.createElement("div");
        resultsPopup.classList.add("results-popup");
        resultsPopup.style.width = "300px";
        resultsPopup.style.height = "500px";
        resultsPopup.style.flexDirection = "row";
        resultsPopup.style.justifyContent = "center";
        this.gameContainer.append(resultsPopup);

        let resultsSumup = document.createElement("table");
        resultsSumup.classList.add("results-table");
        resultsPopup.append(resultsSumup);

        let thead = resultsSumup.createTHead();
        let tr = thead.insertRow();

        for (let key in results[0]) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            tr.appendChild(th);
        }

        this.createTable(resultsSumup, this.results);
        this.gameContainer.append(resultsSumup);

        return resultsPopup;
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