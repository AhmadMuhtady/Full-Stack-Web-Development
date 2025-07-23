const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
});
audio.addEventListener('timeupdate', () => {
	if (audio.currentTime.toFixed(1) < 60) {
		currentTime.innerHTML = `${audio.currentTime.toFixed(1)} seconds`;
	} else {
		currentTime.innerHTML = `${audio.currentTime.toFixed(1) / 60} minutes`;
	}
});

volume.addEventListener('change', () => {
	audio.volume = volume.value;
});
