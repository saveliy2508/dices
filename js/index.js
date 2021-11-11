//variables of area background and button
const area = document.getElementById('area');
const background = document.getElementById('background');
const startButton = document.getElementById('start-button');
const audio = new Audio('dices.mp3');

//variables of dices
const dice11 = document.getElementById('dice11');
const dice12 = document.getElementById('dice12');
const dice13 = document.getElementById('dice13');
const dice14 = document.getElementById('dice14');
const dice15 = document.getElementById('dice15');
const dice16 = document.getElementById('dice16');
const dice21 = document.getElementById('dice21');
const dice22 = document.getElementById('dice22');
const dice23 = document.getElementById('dice23');
const dice24 = document.getElementById('dice24');
const dice25 = document.getElementById('dice25');
const dice26 = document.getElementById('dice26');

//function of start game
function start() {
    background.classList.add('display-none');
    startButton.classList.add('display-none');
}

startButton.addEventListener('click', start);

// function of roll the dice
function rollDices1 () {
    let i = Math.ceil(Math.random() * 6);
    if (i === 1) {
        dice11.classList.remove('display-none');
        dice12.classList.add('display-none');
        dice13.classList.add('display-none');
        dice14.classList.add('display-none');
        dice15.classList.add('display-none');
        dice16.classList.add('display-none');
    } else if (i === 2) {
        dice12.classList.remove('display-none');
        dice11.classList.add('display-none');
        dice13.classList.add('display-none');
        dice14.classList.add('display-none');
        dice15.classList.add('display-none');
        dice16.classList.add('display-none');
    } else if (i === 3) {
        dice13.classList.remove('display-none');
        dice11.classList.add('display-none');
        dice12.classList.add('display-none');
        dice14.classList.add('display-none');
        dice15.classList.add('display-none');
        dice16.classList.add('display-none');
    } else if (i === 4) {
        dice14.classList.remove('display-none');
        dice11.classList.add('display-none');
        dice12.classList.add('display-none');
        dice13.classList.add('display-none');
        dice15.classList.add('display-none');
        dice16.classList.add('display-none');
    } else if (i === 5) {
        dice15.classList.remove('display-none');
        dice11.classList.add('display-none');
        dice12.classList.add('display-none');
        dice13.classList.add('display-none');
        dice14.classList.add('display-none');
        dice16.classList.add('display-none');
    } else if (i === 6) {
        dice16.classList.remove('display-none');
        dice11.classList.add('display-none');
        dice12.classList.add('display-none');
        dice13.classList.add('display-none');
        dice14.classList.add('display-none');
        dice15.classList.add('display-none');
    }
    audio.play();
}
function rollDices2 () {
    let i = Math.ceil(Math.random() * 6);
    if (i === 1) {
        dice21.classList.remove('display-none');
        dice22.classList.add('display-none');
        dice23.classList.add('display-none');
        dice24.classList.add('display-none');
        dice25.classList.add('display-none');
        dice26.classList.add('display-none');
    } else if (i === 2) {
        dice22.classList.remove('display-none');
        dice21.classList.add('display-none');
        dice23.classList.add('display-none');
        dice24.classList.add('display-none');
        dice25.classList.add('display-none');
        dice26.classList.add('display-none');
    } else if (i === 3) {
        dice23.classList.remove('display-none');
        dice21.classList.add('display-none');
        dice22.classList.add('display-none');
        dice24.classList.add('display-none');
        dice25.classList.add('display-none');
        dice26.classList.add('display-none');
    } else if (i === 4) {
        dice24.classList.remove('display-none');
        dice21.classList.add('display-none');
        dice22.classList.add('display-none');
        dice23.classList.add('display-none');
        dice25.classList.add('display-none');
        dice26.classList.add('display-none');
    } else if (i === 5) {
        dice25.classList.remove('display-none');
        dice21.classList.add('display-none');
        dice22.classList.add('display-none');
        dice23.classList.add('display-none');
        dice24.classList.add('display-none');
        dice26.classList.add('display-none');
    } else if (i === 6) {
        dice26.classList.remove('display-none');
        dice21.classList.add('display-none');
        dice22.classList.add('display-none');
        dice23.classList.add('display-none');
        dice24.classList.add('display-none');
        dice25.classList.add('display-none');
    }
}

area.addEventListener('click', rollDices1)
area.addEventListener('click', rollDices2)