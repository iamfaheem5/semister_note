# Programming In C

Control Statements

Objectives of these slides:
- to introduce the main kinds of C control flow

# Control Structures

- There may be situations where the programmer requires to alter normal flow of execution of program or to perform the same operation a no. of times.
- Various control statements supported by c are-
- Decision control statements
- Loop control statements

# Decision Control Statements

- Decision control statements alter the normal sequential execution of the statements of the program depending upon the test condition to be carried out at a particular point in program.
- Decision control statements supported by c are:-
- if statement
- if-else statement
- Else if Ladder
- Nested If
- switch statement

# Decision Control Statements

## if statement

- Most simple and powerful decision control statement.
- It executes a statement or block of statements only if the condition is true.

- Syntax: if (condition) if (condition)
{
OR
{
statement (s); statement 1;
}
statement 2;
Next statement; }
statement 3;
}

- In above syntax: if condition is true only then the statements within the block are executed otherwise next statement in sequence is executed.

# Flowchart

![img-0.jpeg](img-0.jpeg)

/* Program to check whether a no. is even */
# include<stdio.h>
void main()
{
int num;
printf("enter the number");
scanf("%d",&amp;num)
if(num%2==0)
{
printf("\n Number is even");
}
printf("End of program");
}

# if – else statement

- In case of if statement, the block of statements is executed only when the condition is true otherwise the control is transferred to the next statement following if block.
- But if specific statements are to be executed in both cases (either condition is true or false) then if – else statement is used.
- In if – else statement a block of statements are executed if the condition is true but a different block of statements is executed when the condition is false.
- Syntax: if (condition)

{
statement 1;
statement 2;
}
else
{
statement 3;
}

![img-1.jpeg](img-1.jpeg)

Exercise: WAP to check whether a given no. is even or odd?

## Nested if – else statement

- When an entire if-else is enclosed within the body of if statement or/and in the body of else statement, it is known as nested if-else statement.
- The ways of representing nested if –else are-

|  if (condition1) | if (condition1) | → else | if (condition1)  |
| --- | --- | --- | --- |
|  { | { | { | statement 1;  |
|  if (condition2) | if (condition2) | statement 3; | else  |
|  statement 1; | statement 1; | else | {  |
|  else | else | statement 4; | if (condition2)  |
|  statement 2; | statement 2; | } | statement 2;  |
|  } | } |  | else  |
|  else |  |  | statement 3;  |
|  statement 3; |  |  | }  |

# If- else- if ladder

- In a program involving multiple conditions, the nested if else statements makes the program very difficult to write and understand if nested more deeply.
- For this, we use if-else-if ladder.
- Syntax: if (condition1)
- statement1;
- else if(condition2)
- statement2;
- else if(condition3)
- statement 3;
- else
- default statement;

![img-2.jpeg](img-2.jpeg)