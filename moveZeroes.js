// i: array of nums
// o: no output - simply 
// c: no return, modify nums in-place instead

// * notes to Zack or myself

// Instructions
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// PSEUDO CODE
// Initialize function with array parameter
	// iterate over array
		// if element is a zero
			// remove the element (consider splice)
			// add a 0 onto the end
	// end iteration


// CODE
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // Initialize function with array parameter
var moveZeroes = function(nums) {
	// iterate over array
	nums.forEach(function(value, index, array) {
		// if element is a zero
		if (value === 0) {
			// splice out the element
			nums.splice(index, 1);
			// push a 0 onto the end
			array.push(0);
		}
	// end iteration
	});
};