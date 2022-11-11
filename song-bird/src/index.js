import './index.scss';
import Header from './components/header/index';
import UpperSection from './pages/game-page/section-01/index';
import GameSection from './pages/game-page/section-02/index';
import Footer from './components/footer/index';
import PlayAudio from './pages/game-page/section-02/audio-player';
import BirdsData from './pages/game-page/section-02/birds-data';


const body = document.getElementById('body');

body.append(Header);
body.append(UpperSection);
body.append(GameSection);
body.append(Footer);

//***REGULATE AUDIO - QUESTION***
const playIcon = document.getElementById("btn-play");
const audioRange = document.getElementById("qstn-audio-range");
const audioPlayed = document.getElementById("audio-time");
const audioTotal = document.getElementById("audio-total");
const volumeRange = document.getElementById("qstn-volume-range");
const audio = document.getElementById("qstn-audio");
const volumeIcon = document.getElementById("qstn-btn-volume");
PlayAudio(playIcon, audioRange, audioPlayed, audioTotal, volumeRange, audio, volumeIcon);

//***REGULATE AUDIO DESCRIPTION***
const playIconB = document.getElementById("bird-btn-play");
const audioRangeB = document.getElementById("bird-audio-range");
const audioPlayedB = document.getElementById("bird-audio-time");
const audioTotalB = document.getElementById("bird-audio-total");
const volumeRangeB = document.getElementById("bird-volume-range");
const audioB = document.getElementById("bird-audio");
const volumeIconB = document.getElementById("bird-btn-volume");
PlayAudio(playIconB, audioRangeB, audioPlayedB, audioTotalB, volumeRangeB, audioB, volumeIconB);

//***PLAYING CONSTs***
//question
const placeholder =  document.getElementById("qstn-name");
const qstnImage = document.getElementById("qstn-img");
//answers
const checkbox = document.getElementsByClassName("answers__item_input");
//bird card
const hiddenInfo = document.getElementById("bird-info");
const initialTxt = document.getElementById("bird-text-initial");
const currBirdImg = document.getElementById("bird-img");
const currBirdName = document.getElementById("bird-name");
const currBirdLatin = document.getElementById("bird-name-latin");
const currBirdAudio = document.getElementById("bird-audio");
const currBirdText = document.getElementById("bird-text");
//count score
const quizScore = document.getElementById("result-counter");
//next button
const nextBtn = document.getElementById("btn-next");


const birdsData = BirdsData;

class Quiz {
  constructor () {
    this.birdData = {};
    this.id = "";
    this.categories = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      fifth: 4,
      sixth: 5
    }
    this.category = 0;
    this.currBird = "";
    this.answersList = [];
    this.isRight = false;
    this.clicks = 0;
    this.score = 0;
    this.finish = false;
    this.tempTxt = null;
    this.tempImg = null;
  }

  go() {
    this.createQstn();
    this.listAnswers();
    this.checkAnswer();
    this.nextCaterogy();
  }

  createQstn() {
    let cat = this.category;
    let randomNum = Math.floor(Math.random() * 6);
    let currBird = birdsData[cat][randomNum];
    let currQstnData = {
      name: currBird.name,
      species: currBird.species,
      descr: currBird.description,
      image: currBird.image,
      audio: currBird.audio
    }

    this.birdData = currQstnData;
    this.currBird = currQstnData.name;
    this.tempImg = null;

    let qstnAudio = currQstnData.audio;
    audio.src = qstnAudio;
  }

  listAnswers() {
    let cat = this.category;
    let answers = birdsData[cat].map((value) => {
      return value.name;
    })
    this.answersList = answers;
    for (let i = 0; i < answers.length; i++) {
      let asteriscs =  document.getElementById(`bird-${i}`);
      let checkbox = document.getElementById(`${i}`);
      checkbox.value = answers[i];
      asteriscs.innerText = answers[i];
    }
  }

    //check user's input
    checkAnswer () {
      let currScore = this.score;
      let rightBird = this.currBird;
      for (let input of checkbox) {
        input.addEventListener("input", () => {
          this.clicks++;
          console.log(this.clicks);
          let answer = input.value;

          if (answer === rightBird) {
            input.classList.add("answer__correct");
            this.createDescription(input.id);
            this.revealRightAnswer(input.id);
            this.yesSound();
            audio.pause();
            this.isRight = true;
            this.pauseBoxes();
            this.countScore(currScore);
            this.nextCaterogy();
          } else if (this.isRight === false) {
            input.classList.add("answer__wrong");
            this.createDescription(input.id);
            this.wrongSound();
            this.isRight = false;
            this.countScore(currScore);
          }
        });
      }
    }
  
      createDescription (id) {
        currBirdText.classList.remove("hidden");
        hiddenInfo.classList.remove("hidden");
        initialTxt.classList.add("hidden");
        let cat = this.category;
        let bird = BirdsData[cat][id];
        currBirdImg.src = bird.image;
        currBirdName.innerText = bird.name;
        currBirdLatin.innerText =bird.species;
        currBirdAudio.src = bird.audio;
        currBirdText.innerText = bird.description;
    }

    revealRightAnswer(id) {
      let cat = this.category;
      let bird = BirdsData[cat][id];
      this.tempTxt = placeholder.innerText;
      this.tempImg = qstnImage.src;
      placeholder.innerText = bird.name;
      qstnImage.src = bird.image;
    }

    pauseBoxes() {
      if(this.isRight === true) {
        for (let input of checkbox) {
          input.addEventListener("input", () => {
            let id = input.id;
            this.createDescription (id);
          })
        }
      }
    }
  
    yesSound() {
      if (this.isRight === false) {
        let yesSound = new Audio("./assets/sounds/correct-answer.mp3");
        yesSound.play();
      }
    }
  
    wrongSound() {
      if (this.isRight === false) {
        let noSound = new Audio("./assets/sounds/wrong-answer.mp3");
        noSound.play();
      }  
    }

    countScore (score) {
      let maxTries = 6; 
      let clicks = this.clicks;
      let totalScore = maxTries - clicks;
      if (this.isRight === false && this.score === 0) {
        totalScore = 0;
      }

      if (maxTries === 0) {
        totalScore = 0;
      }

      this.score = score + totalScore;
      quizScore.innerText = this.score;
    }

    nextCaterogy() {
      if (this.isRight === false) {
        nextBtn.classList.add("disabled");
        nextBtn.disabled = true;
      } else {
        nextBtn.classList.remove("disabled");
        nextBtn.disabled = false;
        nextBtn.addEventListener("click", () => {
          this.category++;
          this.starterPack();
        })
      }
    }

    starterPack() {
      placeholder.innerText = this.tempTxt;
      qstnImage.src =  this.tempImg;
      currBirdText.classList.add("hidden");
      hiddenInfo.classList.add("hidden");
      initialTxt.classList.remove("hidden");
      for (let input of checkbox) {
        input.classList.remove("answer__correct");
        input.classList.remove("answer__wrong");
      }
      this.isRight = false;
      this.go();
    }

    changeCategory() {
      let cat = this.category;
      let prevCat = document.getElementById(`cat-${cat-1}`);
      const currCat = document.getElementById(`cat-${cat}`);
      prevCat.classList.remove("questions__category_current");
      currCat.classList.add("questions__category_current");
    }

}

let songBird = new Quiz;
songBird.go()

