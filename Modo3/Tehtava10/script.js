
let ehdokkaat = {
    "Kahvi": 0,
    "Tee": 0,
    "Kaakao": 0
};


function annaAani(ehdokas) {
    if (ehdokkaat[ehdokas] !== undefined) {
        ehdokkaat[ehdokas]++;
        console.log(`Ääni annettu kohteelle: ${ehdokas}`);
        naytaTulokset();
    } else {
        console.log("Ehdokasta ei löydy.");
    }
}


function naytaTulokset() {
    console.log("--- Äänestyksen tilanne ---");
    for (let ehdokas in ehdokkaat) {
        console.log(`${ehdokas}: ${ehdokkaat[ehdokas]} ääntä`);
    }
    console.log("---------------------------");
}


annaAani("Kahvi");
annaAani("Kahvi");
annaAani("Tee");
annaAani("Kaakao");