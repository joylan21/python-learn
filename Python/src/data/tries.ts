import type { Category } from './types';

export const triesProblems: Category = {
    id: 'tries-problems',
    title: 'Tries',
    isProblemCategory: true,
    subsections: [
        {
            id: 'tries-easy',
            title: 'Tries - Easy',
            methods: [
                {
                    id: 'implement-trie-prefix-tree',
                    name: '1. Implement Trie (Prefix Tree)',
                    description: 'Implement insert, search, and startsWith methods.',
                    syntax: 'Use a nested dictionary or a TrieNode class with a dictionary of children and a boolean is_end_of_word.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L) per operation',
                    commonUseCases: 'Prefix matching, Autocomplete',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if char not in node.children: return False
            node = node.children[char]
        return node.is_end
        
    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children: return False
            node = node.children[char]
        return True`
                },
                {
                    id: 'longest-common-prefix',
                    name: '2. Longest Common Prefix',
                    description: 'Find the longest common prefix string amongst an array of strings.',
                    syntax: 'Insert all words into a Trie and traverse from the root as long as a node has exactly one child and is not the end of a word.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(S) overall string length',
                    commonUseCases: 'Trie, String Matching',
                    isProblem: true,
                    solutionCode: `def longestCommonPrefix(strs):
    if not strs: return ""
    class TrieNode:
        def __init__(self):
            self.children = {}
            self.is_end = False
    
    root = TrieNode()
    for word in strs:
        if not word: return ""
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    prefix = ""
    node = root
    while len(node.children) == 1 and not node.is_end:
        char = list(node.children.keys())[0]
        prefix += char
        node = node.children[char]
    return prefix`
                },
                {
                    id: 'prefix-matching',
                    name: '3. Prefix Matching',
                    description: 'Given a list of words, find all words that start with a specific prefix.',
                    syntax: 'Traverse the Trie to the end of the prefix, then use DFS to collect all leaf nodes.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(L + V)',
                    commonUseCases: 'Trie, Autocomplete',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
        self.word = ""

class PrefixMatcher:
    def __init__(self, words):
        self.root = TrieNode()
        for w in words:
            node = self.root
            for c in w:
                if c not in node.children:
                    node.children[c] = TrieNode()
                node = node.children[c]
            node.is_end = True
            node.word = w
            
    def get_words_with_prefix(self, prefix):
        node = self.root
        for c in prefix:
            if c not in node.children: return []
            node = node.children[c]
        
        res = []
        def dfs(curr):
            if curr.is_end: res.append(curr.word)
            for child in curr.children.values():
                dfs(child)
        dfs(node)
        return res`
                },
                {
                    id: 'count-distinct-substrings',
                    name: '4. Count Distinct Substrings',
                    description: 'Count the number of distinct substrings in a string.',
                    syntax: 'Insert every suffix of the string into a Trie; total nodes in the Trie (minus root) is the count.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Trie, Suffix Tree',
                    isProblem: true,
                    solutionCode: `def countDistinctSubstrings(s):
    class TrieNode:
        def __init__(self):
            self.children = {}
    
    root = TrieNode()
    count = 0
    for i in range(len(s)):
        node = root
        for j in range(i, len(s)):
            if s[j] not in node.children:
                node.children[s[j]] = TrieNode()
                count += 1
            node = node.children[s[j]]
    return count + 1 # +1 for empty string if required by problem variant`
                },
                {
                    id: 'check-if-word-is-prefix',
                    name: '5. Check If Word is a Prefix of Any Other Word',
                    description: 'Determine if any word in a list is a prefix of another word.',
                    syntax: 'During insertion, if you reach an existing is_end node or finish a word at an existing node, a prefix exists.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(Total Characters)',
                    commonUseCases: 'Trie',
                    isProblem: true,
                    solutionCode: `def hasPrefix(words):
    class TrieNode:
        def __init__(self):
            self.children = {}
            self.is_end = False
            
    root = TrieNode()
    for word in words:
        node = root
        for char in word:
            if node.is_end:
                return True # An existing word is a prefix of current word
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
        if len(node.children) > 0:
            return True # Current word is a prefix of an existing word
    return False`
                }
            ]
        },
        {
            id: 'tries-medium',
            title: 'Tries - Medium',
            methods: [
                {
                    id: 'design-add-and-search-words-data-structure',
                    name: '6. Design Add and Search Words Data Structure',
                    description: 'Support adding words and searching with dots . as wildcards.',
                    syntax: 'Use DFS for searching; when a . is encountered, recursively check all existing children at that level.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(M) for add, O(26^M) for search with wildcards',
                    commonUseCases: 'Trie, Backtracking',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.word = True

    def search(self, word: str) -> bool:
        def dfs(j, root):
            cur = root
            for i in range(j, len(word)):
                c = word[i]
                if c == ".":
                    for child in cur.children.values():
                        if dfs(i + 1, child):
                            return True
                    return False
                else:
                    if c not in cur.children:
                        return False
                    cur = cur.children[c]
            return cur.word
        return dfs(0, self.root)`
                },
                {
                    id: 'word-search-ii',
                    name: '7. Word Search II',
                    description: 'Given a grid of characters and a list of words, find all words present in the grid.',
                    syntax: 'Store words in a Trie and perform Backtracking (DFS) on the grid.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(R * C * 4^L)',
                    commonUseCases: 'Trie, Backtracking, DFS',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

def findWords(board, words):
    root = TrieNode()
    for w in words:
        node = root
        for c in w:
            if c not in node.children: node.children[c] = TrieNode()
            node = node.children[c]
        node.isWord = True

    ROWS, COLS = len(board), len(board[0])
    res, visit = set(), set()

    def dfs(r, c, node, word):
        if (r < 0 or c < 0 or r == ROWS or c == COLS or
            (r, c) in visit or board[r][c] not in node.children):
            return
        
        visit.add((r, c))
        node = node.children[board[r][c]]
        word += board[r][c]
        if node.isWord: res.add(word)

        dfs(r + 1, c, node, word)
        dfs(r - 1, c, node, word)
        dfs(r, c + 1, node, word)
        dfs(r, c - 1, node, word)
        visit.remove((r, c))

    for r in range(ROWS):
        for c in range(COLS):
            dfs(r, c, root, "")
    return list(res)`
                },
                {
                    id: 'replace-words',
                    name: '8. Replace Words',
                    description: 'Replace words in a sentence with their shortest "root" from a dictionary.',
                    syntax: 'Insert roots into a Trie; for each word in the sentence, find the shortest prefix in the Trie.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L)',
                    commonUseCases: 'Trie, String Processing',
                    isProblem: true,
                    solutionCode: `def replaceWords(dictionary, sentence):
    class TrieNode:
        def __init__(self):
            self.children = {}
            self.is_end = False

    root = TrieNode()
    for word in dictionary:
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True

    def replace(word):
        node = root
        for i, char in enumerate(word):
            if char not in node.children:
                break
            node = node.children[char]
            if node.is_end:
                return word[:i+1]
        return word

    return " ".join(map(replace, sentence.split()))`
                },
                {
                    id: 'map-sum-pairs',
                    name: '9. Map Sum Pairs',
                    description: 'Implement a map that returns the sum of values of all keys that start with a given prefix.',
                    syntax: 'Each Trie node stores the cumulative sum of all words passing through it.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L) per operation',
                    commonUseCases: 'Trie, Hash Map',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.score = 0

class MapSum:
    def __init__(self):
        self.map = {}
        self.root = TrieNode()

    def insert(self, key: str, val: int) -> None:
        delta = val - self.map.get(key, 0)
        self.map[key] = val
        node = self.root
        node.score += delta
        for char in key:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.score += delta

    def sum(self, prefix: str) -> int:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return 0
            node = node.children[char]
        return node.score`
                },
                {
                    id: 'extra-characters-in-a-string',
                    name: '10. Extra Characters in a String',
                    description: 'Break a string into words from a dictionary to minimize leftover characters.',
                    syntax: 'Use Dynamic Programming where the Trie helps quickly identify dictionary words starting at index i.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'Trie, Dynamic Programming',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

def minExtraChar(s: str, dictionary) -> int:
    root = TrieNode()
    for word in dictionary:
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True
        
    n = len(s)
    dp = [0] * (n + 1)
    
    for i in range(n - 1, -1, -1):
        dp[i] = dp[i + 1] + 1
        node = root
        for j in range(i, n):
            if s[j] not in node.children:
                break
            node = node.children[s[j]]
            if node.is_word:
                dp[i] = min(dp[i], dp[j + 1])
                
    return dp[0]`
                },
                {
                    id: 'longest-word-in-dictionary',
                    name: '11. Longest Word in Dictionary',
                    description: 'Find the longest word in a list that can be built one character at a time by other words in the list.',
                    syntax: 'Insert all words into a Trie and use BFS/DFS to find the deepest node where every node on the path is marked is_end.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L)',
                    commonUseCases: 'Trie, BFS',
                    isProblem: true,
                    solutionCode: `def longestWord(words):
    words.sort()
    words_set = set(words)
    res = ""
    for w in words:
        isValid = True
        for i in range(1, len(w)):
            if w[:i] not in words_set:
                isValid = False
                break
        if isValid and len(w) > len(res):
            res = w
    return res`
                },
                {
                    id: 'implement-magic-dictionary',
                    name: '12. Implement Magic Dictionary',
                    description: 'Determine if you can change exactly one character in a query string to match any word in the dictionary.',
                    syntax: 'Traverse the Trie and allow exactly one mismatch during the search process.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L * 26) per search',
                    commonUseCases: 'Trie, Backtracking',
                    isProblem: true,
                    solutionCode: `class MagicDictionary:
    def __init__(self):
        self.words = set()
        self.counts = {}

    def buildDict(self, dictionary) -> None:
        self.words = set(dictionary)
        for word in dictionary:
            for i in range(len(word)):
                pattern = word[:i] + "*" + word[i+1:]
                self.counts[pattern] = self.counts.get(pattern, 0) + 1

    def search(self, searchWord: str) -> bool:
        for i in range(len(searchWord)):
            pattern = searchWord[:i] + "*" + searchWord[i+1:]
            count = self.counts.get(pattern, 0)
            if count > 1 or (count == 1 and searchWord not in self.words):
                return True
        return False`
                },
                {
                    id: 'top-k-frequent-words',
                    name: '13. Top K Frequent Words',
                    description: 'Find the k most frequent strings.',
                    syntax: 'Combine a Hash Map for frequency and a Heap to handle lexicographical sorting.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Heap, Hash Map, Trie (optional)',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import Counter
def topKFrequent(words, k):
    count = Counter(words)
    heap = [(-freq, word) for word, freq in count.items()]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`
                },
                {
                    id: 'maximum-xor-of-two-numbers-in-an-array',
                    name: '14. Maximum XOR of Two Numbers in an Array',
                    description: 'Find the maximum result of a XOR b where a, b are from an array.',
                    syntax: 'Insert binary representations of numbers into a Trie; try to traverse the opposite bit path to maximize XOR.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trie, Bit Manipulation',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}

def findMaximumXOR(nums):
    root = TrieNode()
    for num in nums:
        node = root
        for i in range(31, -1, -1):
            bit = (num >> i) & 1
            if bit not in node.children:
                node.children[bit] = TrieNode()
            node = node.children[bit]
            
    max_xor = 0
    for num in nums:
        node = root
        curr_xor = 0
        for i in range(31, -1, -1):
            bit = (num >> i) & 1
            opp_bit = 1 - bit
            if opp_bit in node.children:
                curr_xor += (1 << i)
                node = node.children[opp_bit]
            else:
                node = node.children[bit]
        max_xor = max(max_xor, curr_xor)
    return max_xor`
                },
                {
                    id: 'palindrome-pairs',
                    name: '15. Palindrome Pairs',
                    description: 'Find all pairs of indices (i, j) such that words[i] + words[j] is a palindrome.',
                    syntax: 'Insert reversed words into a Trie and check for prefix/suffix palindromes during search.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L^2)',
                    commonUseCases: 'Trie, Hash Map, Palindromes',
                    isProblem: true,
                    solutionCode: `def palindromePairs(words):
    word_map = {word: i for i, word in enumerate(words)}
    res = set()
    
    for i, word in enumerate(words):
        for j in range(len(word) + 1):
            pref = word[:j]
            suf = word[j:]
            
            if pref == pref[::-1]:
                back = suf[::-1]
                if back in word_map and word_map[back] != i:
                    res.add((word_map[back], i))
                    
            if suf == suf[::-1]:
                back = pref[::-1]
                if back in word_map and word_map[back] != i:
                    res.add((i, word_map[back]))
                    
    return list(map(list, res))`
                },
                {
                    id: 'stream-of-characters',
                    name: '16. Stream of Characters',
                    description: 'Check if any suffix of a stream of characters matches a word in a dictionary.',
                    syntax: 'Insert words into a Trie in reverse order and keep a running history of characters to check suffixes.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L) per query',
                    commonUseCases: 'Trie, Stream Data',
                    isProblem: true,
                    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class StreamChecker:
    def __init__(self, words):
        self.root = TrieNode()
        for word in words:
            node = self.root
            for char in reversed(word):
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_word = True
        self.stream = []

    def query(self, letter: str) -> bool:
        self.stream.append(letter)
        node = self.root
        for char in reversed(self.stream):
            if char in node.children:
                node = node.children[char]
                if node.is_word:
                    return True
            else:
                break
        return False`
                },
                {
                    id: 'shortest-unique-prefix-for-every-word',
                    name: '17. Shortest Unique prefix for every word',
                    description: 'Find the shortest unique prefix for every word in a list.',
                    syntax: 'Each node stores a count of how many words pass through it; the shortest unique prefix ends at the first node with count == 1.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * L)',
                    commonUseCases: 'Trie',
                    isProblem: true,
                    solutionCode: `def shortestUniquePrefixes(words):
    class TrieNode:
        def __init__(self):
            self.children = {}
            self.count = 0
            
    root = TrieNode()
    for word in words:
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.count += 1
            
    res = []
    for word in words:
        node = root
        prefix = ""
        for char in word:
            prefix += char
            node = node.children[char]
            if node.count == 1:
                break
        res.append(prefix)
    return res`
                },
                {
                    id: 'lexicographical-numbers',
                    name: '18. Lexicographical Numbers',
                    description: 'Given n, return 1 to n in lexicographical order.',
                    syntax: 'Conceptually a Trie traversal; use recursion to simulate visiting nodes 1-9, then their children.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Trie Traversal, DFS',
                    isProblem: true,
                    solutionCode: `def lexicalOrder(n):
    res = []
    def dfs(curr):
        if curr > n: return
        res.append(curr)
        for i in range(10):
            if curr * 10 + i > n: return
            dfs(curr * 10 + i)
            
    for i in range(1, 10):
        dfs(i)
    return res`
                },
                {
                    id: 'autocomplete-system-design',
                    name: '19. Autocomplete System Design',
                    description: 'Design a system that suggests top 3 hot sentences starting with a prefix.',
                    syntax: 'Each Trie node stores a list or a Min-Heap of the top 3 sentences passing through it.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L + K log K)',
                    commonUseCases: 'Trie, Heap, Design',
                    isProblem: true,
                    solutionCode: `import collections
import heapq
class TrieNode:
    def __init__(self):
        self.children = {}
        self.counts = collections.defaultdict(int)

class AutocompleteSystem:
    def __init__(self, sentences, times):
        self.root = TrieNode()
        self.searchTerm = ""
        for i in range(len(sentences)):
            self.add(sentences[i], times[i])

    def add(self, sentence, count):
        node = self.root
        for char in sentence:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.counts[sentence] += count

    def input(self, c: str):
        if c == "#":
            self.add(self.searchTerm, 1)
            self.searchTerm = ""
            return []
            
        self.searchTerm += c
        node = self.root
        for char in self.searchTerm:
            if char not in node.children: return []
            node = node.children[char]
            
        heap = [(-count, sentence) for sentence, count in node.counts.items()]
        heapq.heapify(heap)
        res = []
        for i in range(3):
            if heap:
                res.append(heapq.heappop(heap)[1])
        return res`
                },
                {
                    id: 'encrypt-and-decrypt-strings',
                    name: '20. Encrypt and Decrypt Strings',
                    description: 'Encrypt strings based on a mapping and decrypt by counting how many original dictionary words could result in that encryption.',
                    syntax: 'Use a Trie to store dictionary words; during decryption, traverse the Trie.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(L) for encrypt, O(1) for decrypt if using precomputation.',
                    commonUseCases: 'Hash Map, Trie',
                    isProblem: true,
                    solutionCode: `import collections
class Encrypter:
    def __init__(self, keys, values, dictionary):
        self.enc = {k: v for k, v in zip(keys, values)}
        self.dec_counts = collections.defaultdict(int)
        for word in dictionary:
            encrypted = self.encrypt(word)
            if encrypted:
                self.dec_counts[encrypted] += 1

    def encrypt(self, word1: str) -> str:
        res = ""
        for c in word1:
            if c not in self.enc: return ""
            res += self.enc[c]
        return res

    def decrypt(self, word2: str) -> int:
        return self.dec_counts[word2]`
                }
            ]
        }
    ]
};
