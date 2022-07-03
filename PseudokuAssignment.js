//Constructor function
function Queue(row) {
	this.values = row;
	this.enqueue = function(value) {
		this.values.push(value);
	}
	this.dequeue = function () {
		return this.values[0].pop();
	}
	return this;
}

//-------------------------------------------------------------
//TASK 1: take a four-element vector called row as an input parameter and return a vector of 4 elements called puzzle
let row = [1,2,3,4];
function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
let p = getRandomArbitrary(0,4); //Returned value: min <= value < max.
console.log("p = "+p);

function makeVector(row) {
	let puzzle = []; //4 elements
	let length = row.length;
	for (let i = 0; i < length; i++) {
		puzzle.push(row);
	}
	return puzzle
}

//TASK 2: Cyclic permutation using queue logic, until the numbers in all rows satisfy conditions
//shift all values of the elements one place to the left (or the right)
// with the value at the end going to the other end.
function permuteVector(row, p) {
	if (p === 0) {
		return row;
	}
	let queue = new Queue(row);
	for (let i = 0; i < row.length; i++) {
		queue.enqueue(queue.dequeue());
	}
}

let testStartingVector = makeVector(row);
console.log(testStartingVector);
console.log(permuteVector(testStartingVector));