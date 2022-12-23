let fs = 'Fantabulous';
if (fs === 'Fantabulous') alert("JavaScript is Intresting!")

40 + 70 + 50 - 70;
40 + 70 + 50 - 70;
console.log(40 + 70 + 50 - 120);

// console.log("roland");
// let firstName = "Opeyemi";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// console.log(firstName + 5);

let tr = '23'
tr = parseFloat(tr);
console.log(tr + 45);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'roland');

// let age = 30;
// age = 31;


const now = 2022
const ageRoland = now - 1997;
const ageItunu = now - 2000;
console.log (ageRoland, ageItunu)

console.log(ageRoland * 2, ageItunu / 2,)

const firstName = 'roland'
const lastName = 'Onabolujo'
console.log(firstName + ' ' + lastName)

let x = 10 + 5;
x +=10;
x *=4;
x++;
x--;
console.log(x)

//comparative operation
console.log(ageRoland > ageItunu);
console.log(ageRoland < ageItunu);
console.log(ageItunu <= 50)

console.log(now - 1997 > now - 2000);
//converrsion types
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 5);

console.log(Number('Roland'))

console.log(String(23), 23)
//type coercion
console.log('I am ' + 23 + ' years old');
console.log(23 + 10 + 3);
console.log('23' - '10' - '3');
console.log('23' / '2');

let n = '1' + '1';
n = n - 1
console.log(n);
//Boolean logic 
const hasDriversLicense = true // A
const hasGoodVision = false // B
 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive) {
    console.log('Sarah is able to drive!!');
} else {
    console.log('Someone else should drive...!')
}

//THE SWITCH STATEMENT

const day = 'saturday';

switch(day) {
 case 'monday': // day monday
    console.log('Plan courses Structure');
    console.log('Go to coding meetup');
    break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
        default:
            console.log('Not a valid day!');
        
}
// using the if else statement 
if (day === 'monday') {
    console.log('Plan courses Structure');
    console.log('Go to coding meetup');
 } else if(day === 'tuesday'){
    console.log('Prepare theory videos');
 } else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
 } else if (day === 'friday' ) {
    console.log('Record videos');
 } else if (day === 'saturday' || day === 'sunday' ) {
    console.log('Enjoy the weekend :D');
 } 

// conditional ternary operator
 const age = 23;
 age >= 18 ? console.log ('I like to drink wine 🍷'):
 console.log('I like to drink water 💧')

const drink = age >= 18 ? 'wine 🍷 ' : 'water 💧';
console.log(drink);

// tip Calculator

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
  