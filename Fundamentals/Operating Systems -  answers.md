# Exam Answers — Fundamentals of Computers

---

## Incourse 1 - 2024

**Define software. What is the concept of multitasking in an OS? How is it different from multiprocessing?**

**Software** is a set of programs, instructions, and data that tell a computer how to perform tasks. It is the non-physical part of a computer system (e.g., Windows, MS Word).

**Multitasking** allows multiple tasks/processes to run *concurrently* on a **single processor** by rapidly switching between them. Each task gets a small time slice (time quantum) of CPU time, making it appear as if all tasks run simultaneously.
*Example:* Watching YouTube, chatting, and browsing at the same time.

**Difference between Multitasking and Multiprocessing:**

| Multitasking | Multiprocessing |
|---|---|
| Single processor handles multiple tasks | Multiple processors work in parallel |
| Tasks take turns using the CPU | Tasks run truly simultaneously |
| Time-sharing of one CPU | Each processor handles a separate task |
| Less powerful | Higher computing power and speed |

---

## Semester Final - 2021

### 1. What is Operating System? Explain the booting process. | 6 Marks

**Operating System (OS)** is system software that acts as an intermediary between the user and computer hardware. It manages hardware resources and provides services for application software. Examples: Windows, Linux, macOS.

**Booting Process** is the process of starting a computer and loading the OS into memory. Steps:

1. **Power ON** — Electricity flows to the motherboard.
2. **POST (Power-On Self Test)** — The BIOS checks that all hardware (RAM, CPU, keyboard) is working properly.
3. **BIOS Loads** — The BIOS (Basic Input/Output System) stored in ROM is activated. It identifies bootable devices (hard disk, USB).
4. **Boot Loader Executes** — The BIOS finds and runs the boot loader (e.g., GRUB for Linux) from the storage device.
5. **OS Kernel Loads** — The boot loader loads the OS kernel into RAM.
6. **OS Initialization** — The OS initializes system processes, drivers, and services.
7. **Login Screen** — The user is presented with a login interface.

---

### 2. What is file system? What does a file system do? | 4 Marks

A **file system** is a method used by an operating system to organize, store, and retrieve data on storage devices (like hard disks, USB drives).

**What a File System Does:**
- **Creates and manages files** — allows creating, reading, writing, and deleting files.
- **Organizes directories** — arranges files in a folder/directory structure for easy navigation.
- **Manages storage space** — tracks which parts of the disk are used and which are free.
- **Controls access permissions** — ensures only authorized users can read or modify files.
- **Provides naming conventions** — allows files to be identified by names and extensions (e.g., `report.docx`).

*Examples of file systems:* NTFS (Windows), ext4 (Linux), FAT32.

---

### 3. How does a computer process data? | 4 Marks

A computer processes data using the **IPO Cycle** — Input → Processing → Output.

1. **Input** — Data is entered into the computer through input devices (keyboard, mouse, scanner).
2. **Storage (Memory)** — The data is temporarily stored in RAM so the CPU can access it quickly.
3. **Processing** — The **CPU (Central Processing Unit)** processes the data using the ALU (Arithmetic Logic Unit) for calculations and the Control Unit (CU) for directing operations.
4. **Output** — The processed result is sent to output devices (monitor, printer) or saved to storage (hard disk).

*Example:* When you type a sum in a calculator app → data goes to CPU → CPU calculates → result shown on screen.

---

## Semester Final - 2022

### 1. Short notes on Operating Systems | 6 Marks

**I. Single-User / Single-Tasking OS**
This OS allows only **one user** to use the computer at a time and can run only **one task/program** at a time. It is simple and older in design.
*Example:* MS-DOS. When running a program, no other program can execute simultaneously.

**II. Single-User / Multitasking OS**
This OS allows only **one user** at a time but can run **multiple tasks simultaneously** by rapidly switching the CPU between them using time-sharing.
*Example:* Windows 10, macOS. A user can browse the internet, play music, and type a document all at once.

**III. Multi-User / Multitasking OS**
This OS allows **multiple users** to access the system simultaneously, and each user can run **multiple tasks** at the same time. The OS manages resources so all users get fair CPU time.
*Example:* Linux, Unix, Windows Server. Used in universities and offices where many users share one powerful server.

---

## Semester Final - 2023

### 1. Explain the process management functions of an OS. | 5 Marks

**Process** is a program in execution. The OS is responsible for managing all processes in the system.

**Process Management functions include:**

1. **Process Creation** — The OS creates a new process when a program is launched and assigns it necessary resources (CPU, memory).

2. **Process Scheduling** — The OS decides which process gets CPU time and for how long, using scheduling algorithms (e.g., Round Robin). This ensures fair and efficient CPU usage.

3. **Process Execution** — The OS runs the process by allocating CPU time to it.

4. **Context Switching** — When switching from one process to another, the OS saves the state of the current process and loads the state of the next one.

5. **Process Termination** — Once a process finishes, the OS frees all resources (memory, CPU) it was using.

6. **Inter-process Communication (IPC)** — The OS allows processes to communicate and share data with each other safely.

*Example:* Running a browser, music player, and Word simultaneously — the OS schedules CPU time for each, switches between them rapidly, and manages their memory independently.

---

## Semester Final - 2024

### 1. Multitasking concept + System Software vs Application Software | 3 Marks

**Multitasking** is the ability of an OS to run multiple processes/tasks at the same time on a single CPU by rapidly switching between them, giving each a small time slice. This makes it *appear* all tasks run simultaneously.
*Example:* Listening to music while typing a document.

**System Software vs Application Software:**

| System Software | Application Software |
|---|---|
| Manages and controls hardware | Performs specific user tasks |
| Runs in the background | Runs when opened by the user |
| *Example:* Windows OS, Device Drivers | *Example:* MS Word, VLC Player, Chrome |