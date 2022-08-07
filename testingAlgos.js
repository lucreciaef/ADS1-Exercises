function swap(array,index1,index2) {
	var x = array[index2];
	array[index2] = array[index1];
	array[index1] = x;
	return array;
}
var arr = [3, 2, 2, 1];
swap(arr,1,2);
swap(arr,2,3);
console.log(arr);