const lomake = document.getElementById('haku-lomake');
const syote = document.getElementById('hakusana');
const tulokset = document.getElementById('tulokset');

lomake.addEventListener('submit', async function (event) {
  event.preventDefault();

  const hakusana = syote.value.trim();
  if (!hakusana) {
    return;
  }

  tulokset.innerHTML = '';

  try {
    const vastaus = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(hakusana)}`);

    if (!vastaus.ok) {
      throw new Error(`HTTP-virhe! Status: ${vastaus.status}`);
    }

    const data = await vastaus.json();

    if (data.result.length === 0) {
      tulokset.innerHTML = '<p>Hakusanalla ei löytynyt vitsejä.</p>';
      return;
    }

    for (const vitsi of data.result) {
      const artikkeli = document.createElement('article');
      artikkeli.textContent = vitsi.value;
      tulokset.appendChild(artikkeli);
    }
  } catch (virhe) {
    console.error('Virhe haettaessa vitsejä:', virhe);
    tulokset.innerHTML = '<p>Vitsien hakeminen epäonnistui.</p>';
  }
});