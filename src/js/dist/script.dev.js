"use strict";

var menuActive = document.querySelector('.header__menu');
var hamburgerActive = document.querySelector('.header__hamburger');
console.log(menuActive);
hamburgerActive.addEventListener('click', function (el) {
  el.currentTarget.classList.toggle('header__hamburger_active');
  menuActive.classList.toggle('header__menu_active');
});