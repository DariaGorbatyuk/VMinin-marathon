const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

start.addEventListener('click', onStartGame);
timeList.addEventListener('click', onTimeChoice)
board.addEventListener('click', onTargetClick)

function onTargetClick(evt) {
    if (!evt.target.matches('.circle')) {
        return
    }
    score++;
    evt.target.remove();
    createRandomCircle();
}

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
    createRandomCircle();
}

function endGame() {
    timeEl.parentElement.style.visibility = 'hidden';
}

function onDecreaseTime() {
    if (time === 0) {
        endGame();
    } else {
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

function createRandomCircle() {
    const {width, height} = board.getBoundingClientRect();
    const size = getRandomInt(10, 60);
    const x = getRandomInt(0, width - size);
    const y = getRandomInt(0, height - size);
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    board.append(circle);
}

function getRandomInt(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}
