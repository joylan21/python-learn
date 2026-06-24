import type { Category } from './types';
import { postgresSection2 } from './postgresInterview2';
import { postgresSection3 } from './postgresInterview3';
import { postgresSection4 } from './postgresInterview4';
import { postgresSection5 } from './postgresInterview5';
import { postgresSection6, postgresSection7 } from './postgresInterview6';

export const postgresInterview: Category = {
  id: 'interview-postgres',
  title: 'PostgreSQL',
  isInterviewCategory: true,
  subsections: [
    {
      id: 'postgres-basics',
      title: '1. PostgreSQL Basics (1–30)',
      methods: [
        {
          id: 'pg-1', name: '1. What is PostgreSQL?', description: 'PostgreSQL is a powerful, open-source object-relational database system (ORDBMS) known for reliability, feature robustness, and performance. It supports both SQL (relational) and JSON (non-relational) querying.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-2', name: '2. How is PostgreSQL different from MySQL?', description: 'PostgreSQL is an Object-Relational Database Management System (ORDBMS) while MySQL is a purely Relational Database Management System (RDBMS). PostgreSQL strictly adheres to SQL standards, supports advanced data types (like JSONB, arrays, hstore), and has better support for concurrent operations and complex queries.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-3', name: '3. What are tables, rows, and columns?', description: 'A table is a collection of related data held in a table format within a database. It consists of columns and rows. A column is a set of data values of a particular simple type, one value for each row. A row (or record) represents a single, implicitly structured data item in a table.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-4', name: '4. What is a schema in PostgreSQL?', description: 'A schema is a namespace that contains named database objects such as tables, views, indexes, data types, functions, and operators. It helps organize database objects into logical groups to make them more manageable and to avoid name collisions.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-5', name: '5. What is a database cluster?', description: 'In PostgreSQL, a database cluster is a collection of databases that is managed by a single instance of a running database server. It is not a group of servers, but rather a group of databases sharing the same configuration files and data directory.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-6', name: '6. What is the default port of PostgreSQL?', description: 'The default port for PostgreSQL is 5432.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-7', name: '7. What is psql?', description: 'psql is the interactive terminal-based front-end to PostgreSQL. It enables you to type in queries interactively, issue them to PostgreSQL, and see the query results. It also provides a number of meta-commands and various shell-like features.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-8', name: '8. What is the role of a database server?', description: 'A database server is a computer program that provides database services to other computer programs or to computers. In PostgreSQL, the `postgres` process acts as the server, managing database files, accepting connections from client applications, and performing actions on the database on behalf of the clients.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-9', name: '9. What is a relation in PostgreSQL?', description: 'In PostgreSQL terminology, a "relation" is a generic term for any mathematical relation structure, primarily tables and views. Indexes are also technically relations in PostgreSQL internals.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-10', name: '10. What are SQL commands types (DDL, DML, DCL, TCL)?', description: 'DDL (Data Definition Language) for defining structures (CREATE, ALTER, DROP). DML (Data Manipulation Language) for managing data (SELECT, INSERT, UPDATE, DELETE). DCL (Data Control Language) for permissions (GRANT, REVOKE). TCL (Transaction Control Language) for transactions (COMMIT, ROLLBACK, SAVEPOINT).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-11', name: '11. What is a primary key?', description: 'A primary key is a column or a group of columns that uniquely identifies every row in a table. It cannot contain NULL values, and each table can have only one primary key.', syntax: '', example: 'CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50));', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-12', name: '12. What is a foreign key?', description: 'A foreign key is a column or a set of columns in one table that references the primary key columns in another table. It is used to enforce referential integrity between the two tables.', syntax: '', example: 'CREATE TABLE orders (id SERIAL, user_id INT REFERENCES users(id));', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-13', name: '13. What is a unique constraint?', description: 'A unique constraint ensures that all values in a column or a group of columns are distinct from one another. Unlike primary keys, a table can have multiple unique constraints, and unique constraints can accept NULL values (in PostgreSQL, multiple NULLs are considered distinct).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-14', name: '14. What is NOT NULL constraint?', description: 'A NOT NULL constraint enforces a column to not accept NULL values. This means you must always provide a value for that column when inserting or updating a row.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-15', name: '15. What is a check constraint?', description: 'A CHECK constraint specifies a boolean expression that must be evaluated to true for every row in the table. If an insert or update violates this condition, the operation fails.', syntax: '', example: 'CREATE TABLE employees (age INT CHECK (age >= 18));', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-16', name: '16. Difference between DELETE and TRUNCATE?', description: 'DELETE removes rows one by one and logs each deletion (slower, can be rolled back, triggers fire). TRUNCATE quickly removes all rows from a table by deallocating the data pages (faster, fewer locks, cannot use WHERE clause, does not fire ON DELETE triggers).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-17', name: '17. Difference between DROP and DELETE?', description: 'DELETE removes specific data (rows) from a table but keeps the table structure. DROP removes the entire table structure (including data, indexes, constraints) from the database.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-18', name: '18. What is a schema search path?', description: 'The schema search path determines the order in which PostgreSQL searches schemas to resolve unqualified object names (like tables or functions). It is controlled by the `search_path` configuration parameter.', syntax: '', example: 'SHOW search_path; -- usually "$user", public', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-19', name: '19. What is a default schema?', description: 'In PostgreSQL, the default schema is `public`. If you create a table without specifying a schema, it is placed in the `public` schema automatically.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-20', name: '20. What is information_schema?', description: '`information_schema` is a standard SQL schema that contains views providing information about the database metadata, such as tables, columns, constraints, and privileges.', syntax: '', example: "SELECT * FROM information_schema.tables WHERE table_schema = 'public';", output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-21', name: '21. What is a catalog in PostgreSQL?', description: 'System catalogs are regular tables where PostgreSQL stores metadata about the database, such as tables, columns, data types, indexes, and users. Most catalog tables are in the `pg_catalog` schema.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-22', name: '22. What is the role of pg_catalog?', description: '`pg_catalog` is the schema that holds the system catalog tables and all built-in data types, functions, and operators. It is implicitly included in the schema search path.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-23', name: '23. What is a sequence?', description: 'A sequence is a special kind of database object designed to generate unique numeric identifiers. It is commonly used to auto-generate primary key values.', syntax: '', example: 'CREATE SEQUENCE user_id_seq; SELECT nextval(\'user_id_seq\');', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-24', name: '24. What is SERIAL vs BIGSERIAL?', description: '`SERIAL` and `BIGSERIAL` are pseudo-types that automatically create an integer (or bigint) column and attach a sequence to it for auto-incrementing values. `SERIAL` uses a 4-byte integer (max ~2 billion), `BIGSERIAL` uses an 8-byte integer.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-25', name: '25. What is GENERATED ALWAYS AS IDENTITY?', description: 'It is the SQL-standard compliant way to create auto-incrementing columns. It is preferred over `SERIAL` in modern PostgreSQL because it tightly couples the sequence to the column and handles permissions better.', syntax: '', example: 'id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-26', name: '26. What are transaction properties (ACID)?', description: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure that database transactions are processed reliably.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-27', name: '27. What is atomicity?', description: 'Atomicity ensures that a transaction is treated as a single, indivisible unit of work. Either all of its operations succeed, or none of them do (all or nothing).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-28', name: '28. What is isolation?', description: 'Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-29', name: '29. What is durability?', description: 'Durability ensures that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power loss or crash). PostgreSQL achieves this through WAL (Write-Ahead Logging).', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        },
        {
          id: 'pg-30', name: '30. What is consistency?', description: 'Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining all predefined rules, constraints, cascades, and triggers.', syntax: '', example: '', output: '', mutates: false, timeComplexity: '', commonUseCases: ''
        }
      ]
    },
    postgresSection2,
    postgresSection3,
    postgresSection4,
    postgresSection5,
    postgresSection6,
    postgresSection7
  ]
};
