// i: input - array
// o: ouput - array
// c: constraints - linear time

// * notes to Zack or myself

// Instructions
// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].



// PSEUDO CODE

// initialize function with nums parameter
// initialize  result array to []
// initialize lMult & rMult to 1
// iterate backwards through array
//   set curr elem in result array to rMult
//   rMult = rmult * curr elem in nums array

// iterate forward through array
//   set curr elem in result to curr elem in result * lMult
//   set lMult to lMult * curr elem in nums array

// return result


// CODE

var productExceptSelf = function(nums) {
  var result = [];
  var lMult = 1, rMult = 1;

  for (var i = nums.length - 1; i >= 0; i--) {
    result[i] = rMult;
    rMult *= nums[i];
  }

  for (var j = 0; j < nums.length; j++) {
    result[j] *= lMult;
    lMult *= nums[j];
  }

  return result;
};