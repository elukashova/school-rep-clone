import './index.scss';
import Header from './components/header/index';
import GameSection from './pages/game-page/index';
import Footer from './components/footer/index';
import ResultsPage from './pages/results-page/index';
import StartPage from './pages/start-page/index';
import PlayAudio from './pages/game-page/audio-player';
import BirdsData from './pages/game-page/birds-data';
import BirdsDataEN from './pages/game-page/birds-data-en';
import { translation } from './utils/english-translations';

const body = document.getElementById('body');

body.append(Header);
body.append(StartPage);
body.append(GameSection);
body.append(ResultsPage);
body.append(Footer);

//change language
const lgBtn = document.getElementById("menu-link-lg");

let lang = 'ru';
lgBtn.addEventListener("click", () => {
  if (lang === 'ru') {
    lang = 'en';
  } else {
    lang = 'ru';
  }

  switchLg(lang);
  translateBirds(lang);
  console.log(lang);
})

const switchLg = (lg) => {
  startBtn.innerText = translation[lg].startBtn;
  linkStart.innerText = translation[lg].linkStart;
  linkPlay.innerText = translation[lg].linkPlay;
  startTxt.innerHTML = translation[lg].startTxt;
  cat0.innerText = translation[lg].cat0;
  cat1.innerText = translation[lg].cat1;
  cat2.innerText = translation[lg].cat2;
  cat3.innerText = translation[lg].cat3;
  cat4.innerText = translation[lg].cat4;
  cat5.innerText = translation[lg].cat5;
  resultsTitle.innerText = translation[lg].resultsTitle;
  initialTxt.innerHTML= translation[lg].initialTxt;
  nextBtn.innerText = translation[lg].nextBtn;
  //congrats.innerText = translation[lg].congrats;
  //resultsText.innerText = translation[lg].resultsText;
  //resultsMax.innerText = translation[lg].resultsMax;
  //invitation.innerText = translation[lg].invitation;
  //resultsBtn.innerText = translation[lg].resultsBtn;
}

const translateBirds = (lg) => {
  let ids = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < ids.length; i++) {
    let currentBird = document.getElementById(`bird-${i}`);
    let checkbox = document.getElementById(`${i}`);
    let newBird;
    if (lg === 'en') {
    newBird = birdsDataEn[currCat][i];
    } else {
    newBird = birdsData[currCat][i];
    }

    if (currBirdName.innerText === currentBird.innerText) {
      currBirdImg.src = newBird.image;
      currBirdName.innerText = newBird.name;
      currBirdText.innerText = newBird.description;
    }

    if(placeholder.innerText === currentBird.innerText) {
      placeholder.innerText = newBird.name;
    }

    if(bird.name === currentBird.innerText) {
      bird.name = newBird.name;
    }

    currentBird.innerText = newBird.name;
    checkbox.value = newBird.name;
  }
}


const navLinks = document.querySelectorAll(".menu__item");
const sections = document.querySelectorAll(".section");
const start = document.querySelector(".start");
const game = document.querySelector(".questions");
const resultsPage = document.querySelector(".results");
const linkStart = document.getElementById("menu-link-start");
const linkPlay = document.getElementById("menu-link-play");
const startBtn = document.getElementById("start-btn");
const startTxt = document.getElementById("start-text");
const cat0 = document.getElementById("cat-0");
const cat1 = document.getElementById("cat-1");
const cat2 = document.getElementById("cat-2");
const cat3 = document.getElementById("cat-3");
const cat4 = document.getElementById("cat-4");
const cat5 = document.getElementById("cat-5");
const resultsTitle = document.getElementById("result-title");
// const congrats = document.getElementById("results-congrats");
// const resultsText = document.getElementById("results-text");
// const invitation = document.getElementById("invitation-qstn");
const results = document.getElementById("results-score");
const resultsCTA = document.getElementById("results-cta");
const resultsMax = document.getElementById("results-max");
const resultsBtn = document.getElementById("results-btn");


startBtn.addEventListener("click", () => {
    sections.forEach(section =>
      section.classList.add("hidden"));
    game.classList.remove("hidden");
    navLinks.forEach(link => 
      link.classList.remove("menu__link_active"));
    linkPlay.classList.add("menu__link_active");
  
    if (currScore != 0) {
      starterPack();
      game.classList.remove("hidden");
      currCat = 0;
      changeCategory(currCat);
      updateScore();
    }
})

linkPlay.addEventListener ("click", () => {
  sections.forEach(section =>
    section.classList.add("hidden"));
  game.classList.remove("hidden");
  navLinks.forEach(link => 
    link.classList.remove("menu__link_active"));
  linkPlay.classList.add("menu__link_active");

  if (currScore != 0) {
    starterPack();
    game.classList.remove("hidden");
    currCat = 0;
    changeCategory(currCat);
    updateScore();
  }

  // if (ResultsPage.parentElement === body) {
  //   body.removeChild(ResultsPage);
  // }
})


linkStart.addEventListener ("click", () => {
  sections.forEach(section =>
    section.classList.add("hidden"));
  start.classList.remove("hidden");
  navLinks.forEach(link => 
    link.classList.remove("menu__link_active"));
  linkStart.classList.add("menu__link_active");

  // if (ResultsPage.parentElement === body) {
  //   body.removeChild(ResultsPage);
  // }
})


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

const birdsDataEn = BirdsDataEN;
const birdsData = BirdsData;
let currCat = 0; //number of current category
let bird = {}; //container for current bird info
let rightAnswer = false;
let currScore = 0;
let clicks = 0;

//choosing a random bird to create answer
const chooseRandom = (cat) => {
  const num = Math.floor(Math.random() * 6);

  let currBird;
  if (lang === 'ru') {
    currBird = birdsData[cat][num]; //data of current question
  } else {
    currBird = birdsDataEn[cat][num]; //data of current question
  }

  bird = {
    name: currBird.name,
    species: currBird.species,
    descr: currBird.description,
    image: currBird.image,
    audio: currBird.audio
  }
  console.log(bird.name);
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
  let dataSet;
  if (lang === 'ru') {
    dataSet =  birdsData;
  } else {
    dataSet =  birdsDataEn;
  }

    let answers = dataSet[cat].map((value) => {
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
  let bird;
  if (lang === 'ru') {
    bird = birdsData[currCat][id];
  } else {
    bird = birdsDataEn[currCat][id];
  }
  currBirdImg.src = bird.image;
  currBirdName.innerText = bird.name;
  currBirdLatin.innerText = bird.species;
  currBirdAudio.src = bird.audio;
  currBirdText.innerText = bird.description;
}

//show the corrent answer in the quqestion box
const revealRightAnswer = (id) => {
  let bird;
  if(lang === 'ru') {
    bird = birdsData[currCat][id];
  } else {
    bird = birdsDataEn[currCat][id];
  }
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
  let yesSound = new Audio("assets/sounds/correct-answer.mp3");
  yesSound.play();
}

const noSound = () => {
  let noSound = new Audio("assets/sounds/wrong-answer.mp3");
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
}

nextBtn.addEventListener("click", () => {
  currCat = currCat + 1;
  starterPack();
  changeCategory(currCat);
})

//start the next category
const starterPack = () => {
  placeholder.innerText = "******";
  qstnImage.src =  "assets/img/hidden-bird.jpg";
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
}

//highlight the current category
const changeCategory = (cat) => {
  if (cat === 0) {
    let previous = document.getElementById(`cat-5`);
    let current = document.getElementById(`cat-${cat}`);
    previous.classList.remove("questions__category_current");
    current.classList.add("questions__category_current");
  } else {
    let previous = document.getElementById(`cat-${cat-1}`);
    let current = document.getElementById(`cat-${cat}`);
    previous.classList.remove("questions__category_current");
    current.classList.add("questions__category_current");
  }
  chooseRandom(currCat);
}

//ending the game
const gameOver = (cat) => {
  if (rightAnswer === true && cat === 5) {
    game.classList.add("hidden");
    resultsPage.classList.remove("hidden");
    //body.insertBefore(ResultsPage, Footer);
    linkPlay.classList.remove("menu__link_active");
    createResults(currScore);
  }
}

const createResults = (score) => {
  results.innerText = `${score}!`;
  if (score === 30) {
    resultsCTA.classList.add("hidden");
  } else {
    resultsMax.classList.add("hidden");
  }
}

resultsBtn.addEventListener("click", () => {
  resultsPage.classList.add("hidden");
  starterPack();
  game.classList.remove("hidden");
  currCat = 0;
  changeCategory(currCat);
  updateScore();
})

const updateScore = () => {
  if (currCat === 0) {
    currScore = 0;
    quizScore.innerText = currScore;
  }
}
