# Computer Organization & Components — Complete Exam Answers

---

## 1. What is a computer, and what are its main components? Describe their functions.
*(Incourse 1 - 2024)*

**Computer:** A computer is a programmable electronic device that accepts raw data as input, processes it according to a set of instructions (program), and produces output. It was first conceptualized by Charles Babbage in 1837.

**Main Components and Their Functions:**

| Component                         | Function                                                                   |
| --------------------------------- | -------------------------------------------------------------------------- |
| **Input Unit**                    | Accepts data/instructions from the user via keyboard, mouse, scanner, etc. |
| **CPU (Central Processing Unit)** | The "brain" — processes data using ALU and CU                              |
| **Memory Unit**                   | Stores data and instructions temporarily (RAM) or permanently (ROM/HDD)    |
| **Output Unit**                   | Presents processed results via monitor, printer, speaker, etc.             |
| **Storage Unit**                  | Holds data long-term via HDD, SSD, USB drives                              |

**Inside the CPU:**
- **ALU (Arithmetic Logic Unit):** Performs arithmetic (+, −, ×, ÷) and logical (AND, OR, NOT) operations
- **Control Unit (CU):** Directs and coordinates all operations of the computer
- **Registers:** Tiny, ultra-fast storage inside CPU for immediate use

**Basic Flow:**
```
Input → CPU (Control Unit + ALU + Registers) → Output
              ↕
           Memory
```

---

## 2. Define output devices and list commonly used output devices. Explain the working principle of a CRT monitor.
*(Incourse 2 - 2024)*
**must read letter **
**Output Devices:** Hardware components that receive processed data from the computer and present it to the user in a human-readable form.

**Common Output Devices:**
- Monitor
- Printer
- Speaker
- Projector
- Plotter

**Working Principle of CRT Monitor:**

A **Cathode Ray Tube (CRT)** monitor works on the principle of electron beam deflection:

1. **Electron Gun** — Located at the rear of the tube; emits a beam of electrons when high voltage is applied to the cathode
2. **Beam Formation** — The electron gun generates a focused, narrow stream of electrons
3. **Deflection System** — Electromagnets/electrostatic plates deflect the beam both horizontally and vertically to target specific positions on the screen
4. **Phosphorescent Screen** — The front of the CRT is coated with phosphor material; when struck by electrons, it emits visible light
5. **Image Formation** — By varying beam intensity and controlling deflection, the beam "paints" the image on screen line by line (raster scanning)

```
[Electron Gun] → [Beam] → [Deflection Plates] → [Phosphor Screen]
                                                      ↓
                                               Light emitted = Image
```

---

## 3. Write down the factors affecting the processing speed of a computer system.
*(Semester Final - 2021 | 4 Marks)*

**Factors Affecting Processing Speed:**

1. **Clock Speed** — Measured in GHz; higher clock speed = more instructions per second
2. **Number of Cores** — Multi-core processors handle multiple tasks simultaneously
3. **Cache Memory Size** — Larger cache means fewer slow RAM accesses; speeds up data retrieval
4. **RAM Size & Speed** — More RAM allows more programs to run simultaneously without slowdown
5. **Bus Width** — Wider data bus (e.g., 64-bit) transfers more data per cycle
6. **Type of CPU Architecture** — Modern architectures (pipelining, superscalar) execute multiple instructions at once
7. **Storage Speed** — SSD vs HDD — faster storage reduces data load time

---

## 4. Define data and information. Write down the names of five output devices.
*(Semester Final - 2021 | 4 Marks)*

**Data:** Raw, unorganized facts that have no meaning on their own. Example: numbers, letters, symbols (e.g., "001, 3.4, X")

**Information:** Data that has been processed and organized in a meaningful way to be useful. Example: *"Student X has a CGPA of 3.4 in 4th Semester"*

> Key difference: Data is **input**; Information is **processed output**.

**Five Output Devices:**
1. Monitor
2. Printer
3. Speaker
4. Projector
5. Plotter

---

## 5. Define Computer. With an appropriate diagram explain the organization of a computer.
**read letter**
   
*(Semester Final - 2023 | 5 Marks)*

**Definition:** A computer is a programmable electronic device that accepts raw data as input, processes it using a set of instructions, and produces meaningful output. It can store data and perform both arithmetic and logical operations.

**Organization of a Computer:**

```
┌─────────────┐     ┌─────────────────────────────────┐     ┌──────────────┐
│  INPUT      │     │         C P U                   │     │   OUTPUT     │
│  UNIT       │────▶│  ┌──────────────┐  ┌─────────┐  │────▶│   UNIT       │
│             │     │  │  Control     │  │   ALU   │  │     │              │
│ (Keyboard,  │     │  │  Unit (CU)   │  │         │  │     │ (Monitor,    │
│  Mouse,     │     │  └──────────────┘  └─────────┘  │     │  Printer)    │
│  Scanner)   │     │       Registers                  │     │              │
└─────────────┘     └────────────┬────────────────────┘     └──────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │      MEMORY UNIT         │
                    │   Primary (RAM, ROM)     │
                    │   Secondary (HDD, SSD)   │
                    └──────────────────────────┘
```

**Component Functions:**
- **Input Unit:** Feeds data into the computer
- **Control Unit:** Directs and manages all operations
- **ALU:** Performs arithmetic and logical calculations
- **Memory:** Stores data and instructions
- **Output Unit:** Displays or delivers processed results

---

## 6. Define (i) Port (ii) Bus.
*(Semester Final - 2023 | 2 Marks)*

**(i) Port:** A port is a physical interface or connection point on a computer through which peripheral devices are connected. Examples: USB port, HDMI port, VGA port, audio jack.

**(ii) Bus:** A bus is a communication system (set of electrical wires/lines) that transfers data between components inside or outside a computer. Types include **data bus** (carries data), **address bus** (carries memory addresses), and **control bus** (carries control signals).

---

## 7. Explain the basic organization of a digital computer with appropriate figure.
*(Semester Final - 2024 | 5 Marks)*

*(Same core answer as Q5 above — use the diagram and component descriptions. Add the following for completeness:)*

**Data Flow Explanation:**

1. User provides input via input devices
2. Input is sent to **CPU** through the **bus**
3. **CU** fetches instructions from memory and directs the **ALU**
4. **ALU** performs calculations; results stored in registers/memory
5. Final output is sent to output devices

The entire system communicates over three types of buses:
- **Data Bus** — transfers actual data
- **Address Bus** — specifies memory location
- **Control Bus** — sends control/timing signals

---

## 8. What happens when you press a key on the computer keyboard? Explain in detail.
*(Semester Final - 2024 | 3 Marks)*

1. **Key Press Detected** — Each key sits over a switch; pressing closes the circuit
2. **Scancode Generated** — The keyboard controller generates a unique **scancode** for that key
3. **Signal Sent to CPU** — The scancode is sent to the CPU via an **interrupt signal** through the keyboard port (USB/PS2)
4. **OS Interprets the Code** — The operating system's keyboard driver translates the scancode into the corresponding character
5. **Character Displayed** — The character is sent to the active application and displayed on screen via the **output system**

> Example: Pressing **'A'** → scancode 0x1E generated → OS reads it → ASCII value 65 → 'A' appears on monitor

---

## 9. Draw the block diagram of a Digital Computer and explain.
*(Incourse 1 - MEC 2026 | 5 Marks)*

*(Use the diagram from Q5/Q7. Add this explanation:)*

A digital computer processes data in **binary (0s and 1s)**. Its block diagram has five functional units:

| Unit | Role |
|---|---|
| Input Unit | Converts user input into binary signals |
| Control Unit | Acts as the manager — sequences all operations |
| ALU | Executes all math and logic operations |
| Memory Unit | Stores programs and data |
| Output Unit | Converts binary results to human-readable form |

All units are connected via the **system bus** which acts as the communication highway.

---

## 10. What do you understand by a computer system? Describe its major components and their functions.
*(NITER 2025 | 1+4 Marks)*

**Computer System (1 mark):** A computer system is a complete, working set of hardware, software, and human resources that work together to accept input, process data, store information, and produce output.

**Major Components and Functions (4 marks):**

- **Hardware:** Physical components — CPU, RAM, keyboard, monitor, HDD
- **Software:** Programs that instruct hardware — OS, application software
- **Input Devices:** Allow data entry — keyboard, mouse, scanner
- **CPU:** Processes all instructions using CU and ALU
- **Memory:**
  - *Primary (RAM/ROM):* Fast, temporary/permanent storage for active data
  - *Secondary (HDD/SSD):* Large, permanent storage
- **Output Devices:** Present results — monitor, printer, speaker
- **Human Resources (Humanware):** System analysts, programmers, operators who operate the system

---

## 11. Compare the five generations of computers in terms of technology used and improvements achieved.
*(NITER 2025 | 5 Marks)*

| Generation | Period | Technology | Key Improvement |
|---|---|---|---|
| **1st** | 1946–1959 | Vacuum Tubes | First electronic computers; slow, large, expensive |
| **2nd** | 1959–1965 | Transistors | Smaller, faster, more reliable; assembly language used |
| **3rd** | 1965–1971 | Integrated Circuits (ICs) | Even smaller; high-level languages (FORTRAN, COBOL) |
| **4th** | 1971–1980 | VLSI (Very Large Scale Integration) | Microprocessors born; personal computers emerge |
| **5th** | 1980–present | ULSI + AI | Parallel processing, AI, natural language; laptops, smartphones |

**Trend across generations:** Size ↓, Speed ↑, Cost ↓, Power consumption ↓, Intelligence ↑

---

## 12. Mention the various types of computers on the basis of size and capability. Also draw the block diagram of a microcomputer.
*(NITER 2025 | 2+3 Marks)*

**Types by Size and Capability (2 marks):**
1. **Supercomputer** — Fastest; used for weather forecasting, nuclear research (e.g., Fugaku)
2. **Mainframe** — Handles hundreds of users simultaneously; used in banking, telecom
3. **Minicomputer** — Mid-range; 4–200 users; used in institutions
4. **Microcomputer** — Personal computer for individual use; laptops, desktops

**Block Diagram of a Microcomputer (3 marks):**

```
┌──────────────┐         ┌─────────────────────┐
│  INPUT       │         │     MICROPROCESSOR   │
│  DEVICES     │────────▶│  ┌────────┐ ┌─────┐ │
│  (Keyboard,  │         │  │  CU    │ │ ALU │ │
│   Mouse)     │         │  └────────┘ └─────┘ │
└──────────────┘         │     Registers        │
                         └──────────┬──────────┘
                ┌──────────────────▼──────────────────┐
                │              SYSTEM BUS              │
                └──────┬──────────────────┬────────────┘
              ┌────────▼───┐        ┌─────▼────────┐
              │   MEMORY   │        │   OUTPUT     │
              │  RAM + ROM │        │   DEVICES    │
              │  + Storage │        │  (Monitor,   │
              └────────────┘        │   Printer)   │
                                    └──────────────┘
```

---

## 13. Define Computer. With a neat diagram explain the organization of a computer system.
*(STEC 2026 | 5 Marks)*

*(See Q5 for full answer — identical question.)*

---

## 14. Describe the data processing cycle.
*(STEC 2026 | 5 Marks)*

The **Data Processing Cycle** is the sequence of steps a computer follows to convert raw data into useful information.

```
[Input] → [Processing] → [Output]
              ↕
          [Storage]
```

**Stages:**

1. **Input:** Raw data is collected and entered into the system via input devices (keyboard, scanner, sensors)

2. **Processing:** The CPU manipulates the data according to program instructions:
   - **ALU** performs calculations
   - **CU** manages the sequence of operations

3. **Output:** The processed result (information) is presented to the user via output devices (monitor, printer)

4. **Storage:** Data and results are saved in memory (RAM for temporary, HDD/SSD for permanent storage) for future use

**Example:**
- **Input:** Student marks (60, 75, 80)
- **Processing:** Calculate average = (60+75+80)/3 = 71.67
- **Output:** Display "Average marks: 71.67"
- **Storage:** Save result in student database

The cycle may repeat continuously — output of one cycle can become input to the next.

---

## 15. Define (i) Port (ii) Interface (iii) Bus.
*(STEC 2026 | 5 Marks)*

**(i) Port (~1.5 marks):** A port is a physical or logical connection point that allows a computer to connect to external devices or networks. Physical examples include USB, HDMI, VGA, and Ethernet ports.

**(ii) Interface (~1.5 marks):** An interface is a shared boundary or connection layer between two systems, devices, or software components that enables them to communicate. It can be hardware (e.g., USB interface) or software (e.g., Graphical User Interface/GUI, API). It defines the rules and protocols for interaction.

**(iii) Bus (~2 marks):** A bus is a set of parallel communication lines (wires/traces) that carry data between components of a computer. There are three types:
- **Data Bus** — carries actual data; width (8, 16, 32, 64-bit) affects speed
- **Address Bus** — carries memory addresses to locate data
- **Control Bus** — carries control signals (read/write commands, clock signals)

> The wider the bus, the more data transferred per cycle → faster performance.