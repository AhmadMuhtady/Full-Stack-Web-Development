// const intervalID = setInterval(myCallBack, 1000);

// function myCallBack() {
// 	console.log(Date.now());
// }

let intervalID;

function startChange() {
	if (!intervalID) {
		intervalID = setInterval(changeRandomColor, 1000);
	}
}

// function changeColor() {
// 	if (document.body.style.backgroundColor != 'black') {
// 		document.body.style.backgroundColor = 'black';
// 		document.body.style.color = 'white';
// 	} else {
// 		document.body.style.backgroundColor = 'white';
// 		document.body.style.color = 'color';
// 	}
// }
function changeRandomColor() {
	const randomCOlor = Math.floor(Math.random() * 16777215).toString(16);
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = `#${randomCOlor}`;
	document.body.style.color = `#${randomColor}`;
}
function stopChange() {
	clearInterval(intervalID);
}
document.getElementById('stop').addEventListener('click', stopChange);
document.getElementById('start').addEventListener('click', startChange);
