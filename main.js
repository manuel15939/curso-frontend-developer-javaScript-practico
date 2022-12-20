const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', togglemenu);

function togglemenu(){
    desktopMenu.classList.toggle('inactive')
}
console.log('js funcionando');