//sets
// const set = new Set([2, 3, 4, 4, 1, 2, 3, 4]); // unique sets , not ordered

// set.add(5);
// console.log(set.has(3));
// console.log(set.has(6));
// set.delete(5);
// set.clear();
// console.log(set);
// const setArray = Array.from(set);
// console.log(setArray);

// for (let item of set) {
// 	console.log(item);
// }
// const iterator = set.values();
// console.log(iterator.next().value);

// Maps
// const myMap = new Map();

// myMap.set('name', 'John');
// myMap.set(1, 'blue');
// myMap.set(2, 'red');

// console.log(myMap.get('name'));
// console.log(myMap.get(1));
// console.log(myMap.get(2));
// console.log(myMap.size);
// console.log(myMap.has(1));
// console.log(myMap.has(3));
// // myMap.delete(2);
// console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-555', email: 'brad@example.com' });
peopleMap.set('jack', { phone: '666-666-666', email: 'jack@example.com' });
peopleMap.set('joe', { phone: '777-777-777', email: 'joe@example.com' });
peopleMap.set('jill', { phone: '888-888-888', email: 'jill@example.com' });

peopleMap.forEach((person) => console.log(person.email));
console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
