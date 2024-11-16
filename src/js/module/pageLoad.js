export async function initPage() {

    const loadModule = async (url, elementId) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки ${url}: ${response.statusText}`);
        }
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
    };

    try {
        await Promise.all([
            loadModule('page/main/header.html', 'header'),
            loadModule('page/main/category.html', 'category'),
            loadModule('page/main/main.html', 'main'),
            loadModule('page/main/footer.html', 'footer')
        ]);
    } catch (error) {
        console.error('Ошибка при загрузке модулей:', error);
    }
}