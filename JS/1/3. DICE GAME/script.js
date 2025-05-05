const dice1 = document.querySelector('#dice1-img');
const dice2 = document.querySelector('#dice2-img');

function testLuck() {
	var n = Math.floor(Math.random() * 6 + 1);
	return n;
}

function rollDice() {
	const n = testLuck();
	const m = testLuck();
	dice1.src = './img/images/dice' + n + '.png';
	dice2.src = './img/images/dice' + m + '.png';
}

console.log(rollDice());

function whoWins() {
	rollDice();
	if (n > m) {
		return '1 wins';
	} else {
		return '2 wins';
	}
}

document.body.querySelector('button').addEventListener('click', () => {
	console.log(rollDice());
});
