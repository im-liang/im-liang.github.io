## Problem
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the
smallest possible.

## Example
* Input: num = "1432219", k = 3  
Output: "1219"
* Input: num = "10200", k = 1  
Output: "200"
* Input: num = "12", k = 2  
Output: "0"
* Input: num = "120", k = 2  
Output: "0"

## Note
* The length of num is less than 10002 and will be ≥ k.
* The given num does not contain any leading zero.

## Thought Process
The leftmost distinct digits that determine the superior of the two numbers. To make the new number as small as possible,
we need to keep the smaller digits at the front.  
Hence, when we iterate through the characters, we compare each digit 
with its left neighbor, if left neighbor is larger than current digit, remove left neighbor, and do this process until 
k == 0 or left neighbor <= current.  
As for the clean up, we need to take care of leading zero, empty new number and remaining k.  
For remaining k, since the new number is in non-decreasing order, we can just remove last k digits to keep it as small
as possible.

## Solution
```
/*
 * time: O(n), space: O(n)
 */
public String removeKdigits(String num, int k) {
    StringBuilder builder = new StringBuilder();
    for(char c : num.toCharArray()) {
        while(builder.length() > 0 && k > 0 && builder.charAt(builder.length() - 1) > c) {
            builder.deleteCharAt(builder.length() - 1);
            k--;
        }
        builder.append(c);
    }
    int start = 0;
    while(start < builder.length() && builder.charAt(start) == '0') {
        start++;
    }
    return start == builder.length() || k == builder.length() ? "0" : builder.substring(start, builder.length() - k);
}
```