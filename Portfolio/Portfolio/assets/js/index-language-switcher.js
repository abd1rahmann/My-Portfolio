function setLanguage(lang) {
    var elements = document.querySelectorAll('[data-en], [data-sv]');
    elements.forEach(function (element) {
        if (lang === 'sv' && element.hasAttribute('data-sv')) {
            element.style.display = 'block';
        } else if (lang === 'en' && element.hasAttribute('data-en')) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    // Uppdatera språkväxlingsknappar för aktivt språk
    var langButtons = document.querySelectorAll('.lang-button');
    langButtons.forEach(function (button) {
        button.classList.remove('active');
        if (button.classList.contains(lang)) {
            button.classList.add('active');
        }
    });
}