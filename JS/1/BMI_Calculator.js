function calBmi(weight, hight) {
	var weight = prompt('What is your weight in kg?');
	var hight = prompt('what is your hight?');
	var bmi = weight / Math.pow(hight, 2);
	return bmi;
}

console.log(calBmi());
