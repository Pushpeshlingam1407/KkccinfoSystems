export interface Module {
  title: string;
  topics: string[];
}

export interface CourseSyllabus {
  id: string;
  name: string;
  badge?: string;
  description: string;
  duration: string;
  prerequisites: string;
  overview: string;
  modules: Module[];
  projects?: string[];
}

export const SYLLABUS_DATA: Record<string, CourseSyllabus> = {
  CLanguage: {
    id: "CLanguage",
    name: "C Language",
    badge: "Core Programming",
    duration: "4 - 6 Weeks",
    prerequisites: "None (Basic Computer Literacy)",
    description:
      "Master procedural programming foundational concepts, memory management, pointers, and data structures using C Language.",
    overview:
      "C is the foundational language for computer science. This course covers everything from control structures to memory management, pointers, structures, file handling, and algorithm design based on standard GeeksforGeeks and industry curricula.",
    modules: [
      {
        title: "Module 1: Introduction to C & Environment Setup",
        topics: [
          "History and Evolution of C Language",
          "Structure of a C Program & Compilation Process (Preprocessing, Compiling, Assembling, Linking)",
          "IDE Setup (GCC, VS Code, Code::Blocks)",
          "Tokens, Keywords, Identifiers, and Constants",
          "Data Types (Primitive, Derived, User-defined) & Memory Storage",
          "Variables, Scope, Lifetime, and Storage Classes (auto, register, static, extern)",
        ],
      },
      {
        title: "Module 2: Operators & Expressions",
        topics: [
          "Arithmetic, Relational, Logical, and Bitwise Operators",
          "Assignment, Increment/Decrement, and Conditional (Ternary) Operators",
          "Operator Precedence and Associativity",
          "Type Conversion & Casting (Implicit vs Explicit)",
        ],
      },
      {
        title: "Module 3: Control Flow Statements",
        topics: [
          "Decision Making: if, if-else, nested if-else, switch-case",
          "Iterative Statements: for loop, while loop, do-while loop",
          "Loop Control: break, continue, goto statements",
          "Nested loops and Pattern Printing Algorithms",
        ],
      },
      {
        title: "Module 4: Functions & Recursion",
        topics: [
          "Function Declaration, Definition, and Invocation",
          "Call by Value vs Call by Reference",
          "Recursion Concepts, Base Cases, Direct & Indirect Recursion",
          "Tail Recursion vs Non-tail Recursion & Tower of Hanoi Problem",
        ],
      },
      {
        title: "Module 5: Arrays & Strings",
        topics: [
          "1D Arrays: Declaration, Memory Layout, and Operations",
          "2D Arrays & Matrices (Multiplication, Transposition)",
          "Searching Algorithms (Linear Search, Binary Search)",
          "Sorting Algorithms (Bubble Sort, Selection Sort, Insertion Sort)",
          "String Handling, Null Terminator, Standard Library <string.h> Functions",
        ],
      },
      {
        title: "Module 6: Pointers & Dynamic Memory Allocation",
        topics: [
          "Pointer Basics: Address-of (&) and Dereference (*) Operators",
          "Pointer Arithmetic & Array-Pointer Relationship",
          "Pointers to Pointers (Double Pointers)",
          "Function Pointers and Callback Functions",
          "Dynamic Memory Allocation: malloc(), calloc(), realloc(), free(), and Memory Leaks",
        ],
      },
      {
        title: "Module 7: Structures, Unions & Enum",
        topics: [
          "Structure Definition, Instantiation, and Member Access",
          "Array of Structures & Nested Structures",
          "Structure Padding, Alignment, and Bit Fields",
          "Unions vs Structures (Memory Sharing)",
          "Enumerated Types (enum) and typedef",
        ],
      },
      {
        title: "Module 8: File Handling & Preprocessor Directives",
        topics: [
          "File Operations: Opening (fopen), Reading (fgetc, fgets, fread), Writing (fputc, fputs, fwrite), and Closing (fclose)",
          "Text Files vs Binary Files",
          "File Pointers & Random Access (fseek, ftell, rewind)",
          "Macros (#define), Conditional Compilation (#ifdef, #ifndef), Header Files",
        ],
      },
    ],
    projects: [
      "Student Record Management System using File Handling",
      "Bank Account Management Console Application",
      "Tic-Tac-Toe Game with AI / Human Mode",
    ],
  },
  CPP: {
    id: "CPP",
    name: "C++ Programming",
    badge: "OOP & Competitive Coding",
    duration: "6 - 8 Weeks",
    prerequisites: "Basic C Knowledge or Logic Fundamentals",
    description:
      "Learn Object-Oriented Programming (OOP), Modern C++ (C++11/14/17), and Standard Template Library (STL) for fast problem solving.",
    overview:
      "C++ bridges low-level system programming with high-level abstraction. This syllabus covers fundamental OOP principles, constructors, inheritance, polymorphism, templates, exception handling, and deep dive into STL containers and algorithms.",
    modules: [
      {
        title: "Module 1: Introduction to C++ & Modern Features",
        topics: [
          "Difference between C and C++",
          "Input/Output Streams (cin, cout, cerr, clog, iomanip)",
          "Namespaces and Scope Resolution Operator (::)",
          "Reference Variables vs Pointers",
          "Inline Functions, Default Arguments, and Const Expressions",
        ],
      },
      {
        title: "Module 2: Object-Oriented Concepts & Classes",
        topics: [
          "Classes and Objects Structure",
          "Access Specifiers (private, public, protected)",
          "Constructors: Default, Parameterized, Copy Constructor, Deep vs Shallow Copy",
          "Destructors and Resource Acquisition Is Initialization (RAII)",
          "Static Data Members and Static Member Functions",
          "Friend Functions and Friend Classes",
        ],
      },
      {
        title: "Module 3: Inheritance & Polymorphism",
        topics: [
          "Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance",
          "Diamond Problem & Virtual Base Classes",
          "Compile-time Polymorphism: Function Overloading & Operator Overloading",
          "Run-time Polymorphism: Virtual Functions, Pure Virtual Functions, and Abstract Classes",
          "Virtual Destructors and VTABLE / VPTR Mechanism",
        ],
      },
      {
        title: "Module 4: Standard Template Library (STL) - Containers",
        topics: [
          "Sequence Containers: std::vector, std::list, std::deque, std::array",
          "Container Adapters: std::stack, std::queue, std::priority_queue",
          "Associative Containers: std::set, std::multiset, std::map, std::multimap",
          "Unordered Containers: std::unordered_map, std::unordered_set (Hash Tables)",
        ],
      },
      {
        title: "Module 5: STL Algorithms, Iterators & Lambda Expressions",
        topics: [
          "Iterators: Input, Output, Forward, Bidirectional, Random Access",
          "STL Algorithms: std::sort, std::binary_search, std::find, std::reverse, std::accumulate",
          "Custom Comparators & Functors (Function Objects)",
          "Lambda Expressions in Modern C++ (Capture Lists, Syntax)",
        ],
      },
      {
        title: "Module 6: Exception Handling & File I/O",
        topics: [
          "Exception Handling: try, catch, throw, and Custom Exception Classes",
          "File Streams: ifstream, ofstream, fstream",
          "Binary File Read/Write Operations",
          "Smart Pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr)",
        ],
      },
    ],
    projects: [
      "Library Management System with Class Templates",
      "Snake Game using C++ Console Graphics",
      "Custom Memory Pool Allocator",
    ],
  },
  Java: {
    id: "Java",
    name: "Java (Core & Advanced)",
    badge: "Enterprise & Backend",
    duration: "8 - 10 Weeks",
    prerequisites: "Basic Programming Logic",
    description:
      "Comprehensive Java course covering Core Java OOPs, Multithreading, Collections Framework, JDBC, Servlets, and Enterprise Backend concepts.",
    overview:
      "Java powers enterprise software, Android apps, and cloud backend systems. This curriculum ranges from JDK/JVM fundamentals to Collections, Concurrency, Stream API, and Database Connectivity (JDBC).",
    modules: [
      {
        title: "Module 1: Java Basics & JVM Architecture",
        topics: [
          "Java Paradigm: Platform Independence, Bytecode, JRE vs JDK vs JVM",
          "JVM Architecture: ClassLoader, Memory Areas (Heap, Stack, Method Area), Execution Engine & Garbage Collection",
          "Primitive Data Types, Wrapper Classes, and Auto-boxing/Unboxing",
          "Operators, Control Flow, and Arrays",
        ],
      },
      {
        title: "Module 2: Object-Oriented Java",
        topics: [
          "Classes, Objects, Packages & Import Directives",
          "Access Modifiers (private, default, protected, public)",
          "Encapsulation, Inheritance, Polymorphism (Overloading & Overriding)",
          "Abstract Classes vs Interfaces (Default and Static Methods)",
          "Keyword Deep Dive: this, super, final, static, instanceof",
        ],
      },
      {
        title: "Module 3: Exception Handling & Strings",
        topics: [
          "Throwable Hierarchy: Checked vs Unchecked Exceptions",
          "try-catch-finally, Multiple Catches, Try-with-Resources",
          "Custom Exception Handling",
          "Immutable Strings (String) vs Mutable Strings (StringBuilder, StringBuffer)",
          "String Constant Pool (SCP) Interning Mechanism",
        ],
      },
      {
        title: "Module 4: Java Collections Framework & Generics",
        topics: [
          "Generics: Type Parameters, Wildcards (? extends T, ? super T)",
          "List Interface: ArrayList, LinkedList, Vector",
          "Set Interface: HashSet, LinkedHashSet, TreeSet",
          "Map Interface: HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap",
          "Comparable vs Comparator Interfaces",
        ],
      },
      {
        title: "Module 5: Java 8+ Features (Modern Java)",
        topics: [
          "Lambda Expressions and Functional Interfaces (Predicate, Function, Consumer, Supplier)",
          "Stream API: map, filter, reduce, collect, sorted, parallelStream",
          "Optional Class for Null Safety",
          "Date & Time API (java.time.*)",
        ],
      },
      {
        title: "Module 6: Multithreading & Concurrency",
        topics: [
          "Thread Lifecycle and Creation (Extending Thread vs Implementing Runnable)",
          "Thread Synchronization, Locks, and Deadlocks",
          "Inter-Thread Communication (wait(), notify(), notifyAll())",
          "Executor Framework, Thread Pools, Callable & Future",
        ],
      },
      {
        title: "Module 7: Database Connectivity (JDBC) & I/O",
        topics: [
          "Java I/O Streams (Byte Streams, Character Streams, Serialization)",
          "JDBC Architecture: Drivers, Connection, Statement, PreparedStatement, CallableStatement",
          "ResultSet Navigation and Batch Processing",
          "Transaction Management in JDBC",
        ],
      },
    ],
    projects: [
      "Employee Payroll Management System with JDBC & MySQL",
      "Chat Application using Java Socket Programming & Multithreading",
      "E-Commerce Cart Management with Java Stream API",
    ],
  },
  Python: {
    id: "Python",
    name: "Python Full Stack / Data Science Base",
    badge: "Versatile & High Demand",
    duration: "6 - 8 Weeks",
    prerequisites: "None",
    description:
      "Master Python programming from syntax basics to Data Structures, OOP, File Handling, Modules, Web Scraping, and Database Integration.",
    overview:
      "Python is favored for web development, automation, and AI/Data Science. This course covers everything from core syntax, built-in data structures, OOP, modules, exception handling to database integration and Flask/Django introduction.",
    modules: [
      {
        title: "Module 1: Python Fundamentals & Setup",
        topics: [
          "Installing Python & IDEs (VS Code, PyCharm, Jupyter Notebook)",
          "Python Interpreter & Execution Workflow",
          "Variables, Dynamic Typing, and Type Casting",
          "Input/Output Formatting (f-strings, .format())",
          "Operators: Arithmetic, Comparison, Logical, Bitwise, Membership (in), Identity (is)",
        ],
      },
      {
        title: "Module 2: Data Structures in Python",
        topics: [
          "Lists: Indexing, Slicing, Methods, and List Comprehensions",
          "Tuples: Immutability, Packing/Unpacking, Operations",
          "Sets: Uniqueness, Set Theory Operations (Union, Intersection, Difference)",
          "Dictionaries: Key-Value pairs, Methods, Dictionary Comprehensions",
        ],
      },
      {
        title: "Module 3: Control Flow & Functions",
        topics: [
          "Conditional Logic: if, elif, else",
          "Loops: for, while, range(), enumerate(), zip()",
          "Function Definitions, Positional vs Keyword Arguments, *args and **kwargs",
          "Lambda Functions, map(), filter(), reduce()",
          "Decorators, Generators, and yield Keyword",
        ],
      },
      {
        title: "Module 4: Object-Oriented Python",
        topics: [
          "Classes, Objects, and the self Parameter",
          "Constructors (__init__) and Destructors (__del__)",
          "Instance vs Class Variables and Methods (@classmethod, @staticmethod)",
          "Inheritance, Method Overriding, MRO (Method Resolution Order)",
          "Dunder (Magic) Methods (__str__, __len__, __add__)",
        ],
      },
      {
        title: "Module 5: Modules, Packages & File I/O",
        topics: [
          "Built-in Modules (os, sys, math, random, datetime, json)",
          "Creating Custom Modules and Packages (__init__.py)",
          "Virtual Environments (venv, pip, requirements.txt)",
          "File Handling: Reading/Writing Text, CSV, and JSON Files",
          "Exception Handling: try, except, else, finally, Raising Exceptions",
        ],
      },
      {
        title: "Module 6: Database & Web Fundamentals",
        topics: [
          "SQLite3 Integration & Execution of SQL queries in Python",
          "Connecting Python to MySQL / PostgreSQL with DB-API drivers",
          "REST API Consumption using requests Library",
          "Overview of Web Frameworks (Flask / Django introduction)",
        ],
      },
    ],
    projects: [
      "Automated Web Scraper & Weather Dashboard",
      "Expense Tracker CLI & GUI with SQLite",
      "RESTful API Service using Flask/FastAPI",
    ],
  },
  PHP: {
    id: "PHP",
    name: "PHP Web Development",
    badge: "Web & Server Side",
    duration: "4 - 6 Weeks",
    prerequisites: "HTML & CSS Basics",
    description:
      "Learn PHP server-side scripting, form processing, session management, OOP in PHP, and MySQL database integration.",
    overview:
      "PHP powers over 75% of the web. This course teaches web backend development, server handling, processing forms, authentication with sessions/cookies, OOP PHP, and writing CRUD applications connected to MySQL.",
    modules: [
      {
        title: "Module 1: PHP Introduction & Environment Setup",
        topics: [
          "How Web Servers Work (Apache, Nginx, XAMPP/WAMP)",
          "PHP Syntax, Embedding PHP in HTML",
          "Variables, Data Types, Scope, Constants",
          "Operators, Expressions, and Type Juggling",
        ],
      },
      {
        title: "Module 2: Control Structures & Arrays",
        topics: [
          "Conditional Logic: if, else, elseif, switch",
          "Loops: for, while, do-while, foreach",
          "Indexed Arrays, Associative Arrays, and Multidimensional Arrays",
          "Array Functions (array_push, array_merge, array_keys, in_array)",
        ],
      },
      {
        title: "Module 3: Functions, Forms & Web Security",
        topics: [
          "User-Defined Functions, Type Hinting, Return Types",
          "Superglobals: $_GET, $_POST, $_REQUEST, $_SERVER",
          "Form Validation & Sanitization (filter_var, htmlspecialchars)",
          "File Upload Handling ($_FILES) & Security Checks",
        ],
      },
      {
        title: "Module 4: State Management & File System",
        topics: [
          "Cookies: Setting, Reading, Deleting Cookies",
          "Sessions: Starting Session, Session Variables, Destroying Sessions",
          "File Reading and Writing (fopen, fread, file_get_contents, file_put_contents)",
          "Date and Time Operations in PHP",
        ],
      },
      {
        title: "Module 5: Object-Oriented PHP (OOP)",
        topics: [
          "Classes, Objects, Properties, and Methods",
          "Access Modifiers, Constructors (__construct), Destructors",
          "Inheritance, Abstract Classes, and Interfaces",
          "Namespaces and Autoloading with Composer (PSR-4)",
        ],
      },
      {
        title: "Module 6: Database Integration with MySQL (PDO)",
        topics: [
          "Connecting to Database using PDO (PHP Data Objects)",
          "Prepared Statements to Prevent SQL Injection",
          "Executing CRUD Operations (Create, Read, Update, Delete)",
          "User Authentication (Password Hashing password_hash() and Login Logic)",
        ],
      },
    ],
    projects: [
      "Dynamic Content Management System (CMS)",
      "Secure User Authentication & Profile Portal",
      "Online Product Catalog with Database Filtering",
    ],
  },
  Laravel: {
    id: "Laravel",
    name: "Laravel Framework",
    badge: "Modern PHP Framework",
    duration: "6 Weeks",
    prerequisites: "PHP & OOP Knowledge",
    description:
      "Build elegant, scalable web applications with the Laravel framework using MVC architecture, Eloquent ORM, Blade, and REST APIs.",
    overview:
      "Laravel provides expressive syntax for building modern web applications. Learn routing, middleware, Blade templates, migrations, Eloquent ORM, authentication systems, and building API backends.",
    modules: [
      {
        title: "Module 1: Laravel Basics & Architecture",
        topics: [
          "Composer Dependency Manager & Installing Laravel",
          "Laravel Directory Structure & Request Lifecycle",
          "Configuration & Environment Variables (.env)",
          "Artisan CLI Commands Overview",
        ],
      },
      {
        title: "Module 2: Routing, Controllers & Views",
        topics: [
          "Basic Routing, Route Parameters, Named Routes, Route Groups",
          "Controllers: Single Action, Resource Controllers",
          "Blade Templating Engine: Directives (@if, @foreach, @extends, @section)",
          "Component-based Views & Layout Master Files",
        ],
      },
      {
        title: "Module 3: Database, Migrations & Eloquent ORM",
        topics: [
          "Database Configuration & Database Migrations",
          "Seeding & Model Factories",
          "Eloquent ORM Basics: Models, Queries, CRUD",
          "Eloquent Relationships: One to One, One to Many, Many to Many",
        ],
      },
      {
        title: "Module 4: Forms, Validation & Middleware",
        topics: [
          "Handling Form Submissions & Request Object",
          "CSRF Protection (@csrf)",
          "Form Request Validation Rules & Custom Error Messages",
          "Middleware Concept, Global vs Route Middleware, Creating Custom Middleware",
        ],
      },
      {
        title: "Module 5: Authentication & REST APIs",
        topics: [
          "Laravel Breeze / Jetstream / Starter Kits Authentication",
          "API Controllers & API Routing (routes/api.php)",
          "Building RESTful APIs & API Resource Transformers",
          "API Token Authentication with Laravel Sanctum",
        ],
      },
    ],
    projects: [
      "Multi-user Blog & Media Publishing Platform",
      "E-Commerce Backend API with Order Management",
      "Task & Project Management Portal with User Roles",
    ],
  },
  DotNet: {
    id: "DotNet",
    name: ".NET Core / ASP.NET C#",
    badge: "Enterprise Full Stack",
    duration: "8 - 10 Weeks",
    prerequisites: "C# or C++ Fundamentals",
    description:
      "Build enterprise-grade web applications and APIs using C#, .NET Core, ASP.NET Core MVC, Entity Framework Core, and SQL Server.",
    overview:
      "The Microsoft .NET ecosystem is a cornerstone of corporate software engineering. This course covers C# syntax, Object-Oriented Design, ASP.NET Core Web APIs, MVC, Dependency Injection, and Entity Framework Core.",
    modules: [
      {
        title: "Module 1: C# Programming Fundamentals",
        topics: [
          ".NET Ecosystem (.NET SDK, CLR, CTS, CLI, Visual Studio / VS Code)",
          "C# Syntax, Primitive Types, Value Types vs Reference Types",
          "Control Flow, Arrays, Collections (List<T>, Dictionary<TKey, TValue>)",
          "Methods, Parameters (ref, out, params), Properties (Auto-implemented)",
        ],
      },
      {
        title: "Module 2: Object-Oriented C# & Advanced Features",
        topics: [
          "Classes, Objects, Structs, Enums, and Records",
          "Encapsulation, Inheritance, Interfaces, and Abstract Classes",
          "Delegates, Events, and Lambda Expressions",
          "LINQ (Language Integrated Query): Method Syntax & Query Syntax",
          "Asynchronous Programming (async / await, Task, Task<T>)",
        ],
      },
      {
        title: "Module 3: ASP.NET Core MVC Architecture",
        topics: [
          "ASP.NET Core Project Structure & Program.cs",
          "Dependency Injection (DI) Container & Service Lifetimes (Transient, Scoped, Singleton)",
          "Routing, Controllers, Action Results",
          "Razor Views, Tag Helpers, ViewComponents, Model Binding",
        ],
      },
      {
        title: "Module 4: Entity Framework Core (EF Core)",
        topics: [
          "ORM Concepts & Database-First vs Code-First Approach",
          "DbContext Configuration & Connection Strings",
          "EF Core Migrations & Database Updating",
          "LINQ to Entities: Querying, Filtering, Include (Eager Loading), Lazy Loading",
          "CRUD Operations & Transaction Handling",
        ],
      },
      {
        title: "Module 5: ASP.NET Core Web API & Security",
        topics: [
          "Building RESTful Web APIs with [ApiController]",
          "HTTP Verbs (GET, POST, PUT, DELETE, PATCH)",
          "Authentication & Authorization: JWT (JSON Web Tokens) & ASP.NET Core Identity",
          "Swagger / OpenAPI Integration for API Documentation",
        ],
      },
    ],
    projects: [
      "Enterprise Inventory & Billing Management System",
      "RESTful Web API Service with JWT Authentication & EF Core",
      "Healthcare Appointment Booking Web Application",
    ],
  },
  WebDesigning: {
    id: "WebDesigning",
    name: "Web Designing (HTML, CSS, JS, Bootstrap & React)",
    badge: "Frontend & UI/UX",
    duration: "8 - 10 Weeks",
    prerequisites: "Basic Computer Usage",
    description:
      "Design responsive, accessible, interactive web pages using HTML5, CSS3, Flexbox/Grid, JavaScript ES6+, Tailwind/Bootstrap, and React.",
    overview:
      "Modern Web Designing focuses on user interface (UI) and user experience (UX). You will master HTML5 semantics, CSS3 animations, responsive design, JavaScript DOM manipulation, modern CSS frameworks, and React basics.",
    modules: [
      {
        title: "Module 1: HTML5 (HyperText Markup Language)",
        topics: [
          "HTML Document Structure, Headings, Paragraphs, Formatting Tags",
          "Lists (Ordered, Unordered, Definition), Links & Anchor Tags",
          "Images, Audio, Video, and Multimedia Embedding",
          "Tables, Semantic HTML5 Elements (<header>, <nav>, <main>, <section>, <footer>)",
          "HTML Forms: Input Types, Attributes, Validation Controls",
        ],
      },
      {
        title: "Module 2: CSS3 (Cascading Style Sheets)",
        topics: [
          "CSS Syntax, Selectors (Basic, Pseudo-classes, Pseudo-elements), Specificity",
          "Colors, Typography, Box Model (Margin, Border, Padding, Content)",
          "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky)",
          "Flexbox Layout System (Container vs Item Properties)",
          "CSS Grid Layout (Grids, Areas, Gaps)",
          "CSS Transitions, Transforms, and Keyframe Animations",
          "Responsive Web Design: Media Queries & Mobile-First Design",
        ],
      },
      {
        title: "Module 3: JavaScript Core & DOM Manipulation",
        topics: [
          "JavaScript Variables (var, let, const), Data Types, Operators",
          "Functions, Arrow Functions, Scope & Hoisting",
          "DOM (Document Object Model) Selection, Content Manipulation, Attribute Changes",
          "Event Handling (Click, Input, Submit, Keyup, Event Bubbling)",
          "ES6+ Features: Destructuring, Spread/Rest Operator, Template Literals, Promises, Async/Await",
        ],
      },
      {
        title: "Module 4: Modern CSS Frameworks (Bootstrap & Tailwind CSS)",
        topics: [
          "Bootstrap 5 Grid System, Breakpoints, and Utility Classes",
          "Bootstrap UI Components: Navbar, Modal, Cards, Carousel, Accordions",
          "Tailwind CSS Utility-First Concept & Configuration Setup",
        ],
      },
      {
        title: "Module 5: Introduction to React.js",
        topics: [
          "React Library Overview & JSX Syntax",
          "Components (Functional Components) & Props",
          "State Management with useState Hook",
          "Side Effects with useEffect Hook",
          "Building Interactive Single Page Applications (SPA)",
        ],
      },
    ],
    projects: [
      "Pixel-Perfect Responsive Corporate Portfolio",
      "Interactive E-Commerce Product Landing Page with Filters",
      "React Task Dashboard with Drag-and-Drop / LocalStorage",
    ],
  },
  MySql: {
    id: "MySql",
    name: "MySQL Database",
    badge: "Relational Database",
    duration: "4 Weeks",
    prerequisites: "Basic Computer Knowledge",
    description:
      "Master relational database design, SQL querying, indexing, joins, transactions, views, triggers, and stored procedures in MySQL.",
    overview:
      "Database design is fundamental for any software developer. This MySQL curriculum guides you through relational concepts, normalization, query optimization, joins, indexing, and server administration.",
    modules: [
      {
        title: "Module 1: Relational Database Fundamentals",
        topics: [
          "RDBMS Concepts: Tables, Rows, Columns, Keys (Primary, Foreign, Candidate, Unique)",
          "Entity-Relationship (ER) Diagrams & Database Normalization (1NF, 2NF, 3NF, BCNF)",
          "MySQL Architecture, Workbench Installation & CLI Connection",
        ],
      },
      {
        title:
          "Module 2: Data Definition & Data Manipulation Language (DDL & DML)",
        topics: [
          "DDL Commands: CREATE, ALTER, DROP, TRUNCATE Databases and Tables",
          "Constraints: NOT NULL, UNIQUE, CHECK, DEFAULT, FOREIGN KEY (ON DELETE CASCADE)",
          "DML Commands: INSERT, UPDATE, DELETE Data",
        ],
      },
      {
        title: "Module 3: Data Query Language (DQL) & SQL Functions",
        topics: [
          "Selecting & Filtering: SELECT, WHERE, LIKE, IN, BETWEEN, ORDER BY, LIMIT",
          "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
          "Grouping Data: GROUP BY and HAVING Clauses",
          "Built-in Functions: String Functions, Date/Time Functions, Numeric Functions",
        ],
      },
      {
        title: "Module 4: Joins & Subqueries",
        topics: [
          "Inner Join, Left Join, Right Join, Cross Join, Self Join",
          "Subqueries: Single Row, Multi-Row, Correlated Subqueries",
          "Set Operations: UNION, UNION ALL",
        ],
      },
      {
        title:
          "Module 5: Advanced MySQL: Indexes, Transactions & Stored Programs",
        topics: [
          "Database Indexes: Clustered vs Non-Clustered Indexes, Performance Optimization",
          "ACID Properties & Transaction Control (COMMIT, ROLLBACK, SAVEPOINT)",
          "Database Views: Creating and Modifying Virtual Tables",
          "Stored Procedures & User Defined Functions (UDF)",
          "Triggers: BEFORE/AFTER INSERT, UPDATE, DELETE",
        ],
      },
    ],
    projects: [
      "E-Commerce Database Schema Design & Optimization",
      "Banking Transaction System with ACID Compliance",
      "Automated Audit Logging with Database Triggers",
    ],
  },
  MsSql: {
    id: "MsSql",
    name: "Microsoft SQL Server (T-SQL)",
    badge: "Enterprise RDBMS",
    duration: "4 Weeks",
    prerequisites: "Basic Database Logic",
    description:
      "Learn T-SQL scripting, SSMS, Window Functions, CTEs, Stored Procedures, Error Handling, and Query Tuning in MS SQL Server.",
    overview:
      "Microsoft SQL Server is widely used across corporations. This course covers Transact-SQL (T-SQL), SSMS, Common Table Expressions (CTEs), Window Functions, Index Tuning, and Administration.",
    modules: [
      {
        title: "Module 1: MS SQL Server Overview & SSMS Setup",
        topics: [
          "SQL Server Architecture & SQL Server Management Studio (SSMS)",
          "Data Types in T-SQL (VARCHAR, NVARCHAR, DATETIME2, DECIMAL, GUID)",
          "Creating Databases, Tables, and Key Constraints",
        ],
      },
      {
        title: "Module 2: T-SQL Queries, Joins & Grouping",
        topics: [
          "T-SQL Data Retrieval: SELECT TOP, OFFSET-FETCH, WHERE",
          "Multi-table Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS)",
          "Aggregation and Grouping (GROUP BY, HAVING, GROUPING SETS, CUBE, ROLLUP)",
        ],
      },
      {
        title: "Module 3: Advanced T-SQL & Analytical Functions",
        topics: [
          "Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), LEAD(), LAG()",
          "Common Table Expressions (CTEs) & Recursive CTEs",
          "PIVOT and UNPIVOT Operations",
          "Subqueries, Derived Tables, and APPLY (CROSS APPLY, OUTER APPLY) Operators",
        ],
      },
      {
        title: "Module 4: Programmability & Error Handling",
        topics: [
          "T-SQL Variables, Control Flow (IF...ELSE, WHILE)",
          "Stored Procedures with Input/Output Parameters",
          "Scalar and Table-Valued User Defined Functions (UDFs)",
          "Exception Handling using TRY...CATCH Block and RAISERROR / THROW",
          "DML Triggers & DDL Triggers",
        ],
      },
      {
        title: "Module 5: Performance Tuning & Security",
        topics: [
          "Indexes: Clustered, Non-Clustered, Filtered Indexes, Execution Plans Analysis",
          "Database Transactions & Isolation Levels (READ COMMITTED, SERIALIZABLE, SNAPSHOT)",
          "Security: Roles, Users, Permissions (GRANT, REVOKE, DENY)",
        ],
      },
    ],
    projects: [
      "Financial Data Warehouse Query Engine with Window Functions",
      "Sales Reporting Engine with CTEs and PIVOT",
      "High-Performance Stored Procedure Package for Order Processing",
    ],
  },
  Oracle: {
    id: "Oracle",
    name: "Oracle (SQL & PL/SQL)",
    badge: "Enterprise Database & PL/SQL",
    duration: "6 Weeks",
    prerequisites: "Relational Database Basics",
    description:
      "Master Oracle SQL and PL/SQL programming including Cursors, Packages, Exceptions, Triggers, Dynamic SQL, and Database Performance.",
    overview:
      "Oracle Database powers mission-critical applications globally. Learn standard Oracle SQL alongside procedural extension PL/SQL (Variables, Control Structures, Cursors, Packages, Triggers, and Exceptions).",
    modules: [
      {
        title: "Module 1: Oracle SQL Fundamentals",
        topics: [
          "Oracle Database Architecture Overview & SQL Developer / SQL*Plus",
          "Data Types, Constraints (Primary, Foreign Key, Check, Unique)",
          "SQL Operators, Functions (NVL, NVL2, COALESCE, DECODE, CASE)",
          "Oracle Joins & ANSI Standard Joins",
        ],
      },
      {
        title: "Module 2: Advanced Oracle SQL",
        topics: [
          "Hierarchical Queries (CONNECT BY PRIOR, START WITH)",
          "Subqueries, Inline Views, Correlation Queries",
          "Oracle Analytic Functions (OVER(), PARTITION BY)",
          "Managing Database Objects: Tables, Sequences, Synonyms, Views, Indexes",
        ],
      },
      {
        title: "Module 3: PL/SQL Basics & Control Structures",
        topics: [
          "PL/SQL Block Structure (DECLARE, BEGIN, EXCEPTION, END)",
          "Variables, Constants, Datatypes (%TYPE, %ROWTYPE)",
          "Conditional Logic & Loops (SIMPLE LOOP, WHILE LOOP, FOR LOOP)",
        ],
      },
      {
        title: "Module 4: Cursors & Exception Handling in PL/SQL",
        topics: [
          "Implicit Cursors vs Explicit Cursors (OPEN, FETCH, CLOSE)",
          "Cursor FOR Loops & Parameterized Cursors",
          "Predefined Exceptions, User-defined Exceptions, PRAGMA EXCEPTION_INIT",
        ],
      },
      {
        title: "Module 5: Stored Subprograms, Packages & Triggers",
        topics: [
          "Stored Procedures and Functions (IN, OUT, IN OUT parameters)",
          "PL/SQL Packages: Specification & Body",
          "Database Triggers: Statement vs Row Level, BEFORE, AFTER, INSTEAD OF",
          "Dynamic SQL with EXECUTE IMMEDIATE",
        ],
      },
    ],
    projects: [
      "Oracle Enterprise HR Database & Payroll PL/SQL Package",
      "Automated Data Migration and Validation Engine",
      "Audit Trail & Security Trigger Suite",
    ],
  },
  MSOffice: {
    id: "MSOffice",
    name: "MS-Office Productivity Suite",
    badge: "Office Automation",
    duration: "4 Weeks",
    prerequisites: "None",
    description:
      "Gain full proficiency in Microsoft Word, Excel, PowerPoint, Access, and Outlook for business and office management.",
    overview:
      "Essential digital literacy for any workplace. Master document creation in MS Word, data analysis and VLOOKUP/Pivot Tables in MS Excel, high-impact presentations in PowerPoint, and database basics in MS Access.",
    modules: [
      {
        title: "Module 1: Microsoft Word (Document Formatting & Publishing)",
        topics: [
          "Ribbon Interface, Document Creation, Text Editing & Formatting",
          "Paragraph Styles, Line Spacing, Indentation, Bullets & Numbering",
          "Page Setup, Headers, Footers, Page Numbers, Watermarks",
          "Tables, Shapes, SmartArt, and Image Formatting",
          "Mail Merge: Creating Form Letters, Envelopes, and Labels",
          "Proofing Tools: Spelling/Grammar Check, Track Changes, Comments",
        ],
      },
      {
        title:
          "Module 2: Microsoft Excel (Data Analysis & Spreadsheet Mastery)",
        topics: [
          "Worksheet Layout, Data Input, Cell Formatting, Data Types",
          "Formulas & Operators: Relative, Absolute ($), and Mixed Referencing",
          "Mathematical, Logical & Text Functions (SUM, AVERAGE, COUNT, IF, AND, OR, CONCAT)",
          "Lookup & Reference Functions (VLOOKUP, HLOOKUP, INDEX & MATCH, XLOOKUP)",
          "Data Analysis: Sorting, Multi-level Filtering, Conditional Formatting",
          "Pivot Tables & Pivot Charts for Data Summarization",
          "Chart Creation (Bar, Line, Pie, Combination Charts) & Customization",
        ],
      },
      {
        title: "Module 3: Microsoft PowerPoint (Presentation Design)",
        topics: [
          "Slide Master & Template Customization",
          "Adding Text, Shapes, SmartArt, Images, Audio, and Video",
          "Slide Transitions and Object Animations",
          "Presenter View, Rehearse Timings, Exporting Presentations to PDF/Video",
        ],
      },
      {
        title: "Module 4: Microsoft Access & Outlook Basics",
        topics: [
          "Access: Tables, Form Creation, Simple Queries, Report Generation",
          "Outlook: Email Management, Calendar Scheduling, Contacts & Task Management",
        ],
      },
    ],
    projects: [
      "Automated Business Financial Dashboard in Excel",
      "Corporate Mail Merge Campaign with MS Word & Excel Data",
      "Professional Executive Presentation Deck",
    ],
  },
  DTP: {
    id: "DTP",
    name: "DTP (Desktop Publishing)",
    badge: "Graphic Design & Publishing",
    duration: "4 - 6 Weeks",
    prerequisites: "Basic Computer Skills",
    description:
      "Learn Desktop Publishing tools including Adobe Photoshop, PageMaker / InDesign, and CorelDRAW for printing and digital publishing.",
    overview:
      "Desktop Publishing (DTP) covers designing print and media materials. Master graphic editing in Adobe Photoshop, vector artwork in CorelDRAW, and layout publishing in Adobe InDesign / PageMaker.",
    modules: [
      {
        title: "Module 1: Fundamentals of Design & Layout",
        topics: [
          "Understanding Resolution (DPI vs PPI), Color Modes (RGB vs CMYK)",
          "Typography Basics: Fonts, kerning, leading, tracking",
          "Paper Sizes (A4, A3, Flex, Letter) & Print Bleed / Margin Settings",
        ],
      },
      {
        title: "Module 2: Adobe Photoshop (Image Editing & Manipulation)",
        topics: [
          "Photoshop Tools Interface: Selection tools (Lasso, Marquee, Magic Wand, Pen Tool)",
          "Layer Management: Blending Modes, Layer Styles, Masking",
          "Photo Editing: Retouching, Healing Brush, Clone Stamp, Color Correction",
          "Filters, Text Effects, Banner & Poster Design",
        ],
      },
      {
        title: "Module 3: CorelDRAW (Vector Graphic Design)",
        topics: [
          "Vector Graphics vs Raster Graphics",
          "Drawing & Shaping Tools: Bezier, Pen Tool, Shape Tool, Node Manipulation",
          "Color Palette Management, Gradients, Contour, Extrude, Drop Shadow",
          "Designing Logos, Visiting Cards, Letterheads, Pamphlets, and Flex Banners",
        ],
      },
      {
        title: "Module 4: PageMaker / Adobe InDesign (Document Publishing)",
        topics: [
          "Setting up Master Pages, Page Layouts, Columns, and Margins",
          "Importing & Formatting Text from MS Word",
          "Flowing Text across multiple pages & Threading",
          "Book, Magazine, Brochure Layout & PDF Print Preparation",
        ],
      },
    ],
    projects: [
      "Complete Brand Identity Package (Logo, Business Card, Letterhead)",
      "High-Resolution Event Banner & Brochure Design",
      "Multi-page Magazine / Booklet Publishing Layout",
    ],
  },
  LiveProjects: {
    id: "LiveProjects",
    name: "Live Projects & Industry Internship",
    badge: "Practical Experience",
    duration: "4 - 8 Weeks",
    prerequisites: "Any Programming or Tech Course Completion",
    description:
      "Gain real-world experience by working on real client software projects, Agile development lifecycle, Git version control, deployment, and testing.",
    overview:
      "Apply your learning to live client and enterprise projects. Work under expert faculty guidance using industry standard tools (Git, GitHub, Jira, CI/CD, Cloud Hosting).",
    modules: [
      {
        title: "Module 1: Software Development Life Cycle (SDLC) & Agile",
        topics: [
          "SDLC Models: Waterfall vs Agile / Scrum Methodology",
          "Requirement Gathering, System Architecture & Database Design",
          "Sprint Planning, Task Estimation & Jira / Trello Workflow",
        ],
      },
      {
        title: "Module 2: Version Control with Git & GitHub",
        topics: [
          "Git Basics: Repositories, Commits, Branching, Merging, Stashing",
          "Collaborative Workflow: Pull Requests, Code Reviews, Resolving Merge Conflicts",
          "GitHub Actions / CI-CD basics overview",
        ],
      },
      {
        title: "Module 3: Real-world Full Stack Development",
        topics: [
          "Frontend & Backend Integration",
          "API Integration & Authentication Implementation",
          "Database Performance Optimization & Security Hardening",
        ],
      },
      {
        title: "Module 4: Software Testing, Deployment & Project Viva",
        topics: [
          "Unit Testing & Integration Testing Basics",
          "Deployment to Cloud Platforms (Vercel, AWS, Azure, Shared Hosting)",
          "Domain Mapping, SSL Certificate Setup, and Environment Variables Security",
          "Project Documentation, Presentation, and Interview Prep",
        ],
      },
    ],
    projects: [
      "Custom Client E-Commerce Portal",
      "Hospital / School Management System",
      "Live Software SaaS Product Deployment",
    ],
  },
};
