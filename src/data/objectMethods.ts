import type { Category } from './types';

export const objectMethods: Category = {
  id: 'objects-dicts',
  title: 'Objects / Dictionaries',
  subsections: [
    {
      id: 'accessing-values',
      title: 'Accessing Values',
      comparisons: [
        {
          id: 'bracket-notation',
          python: {
            name: 'dict[key]',
            description: 'Accesses a value by key. Raises KeyError if the key does not exist.',
            syntax: 'dict[key]',
            example: 'person = {"name": "Alice"}\nprint(person["name"])',
            output: '"Alice"',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Accessing a value when you are certain the key exists.'
          },
          javascript: {
            name: 'obj[key] / obj.key',
            description: 'Accesses a value by key. Returns undefined if the key does not exist.',
            syntax: 'obj[key] OR obj.key',
            example: 'let person = {name: "Alice"};\nconsole.log(person.name);',
            output: '"Alice"',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Accessing a value. Dot notation is preferred for valid identifiers.'
          }
        },
        {
          id: 'safe-access',
          python: {
            name: 'get()',
            description: 'Returns the value for key if key is in the dictionary, else default (None if not provided).',
            syntax: 'dict.get(key[, default])',
            example: 'person = {"name": "Alice"}\nprint(person.get("age", 25))',
            output: '25',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Safely accessing values with a fallback.'
          },
          javascript: {
            name: '?. (Optional Chaining)',
            description: 'Returns undefined instead of throwing an error if the reference is nullish. Use ?? for default values.',
            syntax: 'obj?.key ?? default',
            example: 'let person = {name: "Alice"};\nconsole.log(person?.age ?? 25);',
            output: '25',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Safely accessing nested properties or providing fallbacks.'
          }
        }
      ]
    },
    {
      id: 'adding-updating',
      title: 'Adding & Updating',
      comparisons: [
        {
          id: 'set-value',
          python: {
            name: 'dict[key] = val',
            description: 'Adds a new key-value pair or updates an existing key.',
            syntax: 'dict[key] = value',
            example: 'person = {"name": "Alice"}\nperson["age"] = 30\nprint(person)',
            output: '{"name": "Alice", "age": 30}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Setting a single property.'
          },
          javascript: {
            name: 'obj[key] = val / obj.key = val',
            description: 'Adds a new property or updates an existing property.',
            syntax: 'obj[key] = value',
            example: 'let person = {name: "Alice"};\nperson.age = 30;\nconsole.log(person);',
            output: '{name: "Alice", age: 30}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Setting a single property.'
          }
        },
        {
          id: 'merge-update',
          python: {
            name: 'update() / |=',
            description: 'Updates the dictionary with elements from another dictionary object or from an iterable of key/value pairs.',
            syntax: 'dict.update([other])',
            example: 'person = {"name": "Alice"}\nperson.update({"age": 30})\nprint(person)',
            output: '{"name": "Alice", "age": 30}',
            mutates: true,
            timeComplexity: 'O(k)',
            commonUseCases: 'Merging multiple key-value pairs into the dictionary.'
          },
          javascript: {
            name: 'Object.assign()',
            description: 'Copies all enumerable own properties from one or more source objects to a target object.',
            syntax: 'Object.assign(target, ...sources)',
            example: 'let person = {name: "Alice"};\nObject.assign(person, {age: 30});\nconsole.log(person);',
            output: '{name: "Alice", age: 30}',
            mutates: true,
            timeComplexity: 'O(k)',
            commonUseCases: 'Merging multiple objects into a target object.'
          }
        },
        {
          id: 'spread-merge',
          python: {
            name: '** Unpacking',
            description: 'Creates a new dictionary by merging two or more dictionaries.',
            syntax: '{**dict1, **dict2}',
            example: 'd1 = {"a": 1}\nd2 = {"b": 2}\nprint({**d1, **d2})',
            output: '{"a": 1, "b": 2}',
            mutates: false,
            timeComplexity: 'O(n + m)',
            commonUseCases: 'Combining dictionaries immutably.'
          },
          javascript: {
            name: '... Spread Operator',
            description: 'Creates a new object by merging two or more objects.',
            syntax: '{...obj1, ...obj2}',
            example: 'let o1 = {a: 1};\nlet o2 = {b: 2};\nconsole.log({...o1, ...o2});',
            output: '{a: 1, b: 2}',
            mutates: false,
            timeComplexity: 'O(n + m)',
            commonUseCases: 'Combining objects immutably.'
          }
        }
      ]
    },
    {
      id: 'removing-keys',
      title: 'Removing Elements',
      comparisons: [
        {
          id: 'del-delete',
          python: {
            name: 'del',
            description: 'Removes the key-value pair from the dictionary. Raises KeyError if key is not found.',
            syntax: 'del dict[key]',
            example: 'person = {"name": "Alice", "age": 30}\ndel person["age"]\nprint(person)',
            output: '{"name": "Alice"}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing a property when you know it exists.'
          },
          javascript: {
            name: 'delete',
            description: 'Removes a property from an object. Does not throw if the property is missing.',
            syntax: 'delete obj.key',
            example: 'let person = {name: "Alice", age: 30};\ndelete person.age;\nconsole.log(person);',
            output: '{name: "Alice"}',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Removing a property from an object.'
          }
        },
        {
          id: 'pop-key',
          python: {
            name: 'pop()',
            description: 'Removes the specified key and returns the corresponding value. If key is not found, default is returned if given, otherwise KeyError is raised.',
            syntax: 'dict.pop(key[, default])',
            example: 'person = {"name": "Alice", "age": 30}\nage = person.pop("age")\nprint(age)',
            output: '30',
            mutates: true,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Extracting a value and removing the key simultaneously.'
          },
          javascript: {
            name: 'Destructuring (Rest)',
            description: 'Extracts a property and groups the rest into a new object (immutable approach).',
            syntax: 'const { key, ...rest } = obj',
            example: 'let person = {name: "Alice", age: 30};\nconst { age, ...rest } = person;\nconsole.log(age, rest);',
            output: '30, {name: "Alice"}',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Extracting variables while keeping the rest of the object immutably.'
          }
        }
      ]
    },
    {
      id: 'iteration-objects',
      title: 'Iteration & Views',
      comparisons: [
        {
          id: 'keys',
          python: {
            name: 'keys()',
            description: 'Returns a view object that displays a list of all the keys in the dictionary.',
            syntax: 'dict.keys()',
            example: 'person = {"a": 1, "b": 2}\nprint(list(person.keys()))',
            output: '["a", "b"]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over or extracting keys.'
          },
          javascript: {
            name: 'Object.keys()',
            description: 'Returns an array of a given objects own enumerable property names.',
            syntax: 'Object.keys(obj)',
            example: 'let person = {a: 1, b: 2};\nconsole.log(Object.keys(person));',
            output: '["a", "b"]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over or extracting keys.'
          }
        },
        {
          id: 'values',
          python: {
            name: 'values()',
            description: 'Returns a view object that displays a list of all the values in the dictionary.',
            syntax: 'dict.values()',
            example: 'person = {"a": 1, "b": 2}\nprint(list(person.values()))',
            output: '[1, 2]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over or extracting values.'
          },
          javascript: {
            name: 'Object.values()',
            description: 'Returns an array of a given objects own enumerable property values.',
            syntax: 'Object.values(obj)',
            example: 'let person = {a: 1, b: 2};\nconsole.log(Object.values(person));',
            output: '[1, 2]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over or extracting values.'
          }
        },
        {
          id: 'items-entries',
          python: {
            name: 'items()',
            description: 'Returns a view object that displays a list of dictionarys (key, value) tuple pairs.',
            syntax: 'dict.items()',
            example: 'person = {"a": 1, "b": 2}\nfor k, v in person.items():\n    print(k, v)',
            output: 'a 1\\nb 2',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over both keys and values simultaneously.'
          },
          javascript: {
            name: 'Object.entries()',
            description: 'Returns an array of a given objects own enumerable string-keyed property [key, value] pairs.',
            syntax: 'Object.entries(obj)',
            example: 'let person = {a: 1, b: 2};\nfor (let [k, v] of Object.entries(person)) {\n  console.log(k, v);\n}',
            output: 'a 1\\nb 2',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Iterating over both keys and values simultaneously.'
          }
        }
      ]
    },
    {
      id: 'checking-keys',
      title: 'Checking Keys',
      comparisons: [
        {
          id: 'in-hasown',
          python: {
            name: 'in',
            description: 'Returns True if the dictionary has the specified key.',
            syntax: 'key in dict',
            example: 'person = {"name": "Alice"}\nprint("name" in person)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Testing for the existence of a key.'
          },
          javascript: {
            name: 'Object.hasOwn() / in',
            description: 'Returns true if the specified object has the indicated property as its own property.',
            syntax: 'Object.hasOwn(obj, prop)',
            example: 'let person = {name: "Alice"};\nconsole.log(Object.hasOwn(person, "name"));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(1) average',
            commonUseCases: 'Safely testing for the existence of a key without prototype traversal.'
          }
        }
      ]
    }
  ],
  extraMethods: {
    python: [
      { name: 'clear()', example: 'd = {"a": 1}\nd.clear()\nprint(d) # {}' },
      { name: 'copy()', example: 'd = {"a": 1}\nnew_d = d.copy()' },
      { name: 'fromkeys()', example: 'print(dict.fromkeys(["a", "b"], 0))\n# {"a": 0, "b": 0}' },
      { name: 'popitem()', example: 'd = {"a": 1}\nk, v = d.popitem()\n# removes and returns LIFO pair' },
      { name: 'setdefault()', example: 'd = {"a": 1}\nprint(d.setdefault("b", 2)) # 2\n# d is now {"a": 1, "b": 2}' },
      { name: 'dict Comprehension', example: 'd = {x: x**2 for x in range(3)}\n# {0: 0, 1: 1, 2: 4}' }
    ],
    javascript: [
      { name: 'Object.fromEntries()', example: 'const arr = [["a", 1], ["b", 2]];\nconsole.log(Object.fromEntries(arr));\n// {a: 1, b: 2}' },
      { name: 'Object.freeze()', example: 'const obj = {a: 1};\nObject.freeze(obj);\nobj.a = 2; // Fails silently or throws in strict mode' },
      { name: 'Object.seal()', example: 'const obj = {a: 1};\nObject.seal(obj);\nobj.a = 2; // Allowed\nobj.b = 3; // Fails' },
      { name: 'Object.create()', example: 'const proto = {a: 1};\nconst obj = Object.create(proto);\nconsole.log(obj.a); // 1' },
      { name: 'Object.is()', example: 'console.log(Object.is(NaN, NaN)); // true\nconsole.log(NaN === NaN); // false' },
      { name: 'Object.getPrototypeOf()', example: 'const obj = {};\nconsole.log(Object.getPrototypeOf(obj) === Object.prototype); // true' },
      { name: 'Object.preventExtensions()', example: 'const obj = {};\nObject.preventExtensions(obj);\nobj.a = 1; // Fails' }
    ]
  }
};
