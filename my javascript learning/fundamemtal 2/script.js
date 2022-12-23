'use strict';
const itunu = 'cookFood';

if (itunu === 'cookFood') {
console.log('Roland is happy😄')
} else {
 console.log ('Roland is not happy🥲')
}

function logger() {
    console.log('my name is Roland Onabolujo')
}
//calling /running /invoking 
logger();
logger(); 
logger();

 // console.log(apples, oranges);
function fruitProcessor(apples, oranges) {
   
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log (appleOrangeJuice);

// Function declaration
function calcAge1(birthYear) {
   return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log (age1, age2);

//arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

// function calling functions
function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console. log (fruitProcessor(2, 3));
