// // greet = 'hello world';
// // console.log(greet.length);
// // console.log(`${greet.charAt().toUpperCase()}${greet.substring(1)}`);

// // let x;
// // let y;
// // x = Math.floor(Math.random() * 100 + 1);
// // y = Math.floor(Math.random() * 50 + 1);
// // sum = `${x} + ${y} = sum`;
// // sub = `${x} - ${y} = sub`;
// // dev = `${x} / ${y} = dev`;
// // times = `${x} * ${y} = times`;
// // mod = `${x} % ${y} = mod`;

// // console.log(x);
// // console.log(y);
// // console.log(sum);
// // console.log(sub);
// // console.log(dev);
// // console.log(times);
// // console.log(mod);

// // let d;
// // // d = new Date();
// // // d = new Date('jan, 03, 1993');
// // d = Date.now(new Date());
// // d = d / 60000;
// // console.log(d);

// // let d = new Date('Jan 3, 1993'); // or any date
// // let ms = d.getTime(); // milliseconds since Jan 1, 1970
// // let minutes = ms / 60000;
// // console.log(minutes);

// // const arr = [1, 2, 3, 4, 5];

// // arr.push(6);
// // arr.unshift(0);
// // arr.reverse();
// // console.log(arr);

// // const arr1 = [1, 2, 3, 4, 5];
// // const arr2 = [5, 6, 7, 8, 9, 10];

// // // const arr3 = arr1.slice(0, 4).concat(arr2);
// // // const arr3 = [...arr1, ...arr2];
// // // arr3.splice(4, 1);
// // console.log(arr3);

// // const library = [
// // 	{
// // 		title: 'The road ahead',
// // 		author: 'Bill Gates',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: 'Steves Jobes',
// // 		author: 'Walter Isaacson',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: 'Mocingjay',
// // 		author: 'Suzanne Collins',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // ];

// // library[0].status.read = true;
// // library[1].status.read = true;
// // library[2].status.read = true;
// // console.log(library);

// // const { title: fistBook } = library[0];

// // console.log(fistBook);
// // console.log(library);

// // const library2 = JSON.stringify(library);
// // console.log(library2);
// // const library3 = JSON.parse(library2);
// // console.log(library3);

// // const libraries = [
// // 	{
// // 		title: 'To Kill a Mockingbird',
// // 		author: 'Harper Lee',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: '1984',
// // 		author: 'George Orwell',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: 'The Alchemist',
// // 		author: 'Paulo Coelho',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // ];

// // libraries[0].status.reading = true;
// // libraries[1].status.reading = true;
// // libraries[2].status.reading = true;

// // const { title: firstName } = libraries[0];
// // console.log(firstName);
// // console.log(libraries);

// // const libraries2 = JSON.stringify(libraries);
// // console.log(libraries2);
// // const libraries3 = JSON.parse(libraries2);
// // console.log(libraries3);

// // function whosBuying(...arr) {
// // 	const numberIndex = Math.floor(Math.random() * arr.length);

// // 	const item = arr[numberIndex];

// // 	console.log(item);
// // }

// // whosBuying('ahmad', 'moveBy', 'adam', 'mo', 'omar');
// // const x = 3;
// // function first() {
// // 	const x = 3;

// // 	console.log(x);
// // }

// // first();

// // function second() {
// // 	const y = 4;

// // 	console.log(x + y);
// // }

// // second();

// // function dollarSign(value) {
// // 	return '$' + value;
// // }

// // console.log(dollarSign(200));

// // const sub = (a, b) => a - b;
// // console.log(sub(2, 4));

// // const add = (a) => a - 2;
// // console.log(add(2));

// // const userObj = () => ({
// // 	name: 'brad',
// // });
// // console.log(userObj());

// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach((n) => console.log(n));

// // function getCelious(tempreture) {
// // 	const cel = ((tempreture - 32) * 5) / 9;
// // 	console.log(`the tempreture is ${cel}\xB0 C`);
// // }
// // getCelious(50);

// // const getCelsius = (temp) => ((temp - 32) * 5) / 9;
// // console.log(`the tempreture is ${getCelsius(32)}\xB0 C`);

// // const minMax = (arr) => ({
// // 	min: Math.min(...arr),
// // 	max: Math.max(...arr),
// // });

// // console.log(minMax([23, 4, 5, 6, 7, 8, 9, 10]));

// // ((length, width) => {
// // 	const area = length * width;
// // 	console.log(
// // 		`The Area of a rectangle is lengeth ${length} times width ${width} = ${area}`
// // 	);
// // })(10, 5);

// // //A year is a leap year if:

// // It is divisible by 4 and not divisible by 100, OR

// // It is divisible by 400//

// // function calculator(num1, num2, operator) {
// // 	switch (operator) {
// // 		case '+':
// // 			return num1 + num2;
// // 			break;
// // 		case '-':
// // 			return num1 - num2;
// // 			break;
// // 		case '*':
// // 			return num1 * num2;
// // 			break;
// // 		case '/':
// // 			return num1 / num2;
// // 			break;
// // 		case '%':
// // 			return num1 % num2;
// // 			break;
// // 		default:
// // 			return 'please enter the right oprerator (-,+,*,/,%) ';
// // 	}
// // }

// // const num1 = parseInt(prompt('please enter first number'));
// // const num2 = parseInt(prompt('please enter second number'));
// // const operator = prompt('please enter an oprerator (-,+,*,/,%)');

// // console.log(calculator(num1, num2, operator));

// // function leapYear(year) {
// // 	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// // 		? console.log(`${year} is a leap year`)
// // 		: console.log(`${year} is not a leap year`);
// // }

// // let year = parseInt(prompt('Enter a year:'));

// // if (year % 400 === 0) {
// // 	console.log(`${year} is a leap year`);
// // } else if (year % 4 === 0 && year % 100 !== 0) {
// // 	console.log(`${year} is a leap year`);
// // } else {
// // 	console.log(`${year} is not a leap year`);
// // }

// // leapYear(1999);

// // for (let i = 0; i <= 10; i++) {
// // 	i === 7 ? console.log('youre 7 now') : console.log('number ' + i);
// // }

// // for (let i = 1; i <= 10; i++) {
// // 	console.log('number ' + i);

// // 	for (let j = 1; j <= 10; j++) {
// // 		console.log(`${j} * ${i} = ${j * i}`);
// // 	}
// // }
// // const names = ['ahmad', 'sara', 'omar', 'ali', 'roni'];

// // for (let i = 0; i <= names.length; i++) {
// // 	names[i] === 'sara '
// // 		? console.log('sara is the best')
// // 		: console.log(names[i]);
// // }

// // let i = 1;

// // while (i <= 5) {
// // 	console.log('number ' + i);

// // 	let j = 1;
// // 	while (j <= 5) {
// // 		console.log(`${i} * ${j} = ${i * j}`);
// // 		j++;
// // 	}

// // 	i++;
// // }

// // let i = 1;

// // while (i <= 100) {
// // 	if (i % 3 === 0 && i % 5 === 0) {
// // 		console.log('FizzBuzz');
// // 	} else if (i % 3 === 0) {
// // 		console.log('Fizz');
// // 	} else if (i % 5 === 0) {
// // 		console.log('Buzz');
// // 	} else {
// // 		console.log('number ' + i);
// // 	}

// // 	i++;
// // }

// // for (i = 1; i <= 20; i++) {
// // 	i % 3 === 0 && i % 5 === 0
// // 		? console.log('FizzBuzz')
// // 		: i % 3 === 0
// // 		? console.log('Fizz')
// // 		: i % 5 === 0
// // 		? console.log('Buzz')
// // 		: console.log('number ' + i);
// // }

// // let i = 1;

// // do {
// // 	switch (true) {
// // 		case i % 3 === 0 && i % 5 === 0:
// // 			console.log('FizzBuzz');
// // 			break;
// // 		case i % 3 === 0:
// // 			console.log('Fizz');
// // 			break;
// // 		case i % 5 === 0:
// // 			console.log('Buzz');
// // 			break;
// // 		default:
// // 			console.log(i);
// // 	}
// // 	i++;
// // } while (i <= 20);

// // const names = ['ahmad', 'sara', 'omar', 'ali', 'roni'];

// // for (const name of names) {
// // 	console.log(name);
// // }

// // const users = [
// // 	{ name: 'Alice', isActive: true, roles: ['admin', 'editor'] },
// // 	{ name: 'Bob', isActive: false, roles: ['editor'] },
// // 	{ name: 'Charlie', isActive: true, roles: ['viewer'] },
// // 	{ name: 'Diana', isActive: true, roles: ['editor', 'viewer'] },
// // ];

// // const activeEditorName = users
// // 	.filter((users) => users.isActive && users.roles.includes('editor'))
// // 	.map((users) => users.name);

// // console.log(activeEditorName);

// // ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// // // Log number
// // console.log(100);

// // // Log string
// // console.log('Hello World');

// // // Log multiple values
// // console.log(20, 'Hello', true);

// // // Log a variable
// // const x = 100;
// // console.log(x);

// // // Console error & warning
// // console.error('Alert');
// // console.warn('Warning');

// // // Log object as table
// // console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // // Group console commands
// // console.group('simple');
// // console.log(x);
// // console.error('Alert');
// // console.warn('Warning');
// // console.groupEnd();

// // // Add CSS to logs
// // const styles = 'padding: 10px; background-color: white; color: green';
// // console.log('%cHello World', styles);

// // // This is a single line of code

// // /*
// // Multi-line comment
// // console.log(100);

// // console.log('Hello World');

// // console.log(20, 'Hello', true);
// // */

// // // Ways to declare a variable
// // // `var`, `let`, & `const`

// // let firstName = 'John';
// // const lastName = 'Doe';
// // let age = 30;

// // console.log(age);

// // // Naming Conventions
// // // - Only letters, numbers, underscores and dollar signs
// // // - Can't start with a number

// // // Multi-Word Formatting
// // // firstName = camelCase
// // // first_name = underscore
// // // FirstName = PascalCase
// // // firstname = lowercase

// // // We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// // age = 31;
// // console.log(age);

// // // With let, we can declare a value without assigning a value
// // let score;
// // score = 1;
// // console.log(score);

// // if (true) {
// // 	score = score + 1;
// // }

// // console.log(score);

// // const x = 100;

// // // We can not re-assign a const variable
// // // x = 200 // Will result in an error

// // // We can still manipulate arrays and objects using const
// // const arr = [1, 2, 3, 4];
// // arr.push(5);
// // console.log(arr);

// // const person = {
// // 	name: 'Brad',
// // };
// // person.name = 'John';
// // person.email = 'brad@gmail.com';
// // console.log(person);

// // // Declare multiple values at once
// // let a, b, c;

// // const d = 10,
// // 	e = 20,
// // 	f = 30;

// // console.log(d);
// // console.log(a);

// // // String
// // const firstName = 'Sara';

// // // Number
// // const age = 30;
// // const temp = 98.9;

// // // Boolean
// // const hasKids = true;

// // // Null
// // const aptNumber = null;

// // // Undefined
// // // let score;
// // const score = undefined;

// // // Symbol
// // const id = Symbol('id');

// // // BigInt
// // const n = 9007199254740991n;

// // // Reference Types

// // const numbers = [1, 2, 3, 4];

// // const person = {
// // 	name: 'Brad',
// // };

// // function sayHello() {
// // 	console.log('Hello');
// // }

// // const output = sayHello;

// // console.log(output, typeof output);

// // // More info on why typeof null == object
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// // //  More info on the "function object" type
// // // https://262.ecma-international.org/5.1/#sec-11.4.3

// // // Value is stored in the stack
// // const name = 'John';
// // const age = 30;

// // // Reference is stored in the heap
// // const person = {
// // 	name: 'Brad',
// // 	age: 40,
// // };

// // let newName = name;
// // newName = 'Jonathan';

// // let newPerson = person;
// // newPerson.name = 'Bradley';

// // console.log(name, newName); // John, Jonathan
// // console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

// // let amount = 'hello';

// // // Convert string to number
// // amount = parseInt(amount);
// // amount = +amount;
// // amount = Number(amount);

// // // Convert number to string
// // amount = amount.toString();
// // amount = String(amount);

// // // Convert string to decimal
// // amount = parseFloat(amount);

// // // Convert number to boolean
// // amount = Boolean(amount);

// // // Ways to get NaN
// // console.log(Math.sqrt(-1));
// // console.log(1 + NaN);
// // console.log(undefined + undefined);
// // console.log('foo' / 3);

// // console.log(amount, typeof amount);

// // // 1. Arithmetic Operators

// // let x;

// // x = 5 + 5;
// // x = 5 - 5;
// // x = 5 * 5;
// // x = 5 / 5;
// // x = 7 % 5;

// // // Concatenation
// // x = 'Hello' + ' ' + 'World';

// // // Exponent
// // x = 2 ** 3;

// // // Increment
// // x = 1;
// // // x = x + 1;
// // x++;

// // // Decrement
// // // x = x - 1;
// // x--;

// // // 2. Assignment Operators

// // x = 10;

// // x += 5;
// // x -= 5;
// // x *= 5;
// // x /= 5;
// // x %= 5;
// // x **= 5;

// // // 3. Comparison Operators

// // // Equal to (Just the value, not the type)
// // x = 2 == '2';

// // // Equal to (Type and value)
// // x = 2 === '2';

// // // Not equal to (Just the value, not the type)
// // x = 2 != '2';

// // // Not equal to (Type and value)
// // x = 2 !== 2;

// // // Greater than and less than
// // x = 10 > 5;
// // x = 10 < 5;
// // x = 10 <= 5;
// // x = 10 >= 5;

// // console.log(x);

// // let x;

// // // Coerced to a string
// // x = 5 + '5';

// // x = 5 + Number('5');

// // // Coerced to a number
// // x = 5 * '5';

// // // null is coerced to 0 as it is a `falsy` value
// // x = 5 + null;

// // x = Number(null);

// // x = Number(true);
// // x = Number(false);

// // // true is coerced to a 1
// // x = 5 + true;

// // // false is coerced to 0 (falsy)
// // x = 5 + false;

// // // Undefined is coerced to 0 (falsy)
// // x = 5 + undefined;

// // console.log(x, typeof x);

// // let x;

// // const name = 'John';
// // const age = 31;

// // // Concatenation
// // x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // // Template Literals
// // x = `Hello, my name is ${name} and I am ${age} years old`;

// // // String Properties and Methods

// // // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// // const s = new String('Hello World');

// // x = typeof s;

// // x = s.length;

// // // Access value by key
// // x = s[0];

// // // Shows the prototype of the string object. Shows the properties and methods
// // x = s.__proto__;

// // // Change case
// // x = s.toUpperCase();
// // x = s.toLowerCase();

// // // charAt() - returns the character at the specified index
// // x = s.charAt(0);

// // // indexOf - returns the index of the first occurrence of a specified value in a string
// // x = s.indexOf('d');

// // // substring() - search a string for a specified value
// // x = s.substring(2, 5);
// // x = s.substring(7);

// // // slice() - extracts a part of a string and returns a new string
// // x = s.slice(-11, -6);

// // // trim() - remove whitespace from beginning and end of string
// // x = '         Hello World';
// // x = x.trim();

// // // replace() - replace all instances of a string
// // x = s.replace('World', 'John');

// // // includes() - returns true if the string is found
// // x = s.includes('Hell');

// // // valueOf() - returns the primitive value of a variable
// // x = s.valueOf();

// // // split() - returns an array of strings
// // x = s.split('');

// // console.log(x);

// // // Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// // const myString = 'developer';

// // let myNewString;

// // // Solution 1:
// // myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // // Solution 2:
// // myNewString = myString[0].toUpperCase() + myString.substring(1);
// // // Solution 3:
// // myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// // console.log(myNewString);

// // let x;

// // const num = new Number(5);

// // // toString() - returns a string representation of the number
// // x = num.toString();
// // // To get the length
// // x = num.toString().length;

// // // toFixed() - returns a string representation of the number with a specified number of decimals
// // x = num.toFixed(2);

// // // toPrecision() - returns a number with the specified length
// // x = num.toPrecision(3);

// // // toExponential() -  convert a number to exponential notation and return its value as a string
// // x = num.toExponential(2);

// // // toLocaleString() - returns a string representation of the number, using the current locale
// // x = num.toLocaleString('en-US');

// // // valueOf - Get value
// // x = num.valueOf();

// // // The Number object itself has some properties and methods

// // // Largest and smallest possible number
// // x = Number.MAX_VALUE;
// // x = Number.MIN_VALUE;

// // console.log(x);

// // let x;

// // // Square root
// // x = Math.sqrt(9);

// // // Absolute value
// // x = Math.abs(-5);

// // // Round
// // x = Math.round(4.2);

// // // Round up
// // x = Math.ceil(4.2);

// // // Round down
// // x = Math.floor(4.9);

// // // Exponent
// // x = Math.pow(2, 3);

// // // Minimum number
// // x = Math.min(4, 5, 3);

// // // Maximum number
// // x = Math.max(4, 5, 3);

// // // Get a random number/decimal between 0 and 1
// // x = Math.random();

// // // Get a random number between 1 and 100
// // x = Math.floor(Math.random() * 100 + 1);

// // console.log(x);

// // const x = Math.floor(Math.random() * 100 + 1);
// // const y = Math.floor(Math.random() * 50 + 1);

// // // Get the sum
// // const sum = x + y;
// // const sumOutput = `${x} + ${y} = ${sum}`;
// // console.log(sumOutput);

// // // Get the difference
// // const diff = x - y;
// // const diffOutput = `${x} - ${y} = ${diff}`;
// // console.log(diffOutput);

// // // Get the product
// // const prod = x * y;
// // const prodOutput = `${x} * ${y} = ${prod}`;
// // console.log(prodOutput);

// // // Get the quotient
// // const quot = x / y;
// // const quotOutput = `${x} / ${y} = ${quot}`;
// // console.log(quotOutput);

// // // Get the remainder
// // const rm = x % y;
// // const rmOutput = `${x} % ${y} = ${rm}`;
// // console.log(rmOutput);

// // let d;

// // // Get today's date and time
// // d = new Date();

// // // Set to a string
// // d = d.toString();

// // // Get a specific date
// // // Important: the month is 0-based, so 0 is January and 11 is December
// // d = new Date(2021, 0, 10, 12, 30, 0);

// // // Pass in a string
// // d = new Date('2021-07-10T12:30:00');
// // d = new Date('07/10/2021 12:30:00');
// // d = new Date('2022-07-10');
// // d = new Date('07-10-2022');

// // // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// // // Get current timestamp
// // d = Date.now();

// // // Get the timestamp of a specific date
// // d = new Date();
// // d = d.getTime();
// // d = d.valueOf();

// // // Create a date from a timestamp
// // d = new Date(1666962049745);

// // // Convert from milliseconds to seconds
// // d = Math.floor(Date.now() / 1000);

// // console.log(d);

// // let x;
// // let d = new Date();

// // // Date methods

// // x = d.toString();

// // x = d.getTime();
// // x = d.valueOf();

// // x = d.getFullYear();

// // x = d.getMonth();
// // x = d.getMonth() + 1;

// // x = d.getDate();

// // x = d.getDay();

// // x = d.getHours();

// // x = d.getMinutes();

// // x = d.getSeconds();

// // x = d.getMilliseconds();

// // x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// // // Intl.DateTimeFormat API (locale specific)
// // x = Intl.DateTimeFormat('en-US').format(d);
// // x = Intl.DateTimeFormat('en-GB').format(d);
// // x = Intl.DateTimeFormat('default').format(d);

// // x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

// // x = d.toLocaleString('default', { month: 'short' });

// // x = d.toLocaleString('default', {
// // 	weekday: 'long',
// // 	year: 'numeric',
// // 	month: 'long',
// // 	day: 'numeric',
// // 	hour: 'numeric',
// // 	minute: 'numeric',
// // 	second: 'numeric',
// // 	timeZone: 'America/New_York',
// // });

// // console.log(x);

// // let x;

// // // Array Literal
// // const numbers = [12, 45, 33, 29, 39, 102];
// // const mixed = [12, 'Hello', true, null];

// // // Array Constructor
// // const fruits = new Array('apple', 'grape', 'orange');

// // // Get value by index
// // x = numbers[0];

// // x = numbers[0] + numbers[3];

// // x = `My favorite fruit is an ${fruits[2]}`;

// // x = numbers.length;

// // fruits[2] = 'pear';

// // // length is not read-only
// // // fruits.length = 2;

// // fruits[3] = 'strawberry';

// // // Using the length as the index will always add on the the end
// // fruits[fruits.length] = 'blueberry';
// // fruits[fruits.length] = 'peach';

// // x = fruits;

// // console.log(x);

// // let x;

// // // Array Literal
// // const numbers = [12, 45, 33, 29, 39, 102];
// // const mixed = [12, 'Hello', true, null];

// // // Array Constructor
// // const fruits = new Array('apple', 'grape', 'orange');

// // // Get value by index
// // x = numbers[0];

// // x = numbers[0] + numbers[3];

// // x = `My favorite fruit is an ${fruits[2]}`;

// // x = numbers.length;

// // fruits[2] = 'pear';

// // // length is not read-only
// // // fruits.length = 2;

// // fruits[3] = 'strawberry';

// // // Using the length as the index will always add on the the end
// // fruits[fruits.length] = 'blueberry';
// // fruits[fruits.length] = 'peach';

// // x = fruits;

// // console.log(x);

// // let x;

// // const arr = [28, 38, 44, 29, 109];

// // // push() - Push a value on to the end of the array
// // arr.push(100);

// // // pop() - Take the last value off
// // arr.pop();

// // // unshift() - Add a value to the beginning of the array
// // arr.unshift(99);

// // // shift() - Remove first value
// // arr.shift();

// // // reverse() - Reverse an array
// // arr.reverse();

// // // includes() - Check to see if something is in the array
// // x = arr.includes(445);

// // // indexOf() - Return the index of the first match
// // x = arr.indexOf(28);

// // // Return array as a string
// // x = arr.toString();
// // x = arr.join();

// // // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// // x = arr.slice(1, 4);

// // // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// // x = arr.splice(1, 4);

// // // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// // x = arr.splice(4, 1);

// // // Chaining methods - Some methods can be chained depending on the return value.
// // x = arr.slice(1, 4).reverse().toString().charAt(0);

// // console.log(x);

// // let x;

// // const fruits = ['apple', 'pear', 'orange'];
// // const berries = ['strawberry', 'blueberry', 'rasberry'];

// // // Nesting arrays

// // // Nesting berries inside of fruits
// // fruits.push(berries);

// // // Now we can access 'blueberry' with the following
// // x = fruits[3][1];

// // // Create a new variable and nest both arrays
// // const allFruits = [fruits, berries];

// // x = allFruits[1][2];

// // // concat() - Concatenate arrays
// // x = fruits.concat(berries);

// // // spread operator (...) - Concatenate with
// // x = [...fruits, ...berries];

// // // flat() - Flatten an array
// // const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// // x = arr.flat();

// // // Static methods of Array object

// // // isArray() - Check is is an array
// // x = Array.isArray(fruits);

// // // from() - Create an array from an array like value
// // x = Array.from('12345');

// // // of() - Create an array from a set of values
// // const a = 1;
// // const b = 2;
// // const c = 3;

// // x = Array.of(a, b, c);

// // console.log(x);

// // // Challenge 1

// // const arr = [1, 2, 3, 4, 5];

// // // arr.reverse();
// // // arr.push(0);
// // // arr.unshift(6);

// // // Same result as above
// // arr.push(6);
// // arr.unshift(0);
// // arr.reverse();

// // console.log(arr);

// // // Challenge 2

// // const arr1 = [1, 2, 3, 4, 5];
// // const arr2 = [5, 6, 7, 8, 9, 10];

// // // Solution 1
// // const arr3 = arr1.slice(0, 4).concat(arr2);

// // // Solution 2
// // const arr4 = [...arr1, ...arr2];
// // arr4.splice(4, 1);

// // console.log(arr4);

// // let x;

// // // Creating an object
// // const person = {
// // 	name: 'John Doe',
// // 	age: 30,
// // 	isAdmin: true,
// // 	address: {
// // 		street: '123 Main st',
// // 		city: 'Boston',
// // 		state: 'MA',
// // 	},
// // 	hobbies: ['music', 'sports'],
// // };

// // // Accessing object properties
// // x = person.name; // Dot notation
// // x = person['age']; // Bracket notation
// // x = person.address.state;
// // x = person.hobbies[0];

// // // Updating properties
// // person.name = 'Jane Doe';
// // person['isAdmin'] = false;

// // // Deleting properties
// // delete person.age;

// // // Create new properties
// // person.hasChildren = true;

// // // Add functions
// // person.greet = function () {
// // 	console.log(`Hello, my name is ${this.name}`);
// // };

// // person.greet();

// // // Keys with multiple words
// // const person2 = {
// // 	'first name': 'Brad',
// // 	'last name': 'Traversy',
// // };

// // x = person2['first name'];

// // console.log(x);

// // let x;

// // // Create object using the object constructor
// // const todo = new Object();

// // todo.id = 1;
// // todo.name = 'Buy Milk';
// // todo.completed = false;

// // x = todo;

// // // Object Nesting
// // const person = {
// // 	address: {
// // 		coords: {
// // 			lat: 42.9384,
// // 			lng: -71.3232,
// // 		},
// // 	},
// // };

// // x = person.address.coords.lat;

// // const obj1 = { a: 1, b: 2 };
// // const obj2 = { c: 3, d: 4 };

// // // Spread operator
// // const obj3 = { ...obj1, ...obj2 };
// // // Same as using ...
// // const obj4 = Object.assign({}, obj1, obj2);

// // // Array of objects
// // const todos = [
// // 	{ id: 1, name: 'Buy Milk' },
// // 	{ id: 2, name: 'Pickup kids from school' },
// // 	{ id: 3, name: 'Take out trash' },
// // ];

// // x = todos[0].name;

// // // Get array of object keys
// // x = Object.keys(todo);

// // // Get length of an object
// // x = Object.keys(todo).length;

// // // Get array of object values
// // x = Object.values(todo);

// // // Get array of object key/value pairs
// // x = Object.entries(todo);

// // // Check if object has a property
// // x = todo.hasOwnProperty('age');

// // console.log(x);

// // // Setting object properties with the same name as a variable
// // const firstName = 'John';
// // const lastName = 'Doe';
// // const age = 30;

// // const person = {
// // 	firstName,
// // 	lastName,
// // 	age,
// // };

// // console.log(person.age);

// // // Destructuring object properties

// // const todo = {
// // 	id: 1,
// // 	title: 'Take out trash',
// // 	user: {
// // 		name: 'John',
// // 	},
// // };

// // const {
// // 	id: todoId, // rename id to todoId
// // 	title,
// // 	user: { name }, // destructuring multiple levels
// // } = todo;

// // console.log(todoId);

// // // Destructuring arrays & using the rest/spread operator
// // const numbers = [23, 67, 33, 49, 52];

// // const [first, second, ...rest] = numbers;

// // console.log(first, second, rest);

// // const post = {
// // 	id: 1,
// // 	title: 'Post One',
// // 	body: 'This is the body',
// // };

// // // Convert to JSON string
// // const str = JSON.stringify(post);

// // console.log(str.id);

// // // Parse JSON
// // const obj = JSON.parse(str);

// // console.log(obj.id);

// // // JSON & arrays
// // const posts = [
// // 	{
// // 		id: 1,
// // 		title: 'Post One',
// // 		body: 'This is the body',
// // 	},
// // 	{
// // 		id: 2,
// // 		title: 'Post Two',
// // 		body: 'This is the body',
// // 	},
// // ];

// // const str2 = JSON.stringify(posts);

// // console.log(str2);

// // [
// // 	{
// // 		id: '1',
// // 		title: 'Take out trash',
// // 	},
// // ];

// // // Step 1
// // const library = [
// // 	{
// // 		title: 'The Road Ahead',
// // 		author: 'Bill Gates',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: 'Steve Jobs',
// // 		author: 'Walter Isaacson',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // 	{
// // 		title: 'Mockingjay',
// // 		author: 'Suzanne Collins',
// // 		status: {
// // 			own: true,
// // 			reading: false,
// // 			read: false,
// // 		},
// // 	},
// // ];

// // // Step 2
// // library[0].status.read = true;
// // library[1].status.read = true;
// // library[2].status.read = true;

// // // Step 3
// // const { title: firstBook } = library[0];

// // console.log(firstBook);

// // // Step 4
// // const libraryJSON = JSON.stringify(library);

// // console.log(libraryJSON);

// // // Define a function
// // function sayHello() {
// // 	console.log('Hello World');
// // }

// // // Invoke, execute or call a function
// // sayHello();

// // // Define a function with parameters
// // function add(num1, num2) {
// // 	console.log(num1 + num2);
// // }

// // // Invoke function with arguments
// // add(5, 10);

// // // Parameters vs. Arguments
// // // Parameters are the names of the variables that are used to pass data into a function.
// // // Arguments are the values that are passed into the function

// // // Returning a value
// // function subtract(num1, num2) {
// // 	return num1 - num2;

// // 	console.log('After the return');
// // }

// // // Assign the returned value to a variable
// // const result = subtract(10, 2);

// // console.log(result, subtract(20, 5));

// // // Default Params
// // function registerUser(user = 'Bot') {
// // 	// Old way - before using `=`
// // 	// if (!user) {
// // 	//   user = 'Bot';
// // 	// }

// // 	return user + ' is registered';
// // }

// // console.log(registerUser());

// // // Rest Params
// // function sum(...numbers) {
// // 	let total = 0;

// // 	for (const num of numbers) {
// // 		total += num;
// // 	}

// // 	return total;
// // }

// // console.log(sum(1, 2, 3, 4, 5, 6, 100));

// // // Objects as params
// // function loginUser(user) {
// // 	return `The user ${user.name} with the id of ${user.id} is logged in`;
// // }

// // const user = {
// // 	id: 1,
// // 	name: 'John',
// // };

// // console.log(loginUser(user));
// // console.log(
// // 	loginUser({
// // 		id: 2,
// // 		name: 'Sara',
// // 	})
// // );

// // // Arrays as params
// // function getRandom(arr) {
// // 	const randomIndex = Math.floor(Math.random() * arr.length);

// // 	const item = arr[randomIndex];

// // 	console.log(item);
// // }

// // getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // // 'window' is globally scoped
// // // alert('Hello');
// // // console.log(innerWidth);

// // // Global scope variable
// // const x = 100;

// // console.log(x, 'in global');

// // function run() {
// // 	// Access global vars in functions
// // 	console.log(window.innerHeight);
// // 	console.log(x, 'in function');
// // }

// // run();

// // // Access global vars in blocks
// // if (true) {
// // 	console.log(x, 'in block');
// // }

// // function add() {
// // 	// Overwriting global x (variable shadowing)
// // 	const x = 1;
// // 	const y = 50;
// // 	console.log(x + y);
// // }

// // // Can not access a function scoped variable in global scope
// // console.log(y);

// // add();
// // // 'window' is globally scoped
// // // alert('Hello');
// // // console.log(innerWidth);

// // // Global scope variable
// // const x = 100;

// // console.log(x, 'in global');

// // function run() {
// // 	// Access global vars in functions
// // 	console.log(window.innerHeight);
// // 	console.log(x, 'in function');
// // }

// // run();

// // // Access global vars in blocks
// // if (true) {
// // 	console.log(x, 'in block');
// // }

// // function add() {
// // 	// Overwriting global x (variable shadowing)
// // 	const x = 1;
// // 	const y = 50;
// // 	console.log(x + y);
// // }

// // // Can not access a function scoped variable in global scope
// // console.log(y);

// // add();

// // const x = 100;

// // // An If statement is a block
// // if (true) {
// // 	console.log(x);
// // 	const y = 200;
// // 	console.log(x + y);
// // }

// // // console.log(y); // ReferenceError: y is not defined

// // // A loop is a block
// // for (let i = 0; i <= 10; i++) {
// // 	console.log(i);
// // }

// // // console.log(i); // ReferenceError: i is not defined

// // // Using var
// // if (true) {
// // 	const a = 500;
// // 	let b = 600;
// // 	var c = 700;
// // }

// // console.log(c);

// // // var IS function scoped
// // function run() {
// // 	var d = 100;
// // 	console.log(d);
// // }

// // run();

// // // console.log(d);

// // const foo = 1;
// // var bar = 2; // Put on the window object

// // function first() {
// // 	const x = 100;

// // 	function second() {
// // 		const y = 200;
// // 		console.log(x + y);
// // 	}

// // 	// console.log(y);

// // 	second();
// // }

// // first();

// // if (true) {
// // 	const x = 100;

// // 	if (x === 100) {
// // 		const y = 200;
// // 		console.log(x + y);
// // 	}

// // 	console.log(y);
// // }

// // // Function Declaration
// // function addDollarSign(value) {
// // 	return '$' + value;
// // }

// // // When using declarations, you can invoke the function before the declaration. With expressions, you can not
// // console.log(addDollarSign(100));

// // // Function Expression
// // const addPlusSign = function (value) {
// // 	return '+' + value;
// // };

// // console.log(addPlusSign(200));

// // //  Normal function declaration
// // // function add(a, b) {
// // //   return a + b;
// // // }

// // // Arrow function syntax
// // const add = (a, b) => {
// // 	return a + b;
// // };

// // // Implicit Return
// // const subtract = (a, b) => a - b;

// // // Can leave off () with a single param
// // const double = (a) => a * 2;

// // // Returning an object
// // const createObj = () => ({
// // 	name: 'Brad',
// // });

// // const numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(function (n) {
// // 	console.log(n);
// // });

// // // Arrow function in a callback
// // numbers.forEach((n) => console.log(n));

// // console.log(add(1, 2));
// // console.log(subtract(10, 5));
// // console.log(double(10));
// // console.log(createObj());

// // // IFFE Syntax (Has it's own scope and runs right away)
// // (function () {
// // 	const user = 'John';
// // 	console.log(user);
// // 	const hello = () => console.log('Hello from the IIFE');
// // 	hello();
// // })();

// // // Params
// // (function (name) {
// // 	console.log('Hello ' + name);
// // })('Shawn');

// // // Named IIFE (Can only be called recursively)
// // (function hello() {
// // 	console.log('Hello');
// // })();

// // const user = 'Brad';
// // console.log(user);

// // // Challenge 1
// // // function getCelsius(f) {
// // //   const celsius = ((f - 32) * 5) / 9;
// // //   return celsius;
// // // }

// // const getCelsius = (f) => ((f - 32) * 5) / 9;

// // console.log(`The temp is ${getCelsius(35)} \xB0C `);

// // // Challenge 2
// // function minMax(arr) {
// // 	const min = Math.min(...arr);
// // 	const max = Math.max(...arr);

// // 	return {
// // 		min,
// // 		max,
// // 	};
// // }

// // console.log(minMax([2, 31, 4, 5, 6]));

// // // Challenge 3
// // ((length, width) => {
// // 	const area = length * width;

// // 	const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

// // 	console.log(output);
// // })(20, 10);

// // //  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
// // const x = 100;
// // const y = 50;

// // function getSum(n1, n2) {
// // 	const sum = n1 + n2;
// // 	return sum;
// // }

// // const sum1 = getSum(x, y);
// // const sum2 = getSum(10, 5);

// // console.log(sum1, sum2);

// // // Open 'sources' tab and put a breakpoint at the first() function

// // // First Example

// // function first() {
// // 	console.log('first...');
// // }

// // function second() {
// // 	console.log('second...');
// // }

// // function third() {
// // 	console.log('third...');
// // }

// // first();
// // second();
// // third();

// // // Second Example

// // // function first() {
// // //   console.log('first...');
// // //   second();
// // // }

// // // function second() {
// // //   console.log('second...');
// // //   third();
// // // }

// // // function third() {
// // //   console.log('third...');
// // // }

// // // first();

// // // If Statement Syntax
// // if (true) {
// // 	console.log('This is true');
// // }

// // if (false) {
// // 	console.log('This is NOT true');
// // }

// // // Evaluation expressions
// // const x = 10;
// // const y = 5;

// // if (x >= y) {
// // 	console.log(`${x} is greater than or equal to ${y}`);
// // }

// // if (x === y) {
// // 	console.log(`${x} is equal to ${y}`);
// // } else {
// // 	console.log(`${x} is NOT equal to ${y}`);
// // }

// // // Block scope
// // if (x !== y) {
// // 	const z = 20;
// // 	console.log(`${z} is 20`);
// // }

// // console.log(z); // Throw error

// // // Shorthand If/Else
// // if (x >= y)
// // 	console.log(`${x} is greater than or equal to ${y}`),
// // 		console.log('This is true');
// // else console.log('This is false');

// // const d = new Date(10, 30, 2022, 6, 0, 0);
// // const hour = d.getHours();

// // if (hour < 12) {
// // 	console.log('Good Morning');
// // } else if (hour < 18) {
// // 	console.log('Good Afternoon');
// // } else {
// // 	console.log('Good Night');
// // }

// // // Nested If
// // if (hour < 12) {
// // 	console.log('Good Morning');

// // 	if (hour === 6) {
// // 		console.log('Wake Up!');
// // 	}
// // } else if (hour < 18) {
// // 	console.log('Good Afternoon');
// // } else {
// // 	console.log('Good Night');

// // 	if (hour >= 20) {
// // 		console.log('zzzzzzzz');
// // 	}
// // }

// // if (hour >= 7 && hour < 15) {
// // 	console.log('It is work time!');
// // }

// // if (hour === 6 || hour === 20) {
// // 	console.log('Brush your teeth!');
// // }

// // const d = new Date(2022, 1, 10, 19, 0, 0);
// // const month = d.getMonth();
// // const hour = d.getHours();

// // // Immediate value evaluation
// // switch (month) {
// // 	case 1:
// // 		console.log('It is January');
// // 		break;
// // 	case 2:
// // 		console.log('It is February');
// // 		break;
// // 	case 3:
// // 		console.log('It is March');
// // 		break;
// // 	default:
// // 		console.log('It is not Jan, Feb or March');
// // }

// // // Range evaluation
// // switch (true) {
// // 	case hour < 12:
// // 		console.log('Good Morning');
// // 		break;
// // 	case hour < 18:
// // 		console.log('Good Afternoon');
// // 		break;
// // 	default:
// // 		console.log('Good Night');
// // }

// // function calculator(num1, num2, operator) {
// // 	let result;

// // 	switch (operator) {
// // 		case '+':
// // 			result = num1 + num2;
// // 			break;
// // 		case '-':
// // 			result = num1 - num2;
// // 			break;
// // 		case '*':
// // 			result = num1 * num2;
// // 			break;
// // 		case '/':
// // 			result = num1 / num2;
// // 			break;
// // 		default:
// // 			result = 'Invalid Operator';
// // 	}

// // 	console.log(result);
// // 	return result;
// // }

// // calculator(5, 2, '&');

// // // Falsy Values:
// // // - false
// // // - 0
// // // - "" or '' (Empty string)
// // // - null
// // // - undefined
// // // - NaN

// // // Truthy Values:
// // // - Everything else that is not falsy
// // // - true
// // // - '0' (0 in a string)
// // // - ' ' (space in a string)
// // // - 'false' (false in a string)
// // // - [] (empty array)
// // // - {} (empty object)
// // // - function () {} (empty function)

// // const x = function () {};

// // if (x) {
// // 	console.log('This is truthy');
// // } else {
// // 	console.log('This is falsy');
// // }

// // console.log(Boolean(x));

// // // Truthy and falsy caveats
// // const children = 3;

// // // Checking for literal 0
// // if (children) {
// // 	console.log(`You have ${children} children`);
// // } else {
// // 	console.log('Please enter number of children');
// // }

// // // Solution
// // if (!isNaN(children)) {
// // 	console.log(`You have ${children} children`);
// // } else {
// // 	console.log('Please enter number of children');
// // }

// // // Checking for empty arrays
// // const posts = ['Post One'];

// // // Always true even when empty
// // if (posts) {
// // 	console.log('List Posts');
// // } else {
// // 	console.log('No Posts To List');
// // }

// // // Solution
// // if (posts.length > 0) {
// // 	console.log('List Posts');
// // } else {
// // 	console.log('No Posts To List');
// // }

// // // Checking for empty objects
// // const user = {
// // 	name: 'Brad',
// // };

// // // Always true, even when no properties
// // if (user) {
// // 	console.log('List User');
// // } else {
// // 	console.log('No User');
// // }

// // // Solution
// // if (Object.keys(user).length > 0) {
// // 	console.log('List User');
// // } else {
// // 	console.log('No User');
// // }

// // // Loose Equality (==)
// // console.log(false == 0); // true
// // console.log('' == 0); // true
// // console.log(null == undefined); // true

// // // Strict Equality
// // console.log(false === 0); // false
// // console.log('' === 0); // false
// // console.log(null === undefined); // false

// // console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
// // console.log(10 > 20 || 30 < 15); // Only one has to be true

// // // && - Will return first falsy value or the last value
// // let a;

// // a = 10 && 20;
// // a = 10 && 20 && 30;
// // a = 10 && 0 && 30;
// // a = 10 && '' && 0 && 30;

// // console.log(a);

// // const posts = ['Post One', 'Post Two'];
// // posts.length > 0 && console.log(posts[0]);

// // // || - Will return the first truthy value or the last value

// // let b;

// // b = 10 || 20;
// // b = 0 || 20;
// // b = 0 || null || '' || undefined;

// // console.log(b);

// // // ?? - Returns the right side operand when the left is null or undefined

// // let c;

// // c = 10 ?? 20;
// // c = null ?? 20;
// // c = undefined ?? 30;
// // c = 0 ?? 30;
// // c = '' ?? 30;

// // console.log(c);

// // // ||= assigns the right side value only if the left is a falsy value.

// // let a = null;

// // // if (!a) {
// // //   a = 10;
// // // }

// // // a = a || 10;

// // a ||= 10;

// // console.log(a);

// // // &&= assigns the right side value only if the left is a truthy value.

// // let b = 10;

// // if (b) {
// // 	b = 20;
// // }

// // b = b && 20;

// // b &&= 20;

// // console.log(b);

// // // ??= assigns the right side value only if the left is null or undefined.

// // let c = null;

// // if (c === null || c === undefined) {
// // 	c = 20;
// // }

// // c = c ?? 20;

// // c ??= 20;

// // console.log(c);

// // const age = 17;

// // // Using an if statement
// // if (age >= 18) {
// // 	console.log('You can vote!');
// // } else {
// // 	console.log('You can not vote');
// // }

// // // Using a ternary operator
// // age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// // // Assigning a conditional value to a variable
// // const canVote = age >= 18 ? true : false;
// // const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

// // console.log(canVote);
// // console.log(canVote2);

// // // Multiple statements

// // const auth = true;

// // // Long version
// // // let redirect;

// // // if (auth) {
// // //   alert('Welcome to the dashboard');
// // //   redirect = '/dashboard';
// // // } else {
// // //   alert('Access Denied');
// // //   redirect = '/login';
// // // }

// // // Shorter ternary version
// // const redirect = auth
// // 	? (alert('Welcome to the dashbaord'), '/dashboard')
// // 	: (alert('Access Denied'), '/login');

// // console.log(redirect);

// // // Ternary with no else
// // auth ? console.log('Welcome to the dashboard') : null;
// // // Shorthand for ternary with no else
// // auth && console.log('Welcome to the dashoard');

// // for ([initialExpression]; [conditionExpression]; [incrementExpression])
// //   statement;

// // INITITAL EXPRESSION - Initializes a variable/counter
// // CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// // INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// // STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// // for (let i = 0; i <= 10; i++) {
// //   if (i === 7) {
// //     console.log('7 is my lucky number');
// //   } else {
// //     console.log('Number ' + i);
// //   }
// // }

// // Nested loops
// // for (let i = 1; i <= 10; i++) {
// //   console.log('Number ' + i);

// //   for (let j = 1; j <= 5; j++) {
// //     console.log(`${i} * ${j} = ${i * j}`);
// //   }
// // }

// // Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
// 	if (names[i] === 'John') {
// 		console.log(names[i] + ' is the best');
// 	} else {
// 		console.log(names[i]);
// 	}
// }

// // Break
// for (let i = 0; i <= 20; i++) {
// 	if (i === 15) {
// 		console.log('Breaking...');
// 		break;
// 	}
// 	console.log(i);
// }

// // Continue
// for (let i = 0; i <= 20; i++) {
// 	if (i === 13) {
// 		console.log('Skipping 13...');
// 		continue;
// 	}
// 	console.log(i);
// }

// let i = 0;

// while (i <= 20) {
// 	console.log('Number ' + i);
// 	i++;
// }

// // Loop over arrays
// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
// 	console.log(arr[i]);
// 	i++;
// }

// // Nesting while loops
// while (i <= 5) {
// 	console.log('Number ' + i);

// 	let j = 1;
// 	while (j <= 5) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 		j++;
// 	}

// 	i++;
// }

// // Do While Loop - Always runs once
// do {
// 	console.log('Number ' + i);
// 	i++;
// } while (i <= 20);

// // For Loop
// // for (let i = 1; i <= 100; i++) {
// //   if (i % 15 === 0) {
// //     console.log('FizzBuzz');
// //   } else if (i % 3 === 0) {
// //     console.log('Fizz');
// //   } else if (i % 5 === 0) {
// //     console.log('Buzz');
// //   } else {
// //     console.log(i);
// //   }
// // }

// // While Loop
// let j = 1;

// while (j <= 100) {
// 	if (j % 15 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (j % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (j % 5 === 0) {
// 		console.log('Buzz');
// 	} else {
// 		console.log(j);
// 	}

// 	j++;
// }

// // Loop through arrays
// const items = ['book', 'table', 'chair', 'kite'];
// const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// // for (const item of items) {
// //   console.log(item);
// // }

// for (const user of users) {
// 	console.log(user.name);
// }

// // Loop over strings
// const str = 'Hello World';

// for (const letter of str) {
// 	console.log(letter);
// }

// // Loop over Maps
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);

// for (const [key, value] of map) {
// 	console.log(key, value);
// }

// // Loop through objects
// const colorObj = {
// 	color1: 'red',
// 	color2: 'blue',
// 	color3: 'orange',
// 	color4: 'green',
// };

// for (const key in colorObj) {
// 	console.log(key, colorObj[key]);
// }

// // Loop through arrays
// const colorArr = ['red', 'green', 'blue', 'yellow'];

// for (const key in colorArr) {
// 	console.log(colorArr[key]);
// }

// const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// // View prototype chain
// console.log(socials.__proto__);

// // Long form
// socials.forEach(function (item) {
// 	console.log(item);
// });

// // Short form
// socials.forEach((item) => console.log(item));

// // We can also pass in the index and original array
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// // Using a named function
// function logSocials(social) {
// 	console.log(social);
// }

// socials.forEach(logSocials);

// // Array of objects
// const socialObjs = [
// 	{ name: 'Twitter', url: 'https://twitter.com' },
// 	{ name: 'Facebook', url: 'https://facebook.com' },
// 	{ name: 'Linkedin', url: 'https://linkedin.com' },
// 	{ name: 'Instagram', url: 'https://instagram.com' },
// ];

// socialObjs.forEach((item) => console.log(item.url));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
// 	return number % 2 === 0;
// });

// // Short version
// const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// // Same with forEach
// const evenNumbers3 = [];
// numbers.forEach((number) => {
// 	if (number % 2 === 0) {
// 		evenNumbers.push(number);
// 	}
// });

// const companies = [
// 	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
// 	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
// 	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
// 	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// 	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
// 	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
// 	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
// 	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
// 	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Get only retail companies
// const retailCompanies = companies.filter(
// 	(company) => company.category === 'Retail'
// );
// // console.log(retailCompanies);

// // Get companies that started in or after 1980 and ended in or before 2005
// const earlyCompanies = companies.filter(
// 	(company) => company.start >= 1980 && company.end <= 2005
// );
// // console.log(earlyCompanies);

// // Get companies that lasted 10 years or more
// const longCompanies = companies.filter(
// 	(company) => company.end - company.start >= 10
// );

// console.log(longCompanies);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// // Same with forEach
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
// 	doubledNumbers2.push(number * 2);
// });

// const companies = [
// 	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
// 	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
// 	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
// 	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// 	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
// 	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
// 	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
// 	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
// 	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // Create an array of company names
// const companyNames = companies.map((company) => company.name);
// // console.log(companyNames);

// // Create an array with just company and category
// const companyInfo = companies.map((company) => {
// 	return {
// 		name: company.name,
// 		category: company.category,
// 	};
// });

// // Create an array of objects with the name and the length of each company in years
// const companyYears = companies.map((company) => {
// 	return {
// 		name: company.name,
// 		length: company.end - company.start + ' years',
// 	};
// });

// console.log(companyYears);

// // Chain map methods
// const squareAndDouble = numbers
// 	.map((number) => Math.sqrt(number))
// 	.map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers
// 	.map(function (number) {
// 		return Math.sqrt(number);
// 	})
// 	.map(function (sqrt) {
// 		return sqrt * 2;
// 	})
// 	.map(function (sqrtDoubled) {
// 		return sqrtDoubled * 3;
// 	});

// // Chaining different methods
// const evenDouble = numbers
// 	.filter((number) => number % 2 === 0)
// 	.map((number) => number * 2);

// console.log(evenDouble);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Add all numbers together
// const sum = numbers.reduce(function (accumulator, currentValue) {
// 	return accumulator + currentValue;
// }, 0);

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// // Using a for loop
// const sum3 = () => {
// 	let acc = 0;
// 	for (const cur of numbers) {
// 		acc += cur;
// 	}
// 	return acc;
// };

// // Shopping cart example (objects)
// const cart = [
// 	{ id: 1, name: 'Product 1', price: 130 },
// 	{ id: 2, name: 'Product 2', price: 150 },
// 	{ id: 3, name: 'Product 3', price: 200 },
// ];

// const total = cart.reduce(function (acc, product) {
// 	return acc + product.price;
// }, 0);

// console.log(total);

// // Challenge 1
// const people = [
// 	{
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		email: 'john@gmail.com',
// 		phone: '111-111-1111',
// 		age: 30,
// 	},
// 	{
// 		firstName: 'Jane',
// 		lastName: 'Poe',
// 		email: 'jane@gmail.com',
// 		phone: '222-222-2222',
// 		age: 25,
// 	},
// 	{
// 		firstName: 'Bob',
// 		lastName: 'Foe',
// 		email: 'bob@gmail.com',
// 		phone: '333-333-3333',
// 		age: 45,
// 	},
// 	{
// 		firstName: 'Sara',
// 		lastName: 'Soe',
// 		email: 'Sara@gmail.com',
// 		phone: '444-444-4444',
// 		age: 19,
// 	},
// 	{
// 		firstName: 'Jose',
// 		lastName: 'Koe',
// 		email: 'jose@gmail.com',
// 		phone: '555-555-5555',
// 		age: 23,
// 	},
// ];

// const youngPeople = people
// 	.filter((person) => person.age <= 25)
// 	.map((person) => ({
// 		name: person.firstName + ' ' + person.lastName,
// 		email: person.email,
// 	}));

// console.log(youngPeople);

// // Challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveSum = numbers
// 	.filter((number) => number > 0)
// 	.reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// // Challenge 3
// const words = ['coder', 'programmer', 'developer'];

// const cWords = words.map((word) => {
// 	return word[0].toUpperCase() + word.slice(1, word.length);
// });

// console.log(cWords);

// // ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// let x = Math.floor(Math.random() * 100 + 1);

// let y = Math.floor(Math.random() * 50 + 1);

// const sum = `${x} + ${y} = ${x + y}`;
// const sub = `${x} - ${y} = ${x - y}`;
// const times = `${x} * ${y} = ${x * y}`;
// const dev = `${x} / ${y} = ${Math.floor(x / y)}`;
// const mod = `${x} % ${y} = ${x % y}`;
// const power = `${x} ** ${y} = ${Math.pow(x, y)}`;

// console.log('sum = ' + sum);
// console.log('sub = ' + sub);
// console.log('dev = ' + dev);
// console.log('times = ' + times);
// console.log('mod = ' + mod);
// console.log('power = ' + power);

// d = new Date();

// let x = Intl.DateTimeFormat('en-LB').format(d);

// console.log(d);

// const arr = [1, 2, 3, 4, 5];

// arr.unshift(0);
// arr.reverse();
// arr.unshift(6);

// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr1.splice(4);
// // arr1.concat(arr2);
// arr3 = arr1.concat(arr2);
// console.log(arr3);

// const library = [
// 	{
// 		title: 'Inception',
// 		Author: 'Christopher Nolan',
// 		status: {
// 			own: true,
// 			watching: false,
// 			watched: false,
// 		},
// 	},
// 	{
// 		title: 'Parasite ',
// 		Author: 'Bong Joon-ho',
// 		status: {
// 			own: true,
// 			watching: false,
// 			watched: false,
// 		},
// 	},
// 	{
// 		title: 'Pulp Fiction',
// 		Author: 'Quentin Tarantino',
// 		status: {
// 			own: true,
// 			watching: false,
// 			watched: false,
// 		},
// 	},
// ];

// library[0].status.watching = true;
// library[1].status.watching = true;
// library[2].status.watching = true;

// const { title: firstMovie } = library[0];

// const libraries = JSON.stringify(library);

// const libraries2 = JSON.parse(libraries);

// console.log(libraries2);

// function getCelsius(f) {
// 	return `the tempreture is ${((f - 32) * 5) / 9} \xB0C`;
// }

// // const getCelsius = (f) => `the tempreture is ${((f - 32) * 5) / 9} \xB0C`;

// console.log(getCelsius(32));

// const minMax = (arr) => ({
// 	min: Math.min(...arr),
// 	max: Math.max(...arr),
// });

// console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 0, 10]));

// ((Hight, width) => {
// 	alert(
// 		`the area of a triangle is hight ${Hight} times the width ${width} = ${
// 			Hight * width
// 		}`
// 	);
// })(2, 5);

// const num1 = parseInt(prompt('please input first number'));
// const num2 = parseInt(prompt('please input second number'));
// const symbol = prompt('please enter the (+,-,x,/,%,^)');
// 5;
// switch (symbol) {
// 	case '+':
// 		console.log(`sum = ${num1} + ${num2} = ${num1 + num2}`);
// 		break;
// 	case '-':
// 		console.log(`subtract = ${num1} - ${num2} = ${num1 - num2}`);
// 		break;
// 	case 'x':
// 		console.log(`times = ${num1} x ${num2} = ${num1 * num2}`);
// 		break;
// 	case '/':
// 		console.log(`divide = ${num1} / ${num2} = ${num1 / num2}`);
// 		break;
// 	case '%':
// 		console.log(`modules = ${num1} % ${num2} = ${num1 % num2}`);
// 		break;
// 	case '^':
// 		console.log(`power = ${num1} + ${num2} = ${num1 ** num2}`);
// 		break;
// 	default:
// 		console.log('Please enter the right symbol');
// }

// function calculator(num1, num2, symbol) {
// 	switch (symbol) {
// 		case '+':
// 			console.log(`sum = ${num1} + ${num2} = ${num1 + num2}`);
// 			break;
// 		case '-':
// 			console.log(`subtract = ${num1} - ${num2} = ${num1 - num2}`);
// 			break;
// 		case 'x':
// 			console.log(`times = ${num1} x ${num2} = ${num1 * num2}`);
// 			break;
// 		case '/':
// 			console.log(`divide = ${num1} / ${num2} = ${num1 / num2}`);
// 			break;
// 		case '%':
// 			console.log(`modules = ${num1} % ${num2} = ${num1 % num2}`);
// 			break;
// 		case '^':
// 			console.log(`power = ${num1} + ${num2} = ${num1 ** num2}`);
// 			break;
// 		default:
// 			console.log('Please enter the right symbol');
// 	}
// }

// calculator(2, 2, '/');
// let a;

// a = 10 && 20;
// a = 0 && 20;
// a = 10 && 20 && 0;

// // a = 10 || 20;
// // a = 0 || 20;

// // a = 10 ?? null;
// // a = null ?? 10;

// console.log(a);

// for (let i = 1; i <= 5; i++) {
// 	console.log(i);

// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 	}
// }

// const names = ['ahmad', 'omar', 'ali', 'abbas'];

// for (let i = 0; i <= names.length; i++) {
// 	names[i] === 'ahmad'
// 		? console.log('ahmad is the best')
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

// do {
// 	console.log('Number ' + i);
// 	i++;
// } while (i <= 10);

// for (i = 1; i <= 50; i++) {
// 	if (i % 15 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (i % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz');
// 	} else console.log('Number ' + i);
// }

// let i = 1;

// while (i <= 50) {
// 	if (i % 15 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (i % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz');
// 	} else console.log('Number ' + i);

// 	i++;
// }

// const names = ['ahmad', 'omar', 'ali', 'abbas'];

// // for (const name of names) {
// // 	console.log(name);
// // }

// names.forEach((name, index, arr) => console.log(`${index} - ${name}`, arr));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32];

// const result = numbers.filter((number) => number % 2 === 0);
// const result = numbers.filter((number) => number > 5);
// console.log(result);
// const evenNumbers = [];
// numbers.forEach((number) => {
// 	number % 2 === 0 ? evenNumbers.push(number) : null;
// });

// console.log(evenNumbers);

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// const retailsComp = companies.filter(
// 	(company) => company.category === 'Retail'
// );

// console.log(retailsComp);

// const compDate = companies.filter(
// 	(company) => company.start > 1980 && company.end < 2005
// );

// console.log(compDate);

// const longCompanies = companies.filter(
// 	(company) => company.end - company.start >= 10
// );

// console.log(longCompanies);

// const arr1 = [1, 2, 4, 5, 6];

// const arr2 = arr1.map((number) => number + 2);

// console.log(arr2);

// const arrNames = companies.map((company) => company.name);
// console.log(arrNames);

// const arr2 = companies.map(
// 	(company) => `${company.name} - ${company.category}`
// );

// console.log(arr2);

// const compInfo = companies.map((company) => {
// 	return {
// 		name: company.name,
// 		category: company.category,
// 	};
// });

// console.log(compInfo);

// const compLength = companies.map(
// 	(company) => `${company.name} - ${company.end - company.start} years`
// );

// console.log(compLength);

// const compLengthObj = companies
// 	.map((company) => {
// 		return {
// 			name: company.name,
// 			length: company.end - company.start,
// 		};
// 	})
// 	.map((company) => company.length > 10);

// console.log(compLengthObj);

// // 1-
// const greet = (name) => `Hello, ${name}`;
// console.log(greet('Alice'));

// const countCharacter = (str) => str.replace(' ', '').length;
// console.log(countCharacter('hello world'));

// const getSquareRoot = (number) => Math.sqrt(number).toFixed(2);
// console.log(getSquareRoot(10));

// const capitalLetter = (str) =>
// 	`${str.charAt().toUpperCase()}${str.substring(1)}`;
// console.log(capitalLetter('hello world'));

// const multiplyString = (str) => str * 2;
// console.log(multiplyString('42'));

// const getMax = (num1, num2) => {
// 	num1 >= num2 ? console.log(num1) : console.log(num2);
// };
// console.log(getMax(20, 10));

// const transformString = (str) => str.replaceAll(/a/g, '').replace(/uio/g);
// console.log(transformString('javascript'));

// const greet = (name) => 'Hello ' + name;
// console.log(greet('Alice'));

// const countCharacter = (str) => str.replaceAll(' ', '').length;
// console.log(countCharacter('hello world today'));

// const getRoot = (number) => Math.sqrt(number).toFixed(2);
// console.log(getRoot(10));

// const capitalLetter = (str) =>
// 	str
// 		.split(' ')
// 		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// 		.join(' ');
// console.log(capitalLetter('hello world'));

// const getMax = (num1, num2) => (num1 > num2 ? num1 : num2);
// console.log(getMax(10, 20));

// const multiplyString = (str) => str * 2;
// console.log(multiplyString('42'));

// const transformString = (str) =>
// 	str
// 		.replace(/[aeiou]/gi, '')
// 		.split('')
// 		.reverse()
// 		.join('');
// console.log(transformString('javascript'));

// const str1 = 'hello';
// const str2 = 'world';
// const str3 = `${str1} ${str2}`;
// console.log(str3);

// const str4 = 'hello world today';
// console.log(str4.replaceAll(' ', '').length);

// const str5 = 'hello world';
// const str6 = str5.toUpperCase();
// console.log(str6);

// const num1 = 3.14159;
// const num2 = Math.round(num1);
// const num3 = Math.floor(num1);
// const num4 = Math.ceil(num1);
// console.log(num2, num3, num4);

// const num5 = Math.floor(Math.random() * 100 + 1);
// console.log(num5);

// const name1 = 'ahmad';
// const number = 69;
// console.log(`Hello, my name is ${name1} and my favorite number is ${number}`);

// const age = 32;
// const currentYear = 2025;
// const yearBorn = currentYear - age;
// console.log(`I was born in ${yearBorn}`);

// const firstName = 'ahmad';
// const secondName = 'ahmad';
// const initials = `${firstName.charAt(0).toUpperCase()}.${secondName
// 	.charAt(0)
// 	.toUpperCase()}`;
// console.log(initials);

// const number = 5.5;
// const priceDollars = `$${number.toFixed(2)}`;
// console.log(priceDollars, typeof priceDollars);

// const word = 'apple';
// const swap = `${word.charAt(word.length - 1)}${word.slice(1, -1)}${word.charAt(
// 	0
// )}`;
// console.log(swap);

// const mini = Math.floor(Math.random() * 1000);
// const max = Math.floor(Math.random() * 9999);
// const randomNumber = Math.floor(Math.random() * 9000 + 1000);
// const secondDigit = randomNumber.toString().charAt(1);
// console.log(randomNumber, secondDigit);

// const userName = 'ahmad';
// const favoriteNumber = 69;
// const symbol = '@!_';
// const passWord = `${userName}_${favoriteNumber}${symbol}`;
// console.log(passWord);

// const fruits = ['apple', 'banana', 'cherry'];
// const banana = fruits[1];
// fruits[0] = 'mango';
// const fruitCount = fruits.length;
// fruits.push('orange');
// fruits.push('peach');
// fruits.pop();
// fruits.unshift('peach');
// console.log(fruitCount);
// console.log(fruits);

// const colors = ['red', 'green', 'blue', 'yellow'];
// const lastColor = colors[colors.length - 1];
// console.log(lastColor);

// const animals = ['dog', 'cat', 'rabbit'];
// const animal = animals.splice(0, 2);
// animal.push('hamster');
// const animalsComplete = animal.concat(animals);
// console.log(animalsComplete);
// const numbers = [10, 20, 30, 40];
// numbers.splice(1, 1);
// console.log(numbers);

// const girls = ['Anna', 'Bella'];
// const boys = ['Tom', 'John'];
// const students = [...girls, ...boys];
// console.log(students);

// const countries = ['Brazil', 'France', 'Germany', 'Japan'];
// const indexGermany = countries.indexOf('Germany');
// console.log(indexGermany);

// const items = ['a', 'b', 'c', 'd', 'e'];
// const middleItem = items[Math.floor(items.length / 2)];
// console.log(middleItem);

// const tools = ['hammer', 'wrench', 'screwdriver', 'pliers'];
// tools.splice(2, 1, 'drill', 'saw');
// console.log(tools);

// const steps = ['start', 'step1', 'step2', 'step3', 'end'];
// const coreSteps = steps.splice(1, -1);
// console.log(coreSteps);

// const drinks = ['coke', 'water', 'juice'];
// const drinksNew = drinks.reverse();
// const firstLetter = [
// 	drinksNew[0].charAt(0),
// 	drinksNew[1].charAt(0),
// 	drinksNew[2].charAt(0),
// ];
// console.log(firstLetter);

// const grid = [];
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// grid.push(arr1, arr2, arr3);
// console.log(grid);

// const matrix = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];
// const spread = matrix.flat();
// console.log(spread);

// const names = ['John', 'Amelia', 'Steve'];
// const lastName = names[names.length - 1];
// const char = lastName.charAt(lastName.length - 2);
// console.log(char);

// const nums = [10, 20, 30, 40, 50, 60];
// const numRev = nums.splice(2, 4);
// console.log(nums);

// const scores = [300, 100, 400, 200];
// const sort = scores.sort((a, b) => b - a);

// const words = ['JavaScript', 'is', 'fun'];
// const sentence = words.join(' ') + '.';
// console.log(sentence);

// const person = {
// 	name: 'Alice',
// 	age: 25,
// 	city: 'paris',
// };
// console.log(person.name);
// person.age = 26;
// person.isStudent = true;
// console.log(person['city']);
// delete person.city;
// console.log(person);

// const user = {
// 	name: 'John',
// 	address: {
// 		city: 'London',
// 		zip: 'E1 6AN',
// 	},
// };
// console.log(user.address.zip);
// console.log('name' in user);

// const car = {
// 	brand: 'Toyota',
// 	model: 'Corolla',
// 	year: 2020,
// };

// for (let key in car) {
// 	console.log(`${key}: ${car[key]}`);
// }
// for (let key in car) {
// 	console.log(car[key]);
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combine = { ...obj1, ...obj2 };
// console.log(combine);

// const keyName = 'score';
// const player = {};
// player[keyName] = 100;
// console.log(player);

// const data = {
// 	user: {
// 		profile: {
// 			location: {
// 				city: 'Paris',
// 				country: 'France',
// 			},
// 		},
// 	},
// };

// console.log(data.user.profile.location.city);
// console.log(data['user']['profile']['location']['city']);

// const laptop = {
// 	brand: 'Dell',
// 	ram: '16GB',
// 	cpu: 'i7',
// 	screen: '15 inch',
// };
// const keyNumber = Object.keys(laptop).length;
// console.log(keyNumber);

// const customer = {
// 	name: 'Alice',
// 	orders: {
// 		favorites: ['burger', 'pizza', 'fries'],
// 	},
// };

// console.log(customer.orders.favorites[1]);

// const original = { name: 'Lana', age: 30 };
// const clone = { ...original, age: 31 };
// console.log(clone);

// const brand = 'Nike';
// const size = 42;
// const color = 'black';
// const shoe = {
// 	brand,
// 	size,
// 	color,
// };
// console.log(shoe);

// const part1 = { a: 1, b: { x: 10 } };
// const part2 = { c: 3, b: { y: 20 } };
// const part3 = {
// 	a: part1.a,
// 	b: { ...part1.b, ...part2.b },
// 	c: part2.c,
// };
// console.log(part3);

// const settings = {
// 	theme: 'dark',
// 	language: 'en',
// 	layout: 'grid',
// };
// const keyToRemove = 'language';
// delete settings[keyToRemove];
// console.log(settings);

// const scores = { math: 90, english: 85 };
// const arr1 = [];
// for (let key in scores) {
// 	arr1.push([key, scores[key]]);
// }
// console.log(arr1);

// const store = {
// 	fruits: {
// 		tropical: ['mango', 'banana'],
// 	},
// };
// store.fruits.tropical[1] = 'kiwi';
// console.log(store);

// const book = { title: '1984', author: 'Orwell' };
// if (!('year' in book)) {
// 	book.year - 1949;
// }
// console.log(book);

// const user = { profile: { email: 'test@mail.com' } };
// const userEmail = user.profile.email;
// console.log(userEmail);

// const settings = { theme: 'dark', font: 'Arial' };
// const toRemove = 'font';
// delete settings[toRemove];
// console.log(settings);

// const store = { inventory: { drinks: ['water', 'juice'] } }; // juice is better than cola shame on you :p
// store.inventory.drinks[1] = 'Cola';
// console.log(store);

// const original = { name: 'Lana', age: 30, address: { city: 'Paris' } };
// const clone = {
// 	...original,
// 	age: 31,
// 	address: { ...original.address, city: 'London' },
// };

// const book = { title: '1984', author: 'Orwell' };
// if (!book.year) {
// 	book.year = 1949;
// }
// console.log(book);

// const today = new Date();
// console.log(today);

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// console.log(currentYear);

// const currentMonth = new Date().getMonth() + 1;
// console.log(currentMonth);

// const currentDay = new Date().getDay();
// console.log(currentDay);

// const myBirthday = new Date(1993, 0, 3);
// console.log(myBirthday);

// const date = new Date();
// const formatDay = date.getDay() + 1;
// const formatMonth = date.getMonth() + 1;
// const formatYear = date.getFullYear();
// const formattedDate = `${formatDay}/${formatMonth}/${formatYear}`;
// console.log(formattedDate);

// const easyDate = new Intl.DateTimeFormat('en-GB').format(date);
// console.log(easyDate);

// const date1 = new Date(2025, 0, 1); // Jan 1, 2025
// const date2 = new Date(2025, 4, 31); // May 31, 2025
// const numberBetween = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
// console.log(numberBetween);

// const today = new Date();
// const futureDate = new Date(today);
// futureDate.setDate(futureDate.getDate() + 7);
// console.log(futureDate);

// const year = 2024;
// if (year % 4 === 0) {
// 	if (year % 100 === 0) {
// 		if (year % 400 === 0) {
// 			console.log(true);
// 		} else {
// 			console.log(false);
// 		}
// 	} else {
// 		console.log(true);
// 	}
// } else {
// 	console.log(false);
// }

// if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }
// const days = [
// 	'Sunday',
// 	'Monday',
// 	'Tuesday',
// 	'Wednesday',
// 	'Thursday',
// 	'Friday',
// 	'Saturday',
// ];
// const now = new Date();
// const dayNow = days[now.getDay()];
// console.log(dayNow);

// how to add 1 year from today
// const yearFromToday = today.setFullYear(today.getFullYear() + 1);
// console.log(today.toDateString());
// 	myBirthday.setFullYear(myBirthday.getFullYear()) + 1
// ) /
// 	(1000 * 60 * 60 * 24 * 30 * 12);

// console.log(myBirthday);
// console.log(nextBirthDay);
// const myBirthday = new Date('1993-01-03');
// const daysTillBirthDay = (myBirthday) => {
// 	const today = new Date();
// 	const todayYear = today.getFullYear();

// 	const birthDay = new Date(myBirthday);
// 	birthDay.setFullYear(todayYear);

// 	if (birthDay < today) {
// 		birthDay.setFullYear(todayYear + 1);
// 	}
// 	const difference = (birthDay - today) / (1000 * 60 * 60 * 24);
// 	return Math.ceil(difference);
// };

// console.log(daysTillBirthDay(myBirthday));

// const validCalendarDate = (str) => {
// 	const [inputYear, inputMonth, inputDay] = str.split('-').map(Number);
// 	const date = new Date(str);
// 	const dateDay = date.getDate();
// 	const dateMonth = date.getMonth();
// 	const dateYear = date.getFullYear();

// 	if (
// 		inputYear === dateYear &&
// 		inputMonth - 1 === dateMonth &&
// 		inputDay === dateDay
// 	) {
// 		console.log(`${date} is a true Date`);
// 	} else {
// 		console.log(`${date} is not a true Date`);
// 	}
// };

// validCalendarDate('2025-02-30');

// const timeDifference = (str1, str2) => {
// 	const firstTime = str1.split(':');
// 	const secondTime = str2.split(':');
// 	const [h1, m1, s1] = firstTime.map(Number);
// 	const [h2, m2, s2] = secondTime.map(Number);
// 	const total1 = h1 * 3600 + m1 * 60 + s1;
// 	const total2 = h2 * 3600 + m2 * 60 + s2;
// 	const diff = Math.abs(total1 - total2);
// 	const hours = Math.floor(diff / 3600);
// 	const minutes = Math.floor((diff % 3600) / 60);
// 	const seconds = diff % 60;

// 	return `Time difference is ${hours}:${minutes}:${seconds}`;
// };

// console.log(timeDifference('14:35:00', '18:20:15'));

// const greet = (name) => `Hello, ${name}`;
// console.log(greet('Alice'));

// isEven = (number) => {
// 	if (number % 2 === 0) {
// 		return `${number} is Even`;
// 	} else if (number % 1 === 0) {
// 		return `${number} is Odd`;
// 	}
// };
// console.log(isEven(100));

// const max = (num1, num2) => (num1 > num2 ? num1 : num2);
// console.log(max(9, 5));

// const IntroduceYourSelf = (name, age) =>
// 	`Hello my name is ${name} and Im ${age} years old`;
// console.log(IntroduceYourSelf('Alice', 32));

// const calculator = (num1, num2, opp) => {
// 	switch (opp) {
// 		case '+':
// 			return `${num1} + ${num2} = ${num1 + num2}`;
// 			break;
// 		case '-':
// 			return `${num1} - ${num2} = ${num1 - num2}`;
// 			break;
// 		case '*':
// 			return `${num1} x ${num2} = ${num1 * num2}`;
// 			break;
// 		case '/':
// 			return `${num1} / ${num2} = ${num1 / num2}`;
// 			break;
// 		default:
// 			return 'Please enter the right opp(+,-,/,*)';
// 	}
// };

// console.log(calculator(1, 2, '*'));

// const isPrime = (number) => {
// 	if (number < 2) return false;
// 	for (let i = 2; i < number; i++) {
// 		if (number % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// console.log(isPrime(9));

// const countVowels = (str) => {
// 	let count = 0;
// 	for (let letter of str.toLowerCase()) {
// 		if (letter === 'a') {
// 			count++;
// 		} else if (letter === 'e') {
// 			count++;
// 		} else if (letter === 'u') {
// 			count++;
// 		} else if (letter === 'o') {
// 			count++;
// 		} else if (letter === 'i') {
// 			count++;
// 		}
// 	}
// 	return count;
// };

// console.log(countVowels('JavaScript')); // 3

// const countVowels = (str) => {
// 	let count = 0;
// 	for (let letter of str.toLowerCase()) {
// 		if ('aoeiu'.includes(letter)) count++;
// 	}
// 	return count;
// };

// console.log(countVowels('JavaScript'));

// const reverseString = (str) => {
// 	return str.split('').reverse().join('');
// };
// console.log(reverseString('JavaScript'));

// const reverseString = (str) => {
// 	const string = str.split('');
// 	let reverse = [];

// 	for (let i = string.length - 1; i >= 0; i--) {
// 		reverse.push(string[i]);
// 	}
// 	return reverse.join('');
// };
// console.log(reverseString('JavaScript'));

// const uniqueValues = (arr) => {
// 	const result = [];

// 	for (let item of arr) {
// 		if (!result.includes(item)) {
// 			result.push(item);
// 		}
// 	}

// 	return result;
// };

// console.log(uniqueValues([1, 2, 2, 3, 4, 4]));

// const fibonacci = (n) => {
// 	const arr = [0, 1];
// 	if (n < 1) {
// 		return [0];
// 	} else if (n < 2) {
// 		return [0, 1];
// 	}

// 	for (let i = 2; i < n; i++) {
// 		let next = arr[i - 1] + arr[i - 2];
// 		arr.push(next);
// 	}

// 	return arr;
// };

// console.log(fibonacci(6));

// const isPalindrome = (str) => {
// 	const string = str.toLowerCase().split('');
// 	const middle = Math.floor(string.length / 2);
// 	const firstPart = string.slice(0, middle);
// 	const secondPart = string
// 		.slice(string.length % 2 === 0 ? middle : middle + 1)
// 		.reverse();
// 	return firstPart.join('') === secondPart.join('');
// };

// console.log(isPalindrome('racecar'));

// const isPalindrome = (str) => {
// 	const lower = str.toLowerCase();
// 	for (let i = 0; i < lower.length / 2; i++) {
// 		if (lower[i] !== lower[lower.length - 1 - i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// const factorial = (number) => {
// 	let result = 1;
// 	for (i = number; i >= 1; i--) {
// 		result *= i;
// 	}
// 	return result;
// };

// console.log(factorial(5));

// const validatePassword = (str) => {
// 	const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
// 	const numbers = '0123456789';
// 	const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

// 	const hasUpperCase = [...str].some((char) => upperCaseLetters.includes(char));
// 	const hasLowerCase = [...str].some((char) => lowerCaseLetters.includes(char));
// 	const hasNumbers = [...str].some((char) => numbers.includes(char));
// 	const hasSymbol = [...str].some((char) => symbols.includes(char));

// 	if (str.length < 8) return `Password should be at least 8 characters long`;
// 	if (!hasUpperCase)
// 		return `Password should contain at least one Uppercase letter`;
// 	if (!hasLowerCase)
// 		return `Password should contain at least one Lowercase letter`;
// 	if (!hasNumbers) return `Password should contain at least one Number`;
// 	if (!hasSymbol) return `Password should contain at least one Symbol`;

// 	return true;
// };

// console.log(validatePassword('Abcd123!'));

// const validatePassword = (str) => {
// 	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const lower = 'abcdefghijklmnopqrstuvwxyz';
// 	const nums = '0123456789';
// 	const syms = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

// 	const issues = [];

// 	if (str.length < 8) issues.push('at least 8 characters long');
// 	if (![...str].some((c) => upper.includes(c)))
// 		issues.push('an uppercase letter');
// 	if (![...str].some((c) => lower.includes(c)))
// 		issues.push('a lowercase letter');
// 	if (![...str].some((c) => nums.includes(c))) issues.push('a number');
// 	if (![...str].some((c) => syms.includes(c))) issues.push('a symbol');

// 	if (issues.length > 0) return `Password should contain ${issues.join(', ')}`;
// 	return true;
// };

// console.log(validatePassword('abc')); // Gives all missing requirements

// const fruits = ['apple', 'banana', 'Avocado', 'blueberry', 'apricot'];

// const groupByFirstLetter = (arr) => {
// 	const a = [];
// 	const b = [];
// 	const sorting = [...arr].sort();

// 	for (let item of sorting) {
// 		const firstChar = item.charAt(0).toLowerCase();
// 		if (firstChar === 'a') {
// 			a.push(item);
// 		} else {
// 			b.push(item);
// 		}
// 	}
// 	return { a, b };
// };

// console.log(groupByFirstLetter(fruits));

// const deepEqual = (obj1, obj2) => {
// 	const arr1 = [];
// 	const arr2 = [];
// 	for (let key in obj2) {
// 		arr1.push([key, scores[key]]);
// 	}
// 	return arr2;
// };

// const a = { name: 'Alice', details: { age: 25, city: 'Paris' } };
// const b = { name: 'Alice', details: { age: 25, city: 'Paris' } };

// console.log(deepEqual(a, b));

// const string = 'i went to the beach';
// const arr3 = ['uomi', 'sofi', 'fal', 'kik'];

// for (const word of string) {
// 	console.log(word);
// }
// let message = [];
// for (let i = 0; i <= 5; i++) {
// 	message.push('hello');
// }
// console.log(message.join(' '));

// let message1 = '';
// for (let i = 0; i <= 5; i++) {
// 	message1 += ' Hello';
// }
// console.log(message1);

// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
// 	sum += i;
// }
// console.log(sum);

// let double = 1;

// while (double <= 100) {
// 	double *= 2;
// }
// console.log(double);
// let luckyNumber = 0;
// while (luckyNumber < 7) {
// 	luckyNumber++;
// }
// console.log(luckyNumber);

// let i = 6;
// do {
// 	i++;
// } while (i < 5);
// console.log(i);

const names = ['ahmad', 'mohammad', 'omar'];

// for (name of names) {
// 	console.log('hello ' + name);
// }
// let i = 0;
// for (name of names) {
// 	if (name.length > 4) {
// 		i++;
// 	}
// }
// console.log(i);

const users = {
	name: 'ahmad',
	age: 32,
	isAdmin: true,
};

// for (let key in users) {
// 	console.log(`${key} = ${users[key]}`);
// }
let i = 0;
for (let key in users) {
	if (key.charAt(0) === 'n') {
		i++;
	}
}
console.log(i);
