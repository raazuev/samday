import { initMain } from './mainPage.js';
import { hideCategory, showCategory } from './contactsPage.js';

export function initHeader() {
    initScrollBehavior();
    initBurgerMenu();
    initNavigation();
}

function initScrollBehavior() {
    let preScrollPos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        const headerScroll = document.getElementById('headerScroll');
        const menu = document.querySelector('.header__menu');

        if (!headerScroll || !menu) {
            console.warn('Элементы для скролла не найдены.');
            return;
        }

        if (preScrollPos > currentScrollPos) {
            headerScroll.classList.remove('hidden');
        } else {
            headerScroll.classList.add('hidden');
            menu.classList.remove('active');
        }

        preScrollPos = currentScrollPos;
    };
}

function initBurgerMenu() {
    const burgerMenu = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');

    if (!burgerMenu || !menu) {
        console.warn('Элементы для бургер-меню не найдены.');
        return;
    }

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

function initNavigation() {
    const header = document.getElementById('header');

    if (!header) {
        console.error('Элемент с ID "header" не найден.');
        return;
    }

    header.addEventListener('click', (e) => {
        if (e.target.id === 'contactsLink') {
            e.preventDefault();
            loadModule('./contactsPage.js', 'initContacts');
            hideCategory();
        } else if (e.target.id === 'homeLink') {
            e.preventDefault();
            initMain();
            showCategory();
        }
    });
}

function loadModule(modulePath, functionName) {
    import(modulePath)
        .then((module) => {
            if (module[functionName]) {
                module[functionName]();
            } else {
                console.warn(`Функция ${functionName} не найдена в модуле ${modulePath}`);
            }
        })
        .catch((error) => {
            console.error(`Ошибка загрузки модуля ${modulePath}:`, error);
   });
}