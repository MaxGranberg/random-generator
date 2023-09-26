# Reflektion

## Namngivning - Kapitel 2
|Namn och förklaring | Reflektion och regler från Clean code|
|--------------------|--------------------------------------|
|**generateRandomNumber** : Metodnamn i NumberGenerator klassen. Genererar ett slumpmässigt nummer.| **Don't be cute** : Namnet är klart & tydligt och berättar vad metoden gör, varken mer eller mindre. **Pick one word per concept** : Ordet "generate" används i hela modulen i metoder som genererar olika typer av data.|
|**StringGenerator** : Klassnamn för klass som kan generera strängar.| **Use Intention-Revealing Names** Namnet är tydligt och berättar dens syfte. Man förstår att det är en klass som genererar strängar. **Class Names** : Namnet är ett substantiv vilket är bra, klassnamn bör inte vara verb.|
|**generateRandomRGBColor** : Metodnamn i ColorGenerator klassen. Genererar ett RGB värde.| **Use Searchable Names** : Ett unikt och ganska långt namn som gör det lätt att söka upp. **Avoid Disinformation** : Möjligt att namnet inte är helt tydligt med vad som faktiskt genereras. En färg? Hur då? Vad får man ut? En del programmerare kanske förstår direkt att det är en sträng men inte säkert alla gör det. Ett bättre men längre namn kanske är: generateRandomRGBColorString ? Eller:  generateRGBColorString|
**generateRandomNumbersArray** : Metodnamn i klassen ArrayGenerator. Genererar en array bestående av slumpmässiga nummer.| **Make Meaningful Distinctions** : Metodnamnet är långt och beskrivande men kanske lite väl långt. Hade verkligen ordet Array behövt vara med? Eftersom "Numbers" tyder på att det är flera nummer som generas och då alltså en array. **Avoid Mental mapping** : Namnet är som sagt beskrivande och ordet "Numbers" ger användaren av metoden en påminnelse att arrayen bara innehåller nummer. Användaren behöver inte komma ihåg den här infon i minnet utan det står tydligt vad metoden genererar.|
|**generateRandomDate** : Metodnamn i klassen DateGenerator. Genererar ett slumpmässigt datum. | **Method Names** : Metodnamn bör vara verb eller verbfraser. **Use Pronouncable Names** : Kanske inte specifikt bara för den här metoden utan jag har försökt applicera den här regeln på alla metoder och klasser.    
-----
### Reflektion kapitel 2

