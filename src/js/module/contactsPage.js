export async function initContacts() {
    try {

        const response = await fetch('page/contacts/contacts.html');
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.statusText}`);
        }
        
        const content = await response.text();
        document.getElementById('main').innerHTML = content;
    } catch (error) {
        console.error('Ошибка при загрузке страницы контактов:', error);
    }
}