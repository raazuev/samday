export function initFooter() {
    const footerLinks = document.querySelectorAll('.footer__menu a');

    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            handleFooterLinkClick(event.target);
        });
    });
}

async function handleFooterLinkClick(target) {
    if (target.textContent.trim().toLowerCase() === 'контакты') {
        await loadModule('./contactsPage.js', 'initContacts');
    }
}

function loadModule(mobulePath, functionName) {
    import(mobulePath)
        .then((module) => {
            if (module[functionName]) {
                const result = module[functionName]();
                if (result instanceof Promise) {
                    return result;
                }
            } else {
                console.warn(`Функция ${functionName} не найдена в модуле ${mobulePath}`);
            }
        })
        .catch((error) => {
            console.error(`Ошибка загрузки модуля ${mobulePath}:`, error);
        });
}