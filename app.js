const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container')
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
let slidersCount = mainSlide.childElementCount;
let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});
downBtn.addEventListener('click', () => {
    changeSlide('down')
});
sideBar.style.top = `-${(slidersCount - 1) * 100}vh`

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidersCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidersCount - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(${-activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
