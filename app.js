const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
let time = 0;

start.addEventListener('click', onStartGame);
timeList.addEventListener('click', onTimeChoice)

function onStartGame(evt) {
    evt.preventDefault();
    screens[0].classList.add('up');
}

function onTimeChoice(evt) {
    evt.preventDefault();
    if (!evt.target.matches('.time-btn')) {
        return
    }
    screens[1].classList.add('up');
    time = parseInt(evt.target.dataset.time, 10);
    startGame();
}

function startGame() {
    setInterval(onDecreaseTime, 1000);
    setTime(time);
}

function endGame() {
    timeEl.parentElement.style.visibility = 'hidden';
}

function onDecreaseTime() {
    if(time === 0){
        endGame();
    }else{
        let current = --time;
        if (current < 10) {
            timeEl.textContent = `00:0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    time.textContent = `00:${value}`;
}

function createRandomCircle(){
    const circle = document.createElement('div');

}
