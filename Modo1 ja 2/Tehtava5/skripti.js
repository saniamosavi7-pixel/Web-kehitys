"use strict";

const vuosi = parseInt(prompt("Syötä vuosiluku:"));

// Tarkistetaan karkausvuosisäännöt:
// Vuosi on karkausvuosi, jos se on jaollinen 4:llä, mutta ei 100:lla, TAI jos se on jaollinen 400:lla.
if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
  document.querySelector("#target").innerHTML = `Vuosi ${vuosi} on karkausvuosi.`;
} else {
  document.querySelector("#target").innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi.`;
}