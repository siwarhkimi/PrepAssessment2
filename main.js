// use the following helper functions in your solution
function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function filter(array, predicate) {
	var acc = [];
	each(array, function (element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}

function map(array, func) {
	var acc = [];
	each(array, function (element, i) {
		acc.push(func(element, i));
	});
	return acc;
}


// Remember to relax :)




//=======================================================================
/*                                  Q1                                 */
//=======================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function 
//and save them in one array called computers!
// Note: please write one or two lines here describing your solution.
//makeComputer function takes as an input 5 features of a computer and return an object with those features
function makeComputer(manufacturer, processorType, operatingSystem, color, price) {
	return {
		manufacturer: manufacturer,
		processorType: processorType,
		operatingSystem: operatingSystem,
		color: color,
		price: price
	};
}
var computer1 = makeComputer('Toshiba', 'intel core i5', 'windows 10 professional 64 Bit', 'Black', 1790 + '$');
var computer2 = makeComputer('DELL', 'intel core i3', 'windows 7, 32 Bit', 'White', 790 + '$');
var computer = [computer1, computer2];

// write function displayComputer that can be used to display one computer.
// one way to display a computer 
function displayComputer(computer) {
	return computer.manufacturer + ",\n" + computer.processorType + ",\n" + computer.operatingSystem + ",\n" + computer.color + ",\n" + computer.price + ".";
}



//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function that takes an array of strings as a input,and returns an array 
//of all of those strings, but transformed to upper case. 
//You can use toUpperCase method to convert a string to upper case.
//solve it using the most appropriate helper functions(each,map,filter).
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
// The function uppercaseAll takes as an input an array of strings and returns a new copy of that array but with all letters in capital 

function uppercaseAll(arrayOfStrings) {
	return map(arrayOfStrings, function (element) {
		return element.toUpperCase();
	})
}


//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
	{
		country: 'China',
		population: 1409517397,
	},
	{
		country: 'India',
		population: 1339180127,
	},
	{
		country: 'USA',
		population: 324459463,
	},
	{
		country: 'Indonesia',
		population: 263991379,
	}
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.
// We have a condition here so we need to use filter to "filter" countries that have  a population higher than 500 million.

function highestPopulation(arrayOfObjects) {

	return filter(arrayOfObjects, function (element) {
		return element.population >= 5 * Math.pow(10, 8);
	})
}



//=============================================================================
/*                              Q4                                           */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//Note: solve it using the most appropriate helper functions(each,map,filter)
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.
// the map function allows us to modify the array's elements that's why it is useful in this case 
function halveAll(numbers) {
	return map(numbers, (x => x / 2));
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.
// The defined map function doesn't work on objects so either I change it or I use each instead (that's what I did) or simply to use Object.values(obj) but that's not the purpose of the task

function values(obj) {
	var array = [];

	each(obj, function (value) {
		array.push(value);
	})
	return array;
}


							//Good Luck :))


