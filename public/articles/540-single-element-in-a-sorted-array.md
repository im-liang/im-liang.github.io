## XOR
Elements appear twice will cancel each other out, and left the unique element
Time: O(n), space: O(1)

## Binary Search
```
    public int singleNonDuplicate(int[] nums) {
        int len = nums.length; 
        int left = 0, right = len - 1;
        while(left < right) {
            int mid = left + (right - left) / 2;
            if(mid == 0 && nums[mid] != nums[mid + 1]) {
                return nums[mid];
            }
            if(mid == len - 1 && nums[mid] != nums[mid - 1]) return nums[mid];
            if(mid > 0 && mid < len && nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) return nums[mid];
            
            if(mid % 2 == 0) {
                if(nums[mid] == nums[mid + 1]) {
                    left = mid + 2;
                }else {
                    right = mid - 1;
                }
            }else {
                if(nums[mid] == nums[mid + 1]) {
                    right = mid - 2;
                }else {
                    left = mid + 1;
                }
            }
        }
        return nums[left];
    }
time: O(logn), space: O(1)
```

## Binary Search on even index

Key point: 
* The unique element can only appear in even index
* 3 scenario of mid point placement during binary search
1. [1, 2, 2(mid), 3, 3] unique on the left of mid
2. [2, 2, 3(mid), 3, 4] unique on the right of mid
3. [1, 1, 2(mid), 3, 3]  unique is on the mid
```
    public int singleNonDuplicate(int[] nums) {
        int left = 0, right = nums.length - 1;
        while(left < right) {
            int mid = left + (right - left) / 2;
            if(mid % 2 != 0) mid--;
            if(nums[mid] == nums[mid + 1]) left = mid + 2;
            else right = mid;
        }
        return nums[left];
    }
// time: O(log(n/2))[left = mid + 2], space: O(1)
```