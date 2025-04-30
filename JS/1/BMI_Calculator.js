function calBmi(weight, hight) {
	var weight = prompt('What is your weight in kg?');
	var hight = prompt('what is your hight?');
	var bmi = weight / Math.pow(hight, 2);
	return Math.round(bmi);
}

console.log(calBmi());

function diceCal() {
	var n = Math.floor(Math.random() * 6 + 1);
	console.log(n);
}

diceCal();

function loveCal() {
	prompt('Whats your name?');
	prompt('Whats your lovre name?');
	var n = Math.floor(Math.random() * 100 + 1);
	if (n > 70) {
		alert(
			'Your love calculator is ' + n + '% You love each other like ALOT :p'
		);
	} else {
		alert('Your love calculator is ' + n + '%');
	}
}

function loveCal() {
	prompt('Whats your name?');
	prompt('Whats your lovre name?');
	var n = Math.floor(Math.random() * 100 + 1);
	if (n >= 70) {
		alert(
			'Your love calculator is ' + n + '% You love each other like ALOT :p'
		);
	} else if (n > 30 && n < 70) {
		alert('Your love calculator is ' + n + '% You can make it better :p');
	} else {
		alert('Your love calculator is ' + n + '% your love is like oil and water');
	}
}

loveCal();
