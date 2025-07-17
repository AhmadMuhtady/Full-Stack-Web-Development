// function createPost({ title, body }) {
// 	fetch('https://jsonplaceholder.typicode.com/posts', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			title,
// 			body,
// 		}),
// 		headers: {
// 			'content-type': 'application/json',
// 			token: 'abc123',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// }

// createPost({ title: 'My Post', body: 'This is my Post' });

// fetch await\
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'john', age: 20 });
	}, 1000);
});

// promise.then((data) => console.log(data));

// async function getPromise() {
// 	const res = await promise;
// 	console.log(res);
// }

// getPromise();

// async function getUser() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const data = await res.json();

// 	console.log(data);
// }

// getUser();

// const getPosts = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await res.json();
// 	console.log(data);
// };
// getPosts();

// try {
// 	console.log(x);
// } catch (error) {
// 	console.log('Error: ' + error);
// }

// const double = (number) => {
// 	if (isNaN(number)) {
// 		throw new Error(number + ' is Not a Number');
// 	}
// 	return number * 2;
// };

// try {
// 	const y = double('e');
// 	console.log(y);
// } catch (error) {
// 	console.log(error);
// }

const getUser = async () => {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getUser();
