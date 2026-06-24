import type { Category } from "./types";

export const dictMethods: Category = {
  id: "dict",
  title: "Dictionaries",
  subsections: [
    {
      id: "access-search",
      title: "Accessing & Searching",
      methods: [
        {
          id: "get",
          name: "get()",
          description: "Returns the value of the specified key",
          syntax: "dict.get(key, default)",
          example: "d = {\"a\": 1}\nprint(d.get(\"b\", 0))",
          output: "0",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Safe key access."
        },
        {
          id: "items",
          name: "items()",
          description: "Returns a list containing a tuple for each key value pair",
          syntax: "dict.items()",
          example: "d = {\"a\": 1}\nprint(list(d.items()))",
          output: "[(\"a\", 1)]",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Iterating keys and values."
        },
        {
          id: "keys",
          name: "keys()",
          description: "Returns a list containing the dictionary's keys",
          syntax: "dict.keys()",
          example: "d = {\"a\": 1}\nprint(list(d.keys()))",
          output: "[\"a\"]",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Iterating keys."
        },
        {
          id: "setdefault",
          name: "setdefault()",
          description: "Returns the value of the specified key. If the key does not exist: insert the key, with the specified value",
          syntax: "dict.setdefault(key, default)",
          example: "d = {\"a\": 1}\nd.setdefault(\"b\", 2)\nprint(d)",
          output: "{\"a\": 1, \"b\": 2}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Inserting if not present."
        },
        {
          id: "values",
          name: "values()",
          description: "Returns a list of all the values in the dictionary",
          syntax: "dict.values()",
          example: "d = {\"a\": 1}\nprint(list(d.values()))",
          output: "[1]",
          mutates: false,
          timeComplexity: "O(1)",
          commonUseCases: "Iterating values."
        },
      ]
    },
    {
      id: "add-modify",
      title: "Adding & Modifying",
      methods: [
        {
          id: "fromkeys",
          name: "fromkeys()",
          description: "Returns a dictionary with the specified keys and value",
          syntax: "dict.fromkeys(keys, value)",
          example: "keys = (\"a\", \"b\")\nd = dict.fromkeys(keys, 0)\nprint(d)",
          output: "{\"a\": 0, \"b\": 0}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Initializing a dictionary."
        },
        {
          id: "update",
          name: "update()",
          description: "Updates the dictionary with the specified key-value pairs",
          syntax: "dict.update(iterable)",
          example: "d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d)",
          output: "{\"a\": 1, \"b\": 2}",
          mutates: true,
          timeComplexity: "O(k)",
          commonUseCases: "Merging dictionaries."
        },
      ]
    },
    {
      id: "remove-delete",
      title: "Removing Elements",
      methods: [
        {
          id: "clear",
          name: "clear()",
          description: "Removes all elements from the dictionary",
          syntax: "dict.clear()",
          example: "d = {\"a\": 1}\nd.clear()\nprint(d)",
          output: "{}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Emptying a dictionary."
        },
        {
          id: "pop",
          name: "pop()",
          description: "Removes the element with the specified key",
          syntax: "dict.pop(key, default)",
          example: "d = {\"a\": 1}\nd.pop(\"a\")\nprint(d)",
          output: "{}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Removing an item."
        },
        {
          id: "popitem",
          name: "popitem()",
          description: "Removes the last inserted key-value pair",
          syntax: "dict.popitem()",
          example: "d = {\"a\": 1, \"b\": 2}\nprint(d.popitem())",
          output: "(\"b\", 2)",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "LIFO removing."
        },
      ]
    },
    {
      id: "utility",
      title: "Utility",
      methods: [
        {
          id: "copy",
          name: "copy()",
          description: "Returns a copy of the dictionary",
          syntax: "dict.copy()",
          example: "d = {\"a\": 1}\nnew_d = d.copy()\nprint(new_d)",
          output: "{\"a\": 1}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Shallow copying."
        },
      ]
    },
  ]
};
