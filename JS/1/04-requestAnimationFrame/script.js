const img = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {
	if (start === undefined) {
		start = timestamp;
	}

	const elapsed = timestamp - start;

	if (elapsed > 4000) {
		done = true;
	}

	if (done) {
		return;
	}
	img.style.transform = `translateX(${elapsed / 10}px) rotate(${
		elapsed / 10
	}deg)`;
	requestAnimationFrame(step);
}

requestAnimationFrame(step);
