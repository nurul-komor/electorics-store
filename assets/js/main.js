// hero section javascript 
var hero_section = document.querySelector('.hero-section');

/* function sliderAnimation() {
    const item = hero_section.querySelector('.owl-item');
    const activeItem = hero_section.querySelector('.owl-item.active');
    const hOne = activeItem.querySelector('h1').classList.add('fadeInUpBig');
    const hFive = activeItem.querySelector('h5').classList.add('fadeInRight');
    const hSix = activeItem.querySelector('h5').classList.add('fadeIn');
    const button = activeItem.querySelector('a').classList.add('fadeIn');
}
const slideDot = hero_section.querySelector('.owl-dots');
slideDot.addEventListener('click', function () {
    sliderAnimation()
})
sliderAnimation() */
// hero section image zoom 
const hero_section_item_img = hero_section.getElementsByTagName('img');
for (let i = 0; i < hero_section_item_img.length; i++) {
    if (hero_section_item_img[i].height < 400) {
        hero_section_item_img[i].style.transform = "scale(1.3) translate(10px, 20px)";
    }
}
