"use strict";

const nimi = prompt("Anna nimesi:");

// Arvotaan kokonaisluku väliltä 1–4
const arvottuLuku = Math.floor(Math.random() * 4) + 1;

let tupa = "";

if (arvottuLuku === 1) {
  tupa = "Gryffindor";
} else if (arvottuLuku === 2) {
  tupa = "Slytherin";
} else if (arvottuLuku === 3) {
  tupa = "Hufflepuff";
} else {
  tupa = "Ravenclaw";
}

document.querySelector("#target").innerHTML = `${nimi}, you are ${tupa}.`;