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

function Rectangle(name, width, hight) {
	(this.name = name),
		(this.width = width),
		(this.hight = hight),
		(this.area = function () {
			return this.hight * this.width;
		});
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 30, 20);
const rect3 = new Rectangle('Rectangle 3', 40, 20);

// console.log(rect1.name, rect2.width, rect3.area());

rect1.color = 'red';
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

Object.entries(rect1).forEach(([key, value]) => {
	if (typeof value !== 'function') {
		console.log(`${key} - ${value}`);
	}
});
