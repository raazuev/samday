export async function initContacts() {
    try {
        const response = await fetch('page/contacts/contacts.html');
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.statusText}`);
        }
        
        const content = await response.text();
        document.getElementById('main').innerHTML = content;
        hideCategory();
    } catch (error) {
        console.error('Ошибка при загрузке страницы контактов:', error);
    }
}

export async function hideCategory() {
    const categoryElement = document.getElementById('category');
    if (categoryElement) {
        categoryElement.classList.add('hidden');
    }
}

export async function showCategory() {
    const categoryElement = document.getElementById('category');
    if (categoryElement) {
        categoryElement.classList.remove('hidden');
    }
}