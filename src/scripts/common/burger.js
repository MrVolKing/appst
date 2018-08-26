const humburger = document.getElementById('burgerblock');
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const burgerline2 = document.getElementById('line2');
const burgerline1 = document.getElementById('line1');
const burgerline3 = document.getElementById('line3');
const link = document.getElementById('link');
const number = document.getElementById('number');


// const wrapperleft = document.getElementById('wrapper__left');
// const wrapperright = document.getElementById('wrapper__right');
// const fulmenu = document.getElementById('fulmenu');



humburger.addEventListener('click', () => {
    header.classList.toggle('headbgr');
    menu.classList.toggle('menubgr');
    link.classList.toggle('hidden');
    number.classList.toggle('hidden')
    // wrapperright.classList.toggle('wrapper__right-visible');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
    // fulmenu.classList.remove('fulmenu-visible');
});

function showmenu() {
    fulmenu.classList.toggle('fulmenu-visible');
};

// $("#humburger").click(() => {
//     if (fulmenu.classList.contains('fulmenu-visible')){
//         showmenu();
//     } 
//     else {
//         setTimeout(showmenu, 1000);
        
//     }
// });

