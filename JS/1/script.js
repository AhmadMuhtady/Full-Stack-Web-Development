// var myName = "ahmad";
// alert(myName);
// var yourName = prompt("Whats your name?");
// alert("My Name is " + myName + " welcome to my course " + yourName + "!");

var a = '3';
var b = '8';
var c = a;
a = b;
b = c;

console.log('a is ' + a);
console.log('b is ' + b);

var greeting = 'Hello';
var myName = 'Ahmad';
var greet = greeting + ' there ' + myName;
console.log(greet);
console.log(greet.length);

var para = prompt('please enter your paragraph!');
var chrectersWrittern = para.length;
var remaining = 280 - chrectersWrittern;
alert(
	'you have written ' + chrectersWrittern + ' charecters remaing ' + remaining
);

var para = prompt('please enter your paragraph!');
alert(
	'you have written ' +
		para.length +
		' Charecters remaining ' +
		(280 - para.length)
);

alert(prompt('please enter your message').slice(0, 140));

name = prompt('Please enter your name!');
var firstCas = name.slice(0, 1).toUpperCase();
var rest = name.slice(1, name.length).toLocaleLowerCase();
alert('Hello ' + firstCas + rest);

function getMilk(money) {
	console.log('leaveHouse');
	console.log('moveRight');
	console.log('moveRight');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveRight');
	console.log('moveRight');
	var numbersOfBottels = Math.floor(money / 1.5);
	console.log('I bought ' + numbersOfBottels + ' bottels of milk');
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('enterHouse');
}

getMilk(14);

function ageLeftCalculator(myAge) {
	var ageLeft = 90 - myAge;
	var daysLeft = ageLeft * 365;
	var weeksLeft = ageLeft * 52;
	var monthLeft = ageLeft * 12;
	console.log(
		'You have ' +
			daysLeft +
			' days, ' +
			weeksLeft +
			' weeks, ' +
			monthLeft +
			' months left'
	);
}

ageLeftCalculator(32);

function getMilk(money, costOfButtle) {
	console.log('leaveHouse');
	console.log('moveRight');
	console.log('moveRight');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveRight');
	console.log('moveRight');
	console.log(
		'I bought ' + culOfButtles(money, costOfButtle) + ' bottels of milk'
	);
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('enterHouse');
	console.log(
		'The remaining money is ' + calChange(money, costOfButtle) + ' $.'
	);
}

getMilk(14, 1.5);

function culOfButtles(money, costOfButtle) {
	var numbersOfBottels = Math.floor(money / costOfButtle);
	return numbersOfBottels;
}

function calChange(money, costOfButtle) {
	var change = money % costOfButtle;
	return change;
}
