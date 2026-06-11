# Outline

- Secondary Memory
- HDD
- BIOS
- Firmware
- Software
- Classification of Software
- System Software
- Application Software
- Language Translators

# Secondary Memory

## What is Secondary Memory?

- ☑ Secondary memory refers to storage devices that are used to store data permanently (or semi-permanently).
- ☑ Unlike primary memory (RAM), secondary memory is non-volatile and retains data even when the system is powered off.

# Importance of Secondary Memory

## Large Storage Capacity:
- ☑ Secondary memory devices, such as Hard Disk Drives (HDDs), Solid State Drives (SSDs), and optical discs, offer significantly larger storage capacities compared to primary memory (RAM).

## Non-Volatile Storage:
- ☑ Unlike primary memory (RAM), which is volatile and loses its contents when the power is turned off, secondary memory is non-volatile.
- ☑ This means that data is retained even when the system is powered down, making it ideal for long-term data storage.

## Cost-Effective:
- ☑ Secondary memory is generally much more affordable than primary memory on a per-gigabyte basis.
- ☑ This makes it a cost-effective solution for storing large amounts of data, especially for personal computers, servers, and data centers.

# Importance of Secondary Memory cont..

## Data Backup and Recovery:
- ☑ Secondary memory provides a reliable means for data backup and recovery.

## Supporting Large Applications and Files:
- ☑ Secondary memory enables the storage of large applications, databases, and files that can't fit into primary memory.
- ☑ When an application needs more memory than what's available in RAM, data can be swapped between RAM and secondary storage to maintain performance.

## Long-Term Storage for System Files:
- ☑ The operating system and software applications reside on secondary storage.

## Portability:
- ☑ Devices like USB drives, external hard drives, and SD cards provide portable secondary memory, making it easy to transfer data between computers and other devices.

# Difference between Primary Memory and Secondary Memory

|  Feature | Primary Memory | Secondary Memory  |
| --- | --- | --- |
|  Definition | Primary memory (also called **main memory**) is the memory that a computer uses to store data that is actively being used or processed by the CPU. | Secondary memory refers to storage devices that are used to store data permanently or long-term, such as hard drives, SSDs, CDs, and DVDs.  |
|  Type of Storage | Volatile (temporary) storage. | Non-volatile (permanent) storage.  |
|  Examples | RAM (Random Access Memory) | Hard Disk Drives (HDD), Solid State Drives (SSD), Optical discs (CDs, DVDs), USB drives.  |
|  Speed | Faster access speed. RAM can be accessed in nanoseconds. | Slower access speed compared to primary memory, often measured in milliseconds.  |
|  Capacity | Relatively small in size (typically in GBs). | Larger capacity, ranging from several GBs to TBs.  |
|  Example Usage | Storing the operating system, programs currently running, and data being actively processed. | Storing documents, pictures, videos, software, and backups.  |

# Types of Secondary Memory

## a. Magnetic Storage

- Hard Disk Drives (HDD):
- ☑ Use magnetic platters to store data.
- ☑ Common in desktops, laptops, and servers.
- ☑ Advantages: Large storage, relatively low cost.
- ☑ Disadvantages: Slower data access, sensitive to physical shocks.

- Magnetic Tapes:
- ☑ Used primarily for backup and archival storage.
- ☑ Sequential access, not suitable for quick retrieval of data.
- ☑ Advantages: Large capacity, cost-effective for archival storage.
- ☑ Disadvantages: Slow access time, requires special devices to read/write.

Types of Secondary Memory cont..

b. Optical Storage
- CDs and DVDs:
- ☑ Use laser light to read and write data.
- ☑ Common for media distribution, small data storage.
- ☑ Advantages: Portable, inexpensive.
- ☑ Disadvantages: Limited capacity (700MB for CDs, 4.7GB for DVDs), slower read/write speeds.

c. Solid-State Storage :
- Solid State Drives (SSD):
- ☑ Use flash memory to store data.
- ☑ Faster data access compared to HDDs.
- ☑ Advantages: High speed, no moving parts, more durable.
- ☑ Disadvantages: Higher cost per GB, lower storage capacity compared to HDDs.

Types of Secondary Memory cont..

d. Flash Storage
- USB Flash Drives:
- ☑ Portable and easy to use for transferring data.
- ☑ Common in both consumer and professional environments.
- ☑ Advantages: Portable, no need for external power.
- ☑ Disadvantages: Limited capacity compared to HDDs or SSDs.

# Structure of HDD

![img-0.jpeg](img-0.jpeg)

- One or more platters in the form of disks covered with magnetic media.
- Each platter has two working surfaces.
- Each working surface is divided into a number of concentric rings called tracks.
- Each track is further divided into sectors, traditionally containing 512 bytes of data each, although some modern disks occasionally use larger sector sizes.
- The data on a hard drive is read by read-write heads. The standard configuration (shown below) uses one head per surface, each on a separate arm, and controlled by a common arm assembly which moves all heads simultaneously from one cylinder to another.
- The storage capacity of a traditional disk drive is equal to the number of heads (i.e. the number of working surfaces), times the number of tracks per surface, times the number of sectors per track, times the number of bytes per sector

# Seek Time

☑ The time taken by the read/write head of the HDD to move to the track where the desired data is located.

☑ Typical Range: 3 to 15 milliseconds (ms) for modern HDDs.

☑ Example: Suppose an HDD’s average seek time is 8 ms. If a request is made to read data from a location 5 tracks away, it will take approximately 8 ms for the head to position itself over the correct track.

## Rotational Latency

- Definition: The time taken for the disk to rotate the desired sector under the read/write head. It depends on the rotational speed of the disk (measured in RPM - Revolutions Per Minute).

- Formula:

$$
\text{Rotational Latency} = \frac{60 \text{ seconds}}{\text{RPM}} \times \frac{1}{2}
$$

(Divided by 2 because, on average, the desired sector is halfway around the disk.)

- Example:

- An HDD with a speed of 7200 RPM has:

$$
\text{Rotational Latency} = \frac{60}{7200} \times \frac{1}{2} = 4.17 \text{ ms (approx.)}
$$

# Access Time

- Definition: The total time required to locate and prepare the desired data for transfer. It is the sum of:

$$
\text{Access Time} = \text{Seek Time} + \text{Rotational Latency}
$$

- Example:
- If an HDD has an average seek time of 8 ms and a rotational latency of 4.17 ms, the access time would be:

$$
8 + 4.17 = 12.17 \text{ ms}
$$

# Read Time

- Definition: The time taken to read the requested data from the disk once the read/write head is positioned over the correct sector.
- Depends On:
- The amount of data to be read.
- The data transfer rate (e.g., 100 MB/s).
- Example:
- If 1 MB of data is being read and the transfer rate is 100 MB/s, the read time will be:

$$
\text{Read Time} = \frac{1 \text{ MB}}{100 \text{ MB/s}} = 0.01 \text{ s} \ (10 \text{ ms}).
$$

# HDD cont..

Q: Consider a HDD with the following specifications,

1. 4 surfaces
2. 512 tracks per surface
3. 1024 sectors per track
4. Size of each sector: 512 Bytes

a. Find out the capacity of the HDD.

Sol. #Surfaces = 4

Capacity = #Surfaces x #Tracks/S x #Sectors/T x Sector Size

= 4 x 512 x 1024 x 512 Bytes = 2² x 2⁹ x 2¹⁰ x 2⁹ Bytes

= 2³⁰ Bytes = 1 GB

# HDD cont..

Q2: Consider a HDD with the following specifications,

1. 4 surfaces
2. Track capacity: 352 KB
3. Rotational speed: 5400 RPM

What is the data transfer rate?

Sol. 5400 rotations in 60 secs.
∴ 1 rotation in 60/5400 secs. = 1/90 secs.

In 1/90 secs. 352 KB data is transferred
» 1 sec. 90 x 352 KB » » »

Total Data transfer rate = 4 x 90 x 352 KB/sec.
= 123.75 MB/sec.

# BIOS (Basic Input Output System)

- BIOS, which stands for Basic Input/Output System, is a fundamental software component that is integral to the operation of a computer.
- BIOS is typically stored on a chip on the computer's motherboard, and its primary function is to initialize and manage the essential hardware components during the boot-up process.
- When you turn on your computer, the BIOS is the first software to run.
- It performs a Power-On Self-Test (POST) to check the integrity of the hardware components, such as the CPU, RAM, storage devices, and input/output devices (keyboard, mouse, display).
- The POST ensures that these components are functioning correctly.
- After completing the POST, the BIOS determines which storage device (e.g., hard drive, solid-state drive, USB drive) to boot from.
- It looks for the boot loader, which is a small program stored in a specific location on the selected boot device.
- The boot loader then loads the operating system into memory.

# Firmware

- Firmware is a type of software that is embedded in hardware devices to provide low-level control and management of the hardware's operation.
- It contains specific instructions and code that enable the hardware to perform essential functions, such as initializing hardware components, managing power, and controlling hardware features.
- Firmware is closely tied to the hardware it is installed on and is responsible for ensuring the device operates as intended.
- Firmware is typically stored in non-volatile memory, such as ROM (Read-Only Memory), EEPROM (Electrically Erasable Programmable Read-Only Memory), or flash memory.
- It remains intact even when the device is powered off and is not easily altered by end-users.

# Software

- Software refers to a broad category of programs and applications that run on a computer's operating system.
- Software is designed for a wide range of purposes, from word processing and web browsing to games and media players.
- Software is stored on various storage devices like hard drives, solid-state drives, optical media, or downloaded from the internet.
- Software updates are more frequent and can be developed and distributed by various software vendors.
- These updates address bug fixes, provide feature enhancements, and improve security. Users can often choose when and if they want to install software updates.

# Classification of Software

The two main categories of software are:

- System Software
- Application Software

# Classification of Software – (System Software)

- System software is a type of software that provides a platform for other software to run on and interacts directly with the hardware of a computer.
- The primary purpose of system software is to manage and facilitate the efficient functioning of the computer system.
- The programs of system software can be grouped into :
- Operating Systems
- Language Translators and
- Utility Programs

# Classification of Software – (Application Software)

- Application software refers to a set of computer programs or applications designed to perform specific tasks for end-users.
- Unlike system software, which manages the hardware and provides essential services, application software is developed to meet the diverse needs and requirements of users.

# Classification of Software – (Application Software) cont..

- Word Processing Software:
Examples: Microsoft Word, Google Docs, LibreOffice Writer
- Spreadsheet Software:
Examples: Microsoft Excel, Google Sheets, LibreOffice Calc
- Presentation Software:
Examples: Microsoft PowerPoint, Google Slides, LibreOffice Impress

- Database Management Software:
Examples: Microsoft Access, MySQL, Oracle Database
- Graphics and Design Software:
Examples: Adobe Photoshop, Illustrator, CorelDRAW
- Web Browsers:
Examples: Google Chrome, Mozilla Firefox, Microsoft Edge
- Media Players:
Examples: VLC Media Player, Windows Media Player, iTunes

# Classification of Software – (Application Software) cont..

- Project Management Software:
Examples: Trello, Asana, Jira
- Web Development Tools:
Examples: Sublime Text, Visual Studio Code, Adobe Dreamweaver
- Education and Learning Software:
Examples: Moodle, Khan Academy, Duolingo
- Communication Software:
Examples: Skype, Slack, Zoom

# Operating System

- An operating system is a program that acts as an interface between the user and the computer hardware and controls the execution of all kinds of programs.
- The software that contains the core components of the operating system is called the kernel.
- Some popular Operating Systems include Linux Operating System, Windows Operating System, UNIX, VMS, OS/400, AIX, z/OS, etc.

# Architecture of Operating System

![img-1.jpeg](img-1.jpeg)

# Language Translators

- Language translators are tools that convert source code written in one programming language into machine code or an intermediate code that can be executed by a computer.
- There are three main types of language translators:
- Compilers
- Interpreters and
- Assemblers

# Language Translators - Compilers

- A compiler is a complex piece of software whose job is to convert source code to machine understandable code (or binary code) in one go.

![img-2.jpeg](img-2.jpeg)

# Language Translators - Interpreter

An interpreter is a software program written to translate source code to machine code but it does line by line.

![img-3.jpeg](img-3.jpeg)

# Language Translators - Assembler

- Assembler is a translator which is used to translate the assembly language code into machine language code.
- The source program written in the assembly language is given as the input to the assembler.
- The output generated by the assembler is the object code or machine code understandable by the computer.
- Example :
- FAP-&gt;Fortan Assembly Program
- MAP-&gt;Macro Assembly Program

![img-4.jpeg](img-4.jpeg)

# Difference between Compiler and Interpreter

|  S.No | Compiler | Interpreter  |
| --- | --- | --- |
|  1. | Compiler scans the whole program in one go. | Translates program one statement at a time.  |
|  2. | As it scans the code in one go, the errors (if any) are shown at the end together. | Considering it scans code one line at a time, errors are shown line by line.  |
|  3. | Main advantage of compilers is it's execution time. | Due to interpreters being slow in executing the object code, it is preferred less.  |
|  4. | It converts the source code into object code. | It does not convert source code into object code instead it scans it line by line  |
|  5 | It does not require source code for later execution. | It requires source code for later execution.  |
|  Eg. | C, C++, C# etc. | Python, Ruby, Perl, SNOBOL, MATLAB, etc.  |

# Utility Software

- The Utility Software is system software that helps to maintain the proper and smooth functioning of a Computer System.
- It assists the Operating System to manage, organize, maintain, and optimize the functioning of the computer system.

# Types of Utility Software

## Antivirus software:
- Antivirus software is designed to detect and remove viruses, malware, and other malicious software from a computer system.

## Disk cleaners:
- Disk cleaners are tools that scan a computer’s hard drive for unnecessary files and other data that can be safely deleted to free up storage space.

## Backup and recovery software:
- Backup and recovery software allows users to create copies of their data and restore it in the event of data loss or system failure.

# Types of Utility Software cont..

## System optimizers:
- System optimizers are tools that can improve a computer's performance by optimizing system settings, removing unnecessary files and programs, and managing system resources.

## Disk defragmenters:
- Disk defragmenters are utilities that can organize a computer's hard drive to improve file access times and overall system performance.

## File compression software:
- File compression software can compress files and folders to save storage space and make them easier to transfer over the internet.

## Disk encryption software:
- Disk encryption software can encrypt data on a computer's hard drive to protect it from unauthorized access

Thank You

![img-5.jpeg](img-5.jpeg)