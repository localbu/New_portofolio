// navbar
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    if(window.pageYOffset > navbarFixed){
        header.classList.remove('hidden');
        header.classList.add('flex');
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.add('hidden');
        header.classList.remove('flex');
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden')
    }
};
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu')
humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});

// KLikk all page for close humberger button
window.addEventListener('click', function(a){
    if(a.target !=humberger && a.target !=navMenu){
        humberger.classList.remove('active');
        navMenu.classList.add('hidden');
    }
});

