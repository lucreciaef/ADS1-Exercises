function RecursiveBinarySearch(array, item, L, R) {
	if (L > R) {
		return false;
	}
	let M = Math.floor((L+R)/2);
	if (array[M] === item) {
		return M;
	}
	else if (array[M] > item) {
		R = M-1;
	}
	else {
		L = M+1;
	}
	return RecursiveBinarySearch(array, item, L, R);
}

function BinarySearch(array, item) {
	let R = array.length-1;
	let L = 0;
	return RecursiveBinarySearch(array, item, L, R);
}

var arr = [1, 4, 7, 10, 22, 23, 23, 36, 46, 48, 49, 50, 55]
console.log(arr)
console.log(BinarySearch(arr, 4));