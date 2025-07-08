// setTimeout(changeText, 2000);

// console.log('hello from global scope');

function changeText() {
	document.querySelector('h1').textContent = 'hello from call back';
}

const timerID = setTimeout(changeText, 3000);
const btn = document.getElementById('cancel');
btn.addEventListener('click', () => {
	console.log(timerID);
	clearTimeout(timerID);
	document.querySelector('h1').textContent = 'SET TIME OUT AND CLEAR TIME OUT';
	console.log('timer Cancelled');
});
