```
/*
 * one stack to maintain node order, sorted list to maintain max
 * space: O(n)
 */
class MaxStack {
    private Node head;
    private List<Node> maxList;

    public MaxStack() {
        head = null;
        maxList = new ArrayList<>();
    }
    
    // time: O(n)
    public void push(int x) {
        Node curr = new Node(x);
        curr.next = head;
        if(head != null) head.pre = curr;
        head = curr;
        int pos = 0;
        for(; pos < maxList.size(); pos++) {
            if(maxList.get(pos).val > x) break;
        }
        maxList.add(pos, curr);
    }
    
    // time: O(n)
    public int pop() {
        int val = head.val;
        int pos = 0;
        for(; pos < maxList.size(); pos++) {
            if(maxList.get(pos) == head) break;
        }
        maxList.remove(pos);
        head = head.next;
        if(head != null) head.pre = null;
        return val;
    }
    
    // time: O(1)
    public int top() {
        return head.val;
    }
    
    // time: O(1)
    public int peekMax() {
        return maxList.get(maxList.size() - 1).val;
    }
    
    // time: O(1)
    public int popMax() {
        Node max = maxList.get(maxList.size() - 1);
        maxList.remove(max);
        if(max == head) {
            head = head.next;
            if(head != null) head.pre = null;
        }else {
            max.pre.next = max.next;
            if(max.next != null) max.next.pre = max.pre;
        }
        return max.val;
    }
    
    class Node {
        int val;
        Node pre, next;
        public Node(int val) {
            this.val = val;
        }
    }
}
```