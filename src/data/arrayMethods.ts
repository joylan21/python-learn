import type { Category } from './types';

export const arrayMethods: Category = {
  id: 'arrays',
  title: 'Arrays / Lists',
  subsections: [
    {
      id: 'adding',
      title: 'Adding Elements',
      comparisons: [
        {
          id: 'add-end',
          python: {
            name: 'append()',
            description: 'Adds a single element to the end of the list.',
            syntax: 'list.append(x)',
            example: 'nums = [1, 2]\nnums.append(3)\nprint(nums)',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(1) amortized',
            commonUseCases: 'Building a list item by item.'
          },
          javascript: {
            name: 'push()',
            description: 'Adds one or more elements to the end of an array and returns the new length.',
            syntax: 'array.push(element1, ..., elementN)',
            example: 'let nums = [1, 2];\nnums.push(3);\nconsole.log(nums);',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(1) amortized',
            commonUseCases: 'Adding elements to the end of an array.'
          }
        },
        {
          id: 'add-multiple-end',
          python: {
            name: 'extend()',
            description: 'Extends the list by appending elements from an iterable.',
            syntax: 'list.extend(iterable)',
            example: 'nums = [1, 2]\nnums.extend([3, 4])\nprint(nums)',
            output: '[1, 2, 3, 4]',
            mutates: true,
            timeComplexity: 'O(k) where k is length of iterable',
            commonUseCases: 'Merging another list into the current one.'
          },
          javascript: {
            name: 'push(...items)',
            description: 'Using the spread operator with push to add multiple items.',
            syntax: 'array.push(...iterable)',
            example: 'let nums = [1, 2];\nnums.push(...[3, 4]);\nconsole.log(nums);',
            output: '[1, 2, 3, 4]',
            mutates: true,
            timeComplexity: 'O(k)',
            commonUseCases: 'Merging another array into the current one without creating a new array.'
          }
        },
        {
          id: 'insert-at',
          python: {
            name: 'insert()',
            description: 'Inserts an item at a given position.',
            syntax: 'list.insert(i, x)',
            example: 'nums = [1, 3]\nnums.insert(1, 2)\nprint(nums)',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Placing an item at a specific index.'
          },
          javascript: {
            name: 'splice()',
            description: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
            syntax: 'array.splice(start, deleteCount, item1, item2, ...)',
            example: 'let nums = [1, 3];\nnums.splice(1, 0, 2);\nconsole.log(nums);',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Inserting, replacing, or removing elements at any index.'
          }
        },
        {
          id: 'concat',
          python: {
            name: '+ operator',
            description: 'Concatenates two lists to create a new list.',
            syntax: 'list1 + list2',
            example: 'nums1 = [1, 2]\nnums2 = [3, 4]\nnew_nums = nums1 + nums2\nprint(new_nums)',
            output: '[1, 2, 3, 4]',
            mutates: false,
            timeComplexity: 'O(n + k)',
            commonUseCases: 'Combining lists without modifying originals.'
          },
          javascript: {
            name: 'concat()',
            description: 'Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
            syntax: 'array1.concat(array2, array3, ..., arrayX)',
            example: 'let nums1 = [1, 2];\nlet nums2 = [3, 4];\nlet newNums = nums1.concat(nums2);\nconsole.log(newNums);',
            output: '[1, 2, 3, 4]',
            mutates: false,
            timeComplexity: 'O(n + k)',
            commonUseCases: 'Combining arrays without modifying originals.'
          }
        }
      ]
    },
    {
      id: 'removing',
      title: 'Removing Elements',
      comparisons: [
        {
          id: 'remove-end',
          python: {
            name: 'pop()',
            description: 'Removes and returns the item at the given position in the list. If no index is specified, removes and returns the last item.',
            syntax: 'list.pop([i])',
            example: 'nums = [1, 2, 3]\nlast = nums.pop()\nprint(nums, last)',
            output: '[1, 2] 3',
            mutates: true,
            timeComplexity: 'O(1) for last, O(n) for specific index',
            commonUseCases: 'Using a list as a stack, or removing an item by index.'
          },
          javascript: {
            name: 'pop()',
            description: 'Removes the last element from an array and returns that element. This method changes the length of the array.',
            syntax: 'array.pop()',
            example: 'let nums = [1, 2, 3];\nlet last = nums.pop();\nconsole.log(nums, last);',
            output: '[1, 2] 3',
            mutates: true,
            timeComplexity: 'O(1)',
            commonUseCases: 'Removing the last element, or using an array as a stack.'
          }
        },
        {
          id: 'remove-start',
          python: {
            name: 'pop(0)',
            description: 'Removes the first element of the list. (Note: collections.deque is preferred for efficient left pops).',
            syntax: 'list.pop(0)',
            example: 'nums = [1, 2, 3]\nfirst = nums.pop(0)\nprint(nums, first)',
            output: '[2, 3] 1',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Using a list as a queue (though inefficient).'
          },
          javascript: {
            name: 'shift()',
            description: 'Removes the first element from an array and returns that removed element. This method changes the length of the array.',
            syntax: 'array.shift()',
            example: 'let nums = [1, 2, 3];\nlet first = nums.shift();\nconsole.log(nums, first);',
            output: '[2, 3] 1',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Removing the first element, or using an array as a queue.'
          }
        },
        {
          id: 'remove-value',
          python: {
            name: 'remove()',
            description: 'Removes the first item from the list whose value is equal to x. Raises ValueError if not found.',
            syntax: 'list.remove(x)',
            example: 'nums = [1, 2, 3, 2]\nnums.remove(2)\nprint(nums)',
            output: '[1, 3, 2]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Removing a specific value when its index is unknown.'
          },
          javascript: {
            name: 'indexOf() + splice()',
            description: 'No built-in remove by value. Find index then splice it out.',
            syntax: 'let idx = arr.indexOf(val); if(idx>-1) arr.splice(idx, 1);',
            example: 'let nums = [1, 2, 3, 2];\nlet idx = nums.indexOf(2);\nif (idx > -1) nums.splice(idx, 1);\nconsole.log(nums);',
            output: '[1, 3, 2]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Removing a specific value when its index is unknown.'
          }
        },
        {
          id: 'clear-all',
          python: {
            name: 'clear()',
            description: 'Removes all items from the list.',
            syntax: 'list.clear()',
            example: 'nums = [1, 2, 3]\nnums.clear()\nprint(nums)',
            output: '[]',
            mutates: true,
            timeComplexity: 'O(1) or O(n) depending on implementation',
            commonUseCases: 'Emptying a list while keeping the reference.'
          },
          javascript: {
            name: 'length = 0',
            description: 'Setting length to 0 empties the array.',
            syntax: 'array.length = 0',
            example: 'let nums = [1, 2, 3];\nnums.length = 0;\nconsole.log(nums);',
            output: '[]',
            mutates: true,
            timeComplexity: 'O(1)',
            commonUseCases: 'Emptying an array while keeping the reference.'
          }
        }
      ]
    },
    {
      id: 'searching',
      title: 'Searching Elements',
      comparisons: [
        {
          id: 'search-index',
          python: {
            name: 'index()',
            description: 'Returns zero-based index in the list of the first item whose value is x. Raises ValueError if not found.',
            syntax: 'list.index(x[, start[, end]])',
            example: 'nums = [10, 20, 30]\nprint(nums.index(20))',
            output: '1',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding the position of an element.'
          },
          javascript: {
            name: 'indexOf()',
            description: 'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
            syntax: 'array.indexOf(searchElement[, fromIndex])',
            example: 'let nums = [10, 20, 30];\nconsole.log(nums.indexOf(20));',
            output: '1',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding the position of an element.'
          }
        },
        {
          id: 'search-includes',
          python: {
            name: 'in',
            description: 'Returns True if element exists in the list, False otherwise.',
            syntax: 'value in list',
            example: 'nums = [10, 20, 30]\nprint(20 in nums)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Checking for existence.'
          },
          javascript: {
            name: 'includes()',
            description: 'Determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
            syntax: 'array.includes(valueToFind[, fromIndex])',
            example: 'let nums = [10, 20, 30];\nconsole.log(nums.includes(20));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Checking for existence.'
          }
        },
        {
          id: 'search-condition',
          python: {
            name: 'next() + generator',
            description: 'Find first item matching a condition. Raises StopIteration if not found (unless default provided).',
            syntax: 'next((x for x in list if condition), default)',
            example: 'nums = [10, 25, 30]\nfirst_odd = next((x for x in nums if x % 2 != 0), None)\nprint(first_odd)',
            output: '25',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding the first item that matches a condition.'
          },
          javascript: {
            name: 'find()',
            description: 'Returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
            syntax: 'array.find(callback(element[, index[, array]])[, thisArg])',
            example: 'let nums = [10, 25, 30];\nlet firstOdd = nums.find(x => x % 2 !== 0);\nconsole.log(firstOdd);',
            output: '25',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding the first item that matches a condition.'
          }
        }
      ]
    },
    {
      id: 'transformation',
      title: 'Transforming Arrays',
      comparisons: [
        {
          id: 'transform-map',
          python: {
            name: 'List Comprehension',
            description: 'Elegant way to define and create lists based on existing lists.',
            syntax: '[expression for item in list]',
            example: 'nums = [1, 2, 3]\nsquares = [x * x for x in nums]\nprint(squares)',
            output: '[1, 4, 9]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Applying a function or operation to every element.'
          },
          javascript: {
            name: 'map()',
            description: 'Creates a new array populated with the results of calling a provided function on every element in the calling array.',
            syntax: 'array.map(function(currentValue, index, arr), thisValue)',
            example: 'let nums = [1, 2, 3];\nlet squares = nums.map(x => x * x);\nconsole.log(squares);',
            output: '[1, 4, 9]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Applying a function to every element to create a new array.'
          }
        },
        {
          id: 'transform-filter',
          python: {
            name: 'List Comprehension with if',
            description: 'Filter elements using an if condition inside a list comprehension.',
            syntax: '[expression for item in list if condition]',
            example: 'nums = [1, 2, 3, 4]\nevens = [x for x in nums if x % 2 == 0]\nprint(evens)',
            output: '[2, 4]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Filtering out elements that do not match a condition.'
          },
          javascript: {
            name: 'filter()',
            description: 'Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
            syntax: 'array.filter(function(currentValue, index, arr), thisValue)',
            example: 'let nums = [1, 2, 3, 4];\nlet evens = nums.filter(x => x % 2 === 0);\nconsole.log(evens);',
            output: '[2, 4]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Keeping only elements that pass a test.'
          }
        }
      ]
    },
    {
      id: 'sorting',
      title: 'Sorting Arrays',
      comparisons: [
        {
          id: 'sort-inplace',
          python: {
            name: 'sort()',
            description: 'Sorts the items of the list in place.',
            syntax: 'list.sort(*, key=None, reverse=False)',
            example: 'nums = [3, 1, 2]\nnums.sort()\nprint(nums)',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(n log n)',
            commonUseCases: 'Sorting a list without creating a new one.'
          },
          javascript: {
            name: 'sort()',
            description: 'Sorts the elements of an array in place and returns the reference to the same array, now sorted.',
            syntax: 'array.sort([compareFunction])',
            example: 'let nums = [3, 1, 2];\nnums.sort((a, b) => a - b);\nconsole.log(nums);',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(n log n)',
            commonUseCases: 'Sorting an array. Note: Default JS sort converts to strings first!'
          }
        },
        {
          id: 'sort-new',
          python: {
            name: 'sorted()',
            description: 'Returns a new sorted list from the items in iterable.',
            syntax: 'sorted(iterable, *, key=None, reverse=False)',
            example: 'nums = [3, 1, 2]\nsorted_nums = sorted(nums)\nprint(sorted_nums)',
            output: '[1, 2, 3]',
            mutates: false,
            timeComplexity: 'O(n log n)',
            commonUseCases: 'Creating a sorted copy without modifying the original.'
          },
          javascript: {
            name: 'toSorted()',
            description: 'The toSorted() method of Array instances is the copying version of the sort() method.',
            syntax: 'array.toSorted([compareFunction])',
            example: 'let nums = [3, 1, 2];\nlet sortedNums = nums.toSorted((a, b) => a - b);\nconsole.log(sortedNums);',
            output: '[1, 2, 3]',
            mutates: false,
            timeComplexity: 'O(n log n)',
            commonUseCases: 'Creating a sorted copy without modifying the original (ES2023).'
          }
        },
        {
          id: 'reverse-inplace',
          python: {
            name: 'reverse()',
            description: 'Reverses the elements of the list in place.',
            syntax: 'list.reverse()',
            example: 'nums = [1, 2, 3]\nnums.reverse()\nprint(nums)',
            output: '[3, 2, 1]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Flipping the order of a list in place.'
          },
          javascript: {
            name: 'reverse()',
            description: 'Reverses an array in place and returns the reference to the same array.',
            syntax: 'array.reverse()',
            example: 'let nums = [1, 2, 3];\nnums.reverse();\nconsole.log(nums);',
            output: '[3, 2, 1]',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Flipping the order of an array in place.'
          }
        }
      ]
    }
  ],
  extraMethods: {
    python: [
      { name: 'copy()', example: 'nums = [1, 2]\nnew_nums = nums.copy()' },
      { name: 'count()', example: 'nums = [1, 2, 1]\nprint(nums.count(1)) # 2' },
      { name: 'len()', example: 'nums = [1, 2]\nprint(len(nums)) # 2' },
      { name: 'sum()', example: 'nums = [1, 2]\nprint(sum(nums)) # 3' },
      { name: 'min()', example: 'nums = [1, 2]\nprint(min(nums)) # 1' },
      { name: 'max()', example: 'nums = [1, 2]\nprint(max(nums)) # 2' },
      { name: 'any()', example: 'nums = [0, 1]\nprint(any(nums)) # True' },
      { name: 'all()', example: 'nums = [0, 1]\nprint(all(nums)) # False' },
      { name: 'enumerate()', example: 'for i, val in enumerate(["a", "b"]): \n    print(i, val)' },
      { name: 'zip()', example: 'list(zip([1, 2], ["a", "b"])) \n# [(1, "a"), (2, "b")]' },
      { name: 'unpacking (*)', example: 'a, *b = [1, 2, 3]\nprint(b) # [2, 3]' },
      { name: 'slicing ([:])', example: 'nums = [1, 2, 3]\nprint(nums[::-1]) # [3, 2, 1]' }
    ],
    javascript: [
      { name: 'at()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.at(-1)); // 3' },
      { name: 'copyWithin()', example: 'let arr = [1, 2, 3, 4];\narr.copyWithin(0, 2); // [3, 4, 3, 4]' },
      { name: 'entries()', example: 'let arr = ["a", "b"];\nfor (let [i, v] of arr.entries()) console.log(i, v);' },
      { name: 'every()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.every(x => x > 0)); // true' },
      { name: 'fill()', example: 'let arr = [1, 2, 3];\narr.fill(0); // [0, 0, 0]' },
      { name: 'findIndex()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.findIndex(x => x === 2)); // 1' },
      { name: 'findLast()', example: 'let arr = [1, 2, 1];\nconsole.log(arr.findLast(x => x === 1)); // 1' },
      { name: 'findLastIndex()', example: 'let arr = [1, 2, 1];\nconsole.log(arr.findLastIndex(x => x === 1)); // 2' },
      { name: 'flat()', example: 'let arr = [1, [2, 3]];\nconsole.log(arr.flat()); // [1, 2, 3]' },
      { name: 'flatMap()', example: 'let arr = [1, 2];\nconsole.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4]' },
      { name: 'forEach()', example: 'let arr = [1, 2];\narr.forEach(x => console.log(x));' },
      { name: 'keys()', example: 'let arr = ["a", "b"];\nfor (let k of arr.keys()) console.log(k); // 0, 1' },
      { name: 'lastIndexOf()', example: 'let arr = [1, 2, 1];\nconsole.log(arr.lastIndexOf(1)); // 2' },
      { name: 'reduce()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0)); // 6' },
      { name: 'reduceRight()', example: 'let arr = [1, 2];\nconsole.log(arr.reduceRight((acc, curr) => acc + curr, "")); // "21"' },
      { name: 'some()', example: 'let arr = [1, 2];\nconsole.log(arr.some(x => x > 1)); // true' },
      { name: 'toSpliced()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.toSpliced(1, 1)); // [1, 3] (does not mutate)' },
      { name: 'unshift()', example: 'let arr = [2, 3];\narr.unshift(1); // arr is now [1, 2, 3]' },
      { name: 'values()', example: 'let arr = ["a", "b"];\nfor (let v of arr.values()) console.log(v); // "a", "b"' },
      { name: 'with()', example: 'let arr = [1, 2, 3];\nconsole.log(arr.with(1, 99)); // [1, 99, 3]' },
      { name: 'Array.from()', example: 'console.log(Array.from("123", Number)); // [1, 2, 3]' },
      { name: 'Array.isArray()', example: 'console.log(Array.isArray([1, 2])); // true' },
      { name: 'Array.of()', example: 'console.log(Array.of(1, 2, 3)); // [1, 2, 3]' }
    ]
  }
};
