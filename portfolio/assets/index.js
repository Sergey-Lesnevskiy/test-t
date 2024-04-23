const BTN_BURGER = document.querySelector('.header__burger-menu');
const BTN_CROSS = document.querySelector('.header__menu-cross');
const MENU = document.querySelector('.header__menu');
const SOCIAL_LINKS= document.querySelector('.side-bar__social-links');

BTN_BURGER.addEventListener('click',()=>{
  MENU.classList.add('active__menu');
  SOCIAL_LINKS.classList.add('active__menu');
})
BTN_CROSS.addEventListener('click',()=>{
  MENU.classList.remove('active__menu');
  SOCIAL_LINKS.classList.remove('active__menu');
})
