// i: input
// o: ouput
// c: constraints

// * notes to Zack or myself

// PSEUDO CODE
// var invertTree = function(root) {
		// initialize temp variable
		// if there is both left & right branches
			// set temp to the left
			// set right equal to the left
			// set temp equal to the left
		// if only left is defined
			// set right equal to left
			// set left equal to null
		// if only right is defined
			// set left equal to right
			// set right equal to null
		// invoke invertTree on this.left
		// invoke invertTree on this.right
// };

// CODE

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
	var solver = function(node) {
		// if no braches
		if (node.left === null && node.right === null) {
			// return
			return;
		} else {
			// 	switch branches
			var temp = node.left
			node.left = node.right;
			node.right = temp;
			// 	if left is defined solver(left)
			if (node.left !== null) {
				solver(node.left);
			}
			// 	if.right if defined solver(right)
			if (node.right !== null) {
				solver(node.right);
			}
		}
	};
	solver(root);
	return root;
}
console.log(invertTree(myTree));

