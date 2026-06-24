import json
import os

# ----------------- DICT METHODS -----------------
dict_methods_data = [
    {'name': 'clear()', 'description': 'Removes all elements from the dictionary', 'syntax': 'dict.clear()', 'example': 'd = {"a": 1}\nd.clear()\nprint(d)', 'output': '{}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Emptying a dictionary.'},
    {'name': 'copy()', 'description': 'Returns a copy of the dictionary', 'syntax': 'dict.copy()', 'example': 'd = {"a": 1}\nnew_d = d.copy()\nprint(new_d)', 'output': '{"a": 1}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Shallow copying.'},
    {'name': 'fromkeys()', 'description': 'Returns a dictionary with the specified keys and value', 'syntax': 'dict.fromkeys(keys, value)', 'example': 'keys = ("a", "b")\nd = dict.fromkeys(keys, 0)\nprint(d)', 'output': '{"a": 0, "b": 0}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Initializing a dictionary.'},
    {'name': 'get()', 'description': 'Returns the value of the specified key', 'syntax': 'dict.get(key, default)', 'example': 'd = {"a": 1}\nprint(d.get("b", 0))', 'output': '0', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Safe key access.'},
    {'name': 'items()', 'description': 'Returns a list containing a tuple for each key value pair', 'syntax': 'dict.items()', 'example': 'd = {"a": 1}\nprint(list(d.items()))', 'output': '[("a", 1)]', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Iterating keys and values.'},
    {'name': 'keys()', 'description': 'Returns a list containing the dictionary\'s keys', 'syntax': 'dict.keys()', 'example': 'd = {"a": 1}\nprint(list(d.keys()))', 'output': '["a"]', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Iterating keys.'},
    {'name': 'pop()', 'description': 'Removes the element with the specified key', 'syntax': 'dict.pop(key, default)', 'example': 'd = {"a": 1}\nd.pop("a")\nprint(d)', 'output': '{}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Removing an item.'},
    {'name': 'popitem()', 'description': 'Removes the last inserted key-value pair', 'syntax': 'dict.popitem()', 'example': 'd = {"a": 1, "b": 2}\nprint(d.popitem())', 'output': '("b", 2)', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'LIFO removing.'},
    {'name': 'setdefault()', 'description': 'Returns the value of the specified key. If the key does not exist: insert the key, with the specified value', 'syntax': 'dict.setdefault(key, default)', 'example': 'd = {"a": 1}\nd.setdefault("b", 2)\nprint(d)', 'output': '{"a": 1, "b": 2}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Inserting if not present.'},
    {'name': 'update()', 'description': 'Updates the dictionary with the specified key-value pairs', 'syntax': 'dict.update(iterable)', 'example': 'd = {"a": 1}\nd.update({"b": 2})\nprint(d)', 'output': '{"a": 1, "b": 2}', 'mutates': True, 'timeComplexity': 'O(k)', 'commonUseCases': 'Merging dictionaries.'},
    {'name': 'values()', 'description': 'Returns a list of all the values in the dictionary', 'syntax': 'dict.values()', 'example': 'd = {"a": 1}\nprint(list(d.values()))', 'output': '[1]', 'mutates': False, 'timeComplexity': 'O(1)', 'commonUseCases': 'Iterating values.'},
]

dict_groups = {
    'access-search': ('Accessing & Searching', [m for m in dict_methods_data if m['name'] in ['get()', 'setdefault()', 'items()', 'keys()', 'values()']]),
    'add-modify': ('Adding & Modifying', [m for m in dict_methods_data if m['name'] in ['update()', 'fromkeys()']]),
    'remove-delete': ('Removing Elements', [m for m in dict_methods_data if m['name'] in ['pop()', 'popitem()', 'clear()']]),
    'utility': ('Utility', [m for m in dict_methods_data if m['name'] in ['copy()']])
}

# ----------------- SET METHODS -----------------
set_methods_data = [
    {'name': 'add()', 'description': 'Adds an element to the set', 'syntax': 'set.add(elm)', 'example': 's = {1}\ns.add(2)\nprint(s)', 'output': '{1, 2}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Adding an element.'},
    {'name': 'clear()', 'description': 'Removes all the elements from the set', 'syntax': 'set.clear()', 'example': 's = {1, 2}\ns.clear()\nprint(s)', 'output': 'set()', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'Emptying a set.'},
    {'name': 'copy()', 'description': 'Returns a copy of the set', 'syntax': 'set.copy()', 'example': 's = {1, 2}\nnew_s = s.copy()\nprint(new_s)', 'output': '{1, 2}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Shallow copying.'},
    {'name': 'difference()', 'description': 'Returns a set containing the difference between two or more sets', 'syntax': 'set.difference(set)', 'example': 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1.difference(s2))', 'output': '{1}', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Finding unique elements.'},
    {'name': 'difference_update()', 'description': 'Removes the items in this set that are also included in another, specified set', 'syntax': 'set.difference_update(set)', 'example': 's1 = {1, 2}\ns1.difference_update({2, 3})\nprint(s1)', 'output': '{1}', 'mutates': True, 'timeComplexity': 'O(n)', 'commonUseCases': 'In-place difference.'},
    {'name': 'discard()', 'description': 'Remove the specified item', 'syntax': 'set.discard(value)', 'example': 's = {1, 2}\ns.discard(2)\nprint(s)', 'output': '{1}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Safe removal.'},
    {'name': 'intersection()', 'description': 'Returns a set, that is the intersection of two or more sets', 'syntax': 'set.intersection(set)', 'example': 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1.intersection(s2))', 'output': '{2}', 'mutates': False, 'timeComplexity': 'O(min(len(s1), len(s2)))', 'commonUseCases': 'Finding common elements.'},
    {'name': 'intersection_update()', 'description': 'Removes the items in this set that are not present in other, specified set(s)', 'syntax': 'set.intersection_update(set)', 'example': 's1 = {1, 2}\ns1.intersection_update({2, 3})\nprint(s1)', 'output': '{2}', 'mutates': True, 'timeComplexity': 'O(min(len(s1), len(s2)))', 'commonUseCases': 'In-place intersection.'},
    {'name': 'isdisjoint()', 'description': 'Returns whether two sets have a intersection or not', 'syntax': 'set.isdisjoint(set)', 'example': 's1 = {1, 2}\nprint(s1.isdisjoint({3, 4}))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(min(len(s1), len(s2)))', 'commonUseCases': 'Checking for overlap.'},
    {'name': 'issubset()', 'description': 'Returns whether another set contains this set or not', 'syntax': 'set.issubset(set)', 'example': 's1 = {1}\nprint(s1.issubset({1, 2}))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(len(s1))', 'commonUseCases': 'Checking sub-sets.'},
    {'name': 'issuperset()', 'description': 'Returns whether this set contains another set or not', 'syntax': 'set.issuperset(set)', 'example': 's1 = {1, 2}\nprint(s1.issuperset({1}))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(len(s2))', 'commonUseCases': 'Checking super-sets.'},
    {'name': 'pop()', 'description': 'Removes an arbitrary element from the set', 'syntax': 'set.pop()', 'example': 's = {1}\nprint(s.pop())', 'output': '1', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Removing random item.'},
    {'name': 'remove()', 'description': 'Removes the specified element (raises error if not found)', 'syntax': 'set.remove(item)', 'example': 's = {1, 2}\ns.remove(2)\nprint(s)', 'output': '{1}', 'mutates': True, 'timeComplexity': 'O(1)', 'commonUseCases': 'Strict removal.'},
    {'name': 'symmetric_difference()', 'description': 'Returns a set with the symmetric differences of two sets', 'syntax': 'set.symmetric_difference(set)', 'example': 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1.symmetric_difference(s2))', 'output': '{1, 3}', 'mutates': False, 'timeComplexity': 'O(len(s1) + len(s2))', 'commonUseCases': 'Finding exclusive elements.'},
    {'name': 'symmetric_difference_update()', 'description': 'Inserts the symmetric differences from this set and another', 'syntax': 'set.symmetric_difference_update(set)', 'example': 's1 = {1, 2}\ns1.symmetric_difference_update({2, 3})\nprint(s1)', 'output': '{1, 3}', 'mutates': True, 'timeComplexity': 'O(len(s1) + len(s2))', 'commonUseCases': 'In-place symmetric difference.'},
    {'name': 'union()', 'description': 'Return a set containing the union of sets', 'syntax': 'set.union(set)', 'example': 's1 = {1, 2}\ns2 = {2, 3}\nprint(s1.union(s2))', 'output': '{1, 2, 3}', 'mutates': False, 'timeComplexity': 'O(len(s1) + len(s2))', 'commonUseCases': 'Combining sets.'},
    {'name': 'update()', 'description': 'Update the set with the union of this set and others', 'syntax': 'set.update(set)', 'example': 's1 = {1, 2}\ns1.update({2, 3})\nprint(s1)', 'output': '{1, 2, 3}', 'mutates': True, 'timeComplexity': 'O(len(s2))', 'commonUseCases': 'Adding multiple elements.'},
]

set_groups = {
    'add-remove': ('Adding & Removing', [m for m in set_methods_data if m['name'] in ['add()', 'clear()', 'discard()', 'pop()', 'remove()']]),
    'math-operations': ('Mathematical Operations', [m for m in set_methods_data if m['name'] in ['difference()', 'intersection()', 'symmetric_difference()', 'union()']]),
    'math-updates': ('In-place Math Operations', [m for m in set_methods_data if m['name'] in ['difference_update()', 'intersection_update()', 'symmetric_difference_update()', 'update()']]),
    'comparisons': ('Set Comparisons', [m for m in set_methods_data if m['name'] in ['isdisjoint()', 'issubset()', 'issuperset()']]),
    'utility': ('Utility', [m for m in set_methods_data if m['name'] in ['copy()']])
}

# ----------------- TUPLE METHODS -----------------
tuple_methods_data = [
    {'name': 'count()', 'description': 'Returns the number of times a specified value occurs in a tuple', 'syntax': 'tuple.count(value)', 'example': 't = (1, 2, 2)\nprint(t.count(2))', 'output': '2', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Counting duplicates.'},
    {'name': 'index()', 'description': 'Searches the tuple for a specified value and returns the position of where it was found', 'syntax': 'tuple.index(value)', 'example': 't = (1, 2, 3)\nprint(t.index(2))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Finding items.'},
]

tuple_groups = {
    'search-count': ('Searching & Counting', tuple_methods_data)
}


def write_file(filename, category_id, title, groups):
    output = f'import type {{ Category }} from "./types";\n\nexport const {category_id}Methods: Category = {{\n  id: "{category_id}",\n  title: "{title}",\n  subsections: [\n'
    
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

    with open(f'd:/Learnings/Webpages/Python/src/data/{filename}', 'w', encoding='utf-8') as f:
        f.write(output)

write_file('dictMethods.ts', 'dict', 'Dictionaries', dict_groups)
write_file('setMethods.ts', 'set', 'Sets', set_groups)
write_file('tupleMethods.ts', 'tuple', 'Tuples', tuple_groups)
