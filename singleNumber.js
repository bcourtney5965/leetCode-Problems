// i: array of integers
// o: an integer (though possibly an element)
// c: linear run-time

// *directions could be interpreted two ways, on my first
// attempt I choose to interpret it as needing to return a number
// if this doesn't pass, on secod attempt I will work to return
// an array possition

// Pseudo Code
// Initialize function
  // Initialize seenTwice object
  // loop through all elements in array
    // initialize local "elem" to keep things clean
    // if element is already in object
      // increment corresponding property's value
    // else 
      // place element in object
      // increment value

  // loop through object
    // if value < 1
      // return value

// Code

var singleNumber = function(nums) {
  var seenTwice = {};
  for (var i = 0; i< nums.length; i++) {
    var elem = nums[i];
    if (seenTwice[elem]) {
      seenTwice[elem]++;
    } else {
      seenTwice[elem] = 0;
      seenTwice[elem]++;
    }
  }
  for (var key in seenTwice) {
    if (seenTwice[key] < 2)

    return typeof key === "string";
  }
};

console.log(singleNumber([1, 2, 3, 1, 2, 4, 4]));