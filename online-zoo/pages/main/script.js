//HAMBURGER
const hamburger = document.querySelector("#hamburger");
const mainMenu = document.querySelector("#links");
const backgr = document.querySelector("#open-menu");

hamburger.onclick = function() {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
    backgr.classList.toggle("active");
}

//CAROUSEL PETS
const SOURCE_DATA = [
  {
    name: 'giant-panda',
    title: 'GIANT PANDAS',
    description: 'Native to Southwest China',
    type: 'grass',
  },
  {
    name: 'sloth',
    title: 'TWO-TOED SLOTH',
    description: 'Mesoamerica, South America',
    type: 'grass',
  },
  {
    name: 'eagles',
    title: 'EAGLES',
    description: 'Native to South America',
    type: 'meat',
  },
  {
    name: 'cheet',
    title: 'CHEETAHS',
    description: 'Native to Africa',
    type: 'meat',
  },
  {
    name: 'gorilla',
    title: 'GORILLAS',
    description: 'Native to Congo',
    type: 'grass',
  },
  {
    name: 'alligator',
    title: 'ALLIGATORS',
    description: 'Native to Southeastern U. S.',
    type: 'meat',
  },
  {
    name: 'koala',
    title: 'KOALA',
    description: 'Native to Australia',
    type: 'grass',
  },
  {
    name: 'elephant',
    title: 'ELEPHANT',
    description: 'Native to Africa',
    type: 'grass',
  },
  {
    name: 'zubr',
    title: 'ZUBR',
    description: 'Native to Belarus',
    type: 'grass',
  },
  {
    name: 'giraffe',
    title: 'GIRAFFE',
    description: 'Native to Africa',
    type: 'grass',
  },
  {
    name: 'pantera',
    title: 'PANTERA',
    description: 'Native to Asia',
    type: 'meat',
  },
  {
    name: 'lion',
    title: 'LION',
    description: 'Native to Africa',
    type: 'meat',
  },
  {
    name: 'seal',
    title: 'SEAL',
    description: 'Native to the Arctic',
    type: 'meat',
  },
  {
    name: 'alpaca',
    title: 'ALPACA',
    description: 'Native to Peru',
    type: 'grass',
  },
  {
    name: 'brown-bear',
    title: 'BROWN BEAR',
    description: 'Native to Eurasia',
    type: 'meat',
  },
  {
    name: 'lemur',
    title: 'LEMUR',
    description: 'Native to Madagaskar',
    type: 'grass',
  },
  {
    name: 'rhinos',
    title: 'RHINOS',
    description: 'Native to Africa',
    type: 'grass',
  },
];

const ANIMAL_ICON = {
  meat: 'meet-fish_icon',
  grass: 'banana-bamboo_icon',
};

const MAX_CARDS_SET = 6;
const UNIQUE_CARDS = [];

const getRandomIndex = () => {
  return Math.floor(Math.random() * SOURCE_DATA.length);
};

const fillUniqCards = () => {
  UNIQUE_CARDS.length = 0;

  while (UNIQUE_CARDS.length < MAX_CARDS_SET) {
    const INDEX = getRandomIndex();
    if (!UNIQUE_CARDS.includes(INDEX)) {
      UNIQUE_CARDS.push(INDEX);
    }
  }
};

const createCard = (animalData) => {
  return `
    <div class="foto-card-container">
      <img class="img-card" src="../../assets/images/${animalData.name}.jpg">
      <div class="box-bottom">
        <div class="cards-text">
          <p class="card-title">${animalData.title}</p>
          <p class="card-descr">${animalData.description}</p>
        </div>
        <div class="icon-card" id="icon-card2">
          <img src="../../assets/icons/${ANIMAL_ICON[animalData.type]}.svg">
        </div>
      </div>
    </div>
  `;
};

const rightBtn = document.querySelector('#next');
const leftBtn = document.querySelector('#prev');
const root = document.querySelector('.scroll-animals');

const createCards = (elem) => {
  fillUniqCards();
  const result = [];
  for (let i = 0; i < UNIQUE_CARDS.length; i++) {
    let index = UNIQUE_CARDS[i];
    const CARD = createCard(SOURCE_DATA[index]);
    result.push(CARD);
  }
  return elem.insertAdjacentHTML('afterbegin', result.join(''));
};

function generateNewItems(side) {
  const wrapper = document.createElement('div');
  wrapper.className = side === 'right' ? 'js-next items' : 'js-prev items';
  createCards(wrapper);
  side === 'right' ? root.append(wrapper) : root.prepend(wrapper);
}

rightBtn.addEventListener('click', () => {
  generateNewItems('right');
  const currentEl = document.querySelector('.current-items');
  const nextElClassList = document.querySelector('.js-next').classList;
  nextElClassList.add('transition-right');

  setTimeout(() => {
    nextElClassList.remove('transition-right');
    root.removeChild(currentEl);
    nextElClassList.add('current-items');
    nextElClassList.remove('js-next');
  }, 1000);
});

leftBtn.addEventListener('click', () => {
    generateNewItems('left');
    const currentEl = document.querySelector('.current-items');
    const nextElClassList = document.querySelector('.js-prev').classList;
    nextElClassList.add('transition-left');

  setTimeout(() => {
    nextElClassList.remove('transition-left');
    root.removeChild(currentEl);
    nextElClassList.add('current-items');
    nextElClassList.remove('js-prev');
  }, 1000);

});



//carousel testimonials
const input = document.querySelector("#scrollbar");
const reviewOne = document.querySelector("#review-1");
const reviewTwo = document.querySelector("#review-2");
const reviewThree = document.querySelector("#review-3");
const reviewFour = document.querySelector("#review-4");
const reviewFive = document.querySelector("#review-5-true");
const reviewSix = document.querySelector("#review-6");
const reviewSeven = document.querySelector("#review-7");
const reviewEight = document.querySelector("#review-8");
const reviewNine = document.querySelector("#review-9");
const reviewTen = document.querySelector("#review-10");
const reviewEleven = document.querySelector("#review-11");

input.addEventListener('change',function() {
    this.setAttribute('value',this.value);
})

input.addEventListener('input',function() {
    if (input.value == 0) {
        reviewOne.style.display = 'block';
        reviewTwo.style.display = 'block';
        reviewThree.style.display = 'block';
        reviewFour.style.display = 'block';
        reviewFive.style.display = 'none';
        reviewSix.style.display = 'none';
        reviewSeven.style.display = 'none';
        reviewEight.style.display = 'none';
        reviewNine.style.display = 'none';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    } else if (input.value == 1) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'block';
        reviewThree.style.display = 'block';
        reviewFour.style.display = 'block';
        reviewFive.style.display = 'block';
        reviewSix.style.display = 'none';
        reviewSeven.style.display = 'none';
        reviewEight.style.display = 'none';
        reviewNine.style.display = 'none';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    } else if (input.value == 2) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'block';
        reviewFour.style.display = 'block';
        reviewFive.style.display = 'block';
        reviewSix.style.display = 'block';
        reviewSeven.style.display = 'none';
        reviewEight.style.display = 'none';
        reviewNine.style.display = 'none';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    } else if (input.value == 3) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'none';
        reviewFour.style.display = 'block';
        reviewFive.style.display = 'block';
        reviewSix.style.display = 'block';
        reviewSeven.style.display = 'block';
        reviewEight.style.display = 'none';
        reviewNine.style.display = 'none';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    } else if (input.value == 4) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'none';
        reviewFour.style.display = 'none';
        reviewFive.style.display = 'block';
        reviewSix.style.display = 'block';
        reviewSeven.style.display = 'block';
        reviewEight.style.display = 'block';
        reviewNine.style.display = 'none';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    } else if (input.value == 5) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'none';
        reviewFour.style.display = 'none';
        reviewFive.style.display = 'none';
        reviewSix.style.display = 'block';
        reviewSeven.style.display = 'block';
        reviewEight.style.display = 'block';
        reviewNine.style.display = 'block';
        reviewTen.style.display = 'none';
        reviewEleven.style.display = 'none';
    }  else if (input.value == 6) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'none';
        reviewFour.style.display = 'none';
        reviewFive.style.display = 'none';
        reviewSix.style.display = 'none';
        reviewSeven.style.display = 'block';
        reviewEight.style.display = 'block';
        reviewNine.style.display = 'block';
        reviewTen.style.display = 'block';
        reviewEleven.style.display = 'none';
    } else if (input.value == 7) {
        reviewOne.style.display = 'none';
        reviewTwo.style.display = 'none';
        reviewThree.style.display = 'none';
        reviewFour.style.display = 'none';
        reviewFive.style.display = 'none';
        reviewSix.style.display = 'none';
        reviewSeven.style.display = 'none';
        reviewEight.style.display = 'block';
        reviewNine.style.display = 'block';
        reviewTen.style.display = 'block';
        reviewEleven.style.display = 'block';
    }
})

//popup testimonials
const popup1 = document.querySelector("#popup-1");
const popup2 = document.querySelector("#popup-2");
const popup3 = document.querySelector("#popup-3");
const popups = document.querySelector(".popup");

const review1 = document.querySelector("#review-1");
const review2 = document.querySelector("#review-2");
const review3 = document.querySelector("#review-3");

const closePopup1 = document.querySelector("#x-icon1");
const closePopup2 = document.querySelector("#x-icon2");
const closePopup3 = document.querySelector("#x-icon3");

review1.onclick = function() {
    popup1.classList.toggle("active");
    backgr.classList.toggle("active");
}

review2.onclick = function() {
    popup2.classList.toggle("active");
    backgr.classList.toggle("active");
}

review3.onclick = function() {
    popup3.classList.toggle("active");
    backgr.classList.toggle("active");
}

closePopup1.onclick = function() {
    popup1.classList.remove("active");
    backgr.classList.remove("active");
}

closePopup2.onclick = function() {
    popup2.classList.remove("active");
    backgr.classList.remove("active");
}

closePopup3.onclick = function() {
    popup3.classList.remove("active");
    backgr.classList.remove("active");
}

backgr.onclick = function() {
    popup1.classList.remove("active");
    popup2.classList.remove("active");
    popup3.classList.remove("active");
    hamburger.classList.remove("active");
    mainMenu.classList.remove("active");
    backgr.classList.remove("active");
}





