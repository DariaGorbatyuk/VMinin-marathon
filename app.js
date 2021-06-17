const board = document.querySelector('#board');
const BOX_AMOUNT = 399;

function renderBox(){
    const fragment = new DocumentFragment();
    for (let i = 0; i <= BOX_AMOUNT; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        fragment.append(box);
    }
    return fragment;
}
const boxes = renderBox();
board.append(boxes);
