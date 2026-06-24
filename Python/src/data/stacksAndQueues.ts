import type { Category } from './types';

export const stacksProblems: Category = {
    id: 'stacks-problems',
    title: 'Stacks',
    isProblemCategory: true,
    subsections: [
        {
            id: 'stacks-easy',
            title: 'Stacks - Easy',
            methods: [
                {
                    id: 'valid-parentheses',
                    name: '1. Valid Parentheses',
                    description: 'Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid.',
                    syntax: 'Use a stack to push opening brackets; when a closing bracket appears, check if it matches the top of the stack.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `def isValid(s):
    stack = [] 
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack`
                },
                {
                    id: 'implement-stack-using-queues',
                    name: '2. Implement Stack using Queues',
                    description: 'Implement a LIFO stack using only two FIFO queues.',
                    syntax: 'When pushing an element, add it to the queue and then rotate the queue so the new element is at the front.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Queues, Stacks',
                    isProblem: true,
                    solutionCode: `from collections import deque

class MyStack:
    def __init__(self):
        self.q = deque()

    def push(self, x):
        self.q.append(x)
        # Rotate so newest is at front
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self):
        return self.q.popleft()

    def top(self):
        return self.q[0]

    def empty(self):
        return len(self.q) == 0`
                },
                {
                    id: 'min-stack',
                    name: '3. Min Stack',
                    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
                    syntax: 'Maintain a second "min_stack" that stores the minimum value seen so far at each level.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        self.stack.append(val)
        # Track minimum at each level
        val = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(val)

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.min_stack[-1]`
                },
                {
                    id: 'make-the-string-great',
                    name: '4. Make The String Great',
                    description: 'Remove adjacent characters that are the same letter but different cases (e.g., "abBA" becomes "").',
                    syntax: 'Iterate through the string and use a stack to check if the current character "cancels out" the top of the stack.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def makeGood(self, s: str) -> str:
    stack = []
    for ch in s:
        if stack and stack[-1].lower() == ch.lower() and stack[-1] != ch:
            stack.pop()
        else:
            stack.append(ch)
    return "".join(stack)`
                },
                {
                    id: 'remove-outermost-parentheses',
                    name: '5. Remove Outermost Parentheses',
                    description: 'Remove the outermost parentheses of every primitive string in the decomposition of S.',
                    syntax: 'Use a counter or stack to track the nesting level and only add characters to the result if the level is greater than 0.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def removeOuterParentheses(self, s: str) -> str:
    result = []
    balance = 0
    for ch in s:
        if ch == '(':
            if balance > 0:
                result.append(ch)
            balance += 1
        else:
            balance -= 1
            if balance > 0:
                result.append(ch)
    return "".join(result)`
                },
                {
                    id: 'backspace-string-compare',
                    name: '6. Backspace String Compare',
                    description: 'Given two strings S and T containing # (backspace), check if they are equal when typed into empty text editors.',
                    syntax: 'Process both strings into stacks, popping whenever you encounter a #.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def backspaceCompare(s, t):
    def build(string):
        stack = []
        for char in string:
            if char != '#':
                stack.append(char)
            elif stack:
                stack.pop()
        return ''.join(stack)
    return build(s) == build(t)`
                },
                {
                    id: 'base-7-binary-conversion',
                    name: '7. Base 7 / Binary Conversion',
                    description: 'Convert a number to another base using a stack.',
                    syntax: 'Repeatedly take the modulus of the number and push it onto the stack, then pop all to get the result.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Stacks, Math',
                    isProblem: true,
                    solutionCode: `def convertToBase7(num):
    if num == 0:
        return '0'
    negative = num < 0
    num = abs(num)
    stack = []
    while num:
        stack.append(str(num % 7))
        num //= 7
    # Pop all from stack -> reversed remainders
    result = ''.join(reversed(stack))
    return '-' + result if negative else result`
                },
                {
                    id: 'final-prices-with-special-discount',
                    name: '8. Final Prices With a Special Discount',
                    description: 'For each item, you get a discount equal to the next item whose price is less than or equal to the current item.',
                    syntax: 'Use a Monotonic Stack to find the "Next Smaller Element."',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Monotonic Stack',
                    isProblem: true,
                    solutionCode: `def finalPrices(self, prices):
    stack = []
    for i in range(len(prices)):
        # Find items getting discount
        while stack and prices[stack[-1]] >= prices[i]:
            index = stack.pop()
            prices[index] -= prices[i]
        stack.append(i)
    return prices`
                }
            ]
        },
        {
            id: 'stacks-medium',
            title: 'Stacks - Medium',
            methods: [
                {
                    id: 'evaluate-reverse-polish-notation',
                    name: '9. Evaluate Reverse Polish Notation',
                    description: 'Evaluate an expression in postfix notation.',
                    syntax: 'Push numbers onto the stack; when an operator appears, pop the last two numbers, apply the operation, and push the result back.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `s = ["2", "1", "+", "3", "*"]
stack = []
for i in s:
    if i not in "+-*/":
        stack.append(i)
    else:
        b = stack.pop()
        a = stack.pop()
        stack.append(str(eval(a + i + b)))
print(stack[0])`
                },
                {
                    id: 'daily-temperatures',
                    name: '10. Daily Temperatures',
                    description: 'Given temperatures, return an array such that res[i] is the number of days you have to wait for a warmer temperature.',
                    syntax: "Use a Monotonic Decreasing Stack to store indices of temperatures that haven't found a warmer day yet.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Monotonic Stack',
                    isProblem: true,
                    solutionCode: `def dailyTemperatures(temperatures):
    n = len(temperatures)
    res = [0] * n
    stack = []  # stores indices
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            idx = stack.pop()
            res[idx] = i - idx
        stack.append(i)
    return res`
                },
                {
                    id: 'decode-string',
                    name: '11. Decode String',
                    description: 'Decode 3[a]2[bc] into aaabcbc.',
                    syntax: 'Use two stacks—one for the repeat count and one for the string built so far.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def decodeString(self, s: str) -> str:
    stack = []
    current_string = ""
    current_num = 0
    for ch in s:
        # Build full number
        if ch.isdigit():
            current_num = current_num * 10 + int(ch)
        elif ch == '[':
            # Save previous state
            stack.append((current_string, current_num))
            current_string = ""
            current_num = 0
        elif ch == ']':
            prev_string, num = stack.pop()
            current_string = prev_string + current_string * num
        else:
            current_string += ch
    return current_string`
                },
                {
                    id: 'simplify-path',
                    name: '12. Simplify Path',
                    description: 'Given an absolute Unix path, simplify it.',
                    syntax: 'Split the path by / and use a stack to handle .. (pop) and . (ignore).',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def simplifyPath(path):
    stack = []
    parts = path.split('/')
    for part in parts:
        # Ignore empty and .
        if part == '' or part == '.':
            continue
        # Go back
        elif part == '..':
            if stack:
                stack.pop()
        # Normal folder
        else:
            stack.append(part)
    return '/' + '/'.join(stack)`
                },
                {
                    id: 'generate-parentheses',
                    name: '13. Generate Parentheses',
                    description: 'Generate all combinations of n pairs of valid parentheses.',
                    syntax: 'Use backtracking with a stack to keep track of the current string being built.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(4^N / sqrt(N))',
                    commonUseCases: 'Backtracking, Stacks',
                    isProblem: true,
                    solutionCode: `def generateParenthesis(n):
    res = []
    def backtrack(curr, open_count, close_count):
        if len(curr) == 2 * n:
            res.append(curr)
            return
        if open_count < n:
            backtrack(curr + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(curr + ')', open_count, close_count + 1)
    backtrack('', 0, 0)
    return res`
                },
                {
                    id: 'asteroid-collision',
                    name: '14. Asteroid Collision',
                    description: 'Simulate collisions between asteroids moving left and right.',
                    syntax: 'Use a stack to store surviving asteroids; if a new asteroid moves left and the top of the stack moves right, simulate the collision.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `def asteroidCollision(asteroids):
    stack = []
    for asteroid in asteroids:
        while stack and stack[-1] > 0 and asteroid < 0:
            # Top smaller
            if stack[-1] < abs(asteroid):
                stack.pop()
                continue
            # Equal size
            elif stack[-1] == abs(asteroid):
                stack.pop()
            break
        else:
            stack.append(asteroid)
    return stack`
                },
                {
                    id: 'online-stock-span',
                    name: '15. Online Stock Span',
                    description: 'Calculate the "span" of a stock price (number of consecutive days the price was less than or equal to today).',
                    syntax: 'Use a monotonic stack to store (price, span) pairs to skip smaller previous spans.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Monotonic Stack',
                    isProblem: true,
                    solutionCode: `nums = [100,80,60,70,60,75,85]
stack = []
spans = []
for i in nums:
    span = 1
    while stack and stack[-1][0] < i:
        span += stack.pop()[1]
    stack.append([i, span])
    spans.append(span)
print(spans)`
                },
                {
                    id: 'remove-k-digits',
                    name: '16. Remove K Digits',
                    description: 'Remove k digits from a number to make it the smallest possible.',
                    syntax: 'Use a monotonic increasing stack; if the current digit is smaller than the stack top, pop the stack and decrement k.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Monotonic Stack, Greedy',
                    isProblem: true,
                    solutionCode: `def removeKdigits(num, k):
    stack = []
    for digit in num:
        while stack and k > 0 and stack[-1] > digit:
            stack.pop()
            k -= 1
        stack.append(digit)
    # If removals still left
    while k > 0:
        stack.pop()
        k -= 1
    # Build answer
    result = ''.join(stack).lstrip('0')
    return result if result else "0"`
                },
                {
                    id: 'next-greater-element-ii',
                    name: '17. Next Greater Element II',
                    description: 'Find the next greater element in a circular array.',
                    syntax: 'Iterate through the array twice and use a monotonic stack to find the next larger value.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Monotonic Stack',
                    isProblem: true,
                    solutionCode: `def nextGreaterElements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []
    # Loop twice for circular behavior
    for i in range(n * 2):
        while stack and nums[stack[-1]] < nums[i % n]:
            res[stack.pop()] = nums[i % n]
        if i < n:
            stack.append(i)
    return res`
                },
                {
                    id: 'score-of-parentheses',
                    name: '18. Score of Parentheses',
                    description: '() has score 1, AB has score A + B, and (A) has score 2 * A.',
                    syntax: 'Use a stack to track the score at different nesting levels.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `def scoreOfParentheses(s):
    stack = [0]  # base score
    for char in s:
        if char == '(':
            stack.append(0)
        else:
            v = stack.pop()
            # () = 1, (A) = 2*A
            stack[-1] += max(2 * v, 1)
    return stack[0]`
                },
                {
                    id: 'basic-calculator-ii',
                    name: '19. Basic Calculator II',
                    description: 'Implement a calculator with +, -, *, /.',
                    syntax: 'Use a stack to keep track of numbers; handle multiplication and division immediately by popping the top, while pushing addition/subtraction to be summed later.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks, Strings',
                    isProblem: true,
                    solutionCode: `def calculate(s):
    stack = []
    num = 0
    sign = '+'
    for i, char in enumerate(s):
        if char.isdigit():
            num = num * 10 + int(char)
        if char in '+-*/' or i == len(s) - 1:
            if sign == '+': stack.append(num)
            elif sign == '-': stack.append(-num)
            elif sign == '*': stack.append(stack.pop() * num)
            elif sign == '/': stack.append(int(stack.pop() / num))
            num = 0
            sign = char
    return sum(stack)`
                },
                {
                    id: 'validate-stack-sequences',
                    name: '20. Validate Stack Sequences',
                    description: 'Given pushed and popped sequences, check if they could be the result of a sequence of stack operations.',
                    syntax: 'Simulate the process with a real stack; whenever the top of the stack matches the next element in popped, pop it.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Stacks',
                    isProblem: true,
                    solutionCode: `def validateStackSequences(pushed, popped):
    stack = []
    i = 0
    for num in pushed:
        stack.append(num)
        while stack and stack[-1] == popped[i]:
            stack.pop()
            i += 1
    return len(stack) == 0`
                }
            ]
        }
    ]
};

export const queuesProblems: Category = {
    id: 'queues-problems',
    title: 'Queues',
    isProblemCategory: true,
    subsections: [
        {
            id: 'queues-easy',
            title: 'Queues - Easy',
            methods: [
                {
                    id: 'number-of-recent-calls',
                    name: '1. Number of Recent Calls',
                    description: 'Count the number of recent requests within a 3000ms window.',
                    syntax: 'Use a queue to store timestamps; pop elements from the front that are outside the 3000ms range.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque
class RecentCounter:
    def __init__(self):
        self.q = deque()
    def ping(self, t: int) -> int:
        self.q.append(t)
        while self.q[0] < t - 3000:
            self.q.popleft()
        return len(self.q)`
                },
                {
                    id: 'implement-queue-using-stacks',
                    name: '2. Implement Queue using Stacks',
                    description: 'Implement a FIFO queue using two LIFO stacks.',
                    syntax: 'Use one stack for pushing and another for popping; transfer elements when the pop-stack is empty.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1) amortized',
                    commonUseCases: 'Queues, Stacks',
                    isProblem: true,
                    solutionCode: `class MyQueue:
    def __init__(self):
        self.s1 = []  # for push
        self.s2 = []  # for pop

    def push(self, x):
        self.s1.append(x)

    def pop(self):
        self.peek()
        return self.s2.pop()

    def peek(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2[-1]

    def empty(self):
        return not self.s1 and not self.s2`
                },
                {
                    id: 'first-unique-character-queue',
                    name: '3. First Unique Character in a String',
                    description: 'Find the first non-repeating character in a stream.',
                    syntax: 'Use a queue to maintain the order of characters and a frequency map to identify uniqueness.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Queues, Hashing',
                    isProblem: true,
                    solutionCode: `from collections import Counter

def firstUniqChar(s):
    count = Counter(s)
    for i, ch in enumerate(s):
        if count[ch] == 1:
            return i
    return -1`
                },
                {
                    id: 'moving-average-from-data-stream',
                    name: '4. Moving Average from Data Stream',
                    description: 'Calculate the moving average of the last N elements.',
                    syntax: 'Maintain a queue of size N; when a new element arrives, pop the oldest if the size exceeds N.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

class MovingAverage:
    def __init__(self, size):
        self.size = size
        self.q = deque()
        self.total = 0

    def next(self, val):
        self.q.append(val)
        self.total += val
        if len(self.q) > self.size:
            self.total -= self.q.popleft()
        return self.total / len(self.q)`
                },
                {
                    id: 'task-scheduler',
                    name: '5. Task Scheduler',
                    description: 'Find the minimum time to finish all tasks with a cooling interval.',
                    syntax: 'Use a max-heap for task frequency and a queue to track tasks currently in the "cooling" period.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Queues, Heaps',
                    isProblem: true,
                    solutionCode: `from collections import Counter

def leastInterval(tasks, n):
    counts = list(Counter(tasks).values())
    max_count = max(counts)
    num_max = counts.count(max_count)
    # Either all tasks, or idle slots needed
    return max(len(tasks), (max_count - 1) * (n + 1) + num_max)`
                }
            ]
        },
        {
            id: 'queues-medium',
            title: 'Queues - Medium',
            methods: [
                {
                    id: 'circular-queue-design',
                    name: '6. Circular Queue Design',
                    description: 'Design a queue with a fixed size where the last position connects back to the first.',
                    syntax: 'Use an array and two pointers (head and tail) to manage the circular logic.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Queues, Arrays',
                    isProblem: true,
                    solutionCode: `class MyCircularQueue:
    def __init__(self, k):
        self.q = [0] * k
        self.head = 0
        self.count = 0
        self.capacity = k

    def enQueue(self, value):
        if self.isFull(): return False
        self.q[(self.head + self.count) % self.capacity] = value
        self.count += 1
        return True

    def deQueue(self):
        if self.isEmpty(): return False
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return True

    def Front(self):
        return -1 if self.isEmpty() else self.q[self.head]

    def Rear(self):
        return -1 if self.isEmpty() else self.q[(self.head + self.count - 1) % self.capacity]

    def isEmpty(self):
        return self.count == 0

    def isFull(self):
        return self.count == self.capacity`
                },
                {
                    id: 'rotting-oranges',
                    name: '7. Rotting Oranges',
                    description: 'Find the minimum time until all oranges rot in a grid.',
                    syntax: 'Use Breadth-First Search (BFS) with a queue to spread the "rot" level by level.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `def orangesRotting(grid):
    q = deque()
    fresh = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 2: q.append((r, c, 0))
            if grid[r][c] == 1: fresh += 1
    
    time = 0
    while q:
        r, c, d = q.popleft()
        time = d
        for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<len(grid) and 0<=nc<len(grid[0]) and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                q.append((nr, nc, d+1))
    return time if fresh == 0 else -1`
                },
                {
                    id: 'walls-and-gates',
                    name: '8. Walls and Gates',
                    description: 'Fill each empty room with the distance to its nearest gate.',
                    syntax: 'Multi-source BFS: add all gate coordinates to a queue and propagate distances simultaneously.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

def wallsAndGates(rooms):
    INF = 2147483647
    q = deque()
    for r in range(len(rooms)):
        for c in range(len(rooms[0])):
            if rooms[r][c] == 0:
                q.append((r, c))
    while q:
        r, c = q.popleft()
        for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < len(rooms) and 0 <= nc < len(rooms[0]) and rooms[nr][nc] == INF:
                rooms[nr][nc] = rooms[r][c] + 1
                q.append((nr, nc))`
                },
                {
                    id: 'shortest-path-in-binary-matrix',
                    name: '9. Shortest Path in Binary Matrix',
                    description: 'Find the shortest clear path from top-left to bottom-right.',
                    syntax: 'BFS is the standard tool for shortest paths in unweighted grids; use a queue to track (r, c, distance).',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

def shortestPathBinaryMatrix(grid):
    n = len(grid)
    if grid[0][0] or grid[n-1][n-1]:
        return -1
    q = deque([(0, 0, 1)])
    grid[0][0] = 1
    while q:
        r, c, dist = q.popleft()
        if r == n-1 and c == n-1:
            return dist
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                nr, nc = r+dr, c+dc
                if 0 <= nr < n and 0 <= nc < n and not grid[nr][nc]:
                    grid[nr][nc] = 1
                    q.append((nr, nc, dist+1))
    return -1`
                },
                {
                    id: 'snake-game-design',
                    name: '10. Snake Game Design',
                    description: 'Design a Snake game where the snake grows when it eats food.',
                    syntax: "Use a deque to represent the snake's body; append the new head and pop the tail (unless food is eaten).",
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Queues, Deque',
                    isProblem: true,
                    solutionCode: `from collections import deque

class SnakeGame:
    def __init__(self, width, height, food):
        self.w, self.h = width, height
        self.food = food
        self.snake = deque([(0, 0)])
        self.body = {(0, 0)}
        self.score = 0
        self.food_idx = 0

    def move(self, direction):
        r, c = self.snake[0]
        moves = {'U': (-1,0), 'D': (1,0), 'L': (0,-1), 'R': (0,1)}
        dr, dc = moves[direction]
        nr, nc = r + dr, c + dc
        if nr < 0 or nr >= self.h or nc < 0 or nc >= self.w:
            return -1
        if self.food_idx < len(self.food) and [nr, nc] == self.food[self.food_idx]:
            self.score += 1
            self.food_idx += 1
        else:
            tail = self.snake.pop()
            self.body.remove(tail)
        if (nr, nc) in self.body:
            return -1
        self.snake.appendleft((nr, nc))
        self.body.add((nr, nc))
        return self.score`
                },
                {
                    id: 'open-the-lock',
                    name: '11. Open the Lock',
                    description: 'Find the minimum turns to reach a target combination.',
                    syntax: 'Treat combinations as nodes in a graph; use BFS to find the shortest path while skipping "deadends".',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

def openLock(deadends, target):
    dead = set(deadends)
    if '0000' in dead:
        return -1
    q = deque([('0000', 0)])
    visited = {'0000'}
    while q:
        combo, turns = q.popleft()
        if combo == target:
            return turns
        for i in range(4):
            digit = int(combo[i])
            for d in (-1, 1):
                new_d = (digit + d) % 10
                new_combo = combo[:i] + str(new_d) + combo[i+1:]
                if new_combo not in dead and new_combo not in visited:
                    visited.add(new_combo)
                    q.append((new_combo, turns + 1))
    return -1`
                },
                {
                    id: 'perfect-squares',
                    name: '12. Perfect Squares',
                    description: 'Find the least number of perfect square numbers that sum to n.',
                    syntax: 'Use BFS to find the shortest path from n down to 0, subtracting square numbers at each step.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * sqrt(N))',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `import math
from collections import deque

def numSquares(n):
    q = deque([(n, 0)])
    visited = {n}
    while q:
        val, steps = q.popleft()
        for i in range(1, int(math.sqrt(val)) + 1):
            rem = val - i * i
            if rem == 0:
                return steps + 1
            if rem not in visited:
                visited.add(rem)
                q.append((rem, steps + 1))`
                },
                {
                    id: 'word-ladder',
                    name: '13. Word Ladder',
                    description: 'Find the shortest transformation sequence from one word to another.',
                    syntax: 'BFS on a graph where nodes are words and edges exist between words differing by one character.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M^2)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words:
        return 0
    q = deque([(beginWord, 1)])
    while q:
        word, steps = q.popleft()
        if word == endWord:
            return steps
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                if new_word in words:
                    words.remove(new_word)
                    q.append((new_word, steps + 1))
    return 0`
                },
                {
                    id: 'binary-tree-level-order-traversal',
                    name: '14. Binary Tree Level Order Traversal',
                    description: "Return the level order traversal of a tree's nodes' values.",
                    syntax: 'Standard BFS: use a queue to store nodes of the current level before moving to the next.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'BFS, Trees',
                    isProblem: true,
                    solutionCode: `from collections import deque

def levelOrder(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`
                },
                {
                    id: 'zigzag-level-order-traversal',
                    name: '15. Zigzag Level Order Traversal',
                    description: 'Traverse a tree in a "zigzag" pattern (left-to-right, then right-to-left).',
                    syntax: 'Use a queue for BFS, but reverse the list of values for every other level.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'BFS, Trees',
                    isProblem: true,
                    solutionCode: `from collections import deque

def zigzagLevelOrder(root):
    if not root: return []
    res, q = [], deque([root])
    left_to_right = True
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        # Reverse every other level
        res.append(level if left_to_right else level[::-1])
        left_to_right = not left_to_right
    return res`
                },
                {
                    id: 'clone-graph',
                    name: '16. Clone Graph',
                    description: 'Create a deep copy of a connected undirected graph.',
                    syntax: 'Use BFS to traverse the graph, using a dictionary to map old nodes to new copies and a queue for traversal.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'BFS, Graphs',
                    isProblem: true,
                    solutionCode: `from collections import deque

def cloneGraph(node):
    if not node: return None
    copies = {node: Node(node.val)}
    q = deque([node])
    while q:
        curr = q.popleft()
        for neighbor in curr.neighbors:
            if neighbor not in copies:
                copies[neighbor] = Node(neighbor.val)
                q.append(neighbor)
            copies[curr].neighbors.append(copies[neighbor])
    return copies[node]`
                },
                {
                    id: 'course-schedule',
                    name: '17. Course Schedule',
                    description: 'Determine if you can finish all courses given prerequisites.',
                    syntax: 'Kahn’s Algorithm (Topological Sort): use a queue to process nodes with zero in-degrees.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'BFS, Graphs, Topological Sort',
                    isProblem: true,
                    solutionCode: `from collections import deque

def canFinish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indegree = [0] * numCourses
    for dest, src in prerequisites:
        adj[src].append(dest)
        indegree[dest] += 1
    # Start with nodes that have no prerequisites
    q = deque([i for i in range(numCourses) if indegree[i] == 0])
    count = 0
    while q:
        curr = q.popleft()
        count += 1
        for neighbor in adj[curr]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)
    return count == numCourses`
                },
                {
                    id: 'minimum-knight-moves',
                    name: '18. Minimum Knight Moves',
                    description: 'Find the minimum steps for a knight to reach a coordinate (x, y).',
                    syntax: 'BFS with a queue to explore all 8 possible knight moves per turn.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(x * y)',
                    commonUseCases: 'BFS, Graphs',
                    isProblem: true,
                    solutionCode: `from collections import deque

def minKnightMoves(x, y):
    x, y = abs(x), abs(y)
    q = deque([(0, 0, 0)])
    visited = {(0, 0)}
    while q:
        r, c, steps = q.popleft()
        if (r, c) == (x, y):
            return steps
        for dr, dc in [(1,2),(2,1),(2,-1),(1,-2),(-1,-2),(-2,-1),(-2,1),(-1,2)]:
            nr, nc = r + dr, c + dc
            if (nr, nc) not in visited and nr >= -1 and nc >= -1:
                visited.add((nr, nc))
                q.append((nr, nc, steps + 1))`
                },
                {
                    id: 'sliding-window-maximum',
                    name: '19. Sliding Window Maximum',
                    description: 'Find the maximum in each sliding window of size k.',
                    syntax: 'Use a monotonic deque to store indices; keep values in the deque in decreasing order.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Deque, Monotonic Queue',
                    isProblem: true,
                    solutionCode: `from collections import deque

def maxSlidingWindow(nums, k):
    res = []
    q = deque()  # stores indices
    for i, num in enumerate(nums):
        # Remove indices out of window
        if q and q[0] < i - k + 1:
            q.popleft()
        # Remove smaller values from back
        while q and nums[q[-1]] < num:
            q.pop()
        q.append(i)
        if i >= k - 1:
            res.append(nums[q[0]])
    return res`
                },
                {
                    id: '01-matrix',
                    name: '20. 01 Matrix',
                    description: 'For each cell, find the distance to the nearest 0.',
                    syntax: 'Multi-source BFS starting from all 0 cells, updating distances of neighboring 1s.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N * M)',
                    commonUseCases: 'BFS, Queues',
                    isProblem: true,
                    solutionCode: `from collections import deque

def updateMatrix(mat):
    m, n = len(mat), len(mat[0])
    q = deque()
    for r in range(m):
        for c in range(n):
            if mat[r][c] == 0:
                q.append((r, c))
            else:
                mat[r][c] = -1  # mark unvisited
    while q:
        r, c = q.popleft()
        for nr, nc in [(r-1,c),(r+1,c),(r,c-1),(r,c+1)]:
            if 0 <= nr < m and 0 <= nc < n and mat[nr][nc] == -1:
                mat[nr][nc] = mat[r][c] + 1
                q.append((nr, nc))
    return mat`
                }
            ]
        }
    ]
};
