for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
	document.body
		.querySelectorAll('.drum')
		[i].addEventListener('click', function () {
			var tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
		});
}
