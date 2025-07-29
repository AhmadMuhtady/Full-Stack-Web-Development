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

class App {
	constructor() {
		this.serverName = 'localhost';
		const btn = document.getElementById('btn');
		btn.addEventListener('click', this.getServerName.bind(this));
	}

	getServerName() {
		console.log(this.serverName);
	}
}

const app = new App();
