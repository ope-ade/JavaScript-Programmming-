// 'use strict';
// const itunu = 'cookFood';

// if (itunu === 'cookFood') {
// console.log('Roland is happy😄')
// } else {
//  console.log ('Roland is not happy🥲')
// }

// function logger() {
//     console.log('my name is Roland Onabolujo')
// }
// //calling /running /invoking 
// logger();
// logger(); 
// logger();

//  // console.log(apples, oranges);
// function fruitProcessor(apples, oranges) {
   
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const applejuice = fruitProcessor(5,0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log (appleOrangeJuice);

// // Function declaration
// function calcAge1(birthYear) {
//    return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log (age1, age2);

// //arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// // function calling functions
// function cutFruitPieces (fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console. log (fruitProcessor(2, 3));

// //coding chalenge 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// //Test 1
// let scoreDolphins = calcAverage(14, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs 
//             ${avgKoalas})`);
//     } else if (avgKoalas >=2 * avgDolphins) {
//         console.log(`Dolphins win (${avgDolphins} vs 
//             ${avgKoalas})`);
//     } else {
//         console.log('No team wins...')
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(567,111);

// //test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas)
// checkWinner(scoreDolphins, scoreKoalas);


// //Arrays
// const friend1 = 'Micheal'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Micheal','Steven','Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020)
// console.log(years)

// console.log(friends[0]); // to select micheal
// console.log(friends[2]); //to sellect peter

// console.log(friends.length); //total number in an array
// console.log(friends[friends.length-1]) // to retrieve element from the arry

// friends[2] = 'Jay'
// console.log(friends);
// const firstName = 'itunu'
// const roland = [firstName, 'olufemi', 2037-1991, 'teacher', friends];
// console.log(roland)


// //excercise
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yea = [1990, 1967, 2002, 2010, 2018];

// const agex = calcAge2(yea[0]);
// const agey = calcAge2(yea[1]);
// const agez = calcAge2(yea[yea.length -1]);
// console.log(agex,agey,agez);

// const ages = [calcAge2(yea[0]), calcAge2(yea[1]), calcAge2(yea[yea.length -1])];
// console.log(ages);

const friends = ['Micheal','Steven','Peter'];
friends.push('jay'); // to add element to the end of the array
console.log(friends)

friends.unshift('john')
console.log(friends); // to add element to thr begining of an array

friends.pop() 
const popped = friends.pop()
console.log(popped); // to remove element from array 
console.log(friends);

friends.shift() // to remove element from the array
console.log(friends);

console.log(friends.indexOf('Steven')); // to get the position of an element 

console.log(friends.includes('Steven')); // to find out if an element is present in an array true or false
console.log(friends.includes('Bob')); // this is false because bob is not presence on the array
 
friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}

///OBJECT
const roland = {
    firstName: 'Roland',
    LastName:'Onabolujo',
    age: 2023-1997,
    Job: 'Software engineer', 
    Friends:['Micheal', 'Peter', 'Raymond']
};
console.log(roland);

console.log(roland.LastName); // to call out lastName from the properties using the dot 
console.log(roland['LastName']); 

const nameKey = 'Name'
console.log(roland['first' + nameKey]);
console.log(roland['Last' + nameKey]);

const intrestedIn = prompt('what do you want to know about roland? choose between firstName, lastName, age, Job and friend');

if (roland[intrestedIn]) {
    console.log(roland[intrestedIn]);
} else {
    console.log('wrong request! choose between firstName, lastName, age, job, and friends')
}


c  