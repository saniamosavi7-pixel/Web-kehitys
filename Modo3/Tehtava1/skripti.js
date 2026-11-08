const numbers = [];

// Pyydetään käyttäjältä viisi numeroa ja tallennetaan ne taulukkoon
for (let i = 0; i < 5; i++) {
  let num = Number(prompt(`Anna numero ${i + 1}:`));
  numbers.push(num);
}

// Tulostetaan numerot käänteisessä järjestyksessä for-silmukan avulla
console.log("Numerot käänteisessä järjestyksessä:");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}