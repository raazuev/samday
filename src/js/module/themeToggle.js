export function initThemeToggle() {
    const themeToggleCheckbox = document.getElementById('slideSwitch');

    if (!themeToggleCheckbox) {
        console.warn('Чекбокс переключения темы не найден.');
        return;
    }

    setInitialTheme();

    themeToggleCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeToggleCheckbox.checked);
        saveThemePreference();
    });
}

function setInitialTheme() {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    const themeToggleCheckbox = document.getElementById('slideSwitch');

    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        if (themeToggleCheckbox) {
            themeToggleCheckbox.checked = true;
        }
    }
}

function saveThemePreference() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkTheme);
}