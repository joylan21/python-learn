import type { Category } from "./types";

export const tupleMethods: Category = {
  id: "tuple",
  title: "Tuples",
  subsections: [
    {
      id: "search-count",
      title: "Searching & Counting",
      methods: [
        {
          id: "count",
          name: "count()",
          description: "Returns the number of times a specified value occurs in a tuple",
          syntax: "tuple.count(value)",
          example: "t = (1, 2, 2)\nprint(t.count(2))",
          output: "2",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Counting duplicates."
        },
        {
          id: "index",
          name: "index()",
          description: "Searches the tuple for a specified value and returns the position of where it was found",
          syntax: "tuple.index(value)",
          example: "t = (1, 2, 3)\nprint(t.index(2))",
          output: "1",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Finding items."
        },
      ]
    },
  ]
};
