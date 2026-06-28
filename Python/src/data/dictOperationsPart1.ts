import type { Category } from './types';

export const dictOperationsPart1Problems: Category = {
    id: 'dict-operations-part-1',
    title: 'Part 1',
    isDictOperationsCategory: true,
    isProblemCategory: true,
    subsections: [
        {
            id: 'basic-dictionary-operations',
            title: 'Basic Dictionary Operations',
            methods: [
                {
                    id: 'sort-by-key-or-value',
                    name: '1. Sort by Key or Value',
                    description: 'Sort a dictionary by its keys or values.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_dict(d, by_value=False):
    if by_value:
        return dict(sorted(d.items(), key=lambda item: item[1]))
    return dict(sorted(d.items()))

d = {'b': 2, 'a': 3, 'c': 1}
print(sort_dict(d))           # {'a': 3, 'b': 2, 'c': 1}
print(sort_dict(d, True))     # {'c': 1, 'b': 2, 'a': 3}`
                },
                {
                    id: 'handling-missing-keys',
                    name: '2. Handling missing keys',
                    description: 'Handle missing keys using get() or setdefault().',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Error Handling',
                    isProblem: true,
                    solutionCode: `def handle_missing(d, key):
    # Using get
    val1 = d.get(key, 'Default Value')
    # Using setdefault (mutates if missing)
    val2 = d.setdefault(key, 'Default Value')
    return val1

d = {'a': 1}
print(handle_missing(d, 'b'))  # 'Default Value'`
                },
                {
                    id: 'keys-having-multiple-inputs',
                    name: '3. Keys having multiple inputs',
                    description: 'Dictionary where each key maps to multiple values (list).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Data Structuring',
                    isProblem: true,
                    solutionCode: `def multi_input_dict():
    d = {}
    d['fruits'] = ['apple', 'banana', 'cherry']
    d['colors'] = ['red', 'green']
    return d

print(multi_input_dict())`
                },
                {
                    id: 'find-sum-of-all-items',
                    name: '4. Find sum of all items',
                    description: 'Calculate the sum of all values in a dictionary.',
                    syntax: 'sum(d.values())',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def sum_dict_values(d):
    return sum(d.values())

d = {'a': 100, 'b': 200, 'c': 300}
print(sum_dict_values(d))  # 600`
                },
                {
                    id: 'find-size-of-dictionary',
                    name: '5. Find size of a Dictionary',
                    description: 'Get the number of key-value pairs in a dictionary.',
                    syntax: 'len(d)',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Measurement',
                    isProblem: true,
                    solutionCode: `def get_dict_size(d):
    # Using len() or sys.getsizeof() for memory
    import sys
    return len(d), sys.getsizeof(d)

d = {'a': 1, 'b': 2}
print(get_dict_size(d))  # (2, 232)`
                },
                {
                    id: 'sorting-using-itemgetter',
                    name: '6. Sorting – Using itemgetter',
                    description: 'Sort a list of dictionaries using operator.itemgetter.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `from operator import itemgetter
def sort_with_itemgetter(lst, key_name):
    return sorted(lst, key=itemgetter(key_name))

lst = [{'name': 'John', 'age': 25}, {'name': 'Jane', 'age': 22}]
print(sort_with_itemgetter(lst, 'age'))`
                },
                {
                    id: 'sorting-using-lambda-function',
                    name: '7. Sorting – Using lambda function',
                    description: 'Sort a list of dictionaries using a lambda function.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_with_lambda(lst, key_name):
    return sorted(lst, key=lambda x: x[key_name])

lst = [{'name': 'John', 'age': 25}, {'name': 'Jane', 'age': 22}]
print(sort_with_lambda(lst, 'age'))`
                },
                {
                    id: 'merging-two-dictionaries',
                    name: '8. Merging two Dictionaries',
                    description: 'Merge two dictionaries into a single dictionary.',
                    syntax: 'd1 | d2',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N + M)',
                    commonUseCases: 'Combining Data',
                    isProblem: true,
                    solutionCode: `def merge_dicts(d1, d2):
    # Python 3.9+ syntax
    return d1 | d2

d1 = {'a': 1, 'b': 2}
d2 = {'b': 3, 'c': 4}
print(merge_dicts(d1, d2))  # {'a': 1, 'b': 3, 'c': 4}`
                },
                {
                    id: 'create-grade-calculator',
                    name: '9. Create grade calculator',
                    description: 'Calculate average grade from a dictionary of scores.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Practical Example',
                    isProblem: true,
                    solutionCode: `def grade_calculator(scores):
    total = sum(scores.values())
    avg = total / len(scores) if scores else 0
    if avg >= 90: return 'A'
    elif avg >= 80: return 'B'
    elif avg >= 70: return 'C'
    else: return 'F'

scores = {'Math': 95, 'English': 85, 'Science': 90}
print(grade_calculator(scores))  # 'A'`
                }
            ]
        },
        {
            id: 'ordereddict-counter-operations',
            title: 'OrderedDict & Counter Operations',
            methods: [
                {
                    id: 'insertion-at-beginning-ordereddict',
                    name: '1. Insertion at beginning in OrderedDict',
                    description: 'Insert an item at the beginning of an OrderedDict.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Structuring',
                    isProblem: true,
                    solutionCode: `from collections import OrderedDict
def insert_beginning(od, key, value):
    od.update({key: value})
    od.move_to_end(key, last=False)
    return od

od = OrderedDict([('b', 2), ('c', 3)])
print(insert_beginning(od, 'a', 1))  # OrderedDict([('a', 1), ('b', 2), ('c', 3)])`
                },
                {
                    id: 'check-order-of-character',
                    name: '2. Check order of character using OrderedDict()',
                    description: 'Check if characters in a string follow a specific order pattern.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String Parsing',
                    isProblem: true,
                    solutionCode: `from collections import OrderedDict
def check_order(string, pattern):
    d = OrderedDict.fromkeys(string)
    ptrlen = 0
    for key in d.keys():
        if ptrlen == len(pattern):
            return True
        if key == pattern[ptrlen]:
            ptrlen += 1
    return ptrlen == len(pattern)

print(check_order('engineers rock', 'er'))  # True`
                },
                {
                    id: 'common-elements-sorted-arrays-intersection',
                    name: '3. Common elements in sorted arrays by dictionary intersection',
                    description: 'Find common elements among three arrays using dictionaries.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N1 + N2 + N3)',
                    commonUseCases: 'Set operations',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def common_elements(ar1, ar2, ar3):
    d1 = Counter(ar1)
    d2 = Counter(ar2)
    d3 = Counter(ar3)
    # Intersection of counters finds common elements and min counts
    result = d1 & d2 & d3
    return list(result.elements())

print(common_elements([1, 5, 10, 20], [5, 13, 20], [5, 20]))  # [5, 20]`
                },
                {
                    id: 'dict-counter-winner-election',
                    name: '4. Dictionary and counter to find winner of election',
                    description: 'Find the candidate with max votes, breaking ties lexicographically.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def election_winner(votes):
    vote_counts = Counter(votes)
    max_votes = max(vote_counts.values())
    winners = [c for c, v in vote_counts.items() if v == max_votes]
    return sorted(winners)[0]

votes = ['john', 'johnny', 'jackie', 'johnny', 'john', 'jackie', 'jamie', 'jamie', 'john', 'johnny', 'jamie', 'johnny', 'john']
print(election_winner(votes))  # 'john'`
                },
                {
                    id: 'key-maximum-unique-values',
                    name: '5. Key with maximum unique values',
                    description: 'Find the key in dictionary whose value list has most unique items.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Data Analysis',
                    isProblem: true,
                    solutionCode: `def max_unique_val_key(d):
    max_key = None
    max_unique = 0
    for key, val_list in d.items():
        unique_count = len(set(val_list))
        if unique_count > max_unique:
            max_unique = unique_count
            max_key = key
    return max_key

d = {'A': [1, 2, 3], 'B': [1, 2, 2, 2], 'C': [1, 1, 1]}
print(max_unique_val_key(d))  # 'A'`
                }
            ]
        },
        {
            id: 'strings-and-frequencies',
            title: 'Strings & Frequencies',
            methods: [
                {
                    id: 'find-duplicate-characters',
                    name: '1. Find all duplicate characters in string',
                    description: 'Count frequencies and return characters appearing more than once.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String Parsing',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def find_duplicates(s):
    counts = Counter(s)
    return [char for char, count in counts.items() if count > 1]

print(find_duplicates("hello world"))  # ['l', 'o']`
                },
                {
                    id: 'group-similar-items-dict-values',
                    name: '2. Group Similar items to Dictionary Values List',
                    description: 'Group items from a list into a dictionary based on similarity/category.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Grouping',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def group_similar(items):
    d = defaultdict(list)
    for item in items:
        # Group by first letter as an example of similarity
        d[item[0]].append(item)
    return dict(d)

print(group_similar(['apple', 'banana', 'apricot', 'blueberry']))
# {'a': ['apple', 'apricot'], 'b': ['banana', 'blueberry']}`
                },
                {
                    id: 'kth-non-repeating-character',
                    name: "3. K'th Non-repeating Character",
                    description: 'Find the K-th character in a string that does not repeat.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String Parsing',
                    isProblem: true,
                    solutionCode: `from collections import OrderedDict
def kth_non_repeating(s, k):
    d = OrderedDict()
    for char in s:
        d[char] = d.get(char, 0) + 1
    
    non_repeating = [char for char, count in d.items() if count == 1]
    return non_repeating[k-1] if k <= len(non_repeating) else None

print(kth_non_repeating("geeksforgeeks", 2))  # 'o'`
                },
                {
                    id: 'replace-string-by-kth-value',
                    name: '4. Replace String by Kth value',
                    description: 'Replace strings in a list with the K-th value of their mapped dictionary entry.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'String Manipulation',
                    isProblem: true,
                    solutionCode: `def replace_by_kth_value(lst, d, k):
    return [d.get(word, [word]*(k+1))[k] for word in lst]

d = {'apple': ['fruit', 'red', 'sweet'], 'banana': ['fruit', 'yellow', 'sweet']}
print(replace_by_kth_value(['apple', 'banana', 'unknown'], d, 1))  # ['red', 'yellow', 'unknown']`
                },
                {
                    id: 'find-mirror-characters',
                    name: '5. Find mirror characters in a string',
                    description: 'Find mirror characters based on the alphabet (a<->z, b<->y).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Cryptography',
                    isProblem: true,
                    solutionCode: `def mirror_chars(s, n):
    # n is the index from where mirroring starts
    original = 'abcdefghijklmnopqrstuvwxyz'
    reverse = 'zyxwvutsrqponmlkjihgfedcba'
    dict_chars = dict(zip(original, reverse))
    
    prefix = s[0:n-1]
    suffix = s[n-1:]
    mirror = "".join([dict_chars[c] for c in suffix])
    return prefix + mirror

print(mirror_chars("paradox", 3))  # 'paizwlc'`
                },
                {
                    id: 'counting-frequencies-dictionary',
                    name: '6. Counting frequencies using dictionary',
                    description: 'Count frequency of each element in a list without using Counter.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Counting',
                    isProblem: true,
                    solutionCode: `def count_frequencies(lst):
    freq = {}
    for item in lst:
        freq[item] = freq.get(item, 0) + 1
    return freq

print(count_frequencies([1, 1, 2, 3, 2, 1]))  # {1: 3, 2: 2, 3: 1}`
                },
                {
                    id: 'scraping-finding-ordered-words',
                    name: '7. Scraping And Finding Ordered Words',
                    description: 'Find words in a dictionary whose letters are in alphabetical order.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L)',
                    commonUseCases: 'Text Processing',
                    isProblem: true,
                    solutionCode: `def is_ordered(word):
    return list(word) == sorted(word)

def find_ordered_words(words):
    return [w for w in words if is_ordered(w)]

print(find_ordered_words(['apple', 'beep', 'cat', 'door']))  # ['beep']`
                },
                {
                    id: 'possible-words-using-given-characters',
                    name: '8. Possible Words using given characters',
                    description: 'Find which given words can be formed from a specific set of characters.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L)',
                    commonUseCases: 'Word Games',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def possible_words(words, char_set):
    char_count = Counter(char_set)
    res = []
    for word in words:
        word_count = Counter(word)
        if all(word_count[char] <= char_count[char] for char in word_count):
            res.append(word)
    return res

words = ['go', 'bat', 'me', 'eat', 'goal', 'boy', 'run']
chars = ['e', 'o', 'b', 'a', 'm', 'g', 'l']
print(possible_words(words, chars))  # ['go', 'me', 'goal']`
                }
            ]
        },
        {
            id: 'filtering-and-deletions',
            title: 'Filtering & Deletions',
            methods: [
                {
                    id: 'remove-a-key',
                    name: '1. Remove a key from dictionary',
                    description: 'Remove a key from a dictionary using pop() or del.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Data Cleaning',
                    isProblem: true,
                    solutionCode: `def remove_key(d, key):
    # Use pop to avoid KeyError if missing, providing a default
    d.pop(key, None)
    return d

d = {'a': 1, 'b': 2}
print(remove_key(d, 'a'))  # {'b': 2}`
                },
                {
                    id: 'replace-words-from-dictionary',
                    name: '2. Replace words from Dictionary',
                    description: 'Replace words in a string based on dictionary mappings.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Text Processing',
                    isProblem: true,
                    solutionCode: `def replace_words(text, d):
    return " ".join(d.get(word, word) for word in text.split())

text = "hello world"
d = {'hello': 'hi', 'world': 'earth'}
print(replace_words(text, d))  # "hi earth"`
                },
                {
                    id: 'remove-key-words',
                    name: '3. Remove Key Words',
                    description: 'Remove specific keywords from a string.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Text Processing',
                    isProblem: true,
                    solutionCode: `def remove_keywords(text, keywords):
    keyword_set = set(keywords)
    return " ".join(w for w in text.split() if w not in keyword_set)

text = "this is a test string"
keywords = ['is', 'a']
print(remove_keywords(text, keywords))  # "this test string"`
                },
                {
                    id: 'remove-duplicate-words-sentence',
                    name: '4. Remove duplicates words from a given sentence',
                    description: 'Remove duplicate words while maintaining original order.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Text Processing',
                    isProblem: true,
                    solutionCode: `def remove_duplicate_words(sentence):
    from collections import OrderedDict
    # OrderedDict maintains insertion order, fromkeys removes duplicates
    return " ".join(OrderedDict.fromkeys(sentence.split()))

print(remove_duplicate_words("hello world hello python"))  # "hello world python"`
                },
                {
                    id: 'remove-duplicate-values-across',
                    name: '5. Remove duplicate values across Values',
                    description: 'Remove values that appear in multiple keys.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Cleaning',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def remove_cross_duplicates(d):
    all_values = [v for vals in d.values() for v in vals]
    counts = Counter(all_values)
    
    return {k: [v for v in vals if counts[v] == 1] for k, vals in d.items()}

d = {'A': [1, 2, 3], 'B': [3, 4, 5]}
print(remove_cross_duplicates(d))  # {'A': [1, 2], 'B': [4, 5]}`
                },
                {
                    id: 'remove-keys-values-greater-than-k',
                    name: '6. Remove keys with Values Greater than K ( Including mixed values )',
                    description: 'Remove keys where values are greater than K, ignoring non-numeric values.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_greater_than_k(d, k):
    res = {}
    for key, val in d.items():
        if isinstance(val, (int, float)) and val > k:
            continue
        res[key] = val
    return res

d = {'a': 10, 'b': 'hello', 'c': 20}
print(remove_greater_than_k(d, 15))  # {'a': 10, 'b': 'hello'}`
                },
                {
                    id: 'remove-keys-substring-values',
                    name: '7. Remove keys with substring values',
                    description: 'Remove keys whose value contains a specific substring.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def remove_substring_keys(d, sub):
    return {k: v for k, v in d.items() if not (isinstance(v, str) and sub in v)}

d = {'a': 'apple tree', 'b': 'banana', 'c': 'cherry tree'}
print(remove_substring_keys(d, 'tree'))  # {'b': 'banana'}`
                }
            ]
        },
        {
            id: 'dictionary-conversions',
            title: 'Dictionary Conversions',
            methods: [
                {
                    id: 'convert-kv-list-to-list-of-lists',
                    name: '1. Convert Key-Value list Dictionary to List of Lists',
                    description: 'Convert dictionary with list values into a list of lists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def dict_to_list_of_lists(d):
    res = []
    for k, v in d.items():
        res.append([k] + v)
    return res

d = {'A': [1, 2], 'B': [3, 4]}
print(dict_to_list_of_lists(d))  # [['A', 1, 2], ['B', 3, 4]]`
                },
                {
                    id: 'convert-list-to-list-of-dicts',
                    name: '2. Convert List to List of dictionaries',
                    description: 'Convert a flat list into a list of dictionaries.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def list_to_dicts(lst, keys):
    return [{keys[i]: lst[i], keys[i+1]: lst[i+1]} for i in range(0, len(lst), 2)]

lst = ['John', 25, 'Jane', 22]
keys = ['name', 'age']
print(list_to_dicts(lst, keys))  # [{'name': 'John', 'age': 25}, {'name': 'Jane', 'age': 22}]`
                },
                {
                    id: 'convert-lists-of-list-to-dict',
                    name: '3. Convert Lists of List to Dictionary',
                    description: 'Convert a list of lists into a dictionary where first element is key.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def list_of_lists_to_dict(lst):
    return {item[0]: item[1:] for item in lst}

lst = [['A', 1, 2], ['B', 3, 4]]
print(list_of_lists_to_dict(lst))  # {'A': [1, 2], 'B': [3, 4]}`
                },
                {
                    id: 'convert-list-of-dicts-to-list-of-lists',
                    name: '4. Convert List of Dictionaries to List of Lists',
                    description: 'Extract values from a list of dictionaries.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def dicts_to_lists(lst):
    if not lst: return []
    keys = list(lst[0].keys())
    return [keys] + [[d[k] for k in keys] for d in lst]

lst = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4}]
print(dicts_to_lists(lst))  # [['A', 'B'], [1, 2], [3, 4]]`
                },
                {
                    id: 'convert-kv-list-to-flat-dict',
                    name: '5. Convert key-values list to flat dictionary',
                    description: 'Flatten a dictionary mapping keys to lists of values into single mappings.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def flatten_dict(d):
    return dict(zip(d['month'], d['name']))

d = {'month': [1, 2, 3], 'name': ['Jan', 'Feb', 'Mar']}
print(flatten_dict(d))  # {1: 'Jan', 2: 'Feb', 3: 'Mar'}`
                },
                {
                    id: 'convert-list-of-tuples-to-dict',
                    name: '6. Convert a list of Tuples into Dictionary',
                    description: 'Convert tuples to a dictionary, appending to list if keys repeat.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def tuples_to_dict(tuples):
    from collections import defaultdict
    d = defaultdict(list)
    for k, v in tuples:
        d[k].append(v)
    return dict(d)

print(tuples_to_dict([('A', 1), ('B', 2), ('A', 3)]))  # {'A': [1, 3], 'B': [2]}`
                },
                {
                    id: 'convert-nested-dict-to-mapped-tuple',
                    name: '7. Convert Nested dictionary to Mapped Tuple',
                    description: 'Convert nested dictionary into a list of tuples.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def nested_to_tuples(d):
    res = []
    for k, v_dict in d.items():
        res.append((k, v_dict.get('name'), v_dict.get('age')))
    return res

d = {'id1': {'name': 'John', 'age': 25}, 'id2': {'name': 'Jane', 'age': 22}}
print(nested_to_tuples(d))  # [('id1', 'John', 25), ('id2', 'Jane', 22)]`
                },
                {
                    id: 'convert-string-to-dictionary',
                    name: '8. Convert string to dictionary',
                    description: 'Parse a string representation of key-values into a dict.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Parsing',
                    isProblem: true,
                    solutionCode: `def string_to_dict(s):
    # If the string is valid python code:
    import ast
    try:
        return ast.literal_eval(s)
    except:
        # Custom parsing
        return dict(item.split("=") for item in s.split(","))

print(string_to_dict("a=1,b=2"))  # {'a': '1', 'b': '2'}`
                },
                {
                    id: 'convert-dict-to-k-sized-dicts',
                    name: '9. Convert dictionary to K sized dictionaries',
                    description: 'Chunk a dictionary into smaller dictionaries of max size K.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Partitioning',
                    isProblem: true,
                    solutionCode: `from itertools import islice
def chunk_dict(d, k):
    it = iter(d)
    return [{key: d[key] for key in islice(it, k)} for _ in range(0, len(d), k)]

d = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
print(chunk_dict(d, 2))  # [{'a': 1, 'b': 2}, {'c': 3, 'd': 4}]`
                },
                {
                    id: 'convert-matrix-to-dict',
                    name: '10. Convert Matrix to dictionary',
                    description: 'Convert a list of lists into a dictionary based on index.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Conversion',
                    isProblem: true,
                    solutionCode: `def matrix_to_dict(matrix):
    return {i+1: row for i, row in enumerate(matrix)}

matrix = [[1, 2], [3, 4]]
print(matrix_to_dict(matrix))  # {1: [1, 2], 2: [3, 4]}`
                }
            ]
        },
        {
            id: 'nested-complex-dictionaries',
            title: 'Nested & Complex Dictionaries',
            methods: [
                {
                    id: 'create-nested-dict-using-list',
                    name: '1. Create Nested Dictionary using List',
                    description: 'Build a nested dictionary structure from a list of keys.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Structuring',
                    isProblem: true,
                    solutionCode: `def build_nested(keys, value):
    d = {}
    temp = d
    for key in keys[:-1]:
        temp[key] = {}
        temp = temp[key]
    temp[keys[-1]] = value
    return d

print(build_nested(['a', 'b', 'c'], 100))  # {'a': {'b': {'c': 100}}}`
                },
                {
                    id: 'swapping-hierarchy-nested-dicts',
                    name: '2. Swapping Hierarchy in Nested Dictionaries',
                    description: 'Swap inner and outer keys of a nested dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Data Restructuring',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def swap_hierarchy(d):
    new_d = defaultdict(dict)
    for outer_key, inner_dict in d.items():
        for inner_key, val in inner_dict.items():
            new_d[inner_key][outer_key] = val
    return dict(new_d)

d = {'A': {'x': 1, 'y': 2}, 'B': {'x': 3, 'y': 4}}
print(swap_hierarchy(d))  # {'x': {'A': 1, 'B': 3}, 'y': {'A': 2, 'B': 4}}`
                },
                {
                    id: 'inversion-nested-dict',
                    name: '3. Inversion in nested dictionary',
                    description: 'Invert a nested dictionary (swap keys and values at each level).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Restructuring',
                    isProblem: true,
                    solutionCode: `def invert_nested(d):
    return {v: k for k, v in d.items()}

def deep_invert(d):
    res = {}
    for k, v in d.items():
        if isinstance(v, dict):
            res[k] = {inner_v: inner_k for inner_k, inner_v in v.items()}
        else:
            res[k] = v
    return res

d = {'A': {'x': 1, 'y': 2}}
print(deep_invert(d))  # {'A': {1: 'x', 2: 'y'}}`
                },
                {
                    id: 'reverse-dict-keys-order',
                    name: '4. Reverse Dictionary Keys Order',
                    description: 'Reverse the insertion order of dictionary keys.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Restructuring',
                    isProblem: true,
                    solutionCode: `def reverse_keys_order(d):
    return dict(reversed(list(d.items())))

d = {'a': 1, 'b': 2, 'c': 3}
print(reverse_keys_order(d))  # {'c': 3, 'b': 2, 'a': 1}`
                },
                {
                    id: 'extract-keys-value-if-key-in-list',
                    name: "5. Extract Key's Value, if Key Present in List and Dictionary",
                    description: 'Extract values from a dictionary for keys that also exist in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def extract_common_keys(d, lst):
    return {k: d[k] for k in lst if k in d}

d = {'a': 1, 'b': 2, 'c': 3}
keys_list = ['a', 'c', 'd']
print(extract_common_keys(d, keys_list))  # {'a': 1, 'c': 3}`
                },
                {
                    id: 'maximum-record-value-key',
                    name: '6. Maximum record value key',
                    description: 'Find key with maximum sum of values (when values are lists).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'Data Analysis',
                    isProblem: true,
                    solutionCode: `def max_record_key(d):
    return max(d, key=lambda k: sum(d[k]))

d = {'A': [1, 5, 3], 'B': [10, 2], 'C': [1, 1, 1]}
print(max_record_key(d))  # 'A'`
                },
                {
                    id: 'extract-values-particular-key-nested',
                    name: '7. Extract values of Particular Key in Nested Values',
                    description: 'Gather all values for a specific key across nested dictionaries.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Extraction',
                    isProblem: true,
                    solutionCode: `def extract_nested_values(lst_of_dicts, target_key):
    return [d[target_key] for d in lst_of_dicts if target_key in d]

data = [{'name': 'John', 'age': 25}, {'name': 'Jane', 'age': 22}, {'name': 'Bob'}]
print(extract_nested_values(data, 'age'))  # [25, 22]`
                },
                {
                    id: 'append-dict-keys-values',
                    name: '8. Append Dictionary Keys and Values',
                    description: 'Combine all keys and all values into separate lists.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Extraction',
                    isProblem: true,
                    solutionCode: `def append_keys_values(dicts):
    all_keys = []
    all_values = []
    for d in dicts:
        all_keys.extend(d.keys())
        all_values.extend(d.values())
    return all_keys, all_values

dicts = [{'a': 1, 'b': 2}, {'c': 3}]
print(append_keys_values(dicts))  # (['a', 'b', 'c'], [1, 2, 3])`
                },
                {
                    id: 'extract-unique-values',
                    name: '9. Extract Unique values',
                    description: 'Extract unique values from a dictionary with list values.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Cleaning',
                    isProblem: true,
                    solutionCode: `def extract_unique(d):
    return list({v for vals in d.values() for v in (vals if isinstance(vals, list) else [vals])})

d = {'A': [1, 2, 3], 'B': [2, 3, 4]}
print(extract_unique(d))  # [1, 2, 3, 4]`
                },
                {
                    id: 'keys-associated-with-values',
                    name: '10. Keys associated with Values',
                    description: 'Find keys associated with a specific value in a dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Lookup',
                    isProblem: true,
                    solutionCode: `def keys_for_value(d, target_value):
    return [k for k, v in d.items() if v == target_value]

d = {'a': 1, 'b': 2, 'c': 1}
print(keys_for_value(d, 1))  # ['a', 'c']`
                },
                {
                    id: 'filter-heterogeneous-dict-values',
                    name: '11. Filter dictionary values in heterogeneous dictionary',
                    description: 'Filter entries by value type from a mixed-type dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Filtering',
                    isProblem: true,
                    solutionCode: `def filter_by_type(d, type_to_keep):
    return {k: v for k, v in d.items() if isinstance(v, type_to_keep)}

d = {'a': 1, 'b': 'hello', 'c': 3.14, 'd': True}
print(filter_by_type(d, int))  # {'a': 1, 'd': True}`
                },
                {
                    id: 'dict-with-maximum-count-pairs',
                    name: '12. Dictionary with maximum count of pairs',
                    description: 'Find which dictionary from a list has the most key-value pairs.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Data Analysis',
                    isProblem: true,
                    solutionCode: `def max_pair_dict(dicts):
    return max(dicts, key=len)

dicts = [{'a': 1}, {'b': 2, 'c': 3, 'd': 4}, {'e': 5, 'f': 6}]
print(max_pair_dict(dicts))  # {'b': 2, 'c': 3, 'd': 4}`
                }
            ]
        },
        {
            id: 'sorting-dictionaries',
            title: 'Sorting Dictionaries',
            methods: [
                {
                    id: 'sort-dict-key-values-list',
                    name: '1. Sort Dictionary key and values List',
                    description: 'Sort both keys and the value lists within a dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_keys_and_values(d):
    return {k: sorted(v) for k, v in sorted(d.items())}

d = {'b': [3, 1, 2], 'a': [6, 4, 5]}
print(sort_keys_and_values(d))  # {'a': [4, 5, 6], 'b': [1, 2, 3]}`
                },
                {
                    id: 'sort-dict-values-summation',
                    name: '2. Sort Dictionary by Values Summation',
                    description: 'Sort a dictionary by the sum of its list values.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_by_values_sum(d):
    return dict(sorted(d.items(), key=lambda x: sum(x[1])))

d = {'A': [1, 5, 3], 'B': [10, 2], 'C': [1, 1, 1]}
print(sort_by_values_sum(d))  # {'C': [1, 1, 1], 'A': [1, 5, 3], 'B': [10, 2]}`
                },
                {
                    id: 'sort-dicts-list-by-keys-value-index',
                    name: "3. Sort dictionaries list by Key's Value list index",
                    description: 'Sort a list of dictionaries by a specific index of a value list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_by_key_index(lst, key, index):
    return sorted(lst, key=lambda x: x[key][index])

lst = [{'a': [3, 1]}, {'a': [1, 3]}, {'a': [2, 2]}]
print(sort_by_key_index(lst, 'a', 0))  # [{'a': [1, 3]}, {'a': [2, 2]}, {'a': [3, 1]}]`
                },
                {
                    id: 'sort-nested-keys-by-value',
                    name: '4. Sort Nested keys by Value',
                    description: 'Sort the inner keys of a nested dictionary based on their values.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Sorting',
                    isProblem: true,
                    solutionCode: `def sort_nested_by_value(d):
    return {outer_key: dict(sorted(inner.items(), key=lambda x: x[1]))
            for outer_key, inner in d.items()}

d = {'A': {'x': 3, 'y': 1}, 'B': {'p': 2, 'q': 0}}
print(sort_nested_by_value(d))  # {'A': {'y': 1, 'x': 3}, 'B': {'q': 0, 'p': 2}}`
                },
                {
                    id: 'scoring-matrix',
                    name: '5. Scoring Matrix',
                    description: 'Build a scoring matrix using dictionaries.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Algorithms',
                    isProblem: true,
                    solutionCode: `def scoring_matrix(words):
    """Build character pair scoring matrix from a list of words."""
    scores = {}
    for word in words:
        for i, ch in enumerate(word):
            if ch not in scores:
                scores[ch] = {}
            for j, ch2 in enumerate(word):
                if i != j:
                    scores[ch][ch2] = scores[ch].get(ch2, 0) + 1
    return scores

result = scoring_matrix(['abc', 'bcd'])
print(result['a'])  # {'b': 1, 'c': 1}`
                },
                {
                    id: 'factors-frequency',
                    name: '6. Factors Frequency',
                    description: 'Build a frequency dictionary of factors for numbers in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * sqrt(N))',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def factors_frequency(lst):
    from collections import defaultdict
    freq = defaultdict(int)
    for n in lst:
        for i in range(1, int(n**0.5) + 1):
            if n % i == 0:
                freq[i] += 1
                if i != n // i:
                    freq[n // i] += 1
    return dict(freq)

print(factors_frequency([6, 12, 15]))  # {1: 3, 2: 2, 3: 3, 6: 2, 4: 1, 12: 1, 5: 1, 15: 1}`
                },
                {
                    id: 'count-distinct-substrings',
                    name: '7. Count distinct substrings of a string',
                    description: 'Count all distinct substrings using dictionary/set.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'String Algorithms',
                    isProblem: true,
                    solutionCode: `def count_distinct_substrings(s):
    substrings = set()
    n = len(s)
    for i in range(n):
        for j in range(i+1, n+1):
            substrings.add(s[i:j])
    return len(substrings)

print(count_distinct_substrings("abcd"))  # 10`
                },
                {
                    id: 'print-anagrams-together',
                    name: '8. Print anagrams together',
                    description: 'Group words that are anagrams of each other.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L log L)',
                    commonUseCases: 'String Grouping',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def group_anagrams(words):
    d = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))
        d[key].append(word)
    return list(d.values())

words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
print(group_anagrams(words))  # [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`
                },
                {
                    id: 'values-mean',
                    name: '9. Values Mean',
                    description: 'Compute the mean of values in a dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Statistics',
                    isProblem: true,
                    solutionCode: `def values_mean(d):
    values = list(d.values())
    return sum(values) / len(values) if values else 0

d = {'a': 10, 'b': 20, 'c': 30}
print(values_mean(d))  # 20.0`
                },
                {
                    id: 'counter-dict-intersection',
                    name: '10. Counter and dictionary intersection',
                    description: 'Find intersection between a Counter and dictionary.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Set Operations',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def counter_dict_intersect(lst, d):
    c = Counter(lst)
    return {k: c[k] for k in c if k in d}

lst = ['a', 'b', 'a', 'c']
d = {'a': 'apple', 'c': 'cherry'}
print(counter_dict_intersect(lst, d))  # {'a': 2, 'c': 1}`
                },
                {
                    id: 'check-frequencies-become-same',
                    name: '11. Dictionary, set and counter to check if frequencies can become same',
                    description: 'Check if removing one element makes all element frequencies equal.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Frequency Analysis',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def can_become_same_freq(s):
    freq = Counter(s)
    freq_of_freq = Counter(freq.values())
    
    if len(freq_of_freq) == 1:
        # All already same, or all 1 freq
        vals = list(freq_of_freq.keys())
        cnts = list(freq_of_freq.values())
        return cnts[0] == 1 or vals[0] == 1
    if len(freq_of_freq) == 2:
        keys = sorted(freq_of_freq.keys())
        # Can remove one element from a char with highest freq
        return ((freq_of_freq[keys[1]] == 1 and keys[1] - keys[0] == 1) or
                (freq_of_freq[keys[0]] == 1 and keys[0] == 1))
    return False

print(can_become_same_freq("aaabbc"))  # True`
                }
            ]
        },
        {
            id: 'advanced-practice-problems-dict',
            title: 'Advanced Practice Problems',
            methods: [
                {
                    id: 'build-undirected-graph-shortest-path',
                    name: '1. Build an undirected graph and finding shortest path',
                    description: 'Build a graph using adjacency dict and find shortest path with BFS.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'Graphs',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict, deque
def build_graph(edges):
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    return graph

def bfs_shortest(graph, start, end):
    queue = deque([[start]])
    visited = {start}
    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == end:
            return path
        for neighbour in graph[node]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(path + [neighbour])
    return None

edges = [('A', 'B'), ('A', 'C'), ('B', 'D'), ('C', 'D')]
g = build_graph(edges)
print(bfs_shortest(g, 'A', 'D'))  # ['A', 'B', 'D'] or ['A', 'C', 'D']`
                },
                {
                    id: 'lru-cache-ordered-dict',
                    name: '2. LRU Cache using OrderedDict',
                    description: 'Implement an LRU (Least Recently Used) Cache with OrderedDict.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Caching',
                    isProblem: true,
                    solutionCode: `from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

cache = LRUCache(2)
cache.put(1, 1); cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)  # evicts key 2
print(cache.get(2))  # -1`
                },
                {
                    id: 'first-repeating-element',
                    name: '3. First Repeating Element',
                    description: 'Find the first element in a list that appears more than once.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Finding Elements',
                    isProblem: true,
                    solutionCode: `def first_repeating(lst):
    seen = set()
    for x in lst:
        if x in seen:
            return x
        seen.add(x)
    return None

print(first_repeating([5, 1, 3, 4, 3, 5]))  # 3`
                },
                {
                    id: 'array-pair-sum-divisibility',
                    name: '4. Array Pair Sum Divisibility',
                    description: 'Check if array elements can be paired such that each pair sums to K.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Arrays',
                    isProblem: true,
                    solutionCode: `def can_pair_for_divisibility(lst, k):
    from collections import Counter
    remainder_count = Counter(x % k for x in lst)
    
    for rem, count in remainder_count.items():
        if rem == 0:
            # Elements with remainder 0 must pair among themselves
            if count % 2 != 0:
                return False
        elif remainder_count.get(k - rem, 0) != count:
            return False
    return True

print(can_pair_for_divisibility([9, 5, 7, 3], 6))  # True`
                },
                {
                    id: 'check-equal-arrays',
                    name: '5. Check Equal Arrays',
                    description: 'Check if two arrays have the same elements (regardless of order).',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Comparison',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def check_equal(a, b):
    return Counter(a) == Counter(b)

print(check_equal([1, 2, 2, 3], [3, 2, 1, 2]))  # True`
                },
                {
                    id: 'check-arithmetic-progression',
                    name: '6. Check Arithmetic Progression',
                    description: 'Check if elements in a list can form an arithmetic progression.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `def is_arithmetic_progression(lst):
    if len(lst) <= 1:
        return True
    lst_sorted = sorted(lst)
    diff = lst_sorted[1] - lst_sorted[0]
    return all(lst_sorted[i] - lst_sorted[i-1] == diff for i in range(1, len(lst_sorted)))

print(is_arithmetic_progression([5, 1, 3]))  # True`
                },
                {
                    id: 'lfu-cache',
                    name: '7. LFU Cache',
                    description: 'Implement a Least Frequently Used Cache.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Caching',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict, OrderedDict
class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.min_freq = 0
        self.key_val = {}    # key -> value
        self.key_freq = {}   # key -> freq
        self.freq_keys = defaultdict(OrderedDict)  # freq -> OrderedDict of keys
    
    def get(self, key):
        if key not in self.key_val:
            return -1
        self._update(key)
        return self.key_val[key]
    
    def put(self, key, value):
        if self.capacity <= 0:
            return
        if key in self.key_val:
            self.key_val[key] = value
            self._update(key)
        else:
            if len(self.key_val) >= self.capacity:
                evict_key, _ = self.freq_keys[self.min_freq].popitem(last=False)
                del self.key_val[evict_key]
                del self.key_freq[evict_key]
            self.key_val[key] = value
            self.key_freq[key] = 1
            self.freq_keys[1][key] = None
            self.min_freq = 1
    
    def _update(self, key):
        freq = self.key_freq[key]
        del self.freq_keys[freq][key]
        if not self.freq_keys[freq] and freq == self.min_freq:
            self.min_freq += 1
        self.key_freq[key] = freq + 1
        self.freq_keys[freq + 1][key] = None

cache = LFUCache(2)
cache.put(1, 1); cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)  # evicts key 2
print(cache.get(2))  # -1`
                },
                {
                    id: 'phone-directory',
                    name: '8. Phone directory',
                    description: 'Implement a phone directory using dictionary for add/search/delete.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Practical Applications',
                    isProblem: true,
                    solutionCode: `class PhoneDirectory:
    def __init__(self):
        self.directory = {}
    
    def add(self, name, number):
        self.directory[name] = number
    
    def search(self, name):
        return self.directory.get(name, "Not Found")
    
    def delete(self, name):
        if name in self.directory:
            del self.directory[name]
            return f"{name} deleted"
        return "Not Found"
    
    def display(self):
        for name, num in self.directory.items():
            print(f"{name}: {num}")

pd = PhoneDirectory()
pd.add("Alice", "9876543210")
pd.add("Bob", "1234567890")
print(pd.search("Alice"))  # 9876543210
print(pd.delete("Bob"))    # Bob deleted
print(pd.search("Bob"))    # Not Found`
                },
                {
                    id: 'check-binary-anagram',
                    name: '9. Check if binary representations of two numbers are anagram',
                    description: 'Check if binary representations of two numbers have same digit frequencies.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Bit Manipulation',
                    isProblem: true,
                    solutionCode: `from collections import Counter
def binary_anagram(a, b):
    return Counter(bin(a)) == Counter(bin(b))

print(binary_anagram(8, 4))   # True  (1000 and 0100 have same bits)
print(binary_anagram(1, 2))   # False (1 vs 10)`
                },
                {
                    id: 'largest-anagram-subset',
                    name: '10. Counter to find size of largest subset of anagram words',
                    description: 'Find the size of the largest group of anagram words in a list.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L log L)',
                    commonUseCases: 'String Grouping',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict, Counter
def largest_anagram_group(words):
    groups = defaultdict(int)
    for word in words:
        key = "".join(sorted(word))
        groups[key] += 1
    return max(groups.values()) if groups else 0

words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
print(largest_anagram_group(words))  # 3 (eat, tea, ate)`
                },
                {
                    id: 'count-groups-sum-of-digits',
                    name: '11. Count of groups having largest size while grouping according to sum of its digits',
                    description: 'Group numbers 1-N by sum of their digits, return count of largest groups.',
                    syntax: '',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * d)',
                    commonUseCases: 'Mathematical',
                    isProblem: true,
                    solutionCode: `from collections import defaultdict
def count_largest_groups(n):
    groups = defaultdict(list)
    for i in range(1, n + 1):
        digit_sum = sum(int(d) for d in str(i))
        groups[digit_sum].append(i)
    max_size = max(len(g) for g in groups.values())
    return sum(1 for g in groups.values() if len(g) == max_size)

print(count_largest_groups(13))  # 4`
                }
            ]
        }
    ]
};
