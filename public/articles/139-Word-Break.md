## Problem
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

## Example
* Input: s = "leetcode", wordDict = \["leet", "code"\]  
Output: true (Return true because "leetcode" can be segmented as "leet code".)

## Note
* The same word in the dictionary may be reused multiple times in the segmentation.
* You may assume the dictionary does not contain duplicate words.

## Solution
### Recursion with memoization
```
/*
 * time: O(n^2), space: O(n)
 */
public boolean wordBreak(String s, List<String> wordDict) {
    return word_Break(s, new HashSet(wordDict), 0, new Boolean[s.length()]);
}
public boolean word_Break(String s, Set<String> wordDict, int start, Boolean[] memo) {
    if (start == s.length()) {
        return true;
    }
    if (memo[start] != null) {
        return memo[start];
    }
    for (int end = start + 1; end <= s.length(); end++) {
        if (wordDict.contains(s.substring(start, end)) && word_Break(s, wordDict, end, memo)) {
            return memo[start] = true;
        }
    }
    return memo[start] = false;
    }
```

### Breadth-First-Search
```
/*
 * time: O(n^2), space: O(n)
 */
public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> wordDictSet=new HashSet(wordDict);
    Queue<Integer> queue = new LinkedList<>();
    int[] visited = new int[s.length()];
    queue.add(0);
    while (!queue.isEmpty()) {
        int start = queue.remove();
        if (visited[start] == 0) {
            for (int end = start + 1; end <= s.length(); end++) {
                if (wordDictSet.contains(s.substring(start, end))) {
                    queue.add(end);
                    if (end == s.length()) {
                        return true;
                    }
                }
            }
            visited[start] = 1;
        }
    }
    return false;
}
```

### Dynamic Programming
```
/*
 * time: O(n^2), space: O(n)
 */
public boolean wordBreak(String s, List<String> wordDict) {
    Set<String> dict = new HashSet<>(wordDict);
    boolean[] dp = new boolean[s.length() + 1];
    dp[0] = true;
    for(int i = 1; i <= s.length(); i++) {
        for(int j = 0; j < i; j++) {
            if(dp[j] && dict.contains(s.substring(j, i))) dp[i] = true;
        }
    }
    return dp[s.length()];
}
```