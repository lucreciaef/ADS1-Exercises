function swap(array,index1,index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}

function bubbleSort(array) {
	var n = array.length;
	for (var i = 0; i <= n - 2; i++) {
		var count = 0;
		for (var j = 0; j <= n - 2; j++) {
			if (array[j+1] < array[j]) {
				swap(array, j, j + 1);
				count++;
			}
		}
		if (count === 0) {
			break;
		}
	}
	return array;
}

let testArray = [7,6,4,3,10,45,2,1,12];
console.log(bubbleSort(testArray));