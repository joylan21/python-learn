import type { Category } from './types';

export const arraysAndStringsProblems: Category = {
    id: 'arrays-and-strings-problems',
    title: 'Arrays and Strings',
    isProblemCategory: true,
    subsections: [
        {
            id: 'arrays-and-strings-easy',
            title: 'Arrays and Strings - Easy',
            methods: [
                {
                    id: 'two-sum',
                    name: '1. Two Sum',
                    description: 'Find two numbers in an array that add to a target.',
                    syntax: 'Use a dictionary to store the "complement" (target - current) as you iterate.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Arrays, Hashing',
                    isProblem: true,
                    solutionCode: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i`
                },
                {
                    id: 'reverse-string',
                    name: '2. Reverse String',
                    description: 'Modify a character array in-place.',
                    syntax: "Use Two Pointers (left and right) or Python's reverse() method.",
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def reverseString(s):
    s.reverse() # Built-in is highly optimized

def reverse_string(s):
    rev = ""
    for char in s:
        rev = char + rev
    return rev
print(reverse_string("hello"))`
                },
                {
                    id: 'valid-anagram',
                    name: '3. Valid Anagram',
                    description: 'Check if two strings are rearrangements of each other.',
                    syntax: 'Use collections.Counter to compare character frequencies.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `def are_anagrams(s1, s2):
    if len(s1) != len(s2):
        return False
    count = {}
    # Count characters in s1
    for ch in s1:
        if ch in count:
            count[ch] += 1
        else:
            count[ch] = 1
    # Subtract using s2
    for ch in s2:
        if ch not in count:
            return False
        count[ch] -= 1
        if count[ch] < 0:
            return False
    return True

# OR using Counter
from collections import Counter
def isAnagram(s, t):
    return Counter(s) == Counter(t)`
                },
                {
                    id: 'best-time-to-buy-sell-stock',
                    name: '4. Best Time to Buy/Sell Stock',
                    description: 'Find max profit from a single trade.',
                    syntax: 'Track the minimum price seen so far and calculate potential profit at each step.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Array, Greedy',
                    isProblem: true,
                    solutionCode: `def maxProfit(prices):
    min_price, max_p = float('inf'), 0
    for p in prices:
        min_price = min(min_price, p)
        max_p = max(max_p, p - min_price)
    return max_p`
                },
                {
                    id: 'move-zeroes',
                    name: '5. Move Zeroes',
                    description: 'Move all 0s to the end in-place.',
                    syntax: 'Use a pointer to track where the next non-zero element should go.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def moveZeroes(nums):
    pos = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[pos], nums[i] = nums[i], nums[pos]
            pos += 1`
                },
                {
                    id: 'palindrome-check',
                    name: '6. Palindrome Check',
                    description: 'Verify if a string is a palindrome, ignoring non-alphanumeric characters.',
                    syntax: 'Filter the string and compare it to its reverse, or use two pointers.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# OR
def isPalindrome(s):
    filtered = "".join(c.lower() for c in s if c.isalnum())
    return filtered == filtered[::-1]`
                },
                {
                    id: 'longest-common-prefix',
                    name: '7. Longest Common Prefix',
                    description: 'Find the shared prefix among a list of strings.',
                    syntax: 'Sort the list; the prefix must be shared by the first and last strings.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N) or O(N*M)',
                    commonUseCases: 'String',
                    isProblem: true,
                    solutionCode: `def longest_common_prefix(strs):
    if not strs:
        return ""

    prefix = strs[0]

    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]

            if not prefix:
                return ""

    return prefix`
                },
                {
                    id: 'majority-element',
                    name: '8. Majority Element',
                    description: 'Find the element that appears > n/2 times.',
                    syntax: 'Boyer-Moore Voting Algorithm.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Array, Voting',
                    isProblem: true,
                    solutionCode: `def majorityElement(nums):
    count, candidate = 0, None
    for n in nums:
        if count == 0: candidate = n
        count += (1 if n == candidate else -1)
    return candidate`
                }
            ]
        },
        {
            id: 'arrays-and-strings-medium',
            title: 'Arrays and Strings - Medium',
            methods: [
                {
                    id: 'maximum-subarray',
                    name: '9. Maximum Subarray (Kadane’s)',
                    description: 'Find the largest sum of a contiguous subarray.',
                    syntax: 'Reset current sum to zero if it becomes negative.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'DP, Kadane\'s',
                    isProblem: true,
                    solutionCode: `def maxSubArray(nums):
    cur_sum, max_sum = 0, nums[0]
    for n in nums:
        cur_sum = max(n, cur_sum + n)
        max_sum = max(max_sum, cur_sum)
    return max_sum`
                },
                {
                    id: '3sum',
                    name: '10. 3Sum',
                    description: 'Find all unique triplets that sum to zero.',
                    syntax: 'Sort the array and use Two Pointers for the remaining two numbers.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums)):
        # skip duplicates
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left = i + 1
        right = len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                # skip duplicates
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result`
                },
                {
                    id: 'longest-substring-without-repeating-characters',
                    name: '11. Longest Substring Without Repeating Characters',
                    description: 'Find the longest unique substring.',
                    syntax: 'Sliding Window with a dictionary/set to track character positions.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sliding Window',
                    isProblem: true,
                    solutionCode: `def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`
                },
                {
                    id: 'group-anagrams',
                    name: '14. Group Anagrams',
                    description: 'Group strings into sub-lists of anagrams.',
                    syntax: 'Use sorted strings as keys in a dictionary.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * K log K)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def groupAnagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        groups["".join(sorted(s))].append(s)
    return list(groups.values())`
                },
                {
                    id: 'product-of-array-except-self',
                    name: '15. Product of Array Except Self',
                    description: 'Return array where res[i] is the product of all but nums[i].',
                    syntax: 'Two passes: calculate prefix products then multiply by suffix products.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Array, Prefix/Suffix',
                    isProblem: true,
                    solutionCode: `def productExceptSelf(nums):
    res = [1] * len(nums)
    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(len(nums)-1, -1, -1):
        res[i] *= suffix
        suffix *= nums[i]
    return res`
                },
                {
                    id: 'rotate-array',
                    name: '16. Rotate Array',
                    description: 'Rotate right by k steps.',
                    syntax: 'Reverse the whole array, then reverse the first k elements, then the rest.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Array reversal',
                    isProblem: true,
                    solutionCode: `def rotate(nums, k):
    k %= len(nums)
    nums.reverse()
    nums[:k] = reversed(nums[:k])
    nums[k:] = reversed(nums[k:])`
                },
                {
                    id: 'longest-palindromic-substring',
                    name: '17. Longest Palindromic Substring',
                    description: 'Find the longest contiguous palindrome.',
                    syntax: 'Expand outward from every character (and every gap between characters).',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'DP, Two Pointers',
                    isProblem: true,
                    solutionCode: `def longestPalindrome(s):
    res = ""
    for i in range(len(s)):
        # Odd length (aba), Even length (abba)
        for l, r in [(i, i), (i, i+1)]:
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > len(res): res = s[l:r+1]
                l -= 1
                r += 1
    return res`
                },
                {
                    id: 'reverse-words-in-a-string',
                    name: '18. Reverse Words in a String',
                    description: 'Reverse word order.',
                    syntax: 'Split by whitespace and reverse the resulting list.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String',
                    isProblem: true,
                    solutionCode: `def reverseWords(s):
    return " ".join(s.split()[::-1])`
                },
                {
                    id: 'find-all-duplicates-in-an-array',
                    name: '19. Find All Duplicates in an Array',
                    description: 'Find elements appearing twice in O(n) time and O(1) extra space.',
                    syntax: 'Use values as indices and mark those positions as negative to flag a "visit."',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Array mapping',
                    isProblem: true,
                    solutionCode: `def findDuplicates(nums):
    res = []
    for n in nums:
        idx = abs(n) - 1
        if nums[idx] < 0: res.append(abs(n))
        nums[idx] *= -1
    return res`
                },
                {
                    id: 'spiral-matrix',
                    name: '20. Spiral Matrix',
                    description: 'Return 2D matrix elements in spiral order.',
                    syntax: 'Layer-by-layer traversal (top, right, bottom, left) while adjusting boundaries.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix traversal',
                    isProblem: true,
                    solutionCode: `def spiralOrder(matrix):
    res = []
    while matrix:
        res += matrix.pop(0) # Top
        if matrix and matrix[0]:
            for row in matrix: res.append(row.pop()) # Right
        if matrix:
            res += matrix.pop()[::-1] # Bottom
        if matrix and matrix[0]:
            for row in matrix[::-1]: res.append(row.pop(0)) # Left
    return res`
                }
            ]
        }
    ]
};

export const hashtablesProblems: Category = {
    id: 'hashtables-problems',
    title: 'Hashtables',
    isProblemCategory: true,
    subsections: [
        {
            id: 'hashtables-easy',
            title: 'Hashtables - Easy',
            methods: [
                {
                    id: 'contains-duplicate',
                    name: '1. Contains Duplicate',
                    description: 'Check if any value appears at least twice.',
                    syntax: 'A set provides O(1) lookup time to track seen numbers.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sets, Hashing',
                    isProblem: true,
                    solutionCode: `def containsDuplicate(nums):
    return len(nums) != len(set(nums))`
                },
                {
                    id: 'valid-anagram-hash',
                    name: '2. Valid Anagram',
                    description: 'Determine if s and t have the same characters with the same frequencies.',
                    syntax: 'Use Counter for a direct comparison.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def isAnagram(s, t):
    return Counter(s) == Counter(t)`
                },
                {
                    id: 'two-sum-hash',
                    name: '3. Two Sum',
                    description: 'Find indices of two numbers that add up to a target.',
                    syntax: 'Store {value: index} in a dictionary to find the complement instantly.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i`
                },
                {
                    id: 'first-unique-character',
                    name: '4. First Unique Character in a String',
                    description: 'Find the index of the first non-repeating character.',
                    syntax: 'Count frequencies, then iterate through the string to find the first count of 1.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing, String',
                    isProblem: true,
                    solutionCode: `def firstUniqChar(s):
    count = Counter(s)
    for i, char in enumerate(s):
        if count[char] == 1:
            return i
    return -1`
                },
                {
                    id: 'intersection-of-two-arrays',
                    name: '5. Intersection of Two Arrays',
                    description: 'Return an array of their intersection.',
                    syntax: 'Use set intersection &.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N + M)',
                    commonUseCases: 'Sets',
                    isProblem: true,
                    solutionCode: `def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`
                },
                {
                    id: 'happy-number',
                    name: '6. Happy Number',
                    description: 'Determine if a number eventually reaches 1 when replaced by the sum of squares of its digits.',
                    syntax: "Use a set to detect if you've entered an infinite loop.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Hashing, Math',
                    isProblem: true,
                    solutionCode: `def isHappy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        total = 0
        while n > 0:
            digit = n % 10
            total += digit * digit
            n //= 10
        n = total
    return n == 1`
                },
                {
                    id: 'isomorphic-strings',
                    name: '7. Isomorphic Strings',
                    description: 'Can characters in s be replaced to get t?',
                    syntax: 'Map s -> t and t -> s to ensure a 1-to-1 relationship.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing, Mapping',
                    isProblem: true,
                    solutionCode: `def isIsomorphic(s, t):
    return len(set(zip(s, t))) == len(set(s)) == len(set(t))`
                },
                {
                    id: 'word-pattern',
                    name: '8. Word Pattern',
                    description: 'Check if a string follows a pattern (e.g., "abba" -> "dog cat cat dog").',
                    syntax: 'Map pattern characters to words and words to pattern characters.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing, Mapping',
                    isProblem: true,
                    solutionCode: `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words): return False
    return len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words))`
                }
            ]
        },
        {
            id: 'hashtables-medium',
            title: 'Hashtables - Medium',
            methods: [
                {
                    id: 'group-anagrams-hash',
                    name: '9. Group Anagrams',
                    description: 'Group strings that are anagrams of each other.',
                    syntax: 'Use a sorted string or a character count tuple as a dictionary key.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * K log K)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def groupAnagrams(strs):
    res = defaultdict(list)
    for s in strs:
        res["".join(sorted(s))].append(s)
    return list(res.values())`
                },
                {
                    id: 'longest-substring-without-repeating-characters-hash',
                    name: '10. Longest Substring Without Repeating Characters',
                    description: 'Find the length of the longest unique substring.',
                    syntax: 'Sliding window with a dictionary to store the last seen position of characters.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sliding Window, Hashing',
                    isProblem: true,
                    solutionCode: `def lengthOfLongestSubstring(s):
    seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`
                },
                {
                    id: 'subarray-sum-equals-k',
                    name: '11. Subarray Sum Equals K',
                    description: 'Count total continuous subarrays that sum to k.',
                    syntax: 'Store prefix sums in a dictionary to find how many times current_sum - k has occurred.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Prefix Sum, Hashing',
                    isProblem: true,
                    solutionCode: `def subarraySum(nums, k):
    count = 0
    prefix_sums = {0: 1}
    cur_sum = 0
    for n in nums:
        cur_sum += n
        if cur_sum - k in prefix_sums:
            count += prefix_sums[cur_sum - k]
        prefix_sums[cur_sum] = prefix_sums.get(cur_sum, 0) + 1
    return count`
                },
                {
                    id: 'top-k-frequent-elements',
                    name: '12. Top K Frequent Elements',
                    description: 'Return the k most frequent elements.',
                    syntax: 'Use Counter and its most_common() method.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Hashing, Heap',
                    isProblem: true,
                    solutionCode: `def topKFrequent(nums, k):
    return [item for item, _ in Counter(nums).most_common(k)]`
                },
                {
                    id: 'copy-list-with-random-pointer',
                    name: '13. Copy List with Random Pointer',
                    description: 'Deep copy a linked list where nodes have a "random" pointer.',
                    syntax: 'Use a dictionary to map {original_node: copied_node}.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing, Linked List',
                    isProblem: true,
                    solutionCode: `def copyRandomList(head):
    old_to_new = {None: None}
    curr = head
    while curr:
        old_to_new[curr] = Node(curr.val)
        curr = curr.next
    curr = head
    while curr:
        copy = old_to_new[curr]
        copy.next = old_to_new[curr.next]
        copy.random = old_to_new[curr.random]
        curr = curr.next
    return old_to_new[head]`
                },
                {
                    id: '4sum-ii',
                    name: '14. 4Sum II',
                    description: 'Given four lists, find how many tuples sum to zero.',
                    syntax: 'Store all possible sums of the first two lists in a dictionary, then check against the second two.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `def fourSumCount(nums1, nums2, nums3, nums4):
    sums = Counter(a + b for a in nums1 for b in nums2)
    return sum(sums[-(c + d)] for c in nums3 for d in nums4)`
                },
                {
                    id: 'insert-delete-getrandom-o1',
                    name: '15. Insert Delete GetRandom O(1)',
                    description: 'Design a data structure with O(1) time for insert, remove, and getRandom.',
                    syntax: 'Use a list for GetRandom and a dictionary to store {value: list_index} for O(1) deletes.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Hashing, Array',
                    isProblem: true,
                    solutionCode: `import random
class RandomizedSet:
    def __init__(self):
        self.data, self.pos = [], {}
    def insert(self, val):
        if val in self.pos: return False
        self.pos[val] = len(self.data)
        self.data.append(val)
        return True
    def remove(self, val):
        if val not in self.pos: return False
        idx, last = self.pos[val], self.data[-1]
        self.data[idx], self.pos[last] = last, idx
        self.data.pop()
        del self.pos[val]
        return True
    def getRandom(self):
        return random.choice(self.data)`
                },
                {
                    id: 'find-all-anagrams-in-a-string',
                    name: '16. Find All Anagrams in a String',
                    description: "Find start indices of p's anagrams in s.",
                    syntax: 'Use a sliding window frequency counter.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sliding Window, Hashing',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def findAnagrams(s, p):
    result = []
    p_count = Counter(p)
    window = Counter()
    left = 0
    for right in range(len(s)):
        window[s[right]] += 1
        # Maintain window size
        if right - left + 1 > len(p):
            window[s[left]] -= 1
            if window[s[left]] == 0:
                del window[s[left]]
            left += 1
        # Compare counts
        if window == p_count:
            result.append(left)
    return result`
                },
                {
                    id: 'longest-consecutive-sequence',
                    name: '17. Longest Consecutive Sequence',
                    description: 'Longest sequence of consecutive integers.',
                    syntax: 'Put all numbers in a set. Only start counting if num - 1 is not in the set.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sets',
                    isProblem: true,
                    solutionCode: `def longestConsecutive(nums):
    num_set = set(nums)
    longest = 0
    for n in num_set:
        if n - 1 not in num_set:
            curr = n
            streak = 1
            while curr + 1 in num_set:
                curr += 1
                streak += 1
            longest = max(longest, streak)
    return longest`
                },
                {
                    id: 'continuous-subarray-sum',
                    name: '18. Continuous Subarray Sum',
                    description: 'Determine if subarray sum is a multiple of k.',
                    syntax: 'Use a dictionary to store {remainder: index}. If a remainder repeats, the sum between those indices is a multiple of k.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Prefix Sum, Hashing',
                    isProblem: true,
                    solutionCode: `def checkSubarraySum(nums, k):
    remainder_map = {0: -1}
    total = 0
    for i, n in enumerate(nums):
        total += n
        r = total % k
        if r in remainder_map:
            if i - remainder_map[r] > 1: return True
        else: remainder_map[r] = i
    return False`
                },
                {
                    id: 'custom-sort-string',
                    name: '19. Custom Sort String',
                    description: 'Sort s based on the order given in order.',
                    syntax: 'Count characters in s, then build the result string using the sequence in order.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N + M)',
                    commonUseCases: 'Hashing, Sorting',
                    isProblem: true,
                    solutionCode: `def customSortString(order, s):
    count = Counter(s)
    res = []
    for char in order:
        res.append(char * count.pop(char, 0))
    for char, freq in count.items():
        res.append(char * freq)
    return "".join(res)`
                },
                {
                    id: 'brick-wall',
                    name: '20. Brick Wall',
                    description: 'Least number of bricks crossed by a vertical line.',
                    syntax: 'Count the positions of "edges" between bricks. The vertical line should pass through the most common edge.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `def leastBricks(wall):
    edges = defaultdict(int)
    for row in wall:
        pos = 0
        for brick in row[:-1]: # Don't count the far right edge
            pos += brick
            edges[pos] += 1
    return len(wall) - max(edges.values(), default=0)`
                }
            ]
        }
    ]
};
