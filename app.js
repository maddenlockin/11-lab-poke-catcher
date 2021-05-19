import rawPokeData from './data/pokedex.js';
import { capturePokedex, encounterPokedex, setPokedex, getPokedex } from './local-storage-utils.js';
import { getTotalCaptured } from './results/data-utils.js';

//grab DOM elements
const button = document.querySelector('#catch-button');
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

renderThreePokemon();

//console.log(button, radio1, radio2, radio3, img1, img2, img3);
button.addEventListener('click', () => {
    
    const selectedRadio = document.querySelector(':checked');
    //console.log(selectedRadio);
    if (selectedRadio) {
        const selectedPokemonId = selectedRadio.value;
        capturePokedex(selectedPokemonId);
        //renderThreePokemon();
    } else {
        alert('pick a pokemon to catch!');
    }
    const totalCaptured = getTotalCaptured();
    if (totalCaptured >= 10) {
        window.location.replace('/results');
    } else {
        renderThreePokemon();
    }
});

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * rawPokeData.length);

    const randomPokemon = rawPokeData[randomIndex];

    return randomPokemon;

}

function renderThreePokemon() {
    let poke1 = getRandomPokemon(); 
    let poke2 = getRandomPokemon(); 
    let poke3 = getRandomPokemon(); 

    // console.log(poke1);
    // console.log(poke2);
    // console.log(poke3);

    while (poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    };

    encounterPokedex(poke1.id);
    encounterPokedex(poke2.id);
    encounterPokedex(poke3.id);

    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;

    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
};

