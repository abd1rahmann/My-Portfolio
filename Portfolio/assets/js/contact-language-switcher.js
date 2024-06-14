function setLanguage(language) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerText = element.getAttribute(`data-${language}`);
    });
}

document.addEventListener('DOMContentLoaded', () => setLanguage('sv'));