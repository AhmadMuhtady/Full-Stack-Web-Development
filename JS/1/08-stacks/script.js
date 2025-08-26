// class Stack {
// 	constructor() {
// 		this._items = []; // where we keep our stack items
// 		this._count = 0; // keeps track of how many items are in the stack
// 	}

// 	push(item) {
// 		// this._items.push(item);
// 		this._items[this._count] = item; // put the new item at the top (current count index)
// 		this._count++; // increase count by 1
// 	}

// 	pop() {
// 		// this._items.pop();
// 		if (this.isEmpty()) {
// 			return 'Underflow'; // can't remove from empty stack
// 		}

// 		const item = this._items[this._count - 1]; // get the last item
// 		this._count--; // decrease count

// 		this._items.length = this._count;
// 		return item;
// 	}

// 	peek() {
// 		if (this.isEmpty()) {
// 			return 'No item';
// 		}

// 		return this._items[this._count - 1];
// 	}

// 	isEmpty() {
// 		return this._count === 0;
// 	}

// 	length() {
// 		return this._count;
// 	}

// 	clear() {
// 		this._items = [];
// 		this._count = 0;
// 	}
// }

// const stack = new Stack();
// stack.push('item 1');
// stack.push('item 2');
// stack.push('item 3');
// stack.push('item 4');
// stack.push('item 5');
// stack.push('item 6');

// stack.pop();

// console.log(`Top Item: ${stack.peek()}`);
// console.log(stack.length());
// console.log(stack);
// stack.clear();
// console.log(stack);

//

// Queues

// class Queue {
// 	constructor() {
// 		this._items = [];
// 		this._count = 0; // next empty slot at the back
// 		this._front = 0; // index of the first item
// 	}

// 	// Check if the queue is empty
// 	isEmpty() {
// 		return this.length() === 0;
// 	}

// 	// Add item to the back
// 	enqueues(item) {
// 		this._items[this._count] = item;
// 		this._count++;
// 	}

// 	// Remove item from the front
// 	dequeues() {
// 		if (this.isEmpty()) return undefined;

// 		// 1. Get the item at the "front"
// 		const item = this._items[this._front];

// 		// 2. Explicitly mark that slot empty
// 		this._items[this._front] = undefined; // helps garbage collector free memory sooner

// 		// 3. Move the front pointer forward
// 		this._front++;

// 		// 4. If we've consumed everything, reset
// 		if (this._front === this._count) {
// 			this.clear();
// 		}

// 		// 5. Return dequeued value
// 		return item;
// 	}

// 	// Peek at the front item without removing it
// 	peek() {
// 		if (this.isEmpty()) return 'No items in Queue';
// 		return this._items[this._front];
// 	}

// 	// Number of items in the queue
// 	length() {
// 		return this._count - this._front;
// 	}

// 	// Reset the queue
// 	clear() {
// 		this._items = [];
// 		this._count = 0;
// 		this._front = 0;
// 	}
// }

// // ✅ Example usage
// const q = new Queue();
// q.enqueues('item 1');
// q.enqueues('item 2');
// q.enqueues('item 3');
// q.enqueues('item 4');

// q.dequeues(); // "item 1"
// console.log(q.peek()); // "item 2"
// console.log(q.length()); // 3
// console.log(q);

// q.clear();
// console.log(q); // empty queue

// linked List cheep way// hard coded
// const node1 = {
// 	value: 100,
// };
// const node2 = {
// 	value: 200,
// };
// const node3 = {
// 	value: 200,
// };

// node1.next = node2;
// node2.next = node3;
// node3.next = null;

// console.log(node1, node2, node3);

// Linked LIST

// class Node {
// 	constructor(value) {
// 		this._value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this._head = null; // first node
// 		this._length = 0; // count of nodes
// 	}

// 	// insert first Node(head)

// 	insertFirst(value) {
// 		const newNode = new Node(value); // create new node
// 		newNode.next = this._head; // new node points to "current head"
// 		this._head = newNode; // head moves to new node
// 		this._length++;
// 	}
// 	// insert last Node(tail)

// 	insertLast(value) {
// 		const newNode = new Node(value);
// 		let current = this._head; // start at head

// 		while (current.next) {
// 			// move to the last node
// 			current = current.next;
// 		}

// 		current.next = newNode; //append new node
// 		this._length++;
// 	}
// 	// insert anywhere Node(index)
// 	insetAt(value, index) {
// 		if (index < 0 || index > this._length) {
// 			return;
// 		}

// 		if (index === 0) {
// 			this.insertFirst(value);
// 			return;
// 		}

// 		if (index === this._length) {
// 			this.insertLast(value);
// 			return;
// 		}

// 		const newNode = new Node(value);
// 		let current, previous;
// 		current = this._head;
// 		let count = 0;

// 		while (count < index) {
// 			previous = current;
// 			current = current.next;
// 			count++;
// 		}
// 		newNode.next = current; // new node points to the one currently at that index
// 		previous.next = newNode; // previous now points to new node
// 		this._length++;
// 	}
// 	// get index Node
// 	getAt(index) {
// 		let current = this._head;
// 		let count = 0;
// 		while (current) {
// 			if (count === index) {
// 				console.log(current._value);
// 			}
// 			current = current.next;
// 			count++;
// 		}
// 		return null;
// 	}
// 	// remove index
// 	removeAt(index) {
// 		if (index > this._length) {
// 			return;
// 		}
// 		let current = this._head;
// 		let previous;
// 		let count = 0;

// 		if (index === 0) {
// 			this._head = current.next;
// 		} else {
// 			while (count < index) {
// 				count++;
// 				previous = current;
// 				current = current.next;
// 			}
// 			previous.next = current.next;
// 		}

// 		this._length--;
// 	}

// 	// reversed Data

// 	reverseList() {
// 		let previous = null;
// 		let current = this._head;
// 		let next = null;

// 		while (current) {
// 			next = current.next; // save next node
// 			current.next = previous; // reverse pointer
// 			previous = current; // move previous forward
// 			current = next; // move current forward
// 		}

// 		this._head = previous; // new head
// 	}

// 	// print list data
// 	printListData() {
// 		let current = this._head;
// 		let list = '';
// 		if (this._length === 0) {
// 			list += `head => null`;
// 		}
// 		while (current) {
// 			list += `=> ${current._value} `;
// 			current = current.next;
// 		}
// 		console.log(list);
// 	}
// 	// clear list
// 	clearListData() {
// 		this._head = null;
// 		this._length = 0;
// 	}
// }

// const list = new LinkedList();
// list.insertFirst(100);
// list.insertFirst(200);
// list.insertFirst(300);
// list.insertLast(50);
// list.insertLast(10);
// list.insetAt(500, 2);
// list.insetAt(500, 4);

// list.printListData();
// list.reverseList();
// list.printListData();
// list.getAt(2);
