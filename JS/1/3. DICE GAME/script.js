const dice1 = document.querySelector('#dice1-img');
const dice2 = document.querySelector('#dice2-img');
const winnerText = document.querySelector('#winner-text');

function testLuck() {
	var n = Math.floor(Math.random() * 6 + 1);
	return n;
}

function rollDice() {
	const n = testLuck();
	const m = testLuck();
	dice1.src = './img/images/dice' + n + '.png';
	dice2.src = './img/images/dice' + m + '.png';
	return [n, m];
}

console.log(rollDice());
document.body.querySelector('button').addEventListener('click', () => {
	console.log(rollDice());
});

function whoWins() {
	const [n, m] = rollDice();
	if (n > m) {
		return 'Player 1 wins!';
	} else if (m > n) {
		return 'Player 2 wins!';
	} else {
		return "It's a tie!";
	}
}

document.querySelector('button').addEventListener('click', () => {
	const result = whoWins();
	winnerText.textContent = result;
});
