//hamburger
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

//input range
const input = document.getElementsByName("amount");
const preview = document.querySelector(".choice");
const btn25 = document.querySelector("#rd8");
const btn50 = document.querySelector("#rd7");
const btn100 = document.querySelector("#rd6");
const btn250 = document.querySelector("#rd5");
const btn500 = document.querySelector("#rd4");
const btn1000 = document.querySelector("#rd3");
const btn2000 = document.querySelector("#rd2");
const btn5000 = document.querySelector("#rd1");

let checkedBtn = (document.getElementsByName("amount").checked);

preview.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }
}

preview.addEventListener('change',function() {
    this.setAttribute('value',this.value);
    if (this.value == 25) {
        btn25.checked = true;
    } else if (this.value == 50) {
        btn50.checked = true;
    } else if (this.value == 100) {
        btn100.checked == true;
    } else if (this.value == 250) {
        btn250.checked = true;
    } else if (this.value == 500) {
        btn500.checked = true;
    } else if (this.value == 1000) {
        btn1000.checked = true;
    } else if (this.value == 2000) {
        btn2000.checked = true;
    } else if (this.value == 5000) {
        btn5000.checked = true;
    }
})

btn25.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn50.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn100.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn250.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn500.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn1000.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn2000.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

btn5000.addEventListener('change',function() {
    preview.setAttribute('value', this.value);
})

// checkedBtn.addEventListener('change',function() {
//     if (btn25.checked = true) {
//         preview.setAttribute('value', this.value);
//     } else if (btn50.checked = true) {
//         preview.value == 50;
//     } else if (btn100.checked = true) {
//         preview.value == 100;
//     } else if (btn250.checked = true) {
//         preview.value == 500;
//     } else if (btn500.checked = true) {
//         preview.value == 500;
//     } else if (btn1000.checked = true) {
//         preview.value == 1000;
//     } else if (btn2000.checked = true) {
//         preview.value == 2000;
//     } else if (btn5000.checked = true) {
//         preview.value == 5000;
//     })




// const appendPlaceholder = () => {
//     preview.setAttribute ("value", checkedBtn.value);
// }

// preview.addEventListener('change',function() {
//     this.setAttribute('value',this.value);
// })

// const removePlaceholder = () => {
//     preview.removeAttribute ("placeholder");
// }

// input.addEventListener('click', function() {
//     appendPlaceholder();
// });