function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject('Something Went Wrong');
				}
			}
		};
		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

getData('./movies.json')
	.then((movies) => {
		console.log(movies);
		return getData('./actors.json');
	})
	.then((actors) => {
		console.log(actors);
		return getData('./directors.json');
	})
	.then((directors) => {
		console.log(directors);
	})
	.catch((error) => {
		console.log(error);
	});
