const translations = {
    "en": {
        "references": "References",
        "below_references": "Below are some references from my academic life.",
        "richard_chalk": {
            "name": "Richard Chalk",
            "position": "Position: Educator within web development, frontend, javascript, design, database technology",
            "relationship": "Relationship: Teacher at KYH"
        },
        "stefan_holmgren": {
            "name": "Stefan Holmgren",
            "position": "Position: Educator within WEB, Programmering och IOT",
            "relationship": "Relationship: Teacher at KYH"
        },
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
        "references": "Referenser",
        "below_references": "Nedan är några referenser från mitt akademiska liv.",
        "richard_chalk": {
            "name": "Richard Chalk",
            "position": "Position: Lärare inom webbutveckling, frontend, javascript, design, databasteknik",
            "relationship": "Relationship: Lärare på KYH"
        },
        "stefan_holmgren": {
            "name": "Stefan Holmgren",
            "position": "Position: Lärare inom WEB, Programmering och IOT",
            "relationship": "Relationship: Lärare på KYH"
        },
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
    document.querySelector('.section-title h2').innerText = translations[lang]['references'];
    document.querySelector('.section-title p').innerText = translations[lang]['below_references'];

    const reference1 = translations[lang]['richard_chalk'];
    document.querySelector('.reference:nth-child(1) h3').innerText = reference1.name;
    document.querySelector('.reference:nth-child(1) p:nth-child(2)').innerText = reference1.position;
    document.querySelector('.reference:nth-child(1) p:nth-child(3)').innerText = reference1.relationship;

    const reference2 = translations[lang]['stefan_holmgren'];
    document.querySelector('.reference:nth-child(2) h3').innerText = reference2.name;
    document.querySelector('.reference:nth-child(2) p:nth-child(2)').innerText = reference2.position;
    document.querySelector('.reference:nth-child(2) p:nth-child(3)').innerText = reference2.relationship;

    document.querySelector('a.nav-link[href="index.html"] span').innerText = translations[lang]['navigation']['home'];
    document.querySelector('a.nav-link[href="about.html"] span').innerText = translations[lang]['navigation']['about_me'];
    document.querySelector('a.nav-link[href="knowledge.html"] span').innerText = translations[lang]['navigation']['knowledge'];
    document.querySelector('a.nav-link[href="portfolio.html"] span').innerText = translations[lang]['navigation']['portfolio'];
    document.querySelector('a.nav-link[href="reference.html"] span').innerText = translations[lang]['navigation']['reference'];
    document.querySelector('a.nav-link[href="contact.html"] span').innerText = translations[lang]['navigation']['contact'];

    document.querySelector('footer .col-lg-4:nth-child(2) p').innerText = translations[lang]['footer_about'];
    document.querySelector('footer .col-lg-4:nth-child(3) h5').innerText = translations[lang]['footer_follow'];
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

document.addEventListener('DOMContentLoaded', initializeLanguage);
