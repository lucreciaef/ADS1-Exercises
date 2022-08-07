function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

function swap(array, index1, index2) {
	var saveElement = array[index1];
	array[index1] = array[index2];
	array[index2] = saveElement;
	return array;
}

function bubbleSort(array) {
	var n = array.length;
	for (var i = 1; i < n; i++) {
		var count = 0;
		for (var j = 0; j < n - 1; j++) {
			if (array[j + 1] < array[j]) {
				count++;
				swap(array, j, j + 1);
			}
		}
		if (count == 0) {
			break;
		}
	}
	return array;
}

function search(array, x, left, right) {
	if (left > right) {
		return false;
	}
	let M = Math.floor((left+right)/2);
	if (array[M] === x) {
		return true;
	}
	else if (array[M] > x) {
		right = M-1;
	}
	else {
		left = M+1;
	}
	return search(array, x, left, right);
}

function binarySearch(array, x) {
	let R = array.length-1;
	let L = 0;
	return search(array, x, L, R);
}

// let newArray = genRandomArray(10);
// let sortedArray = bubbleSort(newArray);
// console.log(newArray);
// console.log(sortedArray);
// console.log(binarySearch(sortedArray, 5));

// Do not modify the code below this point--------------------------------
module.exports = {
	genRandomArray: genRandomArray,
	swap: swap,
	bubbleSort: bubbleSort,
	search: search,
	binarySearch: binarySearch
}