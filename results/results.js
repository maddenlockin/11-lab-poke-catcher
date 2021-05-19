import { mungeCaptured, mungeNames, mungeColors } from "./data-utils.js";
import pokemon from "../data/pokedex.js";
import { getPokedex } from "../local-storage-utils.js";

let ctx = document.getElementById('myChart').getContext('2d');
let resetButton = document.getElementById('reset-button');

const pokeDex = getPokedex();
const names = mungeNames(pokeDex);
//console.log(names);
const capturedData = mungeCaptured(pokeDex);
//console.log(capturedData);
const colors = mungeColors(pokeDex);
//console.log(colors);


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: capturedData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    localStorage.clear();   
    //redirect home
    window.location.replace('/'); 
    //clear localstorage
    
});