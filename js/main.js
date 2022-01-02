'use strict';

/* Carousel - Image Slider */
let slideIndex = 0;
carousel();

function carousel(a, b) {
  let i;
  let a = document.getElementsByClassName(b);
  for (i = 0; i < a.length; i++) {
    a[i].Style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > a.length) {
    slideIndex = 1;
  }
  a[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}

carousel(x, slider_image_studio);

/*
function carousel() {
  let i;
  let x = document.getElementsByClassName('slider_image_studio');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}

function carousel() {
  let i;
  let y = document.getElementsByClassName('slider_image_domicile');
  for (i = 0; i < y.length; i++) {
    y[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > y.length) {
    slideIndex = 1;
  }
  y[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}

function carousel() {
  let i;
  let z = document.getElementsByClassName('slider_image_jardin');
  for (i = 0; i < z.length; i++) {
    z[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > z.length) {
    slideIndex = 1;
  }
  z[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}
*/
/*  Toggle Button */
const toggleBtn = document.querySelector('.material-icons');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
