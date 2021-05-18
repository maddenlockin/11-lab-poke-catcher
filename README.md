HTML setup: 
need button 
    why? to throw pokeball (which changes data in local storage and rerenders the DOM)
3 + radio buttons with 3 images
    why radio buttons? to select which pokemon was caught
    why image? to display which pokemon has been encountered. 

Events:
on load
    get a list 
    set the first random number set
    return the images of the mokemon and increment the pokedex array of encountering
on clicking "capture" button
    increment the captured pokemon 
    render a new set of pokemon (using while loop)
    increment the encounter
    -get:
        -current 'cart'/pokedex
        -figure out the id of the pokemon that the user selected
    -use the id and cart to:
        -use findbyId to get the selected pokemon from the pokedex
        -increment the captured property of the selected pokemon
-----renderThreePokemon function here
        --------------------------------------------------------
    -generate 3 new random pokemon
        -Q: how do we prevent repeats? (A: use a `while` loop)
    -look at the 3 pokemon and crement their encountered properties
        - if this is the first time we encounter the pokemon, initialize a new item
        -otherwise just increment the encountered. 

        -render3 pokemon function can replace below line 
