## Problem
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

## Example
words = \["practice", "makes", "perfect", "coding", "makes"\]
* Input: word1 = "coding", word2 = "practice"
Output: 3 (|coding{index==3} - practice{index==0}| == 3)
* Input: word1 = "makes", word2 = "coding"
Output: 3 (|coding{index==3} - makes{index==4}| == 1)

## Note
* No wrap around when calculating the distance
* word1 != word2
* word1 and word2 exist in the list

## Solution

```
/*
 * keep track of most recent indices to find shortest distance
 *
 * time: O(len(words)), space: O(1)
 */
public int shortestDistance(String[] words, String word1, String word2) {
    int len = words.length;
    int min = len;
    int pos1 = -1, pos2 = -1;
    for(int i = 0; i < len; i++) {
        if(words[i].equals(word1)) {
            pos1 = i;
        }else if(words[i].equals(word2)) {
            pos2 = i;
        }else {
            continue;
        }
        if(pos1 != -1 && pos2 != -1) {
            min = Math.min(min, Math.abs(pos1 - pos2));
        }
    }
    return min;
}
```