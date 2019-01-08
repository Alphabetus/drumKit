// listener
window.addEventListener("keydown", playDrums);

function playDrums(e){
    // console.log(e.keyCode);
    const audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
    const key = document.querySelector(".key[data-key='"+e.keyCode+"']")
    if (!audio){
      return; // no audio.
    }
    audio.currentTime = 0;
    audio.play();
    // change class
    key.classList.add("on");
}

function removeTransition(e){
  if (e.propertyName !== "transform") return; // skip if  not a transform event
  this.classList.remove("on");
  console.log(e.propertyName);
}

// transition
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
