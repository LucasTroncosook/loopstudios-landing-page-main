const menu = document.getElementById('menu');
const toogleMenu = document.querySelector('.menu-toogle');
const header = document.querySelector('header');
menu.addEventListener('click', ()=>{
    const img = menu.firstElementChild;
    const srcImg = img.getAttribute('src');
    if(srcImg === './images/icon-hamburger.svg'){
        toogleMenu.style.transform = 'translateX(0%)';
        img.setAttribute('src', './images/icon-close.svg');
        header.style.position = 'fixed';
    }else{
        toogleMenu.style.transform = 'translateX(100%)';
        img.setAttribute('src', './images/icon-hamburger.svg');
        header.style.position = 'absolute';
    }
})