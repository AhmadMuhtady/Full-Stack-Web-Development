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
