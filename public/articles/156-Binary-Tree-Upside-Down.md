## Problem
Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

## Example
* Input: \[1,2,3,4,5\]
Output: \[4,5,2,#,#,3,1\]

## Note
* Tree can be empty

## Solution
```
/*
 * time: O(n), space: O(h)
 */
public TreeNode upsideDownBinaryTree(TreeNode root) {
    if(root == null || root.left == null) {
        return root;
    }
    
    TreeNode newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;
    return newRoot;
}
```

```
/*
 * time: O(n), space: O(1)
 */
public TreeNode upsideDownBinaryTree(TreeNode root) {
    TreeNode curr = root;
    TreeNode next = null;
    TreeNode temp = null;
    TreeNode prev = null;
    
    while(curr != null) {
        next = curr.left;
        
        curr.left = temp;
        temp = curr.right;
        curr.right = prev;
        
        prev = curr;
        curr = next;
    }
    return prev;
}  
```