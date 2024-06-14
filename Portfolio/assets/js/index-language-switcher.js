const translations = {
    "en": {
        "welcome_message": "Welcome to My Portfolio",
        "meet_abdirahman": "Meet Abdirahman, An Ambitious Developer",
        "navigation": {
            "home": "Home",
            "about_me": "About Me",
            "knowledge": "Knowledge",
            "portfolio": "Portfolio",
            "reference": "Reference",
            "contact": "Contact"
        },
        "footer_about": "This is a personal portfolio showcasing the work, skills, and achievements of Abdirahman. Feel free to explore and connect!",
        "footer_follow": "Follow Me",
        "footer_rights": "&copy; 2023 Abdirahman. All rights reserved."
    },
    "sv": {
        "welcome_message": "Välkommen till Min Portfolio",
        "meet_abdirahman": "Träffa Abdirahman, En Ambitiös Utvecklare",
        "navigation": {
            "home": "Hem",
            "about_me": "Om Mig",
            "knowledge": "Kunskap",
            "portfolio": "Portfolio",
            "reference": "Referens",
            "contact": "Kontakt"
        },
        "footer_about": "Detta är en personlig portfolio som visar Abdirahmans arbete, färdigheter och prestationer. Utforska gärna och ta kontakt!",
        "footer_follow": "Följ Mig",
        "footer_rights": "&copy; 2023 Abdirahman. Alla rättigheter förbehållna."
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang); 
    updatePageLanguage(lang); 
}

function updatePageLanguage(lang) {
    document.querySelector('#hero h1').innerText = translations[lang]['welcome_message'];
    document.querySelector('#hero p').innerText = translations[lang]['meet_abdirahman'];
    
    document.querySelector('a.nav-link[href="index.html"] span').innerText = translations[lang]['navigation']['home'];
    document.querySelector('a.nav-link[href="about.html"] span').innerText = translations[lang]['navigation']['about_me'];
    document.querySelector('a.nav-link[href="knowledge.html"] span').innerText = translations[lang]['navigation']['knowledge'];
    document.querySelector('a.nav-link[href="portfolio.html"] span').innerText = translations[lang]['navigation']['portfolio'];
    document.querySelector('a.nav-link[href="reference.html"] span').innerText = translations[lang]['navigation']['reference'];
    document.querySelector('a.nav-link[href="contact.html"] span').innerText = translations[lang]['navigation']['contact'];

    document.querySelector('footer p').innerText = translations[lang]['footer_about'];
    document.querySelector('footer h5').innerText = translations[lang]['footer_follow'];
    document.querySelector('.footer-bottom p').innerHTML = translations[lang]['footer_rights'];
}

function initializeLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        updatePageLanguage(savedLang);
    } else {
        updatePageLanguage('sv');
    }
}

// Kör initializeLanguage när sidan laddas
document.addEventListener('DOMContentLoaded', initializeLanguage);
