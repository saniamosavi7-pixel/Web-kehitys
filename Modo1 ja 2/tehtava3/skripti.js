"use strict";

// Pyydetään käyttäjältä kolme lukua ja muunnetaan ne kokonaisluvuiksi
let luku1 = parseInt(prompt("Anna ensimmäinen kokonaisluku:"));
let luku2 = parseInt(prompt("Anna toinen kokonaisluku:"));
let luku3 = parseInt(prompt("Anna kolmas kokonaisluku:"));

// Lasketaan summa, tulo ja keskiarvo
let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;

// Tulostetaan tulokset HTML-sivulle
document.querySelector("#target").innerHTML =
  "Summa: " + summa + "<br>" +
  "Tulo: " + tulo + "<br>" +
  "Keskiarvo: " + keskiarvo;