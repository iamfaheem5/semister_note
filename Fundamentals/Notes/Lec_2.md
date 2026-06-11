# Outline

- Computer Memory
- Types of Computer Memory
- Memory Capacity
- Memory Hierarchies

# Computer Memory

- Computer memory is any physical device, used to store data, information or instruction temporarily or permanently.
- It is the collection of storage units that stores binary information in the form of bits.
- The memory block is split into a small number of components, called cells.
- Each cell has a unique address to store the data in memory,

Memory components of a computer system can be divided into three categories:
- Internal Processor Memory (or built-in memory)
- Primary memory or Main Memory
- Secondary memory

# Internal Processor Memory

- It is not a part of the main memory and is located in the CPU in the form of registers, which are the smallest data holding elements.
- A register temporarily holds frequently used data, instructions, and memory address that are to be used by CPU.
- They hold instructions that are currently processed by the CPU.
- Some of the widely used Registers include Accumulator or AC, Data Register or DR, the Address Register or AR, Program Counter (PC), I/O Address Register, and more.
- Some microprocessors also employ another type of built in memory called cache memory.

# Cache Memory

- Cache memory is a high-speed memory, which is small in size but faster than the main memory (RAM).
- The CPU can access it more quickly than the primary memory.
- So, it is used to synchronize with high-speed CPU and to improve its performance.

![img-0.jpeg](img-0.jpeg)

# How does Cache Memory Work?

- Cache memory temporarily stores information, data and programs that are commonly used by the CPU.
- When data is required, the CPU will automatically turn to cache memory in search of faster data access.
- When data is found in cache memory, this is called a **cache hit**.
- A cache hit enables the processor to retrieve data quickly, making your overall system more efficient.
- If the data is not found in the cache (a cache miss), the CPU fetches the data from RAM and stores a copy in the cache for future use.

* This process is slower than a cache hit, but it ensures that frequently accessed data is available in the cache for faster access later.

# Primary Memory

Primary Memory is of two types: RAM and ROM.

## RAM (Volatile Memory):

- It is a volatile memory.
- It means it does not store data or instructions permanently.
- When you switch on the computer the data and instructions from the hard disk are stored in RAM.
- CPU utilizes this data to perform the required tasks.
- As soon as you shut down the computer the RAM loses all the data.

![img-1.jpeg](img-1.jpeg)

# Primary Memory – Types of RAM

## Types of RAM:

Integrated RAM chips can be of two types:

- Static RAM (SRAM):
- Dynamic RAM (DRAM):

# DRAM (Dynamic Random Access Memory)

- Data is stored in capacitors.
- Capacitors that store data in DRAM gradually discharge energy, no energy means the data has been lost.
- So, a periodic refresh of power is required in order to function.
- DRAM is called dynamic as constant change or action (change is continuously happening) i.e. refreshing is needed to keep the data intact.
- It is used to implement main memory. It is typically used for main system memory (RAM)

# SRAM (Static Random Access Memory)

- Data is stored in transistors and requires a constant power flow.
- Because of the continuous power, SRAM doesn't need to be refreshed to remember the data being stored.
- SRAM is called static as no change or action i.e. refreshing is not needed to keep the data intact.
- It is used in cache memories.

# Primary Memory – Difference between SRAM and DRAM

|  SRAM | DRAM  |
| --- | --- |
|  Stands for Static Random Access Memory | Stands for Dynamic Random Access Memory  |
|  It does not need to be refreshed repeatedly. | It needs to be refreshed continuously or it will lose the data  |
|  High speed RAM | Relatively slower  |
|  Costly | Relatively low cost  |
|  Generally used for Cache | Used for main memory  |
|  Control complexity is less | Relatively high control complexity  |
|  Lower Access Time | Relatively higher access time  |

Thank You

![img-2.jpeg](img-2.jpeg)