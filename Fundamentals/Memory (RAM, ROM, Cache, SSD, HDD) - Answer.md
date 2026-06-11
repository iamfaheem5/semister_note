
5. **What is the average access time for transferring 512 bytes of data with the following specifications:**
   - Average seek time = 5 msec
   - Disk rotation = 6000 RPM
   - Data rate = 40 KB/sec
   - Controller overhead = 0.1 msec







$$\text{Average Access Time} = \text{Average Seek Time} + \text{Average Rotational Latency} + \text{Transfer Time} + \text{Controller Overhead}$$

Here is the step-by-step solution based on the provided specifications:

### **Step 1: Average Seek Time**

The average seek time is the time required for the read/write head to move to the correct track or cylinder. This value is given directly in the problem specifications:

$$\text{Average Seek Time} = 5\text{ msec}$$

### **Step 2: Average Rotational Latency**

The rotational latency is the time it takes for the target sector to rotate underneath the read/write head. On average, the head waits for half a disk rotation.

1. **Calculate the time required for one full rotation:**
    
    The disk rotates at $6000\text{ RPM}$ (Revolutions Per Minute).
    
    $$\text{Time for one rotation} = \frac{60\text{ seconds}}{6000} = 0.01\text{ seconds}$$
    
2. **Convert the rotation time to milliseconds ($\text{msec}$):**
    
    $$0.01\text{ seconds} \times 1000\text{ msec/sec} = 10\text{ msec}$$
    
3. **Calculate the average rotational latency (half of a full rotation):**
    
    $$\text{Average Rotational Latency} = \frac{1}{2} \times 10\text{ msec} = 5\text{ msec}$$
    

### **Step 3: Transfer Time**

The transfer time is the time required to read or write the data from the disk track to the controller buffer once the head is positioned.

1. **Convert the Data Rate to bytes per second:**
    
    The specification provides a data rate of $40\text{ KB/sec}$. In binary-based storage metrics, $1\text{ KB} = 1024\text{ bytes}$.
    
    $$\text{Data Rate} = 40 \times 1024\text{ bytes/sec} = 40960\text{ bytes/sec}$$
    
2. **Calculate the transfer time for $512\text{ bytes}$ of data:**
    
    $$\text{Transfer Time} = \frac{\text{Data Size}}{\text{Data Rate}}$$
    
    $$\text{Transfer Time} = \frac{512\text{ bytes}}{40960\text{ bytes/sec}} = 0.0125\text{ seconds}$$
    
3. **Convert the transfer time to milliseconds ($\text{msec}$):**
    
    $$0.0125\text{ seconds} \times 1000\text{ msec/sec} = 12.5\text{ msec}$$
    

### **Step 4: Controller Overhead**

The controller overhead is the time the disk controller takes to process the request and manage the data transfer. This value is given directly in the problem specifications:

$$\text{Controller Overhead} = 0.1\text{ msec}$$

### **Step 5: Calculate the Total Average Access Time**

Now, sum all the calculated time intervals together:

$$\text{Average Access Time} = 5\text{ msec} + 5\text{ msec} + 12.5\text{ msec} + 0.1\text{ msec}$$

$$\text{Average Access Time} = 22.6\text{ msec}$$

### **Final Answer:**

The average access time for transferring $512\text{ bytes}$ of data is **$22.6\text{ msec}$**.



9. **If the disk is rotating at 5400 RPM, what are the data transfer rate and average access time?**
   - Number of surfaces = 16
   - Number of tracks per surface = 128
   - Number of sectors per track = 256
   - Number of bytes per sector = 512 bytes
   - Average seek time = 25 msec
# Hard Disk — Data Transfer Rate & Average Access Time

## 🧠 First, Let's Understand What's Going On

Think of a hard disk like a stack of spinning CDs (called **platters**). Each surface has circular lanes called **tracks**, each track is divided into small chunks called **sectors**, and each sector stores a fixed amount of data (bytes).

---

## 📋 What We're Given

|Parameter|Value|
|---|---|
|Disk Speed|5400 RPM|
|Surfaces|16|
|Tracks per Surface|128|
|Sectors per Track|256|
|Bytes per Sector|512 bytes|
|Average Seek Time|25 ms|

---

## 🔁 Step 1 — Find the Rotation Time

The disk spins at **5400 RPM** (revolutions per minute). We need to know how long **one full spin** takes.

$$\text{Rotation Time} = \frac{60 \text{ seconds}}{5400} = \frac{1}{90} \text{ sec} \approx \boxed{11.11 \text{ ms}}$$

> Think of it like a fan blade — if it completes 5400 full spins per minute, each spin takes about 11 ms.

---

## 📦 Step 2 — How Much Data is on One Track?

$$\text{Data per Track} = \text{Sectors per Track} \times \text{Bytes per Sector}$$

$$= 256 \times 512 = \boxed{131{,}072 \text{ bytes}}$$

---

## ⚡ Part A — Data Transfer Rate

This is how fast data flows from the disk to the computer. The disk spins one full track past the read head in 11.11 ms, transferring 131,072 bytes in that time.

$$\text{Transfer Rate} = \frac{\text{Data per Track}}{\text{Rotation Time}} = \frac{131{,}072 \text{ bytes}}{1/90 \text{ sec}}$$

$$= 131{,}072 \times 90 = \boxed{11{,}796{,}480 \text{ bytes/sec} \approx 11.25 \text{ MB/s}}$$

---

## ⏱️ Part B — Average Access Time

Access time = how long it takes before the computer receives the first byte of data. It has **3 parts**:

### 🔍 1. Seek Time (already given)

The read head moves to the correct track. $$= 25 \text{ ms}$$

### 🔄 2. Rotational Latency

After the head reaches the right track, it waits for the right sector to spin under it. On average, it waits for **half a rotation**.

$$\text{Rotational Latency} = \frac{11.11}{2} = \boxed{5.56 \text{ ms}}$$

### 📖 3. Transfer Time (for 1 sector)

Time to read one sector (one small chunk of data):

$$\text{Transfer Time} = \frac{\text{Rotation Time}}{\text{Sectors per Track}} = \frac{11.11}{256} \approx \boxed{0.043 \text{ ms}}$$

---

### ✅ Total Average Access Time

$$\text{Access Time} = \text{Seek Time} + \text{Rotational Latency} + \text{Transfer Time}$$

$$= 25 + 5.56 + 0.043 = \boxed{\approx 30.6 \text{ ms}}$$

---

## 📊 Final Answers

||Result|
|---|---|
|**Data Transfer Rate**|**≈ 11.25 MB/s**|
|**Average Access Time**|**≈ 30.6 ms**|

> 💡 **Key Insight:** Most of the access time (25 ms) is spent just _finding_ the right track (seek time). This is why SSDs are so much faster — they have **no moving parts**, so seek time is nearly zero!