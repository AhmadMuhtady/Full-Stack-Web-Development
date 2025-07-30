// // class Rectangle {
// // 	constructor(name, width, hight) {
// // 		this.name = name;
// // 		this.width = width;
// // 		this.hight = hight;
// // 	}

// // 	area() {
// // 		return this.hight * this.width;
// // 	}

// // 	perimeter() {
// // 		return 2 * (this.hight + this.width);
// // 	}

// // 	isSquare() {
// // 		return this.width === this.hight;
// // 	}

// // 	RectangleDiscretion() {
// // 		console.log(`
// //       Area: ${this.area()},
// //       perimeter: ${this.perimeter()}
// //       is Square: ${this.isSquare()}`);
// // 	}
// // }

// // const square = new Rectangle('square 1', 20, 20);
// // console.log(square.area());
// // console.log(square.perimeter());
// // console.log(square.isSquare());
// // console.log(square);
// // square.RectangleDiscretion();

// // Class inheritance
// // parent class
// class Shape {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// //sub class
// class Rectangle extends Shape {
// 	constructor(name, width, hight) {
// 		super(name);
// 		this.width = width;
// 		this.hight = hight;
// 	}
// }

// const rect = new Rectangle('Rectangle 1', 10, 20);

// console.log(rect);

// class Circle extends Shape {
// 	constructor(name, radius) {
// 		super(name);
// 		this.radius = radius;
// 	}
// }

// const cir = new Circle('Circle', 30);
// console.log(cir);

// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);

// class Rectangle {
// 	constructor(name, width, hight) {
// 		this.name = name;
// 		this.width = width;
// 		this.hight = hight;
// 	}

// 	area() {
// 		return this.width * this.hight;
// 	}

// 	static getClass() {
// 		return 'Rectangle';
// 	}
// }

// const rec1 = new Rectangle('Rectangle 1, 20,30');
// console.log(rec1);
// console.log(Rectangle.getClass());

// class App {
// 	constructor() {
// 		this.serverName = 'localhost';
// 		const btn = document.getElementById('btn');
// 		btn.addEventListener('click', this.getServerName.bind(this));
// 	}

// 	getServerName() {
// 		console.log(this.serverName);
// 	}
// }

// const app = new App();

// getters and setter in a class
// class Person {
// 	constructor(firstName, lastName) {
// 		this._firstName = firstName;
// 		this._lastName = lastName;
// 	}

// 	get firstName() {
// 		return this.capitalizeFirst(this._firstName);
// 	}

// 	set firstName(value) {
// 		this._firstName = this.capitalizeFirst(value);
// 	}

// 	get lastName() {
// 		return this.capitalizeFirst(this._lastName);
// 	}

// 	set lastName(value) {
// 		this._lastName = this.capitalizeFirst(value);
// 	}

// 	get fullName() {
// 		return `${this._firstName} ${this._lastName}`;
// 	}

// 	capitalizeFirst(value) {
// 		return value.charAt(0).toUpperCase() + value.slice(1);
// 	}
// }

// const person1 = new Person('john', 'doe');
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.firstName = 'joe';
// person1.lastName = 'smith';
// console.log(person1);
// console.log(person1.fullName);

// getters and setter in a constructor function

// function Person(firstName, lastName) {
// 	this._firstName = firstName;
// 	this._lastName = lastName;

// 	Object.defineProperty(this, 'firstName', {
// 		get: function () {
// 			return (this._firstName =
// 				firstName.charAt(0).toUpperCase() + firstName.slice(1));
// 		},
// 		set: function (value) {
// 			this._firstName = value;
// 		},
// 	});

// 	Object.defineProperty(this, 'lastName', {
// 		get: function () {
// 			return (this._lastName =
// 				lastName.charAt(0).toUpperCase() + lastName.slice(1));
// 		},
// 		set: function (value) {
// 			this._lastName = value;
// 		},
// 	});

// 	Object.defineProperty(this, 'fullName', {
// 		get: function () {
// 			return `${this.firstName} ${this.lastName}`;
// 		},
// 	});
// }

// const person1 = new Person('john', 'doe');

// // Person.prototype.fullName = function (firstName, lastName) {
// // 	return `${this.firstName} ${this.lastName}`;
// // };

// console.log(person1.firstName);
// console.log(person1.lastName);
// // console.log(person1.fullName());
// console.log(person1.fullName);

// //Object Literal

// const PersonObject = {
// 	_firstName: 'jane',
// 	_lastName: 'doe',

// 	get firstName() {
// 		return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
// 	},

// 	set firstName(value) {
// 		this._firstName = value;
// 	},
// 	get lastName() {
// 		return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
// 	},

// 	set lastName(value) {
// 		this._lastName = value;
// 	},

// 	get fullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// const person2 = Object.create(PersonObject);
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.fullName);
