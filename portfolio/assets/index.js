const BTN_BURGER = document.querySelector('.header__burger-menu');
const BTN_CROSS = document.querySelector('.header__menu-cross');
const MENU = document.querySelector('.header__menu');
const SOCIAL_LINKS= document.querySelector('.side-bar__social-links');
const OVERLAY_CONTENT= document.querySelector('.header__overlay');

BTN_BURGER.addEventListener('click', addBurgerMenu)
BTN_CROSS.addEventListener('click', removeBurgerMenu)
OVERLAY_CONTENT.addEventListener('click', removeBurgerMenu)
function addBurgerMenu() {
  MENU.classList.add('active__menu');
  SOCIAL_LINKS.classList.add('active__menu');
  OVERLAY_CONTENT.classList.add('active__menu');
}
function removeBurgerMenu() {
  MENU.classList.remove('active__menu');
  SOCIAL_LINKS.classList.remove('active__menu');
  OVERLAY_CONTENT.classList.remove('active__menu');
}
