const translations = {
    "en": {
        "about_me": "About Me",
        ".net_developer": ".NET Developer",
        "introduction": "Abdirahman, a passionate and skilled .NET developer with a keen eye for detail and a drive for excellence. With a strong foundation in C# and ASP.NET, Abdirahman excels in crafting efficient, scalable, and robust applications.",
        "birthday": "Birthday",
        "phone": "Phone",
        "city": "City",
        "degree": "Degree",
        "email": "Email",
        "age": "Age",
        "bio1": "Abdirahman has a comprehensive understanding of modern development techniques and methodologies. He specializes in creating high-performance applications using C#, .NET, and related technologies. His expertise extends to database management with SQL and Azure, as well as frontend development with HTML and CSS.",
        "bio2": "Whether working independently or as part of a team, Abdirahman is dedicated to delivering high-quality software solutions that meet the needs of clients and users alike.",
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
        "about_me": "Om Mig",
        ".net_developer": ".NET Utvecklare",
        "introduction": "Abdirahman, en passionerad och skicklig .NET-utvecklare med ett gott öga för detaljer och en drivkraft för excellens. Med en stark grund i C# och ASP.NET, utmärker sig Abdirahman i att skapa effektiva, skalbara och robusta applikationer.",
        "birthday": "Födelsedag",
        "phone": "Telefon",
        "city": "Stad",
        "degree": "Examen",
        "email": "E-post",
        "age": "Ålder",
        "bio1": "Abdirahman har en omfattande förståelse för moderna utvecklingstekniker och metoder. Han specialiserar sig på att skapa högpresterande applikationer med hjälp av C#, .NET och relaterade teknologier. Hans expertis sträcker sig till databashantering med SQL och Azure, samt frontendutveckling med HTML och CSS.",
        "bio2": "Oavsett om han arbetar självständigt eller som en del av ett team, är Abdirahman dedikerad till att leverera högkvalitativa mjukvarulösningar som uppfyller kundernas och användarnas behov.",
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
    document.querySelector('.section-title h2').innerText = translations[lang]['about_me'];
    document.querySelector('.content h3').innerText = translations[lang]['.net_developer'];
    document.querySelector('.content p.fst-italic').innerText = translations[lang]['introduction'];

    document.querySelector('ul li:nth-child(1) span').innerText = translations[lang]['birthday'] + ": 27 February 2000";
    document.querySelector('ul li:nth-child(2) span').innerText = translations[lang]['phone'] + ": +46739637526";
    document.querySelector('ul li:nth-child(3) span').innerText = translations[lang]['city'] + ": Stockholm, Sweden";
    document.querySelector('ul li:nth-child(4) span').innerText = translations[lang]['degree'] + ": Professional's Degree in .NET Development";
    document.querySelector('ul li:nth-child(5) span').innerText = translations[lang]['email'] + ": abdi123rahman@outlook.com";
    document.querySelector('ul li:nth-child(6) span').innerText = translations[lang]['age'] + ": 24";

    const bios = document.querySelectorAll('.content p:not(.fst-italic)');
    bios[0].innerText = translations[lang]['bio1'];
    bios[1].innerText = translations[lang]['bio2'];

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
