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
// initialize function
  // declare sLength, tLength vars
  // declare sArr & tArr arrays with .split('')
  // declare sObj, tObj
  // if sLength % tLength not equal
  // loop over one array
    // delare a variable and set current elem to it
    // if elem isn't already in the object
      // make it/set to 0
    // increment element
  // loop over second array
    // delare a variable and set current elem to it
    // if elem isn't already in the object
      // make it/set to 0
    // increment element
  // loop of obj
    // if both objects don't share the same key and the smae corresponding value
      // return false
  // loop of obj
    // if both objects don't share the same key and the smae corresponding value
      // return false
  //return true



// CODE
var isAnagram = function(s, t) {
  var sLength = s.length, tLength = t.length;
  var sArr = s.split('');
  var tArr = t.split('');
  var sObj = {}, tObj = {};
  if (sLength !== tLength) {
    return false;
  }
  for (var i = 0; i < sArr.length; i++) {
    var letter = sArr[i];
    if (!sObj[letter]) {
      sObj[letter] = 0;
    }
    sObj[letter]++;
  }
  for (var j = 0; j < tArr.length; j++) {
    var letter = tArr[j];
    if (!tObj[letter]) {
      tObj[letter] = 0;
    }
    tObj[letter]++;
  }
  for (var key in tObj) {
    if (tObj[key] !== sObj[key]) {
      return false;
    }
  }
  for (var key in sObj) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }
  return true;
};

