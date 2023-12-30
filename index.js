(function(){
    let navbar=document.querySelector('#navbar');
    let hamburger=document.querySelector('#hamburger');
    hamburger.addEventListener('click',()=>{
        navbar.classList.toggle('open');
    });

})();

(function(){
    let lista=document.querySelector('ul');
    let hamburger=document.querySelector('#hamburger');
    hamburger.addEventListener('click',()=>{
        lista.classList.toggle('close');
    });

})();

(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();
    
        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');
            

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;
    
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})();


import 'eins-modal/dist/css/eins-modal.min.css'
import 'eins-modal';
