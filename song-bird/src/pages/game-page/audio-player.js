export default function playAudio(playBtn, aRange, aPlayed, aTotal, vRange, a, volBtn, sounds) {

  let isPlaying = false;
//play audio
playBtn.addEventListener("click", () => {
    if (playBtn.id != "btn-play" && playBtn.id != "bird-btn-play") {
      if(!isPlaying) {
        pauseSounds(sounds);
        playAudio(a);
      } else {
        pauseAudio(a);
      } 
    } else {
      if(!isPlaying) {
        playAudio(a);
      } else {
        pauseAudio(a);
      } 
    }
})

async function playAudio(a) {
  try {
    await a.play();
  } catch (err) {
    console.log(err);
  }
}

const pauseAudio = (a) => {
  isPlaying = false;
  a.pause();
}

//change play button
a.addEventListener("play", () => {
  playBtn.src = "assets/icons/pause-btn.svg";
  isPlaying = true;
})
a.addEventListener("pause", () => {
  playBtn.src = "assets/icons/play-btn.svg";
  isPlaying = false;
})

//on audio end
a.addEventListener("ended", () => {
  a.currentTime = 0;
})

//show progress
const showProgress = (input) => {
  if (input === aRange) {
    aRange.style.setProperty("--progress-width", aRange.value / aRange.max * 100 + '%');
  } else {
    vRange.style.setProperty("--progress-width", vRange.value / vRange.max * 100 + '%');
  }
}

//calculate time
const calcTime = (secs) => {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  const finalS = s < 10 ? `0${s}` : `${s}`;
  return `${m}:${finalS}`;
}

a.addEventListener ("loadeddata", () => {
  showProgress(aRange);
})

//track time
a.addEventListener ("loadedmetadata", () => {
  showProgress(aRange);
  aPlayed.innerHTML = calcTime(0);
  aTotal.innerHTML = calcTime(a.duration);
  aRange.max = Math.floor(a.duration);
  let changedTime = false;

  aRange.addEventListener("input", () => {
    showProgress(aRange);
    a.currentTime = aRange.value;
    changedTime = false;
  })

  aRange.addEventListener("change", () => {
    showProgress(aRange);
    a.currentTime = aRange.value;
    if(!a.paused) {
      a.play();
    }
    changedTime = false;
  })

  a.addEventListener("timeupdate", () => {
    if(!changedTime) {
      aRange.value = Math.floor(a.currentTime);
      aRange.setAttribute("value",  aRange.value);
      showProgress(aRange);
      aPlayed.innerHTML = calcTime(aRange.value);
    }
  })
})
//volume
vRange.addEventListener("change", () => {
  volume();
  vRange.setAttribute("value", vRange.value);
})

vRange.addEventListener("input", () => {
  volume();
  vRange.setAttribute("value",  vRange.value);
})

const aIcon = (input) => {
  if(input.value > 0 && input.value <= 0.4) {
    volBtn.src = "assets/icons/volume-low.svg"
  } else if(input.value > 0.4 && input.value <= 0.9) {
    volBtn.src = "assets/icons/volume-mid.svg"
  }else if(input.value == 0) {
    volBtn.src = "assets/icons/volume-off.svg"
  } else {
    volBtn.src = "assets/icons/volume-up.svg"
  }
}

let soundOn = true;
let temp;
volBtn.addEventListener("click", () => {
  if (vRange.value > 0) {
    temp = vRange.value;
  }
  soundOn = !soundOn;
  if(soundOn === false) {
    vRange.value = 0;
    volume();
  } else {
    vRange.value = temp;
    volume();
  }
})

const volume = () => {
  a.volume = vRange.value;
  aIcon(vRange);
  showProgress(vRange);
}
}

//pause other sounds while playing
const pauseSounds = (sounds) => {
  sounds.forEach(sound => {
    sound.pause();
  })
}