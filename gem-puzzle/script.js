class Game {
    constructor() {
        //1. containers
        this.gameContainer = null;
        this.topContainer = null;
        this.statsContainer = null;
        this.bottomContainer = null;
        //2. board
        this.gamingBoard = null;
        this.pzlPieces = [];
        this.timer = null;
        this.time = {
            h: 0,
            m: 0,
            s: 0
        };
        this.moves = 0;
        // this.frame = 4;
        // this.frameSize = "4x4";
        this.winningSet = [];

        //3. buttons
        this.shuffleBtn = null;
        this.stopBtn = null;
        this.saveBtn = null;
        this.resultsBtn = null;
        this.soundBtn = null;

    }

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

        // let bottomContainer = document.createElement("div");
        // bottomContainer.classList.add("frames-container");
        // this.bottomContainer = bottomContainer;

        //2. board
        let gamingBoard = document.createElement("div");
        gamingBoard.classList.add("game-board");
        this.gamingBoard = gamingBoard;

        //3. buttons
        let shuffleBtn = document.createElement("button");
        shuffleBtn.classList.add("shuffle-button");
        shuffleBtn.innerText = "shuffle & start";
        this.shuffleBtn = shuffleBtn;

        let stopBtn = document.createElement("button");
        stopBtn.classList.add("stop-button");
        stopBtn.innerText = "stop";
        this.stopBtn = stopBtn;

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-button");
        saveBtn.innerText = "save";
        this.saveBtn = saveBtn;

        let resultsBtn = document.createElement("button");
        resultsBtn.classList.add("results-button");
        resultsBtn.innerText = "results";
        this.resultsBtn = resultsBtn;
        
        let soundBtn = document.createElement("button");  
        this.soundBtn = soundBtn;

        //4. stats
        let moves = document.createElement("span");
        moves.classList.add("moves");
        moves.innerText = "Moves: " + this.moves;
        this.moves = moves;

        let timer = document.createElement("span");
        timer.classList.add("timer");
        timer.innerText = "Time: ";
        this.timer = timer;

        document.body.append(this.gameContainer);
        this.gameContainer.append(topContainer);
        this.topContainer.append(shuffleBtn);
        this.topContainer.append(stopBtn);
        this.topContainer.append(saveBtn);
        this.topContainer.append(resultsBtn);
        this.gameContainer.append(statsContainer);
        this.statsContainer.append(moves);
        this.statsContainer.append(timer);
        this.gameContainer.append(this.gamingBoard);
        // this.gameContainer.append(bottomContainer);
        
        this.play()
    }

    play() {
        this.createPieces();
        this.countUp();
    }

    createPieces() {
        let unshuffled = [];
        for (let i = 15; i > 0; i--) {
            unshuffled.push(i);
        }
        let shuffled = unshuffled.sort((a, b) => 0.5 - Math.random());
        shuffled.push(0);
        for (let i = 0; i < shuffled.length; i++) {
            let pzlPiece = document.createElement("div");
            this.gamingBoard.append(pzlPiece);
            pzlPiece.classList.add("puzzle-piece");
            pzlPiece.innerText = shuffled[i];
            this.pzlPieces.push(pzlPiece);
            if(shuffled[i] === 0) {
                pzlPiece.style.order = "16";
                pzlPiece.style.visibility = "hidden";
            }
        }
    }

    //TIMER
    countUp() {
        let timeCounter = document.createElement("span");
        timeCounter.classList.add("time-counter");
        this.timer.append(timeCounter);
        let counter = this.time.s || 0;
        let h = this.time.h || 0;
        let m = this.time.m || 0;
        let s = this.time.s || 0;


        setInterval(() => {
            counter++;
            s = counter >= 10 ? counter : "0" + counter;
            this.time.s = s;
            if(s >=60) {
                counter = 0;
                this.time.m ++;
            }

            m = this.time.m >= 10 ? this.time.m : "0" + this.time.m;
            if(m >=60) {
                this.time.h ++;
            }

            h = this.time.h >= 10 ? this.time.h : "0" + this.time.h;

            if (h < 1) {
                timeCounter.innerHTML = m + " : " + s;
            } else {
                timeCounter.innerHTML = h + " : " + m + " : " + s;
            }

        }, 1000);
    }

}
 

let gem = new Game();
gem.go();