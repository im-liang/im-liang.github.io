## Problem
Given a function rand7 which generates a uniform random integer in the range 1 to 7, 
write a function rand10 which generates a uniform random integer in the range 1 to 10.

## Example
* Input: 1  
Output: \[7\]

## Note
* rand7 is predefined
* Each testcase has one argument: n, the number of times that rand10 is called.

## Solution
### Rejection Sampling 
call rand7() twice to create a 7*7 candidate pool, and assign elements 1-10 by order and repeat.

Take one of rand7() as row we picked and the other as col we picked , and row * 7 + col as the candidate we picked, 
if it's in the valid element pool, return; else do the process over again until we get a valid result.

![alt text](https://drive.google.com/uc?export=view&id=18G5GVxFJl1hV5E9_aih1hJ3crrptNLKw "pool grid")
```
/*
 * time: O(1) average, O(∞) worst case, space O(1)
 */
public int rand10() {
    int row = rand7() - 1, col = rand7() - 1;
    while(row * 7 + col >= 40) {
        row = rand7() - 1;
        col = rand7() - 1;
    }
    return (row * 7 + col) % 10 + 1;
}
```

### get rand10 from rand2
Define five buckets: \[1-2\], \[3-4\], \[5-6\], \[7-8\], \[9-10\]. Call rand7() until you get a number between 1 and 5. 
Once you have such a number, you have picked one of the five buckets and must now decide which of the two numbers 
wins - the odd or the even number. To solve that, you call rand7() until you get a number between 1 and 6.
```
/*
 * time: O(1) average, O(∞) worst case, space O(1)
 */
public int rand10() {
    int i,j;
    while( (i = rand7()) > 6);  // P(i is even) = P(i is odd) = 0.5
    while( (j = rand7()) > 5);  // P(j==1) = P(j==2) = P(j==3) = P(j==4) = P(j==5) = 0.2
    return (i&1) ? j : j+5;
}
```