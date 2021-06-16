const item = document.querySelector('.item');

item.addEventListener('dragstart', onDragStart)
item.addEventListener('dragend', onDragEnd)

function onDragStart() {
    item.classList.add('hold');
}

function onDragEnd() {
    item.classList.remove('hold');
}
