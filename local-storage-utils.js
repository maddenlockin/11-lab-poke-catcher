import { findById } from "./utils.js";
const Pokedex = 'Pokedex';

export function getPokedex() {
    const JSONPokedex = localStorage.getItem(Pokedex);
    
    if (!JSONPokedex) { return [] };
    
    const pokedex = JSON.parse(JSONPokedex);
    
    return pokedex;
};
// below takes in an object
export function setPokedex(newPokedex) {
    const stringPokedex = JSON.stringify(newPokedex);
    
    localStorage.setItem(Pokedex, stringPokedex);
};

export function capturePokedex(selectedPokemonId) {
    const pokedex = getPokedex();

    const matchingPokemon = findById(pokedex, selectedPokemonId);
    
    matchingPokemon.captured++;

    setPokedex(pokedex);
};

export function encounterPokedex(selectedPokemonId) {
    const pokedex = getPokedex();

    const matchingPokemon = findById(pokedex, selectedPokemonId);

    if (matchingPokemon) {

        matchingPokemon.encountered++;

    } else {
        const newItem = {
            captured: 0,
            encountered: 1,
            id: selectedPokemonId,
        };
    pokedex.push(newItem);
    };
    matchingPokemon.captured++;

    setPokedex(pokedex);
}