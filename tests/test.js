// IMPORT MODULES under test here:
import { findById } from "../utils.js";
import { getPokedex, setPokedex, capturePokedex, encounterPokedex } from '../local-storage-utils.js';
//import rawPokeData from '../data/pokedex.js';
//import { getPokedex } from "../local-storage-utils.js";



const test = QUnit.test;

const someArray= [
    {
        id: 1,
        name: 'bulbasar',
        captured: 0,
        encountered: 0
    },
    {
        id:2,
        name: 'ivysaur',
        captured: 0,
        encountered: 0
    }
]

test('test findById', (expect) => {

    const expected = 1;
    const findPoke = findById(someArray, 1);
    const actual = findPoke.id;

    expect.equal(actual, expected);
});

test('setPokedex should take an object and put the stringified version into local storage under the key Pokedex', (expect) => {

    setPokedex(someArray[0]);

    const expected = someArray[0];
    const stringPokedex = localStorage.getItem('Pokedex');
    const parsePokedex = JSON.parse(stringPokedex);

    expect.deepEqual(parsePokedex, expected);
});

test('getPokedex should get a parsed version of the pokedex from Local Storage', (expect) => {
    
    const stringPokedex = JSON.stringify(someArray);
    localStorage.setItem('Pokedex', stringPokedex);

    const actual = getPokedex();

    expect.deepEqual(actual, someArray);
});

// test('capturePokedex should update a single pokemon with its capture value incremented by 1', (expect) => {
//     capturePokedex(2);
//     const pokemon = findById(someArray, 2)
//     console.log(pokemon)
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = 1;
//     const actual = pokemon.captured;
    
//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

// test('time to test getRandomPokemon', (expect) => {

//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });





// test('time to test getRandomPokemon', (expect) => {

//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

//get pokedex (all?)
//get 3
//check local storage before and after and see that it changes the way you want it to
