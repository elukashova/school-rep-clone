import './index.scss';
import Header from './components/header/index';
import GamePage from './pages/game-page/index';
import Footer from './components/footer/index';
import ResultsPage from './pages/results-page/index';
import GalleryPage from './pages/gallery-page/index';
import StartPage from './pages/start-page/index';
import PlayAudio from './pages/game-page/audio-player';
import BirdsData from './pages/game-page/birds-data';
import BirdsDataEN from './pages/game-page/birds-data-en';
import { translation } from './utils/english-translations';

const body = document.getElementById('body');

body.append(Header);
//body.append(GalleryPage);
body.append(StartPage);
body.append(Footer);


//***LANGUAGE SWITCHING***//
const lgBtn = document.getElementById("menu-link-lg");
let lang = 'ru';

lgBtn.addEventListener("click", () => {
  if (lang === 'ru') {
    lang = 'en';
  } else {
    lang = 'ru';
  }

  switchLg(lang);

  if (GamePage.parentElement === body) {
    translateBirds(lang);
  }

})

//translate elements
const linkStart = document.getElementById("menu-link-start");
const linkPlay = document.getElementById("menu-link-play");
const linkGallery = document.getElementById("menu-link-gallery");
const navLinks = document.querySelectorAll(".menu__item");

const switchLg = (lg) => {
  linkStart.innerText = translation[lg].linkStart;
  linkPlay.innerText = translation[lg].linkPlay;

  if (StartPage.parentElement === body) {
    const startBtn = document.getElementById("start-btn");
    const startTxt = document.getElementById("start-text");

    startBtn.innerText = translation[lg].startBtn;
    startTxt.innerHTML = translation[lg].startTxt;
  }

  if (GamePage.parentElement === body) {
    const cat0 = document.getElementById("cat-0");
    const cat1 = document.getElementById("cat-1");
    const cat2 = document.getElementById("cat-2");
    const cat3 = document.getElementById("cat-3");
    const cat4 = document.getElementById("cat-4");
    const cat5 = document.getElementById("cat-5");
    const resultsTitle = document.getElementById("result-title");
    const initialTxt = document.getElementById("bird-text-initial");
    const nextBtn = document.getElementById("btn-next");

    cat0.innerText = translation[lg].cat0;
    cat1.innerText = translation[lg].cat1;
    cat2.innerText = translation[lg].cat2;
    cat3.innerText = translation[lg].cat3;
    cat4.innerText = translation[lg].cat4;
    cat5.innerText = translation[lg].cat5;
    initialTxt.innerHTML= translation[lg].initialTxt;
    resultsTitle.innerText = translation[lg].resultsTitle;
    nextBtn.innerText = translation[lg].nextBtn;
  }

  if (ResultsPage.parentElement === body) {
    const congrats = document.getElementById("results-congrats");
    const resultsText = document.getElementById("results-text");
    const invitation = document.getElementById("invitation-qstn");
    const resultsMax = document.getElementById("results-max");
    const resultsBtn = document.getElementById("results-btn");

    congrats.innerText = translation[lg].congrats;
    resultsText.textContent = translation[lg].resultsText;
    resultsMax.innerText = translation[lg].resultsMax;
    invitation.innerText = translation[lg].invitation;
    resultsBtn.innerText = translation[lg].resultsBtn;
  }
}

const translateBirds = (lg) => {
  const currBirdText = document.getElementById("bird-text");
  const currBirdImg = document.getElementById("bird-img");
  const currBirdName = document.getElementById("bird-name");
  const placeholder =  document.getElementById("qstn-name");

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

//***NAV BAR AND START PAGE LISTENERS***//
document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id == "start-btn") {
    replacePages(GamePage, StartPage, ResultsPage, GalleryPage);
    createAudio();
    createVolume();
    chooseRandom(currCat);
    activateLink(linkPlay);
  
    if (currScore != 0) {
      starterPack();
      currCat = 0;
      changeCategory(currCat);
      updateScore();
    }
  }
})

linkPlay.addEventListener ("click", () => {
  replacePages(GamePage, StartPage, ResultsPage, GalleryPage);
  activateLink(linkPlay);

  if (currScore != 0) {
    starterPack();
    currCat = 0;
    changeCategory(currCat);
    updateScore();
  }
})

linkStart.addEventListener ("click", () => {
  replacePages(StartPage, GamePage, ResultsPage, GalleryPage);
  activateLink(linkStart);
})

linkGallery.addEventListener ("click", () => {
  replacePages(GalleryPage, StartPage, GamePage, ResultsPage);
  activateLink(linkGallery);
})

  const replacePages = (newP, old1, old2, old3) => {
    [old1, old2, old3].forEach(page => {
      if(page.parentElement === body) {
        body.replaceChild(newP, page);
        switchLg(lang);
      }
    })
  }

  const activateLink = (l) => {
    navLinks.forEach(link => 
      link.classList.remove("menu__link_active"));
    l.classList.add("menu__link_active");
  }

//***AUDIO PLAYER - QUESTION***//
const createAudio = () => {
  const playIcon = document.getElementById("btn-play");
  const audioRange = document.getElementById("qstn-audio-range");
  const audioPlayed = document.getElementById("audio-time");
  const audioTotal = document.getElementById("audio-total");
  const volumeRange = document.getElementById("qstn-volume-range");
  const audio = document.getElementById("qstn-audio");
  const volumeIcon = document.getElementById("qstn-btn-volume");
  PlayAudio(playIcon, audioRange, audioPlayed, audioTotal, volumeRange, audio, volumeIcon);
}


//***AUDIO PLAYER - DESCRIPTION***//
const createVolume = () => {
  const playIconB = document.getElementById("bird-btn-play");
  const audioRangeB = document.getElementById("bird-audio-range");
  const audioPlayedB = document.getElementById("bird-audio-time");
  const audioTotalB = document.getElementById("bird-audio-total");
  const volumeRangeB = document.getElementById("bird-volume-range");
  const audioB = document.getElementById("bird-audio");
  const volumeIconB = document.getElementById("bird-btn-volume");
  PlayAudio(playIconB, audioRangeB, audioPlayedB, audioTotalB, volumeRangeB, audioB, volumeIconB);
}


//***PLAYING***//
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
  const audio = document.getElementById("qstn-audio");
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
      let check = document.getElementById(`${i}`);
      check.value = answers[i];
      labels.innerText = answers[i];
  }
}

//chech the user's input
const checkAnswer = (input, box) => {
  const audio = document.getElementById("qstn-audio");
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
    if (currCat != 5) {
      nextCategory();
    }
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
  const currBirdText = document.getElementById("bird-text");
  const hiddenInfo = document.getElementById("bird-info");
  const initialTxt = document.getElementById("bird-text-initial");
  const currBirdImg = document.getElementById("bird-img");
  const currBirdName = document.getElementById("bird-name");
  const currBirdLatin = document.getElementById("bird-name-latin");
  const currBirdAudio = document.getElementById("bird-audio");
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
  const placeholder =  document.getElementById("qstn-name");
  const qstnImage = document.getElementById("qstn-img");
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
document.addEventListener("input", (e) => {
  let target = e.target;
  const checkbox = document.querySelectorAll(".answers__item_input");
  for (let box of checkbox) {
    if (target == box) {
        if (rightAnswer === false) {
          clicks = clicks + 1;
        } 
        let input = target.value;
        checkAnswer(input, target);
      }
    }
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
    const quizScore = document.getElementById("result-counter");
    let maxTries = 6;
    let roundScore = maxTries - clicks;
    currScore = actualScore + roundScore;
    quizScore.innerText = currScore;
  }
}

const countScoreWrong = (actualScore) => {
  const quizScore = document.getElementById("result-counter");
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
const nextCategory =() => {
    const nextBtn = document.getElementById("btn-next");
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
}

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id == "btn-next") {
    currCat = currCat + 1;
    starterPack();
    changeCategory(currCat);
  }
})

//start the next category
const starterPack = () => {
  const audio = document.getElementById("qstn-audio");
  const nextBtn = document.getElementById("btn-next");
  const placeholder =  document.getElementById("qstn-name");
  const qstnImage = document.getElementById("qstn-img");
  const currBirdText = document.getElementById("bird-text");
  const hiddenInfo = document.getElementById("bird-info");
  const initialTxt = document.getElementById("bird-text-initial");
  const checkbox = document.querySelectorAll(".answers__item_input");
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
  const linkPlay = document.getElementById("menu-link-play");
  if (rightAnswer === true && cat === 5) {
    body.replaceChild(ResultsPage, GamePage);
    switchLg(lang);
    linkPlay.classList.remove("menu__link_active");
    createResults(currScore);
  }
}

//reveal results
const createResults = (score) => {
  const resultsCTA = document.getElementById("results-cta");
  const resultsMax = document.getElementById("results-max");
  const results = document.getElementById("results-score");
  results.innerText = `${score}!`;
  if (score === 30) {
    resultsCTA.classList.add("hidden");
  } else {
    resultsMax.classList.add("hidden");
  }
}

//event listener for starting over
document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id == "results-btn") {
    body.replaceChild(GamePage, ResultsPage);
    starterPack();
    currCat = 0;
    changeCategory(currCat);
    updateScore();
  }
})

const updateScore = () => {
  const quizScore = document.getElementById("result-counter");
  if (currCat === 0) {
    currScore = 0;
    quizScore.innerText = currScore;
  }
}
