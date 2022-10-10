hamburger
const hamburger = document.getElementById("hamburger");
const mainMenu = document.getElementById ("links");
const backgr = document.getElementById("open-menu");

hamburger.onclick = function() {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
    backgr.classList.toggle("active");
}

backgr.onclick = function() {
    hamburger.classList.remove("active");
    mainMenu.classList.remove("active");
    backgr.classList.remove("active");
}

// //carousel pets

// const NEXT_RIGHT = document.querySelector("#next");
// const PREV_LEFT = document.querySelector("#prev");
// const CAROUSEL = document.querySelector("#scroll-animals");
// const ITEM_LEFT = document.querySelector("#left-items");
// const ITEM_RIGHT = document.querySelector("#right-items");

// const createCardTemplate = () => {
//     const card = document.createElement("div");
//     card.classList.add(".foto-card-container");
//     return card;
// };

// const moveLeft = () => {
//     CAROUSEL.classList.add("transition-left");
//     PREV_LEFT.removeEventListener("click", moveLeft);
//     NEXT_RIGHT.removeEventListener("click", moveRight);
// };

// const moveRight = () => {
//     CAROUSEL.classList.add("transition-right");
//     PREV_LEFT.removeEventListener("click", moveLeft);
//     NEXT_RIGHT.removeEventListener("click", moveRight);
// };

// PREV_LEFT.addEventListener("click", moveLeft);
// NEXT_RIGHT.addEventListener("click", moveRight);

// CAROUSEL.addEventListener("animationend", (animationEvent) => {
//     let itemNew;
//     if (animationEvent.animationName === "move-left") {
//         CAROUSEL.classList.remove("transition-left");
//         itemNew = ITEM_LEFT;
//         document.querySelector("#central-items").innerHTML = ITEM_LEFT.innerHTML;
//     } else {
//         CAROUSEL.classList.remove("transition-right");
//         itemNew = ITEM_RIGHT;
//         document.querySelector("#central-items").innerHTML = ITEM_RIGHT.innerHTML;
//     };

//     PREV_LEFT.addEventListener("click", moveLeft);
//     NEXT_RIGHT.addEventListener("click", moveRight);

// });

// const SOURCE_DATA = [
//     {
//       name: "giant-panda",
//       title: "GIANT PANDAS",
//       description: "Native to Southwest China",
//       type: "grass",
//     },
//     {
//       name: "sloth",
//       title: "TWO-TOED SLOTH",
//       description: "Mesoamerica, South America",
//       type: "grass",
//     },
//     {
//       name: "eagles",
//       title: "EAGLES",
//       description: "Native to South America",
//       type: "meat",
//     },
//     {
//       name: "cheet",
//       title: "CHEETAHS",
//       description: "Native to Africa",
//       type: "meat",
//     },
//     {
//       name: "gorilla",
//       title: "GORILLAS",
//       description: "Native to Congo",
//       type: "grass",
//     },
//     {
//       name: "alligator",
//       title: "ALLIGATORS",
//       description: "Native to Southeastern U. S.",
//       type: "meat",
//     }
//   ];
  
//   const uniqueIndex = () => {
//       return Math.floor(Math.random()*SOURCE_DATA.length);
//   }
  
//   const UNIQUE_CARDS = [];
//   const MAX_CARDS_SET = 6;
  
//   while (UNIQUE_CARDS.length <= MAX_CARDS_SET) {
//       const INDEX = uniqueIndex();
//       if (!UNIQUE_CARDS.includes(INDEX)) {       
//           UNIQUE_CARDS.push(INDEX);
//       }
//   }
  
//   const animalIcon = {
//     meat: "meet-fish_icon",
//     grass: "banana-bamboo"
//   }
  
//   const createCard = (animalData) => {
//     return `<div class="foto-card-container" id="card5-hid">
//   <img class="img-card" src="../../assets/images/${animalData.name}.jpg">
//   <div class="box-bottom">
//   <div class="cards-text">
//   <p class="card-title">${animalData.title}</p>
//   <p class="card-descr">${animalData.description}</p>
//   </div>
//   <div class="icon-card" id="icon-card2">
//   <img src="../../assets/icons/${animalIcon[animalData.type]}.svg">
//   </div>
//   </div>
//   </div>`
//   }
  
//   const CARD = createCard(SOURCE_DATA[0]);
  
//   const root = document.querySelector("#carousel")
//   // generate html 
//   root.insertAdjacentHTML("beforebegin", CARD);







// const IMAGES = document.querySelectorAll(".img-card");
// const TITLE = document.querySelectorAll(".card-title");
// const DESCR = document.querySelectorAll(".card-descr");
// const ICON = document.querySelectorAll(".icon-card");

// const shufflImg = Array.from(IMAGES).sort(() => (Math.random() > .5) ? 1 : -1);

        // const card1 = createCardTemplate ();
        // card1.img.appendChild(shufflImg());

        // const card2 = document.createElement("div");
        // card2.classList.add(".foto-card-container");
        

        // const card3 = document.createElement("div");
        // card3.classList.add(".foto-card-container");

        // const card4 = document.createElement("div");
        // card4.classList.add(".foto-card-container");

        // const card5 = document.createElement("div");
        // card5.classList.add(".foto-card-container");

        // const card6 = document.createElement("div");
        // card6.classList.add(".foto-card-container");

        // itemNew.innerHTML = "";
        // itemNew.appendChild(card1);
        // itemNew.appendChild(card2);
        // itemNew.appendChild(card3);
        // itemNew.appendChild(card4);
        // itemNew.appendChild(card5);
        // itemNew.appendChild(card6);

        // let leftElements = document.querySelectorAll("#left-items")
        // const fragment = document.createDocumentFragment();
        // const shuffledList = Array.from(leftElements).sort(() => (Math.random() > .5) ? 1 : -1);
        // for (let item of shuffledList) {
        //     fragment.appendChild(item);
        // }
        // document.querySelector('.carousel.shuffle').appendChild(frag);

        // function random(leftElements){
        //     leftElements.children().sort(function(){
        //         return Math.round(Math.random()) - 0.5;
        //     }).each(function(){
        //       $(this).appendTo(leftElements);
        //     });
        //   }

        // const card1 = document.createElement("div");
        // card1.in

        // card1.classList.add(".foto-card-container");


    // } else {
    //     CAROUSEL.classList.remove("transition-right");
    // };
// })


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
const backgr2 = document.getElementById("open-menu");

review1.onclick = function() {
    popup1.classList.toggle("active");
    backgr2.classList.toggle("active");
}

review2.onclick = function() {
    popup2.classList.toggle("active");
    backgr2.classList.toggle("active");
}

review3.onclick = function() {
    popup3.classList.toggle("active");
    backgr2.classList.toggle("active");
}

closePopup1.onclick = function() {
    popup1.classList.remove("active");
    backgr2.classList.remove("active");
}

closePopup2.onclick = function() {
    popup2.classList.remove("active");
    backgr2.classList.remove("active");
}

closePopup3.onclick = function() {
    popup3.classList.remove("active");
    backgr2.classList.remove("active");
}

backgr2.onclick = function() {
    popup1.classList.remove("active");
    popup2.classList.remove("active");
    popup3.classList.remove("active");
    backgr2.classList.remove("active");
}





