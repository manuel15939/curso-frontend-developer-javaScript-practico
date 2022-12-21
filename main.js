const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambuMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggledesktopmenu);
hambuMenu.addEventListener('click', togglemobilemenu);
menuShoppingCar.addEventListener('click', toggleaside)

function toggledesktopmenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive')
}

function togglemobilemenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    } 
    mobileMenu.classList.toggle('inactive');

}

function toggleaside(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}