const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')
const resumeBtn = document.querySelector('#resumeBtn')


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);

function startTimer() {
  interval = setInterval(() => {

    if(lisPaused) {
      
    }


  }, 10)
}