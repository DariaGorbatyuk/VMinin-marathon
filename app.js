const sliderList = document.querySelector(`.slider-list`);
const sliderClass = `slide`;
const sliderActiveClass = `slide--active`;
let lastSlideIndex = 0;

const sliders = [...sliderList.children];
sliders.forEach((item, i)=>item.dataset.id = `${i}`)
function onSliderActive(evt) {
    if(!evt.target.matches(`.${sliderClass}`)){
        return
    }
    sliders[Number(lastSlideIndex)].classList.remove(sliderActiveClass)
    evt.target.classList.add(sliderActiveClass);
    lastSlideIndex = evt.target.dataset.id;
}

sliderList.addEventListener('click', onSliderActive)
