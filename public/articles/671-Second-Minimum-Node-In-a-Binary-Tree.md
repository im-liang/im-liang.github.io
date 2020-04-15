## Problem
Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.  
Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.  
If no such second minimum value exists, output -1 instead.

## Example
* Input:  
   2  
  / \  
 2   2  
Output: -1  
* Input:  
     2  
    / \  
   2   5  
      / \  
     5   7  
Output: 5 (The smallest value is 2, the second smallest value is 5.)

## Note
* Tree can be empty

## Solution
```
/*
 * time: O(n), space: O(h)
 */
public int findSecondMinimumValue(TreeNode root) {
    if(root.left == null) return -1;
    int left = root.left.val == root.val ? findSecondMinimumValue(root.left) : root.left.val;
    int right = root.right.val == root.val ? findSecondMinimumValue(root.right) : root.right.val;
    return left == -1 || right == -1 ? Math.max(left, right) : Math.min(left, right);
}
```