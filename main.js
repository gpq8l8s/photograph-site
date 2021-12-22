'use strict';

/* Carousel - Image Slider */
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('slider_image');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 3000);
}

/*  Toggle Button */
const toggleBtn = document.querySelector('.material-icons');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
