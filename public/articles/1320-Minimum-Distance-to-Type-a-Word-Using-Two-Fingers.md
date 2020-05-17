## Bottom up dp
```
/*
 * time: O(n * 27 ^ m): where m is the number of fingers
 * memory: O(n * 27 ^ m)
 */
private int cost(int from, int to) {
    if (from == 26) return 0;
    return Math.abs(from / 6 - to / 6) + Math.abs(from % 6 - to % 6);
}
public int minimumDistance(String word) {
    int[][][] dp = new int[2][27][27];    
    for (int pos = word.length() - 1; pos >= 0; pos--) {
        int to = word.charAt(pos) - 'A';
        for (int i = 0; i < 27; ++i) {
            for (int j = 0; j < 27; ++j) {
                dp[pos % 2][i][j] = Math.min(dp[(pos + 1) % 2][to][i] + 
                    cost(j, to), dp[(pos + 1) % 2][to][j] + cost(i, to));
            }
        }
    }
    return dp[0][26][26];
}
```

## Top down dp
```
/*
 * time: O(n * 27 ^ (m - 1)): where m is the number of fingers
 * memory: O(n * 27 ^ (m- 1))
 */
public int minimumDistance(String word) {
        return minimumDistance(word.toCharArray(), 1, 26);
}
public int minimumDistance(char[] word, int pos, int other) {
    if (pos >= word.length) return 0;
    if (dp[other][pos] == 0) {
        int to = word[pos] - 'A', last = word[pos - 1] - 'A';
        dp[other][pos] = Math.min(cost(last, to) + minimumDistance(word, pos + 1, other),
            cost(other, to) + minimumDistance(word, pos + 1, last)) + 1;
    }
    return dp[other][pos] - 1;
}

private int cost(int from, int to) {
    if (from == 26) return 0;
    return Math.abs(from / 6 - to / 6) + Math.abs(from % 6 - to % 6);
}
```

## 1D dp
```
public int minimumDistance(String word) {
    int dp[] = new int[26], res = 0, save = 0, n = word.length();
    for (int i = 0; i < n - 1; i++) {
        int b = word.charAt(i) - 'A', c = word.charAt(i + 1) - 'A';
        for (int a = 0; a < 26; ++a)
            dp[b] = Math.max(dp[b], dp[a] + d(b, c) - d(a, c));
        save = Math.max(save, dp[b]);
        res += d(b, c);
    }
    return res - save;
}

private int d(int a, int b) {
    return Math.abs(a / 6 - b / 6) + Math.abs(a % 6 - b % 6);
}
```