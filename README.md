# Angular 2

# Ramschema Webbapplikation

Detta är en simplifierad webbapp i Angular som visar ett ramschema för kurser i webbutveckling. Schemat kommer från en JSON-fil.

## Struktur

Här är de delar som applikationen består av:

- `services/courses.service.ts`: Här har jag gjort en Angular-service för att hämta schemat från en extern JSON-fil via HttpClient-modulen.

- `model/course.ts`: Ett interface som beskriver strukturen på varje kursobjekt.

- `components/course-list`: Det visar schemat i tabellform, med sökfunktion och möjlighet att sortera efter olika kategorier.

## Funktioner

- **Sökning**: Användaren skriver sökfraserna i sökfältet för att hitta vissa kurser.

- **Sortering**: Genom att klicka på tabellrubrikerna kan användaren sortera posterna baserat på deras kod, namn eller progression..

- **Responsiv design**: Applikationen fungerar bra på enheter med olika skärmstorlekar eftersom det är responsivt.

## Tekniker och verktyg

Följande tekniker och verktyg användes vid utvecklingen av denna app:

- **Angular**:  Användes för byggandet av gränssnittet samt hanteringen av logiken i applikationen och gör utvecklingsproccess enklare för utvecklare..

- **HttpClient-modulen**: Används för att göra HTTP-begäran och få data från en extern webbtjänst.



Du kan prova API-webbtjänsten genom att använda den här länken: [Angular 2](https://velvety-travesseiro-b8a313.netlify.app/)