// const rectangle = {
// 	name: 'rectangle 1',
// 	width: 20,
// 	hight: 10,
// 	area() {
// 		return this.hight * this.width;
// 	},
// };

// console.log(rectangle.area());

// Constructor Functions

// function Rectangle(name, width, hight) {
// 	(this.name = name),
// 		(this.width = width),
// 		(this.hight = hight),
// 		(this.area = function () {
// 			return this.hight * this.width;
// 		});
// }

// const rect1 = new Rectangle('rectangle 1', 10, 10);
// const rect3 = new Rectangle('rectangle 3', 20, 10);
// const rect2 = new Rectangle('rectangle 2', 30, 10);
// console.log(rect1);
// console.log(rect1.area());
// console.log(rect3.area());
// console.log(rect2.area());

// console.log(rect1.constructor);
// console.log(rect2 instanceof Rectangle);

// const strList = 'hello';
// const strObj = new String('hello');

// console.log(strList, typeof strList);
// console.log(strObj, typeof strObj);

// // boxing
// console.log(strList.toUpperCase());
// console.log(strList[0]);

// // unboxing
// console.log(typeof strObj.valueOf());

// console.log(strList instanceof String);
// console.log(strObj instanceof String);

// function Rectangle(name, width, hight) {
// 	(this.name = name),
// 		(this.width = width),
// 		(this.hight = hight),
// 		(this.area = function () {
// 			return this.hight * this.width;
// 		});
// }

// const rect1 = new Rectangle('Rectangle 1', 20, 20);
// const rect2 = new Rectangle('Rectangle 2', 30, 20);
// const rect3 = new Rectangle('Rectangle 3', 40, 20);

// console.log(rect1.name, rect2.width, rect3.area());

//
// console.log(rect1);
// rect2.perimeter = () => 2 * (rect2.width + rect2.hight);
// console.log(rect2.perimeter());
// console.log(rect2);
// delete rect2.perimeter;
// console.log(rect2);

// console.log(rect1.hasOwnProperty('color'));
// console.log(rect2.hasOwnProperty('color'));

// Get keys
// console.log(Object.keys(rect1));
// // Get values
// console.log(Object.values(rect1));
// GET entries
// console.log(Object.entries(rect1));
// for ([key, value] of Object.entries(rect1)) {
// 	console.log(`${key} - ${value}`);
// }

// Object.entries(rect1).forEach(([key, value]) => {
// 	if (typeof value !== 'function') {
// 		console.log(`${key} - ${value}`);
// 	}
// });

function Rectangle(name, width, hight) {
	this.name = name;
	this.width = width;
	this.hight = hight;
}

// Rectangle.prototype.area = function () {
// 	return this.hight * this.width;
// };
// Rectangle.prototype.perimeter = function () {
// 	return 2 * (this.hight + this.width);
// };
// Rectangle.prototype.isSquare = function () {
// 	return this.hight === this.width;
// };
// Rectangle.prototype.newName = function (newName) {
// 	return (this.name = newName);
// };

// const rect1 = new Rectangle('Rectangle 1', 20, 20);
// const rect2 = new Rectangle('Rectangle 2', 30, 20);
// const rect3 = new Rectangle('Rectangle 3', 40, 20);
// console.log(rect1.area());
// console.log(rect1.perimeter());
// console.log(rect1.isSquare());
// console.log(rect1.newName('rectangle-1'));
// console.log(rect1);

// const rectanglePrototype = {
// 	area: function () {
// 		return this.width * this.hight;
// 	},
// 	perimeter: function () {
// 		return 2 * (this.width + this.hight);
// 	},
// 	isSquare: function () {
// 		return this.hight === this.width;
// 	},
// };

// function createRectangle(width, hight) {
// 	return Object.create(rectanglePrototype, {
// 		hight: {
// 			value: hight,
// 		},
// 		width: {
// 			value: width,
// 		},
// 	});
// }

// const rec1 = createRectangle(10, 20);
// console.log(rec1);

function Shape(name) {
	this.name = name;
}

Shape.prototype.logName = function () {
	console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, hight, width) {
	Shape.call(this, name);
	this.hight = hight;
	this.width = width;
}
// inherits shape prototype
Rectangle.prototype = Object.create(Shape.prototype);
Circle.prototype = Object.create(Shape.prototype);

function Circle(name, radius) {
	Shape.call(this, name);
	this.radius = radius;
}

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;
const rec1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rec1);
const cir1 = new Circle('Circle 1', 30);
console.log(cir1);

rec1.logName();
cir1.logName();
