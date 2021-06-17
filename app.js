const board = document.querySelector('#board');
const BOX_AMOUNT = 399;
const COLORS = ['#9999FF', '#FF99FF', '#99FFFF', '#99FF66', '#FF9933']

function renderBox() {
    const fragment = new DocumentFragment();
    for (let i = 0; i <= BOX_AMOUNT; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', onMouseOver);
        box.addEventListener('mouseleave', onMouseLeave);
        fragment.append(box);
    }
    return fragment;
}

function onMouseOver(evt) {
    const color = getColor();
    evt.target.style.backgroundColor = `${color}`;
    evt.target.style.boxShadow = `0 0 10px ${color}`
}

function onMouseLeave(evt) {
    evt.target.style.backgroundColor = `#1d1d1d`;
    evt.target.style.boxShadow = `0 0 10px #1d1d1d`
}

function getColor() {
    const index = Math.floor(Math.random()*COLORS.length);
    return COLORS[index];
}

const boxes = renderBox();
board.append(boxes);



