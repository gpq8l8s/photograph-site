'use strict';

const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.nav__menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
