import { findById } from "./utils.js";
const Pokedex = 'Pokedex';

export function getPokedex() {
    const JSONPokedex = localStorage.getItem(Pokedex);
    //console.log(JSONPokedex, 'in get pokedex')
    if (!JSONPokedex) { return [] };
    
    const pokedex = JSON.parse(JSONPokedex);
    //console.log(pokedex)
    return pokedex;
};
// below takes in an object
export function setPokedex(newPokedex) {
    //console.log(newPokedex)
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
    
    //console.log(matchingPokemon, 'matching');
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newPoke = {
            id: selectedPokemonId,
            captured: 0,
            encountered: 1,
        };
        pokedex.push(newPoke);
        
    };
    setPokedex(pokedex);
}