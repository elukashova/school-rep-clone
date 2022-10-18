class Game {
    constructor() {
        //1. containers
        this.gameContainer = null;
        this.topContainer = null;
        this.bottomContainer = null;
        //2. board
        this.gamingBoard = null;
        this.pzlPieces = [];
        // this.timeString = "00:00";
        // this.moves = 0;
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

        // let topContainer = document.createElement("div");
        // topContainer.classList.add("buttons-container");
        // this.topContainer = topContainer;

        // let bottomContainer = document.createElement("div");
        // bottomContainer.classList.add("frames-container");
        // this.bottomContainer = bottomContainer;

        //2. board
        let gamingBoard = document.createElement("div");
        gamingBoard.classList.add("game-board");
        this.gamingBoard = gamingBoard;

        //3. buttons
        let shuffleBtn = document.createElement("button");
        this.shuffleBtn = shuffleBtn;
        let stopBtn = document.createElement("button");
        this.stopBtn = stopBtn;
        let saveBtn = document.createElement("button");
        this.saveBtn = saveBtn;
        let resultsBtn = document.createElement("button");
        this.resultsBtn = resultsBtn;
        let soundBtn = document.createElement("button");  
        this.soundBtn = soundBtn;


        document.body.append(this.gameContainer);
        // this.gameContainer.append(topContainer);
        this.gameContainer.append(this.gamingBoard);
        // this.gameContainer.append(bottomContainer);
        
        this.play()
    }

    play() {
        this.createPieces();
    }

    createPieces() {
        for (let i = 0; i < 16; i++) {
            let pzlPiece = document.createElement("div");
            this.gamingBoard.append(pzlPiece);
            pzlPiece.classList.add("puzzle-piece");
            pzlPiece.innerText = i;
            this.pzlPieces.push(pzlPiece);
        }
    }
    // createPieces() {
    //     let values = new Array[16].fill(0).map((value, ind) => ind + 1);
    //     values.forEach(value => {
    //         let pzlPiece = document.createElement("div");
    //         pzlPiece.classList.add("puzzle-piece");
    //         pzlPiece.innerHTML = value;
    //         gamingBoard.append(pzlPiece);
    //         this.pzlPieces.push(pzlPiece);
    //     });
    // }
}
 

let gem = new Game();
gem.go();