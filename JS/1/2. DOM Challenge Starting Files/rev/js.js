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

const library = [
	{
		title: 'The road ahead',
		author: 'Bill Gates',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Steves Jobes',
		author: 'Walter Isaacson',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Mocingjay',
		author: 'Suzanne Collins',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// console.log(library);

const { title: fistBook } = library[0];

console.log(fistBook);
console.log(library);

const library2 = JSON.stringify(library);
console.log(library2);
const library3 = JSON.parse(library2);
console.log(library3);
