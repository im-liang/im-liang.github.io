## Problem
Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result 
of a sequence of push and pop operations on an initially empty stack.

## Example
* Input: pushed = \[1,2,3,4,5\], popped = \[4,5,3,2,1\]  
Output: true
* Input: pushed = \[1,2,3,4,5\], popped = \[4,3,5,1,2\]  
Output: false

## Note
* 0 <= pushed.length == popped.length <= 1000
* 0 <= pushed\[i\], popped\[i\] < 1000
* pushed is a permutation of popped
* pushed and popped have distinct values

## Solution
### Simulating Stack
Creating a stack to simulate push and pop operations. Assume the operations are valid, meaning each element has to be 
pushed to the stack first in order to be popped. So pushing the element to the stack and continually pop element when 
 matching with the element in popped array.
 
```
/*
 * time: O(n), space: O(n)
 */
public boolean validateStackSequences(int[] pushed, int[] popped) {
    Stack<Integer> stack = new Stack<>();
    int pushIndex = 0, popIndex = 0;
    for(int i : pushed) {
        stack.push(i);
        while(!stack.empty() && popped[popIndex] == stack.peek()) {
            popIndex++;
            stack.pop();
        }
    }
    return stack.empty();
}
```

### Two pointer
```
/*
 * time: O(n), space: O(1)
 */
public boolean validateStackSequences(int[] pushed, int[] popped) {
    int i = 0, j = 0;
    for (int x : pushed) {
        pushed[i++] = x;
        while (i > 0 && pushed[i - 1] == popped[j]) {
            --i; ++j;
        }
    }
    return i == 0;
}
```