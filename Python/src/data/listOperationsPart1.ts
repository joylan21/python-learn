import type { Category } from './types';

export const listOperationsPart1Problems: Category = {
    id: 'list-operations-part-1',
    title: 'Part 1',
    isListOperationsCategory: true,
    isProblemCategory: true,
    subsections: [
        {
            id: 'basic-operations',
            title: 'Basic Operations',
            methods: [
                {
                    id: 'access-list-item',
                    name: '1. Access List Item',
                    description: 'Access an item from a list by its index.',
                    syntax: 'lst[index]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Accessing elements',
                    isProblem: true,
                    solutionCode: `def access_item(lst, index):
    if 0 <= index < len(lst):
        return lst[index]
    return None

print(access_item([10, 20, 30], 1))  # 20`
                },
                {
                    id: 'change-list-item',
                    name: '2. Change List item',
                    description: 'Change the value of a specific item in a list.',
                    syntax: 'lst[index] = value',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Modifying elements',
                    isProblem: true,
                    solutionCode: `def change_item(lst, index, value):
    if 0 <= index < len(lst):
        lst[index] = value
    return lst

print(change_item([10, 20, 30], 1, 99))  # [10, 99, 30]`
                },
                {
                    id: 'replace-list-values',
                    name: '3. Replace List Values',
                    description: 'Replace a range of list values using slicing.',
                    syntax: 'lst[start:end] = new_values',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(K) where K is len(new_values)',
                    commonUseCases: 'Modifying ranges',
                    isProblem: true,
                    solutionCode: `def replace_values(lst, start, end, new_values):
    lst[start:end] = new_values
    return lst

print(replace_values([1, 2, 3, 4, 5], 1, 3, [9, 9]))  # [1, 9, 9, 4, 5]`
                },
                {
                    id: 'append-method',
                    name: '4. Append Method',
                    description: 'Add an item to the end of the list.',
                    syntax: 'lst.append(item)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1) amortized',
                    commonUseCases: 'Adding elements',
                    isProblem: true,
                    solutionCode: `def append_item(lst, item):
    lst.append(item)
    return lst

print(append_item([1, 2], 3))  # [1, 2, 3]`
                },
                {
                    id: 'insert-method',
                    name: '5. Insert Method',
                    description: 'Insert an item at a specified index.',
                    syntax: 'lst.insert(index, item)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Adding elements',
                    isProblem: true,
                    solutionCode: `def insert_item(lst, index, item):
    lst.insert(index, item)
    return lst

print(insert_item([1, 3], 1, 2))  # [1, 2, 3]`
                },
                {
                    id: 'extend-list-item',
                    name: '6. Extend List Item',
                    description: 'Append elements from another iterable to the current list.',
                    syntax: 'lst.extend(iterable)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(K) where K is len(iterable)',
                    commonUseCases: 'Combining lists',
                    isProblem: true,
                    solutionCode: `def extend_list(lst1, lst2):
    lst1.extend(lst2)
    return lst1

print(extend_list([1, 2], [3, 4]))  # [1, 2, 3, 4]`
                },
                {
                    id: 'remove-list-item',
                    name: '7. Remove List Item',
                    description: 'Remove the first item with the specified value.',
                    syntax: 'lst.remove(value)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Removing elements',
                    isProblem: true,
                    solutionCode: `def remove_item(lst, value):
    if value in lst:
        lst.remove(value)
    return lst

print(remove_item([1, 2, 3, 2], 2))  # [1, 3, 2]`
                },
                {
                    id: 'clear-entire-list',
                    name: '8. Clear entire List',
                    description: 'Remove all items from the list.',
                    syntax: 'lst.clear()',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Clearing lists',
                    isProblem: true,
                    solutionCode: `def clear_list(lst):
    lst.clear()
    return lst

print(clear_list([1, 2, 3]))  # []`
                }
            ]
        },
        {
            id: 'coding-problems-on-list-operations',
            title: 'Coding Problems on List Operations',
            methods: [
                {
                    id: 'list-traversal',
                    name: '1. List Traversal',
                    description: 'Traverse a list and print its elements.',
                    syntax: 'for item in lst:',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Iteration',
                    isProblem: true,
                    solutionCode: `def traverse_list(lst):
    for item in lst:
        print(item, end=' ')
    print()

traverse_list([10, 20, 30])  # 10 20 30`
                },
                {
                    id: 'length-of-the-list',
                    name: '2. Length of The List',
                    description: 'Find the number of items in a list.',
                    syntax: 'len(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'List properties',
                    isProblem: true,
                    solutionCode: `def list_length(lst):
    return len(lst)

print(list_length([1, 2, 3, 4]))  # 4`
                },
                {
                    id: 'sum-the-list',
                    name: '3. Sum The List',
                    description: 'Calculate the sum of all elements in a list.',
                    syntax: 'sum(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Aggregation',
                    isProblem: true,
                    solutionCode: `def sum_list(lst):
    total = 0
    for num in lst:
        total += num
    return total

print(sum_list([1, 2, 3]))  # 6`
                },
                {
                    id: 'decrement-list-values',
                    name: '4. Decrement List Values',
                    description: 'Decrement all list values by a given amount.',
                    syntax: '[x - amt for x in lst]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Transformation',
                    isProblem: true,
                    solutionCode: `def decrement_values(lst, amt):
    return [x - amt for x in lst]

print(decrement_values([10, 20, 30], 5))  # [5, 15, 25]`
                },
                {
                    id: 'append-to-list',
                    name: '5. Append To List',
                    description: 'Append an element to list (Problem variation).',
                    syntax: 'lst.append(item)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Adding elements',
                    isProblem: true,
                    solutionCode: `def append_to_list(lst, item):
    lst = lst + [item]  # Alternative way
    return lst

print(append_to_list([1, 2], 3))  # [1, 2, 3]`
                }
            ]
        },
        {
            id: 'basic-list-programs',
            title: 'Basic List programs',
            methods: [
                {
                    id: 'max-of-two-numbers',
                    name: '1. Max of two numbers',
                    description: 'Find the maximum of two numbers.',
                    syntax: 'max(a, b)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Comparison',
                    isProblem: true,
                    solutionCode: `def max_of_two(a, b):
    return a if a > b else b

print(max_of_two(10, 20))  # 20`
                },
                {
                    id: 'find-length-of-list',
                    name: '2. Find Length of List',
                    description: 'Count elements manually in a list.',
                    syntax: 'Count elements',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'List properties',
                    isProblem: true,
                    solutionCode: `def find_length(lst):
    count = 0
    for _ in lst:
        count += 1
    return count

print(find_length([1, 2, 3, 4, 5]))  # 5`
                },
                {
                    id: 'min-of-two-numbers',
                    name: '3. Min of two numbers',
                    description: 'Find the minimum of two numbers.',
                    syntax: 'min(a, b)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Comparison',
                    isProblem: true,
                    solutionCode: `def min_of_two(a, b):
    return a if a < b else b

print(min_of_two(10, 20))  # 10`
                },
                {
                    id: 'interchange-first-and-last-element',
                    name: '4. Interchange first and last element',
                    description: 'Swap the first and last element in a list.',
                    syntax: 'lst[0], lst[-1] = lst[-1], lst[0]',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Swapping',
                    isProblem: true,
                    solutionCode: `def swap_first_last(lst):
    if len(lst) >= 2:
        lst[0], lst[-1] = lst[-1], lst[0]
    return lst

print(swap_first_last([1, 2, 3, 4]))  # [4, 2, 3, 1]`
                },
                {
                    id: 'swap-two-element',
                    name: '5. Swap two element',
                    description: 'Swap elements at two given positions.',
                    syntax: 'lst[pos1], lst[pos2] = lst[pos2], lst[pos1]',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Swapping',
                    isProblem: true,
                    solutionCode: `def swap_elements(lst, pos1, pos2):
    lst[pos1], lst[pos2] = lst[pos2], lst[pos1]
    return lst

print(swap_elements([1, 2, 3, 4], 1, 2))  # [1, 3, 2, 4]`
                },
                {
                    id: 'check-if-element-exists',
                    name: '6. Check if element exists',
                    description: 'Check if an item exists in the list.',
                    syntax: 'item in lst',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Searching',
                    isProblem: true,
                    solutionCode: `def element_exists(lst, element):
    for x in lst:
        if x == element:
            return True
    return False

print(element_exists([1, 2, 3], 2))  # True`
                },
                {
                    id: 'reverse-a-list',
                    name: '7. Reverse a List',
                    description: 'Reverse the order of list elements.',
                    syntax: 'lst[::-1]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Reversing',
                    isProblem: true,
                    solutionCode: `def reverse_list(lst):
    return lst[::-1]

print(reverse_list([1, 2, 3]))  # [3, 2, 1]`
                },
                {
                    id: 'cloning-or-copying-a-list',
                    name: '8. Cloning or Copying a List',
                    description: 'Create a copy of a list.',
                    syntax: 'lst.copy()',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Copying',
                    isProblem: true,
                    solutionCode: `def clone_list(lst):
    return lst[:]

print(clone_list([1, 2, 3]))  # [1, 2, 3]`
                },
                {
                    id: 'count-element-in-a-list',
                    name: '9. Count element in a List',
                    description: 'Count occurrences of a specific element.',
                    syntax: 'lst.count(element)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_element(lst, element):
    count = 0
    for x in lst:
        if x == element:
            count += 1
    return count

print(count_element([1, 2, 2, 3], 2))  # 2`
                },
                {
                    id: 'sum-and-average-of-list',
                    name: '10. Sum and Average of List',
                    description: 'Calculate sum and average of elements.',
                    syntax: 'sum/len',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def sum_and_average(lst):
    total = sum(lst)
    return total, total / len(lst)

print(sum_and_average([10, 20, 30]))  # (60, 20.0)`
                },
                {
                    id: 'sum-of-digits-in-a-list',
                    name: '11. Sum of digits in a List',
                    description: 'Sum the digits of all numbers in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * D)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def sum_of_digits(lst):
    total = 0
    for num in lst:
        for digit in str(abs(num)):
            total += int(digit)
    return total

print(sum_of_digits([12, 34]))  # 1+2+3+4 = 10`
                },
                {
                    id: 'multiply-all-numbers-in-a-list',
                    name: '12. Multiply all numbers in a List',
                    description: 'Multiply all elements in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def multiply_numbers(lst):
    result = 1
    for x in lst:
        result *= x
    return result

print(multiply_numbers([1, 2, 3, 4]))  # 24`
                },
                {
                    id: 'smallest-number-in-a-list',
                    name: '13. Smallest number in a List',
                    description: 'Find the smallest number in a list.',
                    syntax: 'min(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def find_smallest(lst):
    smallest = lst[0]
    for x in lst[1:]:
        if x < smallest:
            smallest = x
    return smallest

print(find_smallest([4, 1, 7]))  # 1`
                },
                {
                    id: 'largest-number-in-a-list',
                    name: '14. Largest number in a List',
                    description: 'Find the largest number in a list.',
                    syntax: 'max(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def find_largest(lst):
    largest = lst[0]
    for x in lst[1:]:
        if x > largest:
            largest = x
    return largest

print(find_largest([4, 1, 7]))  # 7`
                },
                {
                    id: 'second-largest-number-in-a-list',
                    name: '15. Second largest number in a List',
                    description: 'Find the second largest number.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def second_largest(lst):
    first = second = float('-inf')
    for n in lst:
        if n > first:
            second, first = first, n
        elif first > n > second:
            second = n
    return second

print(second_largest([4, 1, 7, 2]))  # 4`
                },
                {
                    id: 'even-numbers-in-a-list',
                    name: '16. Even numbers in a List',
                    description: 'Find all even numbers in a list.',
                    syntax: '[x for x in lst if x % 2 == 0]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def even_numbers(lst):
    return [x for x in lst if x % 2 == 0]

print(even_numbers([1, 2, 3, 4]))  # [2, 4]`
                },
                {
                    id: 'odd-numbers-in-a-list',
                    name: '17. Odd numbers in a List',
                    description: 'Find all odd numbers in a list.',
                    syntax: '[x for x in lst if x % 2 != 0]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def odd_numbers(lst):
    return [x for x in lst if x % 2 != 0]

print(odd_numbers([1, 2, 3, 4]))  # [1, 3]`
                },
                {
                    id: 'count-even-and-odd-numbers-in-a-list',
                    name: '18. Count Even and Odd Numbers in a List',
                    description: 'Count total even and odd numbers.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_even_odd(lst):
    even = sum(1 for x in lst if x % 2 == 0)
    odd = len(lst) - even
    return even, odd

print(count_even_odd([1, 2, 3, 4, 5]))  # (2, 3)`
                },
                {
                    id: 'positive-numbers-in-a-list',
                    name: '19. Positive numbers in a List',
                    description: 'Find all positive numbers in a list.',
                    syntax: '[x for x in lst if x > 0]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def positive_numbers(lst):
    return [x for x in lst if x > 0]

print(positive_numbers([-1, 2, -3, 4]))  # [2, 4]`
                },
                {
                    id: 'negative-numbers-in-a-list',
                    name: '20. Negative numbers in a List',
                    description: 'Find all negative numbers in a list.',
                    syntax: '[x for x in lst if x < 0]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def negative_numbers(lst):
    return [x for x in lst if x < 0]

print(negative_numbers([-1, 2, -3, 4]))  # [-1, -3]`
                },
                {
                    id: 'count-positive-and-negative-numbers',
                    name: '21. Count positive and negative numbers',
                    description: 'Count positive and negative numbers.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_pos_neg(lst):
    pos = sum(1 for x in lst if x > 0)
    neg = sum(1 for x in lst if x < 0)
    return pos, neg

print(count_pos_neg([-1, 2, 0, -3, 4]))  # (2, 2)`
                },
                {
                    id: 'remove-multiple-elements',
                    name: '22. Remove multiple elements from a List',
                    description: 'Remove a set of given elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_multiple(lst, to_remove):
    remove_set = set(to_remove)
    return [x for x in lst if x not in remove_set]

print(remove_multiple([1, 2, 3, 4, 5], [2, 4]))  # [1, 3, 5]`
                },
                {
                    id: 'remove-empty-tuples',
                    name: '23. Remove empty tuples from a List',
                    description: 'Remove tuples that are empty from a list.',
                    syntax: '[t for t in lst if t]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_empty_tuples(lst):
    return [t for t in lst if t]

print(remove_empty_tuples([(), (1, 2), (), (3,)]))  # [(1, 2), (3,)]`
                },
                {
                    id: 'print-duplicates',
                    name: '24. Print duplicates from a list of integers',
                    description: 'Find and return elements appearing more than once.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def find_duplicates(lst):
    seen = set()
    dups = set()
    for x in lst:
        if x in seen:
            dups.add(x)
        seen.add(x)
    return list(dups)

print(find_duplicates([1, 2, 3, 2, 1, 4]))  # [1, 2]`
                },
                {
                    id: 'remove-first-element',
                    name: '25. Remove first element from List',
                    description: 'Remove the first element using pop or slicing.',
                    syntax: 'lst.pop(0)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Removing elements',
                    isProblem: true,
                    solutionCode: `def remove_first(lst):
    if lst:
        lst.pop(0)
    return lst

print(remove_first([1, 2, 3]))  # [2, 3]`
                },
                {
                    id: 'remove-duplicates-from-list',
                    name: '26. Remove duplicates from List',
                    description: 'Remove duplicate values, preserving order.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_duplicates(lst):
    seen = set()
    return [x for x in lst if not (x in seen or seen.add(x))]

print(remove_duplicates([1, 2, 2, 3]))  # [1, 2, 3]`
                },
                {
                    id: 'get-unique-values-from-list',
                    name: '27. Get Unique values from a List',
                    description: 'Get all unique values in a list.',
                    syntax: 'list(set(lst))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def get_unique(lst):
    return list(set(lst))

print(get_unique([1, 2, 2, 3, 1]))  # [1, 2, 3]`
                },
                {
                    id: 'merge-two-lists',
                    name: '28. Merge Two Lists',
                    description: 'Combine two lists into one.',
                    syntax: 'lst1 + lst2',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N+M)',
                    commonUseCases: 'Combining lists',
                    isProblem: true,
                    solutionCode: `def merge_lists(l1, l2):
    return l1 + l2

print(merge_lists([1, 2], [3, 4]))  # [1, 2, 3, 4]`
                },
                {
                    id: 'iterate-over-a-list',
                    name: '29. Iterate over a List',
                    description: 'Loop through a list and perform an action.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Iteration',
                    isProblem: true,
                    solutionCode: `def iterate_list(lst):
    res = []
    for val in lst:
        res.append(val * 2)
    return res

print(iterate_list([1, 2, 3]))  # [2, 4, 6]`
                },
                {
                    id: 'average-of-a-list',
                    name: '30. Average of a List',
                    description: 'Calculate average of a list.',
                    syntax: 'sum(lst)/len(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def list_average(lst):
    return sum(lst) / len(lst) if lst else 0

print(list_average([10, 20, 30]))  # 20.0`
                },
                {
                    id: 'append-at-beginning',
                    name: '31. Append at beginning of List',
                    description: 'Insert an element at index 0.',
                    syntax: 'lst.insert(0, val)',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Adding elements',
                    isProblem: true,
                    solutionCode: `def append_beginning(lst, val):
    lst.insert(0, val)
    return lst

print(append_beginning([2, 3], 1))  # [1, 2, 3]`
                },
                {
                    id: 'intersection-of-two-lists',
                    name: '32. Intersection of two Lists',
                    description: 'Find common elements of two lists.',
                    syntax: 'list(set(l1) & set(l2))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N+M)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `def list_intersection(l1, l2):
    return list(set(l1) & set(l2))

print(list_intersection([1, 2, 3], [2, 3, 4]))  # [2, 3]`
                },
                {
                    id: 'select-random-value',
                    name: '33. Select random value from a List',
                    description: 'Get a random element from a list.',
                    syntax: 'import random; random.choice(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Randomization',
                    isProblem: true,
                    solutionCode: `import random
def get_random(lst):
    return random.choice(lst) if lst else None

print(get_random([1, 2, 3, 4]))  # 2 (example output)`
                },
                {
                    id: 'check-if-lists-are-identical',
                    name: '34. Check if two Lists are Identical',
                    description: 'Check if two lists contain the exact same elements in same order.',
                    syntax: 'l1 == l2',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Comparison',
                    isProblem: true,
                    solutionCode: `def are_identical(l1, l2):
    return l1 == l2

print(are_identical([1, 2], [1, 2]))  # True`
                },
                {
                    id: 'get-last-element',
                    name: '35. Get last element of List',
                    description: 'Access the last element of the list.',
                    syntax: 'lst[-1]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Accessing elements',
                    isProblem: true,
                    solutionCode: `def get_last(lst):
    return lst[-1] if lst else None

print(get_last([1, 2, 3]))  # 3`
                },
                {
                    id: 'remove-none-values',
                    name: '36. Remove None values from List',
                    description: 'Filter out None values.',
                    syntax: '[x for x in lst if x is not None]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_none(lst):
    return [x for x in lst if x is not None]

print(remove_none([1, None, 2, None, 3]))  # [1, 2, 3]`
                },
                {
                    id: 'print-common-elements',
                    name: '37. Print common elements of two lists',
                    description: 'Print all intersecting elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N+M)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `def print_common(l1, l2):
    common = set(l1).intersection(l2)
    for c in common:
        print(c)

print_common([1, 2], [2, 3])  # 2`
                },
                {
                    id: 'max-min-element-position',
                    name: "38. Max and Min element's position in a List",
                    description: 'Find indices of max and min elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def max_min_positions(lst):
    if not lst: return -1, -1
    min_idx, max_idx = 0, 0
    for i, val in enumerate(lst):
        if val < lst[min_idx]: min_idx = i
        if val > lst[max_idx]: max_idx = i
    return max_idx, min_idx

print(max_min_positions([4, 1, 7, 3]))  # (2, 1)`
                },
                {
                    id: 'union-of-two-or-more-lists',
                    name: '39. Union of two or more Lists',
                    description: 'Get unique elements from multiple lists.',
                    syntax: 'list(set(l1) | set(l2))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N+M)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `def union_lists(*lists):
    result = set()
    for lst in lists:
        result.update(lst)
    return list(result)

print(union_lists([1, 2], [2, 3], [3, 4]))  # [1, 2, 3, 4]`
                }
            ]
        },
        {
            id: 'basic-coding-problems-on-list',
            title: 'Basic Coding Problems on List',
            methods: [
                {
                    id: 'less-than',
                    name: '1. Less Than',
                    description: 'Find elements less than a given number.',
                    syntax: '[x for x in lst if x < target]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def find_less_than(lst, target):
    return [x for x in lst if x < target]

print(find_less_than([1, 5, 10, 15], 10))  # [1, 5]`
                },
                {
                    id: 'average',
                    name: '2. Average',
                    description: 'Compute average without built-in functions.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def list_average(lst):
    total = 0
    count = 0
    for x in lst:
        total += x
        count += 1
    return total / count if count else 0

print(list_average([10, 20, 30]))  # 20.0`
                },
                {
                    id: 'separate-even-odd',
                    name: '3. Separate Even Odd',
                    description: 'Separate even and odd elements into two lists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def separate_even_odd(lst):
    evens, odds = [], []
    for x in lst:
        if x % 2 == 0:
            evens.append(x)
        else:
            odds.append(x)
    return evens, odds

print(separate_even_odd([1, 2, 3, 4]))  # ([2, 4], [1, 3])`
                },
                {
                    id: 'second-largest-element',
                    name: '4. Second Largest Element',
                    description: 'Find the second largest element.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def get_second_largest(lst):
    first = second = float('-inf')
    for n in lst:
        if n > first:
            second, first = first, n
        elif first > n > second:
            second = n
    return second if second != float('-inf') else None

print(get_second_largest([12, 35, 1, 10, 34, 1]))  # 34`
                },
                {
                    id: 'third-largest-element',
                    name: '5. Third largest element',
                    description: 'Find the third largest element.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def get_third_largest(lst):
    first = second = third = float('-inf')
    for n in lst:
        if n > first:
            third, second, first = second, first, n
        elif first > n > second:
            third, second = second, n
        elif second > n > third:
            third = n
    return third if third != float('-inf') else None

print(get_third_largest([12, 35, 1, 10, 34, 1]))  # 12`
                },
                {
                    id: 'three-great-candidates',
                    name: '6. Three Great Candidates',
                    description: 'Find the maximum product of three numbers.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def max_product_three(lst):
    lst.sort()
    # Check top 3 vs bottom 2 (if negative) and top 1
    return max(lst[-1]*lst[-2]*lst[-3], lst[0]*lst[1]*lst[-1])

print(max_product_three([-10, -10, 1, 3, 2]))  # 300`
                },
                {
                    id: 'move-all-zeroes-to-end',
                    name: '7. Move All Zeroes To End',
                    description: 'Move zeroes to the end of the list in-place.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def move_zeroes(lst):
    idx = 0
    for i in range(len(lst)):
        if lst[i] != 0:
            lst[idx], lst[i] = lst[i], lst[idx]
            idx += 1
    return lst

print(move_zeroes([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]`
                },
                {
                    id: 'plus-one',
                    name: '8. Plus One',
                    description: 'Add 1 to the number represented as a list of digits.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def plus_one(digits):
    for i in range(len(digits)-1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits

print(plus_one([1, 2, 9]))  # [1, 3, 0]`
                },
                {
                    id: 'remove-duplicates-from-sorted-array',
                    name: '9. Remove Duplicates from Sorted Array',
                    description: 'Remove duplicates in-place from a sorted list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def remove_sorted_duplicates(lst):
    if not lst: return 0
    i = 0
    for j in range(1, len(lst)):
        if lst[j] != lst[i]:
            i += 1
            lst[i] = lst[j]
    return i + 1

arr = [1, 1, 2]
k = remove_sorted_duplicates(arr)
print(arr[:k])  # [1, 2]`
                },
                {
                    id: 'array-leaders',
                    name: '10. Array Leaders',
                    description: 'Find all leaders (greater than all elements to their right).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def find_leaders(lst):
    if not lst: return []
    max_right = lst[-1]
    leaders = [max_right]
    for i in range(len(lst)-2, -1, -1):
        if lst[i] >= max_right:
            max_right = lst[i]
            leaders.append(max_right)
    return leaders[::-1]

print(find_leaders([16, 17, 4, 3, 5, 2]))  # [17, 5, 2]`
                },
                {
                    id: 'count-distinct',
                    name: '11. Count Distinct',
                    description: 'Count distinct elements in a list.',
                    syntax: 'len(set(lst))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_distinct(lst):
    return len(set(lst))

print(count_distinct([1, 2, 2, 3, 3, 3]))  # 3`
                },
                {
                    id: 'union-of-arrays-with-duplicates',
                    name: '12. Union of Arrays with Duplicates',
                    description: 'Find union of two lists.',
                    syntax: 'list(set(l1) | set(l2))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N+M)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `def array_union(l1, l2):
    return list(set(l1) | set(l2))

print(array_union([1, 2, 2], [2, 3]))  # [1, 2, 3]`
                }
            ]
        },
        {
            id: 'programs-on-list-of-strings',
            title: 'Programs on List of Strings',
            methods: [
                {
                    id: 'swap-elements-in-string-list',
                    name: '1. Swap elements in String list',
                    description: 'Swap characters within strings in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def swap_chars(lst, char1, char2):
    return [s.replace(char1, '%temp%').replace(char2, char1).replace('%temp%', char2) for s in lst]

print(swap_chars(['apple', 'banana'], 'a', 'p'))  # ['paale', 'bpnpnp']`
                },
                {
                    id: 'convert-list-to-string',
                    name: '2. Convert List to String',
                    description: 'Join a list of strings into one string.',
                    syntax: '"".join(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String operations',
                    isProblem: true,
                    solutionCode: `def list_to_string(lst):
    return " ".join(lst)

print(list_to_string(['hello', 'world']))  # "hello world"`
                },
                {
                    id: 'reverse-all-strings',
                    name: '3. Reverse All Strings in String List',
                    description: 'Reverse each string within a list.',
                    syntax: '[s[::-1] for s in lst]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def reverse_strings(lst):
    return [s[::-1] for s in lst]

print(reverse_strings(['abc', 'def']))  # ['cba', 'fed']`
                },
                {
                    id: 'character-position-of-kth-word',
                    name: '4. Character position of Kth word',
                    description: 'Find character indices for the Kth word in a flattened representation.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Indexing',
                    isProblem: true,
                    solutionCode: `def kth_word_char_pos(lst, k):
    start = 0
    for i in range(k):
        start += len(lst[i])
    return start, start + len(lst[k])

print(kth_word_char_pos(['one', 'two', 'three'], 1))  # (3, 6)`
                },
                {
                    id: 'extract-words-starting-with-k',
                    name: '5. Extract words starting with K',
                    description: 'Filter words starting with a specific letter.',
                    syntax: '[w for w in lst if w.startswith(k)]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def extract_words(lst, k):
    return [w for w in lst if w.startswith(k)]

print(extract_words(['apple', 'banana', 'apricot'], 'a'))  # ['apple', 'apricot']`
                },
                {
                    id: 'prefix-frequency-in-string-list',
                    name: '6. Prefix frequency in string List',
                    description: 'Count how many words start with a given prefix.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def prefix_freq(lst, prefix):
    return sum(1 for w in lst if w.startswith(prefix))

print(prefix_freq(['apple', 'application', 'banana'], 'app'))  # 2`
                },
                {
                    id: 'split-string-of-list-on-k',
                    name: '7. Split String of list on K',
                    description: 'Split each string in the list at character K.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def split_on_char(lst, char):
    res = []
    for s in lst:
        res.extend(s.split(char))
    return res

print(split_on_char(['a-b', 'c-d'], '-'))  # ['a', 'b', 'c', 'd']`
                },
                {
                    id: 'split-strings-on-prefix-occurrence',
                    name: '8. Split Strings on Prefix Occurrence',
                    description: 'Split list into nested lists when a word starts with prefix.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Structuring Data',
                    isProblem: true,
                    solutionCode: `def split_on_prefix(lst, prefix):
    res = []
    current = []
    for w in lst:
        if w.startswith(prefix) and current:
            res.append(current)
            current = []
        current.append(w)
    if current:
        res.append(current)
    return res

print(split_on_prefix(['startA', 'b', 'startC', 'd'], 'start'))  # [['startA', 'b'], ['startC', 'd']]`
                },
                {
                    id: 'remove-words-containing-list-characters',
                    name: '9. Remove words containing list characters',
                    description: 'Filter out words containing any of the given characters.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M * C)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_chars(lst, chars):
    char_set = set(chars)
    return [w for w in lst if not any(c in char_set for c in w)]

print(remove_chars(['apple', 'banana', 'fig'], ['a', 'b']))  # ['fig']`
                },
                {
                    id: 'remove-multiple-empty-spaces',
                    name: '10. Remove multiple empty spaces from String List',
                    description: 'Trim or remove empty strings.',
                    syntax: '[s for s in lst if s.strip()]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Cleaning Data',
                    isProblem: true,
                    solutionCode: `def remove_empty_spaces(lst):
    return [s for s in lst if s.strip()]

print(remove_empty_spaces(['a', '   ', 'b', '']))  # ['a', 'b']`
                },
                {
                    id: 'add-space-between-potential-words',
                    name: '11. Add Space between Potential Words',
                    description: 'Add spaces before capital letters (CamelCase split).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `import re
def split_camel_case(lst):
    return [re.sub(r'([A-Z])', r' \\1', s).strip() for s in lst]

print(split_camel_case(['CamelCase', 'HelloWorld']))  # ['Camel Case', 'Hello World']`
                },
                {
                    id: 'convert-character-matrix',
                    name: '12. Convert Character Matrix to single String',
                    description: 'Flatten a matrix of characters into one string.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Conversion',
                    isProblem: true,
                    solutionCode: `def matrix_to_string(matrix):
    return "".join(char for row in matrix for char in row)

print(matrix_to_string([['a', 'b'], ['c', 'd']]))  # "abcd"`
                },
                {
                    id: 'filter-strings-by-substring-match',
                    name: '13. Filter strings by substring match in second List',
                    description: 'Keep strings that contain any substring from another list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def filter_by_substring(lst, subs):
    return [s for s in lst if any(sub in s for sub in subs)]

print(filter_by_substring(['apple', 'banana', 'fig'], ['app', 'ig']))  # ['apple', 'fig']`
                },
                {
                    id: 'replace-all-chars-except-given',
                    name: '14. Replace all chars in list except given one',
                    description: 'Replace all characters in string except specific ones.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def keep_only(lst, keep_char, replace_with='*'):
    return ["".join(c if c == keep_char else replace_with for c in s) for s in lst]

print(keep_only(['apple', 'banana'], 'a'))  # ['a****', '*a*a*a']`
                },
                {
                    id: 'converting-strings-to-integers',
                    name: '15. Converting all Strings in a list to integers',
                    description: 'Cast all strings to integers.',
                    syntax: '[int(x) for x in lst]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Type Conversion',
                    isProblem: true,
                    solutionCode: `def to_ints(lst):
    return [int(x) for x in lst]

print(to_ints(['1', '2', '3']))  # [1, 2, 3]`
                },
                {
                    id: 'convert-string-representation',
                    name: '16. Convert String Representation of a List into List',
                    description: 'Parse a string like "[1, 2, 3]" into an actual list.',
                    syntax: 'ast.literal_eval(s)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Parsing',
                    isProblem: true,
                    solutionCode: `import ast
def parse_list(s):
    return ast.literal_eval(s)

print(parse_list("[1, 2, 3]"))  # [1, 2, 3]`
                }
            ]
        },
        {
            id: 'programs-on-list-of-lists',
            title: 'Programs on List of Lists',
            methods: [
                {
                    id: 'remove-empty-list',
                    name: '1. Remove empty List from List',
                    description: 'Remove any empty sublists.',
                    syntax: '[x for x in lst if x]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_empty_lists(lst):
    return [x for x in lst if x]

print(remove_empty_lists([[1, 2], [], [3], []]))  # [[1, 2], [3]]`
                },
                {
                    id: 'convert-list-to-list-of-dictionaries',
                    name: '2. Convert List to List of dictionaries',
                    description: 'Convert keys and values into a list of dicts.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def list_to_dict_list(keys, values):
    return [{keys[i]: values[i]} for i in range(len(keys))]

print(list_to_dict_list(['a', 'b'], [1, 2]))  # [{'a': 1}, {'b': 2}]`
                },
                {
                    id: 'convert-lists-of-list-to-dictionary',
                    name: '3. Convert Lists of List to Dictionary',
                    description: 'Convert a list of pairs into a dictionary.',
                    syntax: 'dict(lst)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def lists_to_dict(lst):
    return dict(lst)

print(lists_to_dict([['a', 1], ['b', 2]]))  # {'a': 1, 'b': 2}`
                },
                {
                    id: 'uncommon-elements-in-lists-of-list',
                    name: '4. Uncommon elements in Lists of List',
                    description: 'Find elements present in one sublist but not others.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `def uncommon_elements(l1, l2):
    return list(set(l1) ^ set(l2))

print(uncommon_elements([1, 2, 3], [2, 3, 4]))  # [1, 4]`
                },
                {
                    id: 'select-random-value-from-list-of-lists',
                    name: '5. Select Random value from list of lists',
                    description: 'Select a random element from a flattened list of lists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Randomization',
                    isProblem: true,
                    solutionCode: `import random
def random_from_nested(lst):
    flat = [item for sublist in lst for item in sublist]
    return random.choice(flat) if flat else None

# Output varies
print(random_from_nested([[1, 2], [3, 4]]))`
                },
                {
                    id: 'reverse-row-sort-in-lists-of-list',
                    name: '6. Reverse Row sort in Lists of List',
                    description: 'Sort each sublist in descending order.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M log M)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def reverse_row_sort(lst):
    return [sorted(sub, reverse=True) for sub in lst]

print(reverse_row_sort([[1, 3, 2], [5, 4]]))  # [[3, 2, 1], [5, 4]]`
                },
                {
                    id: 'pair-elements-with-rear-element',
                    name: '7. Pair elements with Rear element in Matrix Row',
                    description: 'Pair each element in a row with the last element of the row.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Data Manipulation',
                    isProblem: true,
                    solutionCode: `def pair_with_rear(matrix):
    res = []
    for row in matrix:
        if row:
            res.append([(x, row[-1]) for x in row[:-1]])
    return res

print(pair_with_rear([[1, 2, 3], [4, 5]]))  # [[(1, 3), (2, 3)], [(4, 5)]]`
                }
            ]
        },
        {
            id: 'programs-on-substring-and-sublists',
            title: 'Programs on SubString and SubLists',
            methods: [
                {
                    id: 'count-strings-with-substring',
                    name: '1. Count Strings with substring',
                    description: 'Count how many strings contain a specific substring.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_with_substring(lst, sub):
    return sum(1 for s in lst if sub in s)

print(count_with_substring(['apple', 'maple', 'banana'], 'ple'))  # 2`
                },
                {
                    id: 'test-if-substring-occurs-in-specific-position',
                    name: '2. Test if Substring occurs in specific position',
                    description: 'Check if substring exists at a specific index in all strings.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String Checking',
                    isProblem: true,
                    solutionCode: `def substring_at_pos(lst, sub, pos):
    return all(s.find(sub) == pos for s in lst)

print(substring_at_pos(['apple', 'apricot'], 'ap', 0))  # True`
                },
                {
                    id: 'replace-substrings-from-string-list',
                    name: '3. Replace Substrings from String List',
                    description: 'Replace a specific substring in all elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def replace_subs(lst, old, new):
    return [s.replace(old, new) for s in lst]

print(replace_subs(['hello', 'yellow'], 'ell', 'a'))  # ['hao', 'yaow']`
                },
                {
                    id: 'remove-redundant-substrings',
                    name: '4. Remove Redundant Substrings from Strings List',
                    description: 'Remove strings that are substrings of another string in the list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2 * M)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_redundant(lst):
    lst.sort(key=len, reverse=True)
    res = []
    for s in lst:
        if not any(s in r for r in res):
            res.append(s)
    return res

print(remove_redundant(['a', 'abc', 'bc', 'def']))  # ['abc', 'def']`
                },
                {
                    id: 'group-sublists-by-another-list',
                    name: '5. Group Sublists by another List',
                    description: 'Group items based on a reference key list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Grouping',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def group_by_list(values, keys):
    groups = defaultdict(list)
    for k, v in zip(keys, values):
        groups[k].append(v)
    return dict(groups)

print(group_by_list([1, 2, 3], ['A', 'A', 'B']))  # {'A': [1, 2], 'B': [3]}`
                },
                {
                    id: 'sort-string-by-custom-integer-substrings',
                    name: '6. Sort String by Custom Integer Substrings',
                    description: 'Sort strings based on integer values extracted from them.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `import re
def sort_by_extracted_int(lst):
    return sorted(lst, key=lambda s: int(re.search(r'\\d+', s).group()) if re.search(r'\\d+', s) else 0)

print(sort_by_extracted_int(['item10', 'item2', 'item1']))  # ['item1', 'item2', 'item10']`
                },
                {
                    id: 'finding-strings-with-given-substring',
                    name: '7. Finding strings with given substring in List',
                    description: 'Return strings containing the substring.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def find_with_substring(lst, sub):
    return [s for s in lst if sub in s]

print(find_with_substring(['apple', 'maple', 'banana'], 'ple'))  # ['apple', 'maple']`
                },
                {
                    id: 'remove-all-values-from-a-list',
                    name: '8. Remove all values from a list present in another List',
                    description: 'Remove all elements that are in a removal list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_values(lst, to_remove):
    remove_set = set(to_remove)
    return [x for x in lst if x not in remove_set]

print(remove_values([1, 2, 3, 4], [2, 4]))  # [1, 3]`
                },
                {
                    id: 'print-all-sublists',
                    name: '9. Print all sublists of a List',
                    description: 'Generate and print all contiguous sublists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Combinatorics',
                    isProblem: true,
                    solutionCode: `def all_sublists(lst):
    res = []
    for i in range(len(lst)):
        for j in range(i + 1, len(lst) + 1):
            res.append(lst[i:j])
    return res

print(all_sublists([1, 2]))  # [[1], [1, 2], [2]]`
                }
            ]
        },
        {
            id: 'coding-problems-on-substring-and-sublists',
            title: 'Coding Problems on Substring and Sublists',
            methods: [
                {
                    id: 'reverse-array-in-groups',
                    name: '1. Reverse Array in Groups',
                    description: 'Reverse array elements in groups of given size K.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def reverse_in_groups(lst, k):
    for i in range(0, len(lst), k):
        lst[i:i+k] = reversed(lst[i:i+k])
    return lst

print(reverse_in_groups([1, 2, 3, 4, 5], 3))  # [3, 2, 1, 5, 4]`
                },
                {
                    id: 'maximum-product-subarray',
                    name: '2. Maximum Product Subarray',
                    description: 'Find the contiguous subarray with maximum product.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def max_product_subarray(lst):
    if not lst: return 0
    max_prod = min_prod = res = lst[0]
    for n in lst[1:]:
        if n < 0:
            max_prod, min_prod = min_prod, max_prod
        max_prod = max(n, max_prod * n)
        min_prod = min(n, min_prod * n)
        res = max(res, max_prod)
    return res

print(max_product_subarray([2, 3, -2, 4]))  # 6`
                },
                {
                    id: 'split-array-three-equal-sum',
                    name: '3. Split array in three equal sum subarrays',
                    description: 'Check if array can be split into three subarrays of equal sum.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def split_three_equal(lst):
    total = sum(lst)
    if total % 3 != 0: return False
    target = total // 3
    parts = 0
    current = 0
    for n in lst:
        current += n
        if current == target:
            parts += 1
            current = 0
    return parts >= 3

print(split_three_equal([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]))  # True`
                },
                {
                    id: 'longest-bitonic-subsequence',
                    name: '4. Longest Bitonic subsequence',
                    description: 'Find length of longest subsequence that first increases then decreases.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Dynamic Programming',
                    isProblem: true,
                    solutionCode: `def bitonic_subsequence(lst):
    n = len(lst)
    if n == 0: return 0
    inc = [1] * n
    dec = [1] * n
    for i in range(1, n):
        for j in range(i):
            if lst[i] > lst[j]:
                inc[i] = max(inc[i], inc[j] + 1)
    for i in range(n-2, -1, -1):
        for j in range(n-1, i, -1):
            if lst[i] > lst[j]:
                dec[i] = max(dec[i], dec[j] + 1)
    return max(inc[i] + dec[i] - 1 for i in range(n))

print(bitonic_subsequence([1, 11, 2, 10, 4, 5, 2, 1]))  # 6`
                },
                {
                    id: 'count-subarrays-k-distinct',
                    name: '5. Count Subarrays with K Distinct Elements',
                    description: 'Count number of subarrays with exactly K distinct elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sliding Window',
                    isProblem: true,
                    solutionCode: `def exactly_k_distinct(lst, k):
    def at_most_k(k):
        count = left = 0
        freq = {}
        for right in range(len(lst)):
            freq[lst[right]] = freq.get(lst[right], 0) + 1
            while len(freq) > k:
                freq[lst[left]] -= 1
                if freq[lst[left]] == 0: del freq[lst[left]]
                left += 1
            count += right - left + 1
        return count
    return at_most_k(k) - at_most_k(k - 1)

print(exactly_k_distinct([1, 2, 1, 2, 3], 2))  # 7`
                }
            ]
        },
        {
            id: 'advance-list-programs',
            title: 'Advance List Programs',
            methods: [
                {
                    id: 'count-unique-items-in-a-list',
                    name: '1. Count unique items in a list',
                    description: 'Get the number of unique elements.',
                    syntax: 'len(set(lst))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_unique(lst):
    return len(set(lst))

print(count_unique([1, 2, 2, 3]))  # 3`
                },
                {
                    id: 'list-product-excluding-duplicates',
                    name: '2. List product excluding duplicates',
                    description: 'Multiply all unique items in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def product_unique(lst):
    unique = set(lst)
    prod = 1
    for x in unique:
        prod *= x
    return prod

print(product_unique([1, 2, 2, 3]))  # 6`
                },
                {
                    id: 'extract-elements-with-frequency-greater-than-k',
                    name: '3. Extract elements with Frequency greater than K',
                    description: 'Get elements appearing more than K times.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def extract_freq_gt_k(lst, k):
    counts = Counter(lst)
    return [key for key, val in counts.items() if val > k]

print(extract_freq_gt_k([1, 1, 1, 2, 2, 3], 2))  # [1]`
                },
                {
                    id: 'test-if-list-contains-elements-in-range',
                    name: '4. Test if List contains elements in Range',
                    description: 'Check if all elements fall within [start, end].',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Validation',
                    isProblem: true,
                    solutionCode: `def in_range(lst, start, end):
    return all(start <= x <= end for x in lst)

print(in_range([5, 6, 7], 4, 8))  # True`
                },
                {
                    id: 'check-if-list-contains-three-consecutive',
                    name: '5. Check if list contains three consecutive common numbers',
                    description: 'Check if any number appears 3 times in a row.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Pattern Matching',
                    isProblem: true,
                    solutionCode: `def three_consecutive(lst):
    for i in range(len(lst) - 2):
        if lst[i] == lst[i+1] == lst[i+2]:
            return lst[i]
    return None

print(three_consecutive([1, 2, 2, 2, 3]))  # 2`
                },
                {
                    id: 'find-strongest-neighbour',
                    name: '6. Find Strongest Neighbour',
                    description: 'Find max of each adjacent pair.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def strongest_neighbour(lst):
    return [max(lst[i], lst[i+1]) for i in range(len(lst)-1)]

print(strongest_neighbour([1, 2, 2, 3, 4, 5]))  # [2, 2, 3, 4, 5]`
                },
                {
                    id: 'possible-combinations-from-three-digits',
                    name: '7. Possible Combinations from three Digits',
                    description: 'Print all permutations of three given digits.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Combinatorics',
                    isProblem: true,
                    solutionCode: `import itertools
def three_digit_combos(digits):
    return list(itertools.permutations(digits, 3))

print(three_digit_combos([1, 2, 3]))  # [(1,2,3), (1,3,2), ...]`
                },
                {
                    id: 'find-all-combinations-in-list-with-given-condition',
                    name: '8. Find all Combinations in list with given condition',
                    description: 'Find combos matching condition (e.g. sum to target).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(2^N)',
                    commonUseCases: 'Combinatorics',
                    isProblem: true,
                    solutionCode: `import itertools
def combos_with_sum(lst, target):
    res = []
    for r in range(1, len(lst) + 1):
        for combo in itertools.combinations(lst, r):
            if sum(combo) == target:
                res.append(combo)
    return res

print(combos_with_sum([1, 2, 3], 3))  # [(3,), (1, 2)]`
                },
                {
                    id: 'get-all-unique-combinations-of-two-lists',
                    name: '9. Get all unique combinations of two Lists',
                    description: 'Cartesian product of two lists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Combinatorics',
                    isProblem: true,
                    solutionCode: `import itertools
def unique_combos(l1, l2):
    return list(itertools.product(l1, l2))

print(unique_combos([1, 2], ['a', 'b']))  # [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]`
                },
                {
                    id: 'remove-all-occurrences-of-an-element',
                    name: '10. Remove all occurrences of an element from a list',
                    description: 'Remove a target element completely.',
                    syntax: '[x for x in lst if x != target]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_all_occurrences(lst, target):
    return [x for x in lst if x != target]

print(remove_all_occurrences([1, 2, 2, 3], 2))  # [1, 3]`
                },
                {
                    id: 'remove-consecutive-k-element-records',
                    name: '11. Remove Consecutive K element records',
                    description: 'Remove elements that appear consecutively K times.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_consecutive_k(lst, k):
    res = []
    count = 0
    prev = None
    for x in lst:
        if x == prev:
            count += 1
        else:
            if count > 0 and count != k:
                res.extend([prev] * count)
            elif count > 0 and count == k:
                pass # skip
            prev = x
            count = 1
    if count != k:
        res.extend([prev] * count)
    return res

print(remove_consecutive_k([1, 2, 2, 3, 3, 3, 4], 3))  # [1, 2, 2, 4]`
                },
                {
                    id: 'replace-index-elements-with-other-list',
                    name: '12. Replace index elements with elements in Other List',
                    description: 'Replace values at given indices with elements from another list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(K)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def replace_indices(lst, indices, values):
    for idx, val in zip(indices, values):
        lst[idx] = val
    return lst

print(replace_indices([0, 0, 0, 0], [1, 3], [9, 8]))  # [0, 9, 0, 8]`
                },
                {
                    id: 'retain-records-with-n-occurrences',
                    name: '13. Retain records with N occurrences of K',
                    description: 'Keep sublists that contain exactly N occurrences of K.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def retain_n_occurrences(lst_of_lsts, n, k):
    return [sub for sub in lst_of_lsts if sub.count(k) == n]

print(retain_n_occurrences([[1, 2, 2], [1, 2], [2, 2, 2]], 2, 2))  # [[1, 2, 2]]`
                },
                {
                    id: 'sort-list-according-to-column',
                    name: '14. Sort list according to column using lambda',
                    description: 'Sort a list of lists by a specific index.',
                    syntax: 'lst.sort(key=lambda x: x[col])',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_by_col(lst, col):
    return sorted(lst, key=lambda x: x[col])

print(sort_by_col([[1, 3], [2, 1], [3, 2]], 1))  # [[2, 1], [3, 2], [1, 3]]`
                },
                {
                    id: 'create-list-of-numbers',
                    name: '15. Create list of numbers with given range',
                    description: 'Generate list of numbers within range.',
                    syntax: 'list(range(start, end))',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Generation',
                    isProblem: true,
                    solutionCode: `def create_range_list(start, end):
    return list(range(start, end + 1))

print(create_range_list(1, 5))  # [1, 2, 3, 4, 5]`
                },
                {
                    id: 'check-if-object-is-list',
                    name: '16. Check if a given object is a list or Not',
                    description: 'Check type of an object.',
                    syntax: 'isinstance(obj, list)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Validation',
                    isProblem: true,
                    solutionCode: `def is_list(obj):
    return isinstance(obj, list)

print(is_list([1, 2]))  # True
print(is_list(123))     # False`
                },
                {
                    id: 'break-a-list-into-chunks',
                    name: '17. Break a list into chunks of size N',
                    description: 'Split list into N-sized chunks.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Structuring Data',
                    isProblem: true,
                    solutionCode: `def chunk_list(lst, n):
    return [lst[i:i + n] for i in range(0, len(lst), n)]

print(chunk_list([1, 2, 3, 4, 5], 2))  # [[1, 2], [3, 4], [5]]`
                },
                {
                    id: 'get-last-n-elements',
                    name: '18. Get last N elements from given list',
                    description: 'Slice the last N elements.',
                    syntax: 'lst[-n:]',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Slicing',
                    isProblem: true,
                    solutionCode: `def last_n(lst, n):
    return lst[-n:] if n > 0 else []

print(last_n([1, 2, 3, 4], 2))  # [3, 4]`
                }
            ]
        },
        {
            id: 'advance-coding-problems-on-list',
            title: 'Advance Coding Problems on List',
            methods: [
                {
                    id: 'not-a-subset-sum',
                    name: '1. Not a subset sum',
                    description: 'Find smallest positive integer that cannot be represented as sum of subset.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def smallest_non_subset_sum(lst):
    lst.sort()
    res = 1
    for n in lst:
        if n > res:
            break
        res += n
    return res

print(smallest_non_subset_sum([1, 2, 5]))  # 4`
                },
                {
                    id: 'minimum-jumps',
                    name: '2. Minimum Jumps',
                    description: 'Minimum jumps to reach the end of array.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Greedy',
                    isProblem: true,
                    solutionCode: `def min_jumps(lst):
    if len(lst) <= 1: return 0
    if lst[0] == 0: return -1
    jumps, curr_end, curr_farthest = 1, lst[0], lst[0]
    for i in range(1, len(lst)):
        if i == len(lst) - 1: return jumps
        curr_farthest = max(curr_farthest, i + lst[i])
        if i == curr_end:
            jumps += 1
            curr_end = curr_farthest
            if curr_end <= i: return -1
    return -1

print(min_jumps([2, 3, 1, 1, 4]))  # 2`
                },
                {
                    id: 'smallest-missing-positive',
                    name: '3. Smallest Missing Positive Number',
                    description: 'Find the smallest missing positive integer.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def first_missing_positive(lst):
    n = len(lst)
    for i in range(n):
        while 1 <= lst[i] <= n and lst[lst[i] - 1] != lst[i]:
            lst[lst[i] - 1], lst[i] = lst[i], lst[lst[i] - 1]
    for i in range(n):
        if lst[i] != i + 1:
            return i + 1
    return n + 1

print(first_missing_positive([3, 4, -1, 1]))  # 2`
                },
                {
                    id: 'trapping-rain-water',
                    name: '4. Trapping Rain Water',
                    description: 'Calculate trapped rainwater over elevation map.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def trap_water(lst):
    if not lst: return 0
    left, right = 0, len(lst) - 1
    max_l, max_r = lst[left], lst[right]
    res = 0
    while left < right:
        if max_l < max_r:
            left += 1
            max_l = max(max_l, lst[left])
            res += max_l - lst[left]
        else:
            right -= 1
            max_r = max(max_r, lst[right])
            res += max_r - lst[right]
    return res

print(trap_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6`
                },
                {
                    id: 'alternate-positive-negative',
                    name: '5. Alternate Positive Negative',
                    description: 'Rearrange array in alternating positive & negative items.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Manipulation',
                    isProblem: true,
                    solutionCode: `def alternate_pos_neg(lst):
    pos = [x for x in lst if x >= 0]
    neg = [x for x in lst if x < 0]
    res = []
    i = j = 0
    while i < len(pos) and j < len(neg):
        res.append(pos[i])
        res.append(neg[j])
        i += 1; j += 1
    res.extend(pos[i:])
    res.extend(neg[j:])
    return res

print(alternate_pos_neg([1, 2, 3, -4, -1, 4]))  # [1, -4, 2, -1, 3, 4]`
                },
                {
                    id: 'max-distance-same-elements',
                    name: '6. Max distance between same elements',
                    description: 'Find max difference of indices for identical elements.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Hashing',
                    isProblem: true,
                    solutionCode: `def max_dist(lst):
    first_occ = {}
    max_d = 0
    for i, x in enumerate(lst):
        if x in first_occ:
            max_d = max(max_d, i - first_occ[x])
        else:
            first_occ[x] = i
    return max_d

print(max_dist([3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]))  # 10`
                },
                {
                    id: 'transform-and-sort-array',
                    name: '7. Transform and Sort Array',
                    description: 'Apply function (e.g. A*x^2 + B*x + C) and sort.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Two Pointers',
                    isProblem: true,
                    solutionCode: `def sort_transformed(lst, a, b, c):
    def f(x): return a*x*x + b*x + c
    res = [0]*len(lst)
    l, r = 0, len(lst) - 1
    idx = len(lst) - 1 if a >= 0 else 0
    step = -1 if a >= 0 else 1
    while l <= r:
        v_l, v_r = f(lst[l]), f(lst[r])
        if (a >= 0 and v_l > v_r) or (a < 0 and v_l < v_r):
            res[idx] = v_l; l += 1
        else:
            res[idx] = v_r; r -= 1
        idx += step
    return res

print(sort_transformed([-4, -2, 2, 4], 1, 3, 5))  # [3, 9, 15, 33]`
                },
                {
                    id: 'maximize-number-of-1s',
                    name: '8. Maximize Number of 1s',
                    description: 'Find max continuous 1s after flipping at most m 0s.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Sliding Window',
                    isProblem: true,
                    solutionCode: `def max_ones(lst, m):
    left = right = max_len = zeroes = 0
    while right < len(lst):
        if lst[right] == 0: zeroes += 1
        while zeroes > m:
            if lst[left] == 0: zeroes -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
        right += 1
    return max_len

print(max_ones([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2))  # 8`
                },
                {
                    id: 'product-array-puzzle',
                    name: '9. Product Array Puzzle',
                    description: 'Construct product array where res[i] is product of all but lst[i].',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def product_puzzle(lst):
    n = len(lst)
    res = [1] * n
    left = 1
    for i in range(n):
        res[i] = left
        left *= lst[i]
    right = 1
    for i in range(n-1, -1, -1):
        res[i] *= right
        right *= lst[i]
    return res

print(product_puzzle([10, 3, 5, 6]))  # [90, 300, 180, 150]`
                }
            ]
        }
    ]
};
