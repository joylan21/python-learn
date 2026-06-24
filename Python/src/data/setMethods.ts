import type { Category } from "./types";

export const setMethods: Category = {
  id: "set",
  title: "Sets",
  subsections: [
    {
      id: "add-remove",
      title: "Adding & Removing",
      methods: [
        {
          id: "add",
          name: "add()",
          description: "Adds an element to the set",
          syntax: "set.add(elm)",
          example: "s = {1}\ns.add(2)\nprint(s)",
          output: "{1, 2}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Adding an element."
        },
        {
          id: "clear",
          name: "clear()",
          description: "Removes all the elements from the set",
          syntax: "set.clear()",
          example: "s = {1, 2}\ns.clear()\nprint(s)",
          output: "set()",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "Emptying a set."
        },
        {
          id: "discard",
          name: "discard()",
          description: "Remove the specified item",
          syntax: "set.discard(value)",
          example: "s = {1, 2}\ns.discard(2)\nprint(s)",
          output: "{1}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Safe removal."
        },
        {
          id: "pop",
          name: "pop()",
          description: "Removes an arbitrary element from the set",
          syntax: "set.pop()",
          example: "s = {1}\nprint(s.pop())",
          output: "1",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Removing random item."
        },
        {
          id: "remove",
          name: "remove()",
          description: "Removes the specified element (raises error if not found)",
          syntax: "set.remove(item)",
          example: "s = {1, 2}\ns.remove(2)\nprint(s)",
          output: "{1}",
          mutates: true,
          timeComplexity: "O(1)",
          commonUseCases: "Strict removal."
        },
      ]
    },
    {
      id: "math-operations",
      title: "Mathematical Operations",
      methods: [
        {
          id: "difference",
          name: "difference()",
          description: "Returns a set containing the difference between two or more sets",
          syntax: "set.difference(set)",
          example: "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1.difference(s2))",
          output: "{1}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Finding unique elements."
        },
        {
          id: "intersection",
          name: "intersection()",
          description: "Returns a set, that is the intersection of two or more sets",
          syntax: "set.intersection(set)",
          example: "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1.intersection(s2))",
          output: "{2}",
          mutates: false,
          timeComplexity: "O(min(len(s1), len(s2)))",
          commonUseCases: "Finding common elements."
        },
        {
          id: "symmetric_difference",
          name: "symmetric_difference()",
          description: "Returns a set with the symmetric differences of two sets",
          syntax: "set.symmetric_difference(set)",
          example: "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1.symmetric_difference(s2))",
          output: "{1, 3}",
          mutates: false,
          timeComplexity: "O(len(s1) + len(s2))",
          commonUseCases: "Finding exclusive elements."
        },
        {
          id: "union",
          name: "union()",
          description: "Return a set containing the union of sets",
          syntax: "set.union(set)",
          example: "s1 = {1, 2}\ns2 = {2, 3}\nprint(s1.union(s2))",
          output: "{1, 2, 3}",
          mutates: false,
          timeComplexity: "O(len(s1) + len(s2))",
          commonUseCases: "Combining sets."
        },
      ]
    },
    {
      id: "math-updates",
      title: "In-place Math Operations",
      methods: [
        {
          id: "difference_update",
          name: "difference_update()",
          description: "Removes the items in this set that are also included in another, specified set",
          syntax: "set.difference_update(set)",
          example: "s1 = {1, 2}\ns1.difference_update({2, 3})\nprint(s1)",
          output: "{1}",
          mutates: true,
          timeComplexity: "O(n)",
          commonUseCases: "In-place difference."
        },
        {
          id: "intersection_update",
          name: "intersection_update()",
          description: "Removes the items in this set that are not present in other, specified set(s)",
          syntax: "set.intersection_update(set)",
          example: "s1 = {1, 2}\ns1.intersection_update({2, 3})\nprint(s1)",
          output: "{2}",
          mutates: true,
          timeComplexity: "O(min(len(s1), len(s2)))",
          commonUseCases: "In-place intersection."
        },
        {
          id: "symmetric_difference_update",
          name: "symmetric_difference_update()",
          description: "Inserts the symmetric differences from this set and another",
          syntax: "set.symmetric_difference_update(set)",
          example: "s1 = {1, 2}\ns1.symmetric_difference_update({2, 3})\nprint(s1)",
          output: "{1, 3}",
          mutates: true,
          timeComplexity: "O(len(s1) + len(s2))",
          commonUseCases: "In-place symmetric difference."
        },
        {
          id: "update",
          name: "update()",
          description: "Update the set with the union of this set and others",
          syntax: "set.update(set)",
          example: "s1 = {1, 2}\ns1.update({2, 3})\nprint(s1)",
          output: "{1, 2, 3}",
          mutates: true,
          timeComplexity: "O(len(s2))",
          commonUseCases: "Adding multiple elements."
        },
      ]
    },
    {
      id: "comparisons",
      title: "Set Comparisons",
      methods: [
        {
          id: "isdisjoint",
          name: "isdisjoint()",
          description: "Returns whether two sets have a intersection or not",
          syntax: "set.isdisjoint(set)",
          example: "s1 = {1, 2}\nprint(s1.isdisjoint({3, 4}))",
          output: "True",
          mutates: false,
          timeComplexity: "O(min(len(s1), len(s2)))",
          commonUseCases: "Checking for overlap."
        },
        {
          id: "issubset",
          name: "issubset()",
          description: "Returns whether another set contains this set or not",
          syntax: "set.issubset(set)",
          example: "s1 = {1}\nprint(s1.issubset({1, 2}))",
          output: "True",
          mutates: false,
          timeComplexity: "O(len(s1))",
          commonUseCases: "Checking sub-sets."
        },
        {
          id: "issuperset",
          name: "issuperset()",
          description: "Returns whether this set contains another set or not",
          syntax: "set.issuperset(set)",
          example: "s1 = {1, 2}\nprint(s1.issuperset({1}))",
          output: "True",
          mutates: false,
          timeComplexity: "O(len(s2))",
          commonUseCases: "Checking super-sets."
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
          description: "Returns a copy of the set",
          syntax: "set.copy()",
          example: "s = {1, 2}\nnew_s = s.copy()\nprint(new_s)",
          output: "{1, 2}",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Shallow copying."
        },
      ]
    },
  ]
};
