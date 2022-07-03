function genDay() {
	//first generate a month
	let month = 1 + Math.round(11 * Math.random());
	let day;

	if (((month % 2 === 1) && (month <= 7)) || ((month % 2 === 0) && (month >= 8))) {
		day = 1 + Math.round(30 * Math.random());
	} else if (month === 2) {
		day = 1 + Math.round(27 * Math.random());
	} else {
		day = 1 + Math.round(29 * Math.random());
	}
	return [day, month];
}

function genBirthdays(n) {
	let birthdays = [];
	let nst = n.toString();
	for (let i = 0; i < n; i++) {
		let str = i.toString();
		let lim = nst.length - str.length;
		for (let j = 1; j <= lim; j++) {
			str = "0" + str;
		}
		birthdays[2 * i] = str;
		birthdays[1 + (2 * i)] = genDay();
	}
	return birthdays;
}

// search for unique birthdays in the array -
function find(birthdays) {
	let n = birthdays.length;
	let uniqueBirthdays = [];

	for (let i = 1; i < n; i+=2) {
		let unique = true;

		for (let j = 1; j < n; j+=2) {
			if(i === j) continue
			if(birthdays[i][0] === birthdays[j][0] && birthdays[i][1] === birthdays[j][1]){
				unique = false;
			}
		}
		if(unique){
			uniqueBirthdays.push(birthdays[i-1].toString());
		}
	}
	return uniqueBirthdays;
}

///////////////////////////////////////////

//this function swaps membership numbers and birthdays given two indices
function swap(array,index1,index2) {
	let x1 = array[index2];
	let x2 = array[index2 - 1];
	array[index2] = array[index1];
	array[index1] = x1;
	array[index2 - 1] = array[index1 - 1];
	array[index1 - 1] = x2;
	return array;
 }

function bubbleSort(array) {
	let n = array.length;
	for (let i = 0; i <= n-2; i++) {
		let count = 0;
		for (let j = 1; j <= n-3; j+=2) {
			if (array[j+2][1] < array[j][1]) {
				swap(array, j, j+2);
				count++;
			}
		}
		if (count === 0) {
			break;
		}
	}
	return array;
}

function bubbleSortDays(array) {
	let n = array.length;
	for (let i = 0; i <= n-2; i++) {
		let count = 0;
		for (let j = 1; j <= n-3; j+=2) {
			if ((array[j+2][1] === array[j][1]) && (array[j+2][0] < array[j][0])) {
				swap(array, j, j+2);
				count++;
			}
		}
		if (count === 0) {
			break;
		}
	}
	return array;
}

// sort then search for unique birthdays
function findSorted(birthdays) {
	let n = birthdays.length;
	let sortedMonthBirthdays = bubbleSort(birthdays);
	let sortedDaysAndMonthBirthdays = bubbleSortDays(sortedMonthBirthdays);
	let uniqueSortedBirthdays = [];

	for (let i = 1; i < n; i+=2) {
		let unique = true;

		for (let j = 1; j < n; j+=2) {
			if(i === j) continue
			if(sortedDaysAndMonthBirthdays[i][0] === sortedDaysAndMonthBirthdays[j][0] &&
				sortedDaysAndMonthBirthdays[i][1] === sortedDaysAndMonthBirthdays[j][1]) {
				unique = false;
			}
		}
		if(unique){
			uniqueSortedBirthdays.push(sortedDaysAndMonthBirthdays[i-1].toString())
		}
	}
	return uniqueSortedBirthdays;
}

///////////////////////////////////////////
//this creates an array for testing
//in this array the only unique birthday is held by member "1"
//var birthdays = [ "0", [22, 8], "1", [11, 4], "2", [16, 10], "3", [22, 8],"4", [16, 10]];
// //let birthdays = genBirthdays(10);
// console.log(find(birthdays));
// console.log(findSorted(birthdays));
//in both cases the array printed to the console should be ["1"]

//if you are feeling confident you can uncomment the following lines of code to test a larger example
var birthdays = genBirthdays(1589);
console.log(birthdays);
console.log(find(birthdays));
console.log(findSorted(birthdays));

// Do not modify the code below this point--------------------------------
module.exports = {
	genDay: genDay,
	genBirthdays: genBirthdays,
	find: find,
	swap: swap,
	bubbleSort: bubbleSort,
	bubbleSortDays: bubbleSortDays,
	findSorted: findSorted
}
