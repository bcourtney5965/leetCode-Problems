// i: a node object
// o: technically nothing, a side effect
// c: no return, modify inplace

// * notes to Zack - appears Leet code isn't including distinct 'head' and 'tail' objects, my code will therefore reflect 
// what we were taught in HR

// Instructions
// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should 
// become 1 -> 2 -> 4 after calling your function.

// PSEUDO CODE - 
// instantiate function with paramter (value of node)
  // if node's value is null - do nothing
    // addresses situation where the last node is given as arg as well as serving as a base case
    // 1.) its not a doubly-linked list so I have no reference to previous node for resetting tail
    // 2.) Directions said not to delete the tail (caveat: not sure is this refers to the last node or actual 'tail')
  // if the next node's value is null
    // set tail equal to current node
    // set current node's 'next' value to null
  // if the next node's value is NOT null
    // set value of node equal to value of the next node
    // declare tempNode variable & set equal to this.next
    // set 'next' equal to the value of the next node
    // recursively invoke tempNode fucntion on value


// CODE
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */


// instantiate function with paramter (node object) 
var deleteNode = function(node) {
  //if node's value is null - do nothing
  if (node.value) {
    // addresses situation where the last node is given as arg as well as serving as a base case
    // 1.) its not a doubly-linked list so I have no reference to previous node for resetting tail
    // 2.) Directions said not to delete the tail (caveat: not sure is this refers to the last node or actual 'tail')
  }
  // if the next node's value is null
  if (node.next.val === null) {
    // set tail equal to current node
    tail.next = node;
    // set current node's 'next' value to null
    node.next = null;
  }
  // if the next node's value is NOT null
  if (node.next.val !== null) {
    // set value of node equal to value of the next node
    node.value = node.next.value;
    // declare tempNode variable & set equal to this.next
    var nodeTemp = node.next
    // set 'next' equal to the value of the next node
    node.next = node.next.value
    // recursively invoke tempNode fucntion on value
    deleteNode(nodeTemp.value);;
  }
};
