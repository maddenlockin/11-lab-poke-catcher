import rawPokeData from './data/pokedex.js';
import { capturePokedex, encounterPokedex } from './local-storage-utils.js';
//grab DOM elements
const button = document.querySelector('#catch');
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

//console.log(button, radio1, radio2, radio3, img1, img2, img3);

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * rawPokeData.length);

    const randomPokemon = rawPokeData[randomIndex];

    return randomPokemon;
}

export function renderThreePokemon() {
    let poke1 = getRandomPokemon(); 
    let poke2 = getRandomPokemon(); 
    let poke3 = getRandomPokemon(); 

    //console.log(poke1);
    //console.log(poke2);
    //console.log(poke3);

    while (poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    };

    encounterPokedex(poke1.id);
    encounterPokedex(poke2.id);
    encounterPokedex(poke3.id);

    img1.src = poke1.url_image;
    img2.src = poke1.url_image;
    img3.src = poke1.url_image;

    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
};

button.addEventListener('click', () => {
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;
    renderThreePokemon();
});