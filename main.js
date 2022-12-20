const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambuMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggledesktopmenu);
hambuMenu.addEventListener('click', togglemobilemenu)

function toggledesktopmenu(){
    desktopMenu.classList.toggle('inactive')
}

function togglemobilemenu(){
    mobileMenu.classList.toggle('inactive')
}