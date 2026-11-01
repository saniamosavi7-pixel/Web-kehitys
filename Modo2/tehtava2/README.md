Tehtävä 1-2 tehty 
Mitä tein?

Pyysin käyttäjältä noppien lukumäärän ja halutun silmien summan prompt()-funktiolla ja muunsin ne numeroiksi (parseInt).

Tein simulaation käyttämällä kaksi sisäkkäistä for-silmukkaa:

Ulompi silmukka toistaa heittoja 10 000 kertaa.

Sisempi silmukka arpoo noppien silmäluvut (Math.random() ja Math.floor()) ja laskee niiden summan yhteen.

Laskin kuinka moni toistoista tuotti tavoitesumman ja muunsin tuloksen prosenttiluvuksi.

Rajoitin desimaalit kahteen toFixed(2)-metodilla ja tulostin tuloksen HTML-sivulle muodossa:
Probability to get sum 7 with 2 dice is 15.64%

Mitä opin?

Simulointi silmukalla: Opin ratkaisemaan todennäköisyystehtävän simuloimalla satunnaistapahtumaa suuren määrän kertoja (10 000 toistoa).

Sisäkkäiset silmukat: Opintojen ohessa opin hyödyntämään kaksi sisäkkäistä for-silmukkaa eri tarkoituksiin (toistomäärä ja noppien määrä).

Numeroiden pyöristäminen: Opin käyttämään toFixed()-funktiota selkeän desimaalitulostuksen saavuttamiseksi.