## Problem
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

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
 * Time Limit Exceeded
 * time: O(n), space: O(n)
 */
class WordDistance {
    private String[] words;
    private Map<String, Integer> cache;

    public WordDistance(String[] words) {
        this.words = words;
        cache = new HashMap<>();
    }
    
    public int shortest(String word1, String word2) {
        String key = word1 + word2;
        if(cache.containsKey(key)) return cache.get(key);
        int min = words.length;
        int dis1 = -1, dis2 = -1;
        for(int i = 0; i < words.length; i++) {
            if(words[i].equals(word1)) {
                dis1 = i;
            }else if(words[i].equals(word2)) {
                dis2 = i;
            }else {
                continue;
            }
            if(dis1 != -1 && dis2 != -1) {
                min = Math.min(min, Math.abs(dis2 - dis1));
            }
        }
        cache.put(key, min);
        return min;
    }
}
```

```
/*
 * time: O(n), space: O(n)
 */
class WordDistance {
    private Map<String, List<Integer>> cache;

    public WordDistance(String[] words) {
        cache = new HashMap<>();
        for(int i = 0; i < words.length; i++) {
            String w = words[i];
            cache.putIfAbsent(w, new ArrayList<>());
            cache.get(w).add(i);
        }
    }
    
    public int shortest(String word1, String word2) {
        List<Integer> list1 = cache.get(word1);
        List<Integer> list2 = cache.get(word2);
        int min = Integer.MAX_VALUE;
        int ptr1 = 0, ptr2 = 0;
        while(ptr1 < list1.size() && ptr2 < list2.size()) {
            min = Math.min(min, Math.abs(list1.get(ptr1) - list2.get(ptr2)));
            if(list1.get(ptr1) < list2.get(ptr2)) {
                ptr1++;
            }else {
                ptr2++;
            }
        }
        return min;
    }
}
```