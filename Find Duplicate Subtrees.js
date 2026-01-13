// 652. Find Duplicate Subtrees
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return all duplicate subtrees.

// For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with the same node values.

 

// Example 1:


// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]
// Example 2:


// Input: root = [2,1,1]
// Output: [[1]]
// Example 3:


// Input: root = [2,2,2,3,null,3,null]
// Output: [[2,3],[3]]
 

// Constraints:

// The number of the nodes in the tree will be in the range [1, 5000]
// -200 <= Node.val <= 200

var findDuplicateSubtrees = function(root) {
    const map = new Map();
    const result = [];

    function traverse(node) {
        if (!node) return '#';
        const serial = `${node.val},${traverse(node.left)},${traverse(node.right)}`;
        map.set(serial, (map.get(serial) || 0) + 1);
        if (map.get(serial) === 2) result.push(node);
        return serial;
    }

    traverse(root);
    return result;
};