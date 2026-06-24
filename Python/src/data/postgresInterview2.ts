import type { Subsection } from './types';

export const postgresSection2: Subsection = {
  id: 'postgres-queries-joins',
  title: '2. SQL Queries & Joins (31–60)',
  methods: [
    {
      id: 'pg-31', name: '31. What are different types of joins?', description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-32', name: '32. INNER JOIN vs LEFT JOIN?', description: 'INNER JOIN returns only the rows that have matching values in both tables. LEFT JOIN returns all rows from the left table, and the matched rows from the right table. If no match is found, NULLs are returned for the right table columns.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-33', name: '33. RIGHT JOIN vs FULL OUTER JOIN?', description: 'RIGHT JOIN returns all rows from the right table and matching rows from the left. FULL OUTER JOIN returns all rows when there is a match in either the left or right table, filling in NULLs for non-matching sides.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-34', name: '34. CROSS JOIN use cases?', description: 'CROSS JOIN returns the Cartesian product of the two tables. Use cases include generating all possible combinations of attributes (e.g., all colors and all sizes for a product catalog).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-35', name: '35. SELF JOIN explanation?', description: 'A SELF JOIN is a regular join but the table is joined with itself. It is useful for querying hierarchical data or comparing rows within the same table.', syntax: '', example: 'SELECT a.name AS Employee, b.name AS Manager FROM employees a JOIN employees b ON a.manager_id = b.id;', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-36', name: '36. What is NATURAL JOIN?', description: 'A NATURAL JOIN automatically joins tables based on columns with the same name and data types in both tables. It is generally avoided in production because adding or renaming columns can unexpectedly break the query.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-37', name: '37. What is a subquery?', description: 'A subquery is a query nested inside another query (SELECT, INSERT, UPDATE, or DELETE). It can return a single value, a single column, or a multi-column set of rows.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-38', name: '38. Correlated vs non-correlated subquery?', description: 'A non-correlated subquery is independent and executes once for the entire outer query. A correlated subquery references columns from the outer query and executes once for every row processed by the outer query.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-39', name: '39. What is EXISTS?', description: 'EXISTS is an operator used to test for the existence of any record in a subquery. It returns true if the subquery returns one or more records, and false otherwise. It stops scanning as soon as it finds the first match.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-40', name: '40. IN vs EXISTS difference?', description: 'IN evaluates the subquery first and compares values against the resulting list. EXISTS checks for the existence of rows. EXISTS is generally faster for correlated subqueries and large datasets, while IN is fine for small, static lists.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-41', name: '41. What is UNION vs UNION ALL?', description: 'Both combine result sets of two queries. UNION removes duplicate rows. UNION ALL keeps all duplicates and is generally faster because it avoids the overhead of deduplication.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-42', name: '42. What is INTERSECT?', description: 'INTERSECT returns only the rows that appear in the result sets of both queries.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-43', name: '43. What is EXCEPT?', description: 'EXCEPT returns rows that appear in the first query but NOT in the second query (similar to MINUS in Oracle).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-44', name: '44. What is GROUP BY?', description: 'GROUP BY groups rows that have the same values in specified columns into summary rows, often used with aggregate functions like COUNT, MAX, MIN, SUM, AVG.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-45', name: '45. HAVING vs WHERE?', description: 'WHERE filters rows before grouping (cannot use aggregate functions). HAVING filters grouped records after GROUP BY has been applied (can use aggregate functions).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-46', name: '46. What are aggregate functions?', description: 'Functions that perform a calculation on a set of values and return a single value. Examples: COUNT, SUM, AVG, MIN, MAX.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-47', name: '47. COUNT(*) vs COUNT(column)?', description: 'COUNT(*) counts all rows in a table/group, including rows with NULLs. COUNT(column) counts only the non-NULL values in that specific column.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-48', name: '48. What is DISTINCT?', description: 'DISTINCT removes duplicate rows from the result set, ensuring all returned rows are unique across the selected columns.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-49', name: '49. What is ORDER BY?', description: 'ORDER BY is used to sort the result set in ascending (ASC) or descending (DESC) order based on one or more columns.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-50', name: '50. LIMIT and OFFSET?', description: 'LIMIT specifies the maximum number of rows to return. OFFSET specifies how many rows to skip before starting to return rows.', syntax: '', example: 'SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-51', name: '51. What is pagination?', description: 'Pagination is the process of dividing a large dataset into smaller chunks (pages). This is typically implemented using LIMIT and OFFSET, or by using keyset pagination (e.g., WHERE id > last_seen_id LIMIT 10) for better performance.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-52', name: '52. What is window function?', description: 'A window function performs a calculation across a set of table rows that are somehow related to the current row, without collapsing them into a single row like an aggregate function does.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-53', name: '53. ROW_NUMBER() vs RANK()?', description: 'ROW_NUMBER() assigns a unique sequential integer to rows. RANK() assigns the same rank to rows with the same values, but skips subsequent ranks (e.g., 1, 2, 2, 4).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-54', name: '54. DENSE_RANK vs RANK?', description: 'DENSE_RANK is similar to RANK() but does not skip rank numbers for ties (e.g., 1, 2, 2, 3).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-55', name: '55. LEAD and LAG?', description: 'LEAD() accesses data from a subsequent row without a self-join. LAG() accesses data from a previous row. Very useful for calculating week-over-week or row-over-row differences.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-56', name: '56. What is partition by?', description: 'PARTITION BY is an optional clause in a window function that divides the result set into partitions to which the window function is applied separately (similar to GROUP BY, but without collapsing rows).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-57', name: '57. What is CTE?', description: 'A Common Table Expression (CTE) is a temporary, named result set defined within the execution scope of a single SQL statement using the WITH clause. It improves readability.', syntax: '', example: 'WITH active_users AS (SELECT * FROM users WHERE status = \'active\') SELECT * FROM active_users;', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-58', name: '58. Recursive CTE?', description: 'A recursive CTE is a CTE that references itself. It is primarily used to query hierarchical data, such as organizational charts or bill of materials.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-59', name: '59. What is a derived table?', description: 'A derived table is a subquery in the FROM clause of a SELECT statement. It acts as a temporary table for that specific query.', syntax: '', example: 'SELECT * FROM (SELECT id, name FROM users) AS derived;', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    },
    {
      id: 'pg-60', name: '60. What is lateral join?', description: 'A LATERAL join allows a subquery in the FROM clause to reference columns provided by preceding FROM items. It is similar to a for-each loop in SQL.', syntax: '', example: 'SELECT u.name, top_post.title FROM users u CROSS JOIN LATERAL (SELECT title FROM posts p WHERE p.user_id = u.id ORDER BY created_at DESC LIMIT 1) top_post;', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
    }
  ]
};
