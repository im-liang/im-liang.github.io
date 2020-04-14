## Problem
Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

## Example
* Input: \[1,2,3,4,5\]
Output: \[\[4,5,3\],\[2\],\[1\]\]

## Note
* Tree can be empty

## Solution
```
/*
 * using height to find leaves
 * time: O(n), space: O(h)
 */
public List<List<Integer>> findLeaves(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    height(result, root);
    return result;
}
private int height(List<List<Integer>> result, TreeNode node) {
    if(node == null) return -1;
    int height = Math.max(height(result, node.left), height(result, node.right)) + 1;
    if(height + 1 > result.size()) result.add(new ArrayList<>());
    result.get(height).add(node.val);
    return height;
}
```