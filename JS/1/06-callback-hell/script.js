// function getDate(endpoint, cb) {
// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', endpoint);

// 	xhr.onreadystatechange = function () {
// 		if (this.readyState === 4 && this.status === 200) {
// 			cb(JSON.parse(this.responseText));
// 		}
// 	};

// 	setTimeout(() => {
// 		xhr.send();
// 	}, Math.floor(Math.random() * 3000) + 1000);
// }

// getDate('./movies.json', (data) => {
// 	console.log(data);
// 	getDate('./actors.json', (data) => {
// 		console.log(data);
// 		getDate('./directors.json', (data) => {
// 			console.log(data);
// 		});
// 	});
// });

// to create a promise
// const promise = new Promise((resolve, reject) => {
// 	// do something async after time is out

// 	setTimeout(() => {
// 		console.log('Async task complete');
// 		resolve();
// 	}, 1000);
// });

// promise.then(() => {
// 	console.log('promise consumed...');
// });

// const getUser = new Promise((resolve, reject) => {
// 	// do something async after time is out

// 	setTimeout(() => {
// 		let error = false;

// 		if (!error) {
// 			resolve({ name: 'john', age: 30 });
// 		} else {
// 			reject('Error: something went wrong');
// 		}
// 	}, 1000);
// });

// getUser
// 	.then((user) => console.log(user))
// 	.catch((error) => console.log(error))
// 	.finally(() => console.log('the promise has been resolved or rejected'));

// console.log('hello from gs');
