import { findById } from "./utils.js";
const Pokedex = 'Pokedex';

export function getPokedex() {
    const stringPokedex = localStorage.getItem(Pokedex);
    
    if (!stringPokedex) { return [] };
    
    const pokedex = JSON.stringify(newPokedex);
    
    return pokedex;
};
export function setPokedex() {
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