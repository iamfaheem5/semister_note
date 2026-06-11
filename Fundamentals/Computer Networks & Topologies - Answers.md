Here are clean, exam-ready answers for all the questions:

---
---

## Incourse 2 – 2024

### Q1. Major Types of Network Topologies (with diagrams)**Network topology** is the arrangement of how devices are connected in a network.
![[Pasted image 20260610162720.png|697]]

**1. Bus Topology** — All devices are connected to a single backbone cable. Data is broadcast to every node. Simple and cheap, but if the backbone fails, the entire network goes down.

**2. Star Topology** — All devices connect to a central hub/switch. Easy to manage and fault-tolerant (one cable failure doesn't affect others), but the hub is a single point of failure.

**3. Ring Topology** — Each device connects to exactly two others, forming a closed loop. Data travels in one direction. Failure of one node can disrupt the whole network.

**4. Mesh Topology** — Every device connects to every other device. Highly reliable and fault-tolerant, but expensive and complex due to the large number of cables required.

**5. Tree (Hybrid) Topology** — A hierarchical combination of star and bus topologies. Root node connects to sub-hubs, which connect to end devices. Scalable but dependent on the root node.

---

## Semester Final – 2021

### Q1. What is RJ-45? Short note on Star and Ring Topologies.

**RJ-45** (Registered Jack-45) is an 8-pin physical connector used to connect devices to a network via an Ethernet cable (twisted pair cable). It is the standard connector for LAN connections, plugging into network interface cards, switches, and routers.

**Star Topology:** All devices are connected to a central hub or switch via individual cables. If one cable or device fails, the rest of the network continues to work. The central hub controls all communication. Disadvantage: if the hub fails, the whole network fails.

**Ring Topology:** Devices are connected in a circular chain. Each device has exactly two neighbors. Data flows in one direction (unidirectional). Each device acts as a repeater. Disadvantage: failure of a single device or cable can disrupt the entire network.

---

## Semester Final – 2022

### Q1. Components Needed to Establish a Computer Network

- **Network Interface Card (NIC):** Hardware that physically connects a computer to the network.
- **Hub/Switch:** Hub broadcasts data to all devices; a switch sends data only to the target device.
- **Router:** Connects different networks and directs data packets between them.
- **Transmission Media:** Cables (twisted pair, coaxial, fiber optic) or wireless medium (Wi-Fi).
- **Modem:** Converts digital signals to analog (and vice versa) for internet access.
- **Network Protocols:** Rules for communication (e.g., TCP/IP).
- **Network Operating System:** Software to manage network resources (e.g., Windows Server, Linux).

---

### Q2. Distinguish between LAN, MAN, and WAN

|Feature|LAN|MAN|WAN|
|---|---|---|---|
|Full form|Local Area Network|Metropolitan Area Network|Wide Area Network|
|Coverage|Single building/room|A city or campus|Country/worldwide|
|Speed|Very high|Moderate|Lower (variable)|
|Cost|Low|Medium|High|
|Example|Office network, home Wi-Fi|City-wide cable TV network|The Internet|

---

### Q3. Will Two Devices on a Network Have Identical IP Addresses?

**No.** Two devices on the same network cannot have identical IP addresses. An IP address is a unique identifier for a device on a network. If two devices had the same IP, the network would not know which device to send data to — causing an **IP conflict**, resulting in one or both devices losing network connectivity. This uniqueness is a fundamental rule of the Internet Protocol (IP).

---

### Q4. Star, Mesh, and Tree Topology — Characteristics

The diagrams are shown above. Key characteristics:

**Star Topology:**

- Central hub/switch connects all devices
- Easy fault detection and isolation
- Adding new devices is simple
- If hub fails → entire network fails

**Mesh Topology:**

- Every device is connected to every other device (fully connected mesh)
- Multiple paths for data — very reliable
- High fault tolerance
- Very expensive — requires large number of cables

**Tree (Hybrid) Topology:**

- Hierarchical structure: root → intermediate hubs → leaf nodes
- Combines features of star and bus
- Easy to expand
- If root node fails, large sections of network are affected

---

## Semester Final – 2023

### Q1. Network Topology and Its Characteristics

**Network topology** is the physical or logical arrangement of devices (nodes) and connections (links) in a computer network.

Characteristics of each:

|Topology|Key Characteristics|
|---|---|
|Bus|Single backbone cable; simple; data broadcast to all; failure of cable = network down|
|Star|Central hub; easy management; isolated fault tolerance; hub failure = total failure|
|Ring|Circular loop; unidirectional data flow; no termination ends; one failure disrupts all|
|Mesh|All devices interconnected; highly reliable; very costly; multiple data paths|
|Tree|Hierarchical; scalable; combines star + bus; root failure is critical|
|Hybrid|Mix of two or more topologies; inherits their advantages and disadvantages|

---

### Q2. Intranet and Extranet

**(i) Intranet:** A private internal network accessible only to members (employees) of an organization. It is not available to the outside world. It is used to share internal resources like databases, files, and applications. Example: A company connecting its offices in different cities on a private network. It is more secure and reliable than the public internet.

**(ii) Extranet:** An extension of an intranet that allows controlled access to specific outsiders such as partners, customers, or suppliers. It uses the internet or WAN technologies along with encryption and security. Example: A bank providing a secure online portal to its business customers to manage accounts.

---

## Semester Final – 2024

### Q1. What is a Computer Network? Differentiate LAN, MAN, WAN.

**Computer Network:** A computer network is a system of interconnected computers and devices that communicate to share resources, information, and services. Networks can range from a small home network to a global system like the Internet.

**Difference:**

|Feature|LAN|MAN|WAN|
|---|---|---|---|
|Coverage|Single building/campus|City-wide|Country/global|
|Technology|Ethernet, Wi-Fi|Telephone lines, fiber|Satellite, fiber, leased lines|
|Speed|Very high (1Gbps+)|Medium|Lower, variable|
|Ownership|Private|Private/public|Public/private|
|Example|Home/office network|City cable network|The Internet|

---

### Q2. Major Types of Network Topologies

Already answered with diagrams above. _(See diagrams at the top.)_

---

### Q3. Client-Server vs Peer-to-Peer Network

|Feature|Client-Server|Peer-to-Peer (P2P)|
|---|---|---|
|Structure|Dedicated server + clients|All devices equal (peers)|
|Control|Centralized|Decentralized|
|Cost|High (needs a server)|Low|
|Security|More secure|Less secure|
|Scalability|Easy to scale|Harder to manage at scale|
|Performance|Server handles all requests|Shared among all peers|
|Example|Web browsing (browser = client, web server = server)|BitTorrent file sharing|

**Client:** A device that requests services (e.g., web browser, email client). **Server:** A device that provides services in response (e.g., web server, file server). **Peer:** A device that acts as both client and server simultaneously.

---

### Q4. LAN, MAN, WAN with Examples

Already covered in Q1 above. Brief summary:

**LAN (Local Area Network):** Covers a small area like a room, building, or campus. Uses Ethernet or Wi-Fi. Example: Computers in a university computer lab.

**MAN (Metropolitan Area Network):** Covers a city or large campus by interconnecting multiple LANs. Example: A city-wide Wi-Fi network or cable TV network covering an entire city.

**WAN (Wide Area Network):** Spans large geographical areas like countries or continents. Uses satellite links, fiber optic cables. Example: The Internet is the largest WAN in the world.

---

**Quick tip for the exam:** For topology questions, always draw a small diagram alongside your answer — even a rough sketch earns extra marks. The diagrams above show exactly what to draw.

**1. Bus Topology** — All devices are connected to a single backbone cable. Data is broadcast to every node. Simple and cheap, but if the backbone fails, the entire network goes down.

**2. Star Topology** — All devices connect to a central hub/switch. Easy to manage and fault-tolerant (one cable failure doesn't affect others), but the hub is a single point of failure.

**3. Ring Topology** — Each device connects to exactly two others, forming a closed loop. Data travels in one direction. Failure of one node can disrupt the whole network.

**4. Mesh Topology** — Every device connects to every other device. Highly reliable and fault-tolerant, but expensive and complex due to the large number of cables required.

**5. Tree (Hybrid) Topology** — A hierarchical combination of star and bus topologies. Root node connects to sub-hubs, which connect to end devices. Scalable but dependent on the root node.

---

## Semester Final – 2021

### Q1. What is RJ-45? Short note on Star and Ring Topologies.

**RJ-45** (Registered Jack-45) is an 8-pin physical connector used to connect devices to a network via an Ethernet cable (twisted pair cable). It is the standard connector for LAN connections, plugging into network interface cards, switches, and routers.

**Star Topology:** All devices are connected to a central hub or switch via individual cables. If one cable or device fails, the rest of the network continues to work. The central hub controls all communication. Disadvantage: if the hub fails, the whole network fails.

**Ring Topology:** Devices are connected in a circular chain. Each device has exactly two neighbors. Data flows in one direction (unidirectional). Each device acts as a repeater. Disadvantage: failure of a single device or cable can disrupt the entire network.

---

## Semester Final – 2022

### Q1. Components Needed to Establish a Computer Network

- **Network Interface Card (NIC):** Hardware that physically connects a computer to the network.
- **Hub/Switch:** Hub broadcasts data to all devices; a switch sends data only to the target device.
- **Router:** Connects different networks and directs data packets between them.
- **Transmission Media:** Cables (twisted pair, coaxial, fiber optic) or wireless medium (Wi-Fi).
- **Modem:** Converts digital signals to analog (and vice versa) for internet access.
- **Network Protocols:** Rules for communication (e.g., TCP/IP).
- **Network Operating System:** Software to manage network resources (e.g., Windows Server, Linux).

---

### Q2. Distinguish between LAN, MAN, and WAN

|Feature|LAN|MAN|WAN|
|---|---|---|---|
|Full form|Local Area Network|Metropolitan Area Network|Wide Area Network|
|Coverage|Single building/room|A city or campus|Country/worldwide|
|Speed|Very high|Moderate|Lower (variable)|
|Cost|Low|Medium|High|
|Example|Office network, home Wi-Fi|City-wide cable TV network|The Internet|

---

### Q3. Will Two Devices on a Network Have Identical IP Addresses?

**No.** Two devices on the same network cannot have identical IP addresses. An IP address is a unique identifier for a device on a network. If two devices had the same IP, the network would not know which device to send data to — causing an **IP conflict**, resulting in one or both devices losing network connectivity. This uniqueness is a fundamental rule of the Internet Protocol (IP).

---

### Q4. Star, Mesh, and Tree Topology — Characteristics

The diagrams are shown above. Key characteristics:

**Star Topology:**

- Central hub/switch connects all devices
- Easy fault detection and isolation
- Adding new devices is simple
- If hub fails → entire network fails

**Mesh Topology:**

- Every device is connected to every other device (fully connected mesh)
- Multiple paths for data — very reliable
- High fault tolerance
- Very expensive — requires large number of cables

**Tree (Hybrid) Topology:**

- Hierarchical structure: root → intermediate hubs → leaf nodes
- Combines features of star and bus
- Easy to expand
- If root node fails, large sections of network are affected

---

## Semester Final – 2023

### Q1. Network Topology and Its Characteristics

**Network topology** is the physical or logical arrangement of devices (nodes) and connections (links) in a computer network.

Characteristics of each:

|Topology|Key Characteristics|
|---|---|
|Bus|Single backbone cable; simple; data broadcast to all; failure of cable = network down|
|Star|Central hub; easy management; isolated fault tolerance; hub failure = total failure|
|Ring|Circular loop; unidirectional data flow; no termination ends; one failure disrupts all|
|Mesh|All devices interconnected; highly reliable; very costly; multiple data paths|
|Tree|Hierarchical; scalable; combines star + bus; root failure is critical|
|Hybrid|Mix of two or more topologies; inherits their advantages and disadvantages|

---

### Q2. Intranet and Extranet

**(i) Intranet:** A private internal network accessible only to members (employees) of an organization. It is not available to the outside world. It is used to share internal resources like databases, files, and applications. Example: A company connecting its offices in different cities on a private network. It is more secure and reliable than the public internet.

**(ii) Extranet:** An extension of an intranet that allows controlled access to specific outsiders such as partners, customers, or suppliers. It uses the internet or WAN technologies along with encryption and security. Example: A bank providing a secure online portal to its business customers to manage accounts.

---

## Semester Final – 2024

### Q1. What is a Computer Network? Differentiate LAN, MAN, WAN.

**Computer Network:** A computer network is a system of interconnected computers and devices that communicate to share resources, information, and services. Networks can range from a small home network to a global system like the Internet.

**Difference:**

|Feature|LAN|MAN|WAN|
|---|---|---|---|
|Coverage|Single building/campus|City-wide|Country/global|
|Technology|Ethernet, Wi-Fi|Telephone lines, fiber|Satellite, fiber, leased lines|
|Speed|Very high (1Gbps+)|Medium|Lower, variable|
|Ownership|Private|Private/public|Public/private|
|Example|Home/office network|City cable network|The Internet|

---

### Q2. Major Types of Network Topologies

Already answered with diagrams above. _(See diagrams at the top.)_

---

### Q3. Client-Server vs Peer-to-Peer Network

|Feature|Client-Server|Peer-to-Peer (P2P)|
|---|---|---|
|Structure|Dedicated server + clients|All devices equal (peers)|
|Control|Centralized|Decentralized|
|Cost|High (needs a server)|Low|
|Security|More secure|Less secure|
|Scalability|Easy to scale|Harder to manage at scale|
|Performance|Server handles all requests|Shared among all peers|
|Example|Web browsing (browser = client, web server = server)|BitTorrent file sharing|

**Client:** A device that requests services (e.g., web browser, email client). **Server:** A device that provides services in response (e.g., web server, file server). **Peer:** A device that acts as both client and server simultaneously.

---

### Q4. LAN, MAN, WAN with Examples

Already covered in Q1 above. Brief summary:

**LAN (Local Area Network):** Covers a small area like a room, building, or campus. Uses Ethernet or Wi-Fi. Example: Computers in a university computer lab.

**MAN (Metropolitan Area Network):** Covers a city or large campus by interconnecting multiple LANs. Example: A city-wide Wi-Fi network or cable TV network covering an entire city.

**WAN (Wide Area Network):** Spans large geographical areas like countries or continents. Uses satellite links, fiber optic cables. Example: The Internet is the largest WAN in the world.

---

**Quick tip for the exam:** For topology questions, always draw a small diagram alongside your answer — even a rough sketch earns extra marks. The diagrams above show exactly what to draw.