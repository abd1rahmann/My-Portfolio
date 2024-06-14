// Definiera översättningar
const translations = {
    "en": {
        "knowledge": "Knowledge",
        "skills_and_technologies": "Skills & Technologies",
        "programming": "C# Programming",
        "programming_description": "Experienced in building applications with C#, including web, desktop, and mobile solutions. Skilled in using .NET Framework and .NET Core for developing scalable applications.",
        "asp_net_core": "ASP.NET Core",
        "entity_framework": "Entity Framework",
        "linq": "LINQ",
        "database": "Database Technologies",
        "database_description": "Proficient in SQL and Azure for database management, data storage solutions, and cloud services. Experienced in designing and maintaining relational databases and writing complex queries.",
        "sql_server": "SQL Server",
        "azure_sql_database": "Azure SQL Database",
        "data_modeling": "Data Modeling",
        "stored_procedures": "Stored Procedures",
        "frontend": "Frontend Development",
        "frontend_description": "Skilled in HTML and CSS for creating responsive and visually appealing web interfaces. Proficient in modern frontend frameworks and libraries for building dynamic web applications.",
        "html5": "HTML5",
        "css3": "CSS3",
        "javascript": "JavaScript",
        "bootstrap": "Bootstrap"
    },
    "sv": {
        "knowledge": "Kunskap",
        "skills_and_technologies": "Färdigheter & Teknologier",
        "programming": "C# Programmering",
        "programming_description": "Erfarenhet av att bygga applikationer med C#, inklusive webb, skrivbord och mobila lösningar. Skicklig på att använda .NET Framework och .NET Core för att utveckla skalbara applikationer.",
        "asp_net_core": "ASP.NET Core",
        "entity_framework": "Entity Framework",
        "linq": "LINQ",
        "database": "Databastekniker",
        "database_description": "Kunnig i SQL och Azure för databashantering, data lagringslösningar och molntjänster. Erfarenhet av design och underhåll av relationsdatabaser samt skrivning av komplexa frågor.",
        "sql_server": "SQL Server",
        "azure_sql_database": "Azure SQL Database",
        "data_modeling": "Data Modellering",
        "stored_procedures": "Lagrade Procedurer",
        "frontend": "Frontend Utveckling",
        "frontend_description": "Skicklig i HTML och CSS för att skapa responsiva och visuellt tilltalande webbsidor. Behärskar moderna frontend-ramverk och bibliotek för att bygga dynamiska webbapplikationer.",
        "html5": "HTML5",
        "css3": "CSS3",
        "javascript": "JavaScript",
        "bootstrap": "Bootstrap"
    }
};

// Funktion för att ställa in språk
function setLanguage(lang) {
    localStorage.setItem('language', lang); // Spara språk i localStorage
    updatePageLanguage(lang); // Uppdatera alla texter på sidan till det nya språket
}

// Funktion för att uppdatera språket på sidan
function updatePageLanguage(lang) {
    document.getElementById("knowledge-title").innerText = translations[lang]["knowledge"];
    document.getElementById("skills-and-technologies").innerText = translations[lang]["skills_and_technologies"];
    
    // Uppdatera kunskapssektionen
    const programmingTitle = document.querySelector(".icon-box:nth-child(1) .title a");
    const programmingDescription = document.querySelector(".icon-box:nth-child(1) .description");
    const databaseTitle = document.querySelector(".icon-box:nth-child(2) .title a");
    const databaseDescription = document.querySelector(".icon-box:nth-child(2) .description");
    const frontendTitle = document.querySelector(".icon-box:nth-child(3) .title a");
    const frontendDescription = document.querySelector(".icon-box:nth-child(3) .description");

    programmingTitle.innerText = translations[lang]["programming"];
    programmingDescription.innerText = translations[lang]["programming_description"];
    databaseTitle.innerText = translations[lang]["database"];
    databaseDescription.innerText = translations[lang]["database_description"];
    frontendTitle.innerText = translations[lang]["frontend"];
    frontendDescription.innerText = translations[lang]["frontend_description"];

    // Uppdatera navigationen
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.querySelector("span").innerText = translations[lang]["navigation"][link.getAttribute("data-page")];
    });

    // Uppdatera footer
    document.querySelector('.footer-bottom p').innerHTML = translations[lang]['footer_rights'];
}

// Funktion för att hämta aktuellt språk från localStorage och uppdatera sidan
function initializeLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        updatePageLanguage(savedLang);
    } else {
        // Om inget språk är sparat, använd standard (engelska här)
        updatePageLanguage('en');
    }
}

// Kör initializeLanguage när sidan laddas
document.addEventListener('DOMContentLoaded', initializeLanguage);
