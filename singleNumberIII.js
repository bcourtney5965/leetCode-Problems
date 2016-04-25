// i: input - array
// o: ouput - array
// c: constraints - linear time complexity

// * notes to Zack or myself

// Instructions
// Given an array of numbers nums, in which exactly two elements appear only once and all the 
// other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only 
// constant space complexity?
  



// PSEUDO CODE

// initilize function param: array
  // inititialize numbers object & output array
  // loop over array
    // if an element exists in numbers object increment the value
    // else 
      // add each element as a key and set value to 1;
  // close loop
  // loop through object
    // if value equals 2
      // push key to array
  // close loop
  // return output array
// close function

console.log("Hello")

// CODE

// initilize function param: array
var singleNumberFinder = function(arr) {
  // inititialize numbers object & output array
  var numbers = {}, output = [];
  // loop over array
  for (var i = 0; i < arr.length; i++) {
    // if an element exists in numbers object
    if (numbers[arr[i]]) {
      // increment the value
      numbers[arr[i]]++;
    // else  
    } else {
      // add each element as a key and set value to 1;
      numbers[arr[i]] = 1;
    }
  // close loop
  }
  // loop through object
  for (var key in numbers) {
    // if value equals 2
    if (numbers[key] === 1) {
      // push key to array
      output.push(key);
    }
  // close loop
  }
  // return output array
  return output;
// close function
};