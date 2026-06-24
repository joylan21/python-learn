import type { Category } from "./types";

export const listMethods: Category = {
  id: "lists",
  title: "Lists & Built-ins",
  subsections: [
    {
      id: "adding-removing",
      title: "Adding & Removing",
      methods: [
        {
          id: "append",
          name: "append()",
          description: "Adds an element at the end of the list",
          syntax: "list.append(elm)",
          example: "nums = [1, 2]\nnums.append(3)\nprint(nums)",
          output: "[1, 2, 3]",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Adding a single item."
        },
        {
          id: "extend",
          name: "extend()",
          description: "Add the elements of a list (or any iterable), to the end of the current list",
          syntax: "list.extend(iterable)",
          example: "nums = [1, 2]\nnums.extend([3, 4])\nprint(nums)",
          output: "[1, 2, 3, 4]",
          mutates: true,
          timeComplexity: "O(k)",
          commonUseCases: "Merging lists."
        },
        {
          id: "insert",
          name: "insert()",
          description: "Adds an element at the specified position",
          syntax: "list.insert(pos, elm)",
          example: "nums = [1, 3]\nnums.insert(1, 2)\nprint(nums)",
          output: "[1, 2, 3]",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "Inserting at index."
        },
        {
          id: "remove",
          name: "remove()",
          description: "Removes the first item with the specified value",
          syntax: "list.remove(elm)",
          example: "nums = [1, 2, 2]\nnums.remove(2)\nprint(nums)",
          output: "[1, 2]",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "Removing by value."
        },
        {
          id: "pop",
          name: "pop()",
          description: "Removes the element at the specified position (or the last item if index is not specified)",
          syntax: "list.pop(pos)",
          example: "nums = [1, 2, 3]\npopped = nums.pop()\nprint(popped, nums)",
          output: "3 [1, 2]",
          mutates: true,
          timeComplexity: "O(1) last, O(n) arbitrary",
          commonUseCases: "Stack operations."
        },
        {
          id: "clear",
          name: "clear()",
          description: "Removes all the elements from the list",
          syntax: "list.clear()",
          example: "nums = [1, 2]\nnums.clear()\nprint(nums)",
          output: "[]",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "Emptying a list."
        },
      ]
    },
    {
      id: "organizing-modifying",
      title: "Organizing & Modifying",
      methods: [
        {
          id: "sort",
          name: "sort()",
          description: "Sorts the list",
          syntax: "list.sort(reverse=True|False, key=myFunc)",
          example: "nums = [3, 1, 2]\nnums.sort()\nprint(nums)",
          output: "[1, 2, 3]",
          mutates: true,
          timeComplexity: "O(n log n)",
          commonUseCases: "In-place sorting."
        },
        {
          id: "reverse",
          name: "reverse()",
          description: "Reverses the order of the list",
          syntax: "list.reverse()",
          example: "nums = [1, 2, 3]\nnums.reverse()\nprint(nums)",
          output: "[3, 2, 1]",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "In-place reversing."
        },
        {
          id: "copy",
          name: "copy()",
          description: "Returns a shallow copy of the list",
          syntax: "list.copy()",
          example: "nums = [1, 2]\nnew_nums = nums.copy()\nprint(new_nums)",
          output: "[1, 2]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Cloning lists."
        },
      ]
    },
    {
      id: "searching-counting",
      title: "Searching & Counting",
      methods: [
        {
          id: "index",
          name: "index()",
          description: "Returns the index of the first element with the specified value",
          syntax: "list.index(elm)",
          example: "nums = [1, 2, 3]\nprint(nums.index(2))",
          output: "1",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Finding items."
        },
        {
          id: "count",
          name: "count()",
          description: "Returns the number of elements with the specified value",
          syntax: "list.count(elm)",
          example: "nums = [1, 2, 2]\nprint(nums.count(2))",
          output: "2",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Counting duplicates."
        },
      ]
    },
    {
      id: "math-stats",
      title: "Built-in Math & Stats",
      methods: [
        {
          id: "len",
          name: "len()",
          description: "Returns the number of items in an object",
          syntax: "len(object)",
          example: "nums = [1, 2, 3]\nprint(len(nums))",
          output: "3",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Getting size."
        },
        {
          id: "min",
          name: "min()",
          description: "Returns the smallest item in an iterable",
          syntax: "min(iterable)",
          example: "nums = [3, 1, 2]\nprint(min(nums))",
          output: "1",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Finding minimum."
        },
        {
          id: "max",
          name: "max()",
          description: "Returns the largest item in an iterable",
          syntax: "max(iterable)",
          example: "nums = [3, 1, 2]\nprint(max(nums))",
          output: "3",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Finding maximum."
        },
        {
          id: "sum",
          name: "sum()",
          description: "Sums the items of an iterator",
          syntax: "sum(iterable, start)",
          example: "nums = [1, 2, 3]\nprint(sum(nums))",
          output: "6",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Adding items."
        },
        {
          id: "abs",
          name: "abs()",
          description: "Returns the absolute value of a number (not a list method, but useful with map)",
          syntax: "abs(number)",
          example: "nums = [-1, -2]\nprint(list(map(abs, nums)))",
          output: "[1, 2]",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Math operations."
        },
        {
          id: "round",
          name: "round()",
          description: "Rounds a number (not a list method, but useful with map)",
          syntax: "round(number, ndigits)",
          example: "nums = [1.2, 3.8]\nprint(list(map(round, nums)))",
          output: "[1, 4]",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Math operations."
        },
      ]
    },
    {
      id: "iteration-functional",
      title: "Iteration & Functional",
      methods: [
        {
          id: "sorted",
          name: "sorted()",
          description: "Returns a sorted list of the specified iterable object",
          syntax: "sorted(iterable, key=key, reverse=reverse)",
          example: "nums = [3, 1, 2]\nprint(sorted(nums))",
          output: "[1, 2, 3]",
          mutates: false,
          timeComplexity: "O(n log n)",
          commonUseCases: "Sorting out-of-place."
        },
        {
          id: "reversed",
          name: "reversed()",
          description: "Returns a reversed iterator object",
          syntax: "reversed(sequence)",
          example: "nums = [1, 2, 3]\nprint(list(reversed(nums)))",
          output: "[3, 2, 1]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Reversing out-of-place."
        },
        {
          id: "enumerate",
          name: "enumerate()",
          description: "Takes a collection and returns it as an enumerate object",
          syntax: "enumerate(iterable, start=0)",
          example: "chars = [\"a\", \"b\"]\nprint(list(enumerate(chars)))",
          output: "[(0, \"a\"), (1, \"b\")]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Iterating with index."
        },
        {
          id: "zip",
          name: "zip()",
          description: "Returns an iterator, from two or more iterators",
          syntax: "zip(*iterables)",
          example: "a = [1, 2]\nb = [\"x\", \"y\"]\nprint(list(zip(a, b)))",
          output: "[(1, \"x\"), (2, \"y\")]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Combining iterables."
        },
        {
          id: "map",
          name: "map()",
          description: "Returns a map object(which is an iterator) of the results after applying the given function to each item",
          syntax: "map(function, iterables)",
          example: "nums = [1, 2]\nprint(list(map(str, nums)))",
          output: "[\"1\", \"2\"]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Transforming items."
        },
        {
          id: "filter",
          name: "filter()",
          description: "Use a filter function to exclude items in an iterable object",
          syntax: "filter(function, iterable)",
          example: "nums = [1, 2, 3]\nprint(list(filter(lambda x: x>1, nums)))",
          output: "[2, 3]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Filtering items."
        },
        {
          id: "any",
          name: "any()",
          description: "Returns True if any item in an iterable object is true",
          syntax: "any(iterable)",
          example: "bools = [False, True, False]\nprint(any(bools))",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Logical OR."
        },
        {
          id: "all",
          name: "all()",
          description: "Returns True if all items in an iterable object are true",
          syntax: "all(iterable)",
          example: "bools = [True, True]\nprint(all(bools))",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Logical AND."
        },
        {
          id: "iter",
          name: "iter()",
          description: "Returns an iterator object",
          syntax: "iter(object)",
          example: "my_iter = iter([1, 2])\nprint(next(my_iter))",
          output: "1",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Manual iteration."
        },
        {
          id: "next",
          name: "next()",
          description: "Returns the next item in an iterator",
          syntax: "next(iterator, default)",
          example: "my_iter = iter([1, 2])\nnext(my_iter)\nprint(next(my_iter))",
          output: "2",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Manual iteration."
        },
      ]
    },
    {
      id: "type-conversion",
      title: "Type Conversion & Slicing",
      methods: [
        {
          id: "list",
          name: "list()",
          description: "Creates a list object",
          syntax: "list(iterable)",
          example: "print(list(\"abc\"))",
          output: "[\"a\", \"b\", \"c\"]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Type casting."
        },
        {
          id: "tuple",
          name: "tuple()",
          description: "Creates a tuple object",
          syntax: "tuple(iterable)",
          example: "print(tuple([1, 2]))",
          output: "(1, 2)",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Type casting."
        },
        {
          id: "set",
          name: "set()",
          description: "Creates a set object",
          syntax: "set(iterable)",
          example: "print(set([1, 1, 2]))",
          output: "{1, 2}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Removing duplicates."
        },
        {
          id: "dict",
          name: "dict()",
          description: "Creates a dictionary",
          syntax: "dict(iterable)",
          example: "print(dict([(\"a\", 1)]))",
          output: "{\"a\": 1}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Type casting."
        },
        {
          id: "slice",
          name: "slice()",
          description: "Returns a slice object",
          syntax: "slice(start, end, step)",
          example: "nums = [0, 1, 2, 3]\ns = slice(1, 3)\nprint(nums[s])",
          output: "[1, 2]",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Dynamic slicing."
        },
      ]
    },
  ]
};
