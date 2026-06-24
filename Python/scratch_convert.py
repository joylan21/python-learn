import json
import re

js_code = """
const problems = [
  {cat:"Finding Elements",title:"Second lowest number",desc:"Find the second smallest value in a list without sorting or min().",code:`def second_lowest(lst):
    first = second = float('inf')
    for n in lst:
        if n < first:
            second = first
            first = n
        elif n < second and n != first:
            second = n
    return second

print(second_lowest([4, 1, 7, 2, 9]))  # 2`},
  {cat:"Finding Elements",title:"Second highest number",desc:"Find the second largest value with a single pass.",code:`def second_highest(lst):
    first = second = float('-inf')
    for n in lst:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second

print(second_highest([4, 1, 7, 2, 9]))  # 7`},
  {cat:"Finding Elements",title:"Find all duplicates",desc:"Return a list of elements that appear more than once.",code:`def find_duplicates(lst):
    seen = {}
    dups = []
    for x in lst:
        seen[x] = seen.get(x, 0) + 1
    for x, c in seen.items():
        if c > 1:
            dups.append(x)
    return dups

print(find_duplicates([1,2,3,2,4,3,5]))  # [2, 3]`},
  {cat:"Finding Elements",title:"Find majority element",desc:"Find element appearing more than n/2 times.",code:`def majority_element(lst):
    count = {}
    for x in lst:
        count[x] = count.get(x, 0) + 1
        if count[x] > len(lst) // 2:
            return x
    return None

print(majority_element([3,3,4,2,3,3,3]))  # 3`},
  {cat:"Finding Elements",title:"First non-repeating element",desc:"Return the first element that appears exactly once.",code:`def first_unique(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    for x in lst:
        if freq[x] == 1:
            return x
    return None

print(first_unique([4, 5, 4, 6, 5, 7]))  # 6`},
  {cat:"Finding Elements",title:"Find missing number (1 to n)",desc:"Given a list of n-1 numbers from 1 to n, find the missing one.",code:`def missing_number(lst, n):
    expected = n * (n + 1) // 2
    return expected - sum(lst)

print(missing_number([1,2,4,5,6], 6))  # 3`},
  {cat:"Finding Elements",title:"Find kth smallest element",desc:"Return the kth smallest without full sort (selection approach).",code:`def kth_smallest(lst, k):
    arr = lst[:]
    for i in range(k):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr[k-1]

print(kth_smallest([7,2,5,1,9,3], 3))  # 3`},
  {cat:"Finding Elements",title:"Find kth largest element",desc:"Return the kth largest using a linear selection pass.",code:`def kth_largest(lst, k):
    arr = lst[:]
    for i in range(k):
        max_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] > arr[max_idx]:
                max_idx = j
        arr[i], arr[max_idx] = arr[max_idx], arr[i]
    return arr[k-1]

print(kth_largest([7,2,5,1,9,3], 2))  # 7`},
  {cat:"Finding Elements",title:"Find element closest to a target",desc:"Return the element whose value is nearest to a given target.",code:`def closest_to(lst, target):
    closest = lst[0]
    for x in lst[1:]:
        if abs(x - target) < abs(closest - target):
            closest = x
    return closest

print(closest_to([1, 5, 9, 14], 11))  # 9`},
  {cat:"Finding Elements",title:"Find all pairs summing to target",desc:"Return all pairs (i, j) where lst[i] + lst[j] == target.",code:`def pairs_with_sum(lst, target):
    seen = {}
    pairs = []
    for x in lst:
        comp = target - x
        if comp in seen:
            pairs.append((comp, x))
        seen[x] = True
    return pairs

print(pairs_with_sum([1,2,3,4,5], 6))  # [(2,4),(1,5)]`},
  {cat:"Sorting",title:"Bubble sort",desc:"Sort a list using the bubble sort algorithm.",code:`def bubble_sort(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([5,3,8,1,2]))  # [1,2,3,5,8]`},
  {cat:"Sorting",title:"Selection sort",desc:"Sort by repeatedly finding the minimum and placing it.",code:`def selection_sort(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([5,3,8,1,2]))  # [1,2,3,5,8]`},
  {cat:"Sorting",title:"Insertion sort",desc:"Sort by building a sorted portion from left to right.",code:`def insertion_sort(lst):
    arr = lst[:]
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr

print(insertion_sort([5,3,8,1,2]))  # [1,2,3,5,8]`},
  {cat:"Sorting",title:"Merge sort",desc:"Sort using divide-and-conquer merge sort.",code:`def merge_sort(lst):
    if len(lst) <= 1:
        return lst
    mid = len(lst) // 2
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([5,3,8,1,2]))  # [1,2,3,5,8]`},
  {cat:"Sorting",title:"Count sort (for non-negative ints)",desc:"Sort integers by counting occurrences.",code:`def count_sort(lst):
    if not lst: return []
    max_val = lst[0]
    for x in lst:
        if x > max_val: max_val = x
    counts = [0] * (max_val + 1)
    for x in lst:
        counts[x] += 1
    result = []
    for val, cnt in enumerate(counts):
        result.extend([val] * cnt)
    return result

print(count_sort([4,2,2,8,3,3,1]))  # [1,2,2,3,3,4,8]`},
  {cat:"Sorting",title:"Sort by frequency",desc:"Sort elements so most frequent appear first.",code:`def sort_by_freq(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if freq[arr[j]] < freq[arr[j+1]]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(sort_by_freq([1,1,2,3,3,3,2]))  # [3,3,3,1,1,2,2]`},
  {cat:"Sorting",title:"Sort list of tuples by second element",desc:"Sort a list of (name, score) pairs by score descending.",code:`def sort_by_second(lst):
    arr = lst[:]
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):
            if arr[j][1] < arr[j+1][1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

data = [("Alice",85),("Bob",92),("Carol",78)]
print(sort_by_second(data))  # [('Bob',92),('Alice',85),('Carol',78)]`},
  {cat:"Sorting",title:"Partition list around pivot",desc:"Rearrange so elements < pivot come before, > pivot after.",code:`def partition(lst, pivot):
    less = []
    equal = []
    greater = []
    for x in lst:
        if x < pivot: less.append(x)
        elif x == pivot: equal.append(x)
        else: greater.append(x)
    return less + equal + greater

print(partition([3,6,1,8,2,5], 4))  # [3,1,2,4,6,8,5]`},
  {cat:"Sorting",title:"Check if list is sorted",desc:"Return True if list is sorted ascending without sorted().",code:`def is_sorted(lst):
    for i in range(len(lst) - 1):
        if lst[i] > lst[i+1]:
            return False
    return True

print(is_sorted([1,2,3,4,5]))  # True
print(is_sorted([1,3,2,4]))    # False`},
  {cat:"Sorting",title:"Merge two sorted lists",desc:"Merge two already-sorted lists into one sorted list.",code:`def merge_sorted(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            result.append(a[i]); i += 1
        else:
            result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

print(merge_sorted([1,3,5],[2,4,6]))  # [1,2,3,4,5,6]`},
  {cat:"Manipulation",title:"Reverse a list in place",desc:"Reverse without using .reverse() or slicing.",code:`def reverse_inplace(lst):
    left, right = 0, len(lst) - 1
    while left < right:
        lst[left], lst[right] = lst[right], lst[left]
        left += 1; right -= 1
    return lst

lst = [1,2,3,4,5]
print(reverse_inplace(lst))  # [5,4,3,2,1]`},
  {cat:"Manipulation",title:"Rotate list left by k",desc:"Shift all elements left by k positions (wrap around).",code:`def rotate_left(lst, k):
    n = len(lst)
    k = k % n
    return lst[k:] + lst[:k]

print(rotate_left([1,2,3,4,5], 2))  # [3,4,5,1,2]`},
  {cat:"Manipulation",title:"Rotate list right by k",desc:"Shift all elements right by k positions.",code:`def rotate_right(lst, k):
    n = len(lst)
    k = k % n
    return lst[n-k:] + lst[:n-k]

print(rotate_right([1,2,3,4,5], 2))  # [4,5,1,2,3]`},
  {cat:"Manipulation",title:"Remove all duplicates (keep order)",desc:"Remove duplicates while preserving first-occurrence order.",code:`def remove_duplicates(lst):
    seen = {}
    result = []
    for x in lst:
        if x not in seen:
            seen[x] = True
            result.append(x)
    return result

print(remove_duplicates([1,2,3,2,4,1,5]))  # [1,2,3,4,5]`},
  {cat:"Manipulation",title:"Flatten nested list (one level)",desc:"Flatten a list of lists into a single list.",code:`def flatten(lst):
    result = []
    for sublist in lst:
        for item in sublist:
            result.append(item)
    return result

print(flatten([[1,2],[3,4],[5]]))  # [1,2,3,4,5]`},
  {cat:"Manipulation",title:"Deep flatten (any depth)",desc:"Flatten arbitrarily nested lists.",code:`def deep_flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(deep_flatten(item))
        else:
            result.append(item)
    return result

print(deep_flatten([1,[2,[3,4]],[5,[6]]]))  # [1,2,3,4,5,6]`},
  {cat:"Manipulation",title:"Chunk list into groups of n",desc:"Split a list into sublists each of size n.",code:`def chunk(lst, n):
    result = []
    for i in range(0, len(lst), n):
        result.append(lst[i:i+n])
    return result

print(chunk([1,2,3,4,5,6,7], 3))  # [[1,2,3],[4,5,6],[7]]`},
  {cat:"Manipulation",title:"Interleave two lists",desc:"Merge two lists alternating elements.",code:`def interleave(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        result.append(a[i]); i += 1
        result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

print(interleave([1,3,5],[2,4,6]))  # [1,2,3,4,5,6]`},
  {cat:"Manipulation",title:"Move all zeros to end",desc:"Move all zeros to the end while keeping order of others.",code:`def zeros_to_end(lst):
    result = [x for x in lst if x != 0]
    result.extend([0] * (len(lst) - len(result)))
    return result

print(zeros_to_end([1,0,3,0,5,0]))  # [1,3,5,0,0,0]`},
  {cat:"Manipulation",title:"Remove element by value (all occurrences)",desc:"Remove every occurrence of a value without .remove().",code:`def remove_all(lst, val):
    return [x for x in lst if x != val]

print(remove_all([1,2,3,2,4,2], 2))  # [1,3,4]`},
  {cat:"Manipulation",title:"Insert at every nth position",desc:"Insert a value after every n elements.",code:`def insert_every_n(lst, val, n):
    result = []
    for i, x in enumerate(lst):
        result.append(x)
        if (i + 1) % n == 0:
            result.append(val)
    return result

print(insert_every_n([1,2,3,4,5,6], 0, 2))  # [1,2,0,3,4,0,5,6]`},
  {cat:"Statistics",title:"Compute the mean",desc:"Calculate the average of a list manually.",code:`def mean(lst):
    total = 0
    for x in lst:
        total += x
    return total / len(lst)

print(mean([1,2,3,4,5]))  # 3.0`},
  {cat:"Statistics",title:"Compute the median",desc:"Find the middle value (or avg of two middle values).",code:`def median(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    mid = n // 2
    return arr[mid] if n % 2 else (arr[mid-1] + arr[mid]) / 2

print(median([3,1,4,1,5]))  # 3`},
  {cat:"Statistics",title:"Compute the mode",desc:"Return the most frequently occurring element.",code:`def mode(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    max_count = 0
    result = lst[0]
    for x, c in freq.items():
        if c > max_count:
            max_count = c; result = x
    return result

print(mode([1,2,2,3,3,3,4]))  # 3`},
  {cat:"Statistics",title:"Compute range (max - min)",desc:"Return the difference between max and min values.",code:`def list_range(lst):
    lo = hi = lst[0]
    for x in lst[1:]:
        if x < lo: lo = x
        if x > hi: hi = x
    return hi - lo

print(list_range([3,7,1,9,4]))  # 8`},
  {cat:"Statistics",title:"Compute variance",desc:"Calculate the population variance of a list.",code:`def variance(lst):
    n = len(lst)
    avg = sum(lst) / n
    return sum((x - avg) ** 2 for x in lst) / n

print(variance([2,4,4,4,5,5,7,9]))  # 4.0`},
  {cat:"Statistics",title:"Running cumulative sum",desc:"Return a new list where each element is sum up to that index.",code:`def cumulative_sum(lst):
    result = []
    total = 0
    for x in lst:
        total += x
        result.append(total)
    return result

print(cumulative_sum([1,2,3,4,5]))  # [1,3,6,10,15]`},
  {cat:"Statistics",title:"Running maximum",desc:"At each position, track the maximum seen so far.",code:`def running_max(lst):
    result = []
    cur_max = lst[0]
    for x in lst:
        if x > cur_max: cur_max = x
        result.append(cur_max)
    return result

print(running_max([3,1,4,1,5,9,2]))  # [3,3,4,4,5,9,9]`},
  {cat:"Statistics",title:"Count elements greater than average",desc:"Count how many elements exceed the list mean.",code:`def count_above_avg(lst):
    avg = sum(lst) / len(lst)
    return sum(1 for x in lst if x > avg)

print(count_above_avg([1,2,3,4,10]))  # 2`},
  {cat:"Statistics",title:"Normalize list to 0-1 range",desc:"Scale values so the minimum becomes 0 and max becomes 1.",code:`def normalize(lst):
    lo = lst[0]; hi = lst[0]
    for x in lst:
        if x < lo: lo = x
        if x > hi: hi = x
    span = hi - lo
    return [(x - lo) / span for x in lst]

print(normalize([2,4,6,8,10]))  # [0.0,0.25,0.5,0.75,1.0]`},
  {cat:"Statistics",title:"Moving average (window k)",desc:"Compute moving average of the list with window size k.",code:`def moving_avg(lst, k):
    result = []
    for i in range(len(lst) - k + 1):
        window = lst[i:i+k]
        result.append(sum(window) / k)
    return result

print(moving_avg([1,2,3,4,5,6], 3))  # [2.0,3.0,4.0,5.0]`},
  {cat:"Searching",title:"Linear search (return index)",desc:"Find the index of the first occurrence of a value.",code:`def linear_search(lst, target):
    for i in range(len(lst)):
        if lst[i] == target:
            return i
    return -1

print(linear_search([4,2,7,1,9], 7))  # 2`},
  {cat:"Searching",title:"Binary search (sorted list)",desc:"Search a sorted list using binary search.",code:`def binary_search(lst, target):
    lo, hi = 0, len(lst) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if lst[mid] == target: return mid
        elif lst[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1

print(binary_search([1,3,5,7,9,11], 7))  # 3`},
  {cat:"Searching",title:"Count occurrences of a value",desc:"Count how many times a value appears.",code:`def count_occurrences(lst, val):
    count = 0
    for x in lst:
        if x == val:
            count += 1
    return count

print(count_occurrences([1,2,3,2,4,2], 2))  # 3`},
  {cat:"Searching",title:"Find all indices of a value",desc:"Return list of every index where value occurs.",code:`def all_indices(lst, val):
    return [i for i, x in enumerate(lst) if x == val]

print(all_indices([1,2,3,2,4,2], 2))  # [1,3,5]`},
  {cat:"Searching",title:"Check if sublist exists",desc:"Return True if one list appears as a contiguous sublist of another.",code:`def contains_sublist(lst, sub):
    n, m = len(lst), len(sub)
    for i in range(n - m + 1):
        if lst[i:i+m] == sub:
            return True
    return False

print(contains_sublist([1,2,3,4,5], [3,4]))  # True`},
  {cat:"Searching",title:"Find index of first element satisfying condition",desc:"Return the first index where a condition is met.",code:`def find_first(lst, condition):
    for i, x in enumerate(lst):
        if condition(x):
            return i
    return -1

print(find_first([1,3,4,7,2], lambda x: x % 2 == 0))  # 2`},
  {cat:"Searching",title:"Find longest increasing subsequence length",desc:"Find the length of the longest strictly increasing subsequence.",code:`def lis_length(lst):
    n = len(lst)
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if lst[j] < lst[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    best = 0
    for x in dp:
        if x > best: best = x
    return best

print(lis_length([10,9,2,5,3,7,101,18]))  # 4`},
  {cat:"Searching",title:"Intersection of two lists",desc:"Return elements that appear in both lists.",code:`def intersection(a, b):
    set_b = {}
    for x in b: set_b[x] = True
    return [x for x in a if x in set_b]

print(intersection([1,2,3,4],[2,4,6,8]))  # [2,4]`},
  {cat:"Searching",title:"Union of two lists (no duplicates)",desc:"Combine two lists keeping only unique values.",code:`def union(a, b):
    seen = {}
    result = []
    for x in a + b:
        if x not in seen:
            seen[x] = True
            result.append(x)
    return result

print(union([1,2,3],[2,3,4,5]))  # [1,2,3,4,5]`},
  {cat:"Searching",title:"Difference of two lists",desc:"Return elements in a that are not in b.",code:`def difference(a, b):
    set_b = {}
    for x in b: set_b[x] = True
    return [x for x in a if x not in set_b]

print(difference([1,2,3,4,5],[2,4]))  # [1,3,5]`},
  {cat:"Sublist / Window",title:"Maximum subarray sum (Kadane's)",desc:"Find the contiguous subarray with the largest sum.",code:`def max_subarray(lst):
    max_sum = cur = lst[0]
    for x in lst[1:]:
        cur = x if x > cur + x else cur + x
        if cur > max_sum: max_sum = cur
    return max_sum

print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6`},
  {cat:"Sublist / Window",title:"Minimum subarray sum",desc:"Find the contiguous subarray with the smallest sum.",code:`def min_subarray(lst):
    min_sum = cur = lst[0]
    for x in lst[1:]:
        cur = x if x < cur + x else cur + x
        if cur < min_sum: min_sum = cur
    return min_sum

print(min_subarray([2,-3,4,-1,-2,1,-5,4]))  # -6`},
  {cat:"Sublist / Window",title:"Subarray with given sum",desc:"Find start and end indices of contiguous subarray summing to target.",code:`def subarray_with_sum(lst, target):
    start = total = 0
    for end, x in enumerate(lst):
        total += x
        while total > target and start < end:
            total -= lst[start]; start += 1
        if total == target:
            return (start, end)
    return None

print(subarray_with_sum([1,4,20,3,10,5], 33))  # (2, 4)`},
  {cat:"Sublist / Window",title:"Max sum of k consecutive elements",desc:"Find the maximum sum of any window of size k.",code:`def max_k_sum(lst, k):
    window = sum(lst[:k])
    best = window
    for i in range(k, len(lst)):
        window += lst[i] - lst[i-k]
        if window > best: best = window
    return best

print(max_k_sum([1,4,2,9,7,3,5], 3))  # 18`},
  {cat:"Sublist / Window",title:"Longest sublist with distinct elements",desc:"Find the length of longest contiguous sublist with all unique elements.",code:`def longest_unique(lst):
    seen = {}
    start = best = 0
    for end, x in enumerate(lst):
        if x in seen and seen[x] >= start:
            start = seen[x] + 1
        seen[x] = end
        if end - start + 1 > best:
            best = end - start + 1
    return best

print(longest_unique([1,2,1,3,4,2,3]))  # 4`},
  {cat:"Sublist / Window",title:"All contiguous sublists",desc:"Generate every contiguous sublist of a list.",code:`def all_sublists(lst):
    n = len(lst)
    result = []
    for i in range(n):
        for j in range(i+1, n+1):
            result.append(lst[i:j])
    return result

print(all_sublists([1,2,3]))
# [[1],[1,2],[1,2,3],[2],[2,3],[3]]`},
  {cat:"Sublist / Window",title:"Product of array except self",desc:"For each position, compute product of all other elements (no division).",code:`def product_except_self(lst):
    n = len(lst)
    left = [1] * n
    right = [1] * n
    for i in range(1, n):
        left[i] = left[i-1] * lst[i-1]
    for i in range(n-2, -1, -1):
        right[i] = right[i+1] * lst[i+1]
    return [left[i] * right[i] for i in range(n)]

print(product_except_self([1,2,3,4]))  # [24,12,8,6]`},
  {cat:"Sublist / Window",title:"Longest consecutive sequence length",desc:"Find length of longest sequence of consecutive integers.",code:`def longest_consecutive(lst):
    num_set = {}
    for x in lst: num_set[x] = True
    best = 0
    for x in num_set:
        if x - 1 not in num_set:
            cur = x; length = 1
            while cur + 1 in num_set:
                cur += 1; length += 1
            if length > best: best = length
    return best

print(longest_consecutive([100,4,200,1,3,2]))  # 4`},
  {cat:"Sublist / Window",title:"Sliding window minimum",desc:"For each window of size k, find the minimum value.",code:`def sliding_min(lst, k):
    return [min(lst[i:i+k]) for i in range(len(lst)-k+1)]

print(sliding_min([1,3,1,2,0,5], 3))  # [1,1,0,0]`},
  {cat:"Sublist / Window",title:"Two sum (return indices)",desc:"Find two indices such that their values add to target.",code:`def two_sum(lst, target):
    seen = {}
    for i, x in enumerate(lst):
        comp = target - x
        if comp in seen:
            return (seen[comp], i)
        seen[x] = i
    return None

print(two_sum([2,7,11,15], 9))  # (0, 1)`},
  {cat:"Matrix / 2D",title:"Transpose a 2D matrix",desc:"Swap rows and columns of a matrix.",code:`def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    return [[matrix[r][c] for r in range(rows)] for c in range(cols)]

m = [[1,2,3],[4,5,6]]
print(transpose(m))  # [[1,4],[2,5],[3,6]]`},
  {cat:"Matrix / 2D",title:"Flatten 2D list to 1D",desc:"Convert a list of lists into a single flat list.",code:`def flatten_2d(matrix):
    result = []
    for row in matrix:
        for x in row:
            result.append(x)
    return result

print(flatten_2d([[1,2],[3,4],[5,6]]))  # [1,2,3,4,5,6]`},
  {cat:"Matrix / 2D",title:"Row sums of a matrix",desc:"Return a list of sums for each row.",code:`def row_sums(matrix):
    return [sum(row) for row in matrix]

print(row_sums([[1,2,3],[4,5,6],[7,8,9]]))  # [6,15,24]`},
  {cat:"Matrix / 2D",title:"Column sums of a matrix",desc:"Return a list of sums for each column.",code:`def col_sums(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    return [sum(matrix[r][c] for r in range(rows)) for c in range(cols)]

print(col_sums([[1,2,3],[4,5,6]]))  # [5,7,9]`},
  {cat:"Matrix / 2D",title:"Spiral order traversal",desc:"Return elements of a matrix in spiral (clockwise) order.",code:`def spiral_order(matrix):
    result = []
    while matrix:
        result += matrix.pop(0)
        matrix = list(zip(*matrix))[::-1]
    return result

m = [[1,2,3],[4,5,6],[7,8,9]]
print(spiral_order(m))  # [1,2,3,6,9,8,7,4,5]`},
  {cat:"Matrix / 2D",title:"Rotate matrix 90° clockwise",desc:"Rotate an n×n matrix 90 degrees clockwise in place.",code:`def rotate_90(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
    return matrix

m = [[1,2,3],[4,5,6],[7,8,9]]
print(rotate_90(m))  # [[7,4,1],[8,5,2],[9,6,3]]`},
  {cat:"Matrix / 2D",title:"Diagonal sum of a matrix",desc:"Sum of both diagonals of a square matrix.",code:`def diagonal_sum(matrix):
    n = len(matrix)
    total = 0
    for i in range(n):
        total += matrix[i][i]          # main diagonal
        total += matrix[i][n-1-i]      # anti-diagonal
    if n % 2 == 1:
        total -= matrix[n//2][n//2]    # center counted twice
    return total

m = [[1,2,3],[4,5,6],[7,8,9]]
print(diagonal_sum(m))  # 25`},
  {cat:"Matrix / 2D",title:"Search in row-column sorted matrix",desc:"Search for a value in a matrix sorted by row and column.",code:`def search_matrix(matrix, target):
    if not matrix: return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target: return True
        elif matrix[row][col] > target: col -= 1
        else: row += 1
    return False

m = [[1,4,7],[2,5,8],[3,6,9]]
print(search_matrix(m, 5))  # True`},
  {cat:"Matrix / 2D",title:"Count islands (connected 1s)",desc:"Count the number of connected groups of 1s in a binary grid.",code:`def count_islands(grid):
    rows, cols = len(grid), len(grid[0])
    g = [row[:] for row in grid]
    def dfs(r, c):
        if r<0 or r>=rows or c<0 or c>=cols or g[r][c]!=1: return
        g[r][c] = 0
        for dr,dc in [(0,1),(1,0),(0,-1),(-1,0)]:
            dfs(r+dr, c+dc)
    count = 0
    for r in range(rows):
        for c in range(cols):
            if g[r][c] == 1:
                dfs(r,c); count += 1
    return count

grid = [[1,1,0,0],[0,1,0,1],[0,0,0,1],[1,0,0,0]]
print(count_islands(grid))  # 3`},
  {cat:"Matrix / 2D",title:"Zip two lists into pairs",desc:"Combine two lists into a list of paired tuples.",code:`def zip_lists(a, b):
    result = []
    for i in range(min(len(a), len(b))):
        result.append((a[i], b[i]))
    return result

print(zip_lists([1,2,3],['a','b','c']))
# [(1,'a'),(2,'b'),(3,'c')]`},
  {cat:"Strings in Lists",title:"Find longest string in a list",desc:"Return the longest string without using max().",code:`def longest_string(lst):
    longest = ""
    for s in lst:
        if len(s) > len(longest):
            longest = s
    return longest

print(longest_string(["cat","elephant","ant","bee"]))  # elephant`},
  {cat:"Strings in Lists",title:"Sort strings by length",desc:"Sort a list of strings by their length.",code:`def sort_by_length(lst):
    arr = lst[:]
    for i in range(len(arr)):
        for j in range(len(arr)-i-1):
            if len(arr[j]) > len(arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(sort_by_length(["banana","fig","apple","kiwi"]))
# ['fig','kiwi','apple','banana']`},
  {cat:"Strings in Lists",title:"Count words starting with a letter",desc:"Count strings that start with a given character.",code:`def count_starting_with(lst, char):
    return sum(1 for s in lst if s and s[0].lower() == char.lower())

words = ["apple","avocado","banana","apricot","cherry"]
print(count_starting_with(words, 'a'))  # 3`},
  {cat:"Strings in Lists",title:"Find anagram groups",desc:"Group words that are anagrams of each other.",code:`def group_anagrams(words):
    groups = {}
    for w in words:
        key = ''.join(sorted(w))
        if key not in groups:
            groups[key] = []
        groups[key].append(w)
    return list(groups.values())

print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
# [['eat','tea','ate'],['tan','nat'],['bat']]`},
  {cat:"Strings in Lists",title:"Join list of words into sentence",desc:"Concatenate words with spaces without join().",code:`def words_to_sentence(words):
    result = ""
    for i, w in enumerate(words):
        if i > 0: result += " "
        result += w
    return result

print(words_to_sentence(["Hello","world","from","Python"]))
# Hello world from Python`},
  {cat:"Strings in Lists",title:"Filter strings containing substring",desc:"Keep only strings that contain a given substring.",code:`def filter_containing(lst, sub):
    result = []
    for s in lst:
        for i in range(len(s) - len(sub) + 1):
            if s[i:i+len(sub)] == sub:
                result.append(s)
                break
    return result

print(filter_containing(["apple","pineapple","apricot","grape"],"app"))
# ['apple','pineapple']`},
  {cat:"Strings in Lists",title:"Reverse each string in a list",desc:"Return a list with each string reversed.",code:`def reverse_strings(lst):
    result = []
    for s in lst:
        rev = ""
        for ch in reversed(s):
            rev += ch
        result.append(rev)
    return result

print(reverse_strings(["hello","world"]))  # ['olleh','dlrow']`},
  {cat:"Strings in Lists",title:"Capitalize first letter of each word",desc:"Title-case a list of strings without .title().",code:`def capitalize_each(lst):
    result = []
    for s in lst:
        if s:
            result.append(s[0].upper() + s[1:].lower())
        else:
            result.append(s)
    return result

print(capitalize_each(["hello","world","python"]))
# ['Hello','World','Python']`},
  {cat:"Strings in Lists",title:"Remove empty strings from list",desc:"Filter out empty and whitespace-only strings.",code:`def remove_empty(lst):
    result = []
    for s in lst:
        stripped = s.strip()
        if stripped:
            result.append(s)
    return result

print(remove_empty(["hi","","  ","there",""]))
# ['hi','there']`},
  {cat:"Strings in Lists",title:"Find strings that are palindromes",desc:"Return all strings in the list that read the same forwards and backwards.",code:`def palindromes(lst):
    result = []
    for s in lst:
        rev = s[::-1]
        if s == rev:
            result.append(s)
    return result

print(palindromes(["racecar","hello","level","world","noon"]))
# ['racecar','level','noon']`},
  {cat:"Advanced Logic",title:"Next greater element for each position",desc:"For each element, find the next larger value to its right.",code:`def next_greater(lst):
    n = len(lst)
    result = [-1] * n
    stack = []
    for i in range(n):
        while stack and lst[stack[-1]] < lst[i]:
            idx = stack.pop()
            result[idx] = lst[i]
        stack.append(i)
    return result

print(next_greater([4,5,2,10,8]))  # [5,10,10,-1,-1]`},
  {cat:"Advanced Logic",title:"Stock buy-sell for max profit (one trade)",desc:"Find max profit from one buy and one sell.",code:`def max_profit(prices):
    if len(prices) < 2: return 0
    min_price = prices[0]
    max_p = 0
    for p in prices[1:]:
        max_p = max(max_p, p - min_price)
        min_price = min(min_price, p)
    return max_p

print(max_profit([7,1,5,3,6,4]))  # 5`},
  {cat:"Advanced Logic",title:"Stock buy-sell max profit (many trades)",desc:"Sum all positive differences for unlimited trades.",code:`def max_profit_multi(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit

print(max_profit_multi([7,1,5,3,6,4]))  # 7`},
  {cat:"Advanced Logic",title:"Trapping rainwater",desc:"Calculate total water trapped between elevation bars.",code:`def trap_water(heights):
    n = len(heights)
    left_max = [0]*n; right_max = [0]*n
    left_max[0] = heights[0]
    for i in range(1,n):
        left_max[i] = max(left_max[i-1], heights[i])
    right_max[n-1] = heights[n-1]
    for i in range(n-2,-1,-1):
        right_max[i] = max(right_max[i+1], heights[i])
    return sum(min(left_max[i],right_max[i])-heights[i] for i in range(n))

print(trap_water([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6`},
  {cat:"Advanced Logic",title:"Three sum (find triplets summing to 0)",desc:"Find all unique triplets that sum to zero.",code:`def three_sum(lst):
    arr = sorted(lst)
    result = []
    for i in range(len(arr)-2):
        if i > 0 and arr[i] == arr[i-1]: continue
        lo, hi = i+1, len(arr)-1
        while lo < hi:
            s = arr[i] + arr[lo] + arr[hi]
            if s == 0:
                result.append([arr[i], arr[lo], arr[hi]])
                while lo < hi and arr[lo]==arr[lo+1]: lo+=1
                while lo < hi and arr[hi]==arr[hi-1]: hi-=1
                lo+=1; hi-=1
            elif s < 0: lo+=1
            else: hi-=1
    return result

print(three_sum([-1,0,1,2,-1,-4]))
# [[-1,-1,2],[-1,0,1]]`},
  {cat:"Advanced Logic",title:"Longest common subsequence length",desc:"Find the length of the longest common subsequence of two lists.",code:`def lcs_length(a, b):
    m, n = len(a), len(b)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = dp[i-1][j] if dp[i-1][j] > dp[i][j-1] else dp[i][j-1]
    return dp[m][n]

print(lcs_length([1,3,4,5,6,7,8],[1,3,5,7,9]))  # 4`},
  {cat:"Advanced Logic",title:"Coin change (minimum coins)",desc:"Find minimum number of coins needed to make a target amount.",code:`def min_coins(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount+1):
        for c in coins:
            if c <= i and dp[i-c] + 1 < dp[i]:
                dp[i] = dp[i-c] + 1
    return dp[amount] if dp[amount] != float('inf') else -1

print(min_coins([1,5,6,9], 11))  # 2`},
  {cat:"Advanced Logic",title:"Kadane's max product subarray",desc:"Find the maximum product of any contiguous subarray.",code:`def max_product_subarray(lst):
    max_p = min_p = result = lst[0]
    for x in lst[1:]:
        candidates = (x, max_p*x, min_p*x)
        max_p = max(candidates)
        min_p = min(candidates)
        if max_p > result: result = max_p
    return result

print(max_product_subarray([2,3,-2,4]))  # 6`},
  {cat:"Advanced Logic",title:"Dutch national flag problem",desc:"Sort an array of 0s, 1s, and 2s in one pass.",code:`def dutch_flag(lst):
    arr = lst[:]
    lo = mid = 0; hi = len(arr)-1
    while mid <= hi:
        if arr[mid] == 0:
            arr[lo], arr[mid] = arr[mid], arr[lo]
            lo+=1; mid+=1
        elif arr[mid] == 1:
            mid+=1
        else:
            arr[mid], arr[hi] = arr[hi], arr[mid]
            hi-=1
    return arr

print(dutch_flag([2,0,2,1,1,0]))  # [0,0,1,1,2,2]`},
  {cat:"Advanced Logic",title:"Jump game — can reach end?",desc:"Given jump lengths at each position, can you reach the last index?",code:`def can_jump(lst):
    max_reach = 0
    for i, jump in enumerate(lst):
        if i > max_reach: return False
        if i + jump > max_reach:
            max_reach = i + jump
    return True

print(can_jump([2,3,1,1,4]))  # True
print(can_jump([3,2,1,0,4]))  # False`},
  {cat:"Advanced Logic",title:"Minimum jumps to reach end",desc:"Fewest jumps needed to reach the last index.",code:`def min_jumps(lst):
    jumps = cur_end = farthest = 0
    for i in range(len(lst)-1):
        if i + lst[i] > farthest:
            farthest = i + lst[i]
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps

print(min_jumps([2,3,1,1,4]))  # 2`},
  {cat:"Advanced Logic",title:"Frequency map of a list",desc:"Build a dictionary counting how many times each element appears.",code:`def freq_map(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    return freq

print(freq_map([1,2,3,2,1,2,3,3,3]))
# {1:2, 2:3, 3:4}`},
  {cat:"Advanced Logic",title:"Top k frequent elements",desc:"Return the k elements with highest frequency.",code:`def top_k_frequent(lst, k):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    items = list(freq.items())
    items.sort(key=lambda x: -x[1])
    return [x[0] for x in items[:k]]

print(top_k_frequent([1,1,1,2,2,3], 2))  # [1,2]`},
  {cat:"Advanced Logic",title:"Rearrange positives and negatives alternately",desc:"Arrange list so positives and negatives alternate (starting with positive).",code:`def alternate_pos_neg(lst):
    pos = [x for x in lst if x >= 0]
    neg = [x for x in lst if x < 0]
    result = []
    i = j = 0
    while i < len(pos) and j < len(neg):
        result.append(pos[i]); i+=1
        result.append(neg[j]); j+=1
    result.extend(pos[i:])
    result.extend(neg[j:])
    return result

print(alternate_pos_neg([1,-2,3,-4,5,-1,6]))
# [1,-2,3,-4,5,-1,6]`},
  {cat:"Advanced Logic",title:"Pascal's triangle (n rows)",desc:"Generate the first n rows of Pascal's triangle.",code:`def pascals_triangle(n):
    triangle = []
    for i in range(n):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle

for row in pascals_triangle(5):
    print(row)
# [1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]`},
  {cat:"Advanced Logic",title:"List power set",desc:"Generate all subsets of a list.",code:`def power_set(lst):
    result = [[]]
    for x in lst:
        result = result + [subset + [x] for subset in result]
    return result

print(power_set([1,2,3]))
# [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`},
  {cat:"Advanced Logic",title:"Generate all permutations",desc:"Return every permutation of a list.",code:`def permutations(lst):
    if len(lst) <= 1: return [lst[:]]
    result = []
    for i in range(len(lst)):
        rest = lst[:i] + lst[i+1:]
        for p in permutations(rest):
            result.append([lst[i]] + p)
    return result

print(permutations([1,2,3]))
# [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`},
  {cat:"Advanced Logic",title:"Cartesian product of two lists",desc:"Return all pairs (a, b) where a ∈ A and b ∈ B.",code:`def cartesian_product(a, b):
    return [(x, y) for x in a for y in b]

print(cartesian_product([1,2],[3,4]))
# [(1,3),(1,4),(2,3),(2,4)]`},
  {cat:"Advanced Logic",title:"Find equilibrium index",desc:"Find index where sum of left elements equals sum of right elements.",code:`def equilibrium_index(lst):
    total = sum(lst)
    left_sum = 0
    for i, x in enumerate(lst):
        right_sum = total - left_sum - x
        if left_sum == right_sum:
            return i
        left_sum += x
    return -1

print(equilibrium_index([1,3,5,2,2]))  # 2`},
  {cat:"Advanced Logic",title:"Median of two sorted arrays",desc:"Find the overall median of two sorted lists.",code:`def median_two_sorted(a, b):
    merged = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            merged.append(a[i]); i+=1
        else:
            merged.append(b[j]); j+=1
    merged.extend(a[i:]); merged.extend(b[j:])
    n = len(merged)
    if n % 2:
        return merged[n//2]
    return (merged[n//2-1] + merged[n//2]) / 2

print(median_two_sorted([1,3],[2,4]))  # 2.5`},
  {cat:"Advanced Logic",title:"Longest bitonic subarray",desc:"Find length of longest subarray that first increases then decreases.",code:`def longest_bitonic(lst):
    n = len(lst)
    inc = [1]*n; dec = [1]*n
    for i in range(1,n):
        if lst[i] > lst[i-1]:
            inc[i] = inc[i-1]+1
    for i in range(n-2,-1,-1):
        if lst[i] > lst[i+1]:
            dec[i] = dec[i+1]+1
    best = 0
    for i in range(n):
        val = inc[i]+dec[i]-1
        if val > best: best = val
    return best

print(longest_bitonic([1,3,5,4,2,1,4]))  # 6`},
  {cat:"Advanced Logic",title:"Check if list can be partitioned into equal sum halves",desc:"Determine if a list can be split into two subsets with equal sum.",code:`def can_partition(lst):
    total = sum(lst)
    if total % 2: return False
    target = total // 2
    dp = {0}
    for x in lst:
        dp = dp | {s + x for s in dp}
    return target in dp

print(can_partition([1,5,11,5]))  # True
print(can_partition([1,2,3,5]))   # False`},
]
"""

# Extract the objects
import ast

def parse_objects(js):
    # Regex to find individual objects
    objects = []
    # It's a bit tricky to parse raw JS with backticks in python, so we will do some clean up
    # We will use re to find each block between {cat: and },
    
    pattern = r'\{cat:"(.*?)",title:"(.*?)",desc:"(.*?)",code:`(.*?)`\}'
    matches = re.finditer(pattern, js, re.DOTALL)
    for m in matches:
        cat = m.group(1)
        title = m.group(2)
        desc = m.group(3)
        code = m.group(4)
        objects.append({"cat": cat, "title": title, "desc": desc, "code": code})
    return objects

parsed = parse_objects(js_code)

def slugify(s):
    return re.sub(r'[^a-zA-Z0-9]+', '-', s.lower()).strip('-')

def get_time_complexity(code, title):
    # simple heuristic
    code_lower = code.lower()
    title_lower = title.lower()
    if 'sort' in title_lower and 'bubble' in title_lower: return 'O(N^2)'
    if 'sort' in title_lower and 'selection' in title_lower: return 'O(N^2)'
    if 'sort' in title_lower and 'insertion' in title_lower: return 'O(N^2)'
    if 'sort' in title_lower and 'merge' in title_lower: return 'O(N log N)'
    if 'binary search' in title_lower: return 'O(log N)'
    if 'power set' in title_lower: return 'O(2^N)'
    if 'permutations' in title_lower: return 'O(N!)'
    if 'matrix' in title_lower or '2d' in title_lower: return 'O(M*N)'
    if 'for i in range' in code and 'for j in range' in code:
        # Check if they are nested
        if code.find('for j in range') > code.find('for i in range'):
            return 'O(N^2)'
    if 'while' in code and 'for' in code: return 'O(N)' # Or maybe O(N^2) depending on nesting
    return 'O(N)'

def get_common_uses(cat, code, title):
    uses = [cat]
    title_lower = title.lower()
    if 'list comprehension' in code: uses.append('List Comprehension')
    if 'sort' in title_lower: uses.append('Sorting')
    if 'dp' in code.lower() or 'memo' in code.lower() or 'dynamic' in title_lower: uses.append('Dynamic Programming')
    if 'stack' in code.lower(): uses.append('Stack')
    if 'two pointers' in title_lower or ('lo' in code and 'hi' in code) or ('left' in code and 'right' in code): uses.append('Two Pointers')
    if 'set' in code or 'hash' in code or '{}' in code: uses.append('Hashing')
    if 'sliding window' in title_lower or 'window' in title_lower: uses.append('Sliding Window')
    return ', '.join(uses)

# Group by category
grouped = {}
for p in parsed:
    cat = p['cat']
    if cat not in grouped:
        grouped[cat] = []
    grouped[cat].append(p)

ts_output = """import type { Category } from './types';

export const listOperationsProblems: Category = {
    id: 'list-operations-problems',
    title: 'List Operations',
    isProblemCategory: true,
    subsections: [
"""

for cat, probs in grouped.items():
    ts_output += f"""        {{
            id: '{slugify(cat)}',
            title: '{cat}',
            methods: [
"""
    for i, p in enumerate(probs):
        title = p['title'].replace("'", "\\'")
        desc = p['desc'].replace("'", "\\'")
        code = p['code'].replace('`', '\\`').replace('$', '\\$')
        
        tc = get_time_complexity(p['code'], p['title'])
        uses = get_common_uses(cat, p['code'], p['title'])
        syntax = "Implementation approach based on problem description."
        if "without sorting" in desc: syntax = "Use one or two passes to find elements."
        elif "hash" in desc.lower() or "dictionary" in desc.lower(): syntax = "Use a dictionary to keep track of elements/counts."
        elif "two pointers" in title.lower(): syntax = "Use two pointers converging from both ends."
        syntax = syntax.replace("'", "\\'")

        
        ts_output += f"""                {{
                    id: '{slugify(title)}',
                    name: '{i+1}. {title}',
                    description: '{desc}',
                    syntax: '{syntax}',
                    example: '',
                    output: '',
                    mutates: False,
                    timeComplexity: '{tc}',
                    commonUseCases: '{uses}',
                    isProblem: true,
                    solutionCode: `{code}`
                }},
"""
    ts_output = ts_output.rstrip(',\n') + '\n'
    ts_output += """            ]
        },
"""

ts_output = ts_output.rstrip(',\n') + '\n'
ts_output += """    ]
};
"""

# write back to fix mutates: False to mutates: false
ts_output = ts_output.replace('mutates: False', 'mutates: false')

with open('d:\\Learnings\\Webpages\\Python\\src\\data\\listOperationsProblems.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)
