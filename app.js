const item = document.querySelector('.item');

item.addEventListener('dragstart', onDragStart)
item.addEventListener('dragend', onDragEnd)

function onDragStart() {
    item.classList.add('hold');
    setTimeout(()=>{
        item.classList.add('hide');
    },0)
}

function onDragEnd() {
    item.classList.remove('hold', 'hide');
}
