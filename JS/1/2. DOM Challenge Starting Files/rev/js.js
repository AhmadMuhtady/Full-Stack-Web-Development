// greet = 'hello world';
// console.log(greet.length);
// console.log(`${greet.charAt().toUpperCase()}${greet.substring(1)}`);

// let x;
// let y;
// x = Math.floor(Math.random() * 100 + 1);
// y = Math.floor(Math.random() * 50 + 1);
// sum = `${x} + ${y} = sum`;
// sub = `${x} - ${y} = sub`;
// dev = `${x} / ${y} = dev`;
// times = `${x} * ${y} = times`;
// mod = `${x} % ${y} = mod`;

// console.log(x);
// console.log(y);
// console.log(sum);
// console.log(sub);
// console.log(dev);
// console.log(times);
// console.log(mod);

// let d;
// // d = new Date();
// // d = new Date('jan, 03, 1993');
// d = Date.now(new Date());
// d = d / 60000;
// console.log(d);

// let d = new Date('Jan 3, 1993'); // or any date
// let ms = d.getTime(); // milliseconds since Jan 1, 1970
// let minutes = ms / 60000;
// console.log(minutes);

// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// // const arr3 = arr1.slice(0, 4).concat(arr2);
// // const arr3 = [...arr1, ...arr2];
// // arr3.splice(4, 1);
// console.log(arr3);

// const library = [
// 	{
// 		title: 'The road ahead',
// 		author: 'Bill Gates',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// 	{
// 		title: 'Steves Jobes',
// 		author: 'Walter Isaacson',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// 	{
// 		title: 'Mocingjay',
// 		author: 'Suzanne Collins',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// console.log(library);

// const { title: fistBook } = library[0];

// console.log(fistBook);
// console.log(library);

// const library2 = JSON.stringify(library);
// console.log(library2);
// const library3 = JSON.parse(library2);
// console.log(library3);

// const libraries = [
// 	{
// 		title: 'To Kill a Mockingbird',
// 		author: 'Harper Lee',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// 	{
// 		title: '1984',
// 		author: 'George Orwell',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// 	{
// 		title: 'The Alchemist',
// 		author: 'Paulo Coelho',
// 		status: {
// 			own: true,
// 			reading: false,
// 			read: false,
// 		},
// 	},
// ];

// libraries[0].status.reading = true;
// libraries[1].status.reading = true;
// libraries[2].status.reading = true;

// const { title: firstName } = libraries[0];
// console.log(firstName);
// console.log(libraries);

// const libraries2 = JSON.stringify(libraries);
// console.log(libraries2);
// const libraries3 = JSON.parse(libraries2);
// console.log(libraries3);

// function whosBuying(...arr) {
// 	const numberIndex = Math.floor(Math.random() * arr.length);

// 	const item = arr[numberIndex];

// 	console.log(item);
// }

// whosBuying('ahmad', 'moveBy', 'adam', 'mo', 'omar');
// const x = 3;
// function first() {
// 	const x = 3;

// 	console.log(x);
// }

// first();

// function second() {
// 	const y = 4;

// 	console.log(x + y);
// }

// second();

// function dollarSign(value) {
// 	return '$' + value;
// }

// console.log(dollarSign(200));

// const sub = (a, b) => a - b;
// console.log(sub(2, 4));

// const add = (a) => a - 2;
// console.log(add(2));

// const userObj = () => ({
// 	name: 'brad',
// });
// console.log(userObj());

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((n) => console.log(n));

// function getCelious(tempreture) {
// 	const cel = ((tempreture - 32) * 5) / 9;
// 	console.log(`the tempreture is ${cel}\xB0 C`);
// }
// getCelious(50);

// const getCelsius = (temp) => ((temp - 32) * 5) / 9;
// console.log(`the tempreture is ${getCelsius(32)}\xB0 C`);

// const minMax = (arr) => ({
// 	min: Math.min(...arr),
// 	max: Math.max(...arr),
// });

// console.log(minMax([23, 4, 5, 6, 7, 8, 9, 10]));

// ((length, width) => {
// 	const area = length * width;
// 	console.log(
// 		`The Area of a rectangle is lengeth ${length} times width ${width} = ${area}`
// 	);
// })(10, 5);

// //A year is a leap year if:

// It is divisible by 4 and not divisible by 100, OR

// It is divisible by 400//

// function calculator(num1, num2, operator) {
// 	switch (operator) {
// 		case '+':
// 			return num1 + num2;
// 			break;
// 		case '-':
// 			return num1 - num2;
// 			break;
// 		case '*':
// 			return num1 * num2;
// 			break;
// 		case '/':
// 			return num1 / num2;
// 			break;
// 		case '%':
// 			return num1 % num2;
// 			break;
// 		default:
// 			return 'please enter the right oprerator (-,+,*,/,%) ';
// 	}
// }

// const num1 = parseInt(prompt('please enter first number'));
// const num2 = parseInt(prompt('please enter second number'));
// const operator = prompt('please enter an oprerator (-,+,*,/,%)');

// console.log(calculator(num1, num2, operator));

// function leapYear(year) {
// 	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// 		? console.log(`${year} is a leap year`)
// 		: console.log(`${year} is not a leap year`);
// }

// let year = parseInt(prompt('Enter a year:'));

// if (year % 400 === 0) {
// 	console.log(`${year} is a leap year`);
// } else if (year % 4 === 0 && year % 100 !== 0) {
// 	console.log(`${year} is a leap year`);
// } else {
// 	console.log(`${year} is not a leap year`);
// }

// leapYear(1999);

// for (let i = 0; i <= 10; i++) {
// 	i === 7 ? console.log('youre 7 now') : console.log('number ' + i);
// }

// for (let i = 1; i <= 10; i++) {
// 	console.log('number ' + i);

// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${j} * ${i} = ${j * i}`);
// 	}
// }
// const names = ['ahmad', 'sara', 'omar', 'ali', 'roni'];

// for (let i = 0; i <= names.length; i++) {
// 	names[i] === 'sara '
// 		? console.log('sara is the best')
// 		: console.log(names[i]);
// }

// let i = 1;

// while (i <= 5) {
// 	console.log('number ' + i);

// 	let j = 1;
// 	while (j <= 5) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 		j++;
// 	}

// 	i++;
// }

// let i = 1;

// while (i <= 100) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (i % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz');
// 	} else {
// 		console.log('number ' + i);
// 	}

// 	i++;
// }

// for (i = 1; i <= 20; i++) {
// 	i % 3 === 0 && i % 5 === 0
// 		? console.log('FizzBuzz')
// 		: i % 3 === 0
// 		? console.log('Fizz')
// 		: i % 5 === 0
// 		? console.log('Buzz')
// 		: console.log('number ' + i);
// }

// let i = 1;

// do {
// 	switch (true) {
// 		case i % 3 === 0 && i % 5 === 0:
// 			console.log('FizzBuzz');
// 			break;
// 		case i % 3 === 0:
// 			console.log('Fizz');
// 			break;
// 		case i % 5 === 0:
// 			console.log('Buzz');
// 			break;
// 		default:
// 			console.log(i);
// 	}
// 	i++;
// } while (i <= 20);
