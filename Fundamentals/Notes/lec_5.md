# Outline

- Functions of Operating System
- Types of Operating System

# Functions of Operating System

- Process Management
- Memory Management
- I/O Device Management
- File Management
- Secondary Storage Management
- Security

# Functions of Operating System cont..

## Process Management

- ☑ The OS manages processes (programs in execution) by scheduling them, allocating CPU time, and ensuring smooth multitasking.
- ☑ It handles process creation, execution, termination, and inter-process communication.
- ☑ Example :
- ☑ Running multiple applications like a browser, music player, and Word simultaneously.
- ☑ The OS ensures the CPU switches between these tasks efficiently (context switching).

# Functions of Operating System cont..

## Memory Management

- The OS manages the system's memory, including RAM and cache.
- It allocates memory to processes and ensures no process interferes with another's memory space.
- Example:
- When you open multiple tabs in a browser, the OS allocates memory to each tab and ensures the browser doesn't crash due to insufficient memory.

## File System Management

- The OS provides a way to create, read, write, and organize files on storage devices.
- It manages file permissions, directory structures, and storage space.
- Example:
- Saving a Word document: The OS ensures the file is written to the hard disk in the correct location and format while managing access permissions.

# Functions of Operating System cont..

## Device Management

- The OS manages input/output (I/O) devices like keyboards, mice, printers, and storage drives.
- It uses device drivers to facilitate communication between hardware and software.
- Example:
- When you print a document, the OS communicates with the printer via its driver to send the print job.

## Security and Access Control

- The OS ensures data security by managing user authentication, file permissions, and protecting the system from unauthorized access.
- Example:
- Logging into your computer with a username and password ensures only authorized users can access the system.

# Functions of Operating System cont..

## User Interface
- The OS provides a user interface (either command-line or graphical) to allow users to interact with the system.
- Example:
- A Graphical User Interface (GUI), like Windows or macOS, enables users to interact with files and applications via icons and menus.

## Multitasking
- The OS allows multiple processes or tasks to run simultaneously by sharing CPU time.
- Example:
- Watching a YouTube video while downloading a file in the background.
- The OS ensures both processes get adequate resources.

# Functions of Operating System cont..

## Error Detection and Handling

- The OS detects and resolves system errors, such as hardware malfunctions or software crashes.
- Example:
- If a USB device is not responding, the OS detects the issue and displays an error message, like "Device not recognized."

# Types of Operating System

- Batch Operating System
- Multi Programming Operating System
- Multitasking/Time Sharing Operating System
- Multiprocessing Operating System
- Real-time Operating System etc...

# Batch Operating System

- This type of operating system does not interact with the computer directly.
- There is an operator which takes similar jobs having same requirement and group them into batches.
- It is the responsibility of operator to sort the jobs with similar needs.

![img-0.jpeg](img-0.jpeg)
Batch Operating System

# Multiprogramming Operating System

- An operating system that is capable of running multiple programs on a single processor is known as a multiprogramming operating system.
- Several jobs or program resides in the main memory at any given point of time, while one program is being processed, others wait in the queue.
- Once a process is either completed or goes for I/O or preempted the processor picks up some other process.
- One of the major aims of multiprogramming is to manage the various resources of the entire system.

## Example:

- Suppose a system is running three programs: a word processor, a compiler, and a file transfer.
- ☑ The CPU executes the word processor.
- ☑ When the word processor waits for user input (I/O), the CPU switches to the compiler.
- ☑ When the compiler needs input data, the CPU switches to the file transfer process.

# Multitasking/Time Sharing Operating System

- Multitasking (also called time-sharing) allows multiple tasks or processes to run concurrently by rapidly switching between them.
- Each task gets a small time slice (time quantum) of CPU, making it appear as if they are running simultaneously.

## Example:

On your computer, you are:
- ☑ Watching a YouTube video (video player process),
- ☑ Chatting on a messaging app (messaging process),
- ☑ Browsing the web (browser process).
- ☑ The OS rapidly switches between these tasks, making them appear to run simultaneously.

# Multitasking/Time Sharing Operating System cont..

![img-1.jpeg](img-1.jpeg)

Multi-Tasking In Operating System

# Multiprocessing Operating System

- Multiprocessor system means, there are more than one processor which work parallel to perform the required operations.
- It allows the multiple processors, and they are connected with physical memory, computer buses, clocks, and peripheral devices.
- The main objective of using a multiprocessor operating system is to increase the execution speed of the system and consume high computing power.

![img-2.jpeg](img-2.jpeg)
Working of Multiprocessor System

# Real Time Operating System

- Real-time operating systems (RTOS) are used in environments where a large number of events, mostly external to the computer system, must be accepted and processed in a short time or within certain deadlines.
- Examples of the real-time operating systems: Airline traffic control systems, Robot etc.

# Kernel

- The "kernel" is a crucial component of an operating system (OS).
- It is the core part of the OS that manages the system's hardware and provides essential services for the software running on the system.
- The kernel acts as an intermediary between the hardware and the user-level applications, facilitating communication and coordination between them.

Thank You

![img-3.jpeg](img-3.jpeg)