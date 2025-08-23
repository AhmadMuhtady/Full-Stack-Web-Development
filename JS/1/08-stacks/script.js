class Stack {
	constructor() {
		this._items = []; // where we keep our stack items
		this._count = 0; // keeps track of how many items are in the stack
	}

	push(item) {
		// this._items.push(item);
		this._items[this._count] = item; // put the new item at the top (current count index)
		this._count++; // increase count by 1
	}

	pop() {
		// this._items.pop();
		if (this.isEmpty()) {
			return 'Underflow'; // can't remove from empty stack
		}

		const item = this._items[this._count - 1]; // get the last item
		this._count--; // decrease count

		this._items.length = this._count;
		return item;
	}

	peek() {
		if (this.isEmpty()) {
			return 'No item';
		}

		return this._items[this._count - 1];
	}

	isEmpty() {
		return this._count === 0;
	}

	length() {
		return this._count;
	}

	clear() {
		this._items = [];
		this._count = 0;
	}
}

const stack = new Stack();
stack.push('item 1');
stack.push('item 2');
stack.push('item 3');
stack.push('item 4');
stack.push('item 5');
stack.push('item 6');

stack.pop();

console.log(`Top Item: ${stack.peek()}`);
console.log(stack.length());
console.log(stack);
stack.clear();
console.log(stack);
