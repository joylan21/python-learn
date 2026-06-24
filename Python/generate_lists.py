import json

methods = [
    # Adding & Removing
    {'name': 'append()', 'description': 'Adds an element at the end of the list', 'syntax': 'list.append(elm)', 'example': 'nums = [1, 2]\nnums.append(3)\nprint(nums)', 'output': '[1, 2, 3]', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Adding a single item.'},
    {'name': 'extend()', 'description': 'Add the elements of a list (or any iterable), to the end of the current list', 'syntax': 'list.extend(iterable)', 'example': 'nums = [1, 2]\nnums.extend([3, 4])\nprint(nums)', 'output': '[1, 2, 3, 4]', 'mutates': True, 'timeComplexity': 'O(k)', 'commonUseCases': 'Merging lists.'},
    {'name': 'insert()', 'description': 'Adds an element at the specified position', 'syntax': 'list.insert(pos, elm)', 'example': 'nums = [1, 3]\nnums.insert(1, 2)\nprint(nums)', 'output': '[1, 2, 3]', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'Inserting at index.'},
    {'name': 'remove()', 'description': 'Removes the first item with the specified value', 'syntax': 'list.remove(elm)', 'example': 'nums = [1, 2, 2]\nnums.remove(2)\nprint(nums)', 'output': '[1, 2]', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'Removing by value.'},
    {'name': 'pop()', 'description': 'Removes the element at the specified position (or the last item if index is not specified)', 'syntax': 'list.pop(pos)', 'example': 'nums = [1, 2, 3]\npopped = nums.pop()\nprint(popped, nums)', 'output': '3 [1, 2]', 'mutates': True, 'timeComplexity': 'O(1) last, O(n) arbitrary', 'commonUseCases': 'Stack operations.'},
    {'name': 'clear()', 'description': 'Removes all the elements from the list', 'syntax': 'list.clear()', 'example': 'nums = [1, 2]\nnums.clear()\nprint(nums)', 'output': '[]', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'Emptying a list.'},

    # Organizing & Modifying
    {'name': 'sort()', 'description': 'Sorts the list', 'syntax': 'list.sort(reverse=True|False, key=myFunc)', 'example': 'nums = [3, 1, 2]\nnums.sort()\nprint(nums)', 'output': '[1, 2, 3]', 'mutates': True, 'timeComplexity': 'O(n log n)', 'commonUseCases': 'In-place sorting.'},
    {'name': 'reverse()', 'description': 'Reverses the order of the list', 'syntax': 'list.reverse()', 'example': 'nums = [1, 2, 3]\nnums.reverse()\nprint(nums)', 'output': '[3, 2, 1]', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'In-place reversing.'},
    {'name': 'copy()', 'description': 'Returns a shallow copy of the list', 'syntax': 'list.copy()', 'example': 'nums = [1, 2]\nnew_nums = nums.copy()\nprint(new_nums)', 'output': '[1, 2]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Cloning lists.'},

    # Searching & Counting
    {'name': 'index()', 'description': 'Returns the index of the first element with the specified value', 'syntax': 'list.index(elm)', 'example': 'nums = [1, 2, 3]\nprint(nums.index(2))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Finding items.'},
    {'name': 'count()', 'description': 'Returns the number of elements with the specified value', 'syntax': 'list.count(elm)', 'example': 'nums = [1, 2, 2]\nprint(nums.count(2))', 'output': '2', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Counting duplicates.'},

    # Built-in Functions (Math & Stats)
    {'name': 'len()', 'description': 'Returns the number of items in an object', 'syntax': 'len(object)', 'example': 'nums = [1, 2, 3]\nprint(len(nums))', 'output': '3', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Getting size.'},
    {'name': 'min()', 'description': 'Returns the smallest item in an iterable', 'syntax': 'min(iterable)', 'example': 'nums = [3, 1, 2]\nprint(min(nums))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Finding minimum.'},
    {'name': 'max()', 'description': 'Returns the largest item in an iterable', 'syntax': 'max(iterable)', 'example': 'nums = [3, 1, 2]\nprint(max(nums))', 'output': '3', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Finding maximum.'},
    {'name': 'sum()', 'description': 'Sums the items of an iterator', 'syntax': 'sum(iterable, start)', 'example': 'nums = [1, 2, 3]\nprint(sum(nums))', 'output': '6', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Adding items.'},
    {'name': 'abs()', 'description': 'Returns the absolute value of a number (not a list method, but useful with map)', 'syntax': 'abs(number)', 'example': 'nums = [-1, -2]\nprint(list(map(abs, nums)))', 'output': '[1, 2]', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Math operations.'},
    {'name': 'round()', 'description': 'Rounds a number (not a list method, but useful with map)', 'syntax': 'round(number, ndigits)', 'example': 'nums = [1.2, 3.8]\nprint(list(map(round, nums)))', 'output': '[1, 4]', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Math operations.'},

    # Built-in Functions (Iteration & Functional)
    {'name': 'sorted()', 'description': 'Returns a sorted list of the specified iterable object', 'syntax': 'sorted(iterable, key=key, reverse=reverse)', 'example': 'nums = [3, 1, 2]\nprint(sorted(nums))', 'output': '[1, 2, 3]', 'mutates': False, 'timeComplexity': 'O(n log n)', 'commonUseCases': 'Sorting out-of-place.'},
    {'name': 'reversed()', 'description': 'Returns a reversed iterator object', 'syntax': 'reversed(sequence)', 'example': 'nums = [1, 2, 3]\nprint(list(reversed(nums)))', 'output': '[3, 2, 1]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Reversing out-of-place.'},
    {'name': 'enumerate()', 'description': 'Takes a collection and returns it as an enumerate object', 'syntax': 'enumerate(iterable, start=0)', 'example': 'chars = ["a", "b"]\nprint(list(enumerate(chars)))', 'output': '[(0, "a"), (1, "b")]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Iterating with index.'},
    {'name': 'zip()', 'description': 'Returns an iterator, from two or more iterators', 'syntax': 'zip(*iterables)', 'example': 'a = [1, 2]\nb = ["x", "y"]\nprint(list(zip(a, b)))', 'output': '[(1, "x"), (2, "y")]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Combining iterables.'},
    {'name': 'map()', 'description': 'Returns a map object(which is an iterator) of the results after applying the given function to each item', 'syntax': 'map(function, iterables)', 'example': 'nums = [1, 2]\nprint(list(map(str, nums)))', 'output': '["1", "2"]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Transforming items.'},
    {'name': 'filter()', 'description': 'Use a filter function to exclude items in an iterable object', 'syntax': 'filter(function, iterable)', 'example': 'nums = [1, 2, 3]\nprint(list(filter(lambda x: x>1, nums)))', 'output': '[2, 3]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Filtering items.'},
    {'name': 'any()', 'description': 'Returns True if any item in an iterable object is true', 'syntax': 'any(iterable)', 'example': 'bools = [False, True, False]\nprint(any(bools))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Logical OR.'},
    {'name': 'all()', 'description': 'Returns True if all items in an iterable object are true', 'syntax': 'all(iterable)', 'example': 'bools = [True, True]\nprint(all(bools))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Logical AND.'},
    {'name': 'iter()', 'description': 'Returns an iterator object', 'syntax': 'iter(object)', 'example': 'my_iter = iter([1, 2])\nprint(next(my_iter))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Manual iteration.'},
    {'name': 'next()', 'description': 'Returns the next item in an iterator', 'syntax': 'next(iterator, default)', 'example': 'my_iter = iter([1, 2])\nnext(my_iter)\nprint(next(my_iter))', 'output': '2', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Manual iteration.'},

    # Built-in Functions (Type Conversion & Slicing)
    {'name': 'list()', 'description': 'Creates a list object', 'syntax': 'list(iterable)', 'example': 'print(list("abc"))', 'output': '["a", "b", "c"]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Type casting.'},
    {'name': 'tuple()', 'description': 'Creates a tuple object', 'syntax': 'tuple(iterable)', 'example': 'print(tuple([1, 2]))', 'output': '(1, 2)', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Type casting.'},
    {'name': 'set()', 'description': 'Creates a set object', 'syntax': 'set(iterable)', 'example': 'print(set([1, 1, 2]))', 'output': '{1, 2}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Removing duplicates.'},
    {'name': 'dict()', 'description': 'Creates a dictionary', 'syntax': 'dict(iterable)', 'example': 'print(dict([("a", 1)]))', 'output': '{"a": 1}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Type casting.'},
    {'name': 'slice()', 'description': 'Returns a slice object', 'syntax': 'slice(start, end, step)', 'example': 'nums = [0, 1, 2, 3]\ns = slice(1, 3)\nprint(nums[s])', 'output': '[1, 2]', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Dynamic slicing.'},
]

groups = {
    'adding-removing': ('Adding & Removing', methods[0:6]),
    'organizing-modifying': ('Organizing & Modifying', methods[6:9]),
    'searching-counting': ('Searching & Counting', methods[9:11]),
    'math-stats': ('Built-in Math & Stats', methods[11:17]),
    'iteration-functional': ('Iteration & Functional', methods[17:27]),
    'type-conversion': ('Type Conversion & Slicing', methods[27:32]),
}

output = 'import type { Category } from "./types";\n\nexport const listMethods: Category = {\n  id: "lists",\n  title: "Lists & Built-ins",\n  subsections: [\n'

for group_id, (group_title, group_methods) in groups.items():
    output += f'    {{\n      id: "{group_id}",\n      title: "{group_title}",\n      methods: [\n'
    for method in group_methods:
        method_id = method['name'].split('(')[0]
        mutates_str = 'true' if method['mutates'] else 'false'
        output += f'''        {{
          id: "{method_id}",
          name: "{method['name']}",
          description: "{method['description']}",
          syntax: "{method['syntax']}",
          example: {json.dumps(method['example'])},
          output: {json.dumps(method['output'])},
          mutates: {mutates_str},
          timeComplexity: "{method['timeComplexity']}",
          commonUseCases: "{method['commonUseCases']}"
        }},
'''
    output += "      ]\n    },\n"

output += "  ]\n};\n"

with open('d:/Learnings/Webpages/Python/src/data/listMethods.ts', 'w', encoding='utf-8') as f:
    f.write(output)
