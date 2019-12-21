// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

console.log(lower);

function generatePassword(lower, upper, number, symbol, length) {

    const typesCount = lower + upper + number + symbol;

    console.log(typesCount);

    const typesArr = [lower, upper, number, symbol];

    console.log(typesArr);
}

generatePassword();
// Generator Functions - http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '\'!#$%&()*+,-./:;<=>?@[\\]^_`{|}~'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

