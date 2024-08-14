let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            displayTime();
        }, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}

function displayTime() {
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let hr = hours < 10 ? "0" + hours : hours;
    display.innerText = `${hr}:${min}:${sec}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
