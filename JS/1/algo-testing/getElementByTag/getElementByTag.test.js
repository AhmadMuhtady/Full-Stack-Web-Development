const getElementByTag = require('./getElementByTag');

describe('get element by tag', () => {
	it('should be a function', () => {
		expect(typeof getElementByTag).toEqual('function');
	});

	it('should return an array', () => {
		expect(Array.isArray(getElementByTag())).toEqual(true);
	});

	it('should return an empty array if no root is passed in', () => {
		expect(getElementByTag()).toEqual([]);
	});

	it('should return only root element if no tagName is passed in', () => {
		const root = document.createElement('div');
		expect(getElementByTag(root)).toEqual([root]);
	});

	it('should correct the only elements', () => {
		const root = document.createElement('div');

		// add some child elements
		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const span = document.createElement('span');

		root.appendChild(p1);
		root.appendChild(span);
		span.appendChild(p2);
		const result = getElementByTag(root, 'p');

		expect(result).toEqual([p1, p2]);
	});
});
