const rectangle = {
	name: 'rectangle 1',
	width: 20,
	hight: 10,
	area() {
		return this.hight * this.width;
	},
};

console.log(rectangle.area());
