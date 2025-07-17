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
