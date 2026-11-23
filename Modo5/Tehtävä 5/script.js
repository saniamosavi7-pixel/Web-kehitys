fetch('https://api.chucknorris.io/jokes/random')
  .then(vastaus => vastaus.json())
  .then(data => {
    console.log(data.value);
  })
  .catch(virhe => console.error('Virhe:', virhe));