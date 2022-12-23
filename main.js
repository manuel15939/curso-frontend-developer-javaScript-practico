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

const productList = [];

productList.push({
    name: 'Bike',
    Price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    Price: 220,
    image: 'https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Computadora',
    Price: 620,
    image: 'https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPrice = document.createElement('p');
    const productName = document.createElement('Price');
    
}