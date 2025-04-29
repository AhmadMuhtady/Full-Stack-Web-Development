function calBmi(weight, hight) {
	var weight = prompt('What is your weight in kg?');
	var hight = prompt('what is your hight?');
	var bmi = weight / (hight * hight);
	return bmi;
}

console.log(calBmi());
