import type { Category } from './types';

export const listOperationsProblems: Category = {
    id: 'list-operations-problems',
    title: 'List Operations',
    isProblemCategory: true,
    subsections: [
        {
            id: 'finding-elements',
            title: 'Finding Elements',
            methods: [
                {
                    id: 'second-lowest-number',
                    name: '1. Second lowest number',
                    description: 'Find the second smallest value in a list without sorting or min().',
                    syntax: 'Use one or two passes to find elements.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def second_lowest(lst):
    first = second = float('inf')
    for n in lst:
        if n < first:
            second = first
            first = n
        elif n < second and n != first:
            second = n
    return second

print(second_lowest([4, 1, 7, 2, 9]))  # 2`
                },
                {
                    id: 'second-highest-number',
                    name: '2. Second highest number',
                    description: 'Find the second largest value with a single pass.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements, Two Pointers',
                    isProblem: true,
                    solutionCode: `def second_highest(lst):
    first = second = float('-inf')
    for n in lst:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second

print(second_highest([4, 1, 7, 2, 9]))  # 7`
                },
                {
                    id: 'find-all-duplicates',
                    name: '3. Find all duplicates',
                    description: 'Return a list of elements that appear more than once.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements, Hashing',
                    isProblem: true,
                    solutionCode: `def find_duplicates(lst):
    seen = {}
    dups = []
    for x in lst:
        seen[x] = seen.get(x, 0) + 1
    for x, c in seen.items():
        if c > 1:
            dups.append(x)
    return dups

print(find_duplicates([1,2,3,2,4,3,5]))  # [2, 3]`
                },
                {
                    id: 'find-majority-element',
                    name: '4. Find majority element',
                    description: 'Find element appearing more than n/2 times.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements, Hashing',
                    isProblem: true,
                    solutionCode: `def majority_element(lst):
    count = {}
    for x in lst:
        count[x] = count.get(x, 0) + 1
        if count[x] > len(lst) // 2:
            return x
    return None

print(majority_element([3,3,4,2,3,3,3]))  # 3`
                },
                {
                    id: 'first-non-repeating-element',
                    name: '5. First non-repeating element',
                    description: 'Return the first element that appears exactly once.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements, Hashing',
                    isProblem: true,
                    solutionCode: `def first_unique(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    for x in lst:
        if freq[x] == 1:
            return x
    return None

print(first_unique([4, 5, 4, 6, 5, 7]))  # 6`
                },
                {
                    id: 'find-missing-number-1-to-n',
                    name: '6. Find missing number (1 to n)',
                    description: 'Given a list of n-1 numbers from 1 to n, find the missing one.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def missing_number(lst, n):
    expected = n * (n + 1) // 2
    return expected - sum(lst)

print(missing_number([1,2,4,5,6], 6))  # 3`
                },
                {
                    id: 'find-kth-smallest-element',
                    name: '7. Find kth smallest element',
                    description: 'Return the kth smallest without full sort (selection approach).',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def kth_smallest(lst, k):
    arr = lst[:]
    for i in range(k):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr[k-1]

print(kth_smallest([7,2,5,1,9,3], 3))  # 3`
                },
                {
                    id: 'find-kth-largest-element',
                    name: '8. Find kth largest element',
                    description: 'Return the kth largest using a linear selection pass.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def kth_largest(lst, k):
    arr = lst[:]
    for i in range(k):
        max_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] > arr[max_idx]:
                max_idx = j
        arr[i], arr[max_idx] = arr[max_idx], arr[i]
    return arr[k-1]

print(kth_largest([7,2,5,1,9,3], 2))  # 7`
                },
                {
                    id: 'find-element-closest-to-a-target',
                    name: '9. Find element closest to a target',
                    description: 'Return the element whose value is nearest to a given target.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def closest_to(lst, target):
    closest = lst[0]
    for x in lst[1:]:
        if abs(x - target) < abs(closest - target):
            closest = x
    return closest

print(closest_to([1, 5, 9, 14], 11))  # 9`
                },
                {
                    id: 'find-all-pairs-summing-to-target',
                    name: '10. Find all pairs summing to target',
                    description: 'Return all pairs (i, j) where lst[i] + lst[j] == target.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements, Hashing',
                    isProblem: true,
                    solutionCode: `def pairs_with_sum(lst, target):
    seen = {}
    pairs = []
    for x in lst:
        comp = target - x
        if comp in seen:
            pairs.append((comp, x))
        seen[x] = True
    return pairs

print(pairs_with_sum([1,2,3,4,5], 6))  # [(2,4),(1,5)]`
                }
            ]
        },
        {
            id: 'sorting',
            title: 'Sorting',
            methods: [
                {
                    id: 'bubble-sort',
                    name: '1. Bubble sort',
                    description: 'Sort a list using the bubble sort algorithm.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def bubble_sort(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([5,3,8,1,2]))  # [1,2,3,5,8]`
                },
                {
                    id: 'selection-sort',
                    name: '2. Selection sort',
                    description: 'Sort by repeatedly finding the minimum and placing it.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def selection_sort(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([5,3,8,1,2]))  # [1,2,3,5,8]`
                },
                {
                    id: 'insertion-sort',
                    name: '3. Insertion sort',
                    description: 'Sort by building a sorted portion from left to right.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def insertion_sort(lst):
    arr = lst[:]
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr

print(insertion_sort([5,3,8,1,2]))  # [1,2,3,5,8]`
                },
                {
                    id: 'merge-sort',
                    name: '4. Merge sort',
                    description: 'Sort using divide-and-conquer merge sort.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting, Sorting, Two Pointers',
                    isProblem: true,
                    solutionCode: `def merge_sort(lst):
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

print(merge_sort([5,3,8,1,2]))  # [1,2,3,5,8]`
                },
                {
                    id: 'count-sort-for-non-negative-ints',
                    name: '5. Count sort (for non-negative ints)',
                    description: 'Sort integers by counting occurrences.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def count_sort(lst):
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

print(count_sort([4,2,2,8,3,3,1]))  # [1,2,2,3,3,4,8]`
                },
                {
                    id: 'sort-by-frequency',
                    name: '6. Sort by frequency',
                    description: 'Sort elements so most frequent appear first.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sorting, Sorting, Hashing',
                    isProblem: true,
                    solutionCode: `def sort_by_freq(lst):
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

print(sort_by_freq([1,1,2,3,3,3,2]))  # [3,3,3,1,1,2,2]`
                },
                {
                    id: 'sort-list-of-tuples-by-second-element',
                    name: '7. Sort list of tuples by second element',
                    description: 'Sort a list of (name, score) pairs by score descending.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def sort_by_second(lst):
    arr = lst[:]
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):
            if arr[j][1] < arr[j+1][1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

data = [("Alice",85),("Bob",92),("Carol",78)]
print(sort_by_second(data))  # [('Bob',92),('Alice',85),('Carol',78)]`
                },
                {
                    id: 'partition-list-around-pivot',
                    name: '8. Partition list around pivot',
                    description: 'Rearrange so elements < pivot come before, > pivot after.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def partition(lst, pivot):
    less = []
    equal = []
    greater = []
    for x in lst:
        if x < pivot: less.append(x)
        elif x == pivot: equal.append(x)
        else: greater.append(x)
    return less + equal + greater

print(partition([3,6,1,8,2,5], 4))  # [3,1,2,4,6,8,5]`
                },
                {
                    id: 'check-if-list-is-sorted',
                    name: '9. Check if list is sorted',
                    description: 'Return True if list is sorted ascending without sorted().',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def is_sorted(lst):
    for i in range(len(lst) - 1):
        if lst[i] > lst[i+1]:
            return False
    return True

print(is_sorted([1,2,3,4,5]))  # True
print(is_sorted([1,3,2,4]))    # False`
                },
                {
                    id: 'merge-two-sorted-lists',
                    name: '10. Merge two sorted lists',
                    description: 'Merge two already-sorted lists into one sorted list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting, Sorting',
                    isProblem: true,
                    solutionCode: `def merge_sorted(a, b):
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

print(merge_sorted([1,3,5],[2,4,6]))  # [1,2,3,4,5,6]`
                }
            ]
        },
        {
            id: 'manipulation',
            title: 'Manipulation',
            methods: [
                {
                    id: 'reverse-a-list-in-place',
                    name: '1. Reverse a list in place',
                    description: 'Reverse without using .reverse() or slicing.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation, Two Pointers',
                    isProblem: true,
                    solutionCode: `def reverse_inplace(lst):
    left, right = 0, len(lst) - 1
    while left < right:
        lst[left], lst[right] = lst[right], lst[left]
        left += 1; right -= 1
    return lst

lst = [1,2,3,4,5]
print(reverse_inplace(lst))  # [5,4,3,2,1]`
                },
                {
                    id: 'rotate-list-left-by-k',
                    name: '2. Rotate list left by k',
                    description: 'Shift all elements left by k positions (wrap around).',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def rotate_left(lst, k):
    n = len(lst)
    k = k % n
    return lst[k:] + lst[:k]

print(rotate_left([1,2,3,4,5], 2))  # [3,4,5,1,2]`
                },
                {
                    id: 'rotate-list-right-by-k',
                    name: '3. Rotate list right by k',
                    description: 'Shift all elements right by k positions.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def rotate_right(lst, k):
    n = len(lst)
    k = k % n
    return lst[n-k:] + lst[:n-k]

print(rotate_right([1,2,3,4,5], 2))  # [4,5,1,2,3]`
                },
                {
                    id: 'remove-all-duplicates-keep-order',
                    name: '4. Remove all duplicates (keep order)',
                    description: 'Remove duplicates while preserving first-occurrence order.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation, Hashing',
                    isProblem: true,
                    solutionCode: `def remove_duplicates(lst):
    seen = {}
    result = []
    for x in lst:
        if x not in seen:
            seen[x] = True
            result.append(x)
    return result

print(remove_duplicates([1,2,3,2,4,1,5]))  # [1,2,3,4,5]`
                },
                {
                    id: 'flatten-nested-list-one-level',
                    name: '5. Flatten nested list (one level)',
                    description: 'Flatten a list of lists into a single list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def flatten(lst):
    result = []
    for sublist in lst:
        for item in sublist:
            result.append(item)
    return result

print(flatten([[1,2],[3,4],[5]]))  # [1,2,3,4,5]`
                },
                {
                    id: 'deep-flatten-any-depth',
                    name: '6. Deep flatten (any depth)',
                    description: 'Flatten arbitrarily nested lists.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def deep_flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(deep_flatten(item))
        else:
            result.append(item)
    return result

print(deep_flatten([1,[2,[3,4]],[5,[6]]]))  # [1,2,3,4,5,6]`
                },
                {
                    id: 'chunk-list-into-groups-of-n',
                    name: '7. Chunk list into groups of n',
                    description: 'Split a list into sublists each of size n.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def chunk(lst, n):
    result = []
    for i in range(0, len(lst), n):
        result.append(lst[i:i+n])
    return result

print(chunk([1,2,3,4,5,6,7], 3))  # [[1,2,3],[4,5,6],[7]]`
                },
                {
                    id: 'interleave-two-lists',
                    name: '8. Interleave two lists',
                    description: 'Merge two lists alternating elements.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def interleave(a, b):
    result = []
    i = j = 0
    while i < len(a) and j < len(b):
        result.append(a[i]); i += 1
        result.append(b[j]); j += 1
    result.extend(a[i:])
    result.extend(b[j:])
    return result

print(interleave([1,3,5],[2,4,6]))  # [1,2,3,4,5,6]`
                },
                {
                    id: 'move-all-zeros-to-end',
                    name: '9. Move all zeros to end',
                    description: 'Move all zeros to the end while keeping order of others.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def zeros_to_end(lst):
    result = [x for x in lst if x != 0]
    result.extend([0] * (len(lst) - len(result)))
    return result

print(zeros_to_end([1,0,3,0,5,0]))  # [1,3,5,0,0,0]`
                },
                {
                    id: 'remove-element-by-value-all-occurrences',
                    name: '10. Remove element by value (all occurrences)',
                    description: 'Remove every occurrence of a value without .remove().',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def remove_all(lst, val):
    return [x for x in lst if x != val]

print(remove_all([1,2,3,2,4,2], 2))  # [1,3,4]`
                },
                {
                    id: 'insert-at-every-nth-position',
                    name: '11. Insert at every nth position',
                    description: 'Insert a value after every n elements.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def insert_every_n(lst, val, n):
    result = []
    for i, x in enumerate(lst):
        result.append(x)
        if (i + 1) % n == 0:
            result.append(val)
    return result

print(insert_every_n([1,2,3,4,5,6], 0, 2))  # [1,2,0,3,4,0,5,6]`
                }
            ]
        },
        {
            id: 'statistics',
            title: 'Statistics',
            methods: [
                {
                    id: 'compute-the-mean',
                    name: '1. Compute the mean',
                    description: 'Calculate the average of a list manually.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def mean(lst):
    total = 0
    for x in lst:
        total += x
    return total / len(lst)

print(mean([1,2,3,4,5]))  # 3.0`
                },
                {
                    id: 'compute-the-median',
                    name: '2. Compute the median',
                    description: 'Find the middle value (or avg of two middle values).',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def median(lst):
    arr = lst[:]
    n = len(arr)
    for i in range(n):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    mid = n // 2
    return arr[mid] if n % 2 else (arr[mid-1] + arr[mid]) / 2

print(median([3,1,4,1,5]))  # 3`
                },
                {
                    id: 'compute-the-mode',
                    name: '3. Compute the mode',
                    description: 'Return the most frequently occurring element.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics, Hashing',
                    isProblem: true,
                    solutionCode: `def mode(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    max_count = 0
    result = lst[0]
    for x, c in freq.items():
        if c > max_count:
            max_count = c; result = x
    return result

print(mode([1,2,2,3,3,3,4]))  # 3`
                },
                {
                    id: 'compute-range-max-min',
                    name: '4. Compute range (max - min)',
                    description: 'Return the difference between max and min values.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics, Two Pointers',
                    isProblem: true,
                    solutionCode: `def list_range(lst):
    lo = hi = lst[0]
    for x in lst[1:]:
        if x < lo: lo = x
        if x > hi: hi = x
    return hi - lo

print(list_range([3,7,1,9,4]))  # 8`
                },
                {
                    id: 'compute-variance',
                    name: '5. Compute variance',
                    description: 'Calculate the population variance of a list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def variance(lst):
    n = len(lst)
    avg = sum(lst) / n
    return sum((x - avg) ** 2 for x in lst) / n

print(variance([2,4,4,4,5,5,7,9]))  # 4.0`
                },
                {
                    id: 'running-cumulative-sum',
                    name: '6. Running cumulative sum',
                    description: 'Return a new list where each element is sum up to that index.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def cumulative_sum(lst):
    result = []
    total = 0
    for x in lst:
        total += x
        result.append(total)
    return result

print(cumulative_sum([1,2,3,4,5]))  # [1,3,6,10,15]`
                },
                {
                    id: 'running-maximum',
                    name: '7. Running maximum',
                    description: 'At each position, track the maximum seen so far.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def running_max(lst):
    result = []
    cur_max = lst[0]
    for x in lst:
        if x > cur_max: cur_max = x
        result.append(cur_max)
    return result

print(running_max([3,1,4,1,5,9,2]))  # [3,3,4,4,5,9,9]`
                },
                {
                    id: 'count-elements-greater-than-average',
                    name: '8. Count elements greater than average',
                    description: 'Count how many elements exceed the list mean.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def count_above_avg(lst):
    avg = sum(lst) / len(lst)
    return sum(1 for x in lst if x > avg)

print(count_above_avg([1,2,3,4,10]))  # 2`
                },
                {
                    id: 'normalize-list-to-0-1-range',
                    name: '9. Normalize list to 0-1 range',
                    description: 'Scale values so the minimum becomes 0 and max becomes 1.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics, Two Pointers',
                    isProblem: true,
                    solutionCode: `def normalize(lst):
    lo = lst[0]; hi = lst[0]
    for x in lst:
        if x < lo: lo = x
        if x > hi: hi = x
    span = hi - lo
    return [(x - lo) / span for x in lst]

print(normalize([2,4,6,8,10]))  # [0.0,0.25,0.5,0.75,1.0]`
                },
                {
                    id: 'moving-average-window-k',
                    name: '10. Moving average (window k)',
                    description: 'Compute moving average of the list with window size k.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics, Sliding Window',
                    isProblem: true,
                    solutionCode: `def moving_avg(lst, k):
    result = []
    for i in range(len(lst) - k + 1):
        window = lst[i:i+k]
        result.append(sum(window) / k)
    return result

print(moving_avg([1,2,3,4,5,6], 3))  # [2.0,3.0,4.0,5.0]`
                }
            ]
        },
        {
            id: 'searching',
            title: 'Searching',
            methods: [
                {
                    id: 'linear-search-return-index',
                    name: '1. Linear search (return index)',
                    description: 'Find the index of the first occurrence of a value.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def linear_search(lst, target):
    for i in range(len(lst)):
        if lst[i] == target:
            return i
    return -1

print(linear_search([4,2,7,1,9], 7))  # 2`
                },
                {
                    id: 'binary-search-sorted-list',
                    name: '2. Binary search (sorted list)',
                    description: 'Search a sorted list using binary search.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Searching, Sorting, Two Pointers',
                    isProblem: true,
                    solutionCode: `def binary_search(lst, target):
    lo, hi = 0, len(lst) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if lst[mid] == target: return mid
        elif lst[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1

print(binary_search([1,3,5,7,9,11], 7))  # 3`
                },
                {
                    id: 'count-occurrences-of-a-value',
                    name: '3. Count occurrences of a value',
                    description: 'Count how many times a value appears.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def count_occurrences(lst, val):
    count = 0
    for x in lst:
        if x == val:
            count += 1
    return count

print(count_occurrences([1,2,3,2,4,2], 2))  # 3`
                },
                {
                    id: 'find-all-indices-of-a-value',
                    name: '4. Find all indices of a value',
                    description: 'Return list of every index where value occurs.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def all_indices(lst, val):
    return [i for i, x in enumerate(lst) if x == val]

print(all_indices([1,2,3,2,4,2], 2))  # [1,3,5]`
                },
                {
                    id: 'check-if-sublist-exists',
                    name: '5. Check if sublist exists',
                    description: 'Return True if one list appears as a contiguous sublist of another.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def contains_sublist(lst, sub):
    n, m = len(lst), len(sub)
    for i in range(n - m + 1):
        if lst[i:i+m] == sub:
            return True
    return False

print(contains_sublist([1,2,3,4,5], [3,4]))  # True`
                },
                {
                    id: 'find-index-of-first-element-satisfying-condition',
                    name: '6. Find index of first element satisfying condition',
                    description: 'Return the first index where a condition is met.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def find_first(lst, condition):
    for i, x in enumerate(lst):
        if condition(x):
            return i
    return -1

print(find_first([1,3,4,7,2], lambda x: x % 2 == 0))  # 2`
                },
                {
                    id: 'find-longest-increasing-subsequence-length',
                    name: '7. Find longest increasing subsequence length',
                    description: 'Find the length of the longest strictly increasing subsequence.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Searching, Dynamic Programming',
                    isProblem: true,
                    solutionCode: `def lis_length(lst):
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

print(lis_length([10,9,2,5,3,7,101,18]))  # 4`
                },
                {
                    id: 'intersection-of-two-lists',
                    name: '8. Intersection of two lists',
                    description: 'Return elements that appear in both lists.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching, Hashing',
                    isProblem: true,
                    solutionCode: `def intersection(a, b):
    set_b = {}
    for x in b: set_b[x] = True
    return [x for x in a if x in set_b]

print(intersection([1,2,3,4],[2,4,6,8]))  # [2,4]`
                },
                {
                    id: 'union-of-two-lists-no-duplicates',
                    name: '9. Union of two lists (no duplicates)',
                    description: 'Combine two lists keeping only unique values.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching, Hashing',
                    isProblem: true,
                    solutionCode: `def union(a, b):
    seen = {}
    result = []
    for x in a + b:
        if x not in seen:
            seen[x] = True
            result.append(x)
    return result

print(union([1,2,3],[2,3,4,5]))  # [1,2,3,4,5]`
                },
                {
                    id: 'difference-of-two-lists',
                    name: '10. Difference of two lists',
                    description: 'Return elements in a that are not in b.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching, Hashing',
                    isProblem: true,
                    solutionCode: `def difference(a, b):
    set_b = {}
    for x in b: set_b[x] = True
    return [x for x in a if x not in set_b]

print(difference([1,2,3,4,5],[2,4]))  # [1,3,5]`
                }
            ]
        },
        {
            id: 'sublist-window',
            title: 'Sublist / Window',
            methods: [
                {
                    id: 'maximum-subarray-sum-kadane-s',
                    name: '1. Maximum subarray sum (Kadane\'s)',
                    description: 'Find the contiguous subarray with the largest sum.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window',
                    isProblem: true,
                    solutionCode: `def max_subarray(lst):
    max_sum = cur = lst[0]
    for x in lst[1:]:
        cur = x if x > cur + x else cur + x
        if cur > max_sum: max_sum = cur
    return max_sum

print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6`
                },
                {
                    id: 'minimum-subarray-sum',
                    name: '2. Minimum subarray sum',
                    description: 'Find the contiguous subarray with the smallest sum.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window',
                    isProblem: true,
                    solutionCode: `def min_subarray(lst):
    min_sum = cur = lst[0]
    for x in lst[1:]:
        cur = x if x < cur + x else cur + x
        if cur < min_sum: min_sum = cur
    return min_sum

print(min_subarray([2,-3,4,-1,-2,1,-5,4]))  # -6`
                },
                {
                    id: 'subarray-with-given-sum',
                    name: '3. Subarray with given sum',
                    description: 'Find start and end indices of contiguous subarray summing to target.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window',
                    isProblem: true,
                    solutionCode: `def subarray_with_sum(lst, target):
    start = total = 0
    for end, x in enumerate(lst):
        total += x
        while total > target and start < end:
            total -= lst[start]; start += 1
        if total == target:
            return (start, end)
    return None

print(subarray_with_sum([1,4,20,3,10,5], 33))  # (2, 4)`
                },
                {
                    id: 'max-sum-of-k-consecutive-elements',
                    name: '4. Max sum of k consecutive elements',
                    description: 'Find the maximum sum of any window of size k.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window',
                    isProblem: true,
                    solutionCode: `def max_k_sum(lst, k):
    window = sum(lst[:k])
    best = window
    for i in range(k, len(lst)):
        window += lst[i] - lst[i-k]
        if window > best: best = window
    return best

print(max_k_sum([1,4,2,9,7,3,5], 3))  # 18`
                },
                {
                    id: 'longest-sublist-with-distinct-elements',
                    name: '5. Longest sublist with distinct elements',
                    description: 'Find the length of longest contiguous sublist with all unique elements.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window, Hashing',
                    isProblem: true,
                    solutionCode: `def longest_unique(lst):
    seen = {}
    start = best = 0
    for end, x in enumerate(lst):
        if x in seen and seen[x] >= start:
            start = seen[x] + 1
        seen[x] = end
        if end - start + 1 > best:
            best = end - start + 1
    return best

print(longest_unique([1,2,1,3,4,2,3]))  # 4`
                },
                {
                    id: 'all-contiguous-sublists',
                    name: '6. All contiguous sublists',
                    description: 'Generate every contiguous sublist of a list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Sublist / Window',
                    isProblem: true,
                    solutionCode: `def all_sublists(lst):
    n = len(lst)
    result = []
    for i in range(n):
        for j in range(i+1, n+1):
            result.append(lst[i:j])
    return result

print(all_sublists([1,2,3]))
# [[1],[1,2],[1,2,3],[2],[2,3],[3]]`
                },
                {
                    id: 'product-of-array-except-self',
                    name: '7. Product of array except self',
                    description: 'For each position, compute product of all other elements (no division).',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window, Two Pointers',
                    isProblem: true,
                    solutionCode: `def product_except_self(lst):
    n = len(lst)
    left = [1] * n
    right = [1] * n
    for i in range(1, n):
        left[i] = left[i-1] * lst[i-1]
    for i in range(n-2, -1, -1):
        right[i] = right[i+1] * lst[i+1]
    return [left[i] * right[i] for i in range(n)]

print(product_except_self([1,2,3,4]))  # [24,12,8,6]`
                },
                {
                    id: 'longest-consecutive-sequence-length',
                    name: '8. Longest consecutive sequence length',
                    description: 'Find length of longest sequence of consecutive integers.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window, Two Pointers, Hashing',
                    isProblem: true,
                    solutionCode: `def longest_consecutive(lst):
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

print(longest_consecutive([100,4,200,1,3,2]))  # 4`
                },
                {
                    id: 'sliding-window-minimum',
                    name: '9. Sliding window minimum',
                    description: 'For each window of size k, find the minimum value.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window, Sliding Window',
                    isProblem: true,
                    solutionCode: `def sliding_min(lst, k):
    return [min(lst[i:i+k]) for i in range(len(lst)-k+1)]

print(sliding_min([1,3,1,2,0,5], 3))  # [1,1,0,0]`
                },
                {
                    id: 'two-sum-return-indices',
                    name: '10. Two sum (return indices)',
                    description: 'Find two indices such that their values add to target.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sublist / Window, Hashing',
                    isProblem: true,
                    solutionCode: `def two_sum(lst, target):
    seen = {}
    for i, x in enumerate(lst):
        comp = target - x
        if comp in seen:
            return (seen[comp], i)
        seen[x] = i
    return None

print(two_sum([2,7,11,15], 9))  # (0, 1)`
                }
            ]
        },
        {
            id: 'matrix-2d',
            title: 'Matrix / 2D',
            methods: [
                {
                    id: 'transpose-a-2d-matrix',
                    name: '1. Transpose a 2D matrix',
                    description: 'Swap rows and columns of a matrix.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def transpose(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    return [[matrix[r][c] for r in range(rows)] for c in range(cols)]

m = [[1,2,3],[4,5,6]]
print(transpose(m))  # [[1,4],[2,5],[3,6]]`
                },
                {
                    id: 'flatten-2d-list-to-1d',
                    name: '2. Flatten 2D list to 1D',
                    description: 'Convert a list of lists into a single flat list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def flatten_2d(matrix):
    result = []
    for row in matrix:
        for x in row:
            result.append(x)
    return result

print(flatten_2d([[1,2],[3,4],[5,6]]))  # [1,2,3,4,5,6]`
                },
                {
                    id: 'row-sums-of-a-matrix',
                    name: '3. Row sums of a matrix',
                    description: 'Return a list of sums for each row.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def row_sums(matrix):
    return [sum(row) for row in matrix]

print(row_sums([[1,2,3],[4,5,6],[7,8,9]]))  # [6,15,24]`
                },
                {
                    id: 'column-sums-of-a-matrix',
                    name: '4. Column sums of a matrix',
                    description: 'Return a list of sums for each column.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def col_sums(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    return [sum(matrix[r][c] for r in range(rows)) for c in range(cols)]

print(col_sums([[1,2,3],[4,5,6]]))  # [5,7,9]`
                },
                {
                    id: 'spiral-order-traversal',
                    name: '5. Spiral order traversal',
                    description: 'Return elements of a matrix in spiral (clockwise) order.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def spiral_order(matrix):
    result = []
    while matrix:
        result += matrix.pop(0)
        matrix = list(zip(*matrix))[::-1]
    return result

m = [[1,2,3],[4,5,6],[7,8,9]]
print(spiral_order(m))  # [1,2,3,6,9,8,7,4,5]`
                },
                {
                    id: 'rotate-matrix-90-clockwise',
                    name: '6. Rotate matrix 90° clockwise',
                    description: 'Rotate an n×n matrix 90 degrees clockwise in place.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def rotate_90(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
    return matrix

m = [[1,2,3],[4,5,6],[7,8,9]]
print(rotate_90(m))  # [[7,4,1],[8,5,2],[9,6,3]]`
                },
                {
                    id: 'diagonal-sum-of-a-matrix',
                    name: '7. Diagonal sum of a matrix',
                    description: 'Sum of both diagonals of a square matrix.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def diagonal_sum(matrix):
    n = len(matrix)
    total = 0
    for i in range(n):
        total += matrix[i][i]          # main diagonal
        total += matrix[i][n-1-i]      # anti-diagonal
    if n % 2 == 1:
        total -= matrix[n//2][n//2]    # center counted twice
    return total

m = [[1,2,3],[4,5,6],[7,8,9]]
print(diagonal_sum(m))  # 25`
                },
                {
                    id: 'search-in-row-column-sorted-matrix',
                    name: '8. Search in row-column sorted matrix',
                    description: 'Search for a value in a matrix sorted by row and column.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(M*N)',
                    commonUseCases: 'Matrix / 2D, Sorting',
                    isProblem: true,
                    solutionCode: `def search_matrix(matrix, target):
    if not matrix: return False
    row, col = 0, len(matrix[0]) - 1
    while row < len(matrix) and col >= 0:
        if matrix[row][col] == target: return True
        elif matrix[row][col] > target: col -= 1
        else: row += 1
    return False

m = [[1,4,7],[2,5,8],[3,6,9]]
print(search_matrix(m, 5))  # True`
                },
                {
                    id: 'count-islands-connected-1s',
                    name: '9. Count islands (connected 1s)',
                    description: 'Count the number of connected groups of 1s in a binary grid.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def count_islands(grid):
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
print(count_islands(grid))  # 3`
                },
                {
                    id: 'zip-two-lists-into-pairs',
                    name: '10. Zip two lists into pairs',
                    description: 'Combine two lists into a list of paired tuples.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Matrix / 2D',
                    isProblem: true,
                    solutionCode: `def zip_lists(a, b):
    result = []
    for i in range(min(len(a), len(b))):
        result.append((a[i], b[i]))
    return result

print(zip_lists([1,2,3],['a','b','c']))
# [(1,'a'),(2,'b'),(3,'c')]`
                }
            ]
        },
        {
            id: 'strings-in-lists',
            title: 'Strings in Lists',
            methods: [
                {
                    id: 'find-longest-string-in-a-list',
                    name: '1. Find longest string in a list',
                    description: 'Return the longest string without using max().',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def longest_string(lst):
    longest = ""
    for s in lst:
        if len(s) > len(longest):
            longest = s
    return longest

print(longest_string(["cat","elephant","ant","bee"]))  # elephant`
                },
                {
                    id: 'sort-strings-by-length',
                    name: '2. Sort strings by length',
                    description: 'Sort a list of strings by their length.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Strings in Lists, Sorting',
                    isProblem: true,
                    solutionCode: `def sort_by_length(lst):
    arr = lst[:]
    for i in range(len(arr)):
        for j in range(len(arr)-i-1):
            if len(arr[j]) > len(arr[j+1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(sort_by_length(["banana","fig","apple","kiwi"]))
# ['fig','kiwi','apple','banana']`
                },
                {
                    id: 'count-words-starting-with-a-letter',
                    name: '3. Count words starting with a letter',
                    description: 'Count strings that start with a given character.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def count_starting_with(lst, char):
    return sum(1 for s in lst if s and s[0].lower() == char.lower())

words = ["apple","avocado","banana","apricot","cherry"]
print(count_starting_with(words, 'a'))  # 3`
                },
                {
                    id: 'find-anagram-groups',
                    name: '4. Find anagram groups',
                    description: 'Group words that are anagrams of each other.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists, Hashing',
                    isProblem: true,
                    solutionCode: `def group_anagrams(words):
    groups = {}
    for w in words:
        key = ''.join(sorted(w))
        if key not in groups:
            groups[key] = []
        groups[key].append(w)
    return list(groups.values())

print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
# [['eat','tea','ate'],['tan','nat'],['bat']]`
                },
                {
                    id: 'join-list-of-words-into-sentence',
                    name: '5. Join list of words into sentence',
                    description: 'Concatenate words with spaces without join().',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def words_to_sentence(words):
    result = ""
    for i, w in enumerate(words):
        if i > 0: result += " "
        result += w
    return result

print(words_to_sentence(["Hello","world","from","Python"]))
# Hello world from Python`
                },
                {
                    id: 'filter-strings-containing-substring',
                    name: '6. Filter strings containing substring',
                    description: 'Keep only strings that contain a given substring.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def filter_containing(lst, sub):
    result = []
    for s in lst:
        for i in range(len(s) - len(sub) + 1):
            if s[i:i+len(sub)] == sub:
                result.append(s)
                break
    return result

print(filter_containing(["apple","pineapple","apricot","grape"],"app"))
# ['apple','pineapple']`
                },
                {
                    id: 'reverse-each-string-in-a-list',
                    name: '7. Reverse each string in a list',
                    description: 'Return a list with each string reversed.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def reverse_strings(lst):
    result = []
    for s in lst:
        rev = ""
        for ch in reversed(s):
            rev += ch
        result.append(rev)
    return result

print(reverse_strings(["hello","world"]))  # ['olleh','dlrow']`
                },
                {
                    id: 'capitalize-first-letter-of-each-word',
                    name: '8. Capitalize first letter of each word',
                    description: 'Title-case a list of strings without .title().',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def capitalize_each(lst):
    result = []
    for s in lst:
        if s:
            result.append(s[0].upper() + s[1:].lower())
        else:
            result.append(s)
    return result

print(capitalize_each(["hello","world","python"]))
# ['Hello','World','Python']`
                },
                {
                    id: 'remove-empty-strings-from-list',
                    name: '9. Remove empty strings from list',
                    description: 'Filter out empty and whitespace-only strings.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def remove_empty(lst):
    result = []
    for s in lst:
        stripped = s.strip()
        if stripped:
            result.append(s)
    return result

print(remove_empty(["hi","","  ","there",""]))
# ['hi','there']`
                },
                {
                    id: 'find-strings-that-are-palindromes',
                    name: '10. Find strings that are palindromes',
                    description: 'Return all strings in the list that read the same forwards and backwards.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Strings in Lists',
                    isProblem: true,
                    solutionCode: `def palindromes(lst):
    result = []
    for s in lst:
        rev = s[::-1]
        if s == rev:
            result.append(s)
    return result

print(palindromes(["racecar","hello","level","world","noon"]))
# ['racecar','level','noon']`
                }
            ]
        },
        {
            id: 'advanced-logic',
            title: 'Advanced Logic',
            methods: [
                {
                    id: 'next-greater-element-for-each-position',
                    name: '1. Next greater element for each position',
                    description: 'For each element, find the next larger value to its right.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Stack',
                    isProblem: true,
                    solutionCode: `def next_greater(lst):
    n = len(lst)
    result = [-1] * n
    stack = []
    for i in range(n):
        while stack and lst[stack[-1]] < lst[i]:
            idx = stack.pop()
            result[idx] = lst[i]
        stack.append(i)
    return result

print(next_greater([4,5,2,10,8]))  # [5,10,10,-1,-1]`
                },
                {
                    id: 'stock-buy-sell-for-max-profit-one-trade',
                    name: '2. Stock buy-sell for max profit (one trade)',
                    description: 'Find max profit from one buy and one sell.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def max_profit(prices):
    if len(prices) < 2: return 0
    min_price = prices[0]
    max_p = 0
    for p in prices[1:]:
        max_p = max(max_p, p - min_price)
        min_price = min(min_price, p)
    return max_p

print(max_profit([7,1,5,3,6,4]))  # 5`
                },
                {
                    id: 'stock-buy-sell-max-profit-many-trades',
                    name: '3. Stock buy-sell max profit (many trades)',
                    description: 'Sum all positive differences for unlimited trades.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def max_profit_multi(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            profit += prices[i] - prices[i-1]
    return profit

print(max_profit_multi([7,1,5,3,6,4]))  # 7`
                },
                {
                    id: 'trapping-rainwater',
                    name: '4. Trapping rainwater',
                    description: 'Calculate total water trapped between elevation bars.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Two Pointers',
                    isProblem: true,
                    solutionCode: `def trap_water(heights):
    n = len(heights)
    left_max = [0]*n; right_max = [0]*n
    left_max[0] = heights[0]
    for i in range(1,n):
        left_max[i] = max(left_max[i-1], heights[i])
    right_max[n-1] = heights[n-1]
    for i in range(n-2,-1,-1):
        right_max[i] = max(right_max[i+1], heights[i])
    return sum(min(left_max[i],right_max[i])-heights[i] for i in range(n))

print(trap_water([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6`
                },
                {
                    id: 'three-sum-find-triplets-summing-to-0',
                    name: '5. Three sum (find triplets summing to 0)',
                    description: 'Find all unique triplets that sum to zero.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Two Pointers',
                    isProblem: true,
                    solutionCode: `def three_sum(lst):
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
# [[-1,-1,2],[-1,0,1]]`
                },
                {
                    id: 'longest-common-subsequence-length',
                    name: '6. Longest common subsequence length',
                    description: 'Find the length of the longest common subsequence of two lists.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Advanced Logic, Dynamic Programming',
                    isProblem: true,
                    solutionCode: `def lcs_length(a, b):
    m, n = len(a), len(b)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = dp[i-1][j] if dp[i-1][j] > dp[i][j-1] else dp[i][j-1]
    return dp[m][n]

print(lcs_length([1,3,4,5,6,7,8],[1,3,5,7,9]))  # 4`
                },
                {
                    id: 'coin-change-minimum-coins',
                    name: '7. Coin change (minimum coins)',
                    description: 'Find minimum number of coins needed to make a target amount.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Dynamic Programming',
                    isProblem: true,
                    solutionCode: `def min_coins(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount+1):
        for c in coins:
            if c <= i and dp[i-c] + 1 < dp[i]:
                dp[i] = dp[i-c] + 1
    return dp[amount] if dp[amount] != float('inf') else -1

print(min_coins([1,5,6,9], 11))  # 2`
                },
                {
                    id: 'kadane-s-max-product-subarray',
                    name: '8. Kadane\'s max product subarray',
                    description: 'Find the maximum product of any contiguous subarray.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def max_product_subarray(lst):
    max_p = min_p = result = lst[0]
    for x in lst[1:]:
        candidates = (x, max_p*x, min_p*x)
        max_p = max(candidates)
        min_p = min(candidates)
        if max_p > result: result = max_p
    return result

print(max_product_subarray([2,3,-2,4]))  # 6`
                },
                {
                    id: 'dutch-national-flag-problem',
                    name: '9. Dutch national flag problem',
                    description: 'Sort an array of 0s, 1s, and 2s in one pass.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Two Pointers',
                    isProblem: true,
                    solutionCode: `def dutch_flag(lst):
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

print(dutch_flag([2,0,2,1,1,0]))  # [0,0,1,1,2,2]`
                },
                {
                    id: 'jump-game-can-reach-end',
                    name: '10. Jump game — can reach end?',
                    description: 'Given jump lengths at each position, can you reach the last index?',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def can_jump(lst):
    max_reach = 0
    for i, jump in enumerate(lst):
        if i > max_reach: return False
        if i + jump > max_reach:
            max_reach = i + jump
    return True

print(can_jump([2,3,1,1,4]))  # True
print(can_jump([3,2,1,0,4]))  # False`
                },
                {
                    id: 'minimum-jumps-to-reach-end',
                    name: '11. Minimum jumps to reach end',
                    description: 'Fewest jumps needed to reach the last index.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def min_jumps(lst):
    jumps = cur_end = farthest = 0
    for i in range(len(lst)-1):
        if i + lst[i] > farthest:
            farthest = i + lst[i]
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps

print(min_jumps([2,3,1,1,4]))  # 2`
                },
                {
                    id: 'frequency-map-of-a-list',
                    name: '12. Frequency map of a list',
                    description: 'Build a dictionary counting how many times each element appears.',
                    syntax: 'Use a dictionary to keep track of elements/counts.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Hashing',
                    isProblem: true,
                    solutionCode: `def freq_map(lst):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    return freq

print(freq_map([1,2,3,2,1,2,3,3,3]))
# {1:2, 2:3, 3:4}`
                },
                {
                    id: 'top-k-frequent-elements',
                    name: '13. Top k frequent elements',
                    description: 'Return the k elements with highest frequency.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Hashing',
                    isProblem: true,
                    solutionCode: `def top_k_frequent(lst, k):
    freq = {}
    for x in lst:
        freq[x] = freq.get(x, 0) + 1
    items = list(freq.items())
    items.sort(key=lambda x: -x[1])
    return [x[0] for x in items[:k]]

print(top_k_frequent([1,1,1,2,2,3], 2))  # [1,2]`
                },
                {
                    id: 'rearrange-positives-and-negatives-alternately',
                    name: '14. Rearrange positives and negatives alternately',
                    description: 'Arrange list so positives and negatives alternate (starting with positive).',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def alternate_pos_neg(lst):
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
# [1,-2,3,-4,5,-1,6]`
                },
                {
                    id: 'pascal-s-triangle-n-rows',
                    name: '15. Pascal\'s triangle (n rows)',
                    description: 'Generate the first n rows of Pascal\'s triangle.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def pascals_triangle(n):
    triangle = []
    for i in range(n):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle

for row in pascals_triangle(5):
    print(row)
# [1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]`
                },
                {
                    id: 'list-power-set',
                    name: '16. List power set',
                    description: 'Generate all subsets of a list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(2^N)',
                    commonUseCases: 'Advanced Logic, Hashing',
                    isProblem: true,
                    solutionCode: `def power_set(lst):
    result = [[]]
    for x in lst:
        result = result + [subset + [x] for subset in result]
    return result

print(power_set([1,2,3]))
# [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`
                },
                {
                    id: 'generate-all-permutations',
                    name: '17. Generate all permutations',
                    description: 'Return every permutation of a list.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N!)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def permutations(lst):
    if len(lst) <= 1: return [lst[:]]
    result = []
    for i in range(len(lst)):
        rest = lst[:i] + lst[i+1:]
        for p in permutations(rest):
            result.append([lst[i]] + p)
    return result

print(permutations([1,2,3]))
# [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`
                },
                {
                    id: 'cartesian-product-of-two-lists',
                    name: '18. Cartesian product of two lists',
                    description: 'Return all pairs (a, b) where a ∈ A and b ∈ B.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def cartesian_product(a, b):
    return [(x, y) for x in a for y in b]

print(cartesian_product([1,2],[3,4]))
# [(1,3),(1,4),(2,3),(2,4)]`
                },
                {
                    id: 'find-equilibrium-index',
                    name: '19. Find equilibrium index',
                    description: 'Find index where sum of left elements equals sum of right elements.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Two Pointers',
                    isProblem: true,
                    solutionCode: `def equilibrium_index(lst):
    total = sum(lst)
    left_sum = 0
    for i, x in enumerate(lst):
        right_sum = total - left_sum - x
        if left_sum == right_sum:
            return i
        left_sum += x
    return -1

print(equilibrium_index([1,3,5,2,2]))  # 2`
                },
                {
                    id: 'median-of-two-sorted-arrays',
                    name: '20. Median of two sorted arrays',
                    description: 'Find the overall median of two sorted lists.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Sorting',
                    isProblem: true,
                    solutionCode: `def median_two_sorted(a, b):
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

print(median_two_sorted([1,3],[2,4]))  # 2.5`
                },
                {
                    id: 'longest-bitonic-subarray',
                    name: '21. Longest bitonic subarray',
                    description: 'Find length of longest subarray that first increases then decreases.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic',
                    isProblem: true,
                    solutionCode: `def longest_bitonic(lst):
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

print(longest_bitonic([1,3,5,4,2,1,4]))  # 6`
                },
                {
                    id: 'check-if-list-can-be-partitioned-into-equal-sum-halves',
                    name: '22. Check if list can be partitioned into equal sum halves',
                    description: 'Determine if a list can be split into two subsets with equal sum.',
                    syntax: 'Implementation approach based on problem description.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Advanced Logic, Dynamic Programming',
                    isProblem: true,
                    solutionCode: `def can_partition(lst):
    total = sum(lst)
    if total % 2: return False
    target = total // 2
    dp = {0}
    for x in lst:
        dp = dp | {s + x for s in dp}
    return target in dp

print(can_partition([1,5,11,5]))  # True
print(can_partition([1,2,3,5]))   # False`
                }
            ]
        }
    ]
};
