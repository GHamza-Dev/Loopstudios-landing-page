// DOM Elements
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click',()=>{
    document.querySelector('.navigation__bar').classList.toggle('hide');
    document.querySelector('.navigation__bar').classList.toggle('show');
});