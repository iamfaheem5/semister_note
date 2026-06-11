# Outline

- Concept of bit and electronic representation of bits
- Number System
- Number Base Conversion
- Binary Addition and Subtraction
- Hexadecimal Addition and Subtraction
- Subtraction using 1's and 2's Complement

# What is a Bit?

- A bit (short for binary digit) is the smallest unit of data in a computer system.
- A bit can have one of two possible values: 0 or 1.
- These values represent the binary states off and on, respectively.

# How Does a Bit Represent Information?

- Bits are used to represent all kinds of data in a computer, from numbers to characters to more complex structures.
- In a binary system, the value of each bit represents an increasing power of 2, depending on its position:
- Example: 101 in binary is equal to $1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 5$ in decimal.

# Physical Representation of Bits in Electronics

## Voltage Levels:
- A 0 bit could be represented by a low voltage (e.g., 0 volts).
- A 1 bit could be represented by a high voltage (e.g., 3.3V or 5V, depending on the system).

## Transistors and Logic Gates:
- Modern digital circuits rely on transistors and logic gates (AND, OR, NOT, XOR, etc.) to manipulate these bits.
- A transistor works as a switch that can either allow current to pass through (representing 1) or block the current (representing 0).
- Example: A transistor in a logic circuit can switch between two states, which in turn corresponds to the 0 and 1 of the binary system.

# Physical Representation of Bits in Electronics cont..

## Magnetic Storage:
- In magnetic storage devices (like hard drives), bits are represented by tiny magnetic fields.
- A magnetic field pointing in one direction could represent a 0, while the opposite direction could represent a 1.

## Memory Cells:
- In RAM (Random Access Memory), bits are stored using tiny capacitors.
- A capacitor either holds charge (representing 1) or doesn't hold charge (representing 0).
- In Flash memory, bits are stored in floating-gate transistors, where the presence or absence of charge represents the bit value.

# Representation of Larger Units Using Bits

Byte: A group of 8 bits is called a byte. For example, 10110101 is a byte that can represent a number or a character.

Word: Typically 16 bits (2 bytes), though the size can vary depending on the architecture of the system (e.g., 32-bit, 64-bit).

Double Word: A 32-bit (4-byte) data unit, or DWORD.

# Number System

- A number system is defined as a system of writing to express numbers.
- It is the mathematical notation for representing numbers of a given set by using digits or other symbols in a consistent manner.

# Types of Number System

There are various types of number systems in mathematics. The four most common number system types are:

- Decimal number system (Base- 10)
- Binary number system (Base- 2)
- Octal number system (Base-8)
- Hexadecimal number system (Base- 16)

# Binary Number System

- The base 2 number system is also known as the *Binary number system* wherein, only two binary digits exist, i.e., 0 and 1.
- Specifically, the usual base-2 is a radix of 2.
- Each digit is known as a bit.
- A four-bit collection (1101) is known as a nibble, and a collection of eight bits (11001010) is known as a byte.
- Example: $(10100)_2, (11011)_2, (11001)_2, (000101)_2, (011010)_2$

# Decimal Number System

- The decimal number system has a base of 10 because it uses ten digits from 0 to 9.
- In the decimal number system, the positions successive to the left of the decimal point represent units, tens, hundreds, thousands and so on.
- This system is expressed in *decimal numbers*.
- Every position shows a particular power of the base (10).

- The decimal number 1457 consists of the digit 7 in the units position, 5 in the tens place, 4 in the hundreds position, and 1 in the thousands place whose value can be written as:

$$
\begin{array}{l}
(1 \times 10^{3}) + (4 \times 10^{2}) + (5 \times 10^{1}) + (7 \times 10^{0}) \\
(1 \times 1000) + (4 \times 100) + (5 \times 10) + (7 \times 1) \\
1000 + 400 + 50 + 7 \\
1457 \\
\end{array}
$$

# Octal Number System

- An octal number system carries eight digits starting from 0, 1, 2, 3, 4, 5, 6, and 7.
- It is also known as the base 8 number system.
- Example: $(273)_{8}, (5644)_{8}, (0.5365)_{8}, (1123)_{8}, (1223)_{8}$.

# Hexadecimal Number System

- It is another technique to represent the number in the digital system called the hexadecimal number system.
- The number system has a base of 16 means there are total 16 symbols (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F) used for representing a number.
- The single-bit representation of decimal values 10, 11, 12, 13, 14, and 15 are represented by A, B, C, D, E, and F.
- Only 4 bits are required for representing a number in a hexadecimal number.
- Each set of bits has a distinct value between 0 and 15.
- Example: $(\mathrm{FAC2})_{16}, (564)_{16}, (0\mathrm{ABD5})_{16}, (1123)_{16}, (11\mathrm{F3})_{16}$.

# Number Base Conversion

![img-0.jpeg](img-0.jpeg)

# Binary to Decimal Conversion

- The process of converting binary to decimal is quite simple.
- The process starts from multiplying the bits of binary number with its corresponding positional weights.
- And lastly, we add all those products.

# Example - Binary to Decimal Conversion

$$
\begin{array}{l}
(10110.001)_2 = (1 \times 2^4) + (0 \times 2^3) + (1 \times 2^2) + (1 \times 2^1) + (0 \times 2^0) + \\
(0 \times 2^{-1}) + (0 \times 2^{-2}) + (1 \times 2^{-3}) \\
(10110.001)_2 = (1 \times 16) + (0 \times 8) + (1 \times 4) + (1 \times 2) + (0 \times 1) + \\
(0 \times \frac{1}{2}) + (0 \times \frac{1}{4}) + (1 \times \frac{1}{8}) \\
(10110.001)_2 = 16 + 0 + 4 + 2 + 0 + 0 + 0 + 0.125 \\
(10110.001)_2 = (22.125)_{10} \\
\end{array}
$$

# Binary to Octal Conversion

- The base numbers of binary and octal are 2 and 8, respectively.
- In a binary number, the pair of three bits is equal to one octal digit.
- There are only two steps to convert a binary number into an octal number which are as follows:

1. In the first step, we have to make the pairs of three bits on both sides of the binary point. If there will be one or two bits left in a pair of three bits pair, we add the required number of zeros on extreme sides.
2. In the second step, we write the octal digits corresponding to each pair.

# Example - Binary to Octal Conversion

Example 1: $(111110101011.0011)_2$

1. Firstly, we make pairs of three bits on both sides of the binary point.

111  110  101  011.001  1

On the right side of the binary point, the last pair has only one bit. To make it a complete pair of three bits, we added two zeros on the extreme side.

111  110  101  011.001  100

2. Then, we wrote the octal digits, which correspond to each pair.

$$
(111110101011.0011)_2 = (7653.14)_8
$$

# Binary to Hexadecimal Conversion

- The base numbers of binary and hexadecimal are 2 and 16, respectively.
- In a binary number, the pair of four bits is equal to one hexadecimal digit.
- There are also only two steps to convert a binary number into a hexadecimal number which are as follows:

1. In the first step, we have to make the pairs of four bits on both sides of the binary point. If there will be one, two, or three bits left in a pair of four bits pair, we add the required number of zeros on extreme sides.
2. In the second step, we write the hexadecimal digits corresponding to each pair.

# Example - Binary to Hexadecimal Conversion

## Example 1: $(10110101011.0011)_2$

1. Firstly, we make pairs of four bits on both sides of the binary point.

```
111 1010 1011.0011
```

On the left side of the binary point, the first pair has three bits. To make it a complete pair of four bits, add one zero on the extreme side.

```
0111 1010 1011.0011
```

2. Then, we write the hexadecimal digits, which correspond to each pair.

$$
(011110101011.0011)_2 = (7AB.3)_{16}
$$

# Decimal to Binary Conversion

For converting decimal to binary, there are two steps required to perform, which are as follows:

- In the first step, we perform the division operation on the integer and the successive quotient with the base of binary(2).
- Next, we perform the multiplication on the integer and the successive quotient with the base of binary(2).

# Example - Decimal to Binary Conversion

## Step 1:

- Divide the number 152 and its successive quotients with base 2.

|  Operation | Quotient | Remainder  |
| --- | --- | --- |
|  152/2 | 76 | 0 (LSB)  |
|  76/2 | 38 | 0  |
|  38/2 | 19 | 0  |
|  19/2 | 9 | 1  |
|  9/2 | 4 | 1  |
|  4/2 | 2 | 0  |
|  2/2 | 1 | 0  |
|  1/2 | 0 | 1(MSB)  |

$(152)_{10} = (10011000)_2$

Example - Decimal to Binary Conversion cont..

Step 2:

- Now, perform the multiplication of 0.25 and successive fraction with base 2.

|  Operation | Result | carry  |
| --- | --- | --- |
|  0.25×2 | 0.50 | 0  |
|  0.50×2 | 0 | 1  |

$(0.25)_{10} = (.01)_{2}$

# Decimal to Octal Conversion

For converting decimal to octal, there are two steps required to perform, which are as follows:

- In the first step, we perform the division operation on the integer and the successive quotient with the base of octal(8).
- Next, we perform the multiplication on the integer and the successive quotient with the base of octal(8).

# Example - Decimal to Octal Conversion

Example 1: $(152.25)_{10}$

Step 1:

Divide the number 152 and its successive quotients with base 8.

|  Operation | Quotient | Remainder  |
| --- | --- | --- |
|  152/8 | 19 | 0  |
|  19/8 | 2 | 3  |
|  2/8 | 0 | 2  |

$$(152)_{10} = (230)_{8}$$

# Example - Decimal to Octal Conversion cont..

## Step 2:

Now perform the multiplication of 0.25 and successive fraction with base 8.

|  Operation | Result | carry  |
| --- | --- | --- |
|  0.25×8 | 0 | 2  |

$$(0.25)_{10} = (2)_8$$

So, the octal number of the decimal number 152.25 is 230.2

# Decimal to Hexadecimal Conversion

For converting decimal to hexadecimal, there are two steps required to perform, which are as follows:

- In the first step, we perform the division operation on the integer and the successive quotient with the base of hexadecimal (16).
- Next, we perform the multiplication on the integer and the successive quotient with the base of hexadecimal (16).

# Example - Decimal to Hexadecimal Conversion

Example 1: $(152.25)_{10}$

Step 1:

Divide the number 152 and its successive quotients with base 8.

|  Operation | Quotient | Remainder  |
| --- | --- | --- |
|  152/16 | 9 | 8  |
|  9/16 | 0 | 9  |

$$(152)_{10} = (98)_{16}$$

# Example - Decimal to Hexadecimal Conversion cont..

## Step 2:

Now perform the multiplication of 0.25 and successive fraction with base 16.

|  Operation | Result | carry  |
| --- | --- | --- |
|  0.25×16 | 0 | 4  |

$$(0.25)_{10} = (4)_{16}$$

So, the hexadecimal number of the decimal number 152.25 is 230.4.

# Octal to Decimal Conversion

- The process of converting octal to decimal is the same as binary to decimal.
- The process starts from multiplying the digits of octal numbers with its corresponding positional weights.
- And lastly, we add all those products.

# Example - Octal to Decimal Conversion

## Example 1: $(152.25)_8$

We multiply each digit of 152.25 with its respective positional weight, and last we add the products of all the bits with its weight.

$$
\begin{array}{l}
(152.25)_8 = (1 \times 8^2) + (5 \times 8^1) + (2 \times 8^0) + (2 \times 8^{-1}) + (5 \times 8^{-2}) \\
(152.25)_8 = 64 + 40 + 2 + (2 \times \frac{1}{8}) + (5 \times \frac{1}{64}) \\
(152.25)_8 = 64 + 40 + 2 + 0.25 + 0.078125 \\
(152.25)_8 = 106.328125 \\
\end{array}
$$

So, the decimal number of the octal number 152.25 is 106.328125

# Octal to Binary Conversion

- The process of converting octal to binary is the reverse process of binary to octal.
- We write the three bits binary code of each octal number digit.

## Example 1: $(152.25)_8$

We write the three-bit binary digit for 1, 5, 2, and 5.

$$
(152.25)_8 = (001101010.010101)_2
$$

So, the binary number of the octal number 152.25 is $(001101010.010101)_2$

# Octal to Hexadecimal Conversion

For converting octal to hexadecimal, there are two steps required to perform, which are as follows:

- In the first step, we will find the binary equivalent of number 25.
- Next, we have to make the pairs of four bits on both sides of the binary point.
- If there will be one, two, or three bits left in a pair of four bits pair, we add the required number of zeros on extreme sides and write the hexadecimal digits corresponding to each pair.

# Example - Octal to Hexadecimal Conversion

Example 1: $(152.25)_8$

Step 1:

We write the three-bit binary digit for 1, 5, 2, and 5.

$$(152.25)_8 = (001101010.010101)_2$$

So, the binary number of the octal number 152.25 is $(001101010.010101)_2$

Step 2:

1. Now, we make pairs of four bits on both sides of the binary point.

0    0110    1010.0101    01

On the left side of the binary point, the first pair has only one digit, and on the right side, the last pair has only two-digit. To make them complete pairs of four bits, add zeros on extreme sides.

0000    0110    1010.0101    0100

2. Now, we write the hexadecimal digits, which correspond to each pair.

(0000    0110    1010.0101    0100)_2 = (6A.54)_16

# Hexadecimal to Decimal Conversion

- The process of converting hexadecimal to decimal is the same as binary to decimal.
- The process starts from multiplying the digits of hexadecimal numbers with its corresponding positional weights.
- And lastly, we add all those products.

# Example - Hexadecimal to Decimal Conversion

Example 1: $(152A.25)_{16}$

Step 1:

We multiply each digit of 152A.25 with its respective positional weight, and last we add the products of all the bits with its weight.

$$
\begin{array}{l}
(152A.25)_{16} = (1 \times 16^3) + (5 \times 16^2) + (2 \times 16^1) + (A \times 16^0) + (2 \times 16^{-1}) + (5 \times 16^{-2}) \\
(152A.25)_{16} = (1 \times 4096) + (5 \times 256) + (2 \times 16) + (10 \times 1) + (2 \times 16^{-1}) + (5 \times 16^{-2}) \\
(152A.25)_{16} = 4096 + 1280 + 32 + 10 + (2 \times \frac{1}{16}) + (5 \times \frac{1}{256}) \\
(152A.25)_{16} = 5418 + 0.125 + 0.125 \\
(152A.25)_{16} = 5418.14453125 \\
\end{array}
$$

So, the decimal number of the hexadecimal number 152A.25 is 5418.14453125

# Hexadecimal to Binary Conversion

The process of converting hexadecimal to binary is the reverse process of binary to hexadecimal. We write the four bits binary code of each hexadecimal number digit.

Example 1: $(152A.25)_{16}$

We write the four-bit binary digit for 1, 5, A, 2, and 5.

$$
(152A.25)_{16} = (0001\ 0101\ 0010\ 1010.0010\ 0101)_2
$$

So, the binary number of the hexadecimal number 152.25 is $(1010100101010.00100101)_2$

# Hexadecimal to Octal Conversion

For converting hexadecimal to octal, there are two steps required to perform, which are as follows:

- In the first step, we will find the binary equivalent of the hexadecimal number.
- Next, we have to make the pairs of three bits on both sides of the binary point. If there will be one or two bits left in a pair of three bits pair, we add the required number of zeros on extreme sides and write the octal digits corresponding to each pair.

# Example - Hexadecimal to Octal Conversion

Example 1: $(152A.25)_{16}$

Step 1:

We write the four-bit binary digit for 1, 5, 2, A, and 5.

$$
(152A.25)_{16} = (0001\ 0101\ 0010\ 1010.0010\ 0101)_2
$$

So, the binary number of hexadecimal number 152A.25 is $(0011010101010.010101)_2$

Step 2:

3. Then, we make pairs of three bits on both sides of the binary point.

001  010  100  101  010.001  001  010

4. Then, we write the octal digit, which corresponds to each pair.

$$
(001010100101010.001001010)_2 = (12452.112)_8
$$

So, the octal number of the hexadecimal number 152A.25 is 12452.112

# Binary Addition

## Rules of Binary Addition :

- Binary addition is much easier than the decimal addition when you remember the following tricks or rules.
- Using these rules, any binary number can be easily added.
- The four rules of binary addition are:

0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = Sum 0 Carry 1 (10)

# Binary Addition cont..

|  Example 1: 10001 + 11101 | Example 2: 10111 + 110001  |
| --- | --- |
|  10001 | 10111  |
|  (+) 11101 | (+) 110001  |
|  101110 | 1001000  |

# Binary Subtraction

Binary Subtraction:
- $0 - 0 = 0$
- $1 - 0 = 1$
- $1 - 1 = 0$
- $0 - 1 = 1$ (Borrow 1)

# Binary Subtraction cont..

|  # Binary Subtraction: | 1110 0101 1001 | 1100 0101 0111  |
| --- | --- | --- |
|  11000 00001 10111 | 11000 01111 01001 |   |

# Hexadecimal Addition and Subtraction

# Hexadecimal Addition:

```
2   7   9
+ F   B   3
(1 2   2   6) 16
```

# Hexadecimal Subtraction:

```
6   A   5
-   5   B   4
(0   F   1) 16
```

Hexadecimal Addition and Subtraction cont..

Practice Problems :
☐ Add 3A and 27.
☐ Subtract 19 from 4F.
☐ Add FF and 1A.
☐ Subtract B3 from F5.

# Binary Subtraction using 1's Complement

Step 1: Convert number to be subtracted to it's 1's complement form.
Step 2: Perform the addition.
Step 3: If the final carry is 1, then add it to the result obtained in step 2. If final carry is 0, result obtained in step 2 is negative and in the 1's complement form.

# Binary subtraction using 1's complement:

Ex-1: perform (1100)₂ - (0101)₂

1's complement of 0101 (5)
= 1010 (5)

```
1100 → 12
1010 → (5)
(1)0110
+1
0111 → (7)
```

Ex-2: perform (0101)₂ - (1100)₂

1's complement of 1100 → (12)
= 0011 → (-12)

```
0101 → (5)
0011 → (-12)
1000 → 1's complement = 0111
```

Exercise:

1. (1011)₂ - (0100)₂
2. (0100)₂ - (1011)₂
3. (11001)₂ - (1111)₂
4. (10000)₂ - (11101)₂

# Binary Subtraction using 2's Complement

Step 1: Find 2's complement of number to be subtracted.
Step 2: Perform the addition.
Step 3: If final carry is generated then the result is positive and in its true form.
If final carry is not produced, then the result is negative and in its 2's complement form.

# Binary subtraction using 2's complement:

Ex-1: $(1001)_2 - (0100)_2$
$\frac{1}{4}$
$1's\ complement\ \text{or}\ 0100 = 1011$
$2's\ " = \frac{+1}{1100}$

$\frac{1}{4} \cdot 001 = 1001$

Ex-2: $(0100)_2 - (1011)_2$
$\frac{1}{4} \cdot 11 = 0100$

$1's\ complement\ \text{or}\ 1011 = 0100$
$2's\ " = \frac{+1}{0101}$

$\frac{1}{4} \cdot 0100 = 0100$

Exercise:

1. $(0100)_2 - (0100)_2$
2. $(0111)_2 - (1110)_2$
3. $(10110)_2 - (1111)_2$

Thank You

![img-1.jpeg](img-1.jpeg)