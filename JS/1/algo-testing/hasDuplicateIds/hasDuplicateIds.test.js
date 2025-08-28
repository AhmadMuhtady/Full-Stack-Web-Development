const hasDuplicateIds = require('./hasDuplicateIds');

let root;
beforeEach(() => {
	// create mock elements
	console.log('Before each ran..');
	root = document.createElement('div');
	const child1 = document.createElement('div');
	const child2 = document.createElement('div');

	root.appendChild(child1);
	root.appendChild(child2);
});

afterEach(() => {
	console.log('after each ran..');
	root = null;
});

describe('DOM tree has duplicate IDs', () => {
	it('should be a function', () => {
		expect(typeof hasDuplicateIds).toEqual('function');
	});

	it('should return a boolean', () => {
		expect(typeof hasDuplicateIds()).toEqual('boolean');
	});

	it('should return false if no root', () => {
		expect(hasDuplicateIds()).toBeFalsy();
	});

	it('should return true if there are duplicate IDS', () => {
		root.id = 'root';
		root.children[0].id = 'child';
		root.children[1].id = 'child';

		const result = hasDuplicateIds(root);
		expect(result).toEqual(true);
	});

	it('should return false if there are no duplicate IDS', () => {
		const root = document.createElement('div');
		const child1 = document.createElement('div');
		const child2 = document.createElement('div');

		root.appendChild(child1);
		root.appendChild(child2);

		root.id = 'root';
		root.children[0].id = 'child1';
		root.children[1].id = 'child2';

		const result = hasDuplicateIds(root);
		expect(result).toEqual(false);
	});
});
