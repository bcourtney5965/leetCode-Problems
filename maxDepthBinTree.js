// i: input - binary tree
// o: ouput - integer
// c: constraints

/**
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
	var maxDepth = 0

	if (!node) {
		return maxDepth;
	}
	var solver = function(node, depth) {
		if (maxDepth < depth) {
			maxDepth = depth;
		}
		if (node.right) {
			solver(node.right, depth + 1);
		}
		if (node.left) {
			solver(node.left, depth + 1);
		}
	}
	solver(root, 0);
	return maxDepth;
}

console.log(maxDepth(treeLeft));
