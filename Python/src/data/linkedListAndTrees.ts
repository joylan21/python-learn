import type { Category } from './types';

export const linkedListProblems: Category = {
    id: 'linked-list-problems',
    title: 'Linked List',
    isProblemCategory: true,
    subsections: [
        {
            id: 'linked-list-easy',
            title: 'Linked List - Easy',
            methods: [
                {
                    id: 'reverse-linked-list',
                    name: '1. Reverse Linked List',
                    description: 'Reverse a singly linked list in-place.',
                    syntax: 'Use three pointers (prev, curr, next) to flip the next pointer of each node as you traverse.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List',
                    isProblem: true,
                    solutionCode: `def reverseList(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`
                },
                {
                    id: 'linked-list-cycle',
                    name: '2. Linked List Cycle',
                    description: 'Determine if a list has a cycle.',
                    syntax: "Floyd's Cycle-Finding Algorithm (Fast & Slow pointers). If they meet, a cycle exists.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers, Linked List',
                    isProblem: true,
                    solutionCode: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False`
                },
                {
                    id: 'merge-two-sorted-lists',
                    name: '3. Merge Two Sorted Lists',
                    description: 'Merge two sorted lists into one.',
                    syntax: 'Use a dummy head node and compare the heads of both lists.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N + M)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def mergeTwoLists(l1, l2):
    dummy = cur = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            cur.next, l1 = l1, l1.next
        else:
            cur.next, l2 = l2, l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next`
                },
                {
                    id: 'remove-duplicates-from-sorted-list',
                    name: '4. Remove Duplicates from Sorted List',
                    description: 'Delete duplicates so each element appears once.',
                    syntax: 'Compare current node value with the next node; skip if they are equal.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List',
                    isProblem: true,
                    solutionCode: `def deleteDuplicates(head):
    curr = head
    while curr and curr.next:
        if curr.val == curr.next.val:
            curr.next = curr.next.next
        else:
            curr = curr.next
    return head`
                },
                {
                    id: 'middle-of-the-linked-list',
                    name: '5. Middle of the Linked List',
                    description: 'Return the middle node.',
                    syntax: 'Move fast twice as fast as slow; when fast hits the end, slow is at the middle.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers, Linked List',
                    isProblem: true,
                    solutionCode: `def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`
                },
                {
                    id: 'palindrome-linked-list',
                    name: '6. Palindrome Linked List',
                    description: 'Check if the list is a palindrome.',
                    syntax: 'Find middle, reverse the second half, and compare with the first half.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers, Linked List',
                    isProblem: true,
                    solutionCode: `def isPalindrome(head):
    # Step 1: Find middle
    fast = slow = head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    # Step 2: Reverse second half
    prev = None
    while slow:
        nxt = slow.next
        slow.next = prev
        prev = slow
        slow = nxt
    # Step 3: Compare both halves
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    return True`
                },
                {
                    id: 'delete-node-in-a-linked-list',
                    name: '7. Delete Node in a Linked List',
                    description: 'Delete a node given access only to that node.',
                    syntax: "Overwrite current node's value with next node's value, then skip the next node.",
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Linked List',
                    isProblem: true,
                    solutionCode: `def deleteNode(node):
    # Copy next node's value, then skip it
    node.val = node.next.val
    node.next = node.next.next`
                },
                {
                    id: 'intersection-of-two-linked-lists',
                    name: '8. Intersection of Two Linked Lists',
                    description: 'Find the intersection node.',
                    syntax: 'Use two pointers; redirect to the other head when one reaches the end to sync lengths.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N + M)',
                    commonUseCases: 'Two Pointers, Linked List',
                    isProblem: true,
                    solutionCode: `def getIntersectionNode(headA, headB):
    a, b = headA, headB
    # When one reaches end, redirect to other head
    # They will meet at intersection or both be None
    while a != b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a`
                }
            ]
        },
        {
            id: 'linked-list-medium',
            title: 'Linked List - Medium',
            methods: [
                {
                    id: 'remove-nth-node-from-end-of-list',
                    name: '9. Remove Nth Node From End of List',
                    description: 'Remove the n-th node from the end in one pass.',
                    syntax: 'Move fast n steps ahead, then move both together until fast reaches the end.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers, Linked List',
                    isProblem: true,
                    solutionCode: `def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    slow = fast = dummy
    for _ in range(n + 1): fast = fast.next
    while fast:
        slow, fast = slow.next, fast.next
    slow.next = slow.next.next
    return dummy.next`
                },
                {
                    id: 'add-two-numbers',
                    name: '10. Add Two Numbers',
                    description: 'Add two numbers represented by linked lists (digits in reverse).',
                    syntax: 'Traverse both lists and manage a carry variable.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(max(N, M))',
                    commonUseCases: 'Linked List, Math',
                    isProblem: true,
                    solutionCode: `def addTwoNumbers(l1, l2):
    dummy = curr = ListNode()
    carry = 0
    while l1 or l2 or carry:
        v1 = l1.val if l1 else 0
        v2 = l2.val if l2 else 0
        val = v1 + v2 + carry
        carry = val // 10
        curr.next = ListNode(val % 10)
        curr = curr.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return dummy.next`
                },
                {
                    id: 'copy-list-with-random-pointer',
                    name: '11. Copy List with Random Pointer',
                    description: 'Clone a list with next and random pointers.',
                    syntax: 'Use a dictionary to map {original_node: copied_node}.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Hashing',
                    isProblem: true,
                    solutionCode: `def copyRandomList(head):
    if not head: return None
    copies = {None: None}
    curr = head
    # First pass: create all copies
    while curr:
        copies[curr] = Node(curr.val)
        curr = curr.next
    # Second pass: wire up next and random
    curr = head
    while curr:
        copies[curr].next = copies[curr.next]
        copies[curr].random = copies[curr.random]
        curr = curr.next
    return copies[head]`
                },
                {
                    id: 'odd-even-linked-list',
                    name: '12. Odd Even Linked List',
                    description: 'Group odd nodes followed by even nodes.',
                    syntax: 'Build two separate lists for odd and even indices, then link them.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def oddEvenList(head):
    if not head: return None
    odd = head
    even = head.next
    evenHead = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    odd.next = evenHead
    return head`
                },
                {
                    id: 'swap-nodes-in-pairs',
                    name: '13. Swap Nodes in Pairs',
                    description: 'Swap every two adjacent nodes.',
                    syntax: 'Use a dummy node and pointers to re-link pairs.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def swapPairs(head):
    dummy = ListNode(0, head)
    prev, curr = dummy, head
    while curr and curr.next:
        second = curr.next
        nxtPair = second.next
        # Swap
        second.next = curr
        curr.next = nxtPair
        prev.next = second
        # Move forward
        prev = curr
        curr = nxtPair
    return dummy.next`
                },
                {
                    id: 'sort-list',
                    name: '14. Sort List',
                    description: 'Sort in O(n log n).',
                    syntax: 'Use Merge Sort (divide and conquer).',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Linked List, Sorting',
                    isProblem: true,
                    solutionCode: `def sortList(head):
    if not head or not head.next:
        return head
    # Find middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    mid = slow.next
    slow.next = None
    # Sort each half
    left = sortList(head)
    right = sortList(mid)
    # Merge
    dummy = curr = ListNode()
    while left and right:
        if left.val < right.val:
            curr.next = left
            left = left.next
        else:
            curr.next = right
            right = right.next
        curr = curr.next
    curr.next = left or right
    return dummy.next`
                },
                {
                    id: 'reorder-list',
                    name: '15. Reorder List',
                    description: 'Reorder to L0 -> Ln -> L1 -> Ln-1 ...',
                    syntax: 'Find middle, reverse the second half, and merge alternately.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def reorderList(head):
    # Find middle
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    prev, curr = None, slow.next
    slow.next = None
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    # Merge alternately
    first, second = head, prev
    while second:
        t1, t2 = first.next, second.next
        first.next = second
        second.next = t1
        first, second = t1, t2`
                },
                {
                    id: 'rotate-list',
                    name: '16. Rotate List',
                    description: 'Rotate right by k places.',
                    syntax: 'Make the list circular, then break it at the new tail position.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head
    # Find length
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1
    k = k % length
    if k == 0: return head
    # Find new tail
    curr = head
    for _ in range(length - k - 1):
        curr = curr.next
    newHead = curr.next
    curr.next = None
    tail.next = head
    return newHead`
                },
                {
                    id: 'partition-list',
                    name: '17. Partition List',
                    description: 'Arrange nodes relative to value x.',
                    syntax: 'Create "less than" and "greater than" dummy lists and join them.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Pointers',
                    isProblem: true,
                    solutionCode: `def partition(head, x):
    less = less_head = ListNode(0)
    greater = greater_head = ListNode(0)
    while head:
        if head.val < x:
            less.next = head
            less = less.next
        else:
            greater.next = head
            greater = greater.next
        head = head.next
    greater.next = None
    less.next = greater_head.next
    return less_head.next`
                },
                {
                    id: 'flatten-multilevel-doubly-linked-list',
                    name: '18. Flatten a Multilevel Doubly Linked List',
                    description: 'Flatten a list with "child" pointers.',
                    syntax: 'Use a stack (DFS) to handle children before next nodes.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, DFS',
                    isProblem: true,
                    solutionCode: `def flatten(head):
    if not head: return head
    stack = [head]
    prev = Node(0)
    while stack:
        curr = stack.pop()
        curr.prev = prev
        prev.next = curr
        if curr.next:
            stack.append(curr.next)
        if curr.child:
            stack.append(curr.child)
            curr.child = None
        prev = curr
    head.prev = None
    return head`
                },
                {
                    id: 'lru-cache',
                    name: '19. LRU Cache',
                    description: 'Design a Least Recently Used cache.',
                    syntax: 'Combine a Doubly Linked List (for order) with a Hash Map (for speed).',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Design, Linked List, Hashing',
                    isProblem: true,
                    solutionCode: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.cap = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        # Move to end (most recent)
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`
                },
                {
                    id: 'linked-list-components',
                    name: '20. Linked List Components',
                    description: 'Count connected components in a subset of values.',
                    syntax: 'Count how many times a node is in the subset but its successor is not.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Linked List, Hashing',
                    isProblem: true,
                    solutionCode: `def numComponents(head, nums):
    s = set(nums)
    res = 0
    curr = head
    while curr:
        # Start of a new component
        if curr.val in s and (not curr.next or curr.next.val not in s):
            res += 1
        curr = curr.next
    return res`
                }
            ]
        }
    ]
};

export const treesProblems: Category = {
    id: 'trees-problems',
    title: 'Trees',
    isProblemCategory: true,
    subsections: [
        {
            id: 'trees-easy',
            title: 'Trees - Easy',
            methods: [
                {
                    id: 'maximum-depth-of-binary-tree',
                    name: '1. Maximum Depth of Binary Tree',
                    description: 'Find the length of the longest path from the root to the farthest leaf.',
                    syntax: 'Use recursion to find the max height of left and right subtrees, then add 1 for the root.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def maxDepth(root):
    if not root: return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`
                },
                {
                    id: 'invert-binary-tree',
                    name: '2. Invert Binary Tree',
                    description: 'Flip a binary tree so that the left and right children of all nodes are swapped.',
                    syntax: 'Recursively swap the left and right children of every node.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def invertTree(root):
    if not root:
        return None
    # Swap left and right
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`
                },
                {
                    id: 'same-tree',
                    name: '3. Same Tree',
                    description: 'Check if two binary trees are structurally identical and have the same values.',
                    syntax: 'Compare current nodes, then recursively check left and right children.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`
                },
                {
                    id: 'binary-tree-preorder-traversal',
                    name: '4. Binary Tree Preorder Traversal',
                    description: 'Visit nodes in the order: Root -> Left -> Right.',
                    syntax: 'Use a recursive function or a stack to process the root before its children.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, DFS',
                    isProblem: true,
                    solutionCode: `def preorderTraversal(root):
    res = []
    def traverse(node):
        if not node:
            return
        res.append(node.val)   # Root first
        traverse(node.left)    # Then left
        traverse(node.right)   # Then right
    traverse(root)
    return res`
                },
                {
                    id: 'binary-tree-inorder-traversal',
                    name: '5. Binary Tree Inorder Traversal',
                    description: 'Visit nodes in the order: Left -> Root -> Right.',
                    syntax: 'Essential for Binary Search Trees (BSTs) as it returns values in sorted order.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, DFS',
                    isProblem: true,
                    solutionCode: `def inorderTraversal(root):
    res = []
    def traverse(node):
        if not node:
            return
        traverse(node.left)    # Left first
        res.append(node.val)   # Then root
        traverse(node.right)   # Then right
    traverse(root)
    return res`
                },
                {
                    id: 'binary-tree-postorder-traversal',
                    name: '6. Binary Tree Postorder Traversal',
                    description: 'Visit nodes in the order: Left -> Right -> Root.',
                    syntax: 'Often used for deleting trees or evaluating mathematical expression trees.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, DFS',
                    isProblem: true,
                    solutionCode: `def postorderTraversal(root):
    res = []
    def traverse(node):
        if not node:
            return
        traverse(node.left)    # Left first
        traverse(node.right)   # Then right
        res.append(node.val)   # Root last
    traverse(root)
    return res`
                },
                {
                    id: 'balanced-binary-tree',
                    name: '7. Balanced Binary Tree',
                    description: 'Determine if the heights of the two subtrees of every node never differ by more than one.',
                    syntax: 'Calculate height recursively; if a subtree is unbalanced, return -1 to signal the parent.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def isBalanced(root):
    def check(node):
        if not node:
            return 0
        left = check(node.left)
        right = check(node.right)
        # -1 means unbalanced
        if left == -1 or right == -1 or abs(left - right) > 1:
            return -1
        return 1 + max(left, right)
    return check(root) != -1`
                },
                {
                    id: 'subtree-of-another-tree',
                    name: '8. Subtree of Another Tree',
                    description: 'Check if tree S is identical to a subtree of tree T.',
                    syntax: 'For every node in T, check if the tree rooted there is the "Same Tree" as S.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Trees, DFS',
                    isProblem: true,
                    solutionCode: `def isSubtree(root, subRoot):
    if not subRoot:
        return True
    if not root:
        return False
    if isSameTree(root, subRoot):
        return True
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)

def isSameTree(p, q):
    if not p and not q: return True
    if p and q and p.val == q.val:
        return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
    return False`
                }
            ]
        },
        {
            id: 'trees-medium',
            title: 'Trees - Medium',
            methods: [
                {
                    id: 'binary-tree-level-order-traversal',
                    name: '9. Binary Tree Level Order Traversal',
                    description: 'Return node values level by level (Breadth-First Search).',
                    syntax: 'Use a queue to store nodes of the current level before moving to the next.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BFS',
                    isProblem: true,
                    solutionCode: `from collections import deque
def levelOrder(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`
                },
                {
                    id: 'lowest-common-ancestor-of-a-bst',
                    name: '10. Lowest Common Ancestor (LCA) of a BST',
                    description: 'Find the lowest node that has both nodes p and q as descendants.',
                    syntax: 'If both values are smaller than the root, go left; if both are larger, go right; else, the current root is the LCA.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(H)',
                    commonUseCases: 'Trees, BST',
                    isProblem: true,
                    solutionCode: `def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`
                },
                {
                    id: 'validate-binary-search-tree',
                    name: '11. Validate Binary Search Tree',
                    description: 'Check if a tree satisfies the BST property (Left < Root < Right).',
                    syntax: "Recursively pass a range (min, max) that each node's value must fall within.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BST',
                    isProblem: true,
                    solutionCode: `def isValidBST(root):
    def valid(node, low, high):
        if not node:
            return True
        if not (low < node.val < high):
            return False
        return valid(node.left, low, node.val) and valid(node.right, node.val, high)
    return valid(root, float('-inf'), float('inf'))`
                },
                {
                    id: 'kth-smallest-element-in-a-bst',
                    name: '12. Kth Smallest Element in a BST',
                    description: 'Find the k-th smallest value in a BST.',
                    syntax: 'Perform an Inorder Traversal and stop at the k-th element.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BST',
                    isProblem: true,
                    solutionCode: `def kthSmallest(root, k):
    stack = []
    curr = root
    while stack or curr:
        # Go as far left as possible
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        curr = curr.right`
                },
                {
                    id: 'binary-tree-right-side-view',
                    name: '13. Binary Tree Right Side View',
                    description: 'Return the values of the nodes you can see when standing on the right side of the tree.',
                    syntax: 'Perform a modified BFS or DFS that prioritizes the right child and captures the first node at each depth.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BFS',
                    isProblem: true,
                    solutionCode: `from collections import deque

def rightSideView(root):
    if not root: return []
    res = []
    q = deque([root])
    while q:
        rightSide = None
        for _ in range(len(q)):
            node = q.popleft()
            rightSide = node
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(rightSide.val)
    return res`
                },
                {
                    id: 'construct-binary-tree-from-preorder-and-inorder',
                    name: '14. Construct Binary Tree from Preorder and Inorder Traversal',
                    description: 'Build the tree given two traversal arrays.',
                    syntax: 'Use the first element of Preorder as the root, then find its position in Inorder to split left and right subtrees.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def buildTree(preorder, inorder):
    if not preorder or not inorder:
        return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root`
                },
                {
                    id: 'path-sum-ii',
                    name: '15. Path Sum II',
                    description: 'Find all root-to-leaf paths where the sum of values equals a target.',
                    syntax: 'Use DFS/Backtracking to keep track of the current path and sum.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Trees, DFS',
                    isProblem: true,
                    solutionCode: `def pathSum(root, targetSum):
    res = []
    def dfs(node, path, currSum):
        if not node:
            return
        path.append(node.val)
        currSum += node.val
        # Leaf node check
        if not node.left and not node.right and currSum == targetSum:
            res.append(list(path))
        dfs(node.left, path, currSum)
        dfs(node.right, path, currSum)
        path.pop()  # backtrack
    dfs(root, [], 0)
    return res`
                },
                {
                    id: 'flatten-binary-tree-to-linked-list',
                    name: '16. Flatten Binary Tree to Linked List',
                    description: 'Flatten a binary tree into a "linked list" in-place using the right child pointers.',
                    syntax: 'Use a reverse post-order traversal (Right -> Left -> Root) to relink nodes.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, Recursion',
                    isProblem: true,
                    solutionCode: `def flatten(root):
    curr = root
    while curr:
        if curr.left:
            # Find rightmost of left subtree
            runner = curr.left
            while runner.right:
                runner = runner.right
            # Wire it to curr.right
            runner.right = curr.right
            curr.right = curr.left
            curr.left = None
        curr = curr.right`
                },
                {
                    id: 'populating-next-right-pointers',
                    name: '17. Populating Next Right Pointers in Each Node',
                    description: 'Connect each node to its next right node at the same level.',
                    syntax: 'Use the already established next pointers of the parent level to connect the children level.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BFS',
                    isProblem: true,
                    solutionCode: `def connect(root):
    curr = root
    while curr and curr.left:
        nxt = curr.left
        while curr:
            curr.left.next = curr.right
            if curr.next:
                curr.right.next = curr.next.left
            curr = curr.next
        curr = nxt
    return root`
                },
                {
                    id: 'count-complete-tree-nodes',
                    name: '18. Count Complete Tree Nodes',
                    description: 'Count nodes in a "complete" binary tree in less than O(n) time.',
                    syntax: 'Compare the leftmost and rightmost heights; if they are equal, use the formula 2^h - 1.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(log^2 N)',
                    commonUseCases: 'Trees, Binary Search',
                    isProblem: true,
                    solutionCode: `def countNodes(root):
    if not root:
        return 0
    l, r = root, root
    lh = rh = 0
    while l:
        lh += 1
        l = l.left
    while r:
        rh += 1
        r = r.right
    # Perfect tree shortcut
    if lh == rh:
        return (1 << lh) - 1
    return 1 + countNodes(root.left) + countNodes(root.right)`
                },
                {
                    id: 'house-robber-iii',
                    name: '19. House Robber III',
                    description: 'Find the maximum value you can rob from binary tree-linked houses (cannot rob two directly linked houses).',
                    syntax: 'Use DFS where each node returns a pair: (max if robbed, max if not robbed).',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, DP, DFS',
                    isProblem: true,
                    solutionCode: `def rob(root):
    def dfs(node):
        if not node:
            return [0, 0]  # [robbed, not_robbed]
        left = dfs(node.left)
        right = dfs(node.right)
        # If we rob this node, we can't rob children
        robbed = node.val + left[1] + right[1]
        # If we skip this node, take max of each child
        not_robbed = max(left) + max(right)
        return [robbed, not_robbed]
    return max(dfs(root))`
                },
                {
                    id: 'binary-tree-zigzag-level-order-traversal',
                    name: '20. Binary Tree Zigzag Level Order Traversal',
                    description: 'Level order traversal, but alternating directions (left-to-right, then right-to-left).',
                    syntax: 'Use the standard Level Order BFS, but reverse the list for every odd-numbered level.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trees, BFS',
                    isProblem: true,
                    solutionCode: `from collections import deque

def zigzagLevelOrder(root):
    if not root: return []
    res, q = [], deque([root])
    left_to_right = True
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        # Reverse every other level
        res.append(level if left_to_right else level[::-1])
        left_to_right = not left_to_right
    return res`
                }
            ]
        }
    ]
};
