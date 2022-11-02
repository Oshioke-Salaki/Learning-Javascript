s; // let markWeight = 78
// let markHeight = 1.69
// let johnWeight = 92
// let johnHeight = 1.95

// const markBMI = markWeight/(markHeight**2);
// const johnBMI = johnWeight/(johnHeight**2);

// let markHigherBMI = markBMI > johnBMI

// console.log(markBMI, johnBMI, markHigherBMI)

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

// let tip, bill;
// bill = 40
// tip = bill>=50 && bill<=300 ?  (15/100)*bill : (20/100)*bill;

// console.log(tip)
// console.log(bill)

// console.log(`The bill is ${bill}, the tip is ${tip} and the total value is ${bill+tip}`)

('use strict');

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('I can drive :D');

// const clacAge3 = birthYear => 2037- birthYear;
// const age3 = calcAge(1991);
// console.log(age3)

// const yearsUntilRetirement = birthYear => {
// 	const age = 2037 - birthYear;

// 	const retirment = 65 - age;

// 	return retirment
// }

// console.log(yearsUntilRetirement(1991))

// function calc(birthYear){
// 	const age = 2022 - birthYear

// 	console.log(`you are ${age}`)

// 	return age;
// }

// const age = calc(2002)

// console.log(age)

// const calcAverage = (score1, score2, score3)=>     (score1+score2+score3)/3

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

// //Continue and Break
// for (let i = 0; i < papi.length; i++){
// 	if(typeof papi[i] !== 'string') continue;

// 	console.log(papi[i], typeof papi[i])
// }

// for(let i =1; i<=3; i++){
// 	for(let j = 1; j<=5; j++){
// 		console.log('Excercise')
// 	}
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const osh = [2, 1, 6];

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
};

console.log(calcAverage(totals));

const x = '23';

console.log();