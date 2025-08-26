const assert = require('assert');
const arrayChunking = require('./ArrayChunking');

describe('Array Chunking', () => {
	it('should create a chunk of specific size', () => {
		assert.deepEqual(arrayChunking([1, 2, 3, 4], 2), [
			[1, 2],
			[3, 4],
		]);
		assert.deepEqual(arrayChunking([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
	});
});
