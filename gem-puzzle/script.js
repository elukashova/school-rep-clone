class Game {
    constructor() {
        //general
        this.frameSize = 4;
        this.isSaved = null;

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
        this.solvable = false;
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

    //ALL NECESSARY ELEMENTS 
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
        
        this.play()
    }

    //STARTING METHODS SETS
    play() {
        this.createPieces(this.frameSize);
        this.countUp();
        this.countMoves();
    }

    //CREATE PUZZLE
    createPieces(fieldSize) {
        //this.isSolvable(); //take a solvable shuffled array
        this.shuffle(fieldSize);

        for (let i = 0; i < this.shuffled.length; i++) {
            let pzlPiece = document.createElement("div");
            this.gamingBoard.append(pzlPiece);
            pzlPiece.classList.add("puzzle-piece");
            pzlPiece.innerText = this.shuffled[i];
            this.pzlPieces.push(pzlPiece);

            //add coordinates as class
            this.getCoordinates(fieldSize);
            let xy = this.coords[i];
            pzlPiece.setAttribute('id', xy);
            
            //get zero space
            if(this.shuffled[i] === 0) { 
                //pzlPiece.style.order = "16";
                //this.getZeroCoordinates();
                pzlPiece.style.visibility = "hidden";
                pzlPiece.classList.add("empty");
                //pzlPiece.classList.remove("puzzle-piece");
                //pzlPiece.classList.add(this.zeroXY)
            }
        }

        //add pieces movement
        this.gamingBoard.addEventListener("click", (piece) => {
                let target = piece.target;
                this.movePieces(target);
        });
    }

    //create shuffled array to check for solvability
    shuffle (fieldSize) {
        let unshuffled = [];
        let n = fieldSize ** 2;
        for (let i = n-1; i >= 0; i--) {
            unshuffled.push(i);
        }
        this.shuffled = unshuffled.sort((a, b) => 0.5 - Math.random());
    }

    //create frame sizes
    chooseSize() {
        this.size3.addEventListener("click", () => {
            this.frameSize = 3;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "50px";
            this.updateField();
            this.play(this.frameSize);
        });

        this.size4.addEventListener("click", () => {
            this.frameSize = 4;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "6px";
            this.updateField();
            this.play(this.frameSize);
        });

        this.size5.addEventListener("click", () => {
            this.frameSize = 5;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "4px";
            this.updateField();
            this.play(this.frameSize);
            this.pzlPieces.forEach(element => {
                element.style.width = "75px";
                element.style.height = "75px";

            })
        });

        this.size6.addEventListener("click", () => {
            this.frameSize = 6;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "5px";
            this.updateField();
            this.play(this.frameSize);
            this.pzlPieces.forEach(element => {
                element.style.width = "60px";
                element.style.height = "60px";
                element.style.fontSize = "1.5em";
            })
        });

        this.size7.addEventListener("click", () => {
            this.frameSize = 7;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "3px";
            this.updateField();
            this.play(this.frameSize);
            this.pzlPieces.forEach(element => {
                element.style.width = "52px";
                element.style.height = "52px";
                element.style.fontSize = "1.5em";
            })
        });

        this.size8.addEventListener("click", () => {
            this.frameSize = 8;
            this.gamingBoard.innerHTML = "";
            this.coords = [];
            this.gamingBoard.style.padding = "0px";
            this.gamingBoard.style.paddingTop = "3px";
            this.updateField();
            this.play(this.frameSize);
            this.pzlPieces.forEach(element => {
                element.style.width = "45px";
                element.style.height = "45px";
                element.style.fontSize = "1.2em";
            })
        });
    }

    //restart the game and shuffle
    startOver() {
        this.shuffleBtn.addEventListener("click", () => {
            this.updateField();
            this.play();

            if(this.frameSize == 5) {
                this.pzlPieces.forEach(element => {
                    element.style.width = "75px";
                    element.style.height = "75px";
                })
            }

            if(this.frameSize == 6) {
                this.pzlPieces.forEach(element => {
                    element.style.width = "60px";
                    element.style.height = "60px";
                    element.style.fontSize = "1.5em";
                })
            }

            if(this.frameSize == 7) {
                this.pzlPieces.forEach(element => {
                    element.style.width = "52px";
                    element.style.height = "52px";
                    element.style.fontSize = "1.5em";
                })
            }

            if(this.frameSize == 8) {
                this.pzlPieces.forEach(element => {
                    element.style.width = "45px";
                    element.style.height = "45px";
                    element.style.fontSize = "1.2em";
                })
            }
        })
    }

    updateField() {
        this.timeCounter.remove();
        this.gamingBoard.innerHTML = "";
        this.timeCounter.innerText = "";
        this.timeCounter.innerHTML = "";
        this.mover.remove();
        this.resetStats();
    }

    //save the current game 
    saveGameData() {
        //delete previously saved game
        localStorage.clear();
        //saved the current game
        let currentPieces = [];
        let currentSet = document.querySelector(".game-board");
        let piecesOrder = currentSet.childNodes;
        piecesOrder.forEach(piece => {
            currentPieces.push(Number(piece.innerHTML));
        })
        let savedGame = {
            frame: this.frameSize,
            order: piecesOrder,
            moves: this.moves,
            time: this.time,
        }
        let saveProgressString = JSON.stringify(savedGame);
        localStorage.setItem("gemGameProgress", saveProgressString);
    }

    //saving game by clicking on stop
    saveGame() {
        this.saveBtn.addEventListener("click", () => {
            console.log("he");
            this.saveGameData();
            this.savedPopup();
            this.isSaved = true;
        })
    }

    //confirmation the game has been saved
    savedPopup () {
        let savedPopup = document.createElement("div");
        savedPopup.classList.add("saved-popup");
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

    //close popup
    // closePopop () {
    //     let okButton = document.querySelector(".ok-button");
    //     okButton.addEventListener("click", () => {
    //         document.querySelector(".saved-popup").style.display = "none";
    //     })
    // }


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

    //check for solvability
    // isSolvable () {
    //     while (this.solvable == false) {
    //         this.shuffle();
    //         let counter = 0;
    //         let row = 0;
    //         let zeroRow;
    //         for (let i = 0; i < this.shuffled.length; i++) {
    //             if (i % this.frameSize == 0) {
    //                 row++; // next row starts
    //             } 
    //             if(this.shuffled[i] == 0) { //find the empty piece
    //                 zeroRow = row;
    //                 continue;
    //             }
    //             for (let j = i +1; j < this.shuffled.length; j++) { //count inversions
    //                 if (this.shuffled[i] > this.shuffled[j] && this.shuffled[j] !=0) {
    //                     counter++;
    //                 }
    //             }
    //         }  

    //         if (this.frameSize % 2 == 0) { //even frame
    //             if (zeroRow % 2 == 0 && counter % 2 == 0) { //check if odd row from bottom + even inversions
    //                 this.isSolvable = true;
    //                 return this.shuffled;
    //             } else if (zeroRow % 2 !== 0 && counter % 2 != 0) {  //check if even row from bottom + odd inversions
    //                 this.isSolvable = true;
    //                 return this.shuffled;
    //             } 
    //         } else { //odd frame
    //             if (counter % 2 == 0) {
    //                 this.isSolvable = true;
    //                 return this.shuffled;
    //             } 
    //         }
    //     }
    // }

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

    // findEmptyPiece(row, col) {
    //     return document.querySelector(".empty")
    // }

    //find zero in the shuffled array
    // getZeroCoordinates() { 
    //     this.getCoordinates();
    //     for (let i = 0; i < this.shuffled.length; i++) {  
    //         if(this.shuffled[i] === 0) {
    //             let xy = this.coords[i];
    //             this.zeroXY.push(xy[0]);
    //             this.zeroXY.push(xy[1]); 
    //         }
    //     }
    //     return this.zeroXY;
    // }

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
                let tempText = piece.innerText; 
                //let tempID = piece.id;
                piece.classList.add("empty");
                piece.classList.add("move");
                piece.style.visibility = "hidden";
                piece.innerText = "0";
                //piece.id = empty.id;
                empty.classList.remove("empty");
                empty.innerText = tempText;
                // empty.id = tempID;
                empty.style.visibility = "visible";
                this.moves++;
                document.querySelector(".move-counter").innerHTML = this.moves;
                //this.movesCounter.innerHTML = "Moves: " + this.moves;
                if(this.sound == true) {
                    let sound = new Audio("./assets/move-sound.mp3");
                    sound.play();
                }
            }
        }
    }



    // createPieces() {
    //     let shuffled = new CreateGamingSet(this.frame);
    //     //append final gaming sel
    //     for (let i = 0; i < shuffled.length; i++) {
    //         let pzlPiece = document.createElement("div");
    //         this.gamingBoard.append(pzlPiece);
    //         pzlPiece.classList.add("puzzle-piece");
    //         pzlPiece.innerText = shuffled[i];
    //         this.pzlPieces.push(pzlPiece);
    //         if(shuffled[i] === 0) {
    //             // pzlPiece.style.order = "16";
    //             pzlPiece.style.visibility = "hidden";
    //             pzlPiece.classList.add("empty");
    //         }
    //     }
    // }

    // findEmpty() {
    //     let a = this.shuffledSet;
    //     let row;
    //         for (let i = 0; i < a.length; i++) {
    //             let ind = a.indexOf(0);
    //             if (ind >= 0 && ind <= 3) {
    //                 row = true;
    //             } else if (ind >= 8 && ind <= 11) {
    //                 row = true;
    //             } else {
    //                 row = false;
    //             } 
    //         }
    //         return row;
    //     }


    //TIMER
    countUp() {
        let timeCounter = document.createElement("span");
        timeCounter.classList.add("time-counter");
        this.timer.append(timeCounter);
        timeCounter.innerHTML = "00 : 00";

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
                s = counter >= 10 ? counter : "0" + counter;
            }

            m = this.time.m >= 10 ? this.time.m : "0" + this.time.m;

            timeCounter.innerHTML = m + " : " + s;

        }, 1000);

        this.timeCounter = timeCounter;
    }

    countMoves() {
        let moveNum = document.createElement("span");
        moveNum.classList.add("move-counter");
        this.movesCounter.append(moveNum);
        moveNum.innerHTML = "0";
        this.mover = moveNum;
    }

    returnMoves() {
        return this.moves;
    }

    // updateMoves() {
    //     this.moves.innerText = "Moves: " + this.moves;
    // }

    resetStats() {
        this.time.m = 0;
        this.time.s = 0;
        this.moves = 0;
    }

}
 

let gem = new Game();
gem.go();