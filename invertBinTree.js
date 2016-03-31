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
    
};


var BinarySearchTree = function(value) {
  var output = {};
  output.value = value;
  output.left = undefined;
  output.right = undefined;
  extend(output, methods);

  return output;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var methods = {

  'insert': function(item) {
    var innerClosure = function(next) {
      if (item < next.value) {
        if (!next.left) {
          next.left = BinarySearchTree(item);
        }
        if (next.left.value) {
          innerClosure(next.left);
        }
      }
      if (item > next.value) {
        if (!next.right) {
          next.right = BinarySearchTree(item);
        }
        if (next.right.value) {
          innerClosure(next.right);
        }

      }
    };
    innerClosure(this);
  },

  'contains': function(target) {
    var returnVal;
    var finder = function(node) {
      if (node.value === target) {
        returnVal = true;
      }
      if (target > node.value && node.right) {
        finder(node.right);
      }
      if (target < node.value && node.left) {
        finder(node.left);
      }
    };
    finder(this);
    returnVal = returnVal || false;
    return returnVal;
  },

  'depthFirstLog': function(callback) {
    var execute = function(node) {
      callback(node.value);
      if (node.left) {
        execute(node.left);
      }
      if (node.right) {
        execute(node.right);
      }
    };
    execute(this);
  }
};


var myTree = BinarySearchTree(4)
myTree.insert(7);
myTree.insert(2)
myTree.insert(1);
// console.log(myTree);

var invertTree = function(root) {
	var rootNode = root;
	var solver = function(node) {
		// if no braches
		if ((node.left === undefined) && (node.right === undefined)) {
			// return
			return;
		}
		// else
		else {
			// 	switch branches
			var temp = node.left
			node.left = node.right;
			node.right = temp;
			// 	if left is defined solver(left)
			if (node.left !== undefined) {
				solver(node.left);
			}
			// 	if.right if defined solver(right)
			if (node.right !== undefined) {
				solver(node.right);
			}
		}
	};
	solver(root);
	return rootNode;
}
console.log(invertTree(myTree));

// console.log(myTree);




