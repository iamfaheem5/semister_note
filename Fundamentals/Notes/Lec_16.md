# Outline

- Data
- Information
- File Based Systems
- Disadvantages of File Based System
- Database
- Database Management System (DBMS)
- Applications of Database Systems
- Advantages and Disadvantages of DBMS
- Difference between File Based System and DBMS

# Data

- Data is a raw and unorganised fact that required to be processed to make it meaningful.
- It can be in any form like text, number, picture, measurements, and bytes.
- Example : Students

|  Name | Roll | Semester | CGPA  |
| --- | --- | --- | --- |
|  X | 001 | 4^{th} | 3.4  |
|  Y | 002 | 4^{th} | 3.5  |
|  Z | 003 | 4^{th} | 3.4  |
|  A | 004 | 4^{th} | 3.0  |
|  B | 005 | 4^{th} | 3.6  |

# Information

- Information is a set of data which is processed in a meaningful way according to the given requirements.
- It is processed, structured or presented in a given context to make it meaningful and useful.

- Example :
- Find out the list of students whose CGPA&gt;=3.5
- Find out the roll of the student with highest CGPA

# File Based Systems

- The predecessor to the DBMS was the file-based system
- Basically a way of arranging the files in a storage medium like a hard disk
- Organizes the files and helps in the retrieval of files when they are required
- Consist of different files which are grouped into directories
- The directories further contain other folders and files
- Performs basic operations like management, file naming, giving access rules, etc.
- Example: NTFS(New Technology File System), EXT(Extended File System)

# Disadvantages of File Based System

## Slow access time –
Direct access of files is very difficult and one needs to know the entire hierarchy of folders to get to a specific file. This involves a lot of time.

## Presence of redundant data –
The same data can be present in two or more files which takes up more disc space.

## Problem in Concurrent Access –
When a number of users operates on a common data in database at the same time then anomalies arise, due to lack of concurrency control.

## Unauthorized Access –
Anyone who gets access to the file can read or modify the data.

## Difficulty in recovery of corrupt data –
Recovery or backup of lost and corrupt data is nearly impossible in case of File Processing System.

## Data Integrity Problems –
The data present in the database should be consistent and correct. To achieve this, the data should must satisfy certain constraints.

# Database

- Database is a collection of related data that represent some real world entities
- It's a systematic collection of data
- The main feature of data in a database are :
- It must be well organised
- It is related
- It is accessible in a logical order without any difficulties
- Example :
- University database
- Library database

# Database Management System (DBMS)

- A Database Management System (DBMS) is software that allows users to create, manage, and interact with databases efficiently.
- It provides an interface for storing, retrieving, updating, and organizing data while ensuring security, consistency, and integrity.
- It also provide security and protection to the database.

# Key Features of a DBMS

- Data Storage &amp; Retrieval – Stores large amounts of data and allows efficient access.
- Data Security – Controls access to sensitive information using authentication and authorization.
- Data Integrity – Ensures accuracy and consistency using constraints and rules.
- Concurrency Control – Allows multiple users to access data simultaneously without conflicts.
- Backup &amp; Recovery – Protects data from failures and allows restoration.
- Query Processing – Supports structured query languages like SQL for data manipulation.

# Types of DBMS

Relational DBMS (RDBMS) – Uses structured tables with relationships (e.g., MySQL, PostgreSQL, Oracle).
NoSQL DBMS – Stores unstructured or semi-structured data (e.g., MongoDB, Cassandra).
Hierarchical DBMS – Uses a tree-like structure (e.g., IBM Information Management System).
Network DBMS – Uses a graph structure with multiple relationships (e.g., IDS).
Object-Oriented DBMS (OODBMS) – Stores data as objects (e.g., db4o).

# Examples of DBMS

- MySQL (Open-source RDBMS)
- PostgreSQL (Advanced RDBMS)
- Oracle DB (Enterprise-level RDBMS)
- Microsoft SQL Server (Popular for Windows-based systems)
- MongoDB (NoSQL, document-based database)

# Applications of Database Systems

![img-0.jpeg](img-0.jpeg)

# Advantages of DBMS

- Should be able to store any kind of data in a database.
- Should be able to support ACID (atomacity, consistency, Isolation, Durability)
- It allows more than one user to access the same database at the same time.
- Backup and recovery are the two main methods that allow users to protect their data from damage or loss.
- It provides multiple views for different users in one organisation.
- It follows the concept of normalization to minimize the redundancy of a relation.
- It provides users query language, using which they can easily insert, update, retrieve and delete the data in a database.

# Disadvantages of DBMS

## Complexity:
- The provision of the functionality that is expected of a good DBMS makes the DBMS an extremely complex piece of software. Database designers, developers, database administrators and end-users must understand this functionality to take full advantage of it.

## Size:
- The functionality of DBMS makes use of a large piece of software which occupies megabytes of disk space.

## Performance:
- Performance may not run as fast as desired.

## Higher impact of a failure:
- The centralization of resources increases the vulnerability of the system because all users and applications rely on the availability of DBMS, the failure of any component can bring operation to halt

## Cost of DBMS:
- The cost of DBMS varies significantly depending on the environment and functionality provided. There is also the recurrent annual maintenance cost.

# File System vs DBMS

|  SL | File System | DBMS  |
| --- | --- | --- |
|  1 | File system is basically a way of arranging the files in a storage medium like hard disk. | DBMS is a software that manages the collection of related data.  |
|  2 | Redundant data can be represent in file system. | There is no redundant data.  |
|  3 | It does not provide backup and recovery of data if it is lost. | It provides backup and recovery if it is lost.  |
|  4 | There is no efficient query processing in file system. | Efficient query processing is there in DBMS.  |
|  5 | There is less data consistency in file system. | There is more data consistency in DBMS  |
|  6 | File system provides less security in comparison to DBMS. | DBMS has more security mechanism as compare to file system.  |
|  7 | File system provides the detail of the data representation and storage of data. | DBMS provides the abstract view of data that hide the details.  |
|  8 | In file system concurrent access has many problems. | DBMS take care of concurrent access of data efficiently.  |

Thank You