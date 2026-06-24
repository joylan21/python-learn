import type { Category } from "./types";

export const stringMethods: Category = {
  id: "strings",
  title: "Strings",
  subsections: [
    {
      id: "case-conversion",
      title: "Case Conversion",
      methods: [
        {
          id: "capitalize",
          name: "capitalize()",
          description: "Converts the first character to upper case",
          syntax: "str.capitalize()",
          example: "print(\"hello\".capitalize())",
          output: "Hello",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Formatting text."
        },
        {
          id: "casefold",
          name: "casefold()",
          description: "Converts string into lower case (more aggressive than lower())",
          syntax: "str.casefold()",
          example: "print(\"\u00df\".casefold())",
          output: "ss",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Caseless matching."
        },
        {
          id: "lower",
          name: "lower()",
          description: "Converts a string into lower case",
          syntax: "str.lower()",
          example: "print(\"HELLO\".lower())",
          output: "hello",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Standardizing input."
        },
        {
          id: "upper",
          name: "upper()",
          description: "Converts a string into upper case",
          syntax: "str.upper()",
          example: "print(\"hello\".upper())",
          output: "HELLO",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Standardizing input."
        },
        {
          id: "swapcase",
          name: "swapcase()",
          description: "Swaps cases, lower case becomes upper case and vice versa",
          syntax: "str.swapcase()",
          example: "print(\"HeLlO\".swapcase())",
          output: "hElLo",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Inverting case."
        },
        {
          id: "title",
          name: "title()",
          description: "Converts the first character of each word to upper case",
          syntax: "str.title()",
          example: "print(\"hello world\".title())",
          output: "Hello World",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Formatting names/titles."
        },
      ]
    },
    {
      id: "searching-checking",
      title: "Searching & Checking",
      methods: [
        {
          id: "count",
          name: "count()",
          description: "Returns the number of times a specified value occurs in a string",
          syntax: "str.count(value, start, end)",
          example: "print(\"apple\".count(\"p\"))",
          output: "2",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Counting occurrences."
        },
        {
          id: "endswith",
          name: "endswith()",
          description: "Returns true if the string ends with the specified value",
          syntax: "str.endswith(value, start, end)",
          example: "print(\"hello.py\".endswith(\".py\"))",
          output: "True",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Checking file extensions."
        },
        {
          id: "find",
          name: "find()",
          description: "Searches the string for a specified value and returns the position of where it was found",
          syntax: "str.find(value, start, end)",
          example: "print(\"hello\".find(\"e\"))",
          output: "1",
          mutates: false,
          timeComplexity: "O(n*m)",
          commonUseCases: "Locating substrings."
        },
        {
          id: "index",
          name: "index()",
          description: "Searches the string for a specified value and returns the position of where it was found (raises ValueError if not found)",
          syntax: "str.index(value, start, end)",
          example: "print(\"hello\".index(\"e\"))",
          output: "1",
          mutates: false,
          timeComplexity: "O(n*m)",
          commonUseCases: "Locating substrings."
        },
        {
          id: "rfind",
          name: "rfind()",
          description: "Searches the string for a specified value and returns the last position of where it was found",
          syntax: "str.rfind(value, start, end)",
          example: "print(\"hello hello\".rfind(\"e\"))",
          output: "7",
          mutates: false,
          timeComplexity: "O(n*m)",
          commonUseCases: "Locating last occurrence."
        },
        {
          id: "rindex",
          name: "rindex()",
          description: "Searches the string for a specified value and returns the last position of where it was found (raises ValueError if not found)",
          syntax: "str.rindex(value, start, end)",
          example: "print(\"hello hello\".rindex(\"e\"))",
          output: "7",
          mutates: false,
          timeComplexity: "O(n*m)",
          commonUseCases: "Locating last occurrence."
        },
        {
          id: "startswith",
          name: "startswith()",
          description: "Returns true if the string starts with the specified value",
          syntax: "str.startswith(value, start, end)",
          example: "print(\"hello\".startswith(\"he\"))",
          output: "True",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Checking prefixes."
        },
      ]
    },
    {
      id: "character-classification",
      title: "Character Classification",
      methods: [
        {
          id: "isalnum",
          name: "isalnum()",
          description: "Returns True if all characters in the string are alphanumeric",
          syntax: "str.isalnum()",
          example: "print(\"company12\".isalnum())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Validating input."
        },
        {
          id: "isalpha",
          name: "isalpha()",
          description: "Returns True if all characters in the string are in the alphabet",
          syntax: "str.isalpha()",
          example: "print(\"companyX\".isalpha())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Validating names."
        },
        {
          id: "isascii",
          name: "isascii()",
          description: "Returns True if all characters in the string are ascii characters",
          syntax: "str.isascii()",
          example: "print(\"hello\".isascii())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking character set."
        },
        {
          id: "isdecimal",
          name: "isdecimal()",
          description: "Returns True if all characters in the string are decimals",
          syntax: "str.isdecimal()",
          example: "print(\"1234\".isdecimal())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Validating numbers."
        },
        {
          id: "isdigit",
          name: "isdigit()",
          description: "Returns True if all characters in the string are digits",
          syntax: "str.isdigit()",
          example: "print(\"50800\".isdigit())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Validating numbers."
        },
        {
          id: "isidentifier",
          name: "isidentifier()",
          description: "Returns True if the string is a valid identifier",
          syntax: "str.isidentifier()",
          example: "print(\"my_var\".isidentifier())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking valid variable names."
        },
        {
          id: "islower",
          name: "islower()",
          description: "Returns True if all characters in the string are lower case",
          syntax: "str.islower()",
          example: "print(\"hello\".islower())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking case format."
        },
        {
          id: "isnumeric",
          name: "isnumeric()",
          description: "Returns True if all characters in the string are numeric",
          syntax: "str.isnumeric()",
          example: "print(\"565543\".isnumeric())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Validating numeric strings."
        },
        {
          id: "isprintable",
          name: "isprintable()",
          description: "Returns True if all characters in the string are printable",
          syntax: "str.isprintable()",
          example: "print(\"Hello!\".isprintable())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking string contents."
        },
        {
          id: "isspace",
          name: "isspace()",
          description: "Returns True if all characters in the string are whitespaces",
          syntax: "str.isspace()",
          example: "print(\"   \".isspace())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking for empty or spaced strings."
        },
        {
          id: "istitle",
          name: "istitle()",
          description: "Returns True if the string follows the rules of a title",
          syntax: "str.istitle()",
          example: "print(\"Hello World\".istitle())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking title casing."
        },
        {
          id: "isupper",
          name: "isupper()",
          description: "Returns True if all characters in the string are upper case",
          syntax: "str.isupper()",
          example: "print(\"HELLO\".isupper())",
          output: "True",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Checking case format."
        },
      ]
    },
    {
      id: "formatting-alignment",
      title: "Formatting & Alignment",
      methods: [
        {
          id: "center",
          name: "center()",
          description: "Returns a centered string",
          syntax: "str.center(length, character)",
          example: "print(\"a\".center(3, \"-\"))",
          output: "-a-",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Aligning text."
        },
        {
          id: "format",
          name: "format()",
          description: "Formats specified values in a string",
          syntax: "str.format(value1, value2...)",
          example: "print(\"For only {price:.2f} dollars!\".format(price = 49))",
          output: "For only 49.00 dollars!",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "String interpolation."
        },
        {
          id: "format_map",
          name: "format_map()",
          description: "Formats specified values in a string using a dictionary",
          syntax: "str.format_map(mapping)",
          example: "print(\"{x} {y}\".format_map({\"x\":\"hello\", \"y\":\"world\"}))",
          output: "hello world",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "String interpolation with dict."
        },
        {
          id: "ljust",
          name: "ljust()",
          description: "Returns a left justified version of the string",
          syntax: "str.ljust(length, character)",
          example: "print(\"a\".ljust(3, \"-\"))",
          output: "a--",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Aligning text."
        },
        {
          id: "rjust",
          name: "rjust()",
          description: "Returns a right justified version of the string",
          syntax: "str.rjust(length, character)",
          example: "print(\"a\".rjust(3, \"-\"))",
          output: "--a",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Aligning text."
        },
        {
          id: "zfill",
          name: "zfill()",
          description: "Fills the string with a specified number of 0 values at the beginning",
          syntax: "str.zfill(len)",
          example: "print(\"50\".zfill(5))",
          output: "00050",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Padding numbers."
        },
        {
          id: "expandtabs",
          name: "expandtabs()",
          description: "Sets the tab size of the string",
          syntax: "str.expandtabs(tabsize)",
          example: "print(\"H\\te\\tl\\tl\\to\".expandtabs(2))",
          output: "H e l l o",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Formatting tabs."
        },
      ]
    },
    {
      id: "modifying-trimming",
      title: "Modifying & Trimming",
      methods: [
        {
          id: "lstrip",
          name: "lstrip()",
          description: "Returns a left trim version of the string",
          syntax: "str.lstrip(characters)",
          example: "print(\"  hello\".lstrip())",
          output: "hello",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Cleaning input."
        },
        {
          id: "rstrip",
          name: "rstrip()",
          description: "Returns a right trim version of the string",
          syntax: "str.rstrip(characters)",
          example: "print(\"hello  \".rstrip())",
          output: "hello",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Cleaning input."
        },
        {
          id: "strip",
          name: "strip()",
          description: "Returns a trimmed version of the string",
          syntax: "str.strip(characters)",
          example: "print(\"  hello  \".strip())",
          output: "hello",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Cleaning input."
        },
        {
          id: "removeprefix",
          name: "removeprefix()",
          description: "Returns string with the prefix removed if present",
          syntax: "str.removeprefix(prefix)",
          example: "print(\"TestApp\".removeprefix(\"Test\"))",
          output: "App",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Removing specific prefixes."
        },
        {
          id: "removesuffix",
          name: "removesuffix()",
          description: "Returns string with the suffix removed if present",
          syntax: "str.removesuffix(suffix)",
          example: "print(\"TestApp\".removesuffix(\"App\"))",
          output: "Test",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Removing specific suffixes."
        },
        {
          id: "replace",
          name: "replace()",
          description: "Returns a string where a specified value is replaced with a specified value",
          syntax: "str.replace(oldvalue, newvalue, count)",
          example: "print(\"one two one\".replace(\"one\", \"three\"))",
          output: "three two three",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Replacing text."
        },
      ]
    },
    {
      id: "splitting-joining",
      title: "Splitting & Joining",
      methods: [
        {
          id: "join",
          name: "join()",
          description: "Joins the elements of an iterable to the end of the string",
          syntax: "str.join(iterable)",
          example: "print(\"-\".join([\"a\", \"b\", \"c\"]))",
          output: "a-b-c",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Combining items."
        },
        {
          id: "partition",
          name: "partition()",
          description: "Returns a tuple where the string is parted into three parts",
          syntax: "str.partition(value)",
          example: "print(\"I could eat apples\".partition(\"apples\"))",
          output: "(\"I could eat \", \"apples\", \"\")",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Splitting string once."
        },
        {
          id: "rpartition",
          name: "rpartition()",
          description: "Returns a tuple where the string is parted into three parts, starting from the end",
          syntax: "str.rpartition(value)",
          example: "print(\"I could eat apples, apples\".rpartition(\"apples\"))",
          output: "(\"I could eat apples, \", \"apples\", \"\")",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Splitting string once from right."
        },
        {
          id: "rsplit",
          name: "rsplit()",
          description: "Splits the string at the specified separator, and returns a list",
          syntax: "str.rsplit(separator, maxsplit)",
          example: "print(\"apple, banana, cherry\".rsplit(\", \"))",
          output: "[\"apple\", \"banana\", \"cherry\"]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Splitting string."
        },
        {
          id: "split",
          name: "split()",
          description: "Splits the string at the specified separator, and returns a list",
          syntax: "str.split(separator, maxsplit)",
          example: "print(\"apple banana cherry\".split())",
          output: "[\"apple\", \"banana\", \"cherry\"]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Tokenizing text."
        },
        {
          id: "splitlines",
          name: "splitlines()",
          description: "Splits the string at line breaks and returns a list",
          syntax: "str.splitlines(keeplinebreaks)",
          example: "print(\"Thank you\\nfor the music\".splitlines())",
          output: "[\"Thank you\", \"for the music\"]",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Splitting multiline text."
        },
      ]
    },
    {
      id: "encoding-translation",
      title: "Encoding & Translation",
      methods: [
        {
          id: "encode",
          name: "encode()",
          description: "Returns an encoded version of the string",
          syntax: "str.encode(encoding=encoding, errors=errors)",
          example: "print(\"My name is St\u00e5le\".encode())",
          output: "b\"My name is St\\xc3\\xa5le\"",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Byte conversion."
        },
        {
          id: "maketrans",
          name: "maketrans()",
          description: "Returns a translation table to be used in translations",
          syntax: "str.maketrans(x, y, z)",
          example: "print(str.maketrans(\"S\", \"P\"))",
          output: "{83: 80}",
          mutates: false,
          timeComplexity: "O(k)",
          commonUseCases: "Creating translation maps."
        },
        {
          id: "translate",
          name: "translate()",
          description: "Returns a translated string",
          syntax: "str.translate(table)",
          example: "print(\"Hello Sam!\".translate({83: 80}))",
          output: "Hello Pam!",
          mutates: false,
          timeComplexity: "O(n)",
          commonUseCases: "Replacing characters map."
        },
      ]
    },
  ]
};
