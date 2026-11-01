Tehtävä 1-5 tehty
Tehtävä 7 tehty 

 # JavaScript-perusteet: Moduulit 1 ja 2 (Interaktiiviset ohjelmat ja ohjausrakenteet)

Tämä repositorio sisältää ohjelmoinnin perusteiden harjoitustehtäviä, joissa on harjoiteltu JavaScriptin perusrakenteita, syötteiden lukemista, satunnaislukuja, ehtolausekkeita, silmukoita sekä DOM-manipulaatiota.

## Tehtävät ja niiden toteutus

1. **Konsolitulostus (Tehtävä 1)**
   - Kirjoitettu ohjelma, joka kirjaa konsolille tekstin: `I'm printing to console!`.

2. **Käyttäjän tervehtiminen (Tehtävä 2)**
   - Ohjelma kysyy käyttäjältä nimen ja tervehtii häntä dynaamisesti suoraan HTML-dokumentissa muodossa: `Hello, Name!`.

3. **Lukujen laskutoimitukset (Tehtävä 3)**
   - Pyytää käyttäjältä kolme kokonaislukua `prompt`-ikkunalla ja muuntaa merkkijonot numeroiksi `parseInt`-komennolla.
   - Laskee lukujen summan, tulon ja keskiarvon, ja tulostaa tulokset HTML-sivulle.

4. **Tylypahkan lajitteluhattu (Tehtävä 4)**
   - Kysyy oppilaan nimen ja arpoo `Math.random()`-funktiolla luvun 1–4 väliltä.
   - Käyttää monivalintarakennetta (`switch`) tuvan valitsemiseen (Gryffindor, Slytherin, Hufflepuff tai Ravenclaw).
   - Tulostaa tuloksen sivulle vaaditussa muodossa (esim. *"Anna, you are Ravenclaw."*).


5. **Nopanheitto (Tehtävä 7)**
   - Kysyttää käyttäjältä heitettävien noppien määrän.
   - Heittää noppaa käyttäjän määrittämän määrän `for`-silmukan avulla arpoen jokaiselle nopalle luvun 1–6 väliltä.
   - Laskee noppien tulosten summan yhteen ja näyttää sen verkkosivulla.

---

## Mitä olen oppinut näissä tehtävissä?

* **Syötteiden käsittely ja tyypit**: Opin kysymään käyttäjältä tietoja `prompt()`-funktiolla ja ymmärsin, että käyttäjän syöte on aina merkkijono, joka pitää tarvittaessa muuntaa luvuksi (`parseInt`) ennen laskutoimituksia.
* **Satunnaisluvut (`Math.random`)**: Opin käyttämään `Math.random()`- ja `Math.floor()`-funktioita yhdessä halutun kokoisten satunnaisten kokonaislukujen arvontaan (kuten noppien silmäluvut tai lajitteluhatun tuvat).
* **Ohjausrakenteet ja toistot**: Opin hyödyntämään ehtolausekkeita ja monivalintarakenteita (`switch` / `if-else`) sekä toistorakenteita (`for`-silmukka) ohjelman logiikan toteuttamiseen.
* **DOM-manipulaatio**: Opin yhdistämään JavaScript-koodin HTML-sivuun ja päivittämään sivun sisältöä dynaamisesti `document.querySelector("#target").innerHTML` -komennolla.