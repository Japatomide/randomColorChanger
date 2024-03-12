let container = document.querySelector('#container')
let button = document.querySelector('a')
let displayHex = document.querySelector('h1')

const validCharacters = '0123456789ABCDEF';
const hexDecimalLength = 6;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}

function getNextRandomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let getRandomChar = validCharacters.charAt(randomIntFromInterval(0, 15))
        color += getRandomChar;
    }
    displayHex.innerHTML = color;
    container.style.backgroundColor = color;
}

getNextRandomColor()

button.addEventListener('click', function(){
    getNextRandomColor()
}, false)