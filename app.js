////////////////////////////////////////////////////////
//Use this to make it easier to debug in your programme
('use strict');
////////////////////////////////////////////////////////

// TODO
//Things to go back to
//1. Truthy and Falsey Values
//2. Expressions and Statements

//NOTES
// Command + D to hide/show side bar

///////////////////////////////////////////////////////
// Variable types
///////////////////////////////////////////////////////
// let markWeight = 78
// let markHeight = 1.69
// let johnWeight = 92
// let johnHeight = 1.95

// const markBMI = markWeight/(markHeight**2);
// const johnBMI = johnWeight/(johnHeight**2);
// let markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI)

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//
//
//
//
/////////////////////////////////////////////////
//Switch Statements
///////////////////////////////////////////////////

// const day = 'Satvhbjnmy'

// switch(day){
// 	case 'Monday':
// 	console.log('papi');
// 	break;

// 	case 'Tuesday':
// 	case 'Wednesday':
// 	console.log("yooo");
// 	break;

// 	case 'Friday':
// 	console.log("Its friday")
// 	break;

// 	case 'Saturday':
// 	case 'Sunday':
// 	console.log("Its the weekend")
// 	break;

// 	default:
// 	console.log("Not valid")
// }

////////////////////////////////////////////////////
////////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////////
// Ternary Operator
///////////////////////////////////////////////////

// let tip, bill;
// bill = 40
// tip = bill>=50 && bill<=300 ?  (15/100)*bill : (20/100)*bill;

// console.log(tip)
// console.log(bill)

// console.log(`The bill is ${bill}, the tip is ${tip} and the total value is ${bill+tip}`)

////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////////////////
//Arrow Functions: Function Expressions
///////////////////////////////////////////////////////////

// const clacAge3 = birthYear => 2037- birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = birthYear => {
// 	const age = 2037 - birthYear;

// 	const retirment = 65 - age;

// 	return retirment
// }

// console.log(yearsUntilRetirement(1991))

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////////////
// Function Declarations
///////////////////////////////////////////////////////

// function calc(birthYear){
// 	const age = 2022 - birthYear

// 	console.log(`you are ${age}`)

// 	return age;
// }

// const age = calc(2002)

// console.log(age)

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////////////////
// Section 3: Coding Challenge #1
///////////////////////////////////////////////////////////////
// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3

// let averageDolphins = calcAverage(85, 54, 41);
// let averageKoalas = calcAverage(23, 34, 27);

// const checkWinner = (averageKoalas, averageDolphins) => {
// 	if(averageDolphins>=(2*averageKoalas)){
// 		return `Dolphins win (${averageKoalas} vs. ${averageDolphins})`
// 	} else if(averageKoalas>=(2*averageDolphins)){
// 		return `Koalas win (${averageKoalas} vs. ${averageDolphins})`
// 	} else{
// 		return -1
// 	}
// }

// console.log(checkWinner(averageKoalas, averageDolphins))

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////////////////////////////////////
// Section 3: Coding challeng #2
///////////////////////////////////////////////////////////////////////////////

// const calcTip = (bill)=>{
// 	if( bill>=50 && bill<=300){
// 		return bill * 0.15
// 	}else{
// 		return bill * 0.2
// 	}
// }

// const tip1 = calcTip(100)

// // console.log(tip1)

// const bills = new Array(125,555,44)
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]]

// console.log(bills)
// console.log(tips)
// console.log(total)

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//////////////////////////////////////////////////////////////////////////////////
// Working with Objects
////////////////////////////////////////////////////////////////////////////////////

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: "Salaki",
// 	birthYear: 2002,
// 	job: "Student",
// 	friends: ['Micheal', 'Nathan', 'Jamie'],
// 	hasDriversLicense: false,

// 	calcAge: function(){
// 		this.age = 2022 - this.birthYear
// 		return this.age
// 	},

// 	getSummary: function(){
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? "has a" : "does not have a"} driver's license`
// 	}
// }

// console.log(jonas.getSummary())

// console.log(jonas['calcAge'](jonas.birthYear))

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////////////////////////
//Section 3: Coding Challenge #3
//////////////////////////////////////////////////////////////

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 1.69,

// 	calcBMI: function(){
// 		this.BMI = this.mass / (this.height * this.height)
// 		return this.BMI
// 	}
// }

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 1.95,

// 	calcBMI: function(){
// 		this.BMI = this.mass / (this.height * this.height)
// 		return this.BMI
// 	}
// }

// if(john.calcBMI()>mark.calcBMI()){
// 	console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})`)
// }else{
// 	console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`)
// }
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//
//
//
//
//////////////////////////////////////////////////////
// Working with Array loops
///////////////////////////////////////////////////////

// const papi = ['Oshioke', 'Salaki', 2022-2002, 'student', ['James', 'Nathan', 'John'], true];

// const types = []

// for (let i = 0; i < papi.length; i++){

// 	types.push(typeof papi[i])

// 	// types[i] = typeof papi[i];
// }

// console.log(types)

// const years = [1991, 2007, 2002, 2000]

// const ages =[]

// for (let i =0; i<years.length; i++){
// 	ages.push(2022 - years[i])
// }

///////////////////////////////////////////////////
//////////////////////////////////////////////////
//
//
//
//
///////////////////////////////////////////
// Continue and Break in Loops
////////////////////////////////////////

//Continue tells the loop to go to the next iteration
//Break tells the loop to terminate

// for (let i = 0; i < papi.length; i++){
// 	if(typeof papi[i] !== 'string') continue;

// 	console.log(papi[i], typeof papi[i])
// }

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//
//
//
//
//////////////////////////////////////////////
//Loops inside loops
///////////////////////////////////////////////

// for(let i =1; i<=3; i++){
// 	for(let j = 1; j<=5; j++){
// 		console.log('Excercise')
// 	}
// }

////////////////////////////////////////////////
////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////
// Section 3: Coding Challenge #4
//////////////////////////////////////////////////
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const osh = [2, 1, 6];

// const calcAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// };

// console.log(calcAverage(totals));

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//
//
//
//
////////////////////////////////////////////////////
// Problem Solving
////////////////////////////////////////////////////////

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const tempAltitudeCalc = (arr) => {
//     let highestTemp = arr[0];
//     let lowestTemp = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'error') continue;

//         if (highestTemp < arr[i]) highestTemp = arr[i];
//         if (lowestTemp > arr[i]) lowestTemp = arr[i];
//     }

//     console.log(lowestTemp);

//     return highestTemp - lowestTemp;
// };

// console.log(tempAltitudeCalc(temperature));

////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//
//
//
//
/////////////////////////////////////////////////////////////
//Section 5: Coding challenge #1
////////////////////////////////////////////////////////////

// const printForecast = (arr) => {
//     let output = '';

//     for (let i = 0; i < arr.length; i++) {
//         output += `... ${arr[i]}C in ${i + 1} ${i + 1 === 1 ? 'day' : 'days'} `;
//     }

//     return output;
// };

// console.log(printForecast([1, 3, 4]));

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//
//
//
//
/////////////////////////////////////////////////////////////
//  Array Destructuring
///////////////////////////////////////////////////////////
// const resturant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenza, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccta', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
// };

// const arr = [2, 3, 4];
// const a  = arr[0]
// const b  = arr[1]
// const c  = arr[2]

//This is how we destructure arrays
// const [x, y, z] = arr;
// console.log(x, y, z);
//
//
//Here we take the first two consecutive values from the resturant.categoris array
// const [first, second] = resturant.categories;
// console.log(first, second);
//
//
//Here we take non consecutive values form the resturant.categoris array. Using a Gap. i.e. first and third
// const [first, , third] = resturant.categories;
// console.log(first, third);
//
//
//Using Destructing to switch two values
// let [main, secondary] = resturant.categories;
// [main, secondary] = [secondary, main];
//
//
//Receiving 2 return values from a function
// const [starter, main] = resturant.order(2, 0);
// console.log(stater, main);
//
//
//Handling nested arrays
// const nested = [2, 4, [5, 6]];

// const [a, , b] = nested;

// console.log(b[0]);

//inner destruturing :)
// const [i, , [j, l]] = nested;
// console.log(l);
/////////////////////////////////////////////////////////////
//
//
////////////////////////////////////////////////////////
//Object Destructuring
////////////////////////////////////////////////////////
const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenza, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccta', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 8,
            close: 23,
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function(obj) {
        console.log(obj);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

// resturant.orderDelivery({
//     time: '22:30',
//     address: 'Via del sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

//Use {} for object destructuring
//The order of the elements does not matter. But you have to use the exact property name.
// const { name, openingHours, categories } = resturant;
// console.log(name, openingHours, categories);

//But if we want custom names we use :
// const {
//     name: resturantName,
//     openingHours: hours,
//     categories: tags,
// } = resturant;

// console.log(resturantName, hours, tags);

//setting default values
// const { menu = [], starterMenu: starters = [] } = resturant;

//Mutating variables while destruturing objects
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
//wrap in ()
// ({ a, b } = obj);

// console.log(a, b);

//Handling nested objects
// const {
//     fri: { open: start = '', close: close = '', jjkk: yo = '' },
// } = openingHours;

// console.log(start, yo);

/////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////
// The Spread Operator "..."
//////////////////////////////////////////////////
const arr = [7, 8, 9];

const newArray = [1, 2, ...arr];
console.log(newArray);

//This logs the individual elements of the array
console.log(...newArray);

const newMenu = [...resturant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...resturant.mainMenu];

//Join 2 arrays
const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

//The spread operator works on all iterables.
const str = 'Jonas';
const letters = [...str, ' ', 's. '];
console.log(letters);

//We can't use the spread operator in template literals

//Passing an array as an argument into a function using the spread operator
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt("Let's make pasta! Ingredient 2?"),
//     prompt("Let's make pasta! Ingredient 3?"),
// ];

const ingredients = [1, 2, 3];

console.log(ingredients);

resturant.orderPasta(...ingredients);

//Also works on objects :)
const newResturant = { foundedIn: 1998, ...resturant, founder: 'Valentino' };

console.log(newResturant);

//We can also use spread operator to create shallow copies of objects without using object.assign
const resturantCopy = {...resturant };
resturantCopy.name = 'Ristoranto Roma';
console.log(resturantCopy);
//////////////////////////////////////////////////////////////
//
//
//////////////////////////////////////////////////////////////
//The Rest Pattern
//////////////////////////////////////////////////////////////
//spread is used on the right side of assignment operator
const arrs = [1, 2, ...[3, 4]];
console.log(arrs);
//You can also use it on the left side for destructuring(REST)
//This carries the "REST" of the elements and puts them into a new array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

//The rest element has to be the last element. And ther can be only one.
const [pizza, , risotto, ...otherFood] = [
    ...resturant.mainMenu,
    ...resturant.starterMenu,
];
console.log(otherFood);

//Using it in objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

//Functions
//Here the rest operator uses rest arguements and packs the arguments into 1 array.
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

resturant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
///////////////////////////////////////////////////////////
//
//
//
/////////////////////////////////////////////////////////////
//Short Circuiting using && and ||
////////////////////////////////////////////////////////////
//Logical operators can use ANY data type
//They can return any data type
//Can do short-circuting or short-circuit evaluation

console.log('--------OR--------');
//In the case of the  || operator, if the first operand is a truthy value, it gets returned. In the case that both of them is falsey, it returns the last operand
console.log(3 || 'Jonas'); //Output: 3
console.log('' || 'Jonas'); //>>Jonas
console.log(true || 0); //>> True
console.log(undefined || null); //>> null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //>>Hello

//Use to set default values
resturant.numGuests = 23;

const guests1 = resturant.numGuests ? resturant.numGuests : 10;
console.log(guests1);

//As an alternative
const guests2 = resturant.numGuests || 10;

console.log('--------AND--------');
//In the case of the AND operator short-circuits when the first value is falsey and returns that falsey value. without evaluating the 2nd operand. In the case that both of them is truthy, it returns the last operand
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //'Jonas'
console.log('Hello' && 23 && null && 'Jonas'); //null

//Practical example
//Use to execute functions in the second operand if the first one is true
if (resturant.orderPizza) {
    resturant.orderPizza('mushroom', 'spinach');
}

//Alternative
resturant.orderPizza && resturant.orderPizza('mushroom', 'spinach');

///////////////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////////
//The Nullish Coalescing Operator
//////////////////////////////////////////////////////////
//we use nullish coalescing operator beacause we want to be able to use 0
resturant.numChairs = 0;
const chairs = resturant.numChairs || 10;
console.log(chairs);

// const chairsCorrect = resturant.numChairs ? ? 10;
console.log(chairsCorrect);

/////////////////////////////////////////////////////////
//
//
//
/////////////////////////////////////////////
//Logical Assignment Operator
/////////////////////////////////
const rest1 = {
    name: 'Capri',
    numGuests: 20,
};
const rest2 = {
    name: 'Capriono',
    owner: 'Givanni Rossi',
};

//OR assignment operator
// rest1.numberGuests = rest1.numGuests || 10;
// rest1.numberGuests || = 10;
// rest2.numberGuests = rest2.numGuests || 10;
// rest2.numberGuests || = 10;

//Nullish assignment operator (null or undefined)
// rest1.numGuests ? ? = 10;
// rest2.numGuests ? ? = 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS'
// rest1.owner && = '<ANONYMOUS'
// rest2.owner = rest2.owner && '<ANONYMOUS'
// rest2.owner && = '<ANONYMOUS'

console.log(rest1);
console.log(rest2);
///////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////
//Optional Chaining
/////////////////////////////////////////////////////////

if (resturant.openingHours && resturant.openingHours.mon)
    consle.log(resturant.openingHours.open);

//WITH OC
// console.log(resturant.openingHours.mon ? .open);
// console.log(resturant.openingHours ? .mon ? .open);

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// for (const day of days) {
// console.log(resturant.openingHours[day] ?.open)
// }