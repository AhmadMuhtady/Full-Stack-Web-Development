// const sym = Symbol();
// const sym1 = Symbol('foo');
// const sym2 = Symbol('boo');

// console.log(sym, sym1, sym2);
// console.log(typeof sym);
// console.log(sym.description);
// console.log(sym1.description);

// console.log(Symbol('sym') === Symbol('sym'));

// const user = {
// 	[Symbol('id')]: 1,
// 	name: 'John Doe',
// 	email: 'john@gmail.com',
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.getOwnPropertySymbols(user));

// // SYMBOL.FOR great
// const sym3 = Symbol.for('foo');
// const sym4 = Symbol.for('foo');
// console.log(sym3 === sym4);
// console.log(Symbol.keyFor(sym3));
// console.log(sym2.toString());
// console.log(sym2.valueOf());
// console.log(Object.getOwnPropertyNames(Symbol));

// Iterators\
// const app = {
// 	nextIndex: 0,
// 	teams: ['Red Sox', 'Yankees', 'Astro', 'Dodgers'],
// 	next() {
// 		if (this.nextIndex >= this.teams.length) {
// 			return { done: true };
// 		}

// 		const returnValue = { value: this.teams[this.nextIndex], done: false };
// 		this.nextIndex++;
// 		return returnValue;
// 	},
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next()); // covered all the array

// const app = {
// 	teams: ['Red Sox', 'Yankees', 'Astro', 'Dodgers'],
// 	[Symbol.iterator]: function () {
// 		let nextIndex = 0;
// 		const teams = this.teams;
// 		return {
// 			next() {
// 				return nextIndex < teams.length
// 					? { value: teams[nextIndex++], done: false }
// 					: { done: true };
// 			},
// 		};
// 	},
// };

// const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);

// for (const team of app) {
// 	console.log(team);
// }

function* createTeamIterators(teams) {
	for (let i = 0; i < teams.length; i++) {
		yield teams[i];
	}
}

const teams = ['Red Sox', 'Yankees', 'Astro', 'Dodgers'];
const iterator = createTeamIterators(teams);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const team of createTeamIterators(teams)) {
// 	console.log(team);
// }

console.log([...createTeamIterators(teams)]);
const [first, second, third] = createTeamIterators(teams);
console.log(first, second, third);
