Portfolio
Detta projekt är en kombination av en frontend-portföljwebbplats och en backend-API för hantering av projekt.

Frontend
Frontenden är en responsiv portföljwebbplats som visar dina projekt, färdigheter och kontaktinformation. Den är byggd med moderna webbtekniker som HTML5, CSS3 och JavaScript. 
Designen är förbättrad med ramverket Bootstrap för att säkerställa mobilresponsivitet och kompatibilitet med olika webbläsare.

Använda tekniker:

HTML5
CSS3
JavaScript (ES6+)
Bootstrap 5


Huvudfunktioner:

Startsida med en introduktion och navigering till andra avsnitt.
Om mig-sektion som framhäver din bakgrund och dina färdigheter.
Kunskapssektion som visar din expertis.
Portföljsektion som visar dina projekt med beskrivningar och länkar.
Referenssektion med vittnesmål från klienter eller arbetsgivare.
Kontakta-sektion med ett formulär för besökare att kontakta dig.

Utvecklingsmönster/principer:

Responsiv design: Använde mediefrågor och Bootstrap-rutnätssystem för responsivitet på olika enheter.
Modularisering: Organiserade kod i separata HTML-, CSS- och JavaScript-filer för underhållbarhet.
Progressiv förbättring: Säkerställde grundläggande funktionalitet och tillgänglighet för alla användare, sedan förbättrades det med JavaScript för interaktiva funktioner.
Tillgänglighet: Följde bästa praxis för tillgänglighet för att säkerställa att webbplatsen är användbar för personer med funktionshinder.

Backend-API

Backend-API tillhandahåller slutpunkter för hantering av projekt och tillåter CRUD-operationer (Create, Read, Update, Delete) på projektdatat. Det är byggt med ASP.NET Core, ett plattformsoberoende ramverk för att bygga API
med C#. API följer RESTful-principer för design av slutpunkter och följer SOLID-principerna för underhållbarhet och skalbarhet.

Använda tekniker:

ASP.NET Core 5
C#
Entity Framework Core (för dataåtkomst)
Swagger (för API-dokumentation)


Huvudfunktioner:

GET /api/projects: Hämtar alla projekt som är lagrade i databasen.
GET /api/projects/{id}: Hämtar ett specifikt projekt efter dess ID.
POST /api/projects: Skapar ett nytt projekt.
PUT /api/projects/{id}: Uppdaterar ett befintligt projekt.
DELETE /api/projects/{id}: Tar bort ett projekt efter dess ID.

Utvecklingsmönster/principer:

Repository-mönster: Separerade datatillgångslogiken från affärslogiken med hjälp av repository-mönstret för bättre underhållbarhet och testbarhet.
Beroendeinsprutning: Använde ASP.NET Core's inbyggda beroendeinsprutningsbehållare för att hantera objektberoenden.
Attributruttning: Implementerade attributbaserad rutning för att definiera API-rutter direkt på controller-åtgärder för bättre läsbarhet.
Swagger-dokumentation: Integrerade Swagger för att generera interaktiv API-dokumentation för utvecklare att utforska slutpunkter och testa API-anrop enkelt.
