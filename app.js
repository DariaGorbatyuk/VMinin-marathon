const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

start.addEventListener('click', onStartGame);


function onStartGame(evt) {
    evt.preventDefault();
    screens[0].classList.add('up');
}
