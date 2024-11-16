export function initHeader() {

    //SCROLL
    let preScrollPos = window.pageYOffset

    window.onscroll = function() {
        
        const currentScrollPos = window.pageYOffset;
        const headerScroll = document.getElementById('headerScroll');
        const menu = document.querySelector('.header__menu');

        if (preScrollPos > currentScrollPos) {
            headerScroll.classList.remove('hidden',);
        } else {
            headerScroll.classList.add('hidden');
            menu.classList.remove('active');
        }

        preScrollPos = currentScrollPos;
    };

    // BURGER-MENU
    const burgerMenu = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

}