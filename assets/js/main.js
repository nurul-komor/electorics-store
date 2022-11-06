// header customer javascript 
const hero_section = document.querySelector('.hero-section');

const hero_section_item_img = hero_section.getElementsByTagName('img');
for (let i = 0; i < hero_section_item_img.length; i++) {
    if (hero_section_item_img[i].height < 410) {
        hero_section_item_img[i].style.transform = "scale(1.3)";
    }
}
