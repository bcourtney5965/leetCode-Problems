// i: non-negative integer
// o: non-negative single digit integer
// c: all non-negative

// How could we make this O(c)?

// PSEUDO CODE
// initialize solver function (num)
	// initialize solver closure
		// initialize total var to 0
		// convert number to string
		// convert string to array
		// loop through the array
		// 	total up the elems
		// return the total 
	// while the number is more than 9
	// 	call the closure function on it and reset num to it
	// retur the num


// CODE
// initialize function
var addDigits = function(num) {
	var solver = function(n) {
		var total = 0;
		var n = n.toString().split('');
		for (var i = 0; i < n.length; i++) {
			total += +n[i];
		}
		return total;
	}
	while(num > 9) {
		num = solver(num)
	}
	return num;
};

console.log(addDigits(98));