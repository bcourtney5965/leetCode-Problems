// i: input - two strings
// o: ouput - boolean
// c: constraints - can assum only lower case letters

// * notes to Zack or myself

// Instructions
// Given two strings s and t, write a function to determine 
// if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// PSEUDO CODE
// instantiate function
  // declare length vars for s and t
  // declare sObj and tObj
  // determine length of s
  // determine length of t
  // if length of s not equal to length of t
    // return false
  // split s into array
  // split t into array
  // loop over s
    // for each element if it's not in sObj
      // make it and set to 0
      // else
        // increment it




// CODE
var isAnagram = function(s, t) {
    var sLength, tLength;
    var sArr = s.split('');
    var tArr = s.split('');
    var sObj = {}, tObj = {};
    sLength = s.length;
    tLength = t.length;
    if (sLength !== tLength) {
      return false;
    }

    


};