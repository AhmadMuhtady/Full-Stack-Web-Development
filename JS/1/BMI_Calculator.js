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

function calBmi(weight, hight) {
	var weight = prompt('What is your weight in kg?');
	var hight = prompt('what is your hight?');
	var bmi = weight / Math.pow(hight, 2);
	var bmi = Math.round(bmi);
	if (bmi < 18.5) {
		return 'Your BMI is ' + bmi + ', so you are underweight.';
	} else if (bmi <= 18.5 && bmi < 24.9) {
		return 'Your BMI is ' + bmi + ', so you have a normal weight.';
	} else {
		return 'Your BMI is ' + bmi + ', so you are overweight.';
	}
}

calBmi();

if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			return 'Leap year.';
		} else {
			return 'Not leap year.';
		}
	} else {
		return 'Leap year.';
	}
} else {
	return 'Not leap year.';
}

function leapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return alert(year + ' is a leap year!');
	} else return alert(year + ' is NOT a  leap year!');
}

var year = parseInt(prompt('please enter a year'));
leapYear(year);

var guestList = ['ahmad', 'mohammad', 'omar', 'ali'];
// var name = prompt("please enter your name!");

// if (guestList.includes(name)){
//     console.log(alert("Welcome, Please come in!"));
// }else{
//     console.log(alert("Please Leave!"));
// }

function guestLista() {
	if (guestList.includes(name)) {
		return alert('Welcome, Please come in!');
	} else {
		return alert('Please Leave!');
	}
}

var name = prompt('please enter your name!');
guestLista(name);

var numbers = [];
for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FIZZZBUZZZZ');
		numbers.push('FIZZZBUZZZZ');
	} else if (i % 3 == 0) {
		console.log('FIZZZ');
		numbers.push('FIZZZ');
	} else if (i % 5 == 0) {
		console.log('BUZZZZ');
		numbers.push('BUZZZZ');
	} else {
		console.log(i);
		numbers.push(i);
	}
}

console.log(numbers);

function fizBuzGame(max) {
	var numbers = [];
	for (let i = 1; i <= max; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			numbers.push('FIZZZBUZZZZ');
		} else if (i % 3 == 0) {
			numbers.push('FIZZZ');
		} else if (i % 5 == 0) {
			numbers.push('BUZZZZ');
		} else {
			numbers.push(i);
		}
	}
	return numbers;
}

var reachNumber = prompt('what number you want to reach');
console.log(fizBuzGame(reachNumber));

function whosPaying() {
	var dinnerList = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];
	var howsPayin = dinnerList[Math.floor(Math.random() * dinnerList.length)];
	return howsPayin + ' is paying for dinner this time';
}

whosPaying();

var dinnerList = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];

function whosPaying(list) {
	var payer = list[Math.floor(Math.random() * list.length)];
	return payer + ' is paying for dinner this time.';
}

console.log(whosPaying(dinnerList));
