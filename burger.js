let burger = document.querySelector('.js-burger');
let burgerLine = document.querySelector('.burger__line-js');
let menu = document.querySelector('.mobile-menu-nav-js');

burger.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu-open');
    burgerLine.classList.toggle('active');
})
