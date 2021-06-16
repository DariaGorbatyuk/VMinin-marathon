const item = document.querySelector('.item');
const columns = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', onDragStart);
item.addEventListener('dragend', onDragEnd);

for (const column of columns) {
    column.addEventListener('dragover', onDragOver);
    column.addEventListener('dragenter', onDragEnter);
    column.addEventListener('dragleave', onDragLeave);
    column.addEventListener('drop', onDragDrop);
}

function onDragStart() {
    item.classList.add('hold');
    setTimeout(() => {
        item.classList.add('hide');
    }, 0)
}

function onDragEnd() {
    item.classList.remove('hold', 'hide');
}

function onDragOver(evt) {
    evt.preventDefault();
}

function onDragEnter(evt){
    evt.currentTarget.classList.add('enter');
}
function onDragLeave(evt){
    evt.currentTarget.classList.remove('enter');
}
function onDragDrop(evt){
    evt.currentTarget.classList.remove('enter');

}
