import type { Category } from './types';

export const setMethods: Category = {
  id: 'sets',
  title: 'Sets',
  subsections: [
    {
      id: 'adding-removing-sets',
      title: 'Adding & Removing',
      comparisons: [
        {
          id: 'add-element',
          python: {
            name: 'add()',
            description: 'Adds an element to the set. This has no effect if the element is already present.',
            syntax: 'set.add(elem)',
            example: 's = {1, 2}\ns.add(3)\nprint(s)',
            output: '{1, 2, 3}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Inserting a single unique item.'
          },
          javascript: {
            name: 'add()',
            description: 'Appends a new element with a specified value to the end of a Set object.',
            syntax: 'set.add(value)',
            example: 'let s = new Set([1, 2]);\ns.add(3);\nconsole.log([...s]);',
            output: '[1, 2, 3]',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Inserting a single unique item.'
          }
        },
        {
          id: 'remove-element',
          python: {
            name: 'remove()',
            description: 'Removes an element from a set; it must be a member. If the element is not a member, raises a KeyError.',
            syntax: 'set.remove(elem)',
            example: 's = {1, 2, 3}\ns.remove(2)\nprint(s)',
            output: '{1, 3}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing an item when you are certain it exists.'
          },
          javascript: {
            name: 'delete()',
            description: 'Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not.',
            syntax: 'set.delete(value)',
            example: 'let s = new Set([1, 2, 3]);\ns.delete(2);\nconsole.log([...s]);',
            output: '[1, 3]',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing an item safely.'
          }
        },
        {
          id: 'discard-element',
          python: {
            name: 'discard()',
            description: 'Removes an element from a set if it is a member. Does nothing if the element is not a member.',
            syntax: 'set.discard(elem)',
            example: 's = {1, 2}\ns.discard(3) # No error\nprint(s)',
            output: '{1, 2}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing an item without worrying if it exists.'
          },
          javascript: {
            name: 'delete()',
            description: 'In JavaScript, delete() acts like discard() as it does not throw an error if the element is missing.',
            syntax: 'set.delete(value)',
            example: 'let s = new Set([1, 2]);\ns.delete(3); // Returns false, no error\nconsole.log([...s]);',
            output: '[1, 2]',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing an item without worrying if it exists.'
          }
        },
        {
          id: 'clear-set',
          python: {
            name: 'clear()',
            description: 'Removes all elements from the set.',
            syntax: 'set.clear()',
            example: 's = {1, 2}\ns.clear()\nprint(s)',
            output: 'set()',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Emptying a set entirely.'
          },
          javascript: {
            name: 'clear()',
            description: 'Removes all elements from a Set object.',
            syntax: 'set.clear()',
            example: 'let s = new Set([1, 2]);\ns.clear();\nconsole.log(s.size);',
            output: '0',
            mutates: true,
            timeComplexity: 'O(n)',
            commonUseCases: 'Emptying a set entirely.'
          }
        }
      ]
    },
    {
      id: 'checking-sets',
      title: 'Checking Elements',
      comparisons: [
        {
          id: 'has-element',
          python: {
            name: 'in',
            description: 'Returns True if the set contains the specified element.',
            syntax: 'elem in set',
            example: 's = {1, 2, 3}\nprint(2 in s)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Fast O(1) membership testing.'
          },
          javascript: {
            name: 'has()',
            description: 'Returns a boolean asserting whether an element is present with the given value in the Set object or not.',
            syntax: 'set.has(value)',
            example: 'let s = new Set([1, 2, 3]);\nconsole.log(s.has(2));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Fast O(1) membership testing.'
          }
        }
      ]
    },
    {
      id: 'set-operations',
      title: 'Set Operations (Math)',
      comparisons: [
        {
          id: 'union',
          python: {
            name: 'union() / |',
            description: 'Return a new set with elements from the set and all others.',
            syntax: 'set1 | set2  OR  set1.union(set2)',
            example: 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1 | s2)',
            output: '{1, 2, 3}',
            mutates: false,
            timeComplexity: 'O(len(s1) + len(s2))',
            commonUseCases: 'Combining distinct elements from multiple sets.'
          },
          javascript: {
            name: 'union()',
            description: 'Returns a new set containing elements from both sets. (ES2024)',
            syntax: 'set1.union(set2)',
            example: 'let s1 = new Set([1, 2]);\nlet s2 = new Set([2, 3]);\nconsole.log([...s1.union(s2)]);',
            output: '[1, 2, 3]',
            mutates: false,
            timeComplexity: 'O(n + m)',
            commonUseCases: 'Combining distinct elements from multiple sets.'
          }
        },
        {
          id: 'intersection',
          python: {
            name: 'intersection() / &',
            description: 'Return a new set with elements common to the set and all others.',
            syntax: 'set1 & set2  OR  set1.intersection(set2)',
            example: 's1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(s1 & s2)',
            output: '{2, 3}',
            mutates: false,
            timeComplexity: 'O(min(len(s1), len(s2)))',
            commonUseCases: 'Finding common elements between sets.'
          },
          javascript: {
            name: 'intersection()',
            description: 'Returns a new set containing elements present in both sets. (ES2024)',
            syntax: 'set1.intersection(set2)',
            example: 'let s1 = new Set([1, 2, 3]);\nlet s2 = new Set([2, 3, 4]);\nconsole.log([...s1.intersection(s2)]);',
            output: '[2, 3]',
            mutates: false,
            timeComplexity: 'O(min(n, m))',
            commonUseCases: 'Finding common elements between sets.'
          }
        },
        {
          id: 'difference',
          python: {
            name: 'difference() / -',
            description: 'Return a new set with elements in the set that are not in the others.',
            syntax: 'set1 - set2  OR  set1.difference(set2)',
            example: 's1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(s1 - s2)',
            output: '{1}',
            mutates: false,
            timeComplexity: 'O(len(s1))',
            commonUseCases: 'Finding unique elements present only in the first set.'
          },
          javascript: {
            name: 'difference()',
            description: 'Returns a new set containing elements in this set but not in the other set. (ES2024)',
            syntax: 'set1.difference(set2)',
            example: 'let s1 = new Set([1, 2, 3]);\nlet s2 = new Set([2, 3, 4]);\nconsole.log([...s1.difference(s2)]);',
            output: '[1]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding unique elements present only in the first set.'
          }
        },
        {
          id: 'symmetric-difference',
          python: {
            name: 'symmetric_difference() / ^',
            description: 'Return a new set with elements in either the set or other but not both.',
            syntax: 'set1 ^ set2  OR  set1.symmetric_difference(set2)',
            example: 's1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint(s1 ^ s2)',
            output: '{1, 4}',
            mutates: false,
            timeComplexity: 'O(len(s1))',
            commonUseCases: 'Finding exclusively unique elements.'
          },
          javascript: {
            name: 'symmetricDifference()',
            description: 'Returns a new set containing elements in either this set or the other set, but not both. (ES2024)',
            syntax: 'set1.symmetricDifference(set2)',
            example: 'let s1 = new Set([1, 2, 3]);\nlet s2 = new Set([2, 3, 4]);\nconsole.log([...s1.symmetricDifference(s2)]);',
            output: '[1, 4]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Finding exclusively unique elements.'
          }
        }
      ]
    },
    {
      id: 'set-relations',
      title: 'Subset & Superset',
      comparisons: [
        {
          id: 'issubset',
          python: {
            name: 'issubset() / <=',
            description: 'Test whether every element in the set is in other.',
            syntax: 'set1 <= set2  OR  set1.issubset(set2)',
            example: 's1 = {1, 2}\ns2 = {1, 2, 3}\nprint(s1 <= s2)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(len(s1))',
            commonUseCases: 'Checking if all requirements are met.'
          },
          javascript: {
            name: 'isSubsetOf()',
            description: 'Returns a boolean indicating if all elements of this set are in the other set. (ES2024)',
            syntax: 'set1.isSubsetOf(set2)',
            example: 'let s1 = new Set([1, 2]);\nlet s2 = new Set([1, 2, 3]);\nconsole.log(s1.isSubsetOf(s2));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Checking if all requirements are met.'
          }
        },
        {
          id: 'issuperset',
          python: {
            name: 'issuperset() / >=',
            description: 'Test whether every element in other is in the set.',
            syntax: 'set1 >= set2  OR  set1.issuperset(set2)',
            example: 's1 = {1, 2, 3}\ns2 = {1, 2}\nprint(s1 >= s2)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(len(s2))',
            commonUseCases: 'Checking if this set covers all other items.'
          },
          javascript: {
            name: 'isSupersetOf()',
            description: 'Returns a boolean indicating if all elements of the other set are in this set. (ES2024)',
            syntax: 'set1.isSupersetOf(set2)',
            example: 'let s1 = new Set([1, 2, 3]);\nlet s2 = new Set([1, 2]);\nconsole.log(s1.isSupersetOf(s2));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(m)',
            commonUseCases: 'Checking if this set covers all other items.'
          }
        }
      ]
    }
  ],
  extraMethods: {
    python: [
      { name: 'copy()', example: 's = {1, 2}\nnew_s = s.copy()' },
      { name: 'pop()', example: 's = {1, 2}\nprint(s.pop()) # removes and returns arbitrary element' },
      { name: 'update() / |=', example: 's = {1}\ns.update([2, 3]) # s is now {1, 2, 3}' },
      { name: 'intersection_update() / &=', example: 's = {1, 2}\ns &= {2, 3} # s is now {2}' },
      { name: 'difference_update() / -=', example: 's = {1, 2}\ns -= {2, 3} # s is now {1}' },
      { name: 'symmetric_difference_update() / ^=', example: 's = {1, 2}\ns ^= {2, 3} # s is now {1, 3}' },
      { name: 'isdisjoint()', example: 'print({1, 2}.isdisjoint({3, 4})) # True' },
      { name: 'frozenset()', example: 'fs = frozenset([1, 2])\n# immutable version of set' }
    ],
    javascript: [
      { name: 'isDisjointFrom()', example: 'let s1 = new Set([1, 2]);\nlet s2 = new Set([3, 4]);\nconsole.log(s1.isDisjointFrom(s2)); // true (ES2024)' },
      { name: 'forEach()', example: 'let s = new Set([1, 2]);\ns.forEach(val => console.log(val));' },
      { name: 'keys()', example: 'let s = new Set([1, 2]);\nconsole.log([...s.keys()]); // [1, 2]' },
      { name: 'values()', example: 'let s = new Set([1, 2]);\nconsole.log([...s.values()]); // [1, 2]' },
      { name: 'entries()', example: 'let s = new Set([1, 2]);\nconsole.log([...s.entries()]); // [[1, 1], [2, 2]]' }
    ]
  }
};
