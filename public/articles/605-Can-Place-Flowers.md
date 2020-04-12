## Problem
Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.  
Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

## Example
* Input: flowerbed = \[1,0,0,0,1\], n = 1
Output: True (\[1,0,X,0,1\])
* Input: flowerbed = \[1,0,0,0,1\], n = 2
Output: False

## Note
* The input array won't violate no-adjacent-flowers rule.
* The input array size is in the range of \[1, 20000\].
* n is a non-negative integer which won't exceed the input array size.

## Solution

```
/*
 * check every three position to find available place
 * drawback: modify original input
 * time: O(n), space: O(1)
 */
public boolean canPlaceFlowers(int[] flowerbed, int n) {
    int ptr = 0, len = flowerbed.length;
    while(ptr < len && n > 0) {
        boolean isLeftValid = ptr == 0 || flowerbed[ptr - 1] == 0;
        boolean isRightValid = ptr == len - 1 || flowerbed[ptr + 1] == 0;
        if(flowerbed[ptr] == 0 && isLeftValid && isRightValid) {
            n--;
            flowerbed[ptr] = 1;
        }
        ptr++;
    }
    return n == 0;
}
```

```
/*
 * check every three position to find available place without modifying the input
 * time: O(n), space: O(1)
 */
public boolean canPlaceFlowers(int[] flowerbed, int n) {
    int len = flowerbed.length;
    int pre = 0, next = len < 2 ? 0 : flowerbed[1];
    for(int i = 0; i < len && n > 0; i++) {
        if(flowerbed[i] == 0 && pre == 0 && next == 0) {
            n--;
            pre = 1;
        }else {
            pre = flowerbed[i];
        }
        next = i >= len - 2 ? 0 : flowerbed[i + 2];
    }
    return n == 0;
}
```