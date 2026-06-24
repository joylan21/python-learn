import type { Category } from './types';

export const graphsProblems: Category = {
    id: 'graphs-problems',
    title: 'Graphs',
    isProblemCategory: true,
    subsections: [
        {
            id: 'graphs-easy',
            title: 'Graphs - Easy',
            methods: [
                {
                    id: 'find-if-path-exists-in-graph',
                    name: '1. Find if Path Exists in Graph',
                    description: 'Determine if there is a valid path between a source and destination in an undirected graph.',
                    syntax: 'Use Depth-First Search (DFS) or Breadth-First Search (BFS) starting from the source.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'Graph Traversal',
                    isProblem: true,
                    solutionCode: `def validPath(n, edges, source, destination):
    adj = {i: [] for i in range(n)}
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    
    visited = {source}
    stack = [source]
    while stack:
        node = stack.pop()
        if node == destination: return True
        for neighbor in adj[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                stack.append(neighbor)
    return False`
                },
                {
                    id: 'flood-fill',
                    name: '2. Flood Fill',
                    description: 'Change the color of a starting pixel and all adjacent pixels of the same color in an image grid.',
                    syntax: 'Treat the grid as a graph and perform a DFS/BFS starting from the given pixel.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(N)',
                    commonUseCases: 'DFS, BFS, Grid Traversal',
                    isProblem: true,
                    solutionCode: `def floodFill(image, sr, sc, color):
    start_color = image[sr][sc]
    if start_color == color:
        return image
    def dfs(r, c):
        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != start_color:
            return
        image[r][c] = color
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    dfs(sr, sc)
    return image`
                },
                {
                    id: 'find-the-town-judge',
                    name: '3. Find the Town Judge',
                    description: 'In a town of N people, the judge trusts no one, but everyone trusts the judge.',
                    syntax: 'Calculate in-degree and out-degree. Judge has in-degree N-1 and out-degree 0.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'Graph Degrees',
                    isProblem: true,
                    solutionCode: `def findJudge(n, trust):
    in_degree = [0] * (n + 1)
    out_degree = [0] * (n + 1)
    for u, v in trust:
        out_degree[u] += 1
        in_degree[v] += 1
    for i in range(1, n + 1):
        if in_degree[i] == n - 1 and out_degree[i] == 0:
            return i
    return -1`
                },
                {
                    id: 'center-of-star-graph',
                    name: '4. Center of Star Graph',
                    description: 'Find the common node that is connected to every other node in a star graph.',
                    syntax: 'Check which node appears in both of the first two edges.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(1)',
                    commonUseCases: 'Graph Degrees',
                    isProblem: true,
                    solutionCode: `def findCenter(edges):
    u1, v1 = edges[0]
    u2, v2 = edges[1]
    if u1 == u2 or u1 == v2:
        return u1
    return v1`
                },
                {
                    id: 'island-perimeter',
                    name: '5. Island Perimeter',
                    description: 'Find the perimeter of an island in a grid where 1 is land and 0 is water.',
                    syntax: 'Traverse grid. Add 4 for each land, subtract 2 for each adjacent land connection.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(R * C)',
                    commonUseCases: 'Grid Traversal',
                    isProblem: true,
                    solutionCode: `def islandPerimeter(grid):
    perimeter = 0
    rows, cols = len(grid), len(grid[0])
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                perimeter += 4
                if r > 0 and grid[r-1][c] == 1:
                    perimeter -= 2
                if c > 0 and grid[r][c-1] == 1:
                    perimeter -= 2
    return perimeter`
                }
            ]
        },
        {
            id: 'graphs-medium',
            title: 'Graphs - Medium',
            methods: [
                {
                    id: 'number-of-islands',
                    name: '6. Number of Islands',
                    description: 'Count the number of connected components of land (1s) in a 2D grid.',
                    syntax: 'Iterate through grid; when land is hit, start DFS/BFS to mark connected cells visited.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(R * C)',
                    commonUseCases: 'DFS, Connected Components',
                    isProblem: true,
                    solutionCode: `def numIslands(grid):
    if not grid: return 0
    count = 0
    def dfs(r, c):
        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == '0':
            return
        grid[r][c] = '0' # Mark as visited
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count`
                },
                {
                    id: 'clone-graph',
                    name: '7. Clone Graph',
                    description: 'Create a deep copy of a connected undirected graph.',
                    syntax: 'Use a dictionary to map {old_node: new_node} and traverse using BFS or DFS.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'DFS, BFS, Hash Map',
                    isProblem: true,
                    solutionCode: `def cloneGraph(node):
    if not node: return None
    copies = {}
    def dfs(n):
        if n in copies:
            return copies[n]
        copy = Node(n.val)
        copies[n] = copy
        for neighbor in n.neighbors:
            copy.neighbors.append(dfs(neighbor))
        return copy
    return dfs(node)`
                },
                {
                    id: 'course-schedule',
                    name: '8. Course Schedule',
                    description: 'Given course prerequisites, determine if you can finish all courses without a cycle.',
                    syntax: "Use Kahn's Algorithm (BFS) or DFS to detect cycles in a directed graph.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'Topological Sort, Cycle Detection',
                    isProblem: true,
                    solutionCode: `def canFinish(numCourses, prerequisites):
    adj = {i: [] for i in range(numCourses)}
    for crs, pre in prerequisites:
        adj[crs].append(pre)
    visited = set()
    path = set()
    def dfs(crs):
        if crs in path: return False
        if crs in visited: return True
        path.add(crs)
        for pre in adj[crs]:
            if not dfs(pre): return False
        path.remove(crs)
        visited.add(crs)
        return True
    for crs in range(numCourses):
        if not dfs(crs): return False
    return True`
                },
                {
                    id: 'pacific-atlantic-water-flow',
                    name: '9. Pacific Atlantic Water Flow',
                    description: 'Find grid cells where water can flow to both the Pacific and Atlantic oceans.',
                    syntax: 'Run two DFS traversals from Pacific and Atlantic edges, find their intersection.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(R * C)',
                    commonUseCases: 'DFS, Grid Traversal',
                    isProblem: true,
                    solutionCode: `def pacificAtlantic(heights):
    ROWS, COLS = len(heights), len(heights[0])
    pac, atl = set(), set()
    def dfs(r, c, visit, prevHeight):
        if ((r, c) in visit or r < 0 or c < 0 or r == ROWS or c == COLS or heights[r][c] < prevHeight):
            return
        visit.add((r, c))
        dfs(r + 1, c, visit, heights[r][c])
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    
    for c in range(COLS):
        dfs(0, c, pac, heights[0][c])
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c])
    for r in range(ROWS):
        dfs(r, 0, pac, heights[r][0])
        dfs(r, COLS - 1, atl, heights[r][COLS - 1])
    return list(pac.intersection(atl))`
                },
                {
                    id: 'redundant-connection',
                    name: '10. Redundant Connection',
                    description: 'Find an edge that can be removed to turn a graph into a tree.',
                    syntax: 'Use Union-Find to detect which edge creates a cycle.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V)',
                    commonUseCases: 'Union Find',
                    isProblem: true,
                    solutionCode: `def findRedundantConnection(edges):
    parent = [i for i in range(len(edges) + 1)]
    def find(i):
        if i == parent[i]: return i
        parent[i] = find(parent[i])
        return parent[i]
    def union(i, j):
        root_i = find(i)
        root_j = find(j)
        if root_i == root_j: return False
        parent[root_i] = root_j
        return True
    
    for u, v in edges:
        if not union(u, v):
            return [u, v]`
                },
                {
                    id: 'network-delay-time',
                    name: '11. Network Delay Time',
                    description: 'Find the time it takes for a signal to reach all nodes from a source.',
                    syntax: "Use Dijkstra's Algorithm with a priority queue to find shortest paths.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(E log V)',
                    commonUseCases: 'Dijkstra, Shortest Path',
                    isProblem: true,
                    solutionCode: `import heapq
from collections import defaultdict
def networkDelayTime(times, n, k):
    edges = defaultdict(list)
    for u, v, w in times:
        edges[u].append((v, w))
    minHeap = [(0, k)]
    visit = set()
    t = 0
    while minHeap:
        w1, n1 = heapq.heappop(minHeap)
        if n1 in visit: continue
        visit.add(n1)
        t = max(t, w1)
        for n2, w2 in edges[n1]:
            if n2 not in visit:
                heapq.heappush(minHeap, (w1 + w2, n2))
    return t if len(visit) == n else -1`
                },
                {
                    id: 'all-paths-from-source-to-target',
                    name: '12. All Paths From Source to Target',
                    description: 'Find all possible paths from node 0 to node N-1 in a DAG.',
                    syntax: 'Use backtracking/DFS to explore all paths starting from the source.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(2^V * V)',
                    commonUseCases: 'Backtracking, DFS',
                    isProblem: true,
                    solutionCode: `def allPathsSourceTarget(graph):
    target = len(graph) - 1
    res = []
    def dfs(node, path):
        if node == target:
            res.append(list(path))
            return
        for neighbor in graph[node]:
            path.append(neighbor)
            dfs(neighbor, path)
            path.pop()
    dfs(0, [0])
    return res`
                },
                {
                    id: 'cheapest-flights-within-k-stops',
                    name: '13. Cheapest Flights Within K Stops',
                    description: 'Find the cheapest flight from source to destination with at most K stops.',
                    syntax: 'Use Bellman-Ford algorithm, limited to K+1 iterations.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(E * K)',
                    commonUseCases: 'Bellman-Ford, Shortest Path',
                    isProblem: true,
                    solutionCode: `def findCheapestPrice(n, flights, src, dst, k):
    prices = [float("inf")] * n
    prices[src] = 0
    for i in range(k + 1):
        tmpPrices = prices.copy()
        for s, d, p in flights:
            if prices[s] == float("inf"): continue
            if prices[s] + p < tmpPrices[d]:
                tmpPrices[d] = prices[s] + p
        prices = tmpPrices
    return -1 if prices[dst] == float("inf") else prices[dst]`
                },
                {
                    id: 'surrounded-regions',
                    name: '14. Surrounded Regions',
                    description: "Capture all regions surrounded by 'X' by flipping 'O's.",
                    syntax: "Use DFS/BFS starting from 'O's on the boundaries.",
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(R * C)',
                    commonUseCases: 'DFS, Grid Traversal',
                    isProblem: true,
                    solutionCode: `def solve(board):
    ROWS, COLS = len(board), len(board[0])
    def capture(r, c):
        if r < 0 or c < 0 or r == ROWS or c == COLS or board[r][c] != "O":
            return
        board[r][c] = "T"
        capture(r+1, c)
        capture(r-1, c)
        capture(r, c+1)
        capture(r, c-1)
    
    # Capture unsurrounded regions
    for r in range(ROWS):
        for c in range(COLS):
            if (r == 0 or r == ROWS - 1 or c == 0 or c == COLS - 1) and board[r][c] == "O":
                capture(r, c)
    # Capture surrounded and un-capture border O's
    for r in range(ROWS):
        for c in range(COLS):
            if board[r][c] == "O": board[r][c] = "X"
            if board[r][c] == "T": board[r][c] = "O"`
                },
                {
                    id: 'max-area-of-island',
                    name: '15. Max Area of Island',
                    description: 'Find the maximum area of a connected land component in a grid.',
                    syntax: 'Similar to Number of Islands, but return the total count of cells visited.',
                    example: '',
                    output: '',
                    mutates: true,
                    timeComplexity: 'O(R * C)',
                    commonUseCases: 'DFS, Connected Components',
                    isProblem: true,
                    solutionCode: `def maxAreaOfIsland(grid):
    ROWS, COLS = len(grid), len(grid[0])
    visit = set()
    def dfs(r, c):
        if r < 0 or r == ROWS or c < 0 or c == COLS or grid[r][c] == 0 or (r, c) in visit:
            return 0
        visit.add((r, c))
        return (1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1))
    
    area = 0
    for r in range(ROWS):
        for c in range(COLS):
            if grid[r][c] == 1 and (r, c) not in visit:
                area = max(area, dfs(r, c))
    return area`
                },
                {
                    id: 'reconstruct-itinerary',
                    name: '16. Reconstruct Itinerary',
                    description: 'Find a valid travel itinerary using all provided tickets.',
                    syntax: "Use Hierholzer's algorithm or a greedy DFS with backtracking.",
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(E log E)',
                    commonUseCases: 'Eulerian Path, DFS',
                    isProblem: true,
                    solutionCode: `import collections
def findItinerary(tickets):
    adj = collections.defaultdict(list)
    tickets.sort(reverse=True)
    for src, dst in tickets:
        adj[src].append(dst)
    
    res = []
    def dfs(src):
        while adj[src]:
            dfs(adj[src].pop())
        res.append(src)
    dfs("JFK")
    return res[::-1]`
                },
                {
                    id: 'word-ladder',
                    name: '17. Word Ladder',
                    description: 'Find the shortest transformation sequence between two words.',
                    syntax: 'Use BFS to find the shortest path in a graph where words are nodes.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2 * M)',
                    commonUseCases: 'BFS, Shortest Path',
                    isProblem: true,
                    solutionCode: `import collections
def ladderLength(beginWord, endWord, wordList):
    if endWord not in wordList: return 0
    nei = collections.defaultdict(list)
    wordList.append(beginWord)
    for word in wordList:
        for j in range(len(word)):
            pattern = word[:j] + "*" + word[j+1:]
            nei[pattern].append(word)
    visit = set([beginWord])
    q = collections.deque([beginWord])
    res = 1
    while q:
        for i in range(len(q)):
            word = q.popleft()
            if word == endWord: return res
            for j in range(len(word)):
                pattern = word[:j] + "*" + word[j+1:]
                for neiWord in nei[pattern]:
                    if neiWord not in visit:
                        visit.add(neiWord)
                        q.append(neiWord)
        res += 1
    return 0`
                },
                {
                    id: 'snakes-and-ladders',
                    name: '18. Snakes and Ladders',
                    description: 'Find the minimum moves to reach the last square in a Snakes and Ladders game.',
                    syntax: 'Model the board as a graph and use BFS to find the shortest path.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(N^2)',
                    commonUseCases: 'BFS, Shortest Path',
                    isProblem: true,
                    solutionCode: `import collections
def snakesAndLadders(board):
    length = len(board)
    board.reverse()
    def intToPos(square):
        r = (square - 1) // length
        c = (square - 1) % length
        if r % 2: c = length - 1 - c
        return [r, c]
    
    q = collections.deque([(1, 0)]) # square, moves
    visit = set()
    while q:
        square, moves = q.popleft()
        for i in range(1, 7):
            nextSquare = square + i
            r, c = intToPos(nextSquare)
            if board[r][c] != -1:
                nextSquare = board[r][c]
            if nextSquare == length * length:
                return moves + 1
            if nextSquare not in visit:
                visit.add(nextSquare)
                q.append((nextSquare, moves + 1))
    return -1`
                },
                {
                    id: 'minimum-height-trees',
                    name: '19. Minimum Height Trees',
                    description: 'Find the root nodes that result in trees with the minimum possible height.',
                    syntax: 'Repeatedly remove leaves (nodes with degree 1) until only 1 or 2 nodes remain.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V)',
                    commonUseCases: 'Topological Sort, Graph Center',
                    isProblem: true,
                    solutionCode: `import collections
def findMinHeightTrees(n, edges):
    if n == 1: return [0]
    adj = collections.defaultdict(list)
    for n1, n2 in edges:
        adj[n1].append(n2)
        adj[n2].append(n1)
    
    leaves = collections.deque()
    for i in range(n):
        if len(adj[i]) == 1:
            leaves.append(i)
    
    while n > 2:
        n -= len(leaves)
        for i in range(len(leaves)):
            leaf = leaves.popleft()
            neighbor = adj[leaf].pop()
            adj[neighbor].remove(leaf)
            if len(adj[neighbor]) == 1:
                leaves.append(neighbor)
    return list(leaves)`
                },
                {
                    id: 'possible-bipartition',
                    name: '20. Possible Bipartition',
                    description: 'Check if a graph can be split into two groups where no two members in a group dislike each other.',
                    syntax: 'Use Graph Coloring (2-coloring) with BFS/DFS to check for bipartiteness.',
                    example: '',
                    output: '',
                    mutates: false,
                    timeComplexity: 'O(V + E)',
                    commonUseCases: 'Bipartite Graph, BFS',
                    isProblem: true,
                    solutionCode: `import collections
def possibleBipartition(n, dislikes):
    adj = collections.defaultdict(list)
    for u, v in dislikes:
        adj[u].append(v)
        adj[v].append(u)
    
    color = {}
    for i in range(1, n + 1):
        if i not in color:
            color[i] = 0
            q = collections.deque([i])
            while q:
                node = q.popleft()
                for nei in adj[node]:
                    if nei not in color:
                        color[nei] = 1 - color[node]
                        q.append(nei)
                    elif color[nei] == color[node]:
                        return False
    return True`
                }
            ]
        }
    ]
};
