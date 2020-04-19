## Problem
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

## Example
* Input: points = \[\[1,3\],\[-2,2\]\], K = 1  
Output: \[\[-2,2\]\]

## Note
* return the answer in any order

## Solution
```
/*
 * map heap to maintain top k closest points 
 * time: O(n log k), space O(k)
 */
public int[][] kClosest(int[][] points, int K) {
    PriorityQueue<int[]> queue = new PriorityQueue<>((a, b)-> b[0] * b[0] + b[1] * b[1] - a[0] * a[0] - a[1] * a[1]);
    for(int[] p : points) {
        queue.offer(p);
        if(queue.size() > K) queue.poll();
    }
    int len = Math.min(K, queue.size());
    int[][] result = new int[len][2];
    for(int i = len - 1; i >= 0; i--) {
        result[i] = queue.poll();
    }
    return result;
}
```

```
/*
 * quick select 
 * time: O(n), space O(n)
 */
    public int[][] kClosest(int[][] points, int K) {
        int i = 0, j = points.length - 1;
        while(i < j) {
            int mid = partition(points, i, j);
            if(mid == K) break;
            if(mid < K) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return Arrays.copyOf(points, K);
    }
    
    private int partition(int[][] points, int start, int end) {
        int[] pivot = points[end];
        int swapIndex = start - 1;
        for(int i = start; i < end; i++) {
            if(value(points[i]) < value(pivot)) {
                swapIndex++;
                swap(points, swapIndex, i);
            }
        }
        swap(points, ++swapIndex, end);
        return swapIndex;
    }
    
    private int value(int[] a) {
        return a[0] * a[0] + a[1] * a[1];
    }
    
    private void swap(int[][] points, int i, int j) {
        int[] temp = points[i];
        points[i] = points[j];
        points[j] = temp;
    }
```