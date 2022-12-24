const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambuMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#product-detail')
const productDetailCloseIcon = document.querySelector(".product-detail-close")

menuEmail.addEventListener('click', toggledesktopmenu);
hambuMenu.addEventListener('click', togglemobilemenu);
menuShoppingCar.addEventListener('click', toggleaside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggledesktopmenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive');
    if(!isAsideClosed) {
        hoppingCarContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive')
}

function togglemobilemenu(){
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive');
    if(!isAsideClosed) {
        shoppingCarContainer.classList.add('inactive');
    } 

    closeProductDetailAside();

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
    
    productDetail.classList.add('inactive')
    shoppingCarContainer.classList.toggle('inactive');
}

function openProductDetialAside(){
   
    shoppingCarContainer.classList.add('inactive');

    productDetail.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetail.classList.add('inactive');
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

function renderproducts(arr){
    for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetialAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.Price;

    const productName = document.createElement('Price');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    
    const productImgCar = document.createElement('img')
    productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg' )

    cardsContainer.append(productCard);
    productCard.append(productImg, productInfo);
    productInfo.append(productInfoDiv,productInfoFigure);
    productInfoDiv.append(productPrice,productName);
    productInfoFigure.append(productImgCar);
    
}
}

renderproducts(productList);
