const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('currentTime');

play.addEventListener('click', () => {
	video.play();
});

pause.addEventListener('click', () => {
	video.pause();
});

stop.addEventListener('click', () => {
	video.pause();
	video.currentTime = 0;
});

video.addEventListener(
	'timeupdate',
	() => (currentTime.innerText = video.currentTime.toFixed(1))
);
