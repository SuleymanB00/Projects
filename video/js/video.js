function init() {
    let media = document.getElementById("media");
    let play = document.getElementById("play");
    let mute = document.getElementById("mute");
    let bar = document.getElementById("bar");
    let progress = document.getElementById("progress");
    let volume = document.getElementById("volume");
  
    play.addEventListener("click", push);
    media.addEventListener("click", push);
    mute.addEventListener("click", sound);
    bar.addEventListener("click", move);
    volume.addEventListener("change", vol);
  
  }
  
   function vol() {
      media.volume = volume.value;
  
   }   
  
  
  function move(e) {
    if (!media.ended) {
      let mouseX = e.pageX - bar.offsetLeft;
      // console.log(mouseX);
  
      progress.style.width = `${mouseX}px`;
  
      let newTime = (mouseX * media.duration) / MAX;
      // console.log(newTime);
      media.currentTime = newTime;
  
    }
  }
  
  function push() {
   
    if (!media.paused && !media.ended) {
      media.pause();
      play.value = "Play";
      clearInterval(loop);
    } else {
      media.play();
      play.value = "Pause";
      loop = setInterval(progressBar, 500);
    }
  }
  
  const MAX = 400;
  let size = 0; 
  let loop;
  
  function progressBar() {
    if (!media.ended) {
      size = (media.currentTime * MAX) / media.duration;
      progress.style.width = `${size}px`;
    } else {
      clearInterval(loop);
      progress.style.width = "0";
      play.value = "Play";
      media.currentTime = 0;
    }
  }
  
  function sound() {
    if (!media.muted) {
      media.muted = true;
      mute.value = "Вкл.";
      mute.setAttribute("class", "soundOff");
    } else {
      media.muted = false;
      mute.value = "Звук";
      mute.setAttribute("class", "soundOn");
    }
  }
  
  addEventListener("load", init);