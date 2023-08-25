const menuActive = document.querySelector('.header__menu');
const hamburgerActive = document.querySelector('.header__hamburger');
console.log(menuActive);

hamburgerActive.addEventListener('click', el => {
    el.currentTarget.classList.toggle('header__hamburger_active');
    menuActive.classList.toggle('header__menu_active');
})