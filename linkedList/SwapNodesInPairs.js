// 24. Swap Nodes in Pairs
// Solved
// Medium
// Topics
// Companies
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

var swapPairs = function(head) {
    if(!head || !head.next){return head}
    let nextSet;
    const swapNodes = (node1,node2) => {
       if(!node2 && !node1){
           return null
       } 
       if(!node1){
           return node2
       }
       if(!node2){
           return node1
       }
       nextSet = node2?.next
       node2.next = node1
       node1.next = swapNodes(nextSet, nextSet?.next)
       return node2
    }
    return swapNodes(head, head.next)
};