import json

methods = [
    # Case Conversion
    {'name': 'capitalize()', 'description': 'Converts the first character to upper case', 'syntax': 'str.capitalize()', 'example': 'print("hello".capitalize())', 'output': 'Hello', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Formatting text.'},
    {'name': 'casefold()', 'description': 'Converts string into lower case (more aggressive than lower())', 'syntax': 'str.casefold()', 'example': 'print("ß".casefold())', 'output': 'ss', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Caseless matching.'},
    {'name': 'lower()', 'description': 'Converts a string into lower case', 'syntax': 'str.lower()', 'example': 'print("HELLO".lower())', 'output': 'hello', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Standardizing input.'},
    {'name': 'upper()', 'description': 'Converts a string into upper case', 'syntax': 'str.upper()', 'example': 'print("hello".upper())', 'output': 'HELLO', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Standardizing input.'},
    {'name': 'swapcase()', 'description': 'Swaps cases, lower case becomes upper case and vice versa', 'syntax': 'str.swapcase()', 'example': 'print("HeLlO".swapcase())', 'output': 'hElLo', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Inverting case.'},
    {'name': 'title()', 'description': 'Converts the first character of each word to upper case', 'syntax': 'str.title()', 'example': 'print("hello world".title())', 'output': 'Hello World', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Formatting names/titles.'},
    
    # Searching & Checking
    {'name': 'count()', 'description': 'Returns the number of times a specified value occurs in a string', 'syntax': 'str.count(value, start, end)', 'example': 'print("apple".count("p"))', 'output': '2', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Counting occurrences.'},
    {'name': 'endswith()', 'description': 'Returns true if the string ends with the specified value', 'syntax': 'str.endswith(value, start, end)', 'example': 'print("hello.py".endswith(".py"))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Checking file extensions.'},
    {'name': 'find()', 'description': 'Searches the string for a specified value and returns the position of where it was found', 'syntax': 'str.find(value, start, end)', 'example': 'print("hello".find("e"))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(n*m)', 'commonUseCases': 'Locating substrings.'},
    {'name': 'index()', 'description': 'Searches the string for a specified value and returns the position of where it was found (raises ValueError if not found)', 'syntax': 'str.index(value, start, end)', 'example': 'print("hello".index("e"))', 'output': '1', 'mutates': False, 'timeComplexity': 'O(n*m)', 'commonUseCases': 'Locating substrings.'},
    {'name': 'rfind()', 'description': 'Searches the string for a specified value and returns the last position of where it was found', 'syntax': 'str.rfind(value, start, end)', 'example': 'print("hello hello".rfind("e"))', 'output': '7', 'mutates': False, 'timeComplexity': 'O(n*m)', 'commonUseCases': 'Locating last occurrence.'},
    {'name': 'rindex()', 'description': 'Searches the string for a specified value and returns the last position of where it was found (raises ValueError if not found)', 'syntax': 'str.rindex(value, start, end)', 'example': 'print("hello hello".rindex("e"))', 'output': '7', 'mutates': False, 'timeComplexity': 'O(n*m)', 'commonUseCases': 'Locating last occurrence.'},
    {'name': 'startswith()', 'description': 'Returns true if the string starts with the specified value', 'syntax': 'str.startswith(value, start, end)', 'example': 'print("hello".startswith("he"))', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Checking prefixes.'},
    
    # Character Classification
    {'name': 'isalnum()', 'description': 'Returns True if all characters in the string are alphanumeric', 'syntax': 'str.isalnum()', 'example': 'print("company12".isalnum())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Validating input.'},
    {'name': 'isalpha()', 'description': 'Returns True if all characters in the string are in the alphabet', 'syntax': 'str.isalpha()', 'example': 'print("companyX".isalpha())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Validating names.'},
    {'name': 'isascii()', 'description': 'Returns True if all characters in the string are ascii characters', 'syntax': 'str.isascii()', 'example': 'print("hello".isascii())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking character set.'},
    {'name': 'isdecimal()', 'description': 'Returns True if all characters in the string are decimals', 'syntax': 'str.isdecimal()', 'example': 'print("1234".isdecimal())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Validating numbers.'},
    {'name': 'isdigit()', 'description': 'Returns True if all characters in the string are digits', 'syntax': 'str.isdigit()', 'example': 'print("50800".isdigit())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Validating numbers.'},
    {'name': 'isidentifier()', 'description': 'Returns True if the string is a valid identifier', 'syntax': 'str.isidentifier()', 'example': 'print("my_var".isidentifier())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking valid variable names.'},
    {'name': 'islower()', 'description': 'Returns True if all characters in the string are lower case', 'syntax': 'str.islower()', 'example': 'print("hello".islower())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking case format.'},
    {'name': 'isnumeric()', 'description': 'Returns True if all characters in the string are numeric', 'syntax': 'str.isnumeric()', 'example': 'print("565543".isnumeric())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Validating numeric strings.'},
    {'name': 'isprintable()', 'description': 'Returns True if all characters in the string are printable', 'syntax': 'str.isprintable()', 'example': 'print("Hello!".isprintable())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking string contents.'},
    {'name': 'isspace()', 'description': 'Returns True if all characters in the string are whitespaces', 'syntax': 'str.isspace()', 'example': 'print("   ".isspace())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking for empty or spaced strings.'},
    {'name': 'istitle()', 'description': 'Returns True if the string follows the rules of a title', 'syntax': 'str.istitle()', 'example': 'print("Hello World".istitle())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking title casing.'},
    {'name': 'isupper()', 'description': 'Returns True if all characters in the string are upper case', 'syntax': 'str.isupper()', 'example': 'print("HELLO".isupper())', 'output': 'True', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Checking case format.'},
    
    # Formatting & Alignment
    {'name': 'center()', 'description': 'Returns a centered string', 'syntax': 'str.center(length, character)', 'example': 'print("a".center(3, "-"))', 'output': '-a-', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Aligning text.'},
    {'name': 'format()', 'description': 'Formats specified values in a string', 'syntax': 'str.format(value1, value2...)', 'example': 'print("For only {price:.2f} dollars!".format(price = 49))', 'output': 'For only 49.00 dollars!', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'String interpolation.'},
    {'name': 'format_map()', 'description': 'Formats specified values in a string using a dictionary', 'syntax': 'str.format_map(mapping)', 'example': 'print("{x} {y}".format_map({"x":"hello", "y":"world"}))', 'output': 'hello world', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'String interpolation with dict.'},
    {'name': 'ljust()', 'description': 'Returns a left justified version of the string', 'syntax': 'str.ljust(length, character)', 'example': 'print("a".ljust(3, "-"))', 'output': 'a--', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Aligning text.'},
    {'name': 'rjust()', 'description': 'Returns a right justified version of the string', 'syntax': 'str.rjust(length, character)', 'example': 'print("a".rjust(3, "-"))', 'output': '--a', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Aligning text.'},
    {'name': 'zfill()', 'description': 'Fills the string with a specified number of 0 values at the beginning', 'syntax': 'str.zfill(len)', 'example': 'print("50".zfill(5))', 'output': '00050', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Padding numbers.'},
    {'name': 'expandtabs()', 'description': 'Sets the tab size of the string', 'syntax': 'str.expandtabs(tabsize)', 'example': 'print("H\\te\\tl\\tl\\to".expandtabs(2))', 'output': 'H e l l o', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Formatting tabs.'},
    
    # Modifying & Trimming
    {'name': 'lstrip()', 'description': 'Returns a left trim version of the string', 'syntax': 'str.lstrip(characters)', 'example': 'print("  hello".lstrip())', 'output': 'hello', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Cleaning input.'},
    {'name': 'rstrip()', 'description': 'Returns a right trim version of the string', 'syntax': 'str.rstrip(characters)', 'example': 'print("hello  ".rstrip())', 'output': 'hello', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Cleaning input.'},
    {'name': 'strip()', 'description': 'Returns a trimmed version of the string', 'syntax': 'str.strip(characters)', 'example': 'print("  hello  ".strip())', 'output': 'hello', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Cleaning input.'},
    {'name': 'removeprefix()', 'description': 'Returns string with the prefix removed if present', 'syntax': 'str.removeprefix(prefix)', 'example': 'print("TestApp".removeprefix("Test"))', 'output': 'App', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Removing specific prefixes.'},
    {'name': 'removesuffix()', 'description': 'Returns string with the suffix removed if present', 'syntax': 'str.removesuffix(suffix)', 'example': 'print("TestApp".removesuffix("App"))', 'output': 'Test', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Removing specific suffixes.'},
    {'name': 'replace()', 'description': 'Returns a string where a specified value is replaced with a specified value', 'syntax': 'str.replace(oldvalue, newvalue, count)', 'example': 'print("one two one".replace("one", "three"))', 'output': 'three two three', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Replacing text.'},
    
    # Splitting & Joining
    {'name': 'join()', 'description': 'Joins the elements of an iterable to the end of the string', 'syntax': 'str.join(iterable)', 'example': 'print("-".join(["a", "b", "c"]))', 'output': 'a-b-c', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Combining items.'},
    {'name': 'partition()', 'description': 'Returns a tuple where the string is parted into three parts', 'syntax': 'str.partition(value)', 'example': 'print("I could eat apples".partition("apples"))', 'output': '("I could eat ", "apples", "")', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Splitting string once.'},
    {'name': 'rpartition()', 'description': 'Returns a tuple where the string is parted into three parts, starting from the end', 'syntax': 'str.rpartition(value)', 'example': 'print("I could eat apples, apples".rpartition("apples"))', 'output': '("I could eat apples, ", "apples", "")', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Splitting string once from right.'},
    {'name': 'rsplit()', 'description': 'Splits the string at the specified separator, and returns a list', 'syntax': 'str.rsplit(separator, maxsplit)', 'example': 'print("apple, banana, cherry".rsplit(", "))', 'output': '["apple", "banana", "cherry"]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Splitting string.'},
    {'name': 'split()', 'description': 'Splits the string at the specified separator, and returns a list', 'syntax': 'str.split(separator, maxsplit)', 'example': 'print("apple banana cherry".split())', 'output': '["apple", "banana", "cherry"]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Tokenizing text.'},
    {'name': 'splitlines()', 'description': 'Splits the string at line breaks and returns a list', 'syntax': 'str.splitlines(keeplinebreaks)', 'example': 'print("Thank you\\nfor the music".splitlines())', 'output': '["Thank you", "for the music"]', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Splitting multiline text.'},
    
    # Encoding & Translation
    {'name': 'encode()', 'description': 'Returns an encoded version of the string', 'syntax': 'str.encode(encoding=encoding, errors=errors)', 'example': 'print("My name is Ståle".encode())', 'output': 'b"My name is St\\xc3\\xa5le"', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Byte conversion.'},
    {'name': 'maketrans()', 'description': 'Returns a translation table to be used in translations', 'syntax': 'str.maketrans(x, y, z)', 'example': 'print(str.maketrans("S", "P"))', 'output': '{83: 80}', 'mutates': False, 'timeComplexity': 'O(k)', 'commonUseCases': 'Creating translation maps.'},
    {'name': 'translate()', 'description': 'Returns a translated string', 'syntax': 'str.translate(table)', 'example': 'print("Hello Sam!".translate({83: 80}))', 'output': 'Hello Pam!', 'mutates': False, 'timeComplexity': 'O(n)', 'commonUseCases': 'Replacing characters map.'},
]

groups = {
    'case-conversion': ('Case Conversion', methods[0:6]),
    'searching-checking': ('Searching & Checking', methods[6:13]),
    'character-classification': ('Character Classification', methods[13:25]),
    'formatting-alignment': ('Formatting & Alignment', methods[25:32]),
    'modifying-trimming': ('Modifying & Trimming', methods[32:38]),
    'splitting-joining': ('Splitting & Joining', methods[38:44]),
    'encoding-translation': ('Encoding & Translation', methods[44:47])
}

output = 'import type { Category } from "./types";\n\nexport const stringMethods: Category = {\n  id: "strings",\n  title: "Strings",\n  subsections: [\n'

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

with open('d:/Learnings/Webpages/Python/src/data/stringMethods.ts', 'w', encoding='utf-8') as f:
    f.write(output)
