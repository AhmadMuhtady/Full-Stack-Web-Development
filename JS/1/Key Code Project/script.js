//method 1
// window.addEventListener('keydown', (e) => {
// 	const container = document.querySelector('.container');
// 	container.innerHTML = `
// <div class="input">
// 	<div class="keys">
// 		<h3>e.Key</h3>
// 		<h3>e.keyCode</h3>
// 		<h3>e.Code</h3>
// 	</div>
// 	<div class="output">
// 		<div class="value">${e.key === ' ' ? 'Space' : e.key}</div>
// 		<div class="value">${e.keyCode}</div>
// 		<div class="value">${e.code}</div>
// 	</div>
//   `;
// });

// Method 2
const onKeyPress = (e) => {
	const container = document.querySelector('.container');
	container.innerHTML = '';

	const input = document.createElement('div');
	input.className = 'input';

	const keys = document.createElement('div');
	keys.className = 'keys';

	const outPut = document.createElement('div');
	outPut.className = 'output';

	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code,
	};

	for (let key in keyCodes) {
		// Label
		const h3 = document.createElement('h3');
		h3.textContent = key;
		keys.appendChild(h3);

		// Value
		const value = document.createElement('div');
		value.className = 'value';
		value.textContent = keyCodes[key];
		outPut.appendChild(value);
	}

	input.appendChild(keys);
	input.appendChild(outPut);
	container.appendChild(input);
};

window.addEventListener('keydown', onKeyPress);
