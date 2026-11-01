let nimi = prompt("Mikä on nimesi?");

let tervehdysElementti = document.getElementById("tervehdys");

if (nimi && nimi.trim() !== "") {
    tervehdysElementti.textContent = "Hello, " + nimi + "!";
} else {
    tervehdysElementti.textContent = "Hello, Guest!";
}