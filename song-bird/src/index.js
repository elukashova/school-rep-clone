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
const checkbox = document.querySelectorAll(".answers__item_input");
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

window.addEventListener("load", () => {
  chooseRandom(currCat);
})

const birdsData = BirdsData;
let currCat = 0; //number of current category
let bird = {}; //container for current bird info
let rightAnswer = false;
let currScore = 0;
let clicks = 0;

//choosing a random bird to create answer
const chooseRandom = (cat) => {
  const num = Math.floor(Math.random() * 6);
  const currBird = birdsData[cat][num]; //data of current question
  bird = {
    name: currBird.name,
    species: currBird.species,
    descr: currBird.description,
    image: currBird.image,
    audio: currBird.audio
  }
  createQstn();
  listAnswers (cat);
}

//create the current question
const createQstn = () => {
  let qstnAudio = bird.audio;
  audio.src = qstnAudio;
}

//create the answers list
const listAnswers = (cat) => {
    let answers = birdsData[cat].map((value) => {
      return value.name;
    })
    for (let i = 0; i < answers.length; i++) {
      let labels =  document.getElementById(`bird-${i}`);
      let checkbox = document.getElementById(`${i}`);
      checkbox.value = answers[i];
      labels.innerText = answers[i];
  }
}

//chech the user's input
const checkAnswer = (input, box) => {
  let answer = input;
  if (answer === bird.name && rightAnswer === false) {
    box.classList.add("answer__correct");
    yesSound();
    createDescription(box.id);
    revealRightAnswer(box.id);
    audio.pause();
    countScoreRight(currScore);
    rightAnswer = true;
    gameOver(currCat);
    nextCaterogy();
  } else if (answer != bird.name && rightAnswer === false) {
    box.classList.add("answer__wrong");
    createDescription(box.id);
    noSound();
    countScoreWrong(currScore);
  } else if (rightAnswer === true) {
    createDescription(box.id);
  }
}

//show description on input
const createDescription = (id) => {
  currBirdText.classList.remove("hidden");
  hiddenInfo.classList.remove("hidden");
  initialTxt.classList.add("hidden");
  let bird = birdsData[currCat][id];
  currBirdImg.src = bird.image;
  currBirdName.innerText = bird.name;
  currBirdLatin.innerText = bird.species;
  currBirdAudio.src = bird.audio;
  currBirdText.innerText = bird.description;
}

//show the corrent answer in the quqestion box
const revealRightAnswer = (id) => {
  let bird = birdsData[currCat][id];
  placeholder.innerText = bird.name;
  qstnImage.src = bird.image;
}

//add event listener to checkboxes
checkbox.forEach(box => {
  box.addEventListener("input", () => {
    if (rightAnswer === false) {
      clicks = clicks + 1;
    } 
    let input = box.value;
    checkAnswer(input, box);
  })
})

//add ui sounds to user's input
const yesSound = () => {
  let yesSound = new Audio("./assets/sounds/correct-answer.mp3");
  yesSound.play();
}

const noSound = () => {
  let noSound = new Audio("./assets/sounds/wrong-answer.mp3");
  noSound.play();
}

//count the score
const countScoreRight = (actualScore) => {
  if (rightAnswer === false) {
    let maxTries = 6;
    let roundScore = maxTries - clicks;
    currScore = actualScore + roundScore;
    quizScore.innerText = currScore;
  }
}

const countScoreWrong = (actualScore) => {
  if (rightAnswer === false) {
    actualScore = actualScore - 1;
    if (actualScore < 0) {
      actualScore = 0;
    }
    currScore = actualScore;
    quizScore.innerText = currScore;
  }
}

//unblock the next button
const nextCaterogy =() => {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
    currCat = currCat + 1;
    nextBtn.addEventListener("click", () => {
    starterPack();
    changeCategory(currCat);
    })
}

//start the next category
const starterPack = () => {
  placeholder.innerText = "******";
  qstnImage.src =  "../../../assets/img/hidden-bird.jpg";
  currBirdText.classList.add("hidden");
  hiddenInfo.classList.add("hidden");
  initialTxt.classList.remove("hidden");
  for (let input of checkbox) {
    input.classList.remove("answer__correct");
    input.classList.remove("answer__wrong");
  }
  audio.src = "#";
  rightAnswer = false;
  clicks = 0;
  nextBtn.classList.add("disabled");
  nextBtn.disabled = true;
  chooseRandom(currCat);
}

//highlight the current category
const changeCategory = (cat) => {
  let previous = document.getElementById(`cat-${cat-1}`);
  let current = document.getElementById(`cat-${cat}`);
  previous.classList.remove("questions__category_current");
  current.classList.add("questions__category_current");
}

//ending the game
const gameOver = (cat) => {
  if (rightAnswer === true && cat === 5) {
    console.log("yeah!")
  }
}

