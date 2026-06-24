import type { Category } from './types';

export const heapsProblems: Category = {
    id: 'heaps-problems',
    title: 'Heaps / Priority Queue',
    isProblemCategory: true,
    subsections: [
        {
            id: 'heaps-easy',
            title: 'Heaps - Easy',
            methods: [
                {
                    id: 'kth-largest-element-in-a-stream',
                    name: '1. Kth Largest Element in a Stream',
                    description: 'Design a class to find the k-th largest element in a stream of integers.',
                    syntax: 'Maintain a Min-Heap of size k. The root will always be the k-th largest element.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(log k)',
                    commonUseCases: 'Min-Heap, Stream Data',
                    isProblem: true,
                    solutionCode: `import heapq
class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val):
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]`
                },
                {
                    id: 'last-stone-weight',
                    name: '2. Last Stone Weight',
                    description: 'Repeatedly smash the two heaviest stones together until only one (or none) remains.',
                    syntax: 'Use a Max-Heap to efficiently extract the two largest weights at each step.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Max-Heap, Simulation',
                    isProblem: true,
                    solutionCode: `import heapq
def lastStoneWeight(stones):
    max_heap = [-s for s in stones]
    heapq.heapify(max_heap)
    while len(max_heap) > 1:
        s1 = -heapq.heappop(max_heap)
        s2 = -heapq.heappop(max_heap)
        if s1 > s2:
            heapq.heappush(max_heap, -(s1 - s2))
    max_heap.append(0)
    return abs(max_heap[0])`
                },
                {
                    id: 'relative-ranks',
                    name: '3. Relative Ranks',
                    description: 'Assign "Gold Medal", "Silver Medal", and "Bronze Medal" to the top three athletes.',
                    syntax: 'Push scores into a Max-Heap to extract them in descending order.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Max-Heap, Sorting',
                    isProblem: true,
                    solutionCode: `import heapq
def findRelativeRanks(score):
    heap = [(-s, i) for i, s in enumerate(score)]
    heapq.heapify(heap)
    res = [""] * len(score)
    rank = 1
    while heap:
        s, i = heapq.heappop(heap)
        if rank == 1:
            res[i] = "Gold Medal"
        elif rank == 2:
            res[i] = "Silver Medal"
        elif rank == 3:
            res[i] = "Bronze Medal"
        else:
            res[i] = str(rank)
        rank += 1
    return res`
                },
                {
                    id: 'minimum-amount-of-time-to-fill-cups',
                    name: '4. Minimum Amount of Time to Fill Cups',
                    description: 'Fill three types of cups (cold, warm, hot) two at a time. Find the minimum seconds.',
                    syntax: 'Always pick the two categories with the most cups remaining using a Max-Heap.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log 3) => O(N)',
                    commonUseCases: 'Max-Heap, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
def fillCups(amount):
    heap = [-a for a in amount if a > 0]
    heapq.heapify(heap)
    res = 0
    while len(heap) > 1:
        first = heapq.heappop(heap)
        second = heapq.heappop(heap)
        res += 1
        if first + 1 < 0: heapq.heappush(heap, first + 1)
        if second + 1 < 0: heapq.heappush(heap, second + 1)
    if heap:
        res += -heap[0]
    return res`
                },
                {
                    id: 'find-subsequence-of-length-k-with-the-largest-sum',
                    name: '5. Find Subsequence of Length K With the Largest Sum',
                    description: 'Find a subsequence of size k that has the largest possible sum.',
                    syntax: 'Use a Min-Heap of size k to keep track of the k largest elements encountered.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Min-Heap',
                    isProblem: true,
                    solutionCode: `import heapq
def maxSubsequence(nums, k):
    heap = []
    for i, n in enumerate(nums):
        heapq.heappush(heap, (n, i))
        if len(heap) > k:
            heapq.heappop(heap)
    heap.sort(key=lambda x: x[1])
    return [val for val, idx in heap]`
                }
            ]
        },
        {
            id: 'heaps-medium',
            title: 'Heaps - Medium',
            methods: [
                {
                    id: 'kth-largest-element-in-an-array',
                    name: '6. Kth Largest Element in an Array',
                    description: 'Find the k-th largest element without sorting the entire array.',
                    syntax: 'Use a Min-Heap of size k or build a Max-Heap and pop k-1 times.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Min-Heap',
                    isProblem: true,
                    solutionCode: `import heapq
def findKthLargest(nums, k):
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heappushpop(heap, num)
    return heap[0]`
                },
                {
                    id: 'top-k-frequent-elements',
                    name: '7. Top K Frequent Elements',
                    description: 'Find the k most frequent elements in an array.',
                    syntax: 'Use a Hash Map to count frequencies, then push (frequency, element) into a Min-Heap of size k.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Min-Heap, Hash Map',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import Counter
def topKFrequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)`
                },
                {
                    id: 'k-closest-points-to-origin',
                    name: '8. K Closest Points to Origin',
                    description: 'Find the k points on a 2D plane that are closest to (0,0).',
                    syntax: 'Calculate Euclidean distance and store (-distance, x, y) in a Max-Heap of size k.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Max-Heap, Geometry',
                    isProblem: true,
                    solutionCode: `import heapq
def kClosest(points, k):
    max_heap = []
    for x, y in points:
        dist = x**2 + y**2
        if len(max_heap) < k:
            heapq.heappush(max_heap, (-dist, x, y))
        else:
            heapq.heappushpop(max_heap, (-dist, x, y))
    return [[x, y] for dist, x, y in max_heap]`
                },
                {
                    id: 'merge-k-sorted-lists',
                    name: '9. Merge K Sorted Lists',
                    description: 'Merge k sorted linked lists into one sorted list.',
                    syntax: 'Push the head of each list into a Min-Heap. Pop smallest, and push next node.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Min-Heap, Linked List',
                    isProblem: true,
                    solutionCode: `import heapq
def mergeKLists(lists):
    min_heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(min_heap, (node.val, i, node))
    dummy = ListNode(0)
    curr = dummy
    while min_heap:
        val, i, node = heapq.heappop(min_heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(min_heap, (node.next.val, i, node.next))
    return dummy.next`
                },
                {
                    id: 'task-scheduler',
                    name: '10. Task Scheduler',
                    description: 'Find the least units of time to finish tasks with a cooling period.',
                    syntax: 'Use a Max-Heap to prioritize tasks with the highest remaining frequency.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Max-Heap, Queue, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import Counter, deque
def leastInterval(tasks, n):
    count = Counter(tasks)
    maxHeap = [-cnt for cnt in count.values()]
    heapq.heapify(maxHeap)
    time = 0
    q = deque()
    while maxHeap or q:
        time += 1
        if maxHeap:
            cnt = 1 + heapq.heappop(maxHeap)
            if cnt:
                q.append([cnt, time + n])
        if q and q[0][1] == time:
            heapq.heappush(maxHeap, q.popleft()[0])
    return time`
                },
                {
                    id: 'reorganize-string',
                    name: '11. Reorganize String',
                    description: 'Rearrange characters so that no two identical characters are adjacent.',
                    syntax: 'Use a Max-Heap to always pick the most frequent remaining character, then wait one turn to reuse it.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log 26) => O(N)',
                    commonUseCases: 'Max-Heap, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import Counter
def reorganizeString(s):
    count = Counter(s)
    maxHeap = [[-cnt, char] for char, cnt in count.items()]
    heapq.heapify(maxHeap)
    prev = None
    res = ""
    while maxHeap or prev:
        if prev and not maxHeap:
            return ""
        cnt, char = heapq.heappop(maxHeap)
        res += char
        cnt += 1
        if prev:
            heapq.heappush(maxHeap, prev)
            prev = None
        if cnt != 0:
            prev = [cnt, char]
    return res`
                },
                {
                    id: 'find-median-from-data-stream',
                    name: '12. Find Median from Data Stream',
                    description: 'Find the median of a stream of numbers in O(1) or O(log n) time.',
                    syntax: 'Use two heaps: a Max-Heap for the lower half and a Min-Heap for the upper half.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Two Heaps, Stream Data',
                    isProblem: true,
                    solutionCode: `import heapq
class MedianFinder:
    def __init__(self):
        self.small = [] # Max Heap
        self.large = [] # Min Heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -1 * num)
        if (self.small and self.large and (-1 * self.small[0]) > self.large[0]):
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.small) > len(self.large) + 1:
            val = -1 * heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small) + 1:
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -1 * val)

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -1 * self.small[0]
        if len(self.large) > len(self.small):
            return self.large[0]
        return (-1 * self.small[0] + self.large[0]) / 2.0`
                },
                {
                    id: 'furthest-building-you-can-reach',
                    name: '13. Furthest Building You Can Reach',
                    description: 'Use bricks and ladders to reach the furthest building.',
                    syntax: 'Use a Min-Heap to track the largest height jumps; use ladders for biggest jumps.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log L)',
                    commonUseCases: 'Min-Heap, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
def furthestBuilding(heights, bricks, ladders):
    min_heap = []
    for i in range(len(heights) - 1):
        diff = heights[i + 1] - heights[i]
        if diff > 0:
            heapq.heappush(min_heap, diff)
            if len(min_heap) > ladders:
                bricks -= heapq.heappop(min_heap)
            if bricks < 0:
                return i
    return len(heights) - 1`
                },
                {
                    id: 'smallest-number-in-infinite-set',
                    name: '14. Smallest Number in Infinite Set',
                    description: 'Implement a set that always returns the smallest available integer.',
                    syntax: 'Use a Min-Heap to store numbers that have been "added back" to the set.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(log N)',
                    commonUseCases: 'Min-Heap, Hash Set',
                    isProblem: true,
                    solutionCode: `import heapq
class SmallestInfiniteSet:
    def __init__(self):
        self.min_num = 1
        self.heap = []
        self.added = set()

    def popSmallest(self) -> int:
        if self.heap:
            res = heapq.heappop(self.heap)
            self.added.remove(res)
            return res
        res = self.min_num
        self.min_num += 1
        return res

    def addBack(self, num: int) -> None:
        if self.min_num > num and num not in self.added:
            self.added.add(num)
            heapq.heappush(self.heap, num)`
                },
                {
                    id: 'single-threaded-cpu',
                    name: '15. Single-Threaded CPU',
                    description: 'Simulate a CPU that processes tasks with the shortest processing time first.',
                    syntax: 'Use a Min-Heap to store available tasks sorted by processing time and index.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Min-Heap, Sorting',
                    isProblem: true,
                    solutionCode: `import heapq
def getOrder(tasks):
    res = []
    tasks = sorted([(t[0], t[1], i) for i, t in enumerate(tasks)])
    minHeap = []
    time = 0
    i = 0
    while minHeap or i < len(tasks):
        if not minHeap and time < tasks[i][0]:
            time = tasks[i][0]
        while i < len(tasks) and tasks[i][0] <= time:
            heapq.heappush(minHeap, (tasks[i][1], tasks[i][2]))
            i += 1
        proc_time, index = heapq.heappop(minHeap)
        time += proc_time
        res.append(index)
    return res`
                },
                {
                    id: 'longest-happy-string',
                    name: '16. Longest Happy String',
                    description: "Build the longest string using 'a', 'b', and 'c' such that no three consecutive characters are the same.",
                    syntax: 'Greedy approach using a Max-Heap of character frequencies.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'Max-Heap, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
def longestDiverseString(a, b, c):
    res = ""
    maxHeap = []
    for count, char in [(-a, "a"), (-b, "b"), (-c, "c")]:
        if count != 0: heapq.heappush(maxHeap, (count, char))
    
    while maxHeap:
        cnt, char = heapq.heappop(maxHeap)
        if len(res) > 1 and res[-1] == res[-2] == char:
            if not maxHeap: break
            cnt2, char2 = heapq.heappop(maxHeap)
            res += char2
            cnt2 += 1
            if cnt2: heapq.heappush(maxHeap, (cnt2, char2))
            heapq.heappush(maxHeap, (cnt, char))
        else:
            res += char
            cnt += 1
            if cnt: heapq.heappush(maxHeap, (cnt, char))
    return res`
                },
                {
                    id: 'car-pooling',
                    name: '17. Car Pooling',
                    description: 'Determine if a car can pick up and drop off all passengers given a capacity.',
                    syntax: 'Sort trips by start time and use a Min-Heap to track the earliest drop-off times.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Min-Heap, Sorting',
                    isProblem: true,
                    solutionCode: `import heapq
def carPooling(trips, capacity):
    trips.sort(key=lambda t: t[1])
    minHeap = [] # (end, num_passengers)
    cur_pass = 0
    for num, start, end in trips:
        while minHeap and minHeap[0][0] <= start:
            cur_pass -= heapq.heappop(minHeap)[1]
        cur_pass += num
        if cur_pass > capacity:
            return False
        heapq.heappush(minHeap, [end, num])
    return True`
                },
                {
                    id: 'sort-characters-by-frequency',
                    name: '18. Sort Characters By Frequency',
                    description: 'Sort a string in decreasing order based on character frequency.',
                    syntax: 'Build a frequency map and push entries into a Max-Heap.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log K)',
                    commonUseCases: 'Max-Heap, Hash Map',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import Counter
def frequencySort(s):
    count = Counter(s)
    maxHeap = [(-freq, char) for char, freq in count.items()]
    heapq.heapify(maxHeap)
    res = ""
    while maxHeap:
        freq, char = heapq.heappop(maxHeap)
        res += char * (-freq)
    return res`
                },
                {
                    id: 'minimum-cost-to-connect-sticks',
                    name: '19. Minimum Cost to Connect Sticks',
                    description: 'Connect sticks of different lengths. The cost to connect two sticks is the sum of their lengths.',
                    syntax: 'Always connect the two shortest sticks using a Min-Heap to minimize total cost.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N log N)',
                    commonUseCases: 'Min-Heap, Greedy',
                    isProblem: true,
                    solutionCode: `import heapq
def connectSticks(sticks):
    heapq.heapify(sticks)
    res = 0
    while len(sticks) > 1:
        s1 = heapq.heappop(sticks)
        s2 = heapq.heappop(sticks)
        res += s1 + s2
        heapq.heappush(sticks, s1 + s2)
    return res`
                },
                {
                    id: 'path-with-minimum-effort',
                    name: '20. Path with Minimum Effort',
                    description: 'Find a path in a grid where the maximum absolute difference between adjacent cells is minimized.',
                    syntax: "Use Dijkstra's Algorithm with a Min-Priority Queue to explore paths with the lowest effort first.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(E log V)',
                    commonUseCases: 'Dijkstra, Min-Heap, Graph',
                    isProblem: true,
                    solutionCode: `import heapq
def minimumEffortPath(heights):
    ROWS, COLS = len(heights), len(heights[0])
    minHeap = [(0, 0, 0)] # diff, r, c
    visit = set()
    directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    while minHeap:
        diff, r, c = heapq.heappop(minHeap)
        if (r, c) in visit: continue
        visit.add((r, c))
        if r == ROWS - 1 and c == COLS - 1:
            return diff
        
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < ROWS and 0 <= nc < COLS and (nr, nc) not in visit:
                newDiff = max(diff, abs(heights[r][c] - heights[nr][nc]))
                heapq.heappush(minHeap, (newDiff, nr, nc))`
                }
            ]
        }
    ]
};
