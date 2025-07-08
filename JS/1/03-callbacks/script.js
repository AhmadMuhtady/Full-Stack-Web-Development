// const btn = document.querySelector('button');

// function toggle() {
// 	console.log('callback ran');
// 	btn.classList.toggle('danger');
// }

// btn.addEventListener('click', toggle);

const posts = [
	{ title: 'Post One', body: 'This is Post One' },
	{ title: 'Post Two', body: 'This is Post Two' },
];

function createPost(post, cb) {
	setTimeout(() => {
		posts.push(post);
		cb();
	}, 2000);
}

function getPosts() {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div');
			div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
			document.querySelector('#posts').appendChild(div);
		});
	}, 1000);
}

createPost({ title: 'post Three', body: 'This is post Three' }, getPosts);
