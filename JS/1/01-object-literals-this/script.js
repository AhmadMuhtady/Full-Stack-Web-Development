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

function Rectangle(name, width, hight) {
	(this.name = name),
		(this.width = width),
		(this.hight = hight),
		(this.area = function () {
			return this.hight * this.width;
		});
}

const rect1 = new Rectangle('rectangle 1', 10, 10);
const rect3 = new Rectangle('rectangle 3', 20, 10);
const rect2 = new Rectangle('rectangle 2', 30, 10);
console.log(rect1);
console.log(rect1.area());
console.log(rect3.area());
console.log(rect2.area());

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);
