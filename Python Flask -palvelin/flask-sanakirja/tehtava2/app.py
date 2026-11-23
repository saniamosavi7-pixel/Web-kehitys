
import json
import os
from flask import Flask, jsonify

app = Flask(__name__)

DICTIONARY_FILE = os.path.join(os.path.dirname(__file__), 'dictionary.json')

def load_dictionary():
    """Lataa sanakirjan JSON-tiedostosta ja muuntaa avaimet pieniksi kirjaimiksi."""
    try:
        with open(DICTIONARY_FILE, 'r', encoding='utf-8') as file:
            data = json.load(file)
            # Varmistetaan, että kaikki avaimet ovat pienillä kirjaimilla
            return {key.lower(): value for key, value in data.items()}
    except FileNotFoundError:
        print(f"Virhe: Tiedostoa {DICTIONARY_FILE} ei löytynyt.")
        return {}

dictionary = load_dictionary()

@app.route('/translate/<string:word>', methods=['GET'])
def translate_word(word):

    search_word = word.lower()
    
    if search_word in dictionary:
        return jsonify({
            "English": word,
            "Finnish": dictionary[search_word]
        }), 200
    else:
        return jsonify({
            "error": "Word not found"
        }), 404

@app.route('/words', methods=['GET'])
def get_all_words():
    """Valinnainen päätepiste: palauttaa listan kaikista englanninkielisistä sanoista."""
    words_list = list(dictionary.keys())
    return jsonify(words_list), 200

if __name__ == '__main__':


    app.run(host='127.0.0.1', port=3000, debug=True)