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

//***PLAYING CONSTS***
const checkbox = document.getElementsByClassName("answers__item_input");

//bird card
const currBirdImg = document.getElementById("bird-img");
const currBirdName = document.getElementById("bird-name");
const currBirdLatin = document.getElementById("bird-name-latin");
const currBirdAudio = document.getElementById("bird-audio");
const currBirdText = document.getElementById("bird-text");



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
    this.category = this.categories.first;
    this.currBird = "";
    this.answersList = [];
    //this.answerTry = "";
    this.isRight = false;
    this.count = 0;
    this.clicks = 0;
    this.score = 0;
    this.finish = false;
  }

  go() {
    this.createQstn();
    this.listAnswers();
    this.checkAnswer();
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
      let placeholder =  document.getElementById(`bird-${i}`);
      let checkbox = document.getElementById(`${i}`);
      checkbox.value = answers[i];
      placeholder.innerText = answers[i];
      if(answers[i] === this.birdData.name) {
        checkbox.classList.add("answer__correct");
      }
    }
  }

    //check user's input
    checkAnswer () {
      let rightBird = this.currBird;
      for (let input of checkbox) {
        input.addEventListener("input", () => {
          let answer = input.value;
          if (answer === rightBird) {
            this.createDescription(input.id)
            this.yesSound();
            audio.pause();
          } else {
            this.createDescription(input.id)
            this.wrongSound();
          }
        });
      }
    }
  
      createDescription (id) {
        let cat = this.category;
        let bird = BirdsData[cat][id];
        currBirdImg.src = bird.image;
        currBirdName.innerText = bird.name;
        currBirdLatin.innerText =bird.species;
        currBirdAudio.src = bird.audio;
        currBirdText.innerText = bird.description;
    }
  
    yesSound() {
      let yesSound = new Audio("./assets/sounds/correct-answer.mp3");
      yesSound.play();
    }
  
    wrongSound() {
      let yesSound = new Audio("./assets/sounds/wrong-answer.mp3");
      yesSound.play();
    }
  
}

let songBird = new Quiz;
songBird.go()

