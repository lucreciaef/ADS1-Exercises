function generateRandomArray(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

function swap(array,index1,index2) {
	let temp = array[index2];
	array[index2] = array[index1];
	array[index1] = temp;
	return array;
}

function bubbleSort(array) {
	for (let i = 0; i <= array.length - 2; i++) {
	let count = 0;
		for (let j = 0; j <= array.length - 2; j++) {
			if (array[j+1] < array[j]) {
				swap(array,j,j+1);
				count++;
			}
		}
		if (count == 0) {
			break;
		}
	}
	return array;
}

let newArray = generateRandomArray(8);
console.log(bubbleSort(newArray));