// i: input - two objects (two binary trees)
// o: ouput - boolean
// c: constraints

// * notes to Zack or myself

// Instructions
// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and 
// the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
    
// };



// PSEUDO CODE
// initialize isSameTree function with two params- two objects (p, q)
  // initialize output variable to true
  // initialize treeTraverser function(pNode, qNode)
    // if p and q's values aren't equal
      // set output to false
          // left side
    // if p.left equals null and q.left doesn't equal null
      // set output to false
    // if p.left doesn't equal null and q.left does equal null
      // set output to false
  
          // right side
    // if p.right equals null and q.right doesn't equal null
      // set output to false
    // if p.right doesn't equal null and q.right does equal null
      // set output to false
  
          // ensuring recursion only happens on objects
    // if p.left and q.left both don't equal null
      // invoke treeTraverser(p.left, q.left);
    // if p.right and q.right both don't equal null
      // invoke treeTraverser(p.right, q.right);
  // close treeTraverser function
  }
  // invoke treeTraverser on (p, q)
  // return output
// close function 
}
  




// CODE
// PSEUDO CODE
// initialize isSameTree function with two params- two objects (p, q)
var isSameTree = function(p, q) {
  // initialize output variable to true
  var output = true; 
  // initialize treeTraverser function(pNode, qNode)
  var treeTraverser = function(pNode, qNode) {
    // if p and q's values aren't equal
    if (p.val !== q.val) {
      // set output to false
      output = false;
    }
    
          // left side
    // if p.left equals null and q.left doesn't equal null
    if (p.left === null && q.left !== null) {
      // set output to false
      output = false;
    }
    // if p.left doesn't equal null and q.left does equal null
    if (p.left !== null && q.left === null) {
      // set output to false
      output = false;
    }

          // right side
    if (p.right === null && q.right !== null) {
      // set output to false
      output = false;
    }
    // if p.right doesn't equal null and q.right does equal null
    if (p.right !== null && q.right === null) {
      // set output to false
      output = false;
    }
  
          // ensuring recursion only happens on objects
    // if p.left and q.left both don't equal null
    if (p.left !== null && q.left !== null) {
      // invoke treeTraverser(p.left, q.left);
      treeTraverser(p.left, q.left)
    }
    // if p.right and q.right both don't equal null
    if (p.right && q.right) {
      // invoke treeTraverser(p.right, q.right);
      treeTraverser(p.right, q.right);
    }
  // close treeTraverser function
  }
  // invoke treeTraverser on (p, q)
  treeTraverser(p, q)

  // return output
  return output;
// close function 
}