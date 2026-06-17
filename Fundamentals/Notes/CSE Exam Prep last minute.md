---
title: CSE Exam Prep last minute
created: 2026-06-15
source: Cherry Studio
tags: 
---
## 🤖 Assistant

Here is your **last 60-minute rapid revision guide** for CSE-1101.  
I have selected only the **most repeated questions** from the master file and written **memorizable, mark-fetching answers**. Read this twice before entering the exam hall.

---

## **TOPIC 1: MEMORY (RAM / ROM / CACHE / SSD / HDD)**
*Appeared 21 times — Highest priority*

### 1. Differentiate Primary vs Secondary Memory
| Feature | Primary Memory | Secondary Memory |
|---|---|---|
| **Access** | Directly accessed by CPU | Not directly accessed by CPU |
| **Speed** | Very fast | Slow |
| **Volatility** | RAM is volatile; ROM is non-volatile | Non-volatile (permanent) |
| **Cost/Capacity** | Expensive, small capacity | Cheap, large capacity |
| **Examples** | RAM, ROM, Cache | HDD, SSD, CD, DVD |

### 2. RAM vs ROM
- **RAM (Random Access Memory):** Volatile, read/write memory, stores data/programs currently in use, called **working memory** of the computer. Loses data when power is off.
- **ROM (Read Only Memory):** Non-volatile, stores permanent instructions (BIOS), cannot be easily modified. Retains data without power.

### 3. SRAM vs DRAM
- **SRAM (Static RAM):** Uses flip-flops. Faster, more expensive, does **not** need refreshing. Used for **Cache memory**.
- **DRAM (Dynamic RAM):** Uses capacitors. Slower, cheaper, **requires periodic refresh**. Used as **main memory (RAM)**.

### 4. Cache Memory, Cache Hit & Cache Miss
- **Cache:** Very small, high-speed memory placed between CPU and RAM to store frequently used data.
- **Cache Hit:** CPU finds data in cache → very fast access → improves performance.
- **Cache Miss:** Data not in cache → CPU must fetch from slower RAM → reduces performance.
- **Impact:** Higher hit rate = faster system speed.

### 5. HDD Working Principle
- Uses **magnetic storage**.
- One or more **rotating platters** coated with magnetic material.
- A **read/write head** moves over the platters to magnetize/unmagnetize spots (0 or 1).
- Data is stored in concentric circles called **tracks**.

### 6. SSD and its relation to HDD/SDRAM
- **SSD (Solid State Drive):** Uses **NAND flash memory** (no moving parts).
- **Relation:** SSD is **non-volatile storage** like HDD but much faster. **SDRAM** is volatile memory (RAM). SSD is used as a faster replacement for HDD.

### 7. ROM Types (PROM, EPROM, EEPROM)
- **PROM:** Programmable once by user.
- **EPROM:** Erasable using UV light, can be reprogrammed.
- **EEPROM:** Electrically erasable, can be reprogrammed in-circuit.

### 8. Disk Access Time Formula (For Numericals)
> **Average Access Time = Seek Time + Rotational Latency + Transfer Time + Controller Overhead**
- **Seek Time:** Time for head to reach track.
- **Rotational Latency:** Average = `(60 / RPM) × 0.5`.
- **Transfer Time:** `Data Size / Data Transfer Rate`.

---

## **TOPIC 2: C PROGRAMMING & ALGORITHMS**
*Appeared 21 times — Write these perfectly*

### 1. Algorithm: Find Largest Among Three Numbers
```
Step 1: START
Step 2: Read three integers A, B, C
Step 3: IF A > B AND A > C THEN
           Print "A is largest"
        ELSE IF B > C THEN
           Print "B is largest"
        ELSE
           Print "C is largest"
Step 4: STOP
```

### 2. Flowchart for Even or Odd
- **Start** → Input number (n) → Decision: `n % 2 == 0?` → Yes: Print "Even" → Stop. No: Print "Odd" → Stop.

### 3. Basic Structure of a C Program
```c
#include <stdio.h>          // Preprocessor directive
int main() {                // main function
    int a;                  // Declaration
    a = 10;                 // Executable statement
    printf("%d", a);        // Output
    return 0;               // End
}
```
**Components:** Documentation, Preprocessor, Global Declaration, `main()` function, User-defined functions.

### 4. Program Development Life Cycle
1. **Problem Analysis** → understand requirements.
2. **Algorithm/Flowchart Design**.
3. **Coding** (writing the program).
4. **Compilation & Debugging** (fix errors).
5. **Testing & Execution**.
6. **Maintenance**.

### 5. Data Types in C
| Type | Purpose | Example |
|---|---|---|
| `int` | Whole numbers | `int age = 20;` |
| `float` | Decimal numbers (6 digits) | `float pi = 3.14;` |
| `double` | Large decimal (15 digits) | `double d = 3.14159;` |
| `char` | Single character | `char c = 'A';` |

### 6. Variable Naming Rules
- Must start with a **letter** or **underscore**.
- Can contain letters, digits, underscore.
- **No spaces, no special symbols**, and **cannot be a keyword** (e.g., `int`, `float` cannot be used as variable names).
- Case-sensitive.

### 7. Local vs Global Variable
- **Local:** Declared inside a function. Accessible only within that function.
- **Global:** Declared outside all functions. Accessible by all functions in the program.

### 8. Nested `if-else` (Check Positive/Negative/Zero)
```c
if (n > 0) printf("Positive");
else if (n < 0) printf("Negative");
else printf("Zero");
```

---

## **TOPIC 3: COMPUTER NETWORKS & TOPOLOGIES**
*Appeared 16 times — Diagrams are mandatory*

### 1. LAN vs MAN vs WAN
| Feature | LAN | MAN | WAN |
|---|---|---|---|
| **Area** | Room/Building/Campus | City/Town | Country/World |
| **Owner** | Private organization | ISP / Multiple orgs | Public / Subscription |
| **Speed** | Very high (up to 1 Gbps) | Moderate | Lower (up to 150 Mbps) |
| **Example** | Office network | Cable TV network | Internet |

### 2. Network Topologies (Diagram Description)
- **Bus:** All devices connected to a single backbone cable. Cheap, but collision is common; fault in cable stops whole network.
- **Star:** All devices connect to a central **hub/switch**. Easy to install; if hub fails, network down; most common today.
- **Ring:** Devices connected in a circle. Data travels in one direction (token passing). Failure of one node breaks the ring.
- **Mesh:** Every device connected to every other. Highly reliable, redundant paths, but very expensive and complex.
- **Tree:** Hybrid of star + bus. Hierarchical structure. Good for large networks.

### 3. IP Address vs MAC Address
- **IP Address:** **Logical** address assigned by network software. Can change. Used for routing across networks (e.g., 192.168.1.1).
- **MAC Address:** **Physical** address burned into the Network Interface Card (NIC) by manufacturer. Unique and permanent. Used inside a local network.

### 4. Hub vs Switch vs Router
| Device | Layer | Function |
|---|---|---|
| **Hub** | Layer 1 | Broadcasts data to all ports; dumb device |
| **Switch** | Layer 2 | Uses MAC table to send data to specific port; intelligent |
| **Router** | Layer 3 | Connects different networks; routes using IP address |

### 5. How DNS Works
- **DNS (Domain Name System)** translates human-readable names (e.g., `google.com`) into IP addresses.
- **Process:** User types URL → Browser sends query to **DNS Server** → DNS looks up domain in its database → Returns IP address → Browser connects to that IP.

### 6. Client-Server vs Peer-to-Peer (P2P)
- **Client-Server:** Central server provides services; clients request. Secure, scalable, but server is single point of failure.
- **P2P:** No central server; all peers are equal. Share files directly. Easy to set up, but less secure.

---

## **TOPIC 4: COMPUTER ORGANIZATION & COMPONENTS**
*Appeared 15 times — Draw the block diagram*

### 1. Block Diagram of Digital Computer (Explain)
```
[Input] --BUS--> [CPU] --BUS--> [Memory] --BUS--> [Output]
                    |                |
                    +---> [Storage] <--+
```
**Components:**
- **Input Devices:** Keyboard, Mouse (feed data).
- **CPU (Central Processing Unit):** The brain.
  - **ALU:** Performs arithmetic and logic operations.
  - **CU:** Controls and coordinates all operations.
  - **Registers:** Temporary high-speed storage inside CPU.
- **Memory Unit:** Stores data and instructions being processed.
- **Output Devices:** Monitor, Printer (display results).
- **Storage:** HDD/SSD (permanent data).
- **Buses:** Address Bus, Data Bus, Control Bus (wires that connect everything).

### 2. Five Generations of Computers (Brief)
| Gen | Technology | Feature |
|---|---|---|
| 1st | Vacuum tubes | Huge, slow, high heat |
| 2nd | Transistors | Smaller, faster, reliable |
| 3rd | Integrated Circuits (ICs) | Even smaller, cheaper |
| 4th | Microprocessors | Personal computers, VLSI |
| 5th | AI / ULSI / Parallel processing | Natural language, robotics |

### 3. Port, Bus, Interface
- **Port:** Physical connection point on computer to attach external devices (USB port, HDMI port).
- **Bus:** Set of electrical pathways/wires that transfer data between CPU, memory, and I/O devices.
- **Interface:** The boundary/shared point where two different systems/devices meet and communicate.

---

## **TOPIC 5: OPERATING SYSTEMS & SOFTWARE**
*Appeared 12 times*

### 1. Functions of Operating System
1. **Process Management** — scheduling, creation, termination of processes.
2. **Memory Management** — allocation/deallocation of RAM.
3. **File Management** — organizing files and directories.
4. **Device Management** — controls peripherals via drivers.
5. **Security & Access Control** — user authentication.
6. **User Interface** — CLI or GUI.

### 2. Multitasking vs Multiprocessing
- **Multitasking:** One CPU executes multiple tasks by switching rapidly (time-sharing). Only one process actually runs at a micro-moment.
- **Multiprocessing:** Multiple CPUs/Cores work together to execute multiple processes **truly simultaneously**.

### 3. Booting Process
1. Press power → **BIOS/UEFI** runs **POST** (Power On Self Test).
2. BIOS locates the **Bootloader** from bootable device.
3. Bootloader loads the **OS Kernel** into RAM.
4. Kernel initializes drivers and system services.
5. OS takes control and displays login/user screen.

### 4. System Software vs Application Software
| System Software | Application Software |
|---|---|
| Manages hardware and provides platform | Performs specific user tasks |
| Essential for computer to run | Installed as per user need |
| Example: OS, Compiler, Device Drivers | Example: MS Word, Browser, Calculator |

### 5. File System vs DBMS
- **File System:** OS manages data as files; data redundancy, no easy sharing, no concurrency control.
- **DBMS:** Software specially designed to manage data; no redundancy, multi-user access, secure, uses SQL, ACID properties.

---

## **TOPIC 6: NUMBER SYSTEMS & CONVERSIONS**
*Appeared 11 times — Learn the shortcuts*

### 1. Conversion Cheat Sheet
| Conversion | Method |
|---|---|
| **Binary → Octal** | Group bits in **3** from right, convert each |
| **Binary → Hex** | Group bits in **4** from right, convert each |
| **Octal → Binary** | Each octal digit → 3 bits |
| **Hex → Binary** | Each hex digit → 4 bits |
| **Decimal → Binary** | Divide by 2, record **remainders** bottom-up |
| **Decimal → Octal** | Divide by 8, record remainders |
| **Decimal → Hex** | Divide by 16, record remainders |

### 2. Common Exam Examples
- **(345)₁₀ → Binary:** `101011001`
- **(345)₁₀ → Octal:** `531`
- **(345)₁₀ → Hex:** `159`
- **(11101)₂ → Decimal:** `1×16+1×8+1×4+0×2+1×1 = 29`
- **(2A7)₁₆ → Decimal:** `2×256 + 10×16 + 7 = 679`
- **(1A7)₁₆ → Binary:** `0001 1010 0111` → `110100111`

### 3. BCD (Binary Coded Decimal)
- Each decimal digit is converted to a **4-bit binary** separately.
- **(259)₁₀ in BCD:** `0010 0101 1001`
- BCD to Decimal: Split into 4-bit groups → convert each to decimal digit.

### 4. ASCII Values (Must Remember)
- `'A'` = **65**
- `'a'` = **97**
- `'0'` = **48**

### 5. Binary Arithmetic
- **Addition:** `1 + 1 = 10` (0 carry 1)
- **Subtraction:** Borrow `2` from left.
- **Division:** Similar to decimal, use binary multiplication/subtraction.

---

## **⚡ 60-Minute Study Plan**
| Time | Action |
|---|---|
| **0–10 min** | Read Memory (Topic 1) — definitions are guaranteed marks. |
| **10–25 min** | C Programming (Topic 2) — memorize the algorithm and structure of C. |
| **25–35 min** | Networks (Topic 3) — draw topology diagrams in air while reading. |
| **35–45 min** | Computer Organization (Topic 4) — draw the block diagram once on paper. |
| **45–55 min** | OS & Software (Topic 5) — memorize the table differences. |
| **55–60 min** | Number Systems (Topic 6) — glance at conversion rules and ASCII values. |

**Pro Tip:** In the exam, if asked for a diagram you forgot, **draw a neat box diagram with labels** and write a 2-line explanation for each label. You will get 70% of the marks.

Good luck! 🎯
