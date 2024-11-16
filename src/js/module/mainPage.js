export function initMain() {
    const showMoreButton = document.getElementById('showMore');

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
            currentlyHiddenCards.forEach(card => {
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
