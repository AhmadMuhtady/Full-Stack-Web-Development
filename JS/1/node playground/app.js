// async function getUser() {
// 	const response = await fetch('https://api.github.com/users/bradtraversy');
// 	const data = await response.json();
// 	console.log(data);
// }

// getUser();

const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const Person1 = new Person('John', 32);
Person1.greet();
