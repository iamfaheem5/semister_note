# Outline

- Keywords
- Identifiers
- Tokens
- Constants
- Data Types
- Variables
- Declaring and Initializing Variables
- Input/Output in C
- Formatting Output

# C Keywords

- Keywords are predefined, reserved words used in programming that have special meanings to the compiler.
- Keywords are part of the syntax and they cannot be used as an identifier.
- There are total 32 keywords in C programming language.
- Keywords are sometimes also called reserved words.
- For example:
- int money;
- Here, int is a keyword that indicates money is a variable of type int (integer).

As C is a case sensitive language, all keywords must be written in lowercase.

# C Keywords List cont..

|  C Keywords  |   |   |   |
| --- | --- | --- | --- |
|  auto | double | int | struct  |
|  break | else | long | switch  |
|  case | enum | register | typedef  |
|  char | extern | return | union  |
|  continue | for | signed | void  |
|  do | if | static | while  |
|  default | goto | sizeof | volatile  |
|  const | float | short | unsigned  |

# C Identifiers

- Identifier refers to name given to entities such as variables, functions, structures etc.
- Identifiers must be unique.
- They are created to give a unique name to an entity to identify it during the execution of the program.
- For example:
- int money;
- double accountBalance;
- Here, money and accountBalance are identifiers.
- Also remember, identifier names must be different from keywords.
- You cannot use int as an identifier because int is a keyword.

C Identifiers cont..

Rules for naming identifiers

- A valid identifier can have letters (both uppercase and lowercase letters), digits and underscores.
- The first letter of an identifier should be either a letter or an underscore.
- You cannot use keywords like int, while etc. as identifiers.
- No space is allowed in identifiers.
- There is no rule on how long an identifier can be. However, you may run into problems in some compilers if the identifier is longer than 31 characters.
- You can choose any name as an identifier if you follow the above rule, however, give meaningful names to identifiers that make sense.

# C Identifiers cont..

Check which of the following identifiers are valid:

- Sum01 – Valid
- _name – Valid
- 01_name – Invalid
- Simple interest – Invalid
- Test_ide_001 – Valid
- int - Invalid
- Int - Valid

# Tokens

- Tokens in C is the most important element to be used in creating a program in C.
- We can define the token as the smallest individual element in C.
- For `example`, we cannot create a sentence without using words; similarly, we cannot create a program in C without using tokens in C.
- Therefore, we can say that tokens in C is the building block or the basic component for creating a program in C language.

# Tokens cont..

## Classifications of Tokens :

- Keywords in C
- int, float, char etc..
- Identifiers in C
- Rahim, karim, ram etc...
- Strings in C
- “ABC”, “A” etc...
- White space
- Blank space, tab, \n etc..

- Operators in C
- +, -, / etc...
- Constant in C
- 5, 7.5, ‘A’ etc..
- Special Characters in C
- (, ), {, }, ; etc...

# C Constants and Literals

- A constant is fixed a value, which cannot change the meaning of value during program execution. These fixed values are also called literals.

![img-0.jpeg](img-0.jpeg)

# Numeric Constants – Integer Constants

- A sequence of digits without decimal point or exponential part (or both). i.e -5, 10, -1743 etc.
- Rules for writing integer constants:
- Must have at least one digit without decimal point. 5, 7, -9 etc
- Commas and blank space are not allowed. 7,000, 1 00 00 etc are not allowed.
- Integer can be positive (+) or negative (-). Default sign is +

# Numeric Constants – Integer Constants

- There are three representations of integer constants:
- Decimal Integer Constant (Base 10)
- Digit range 0 to 9
- Example: 347, 19, 158 etc
- Octal Integer Constant (Base 8)
- Digit range 0 to 7
- Identifying by a leading 0
- Example: 0347, 0546 etc.
- Hexadecimal Integer Constant (Base 16)
- Digit range 0 to 9 and A to F for 10 to 15
- Identifying by leading 0x or 0X
- Example: 0x125A, 0x175 etc.

# Numeric Constants – Floating Point Constants

- A floating-point literal is a numeric literal that has either a fractional form or an exponent form.

- For example:
- -2.0
- 0.0000234
- -0.22E-5
- Note: E-5 = 10-5

# Character – Single Character Constants

- It contains single character enclosed in single quotation mark ('').
- The character may be a alphabet, digit or special characters.
- Example: ‘a’, ‘A’, ‘9’, ‘@’, ‘$’ etc.

# Character – String Constants

- It contains any number of characters enclosed in double quote (““).
- Example: “A”, “a” etc..

# Data Types

- Data type is a keyword used to identify type of data.
- In general every programming language is containing three categories of data types. They are:
- Fundamental or primitive data types
- Derived data types
- User defined data types

![img-1.jpeg](img-1.jpeg)

# Data Types cont..

## Fundamental or Primitive Data Types :

- These are the data types whose variable can hold maximum one value at a time, in C language it can be achieve by int, float, double, char.

# Data Types cont..

## Integers

- Integers are whole numbers that can have both zero, positive and negative values but no decimal values.
- For example, 0, -5, 10
- We can use int for declaring an integer variable.

## float and double

- float and double are used to hold real numbers.
- In C, floating-point numbers can also be represented in exponential.
- For example,
- float normalizationFactor = 22.442e2;

# Data Types cont..

## Char

- Keyword char is used for declaring character type variables.
- For example,
- char test = 'h';
- The size of the character variable is 1 byte.

## void

- void is an incomplete type.
- It means "nothing" or "no type".
- You can think of void as absent.
- For example, if a function is not returning anything, its return type should be void.

Note that, you cannot create variables of void type.

# Data Types cont..

## Derived data types

- These data type are derived from fundamental data type.
- Variables of derived data type allow us to store multiple values of same type in one variable but never allows to store multiple values of different types.
- These are the data type whose variable can hold more than one value of similar type.
- In C language it can be achieve by array, functions, pointer

## Example

```c
int a[] = {10,20,30}; // valid
int b[] = {100, 'A', "ABC"}; // invalid
```

# Data Types cont..

## User defined data types

- User defined data types related variables allows us to store multiple values either of same type or different type or both.
- This is a data type whose variable can hold more than one value of dissimilar type, in C language it is achieved by structure, union, enum etc..

## Syntax

```c
struct emp
{
int id;
char ename[10];
float sai;
} ;

# Data Type Modifiers

- In c language Data Type Modifiers are keywords used to change the properties of current properties of data type.
- Data type modifiers are classified into following types.
- Long
- Short
- Unsigned
- signed
- Modifiers are prefixed with basic data types to modify (either increase or decrease) the amount of storage space allocated to a variable.
- For example, storage space for int data type is 4 byte for 32 bit processor.
- We can increase the range by using long int which is 8 byte.
- We can decrease the range by using short int which is 2 byte.

# Data Type Modifiers cont..

## long:

- This can be used to increased size of the current data type to 2 more bytes, which can be applied on int or double data types.
- For example int occupy 2 byte of memory if we use long with integer variable then it occupy 4 byte of memory.

![img-2.jpeg](img-2.jpeg)

![img-3.jpeg](img-3.jpeg)

# Data Type Modifiers cont..

## short

In general int data type occupies different memory spaces for a different operating system; to allocate fixed memory space short keyword can be used.

## Syntax

short int a; --&gt; occupies 2 bytes of memory space in every operating system.

# Data Type Modifiers cont..

## unsigned

This keyword can be used to make the accepting values of a data type is positive data type.

### Syntax

```c
unsigned int a =100;    // right
unsigned int a=-100;    // wrong
```

# Data Type Modifiers cont..

## Signed

This keyword accepts both negative or positive value and this is default properties or data type modifiers for every data type.

## Example

```text
int a=10;     // right
int a=-10;     // right
signed int a=10; // right
signed int a=-10;     // right
```

# Data Types cont..

## PRIMARY DATA TYPES

### Integral Type

|  Integer |   | Character  |   |
| --- | --- | --- | --- |
|  signed | unsigned type | char | signed char  |
|  int | unsigned int | unsigned short int | unsigned char  |
|  short int | unsigned short int | unsigned long int |   |
|  long int |  |  |   |

### Floating point Type

|  float | double | Long double  |
| --- | --- | --- |

void

# Data Types cont..

Table 2.8 Size and Range of Data Types on a 16-bit Machine

|  Type | Size (bits) | Range  |
| --- | --- | --- |
|  char or signed char | 8 | –128 to 127  |
|  unsigned char | 8 | 0 to 255  |
|  int or signed int | 16 | –32,768 to 32,767  |
|  unsigned int | 16 | 0 to 65535  |
|  short int or |  |   |
|  signed short int | 8 | –128 to 127  |
|  unsigned short int | 8 | 0 to 255  |
|  long int or |  |   |
|  signed long int | 32 | –2,147,483,648 to 2,147,483,647  |
|  unsigned long int | 32 | 0 to 4,294,967,295  |
|  float | 32 | 3.4E – 38 to 3.4E + 38  |
|  double | 64 | 1.7E – 308 to 1.7E + 308  |
|  long double | 80 | 3.4E – 4932 to 1.1E + 4932  |

# Program to Show Size of Data Types

## C Program to Find Size of Data Types

```c
#include<stdio.h>
int main()
{
printf("Size of short is %ld bytes\n", sizeof(short));
printf("Size of int is %ld bytes\n", sizeof(int));
printf("Size of long is %ld bytes\n", sizeof(long));

printf("Size of float is %ld bytes\n", sizeof(float));
printf("Size of double is %ld bytes\n", sizeof(double));
printf("Size of long double is %ld bytes\n", sizeof(long double));

printf("Size of char is %ld bytes\n", sizeof(char));
printf("Size of void is %ld bytes\n", sizeof(void));
return 0;
}
```</stdio.h>

# C Variables

- In programming, a variable is a container (storage area) to hold data.
- To indicate the storage area, each variable should be given a unique name (identifier).
- Variable names are just the symbolic representation of a memory location.
- For example:
- int playerScore = 95;
- Here, playerScore is a variable of int type.
- Here, the variable is assigned an integer value 95.

C Variables cont..

Rules for naming a variable

- A variable name can only have letters (both uppercase and lowercase letters), digits and underscore.
- The first letter of a variable should be either a letter or an underscore.
- There is no rule on how long a variable name (identifier) can be. However, you may run into problems in some compilers if the variable name is longer than 31 characters.
- Note: You should always try to give meaningful names to variables. For example: firstName is a better variable name than fn.

# Declaration of Variable

- Variables are declared at the beginning of the body but after the main.
- All variables must be declared before they can appear in executable statements.
- The syntax for declaring a variable is as follow: Data-type v1,v2,……vn;
- v1, v2,……vn are the names of variables.
- For example, valid declarations are
- int count;
- int number,total;
- float ratio;

# Difference between Variables and Symbolic Names

- A variable may be used to store data value.
- A variable may take different values at different times during execution of a program. Variables need to declare at the beginning of the body but after the main.
- Symbolic names are unique constants.
- These constants may appear in a number of place in the program.
- Symbolic names need to be defined at the beginning of a program.

# Initialization of Variable

- The process of giving initial values to variables is called initialization.
- Example of initialization :
- int a=100;
- char name = ‘x’;
- float number =75.84 ;

# Scope of Variables

Scope: The region of the program where a variable is accessible.

Local Variable: Declared inside a function or block; accessible only within that block.

Global Variable: Declared outside all functions; accessible throughout the program.

int globalVar = 100; // Global variable

void function() {
int localVar = 50; // Local variable
printf("%d\n", localVar); // Accessible
}

// localVar is not accessible here

Thank You

![img-4.jpeg](img-4.jpeg)