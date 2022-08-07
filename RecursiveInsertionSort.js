function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

// This implements the swap function
function swap(array, index1, index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

// // This implements the shift function
// function shift(array, index1, index2) {
// 	if (index1 < index2) {
// 		return array;
// 	}
// 	var x = array[index1];
// 	for (var i = index1; i >= index2 + 1; i--) {
// 		array[i] = array[i - 1];
// 	}
// 	array[index2] = x;
// 	return array;
// }

function recursiveInsertionSort(array, r) {
	if (r < 1) {
		return array;
	}
	recursiveInsertionSort(array, r-1)
	let j = r;
	while ((array[j - 1] > array[r]) && (j > 1)) {
		swap(array, j, j-1);
		j--;
	}
	return array;
}

function insertionSort(array) {
	let n = array.length;
	return recursiveInsertionSort(array, n-1);
}

let arr = genRandomArray(12);
console.log(arr)
console.log(insertionSort(arr));
