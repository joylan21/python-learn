import type { Category } from './types';

export const stringMethods: Category = {
  id: 'strings',
  title: 'Strings',
  subsections: [
    {
      id: 'case-conversion',
      title: 'Case Conversion',
      comparisons: [
        {
          id: 'upper',
          python: {
            name: 'upper()',
            description: 'Returns a copy of the string with all characters converted to uppercase.',
            syntax: 'str.upper()',
            example: 'text = "hello"\nprint(text.upper())',
            output: '"HELLO"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Standardizing string format for comparison.'
          },
          javascript: {
            name: 'toUpperCase()',
            description: 'Returns the calling string value converted to uppercase.',
            syntax: 'str.toUpperCase()',
            example: 'let text = "hello";\nconsole.log(text.toUpperCase());',
            output: '"HELLO"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Standardizing string format for comparison.'
          }
        },
        {
          id: 'lower',
          python: {
            name: 'lower()',
            description: 'Returns a copy of the string with all characters converted to lowercase.',
            syntax: 'str.lower()',
            example: 'text = "WORLD"\nprint(text.lower())',
            output: '"world"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Case-insensitive string comparisons.'
          },
          javascript: {
            name: 'toLowerCase()',
            description: 'Returns the calling string value converted to lowercase.',
            syntax: 'str.toLowerCase()',
            example: 'let text = "WORLD";\nconsole.log(text.toLowerCase());',
            output: '"world"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Case-insensitive string comparisons.'
          }
        },
        {
          id: 'capitalize',
          python: {
            name: 'capitalize()',
            description: 'Returns a copy of the string with its first character capitalized and the rest lowercased.',
            syntax: 'str.capitalize()',
            example: 'text = "hello world"\nprint(text.capitalize())',
            output: '"Hello world"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Formatting sentences or names.'
          },
          javascript: {
            name: 'charAt() + slice()',
            description: 'No built-in method. Combine getting the first char, uppercasing it, and appending the rest.',
            syntax: 'str.charAt(0).toUpperCase() + str.slice(1)',
            example: 'let text = "hello world";\nconsole.log(text.charAt(0).toUpperCase() + text.slice(1));',
            output: '"Hello world"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Formatting sentences or names.'
          }
        }
      ]
    },
    {
      id: 'searching-strings',
      title: 'Searching & Checking',
      comparisons: [
        {
          id: 'contains',
          python: {
            name: 'in',
            description: 'Checks if a substring exists within the string.',
            syntax: 'substring in str',
            example: 'text = "hello world"\nprint("world" in text)',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(n * m)',
            commonUseCases: 'Checking for substring presence.'
          },
          javascript: {
            name: 'includes()',
            description: 'Determines whether one string may be found within another string.',
            syntax: 'str.includes(searchString[, position])',
            example: 'let text = "hello world";\nconsole.log(text.includes("world"));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(n * m)',
            commonUseCases: 'Checking for substring presence.'
          }
        },
        {
          id: 'starts-with',
          python: {
            name: 'startswith()',
            description: 'Returns True if string starts with the specified prefix.',
            syntax: 'str.startswith(prefix[, start[, end]])',
            example: 'text = "hello world"\nprint(text.startswith("hello"))',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(m)',
            commonUseCases: 'Validating prefixes (e.g., http://).'
          },
          javascript: {
            name: 'startsWith()',
            description: 'Determines whether a string begins with the characters of a specified string.',
            syntax: 'str.startsWith(searchString[, position])',
            example: 'let text = "hello world";\nconsole.log(text.startsWith("hello"));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(m)',
            commonUseCases: 'Validating prefixes (e.g., http://).'
          }
        },
        {
          id: 'ends-with',
          python: {
            name: 'endswith()',
            description: 'Returns True if string ends with the specified suffix.',
            syntax: 'str.endswith(suffix[, start[, end]])',
            example: 'filename = "image.png"\nprint(filename.endswith(".png"))',
            output: 'True',
            mutates: false,
            timeComplexity: 'O(m)',
            commonUseCases: 'Checking file extensions.'
          },
          javascript: {
            name: 'endsWith()',
            description: 'Determines whether a string ends with the characters of a specified string.',
            syntax: 'str.endsWith(searchString[, length])',
            example: 'let filename = "image.png";\nconsole.log(filename.endsWith(".png"));',
            output: 'true',
            mutates: false,
            timeComplexity: 'O(m)',
            commonUseCases: 'Checking file extensions.'
          }
        },
        {
          id: 'find-index',
          python: {
            name: 'find()',
            description: 'Returns the lowest index where substring is found. Returns -1 if not found.',
            syntax: 'str.find(sub[, start[, end]])',
            example: 'text = "hello world"\nprint(text.find("o"))',
            output: '4',
            mutates: false,
            timeComplexity: 'O(n * m)',
            commonUseCases: 'Locating the position of a substring.'
          },
          javascript: {
            name: 'indexOf()',
            description: 'Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.',
            syntax: 'str.indexOf(searchValue[, fromIndex])',
            example: 'let text = "hello world";\nconsole.log(text.indexOf("o"));',
            output: '4',
            mutates: false,
            timeComplexity: 'O(n * m)',
            commonUseCases: 'Locating the position of a substring.'
          }
        }
      ]
    },
    {
      id: 'modifying',
      title: 'Modifying Strings',
      comparisons: [
        {
          id: 'replace',
          python: {
            name: 'replace()',
            description: 'Returns a copy of the string with all occurrences of substring old replaced by new.',
            syntax: 'str.replace(old, new[, count])',
            example: 'text = "foo bar foo"\nprint(text.replace("foo", "baz"))',
            output: '"baz bar baz"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Replacing words or characters globally.'
          },
          javascript: {
            name: 'replaceAll()',
            description: 'Returns a new string with all matches of a pattern replaced by a replacement.',
            syntax: 'str.replaceAll(pattern, replacement)',
            example: 'let text = "foo bar foo";\nconsole.log(text.replaceAll("foo", "baz"));',
            output: '"baz bar baz"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Replacing words or characters globally (ES2021).'
          }
        },
        {
          id: 'trim',
          python: {
            name: 'strip()',
            description: 'Returns a copy of the string with leading and trailing characters removed (whitespace by default).',
            syntax: 'str.strip([chars])',
            example: 'text = "  hello  "\nprint(text.strip())',
            output: '"hello"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Cleaning up user input.'
          },
          javascript: {
            name: 'trim()',
            description: 'Removes whitespace from both ends of a string and returns a new string.',
            syntax: 'str.trim()',
            example: 'let text = "  hello  ";\nconsole.log(text.trim());',
            output: '"hello"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Cleaning up user input.'
          }
        }
      ]
    },
    {
      id: 'splitting-joining',
      title: 'Splitting & Joining',
      comparisons: [
        {
          id: 'split',
          python: {
            name: 'split()',
            description: 'Returns a list of the words in the string, using sep as the delimiter string.',
            syntax: 'str.split(sep=None, maxsplit=-1)',
            example: 'text = "a,b,c"\nprint(text.split(","))',
            output: '["a", "b", "c"]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Parsing CSV data or tokenizing sentences.'
          },
          javascript: {
            name: 'split()',
            description: 'Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.',
            syntax: 'str.split([separator[, limit]])',
            example: 'let text = "a,b,c";\nconsole.log(text.split(","));',
            output: '["a", "b", "c"]',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Parsing CSV data or tokenizing sentences.'
          }
        },
        {
          id: 'join',
          python: {
            name: 'join()',
            description: 'Returns a string which is the concatenation of the strings in iterable. The separator is the string providing this method.',
            syntax: 'str.join(iterable)',
            example: 'words = ["a", "b", "c"]\nprint(",".join(words))',
            output: '"a,b,c"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Combining list elements into a single string.'
          },
          javascript: {
            name: 'join() (Array Method)',
            description: 'Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.',
            syntax: 'array.join([separator])',
            example: 'let words = ["a", "b", "c"];\nconsole.log(words.join(","));',
            output: '"a,b,c"',
            mutates: false,
            timeComplexity: 'O(n)',
            commonUseCases: 'Combining array elements into a single string.'
          }
        }
      ]
    },
    {
      id: 'slicing-strings',
      title: 'Slicing & Extracting',
      comparisons: [
        {
          id: 'slice',
          python: {
            name: 'Slicing [start:end]',
            description: 'Extracts a portion of the string from start index to end index (exclusive).',
            syntax: 'str[start:end:step]',
            example: 'text = "hello"\nprint(text[1:4])',
            output: '"ell"',
            mutates: false,
            timeComplexity: 'O(k)',
            commonUseCases: 'Extracting substrings using syntax.'
          },
          javascript: {
            name: 'slice()',
            description: 'Extracts a section of a string and returns it as a new string, without modifying the original string.',
            syntax: 'str.slice(indexStart[, indexEnd])',
            example: 'let text = "hello";\nconsole.log(text.slice(1, 4));',
            output: '"ell"',
            mutates: false,
            timeComplexity: 'O(k)',
            commonUseCases: 'Extracting substrings using a method.'
          }
        },
        {
          id: 'char-at',
          python: {
            name: 'Indexing [i]',
            description: 'Gets the character at the specified index. Supports negative indexing.',
            syntax: 'str[i]',
            example: 'text = "hello"\nprint(text[-1])',
            output: '"o"',
            mutates: false,
            timeComplexity: 'O(1)',
            commonUseCases: 'Accessing specific characters.'
          },
          javascript: {
            name: 'at()',
            description: 'Takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. Supports negative integers.',
            syntax: 'str.at(index)',
            example: 'let text = "hello";\nconsole.log(text.at(-1));',
            output: '"o"',
            mutates: false,
            timeComplexity: 'O(1)',
            commonUseCases: 'Accessing characters with negative indexing support (ES2022).'
          }
        }
      ]
    }
  ],
  extraMethods: {
    python: [
      { name: 'casefold()', example: 'text = "ß"\nprint(text.casefold()) # "ss"' },
      { name: 'center()', example: 'text = "a"\nprint(text.center(3, "-")) # "-a-"' },
      { name: 'count()', example: 'text = "aba"\nprint(text.count("a")) # 2' },
      { name: 'encode()', example: 'text = "a"\nprint(text.encode("utf-8")) # b"a"' },
      { name: 'expandtabs()', example: 'text = "a\\tb"\nprint(text.expandtabs(4)) # "a   b"' },
      { name: 'format()', example: 'text = "{} bar"\nprint(text.format("foo")) # "foo bar"' },
      { name: 'format_map()', example: 'text = "{k}"\nprint(text.format_map({"k": "v"})) # "v"' },
      { name: 'index()', example: 'text = "abc"\nprint(text.index("b")) # 1' },
      { name: 'isalnum()', example: 'print("a1".isalnum()) # True' },
      { name: 'isalpha()', example: 'print("a".isalpha()) # True' },
      { name: 'isascii()', example: 'print("a".isascii()) # True' },
      { name: 'isdecimal()', example: 'print("1".isdecimal()) # True' },
      { name: 'isdigit()', example: 'print("1".isdigit()) # True' },
      { name: 'isidentifier()', example: 'print("var_1".isidentifier()) # True' },
      { name: 'islower()', example: 'print("a".islower()) # True' },
      { name: 'isnumeric()', example: 'print("1".isnumeric()) # True' },
      { name: 'isprintable()', example: 'print("a".isprintable()) # True' },
      { name: 'isspace()', example: 'print(" ".isspace()) # True' },
      { name: 'istitle()', example: 'print("Hi".istitle()) # True' },
      { name: 'isupper()', example: 'print("A".isupper()) # True' },
      { name: 'ljust()', example: 'print("a".ljust(3, "-")) # "a--"' },
      { name: 'lstrip()', example: 'print(" a ".lstrip()) # "a "' },
      { name: 'maketrans()', example: 'print(str.maketrans("a", "b"))' },
      { name: 'partition()', example: 'print("a=b".partition("=")) # ("a", "=", "b")' },
      { name: 'removeprefix()', example: 'print("ab".removeprefix("a")) # "b"' },
      { name: 'removesuffix()', example: 'print("ab".removesuffix("b")) # "a"' },
      { name: 'rfind()', example: 'print("aba".rfind("a")) # 2' },
      { name: 'rindex()', example: 'print("aba".rindex("a")) # 2' },
      { name: 'rjust()', example: 'print("a".rjust(3, "-")) # "--a"' },
      { name: 'rpartition()', example: 'print("a=b=c".rpartition("=")) # ("a=b", "=", "c")' },
      { name: 'rsplit()', example: 'print("a b".rsplit(maxsplit=1)) # ["a", "b"]' },
      { name: 'rstrip()', example: 'print(" a ".rstrip()) # " a"' },
      { name: 'splitlines()', example: 'print("a\\nb".splitlines()) # ["a", "b"]' },
      { name: 'swapcase()', example: 'print("aB".swapcase()) # "Ab"' },
      { name: 'title()', example: 'print("a b".title()) # "A B"' },
      { name: 'translate()', example: 'table = str.maketrans("a", "b")\nprint("a".translate(table)) # "b"' },
      { name: 'zfill()', example: 'print("1".zfill(3)) # "001"' }
    ],
    javascript: [
      { name: 'charCodeAt()', example: 'console.log("a".charCodeAt(0)); // 97' },
      { name: 'codePointAt()', example: 'console.log("a".codePointAt(0)); // 97' },
      { name: 'concat()', example: 'console.log("a".concat("b")); // "ab"' },
      { name: 'String.fromCharCode()', example: 'console.log(String.fromCharCode(97)); // "a"' },
      { name: 'String.fromCodePoint()', example: 'console.log(String.fromCodePoint(97)); // "a"' },
      { name: 'isWellFormed()', example: 'console.log("a".isWellFormed()); // true' },
      { name: 'lastIndexOf()', example: 'console.log("aba".lastIndexOf("a")); // 2' },
      { name: 'localeCompare()', example: 'console.log("a".localeCompare("b")); // -1' },
      { name: 'match()', example: 'console.log("a1".match(/\\d/)); // ["1"]' },
      { name: 'matchAll()', example: 'console.log([..."a1b2".matchAll(/\\d/g)]);' },
      { name: 'normalize()', example: 'console.log("ñ".normalize("NFD"));' },
      { name: 'padEnd()', example: 'console.log("a".padEnd(3, "-")); // "a--"' },
      { name: 'padStart()', example: 'console.log("a".padStart(3, "-")); // "--a"' },
      { name: 'repeat()', example: 'console.log("a".repeat(3)); // "aaa"' },
      { name: 'search()', example: 'console.log("a1".search(/\\d/)); // 1' },
      { name: 'substring()', example: 'console.log("abc".substring(1, 2)); // "b"' },
      { name: 'toLocaleLowerCase()', example: 'console.log("I".toLocaleLowerCase("tr-TR")); // "ı"' },
      { name: 'toLocaleUpperCase()', example: 'console.log("i".toLocaleUpperCase("tr-TR")); // "İ"' },
      { name: 'toString()', example: 'console.log(new String("a").toString()); // "a"' },
      { name: 'toWellFormed()', example: 'console.log("a".toWellFormed()); // "a"' },
      { name: 'trimEnd()', example: 'console.log(" a ".trimEnd()); // " a"' },
      { name: 'trimStart()', example: 'console.log(" a ".trimStart()); // "a "' },
      { name: 'valueOf()', example: 'console.log(new String("a").valueOf()); // "a"' }
    ]
  }
};
