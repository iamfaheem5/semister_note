Here are fully exam-ready answers for all the questions:

---

## Incourse 2 – 2024

**Q1. Define output devices and list the common output devices. Explain the working principle of a CRT monitor.**

**Output Devices** are hardware components that display, print, or otherwise present processed data from the computer to the user.

Common output devices: Monitor, Printer, Speaker, Projector, Plotter.

**Working Principle of a CRT Monitor:****Steps (exam-point form):**

1. **Electron Gun** — Located at the back of the CRT; emits a narrow beam of electrons when high voltage is applied to the cathode.
2. **Electron Beam Formation** — A stream of electrons is generated and directed forward.
3. **Deflection System** — The beam passes through electromagnets or electrostatic plates that deflect it horizontally and vertically to any screen position.
4. **Phosphorescent Screen** — The front of the CRT is coated with phosphor material. When the electron beam strikes it, the phosphor emits visible light (glows).
5. **Image Formation** — By varying beam intensity and controlling horizontal/vertical movement, the beam "paints" the image on screen pixel by pixel.
6. **Refresh** — This entire process repeats many times per second (the refresh rate), creating a continuous visible image.

---

## Semester Final – 2021

**Q1. Define data and information. Write down the names of five output devices. [4 marks]**

**Data** is raw, unorganized facts that have not yet been processed. It can be in any form — text, numbers, images, or measurements. Example: a list of student marks.

**Information** is processed, structured, and meaningful data that is useful for decision-making. Example: finding which student has the highest CGPA from that list.

**Five output devices:**

1. Monitor
2. Printer
3. Speaker
4. Projector
5. Plotter

---

**Q2. Write a comparative study between impact printer and non-impact printer. [4 marks]**

|Feature|Impact Printer|Non-Impact Printer|
|---|---|---|
|**Working principle**|Physically strikes ink ribbon against paper|Does not physically touch the paper|
|**Noise**|Loud (mechanical striking)|Quiet|
|**Print quality**|Lower quality|Higher, sharper quality|
|**Speed**|Slower|Faster|
|**Cost**|Low initial cost|Higher initial cost|
|**Multi-copy**|Can print carbon copies simultaneously|Cannot print carbon copies|
|**Examples**|Dot matrix printer, Daisy wheel printer|Inkjet printer, Laser printer|

---

## Semester Final – 2023

**Q1. Short notes on (i) LCD monitor, (ii) Scanner, (iii) Printer. [6 marks]**

**(i) LCD Monitor (Liquid Crystal Display)**

An LCD monitor is a flat-panel display that uses liquid crystals and a backlight (CCFL or LED) to produce images. It is thin, lightweight, and energy-efficient. Liquid crystals do not emit light on their own — they control light passing through them by twisting or untwisting when voltage is applied. LCD monitors are widely used in computers, laptops, and televisions due to their compact size and low power consumption.

**(ii) Scanner**

A scanner is an input device that converts physical documents or images into digital form that the computer can process. It uses a light source and sensors to capture the image. Three basic types are:

- **Sheet-feed scanner** — automatically feeds multiple pages; used in offices
- **Flatbed scanner** — document is placed on a flat glass surface; handles books, photos, 3D objects
- **Handheld scanner** — portable device moved manually over the surface; useful for on-the-go scanning

**(iii) Printer**

A printer is an output device that produces hard copies (printed output) on paper. Two main categories:

- **Impact printers** — physically strike an ink ribbon against paper (e.g., dot matrix printer). Loud but can print carbon copies.
- **Non-impact printers** — do not touch the paper directly. Examples:
    - _Inkjet printer_ — sprays tiny droplets of ink; good color quality
    - _Laser printer_ — uses laser beam and toner; fast and high quality; ideal for offices

---

## Semester Final – 2024

**Q1. What happens when you press a key on the computer keyboard? Explain in detail. [3 marks]**

When you press a key on the keyboard, the following steps occur:

1. **Key pressed → electrical signal generated** — Each key sits over a switch. When pressed, the switch closes and generates a small electrical signal.
    
2. **Keyboard controller detects the key** — A microcontroller inside the keyboard detects which key was pressed based on its position in the key matrix (a grid of rows and columns). Every key has a unique position.
    
3. **Scan code sent to computer** — The keyboard sends a unique binary code called a **scan code** to the computer via a wired (USB/PS2) or wireless connection.
    
4. **OS interprets the scan code** — The operating system's keyboard driver receives the scan code and translates it into the corresponding character using the active keyboard layout (e.g., QWERTY).
    
5. **Character stored as ASCII/Unicode** — The character is stored in memory as its ASCII or Unicode value (e.g., pressing 'A' stores decimal 65).
    
6. **Output displayed** — Finally, the application (e.g., a text editor) reads this value and displays the character on the monitor.
    

> **Key point to remember:** The character itself is not stored directly — its ASCII/Unicode integer value is stored, and `%c` format displays it as a character.