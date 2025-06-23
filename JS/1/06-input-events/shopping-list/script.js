// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkBox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// const onInput = (e) => {
// 	heading.textContent = e.target.value;
// };

// const onChecked = (e) => {
// 	const isChecked = e.target.checked;
// 	heading.textContent = isChecked ? 'checked' : 'not checked';
// };

// const onFocus = () => {
// 	console.log('input on fucus');
// 	itemInput.style.outlineStyle = 'solid';
// 	itemInput.style.outlineWidth = '1px';
// 	itemInput.style.outlineColor = 'blue';
// };

// const onBlur = () => {
// 	console.log('input is not focus');
// 	itemInput.style.outlineStyle = 'none';
// };
// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
// checkBox.addEventListener('input', onChecked);
// itemInput.addEventListener('focus', onFocus);
// itemInput.addEventListener('blur', onBlur);
const form = document.getElementById('item-form');

// const onSubmit = (e) => {
// 	e.preventDefault();

// 	const item = document.getElementById('item-input').value;
// 	const priority = document.getElementById('priority-input').value;

// 	item === '' || priority === '0'
// 		? alert('please fill in all field')
// 		: console.log(item, priority);
// };

const onSubmit2 = (e) => {
	e.preventDefault();
	const formData = new FormData(form);

	const item = formData.get('item');
	const priority = formData.get('priority');
	console.log(item, priority);
};

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
