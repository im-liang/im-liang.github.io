## Problem
Numbers can be regarded as product of its factors. Write a function that takes an integer n and return all possible combinations of its factors.

## Example
* Input: 1
Output: \[\]
* Input: 12
Output:  
\[  
          \[2, 6\],  
          \[2, 2, 3\],  
          \[3, 4\]  
        \]  

## Note
* You may assume that n is always positive.
* Factors should be greater than 1 and less than n.

## Solution
```
/*
 * time: O(sqrt(n)^log(n)), space: O(log n)
 */
public List<List<Integer>> getFactors(int n) {
    List<List<Integer>> result = new ArrayList<>();
    helper(2, n, new ArrayList<>(), result);
    return result;
}
private void helper(int start, int end, List<Integer> candidate, List<List<Integer>> result) {
    for(int i = start; i * i <= end; i++) {
        if(end % i == 0) {
            candidate.add(i);
            candidate.add(end / i);
            result.add(new ArrayList<>(candidate));
            candidate.remove(candidate.size() - 1);
            helper(i, end / i, candidate, result);
            candidate.remove(candidate.size() - 1);
        }
    }
}
```