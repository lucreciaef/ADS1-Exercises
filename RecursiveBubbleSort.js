//WORKS

function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

function swap(array,index1,index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

function bubbleSort(array) {
	var n = array.length;
	return recursiveBubbleSort(array, n);
}

function recursiveBubbleSort(array, length) {
	if (length <= 1) {
		return array
	}
	for (let i = 0; i < length; i++) {
		if (array[i+1] < array[i]) {
			swap(array, i, i+1)
		}
	}
	recursiveBubbleSort(array, length-1);
	return array;
}

let testArray = genRandomArray(12);
console.log(testArray);
console.log(bubbleSort(testArray));