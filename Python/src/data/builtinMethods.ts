import type { Category } from './types';

export const builtinMethods: Category = {
  id: 'builtins',
  title: 'Built-in Functions',
  subsections: [
    {
      id: 'math-builtins',
      title: 'Math & Numbers',
      methods: [
        {
          id: 'sum',
          name: 'sum(iterable, start=0)',
          description: 'Add numbers in an iterable. Optionally starts with a given value.',
          syntax: 'sum(iterable, start)',
          example: 'sum([1, 2, 3])\nsum([1, 2, 3], 10)',
          output: '6\n16',
          mutates: false,
          timeComplexity: 'O(n)',
          commonUseCases: 'Quickly summing a list of numbers.'
        },
        {
          id: 'min',
          name: 'min(iterable, *args, key=None, default=obj)',
          description: 'Return the smallest item in an iterable or the smallest of two or more arguments.',
          syntax: 'min(iterable, *[, key, default])',
          example: 'min([5, 2, 8])\nmin(5, 2, 8)',
          output: '2\n2',
          mutates: false,
          timeComplexity: 'O(n)',
          commonUseCases: 'Finding the minimum value in a collection.'
        },
        {
          id: 'max',
          name: 'max(iterable, *args, key=None, default=obj)',
          description: 'Return the largest item in an iterable or the largest of two or more arguments.',
          syntax: 'max(iterable, *[, key, default])',
          example: 'max([5, 2, 8])\nmax(5, 2, 8)',
          output: '8\n8',
          mutates: false,
          timeComplexity: 'O(n)',
          commonUseCases: 'Finding the maximum value in a collection.'
        }
      ]
    },
    {
      id: 'iterable-builtins',
      title: 'Iterables & Sequences',
      methods: [
        {
          id: 'len',
          name: 'len(s)',
          description: 'Return the number of items of an object (string, list, tuple, dictionary, etc.).',
          syntax: 'len(s)',
          example: 'len("hello")\nlen([1, 2, 3])',
          output: '5\n3',
          mutates: false,
          timeComplexity: 'O(1)',
          commonUseCases: 'Finding the size or length of a collection.'
        },
        {
          id: 'any',
          name: 'any(iterable)',
          description: 'Return True if at least one element of the iterable is truthy. If the iterable is empty, return False.',
          syntax: 'any(iterable)',
          example: 'any([False, True, False])\nany([])',
          output: 'True\nFalse',
          mutates: false,
          timeComplexity: 'O(n)',
          commonUseCases: 'Checking if a collection contains any truthy values.'
        },
        {
          id: 'all',
          name: 'all(iterable)',
          description: 'Return True if all elements of the iterable are truthy (or if the iterable is empty).',
          syntax: 'all(iterable)',
          example: 'all([True, True, True])\nall([True, False])',
          output: 'True\nFalse',
          mutates: false,
          timeComplexity: 'O(n)',
          commonUseCases: 'Validating that every item in a collection meets a condition.'
        },
        {
          id: 'sorted',
          name: 'sorted(iterable, key=None, reverse=False)',
          description: 'Return a new sorted list from the items in iterable.',
          syntax: 'sorted(iterable, *, key=None, reverse=False)',
          example: 'sorted([3, 1, 2])\nsorted([3, 1, 2], reverse=True)',
          output: '[1, 2, 3]\n[3, 2, 1]',
          mutates: false,
          timeComplexity: 'O(n log n)',
          commonUseCases: 'Sorting data without mutating the original collection.'
        },
        {
          id: 'reversed',
          name: 'reversed(seq)',
          description: 'Return a reverse iterator over the values of the given sequence.',
          syntax: 'reversed(seq)',
          example: 'list(reversed([1, 2, 3]))',
          output: '[3, 2, 1]',
          mutates: false,
          timeComplexity: 'O(1) to create iterator, O(n) to consume',
          commonUseCases: 'Iterating over a sequence backwards.'
        },
        {
          id: 'enumerate',
          name: 'enumerate(iterable, start=0)',
          description: 'Return an enumerate object. Yields pairs containing a count and a value yielded by the iterable argument.',
          syntax: 'enumerate(iterable, start=0)',
          example: 'list(enumerate(["a", "b"]))',
          output: '[(0, "a"), (1, "b")]',
          mutates: false,
          timeComplexity: 'O(1) to create iterator, O(n) to consume',
          commonUseCases: 'Looping over an iterable while keeping track of the index.'
        },
        {
          id: 'zip',
          name: 'zip(*iterables, strict=False)',
          description: 'Iterate over several iterables in parallel, producing tuples with an item from each one.',
          syntax: 'zip(*iterables, strict=False)',
          example: 'list(zip([1, 2], ["a", "b"]))',
          output: '[(1, "a"), (2, "b")]',
          mutates: false,
          timeComplexity: 'O(1) to create iterator, O(n) to consume',
          commonUseCases: 'Combining multiple iterables into a single sequence of tuples.'
        },
        {
          id: 'map',
          name: 'map(function, iterable, *iterables)',
          description: 'Return an iterator that applies function to every item of iterable, yielding the results.',
          syntax: 'map(function, iterable, ...)',
          example: 'list(map(str.upper, ["a", "b"]))',
          output: '["A", "B"]',
          mutates: false,
          timeComplexity: 'O(1) to create iterator, O(n) to consume',
          commonUseCases: 'Transforming all items in an iterable using a function.'
        },
        {
          id: 'filter',
          name: 'filter(function, iterable)',
          description: 'Construct an iterator from those elements of iterable for which function returns true.',
          syntax: 'filter(function, iterable)',
          example: 'list(filter(lambda x: x > 0, [-1, 0, 1, 2]))',
          output: '[1, 2]',
          mutates: false,
          timeComplexity: 'O(1) to create iterator, O(n) to consume',
          commonUseCases: 'Removing unwanted items from an iterable based on a condition.'
        }
      ]
    }
  ]
};
