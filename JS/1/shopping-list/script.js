// const createNewItem = (item) => {
// 	const li = document.createElement('li');
// 	const text = document.createTextNode(item);
// 	const listItem = document.querySelector('#item-list');
// 	const button = newButton('remove-item btn-link text-red');

// 	li.appendChild(text);
// 	li.appendChild(button);
// 	listItem.appendChild(li);
// };

// const newButton = (classes) => {
// 	const button = document.createElement('button');
// 	button.className = classes;
// 	const icon = newIcon('fa-solid fa-xmark');
// 	button.appendChild(icon);
// 	return button;
// };

// const newIcon = (classes) => {
// 	const icon = document.createElement('i');
// 	icon.className = classes;
// 	return icon;
// };

// createNewItem('Cheese');

// insert adjacent element
// const insertAdjacentElement = () => {
// 	const filter = document.querySelector('.filter');
// 	const h1 = document.createElement('h1');
// 	h1.textContent = 'insertAdjacentElement';
// 	filter.insertAdjacentElement('beforebegin', h1);
// 	// filter.insertAdjacentElement('beforeend', h1);
// };
// insertAdjacentElement();

// insert adjacent text
// const insertAdjacentText = () => {
// 	const item = document.querySelector('li');

// 	item.insertAdjacentText('beforebegin', 'beforebegin'); // outside before
// 	item.insertAdjacentText('afterbegin', 'afterbegin'); //inside before
// 	item.insertAdjacentText('beforeend', 'beforeend'); // inside after
// 	item.insertAdjacentText('afterend', 'afterend'); // outside after
// };
// insertAdjacentText();

// insert adjacent html
// const insertAdjacentHTML = () => {
// 	const clearBtn = document.querySelector('#clear');

// 	clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
// };
// insertAdjacentHTML();

// insert beforeItem
// const insertBeforeItem = () => {
// 	const parent = document.querySelector('ul');

// 	const li = document.createElement('li');
// 	li.textContent = 'insert before Item';

// 	const thirdChild = document.querySelector('li:nth-child(3)');

// 	parent.insertBefore(li, thirdChild);
// };
// insertBeforeItem();

// const insertAfter = (newEl, existingEl) => {
// 	const second = existingEl.nextSibling;
// 	existingEl.parentElement.insertBefore(newEl, second);
// };
// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// const firstItem = document.querySelector('li:first-child');

// insertAfter(li, firstItem);

// replaceWith first item:
// const replaceFirstItem = () => {
// 	const firstItem = document.querySelector('li:first-child');
// 	const li = document.createElement('li');
// 	li.textContent = 'Replaced First';
// 	firstItem.replaceWith(li);
// };
// replaceFirstItem();
// replace Second item:
// const replaceSecond = () => {
// 	const secondItem = document.querySelector('li:nth-child(2)');
// 	secondItem.outerHTML = '<li>Replace Second</li>';
// };
// replaceSecond();

// replace all:
// const replaceAll = () => {
// 	const liAll = document.querySelectorAll('li');

// 	liAll.forEach((item, index) =>
// 		index === 1
// 			? (item.innerHTML = 'Replaced Second')
// 			: (item.outerHTML = '<li>Replaced All</li>')
// 	);
// };

// // {
// // 	if (index === 1) {
// // 		item.outerHTML = '<li>replaced second</li>';
// // 	} else {
// // 		item.innerHTML = 'replace All';
// // 	}
// // });
// replaceAll();

// replace Child

// const replaceChildHeading = () => {
// 	const parent = document.querySelector('header');
// 	const h1 = document.querySelector('header h1');
// 	const h2 = document.createElement('h2');
// 	h2.id = 'app-title';
// 	h2.textContent = 'new h2(shopping List)';
// 	parent.replaceChild(h2, h1);
// };
// replaceChildHeading();

// removing element

// const removeClearBtn = () => {
// 	document.querySelector('#clear').remove();
// };
// removeClearBtn();
// const removeFirstItem = () => {
// 	const parent = document.querySelector('ul');
// 	const li = document.querySelector('li:first-child');
// 	parent.removeChild(li);
// };
// removeFirstItem();

// const removeItem = (itemNumber) => {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelector(`li:nth-child(${itemNumber})`);
// 	ul.removeChild(li);
// };
// removeItem(1);

// const removeSecond = (itemNumber) => {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelectorAll('li')[itemNumber - 1];
// 	ul.removeChild(li);
// };
// removeSecond(1);

// const removeItem3 = (itemNumber) =>
// 	document.querySelectorAll('li')[itemNumber - 1].remove();

// removeItem3(1);

// const clearBtn = document.querySelector('#clear');
// const ul = document.querySelector('ul');
// const li = ul.querySelectorAll('li');
// clearBtn.addEventListener('click', () => {
// 	// first way for simple stuff
// 	// ul.innerHTML = '';
// 	// second way
// 	// li.forEach((item) => item.remove());
// 	// third way
// 	while (ul.firstChild) {
// 		ul.removeChild(ul.firstChild);
// 	}
// });

// const logo = document.querySelector('img');

// // functions
// const onclick = () => console.log('click event');
// const onDoubleClick = () => {
// 	logo.style.width = '300px';
// 	logo.style.height = '300px';
// 	document.querySelector('body').style.backgroundColor = 'red';
// };
// const onRightClick = () => console.log('right Click');
// const onMouseDown = () => console.log('mouseDownEvent');
// const onMouseUp = () => console.log('mouse UpEvent');
// const onMouseWheel = () => console.log('Mouse wheel');
// const onMouseOver = () => console.log(' Hover OVER');
// const onMouseOut = () => console.log(' Hover out');
// const onDragStart = () => console.log('hold');
// const onDragEnd = () => console.log('drop');
// const OnDrag = () => console.log('drag');

// // event listener
// logo.addEventListener('click', onclick);
// // dbl for double click
// logo.addEventListener('dblclick', onDoubleClick);
// // right click
// logo.addEventListener('contextmenu', onRightClick);
// // mouse down
// logo.addEventListener('mousedown', onMouseDown);
// // mouse UP
// logo.addEventListener('mouseup', onMouseUp);
// // scroll
// logo.addEventListener('wheel', onMouseWheel);
// // hover
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// // drag
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('dragend', onDragEnd);
// logo.addEventListener('drag', OnDrag);

// const logo = document.querySelector('img');
// const body = document.querySelector('body');

// logo.addEventListener('click', (e) => {
// target
// console.log(e.target);
// console.log(e.currentTarget); // event attach too
// e.target.style.backgroundColor = 'black';
// type
// console.log(e.type); //type of the event 'click'
// console.log(e.timeStamp / 1000);
// console.log(e.clientX); // to the windows
// console.log(e.clientY); // to the windows
// console.log(e.offsetX); //to the element
// console.log(e.offsetY); //to the element
// console.log(e.pageX); // to the page
// console.log(e.pageY); // to the page
// console.log(e.screenX);
// console.log(e.screenY);
// });

// body.addEventListener('click', (e) => {
// 	console.log(e.target);
// 	console.log(e.currentTarget); // event attach to the body
// });

// const targetLink = document.querySelector('a');
// const defaultWay = targetLink.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('linked is clicked');
// });
// const logo = document.querySelector('img');
// logo.addEventListener('drag', (e) => {
// 	document.querySelector('h1').innerText = ` X: ${e.clientX}, Y: ${e.clientY}`;
// });

// const checkBox = document.querySelector('.dark');
// const body = document.querySelector('body');
// const darkMode = checkBox.addEventListener('click', () => {
// 	body.classList.toggle('dark');
// });

// const inputItem = document.querySelector('#item-input');
// const onKeyPress = (e) => {
// 	console.log('keypress'); // press the key, only character
// };
// const onKeyUp = (e) => {
// 	console.log('key UP'); // release of key
// };

// const onkeyDown = (e) => {
// console.log('key down'); // keep pressing everything on keyboard

// key
// console.log(e.key);
// document.querySelector('h1').innerText = e.key;
// key code
// gives you a code from topical.code -- table of all keycodes
// if (e.keyCode === 13) {
// 	// 13 is keyCode for enter
// 	alert('you pressed enter');
// }
// // code
// if (e.code === 'Digit1') {
// 	//Capital D
// 	console.log('you pressed 1');
// } else if (e.code === 'KeyF') {
// 	// Capital K and F
// 	console.log('you pressed F');

// 	// Repeat True or False \
// 	if (e.repeat) {
// 		console.log(`you are holding down ${e.key}`);
// 	}

// 	console.log('Shift:' + e.shiftKey);
// 	console.log('Control:' + e.ctrKey);
// 	console.log('Alt:' + e.altKey);
// }
// } else {
// 	console.log(e.code);/// KeyS or KeyD
// }
// };

// inputItem.addEventListener('keypress', onKeyPress);
// inputItem.addEventListener('keypress', onKeyPress);
// inputItem.addEventListener('keydown', onkeyDown);
// inputItem.addEventListener('keypress', onKeyPress);

// inputItem.addEventListener('keypress', (e) => {
// 	console.log('key is pressed');
// });

// const button = document.querySelector('.btn');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');
// button.addEventListener('click', (e) => {
// 	alert('button is clicked');
// 	e.stopPropagation();// stop bubbling btn => div => form => body
// });

// div.addEventListener('click', () => {
// 	alert('div was clicked');
// });

// form.addEventListener('click', () => {
// 	alert('form was clicked');
// });

// document.body.addEventListener('click', () => {
// 	alert('body was clicked');
// });

// event delegation // multiple btns
// const listItem = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// listItem.forEach((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.target.remove();
// 	});
// });

// list.addEventListener('click', (e) => {
// 	if (e.target.tagName === 'LI') {
// 		e.target.remove();
// 	}
// });

// window.addEventListener('resize', () => {
// 	document.querySelector(
// 		'h1'
// 	).innerText = `Resize to ${window.innerWidth} x ${window.innerHeight}`;
// });

// window.addEventListener('scroll', () => {
// 	console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

// 	if (window.scrollY > 700) {
// 		document.body.style.backgroundColor = 'black';
// 		document.body.style.color = 'white';
// 	} else {
// 		document.body.style.backgroundColor = 'white';
// 		document.body.style.color = 'black';
// 	}
// });

window.addEventListener('focus', () => {
	document.querySelectorAll('li').forEach((item) => {
		item.style.color = 'blue';
	});
});

window.addEventListener('blur', () => {
	document.querySelectorAll('li').forEach((item) => {
		item.style.color = 'black';
	});
});
