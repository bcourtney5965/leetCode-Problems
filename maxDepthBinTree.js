// i: input - binary tree
// o: ouput - integer
// c: constraints

// * notes to Zack or myself

// PSEUDO CODE
// var maxDepth = function(root) {
	// initialize depth = 0
	// initialize closure
		// increment depth
		// if no chilren
			// return depth
		// if children
			// invoke closure on curr node
	// invoke closure on root
	// return depth
// };


// CODE

/**
Write line by line pseudocode for each 
solution prior to starting with actual 
code

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxDepth = function(root) {
	var solver = function(node, depth) {
		depth++;
		// if has both left & right
		if ( (node.left !== null) && (node.right !== null) ) {
			// call solver on left & right
			solver(node.left);
			solver(node.right);
		// if has only left
	  } else if (node.left !== null) {
			// call on left
			solver(node.left);
		// if has only right
	  } else if (node.right !== null) {
			// call on right
			solver(node.right);
		// if it has neither
		} else if ( (node.left === null) && (node.right === null) ) {
			return depth;
		}

	}
	return solver(root, 0)
}







var bottomLeft = {
	val: 35,
	left: null,
	right: null
};

var treeLeft = {
	val: 40,
	left: bottomLeft,
	right: null
};

var treeRight = {
	val: 55,
	left: null,
	right: null
};

var treeTop = {
	val: 50,
	left: treeLeft,
	right: treeRight
};


console.log(maxDepth(treeLeft));














