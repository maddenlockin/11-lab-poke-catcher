import { findById } from '../utils.js';
import pokemon from "../data/pokedex.js";
import { getPokedex } from "../local-storage-utils.js"

export function mungeCaptured(pokemonArray) {
    // initialize an empty array
    const resultsArray = [];
    //loop through each item in pokemonArray
    for (let poke of pokemonArray) {
        resultsArray.push(poke.captured);
    } 
    return resultsArray;
    //push the captured key on the pokemonArray
    //el.captured paired with results.push ==> results.push(el.captured)
}

export function mungeNames(pokemonArray) {
     // initialize an empty array
    const results = [];

    const data = findById(pokemon, pokemonArray[2].id);
    //console.log(data.pokemon);
    // loop thorugh each item in array
    for (let poke of pokemonArray) {
    // get data from pokemon list using findbyid
    // push data.pokemon onto the results
        const data = findById(pokemon, poke.id);
        results.push(data.pokemon);
    }
    //expected output: 
    return results;
}

export function mungeColors(pokemonArray) {
    const resultsArray = [];

    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);

        resultsArray.push(data.color_1);
    } 
    return resultsArray;
}

export function getTotalCaptured(){
    let total = 0;

    const pokedex = getPokedex();

    for(let poke of pokedex) {
        total += poke.captured;
    }
    return total;
}




//anyone in your network to introduce me to?