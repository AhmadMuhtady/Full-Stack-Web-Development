// Method 1
// window.addEventListener('keydown', (e) => {
// 	const insert = document.querySelector('.insert');
// 	insert.innerHTML = `

//   <h3 class="key">e.key</h3>
// 			<div class="outPut">${e.key === ' ' ? 'Space' : e.key}</div>
// 			<h3 class="key">e.keyCode</h3>
// 			<div class="outPut">${e.keyCode}</div>
// 			<h3 class="key">e.Code</h3>
// 			<div class="outPut">${e.code}</div>`;
// });

// Method 2
const showKeyCodes = (e) => {
	const insert = document.querySelector('.insert');

	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code,
	};

	for (let key in keyCodes) {
		const h3 = document.createElement('h3');
		h3.className = 'key';
		const div = document.createElement('div');
		div.className = 'outPut';

		const keyText = document.createTextNode(key);
		const valueText = document.createTextNode(keyCodes[key]);

		h3.appendChild(keyText);
		div.appendChild(valueText);
		insert.appendChild(h3);
		insert.appendChild(div);
	}
};

window.addEventListener('keydown', showKeyCodes);
