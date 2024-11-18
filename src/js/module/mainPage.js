export function initMain() {
    const mainContainer = document.getElementById('main');
    if (!mainContainer) {
        console.warn('Контейнер с ID "main" не найден. Проверьте структуру HTML.');
        return;
    }

    fetch('page/main/main.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            mainContainer.innerHTML = content;
            initializeShowMore();
        })
        .catch(error => {
            console.error('Ошибка при загрузке главной страницы:', error);
        });

    function initializeShowMore() {
        const showMoreButton = document.getElementById('showMore');

        if (!showMoreButton) {
            console.warn('Элемент с ID "showMore" не найден. Проверьте структуру HTML.');
            return;
        }

        const updateButtonText = () => {
            const currentlyHiddenCards = document.querySelectorAll('.main__item:not(.show)');
            const remainingCount = currentlyHiddenCards.length;

            if (remainingCount === 0) {
                showMoreButton.textContent = 'Скрыть';
            } else {
                showMoreButton.textContent = `Показать ещё ${remainingCount}`;
            }
        };

        const allCards = document.querySelectorAll('.main__item');

        allCards.forEach((card, index) => {
            if (index >= 4) {
                card.classList.remove('show');
            } else {
                card.classList.add('show');
            }
        });

        updateButtonText();

        showMoreButton.addEventListener('click', () => {
            const currentlyHiddenCards = document.querySelectorAll('.main__item:not(.show)');

            if (currentlyHiddenCards.length > 0) {
                currentlyHiddenCards.forEach((card) => {
                    card.classList.add('show');
                });
            } else {
                allCards.forEach((card, index) => {
                    if (index >= 4) {
                        card.classList.remove('show');
                    }
                });
            }

            updateButtonText();
        });
    }
}