"use strict";

const luku = parseInt(prompt("Syötä kokonaisluku:"));

let onkoAlkuluku = true;

if (luku <= 1) {
  onkoAlkuluku = false;
} else {
 
  for (let i = 2; i < luku; i++) {
    if (luku % i === 0) {
      onkoAlkuluku = false;
      break;
    }
  }
}


if (onkoAlkuluku) {
  document.querySelector("#target").innerHTML = `Luku ${luku} on alkuluku.`;
} else {
  document.querySelector("#target").innerHTML = `Luku ${luku} ei ole alkuluku.`;
}