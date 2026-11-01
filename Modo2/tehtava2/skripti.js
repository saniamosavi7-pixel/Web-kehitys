"use strict";

const noppaMaara = parseInt(prompt("Syötä noppien lukumäärä:"));
const tavoiteSumma = parseInt(prompt("Syötä haluttu silmien summa:"));

const toistot = 10000;
let osumat = 0;

for (let i = 0; i < toistot; i++) {
  let nykySumma = 0;

  for (let j = 0; j < noppaMaara; j++) {
    const heitto = Math.floor(Math.random() * 6) + 1;
    nykySumma += heitto;
  }

  if (nykySumma === tavoiteSumma) {
    osumat++;
  }
}

const todennakoisyys = (osumat / toistot) * 100;

document.querySelector("#target").innerHTML = 
  `Probability to get sum ${tavoiteSumma} with ${noppaMaara} dice is ${todennakoisyys.toFixed(2)}%`;