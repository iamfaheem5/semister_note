# Outline

- Computer Network
- Types of Computer Network
- Uses of Computer Network
- Network Terminologies
- Network Topology
- Links
- Media
- Network Protocol
- Network Software
- Transmission Media
- Network Interface Cards
- Client, Server, Peer

# Computer Networks

- Computer networks are systems of interconnected computers and devices that communicate with each other to share resources, information, and services.
- These networks can be as small as a local area network (LAN) within a single building or as large as a global wide area network (WAN) connecting computers across continents.

# Uses of Computer Network

- Communication : Computer networks enable communication between individuals, organizations, and devices through various means such as email, instant messaging, video conferencing, and Voice over Internet Protocol (VoIP) services.
- Internet Access : Networks provide access to the internet, allowing users to browse websites, access online services, and communicate globally.
- Resource Sharing : Networks facilitate the sharing of hardware resources such as printers, scanners, and storage devices among multiple users or devices within an organization, reducing costs and improving efficiency.

# Uses of Computer Network cont..

- Data Storage and Backup: Networks enable centralized data storage and backup solutions, where data from multiple devices can be stored securely on network-attached storage (NAS) devices or servers.
- Collaboration: Networks support collaborative work environments by enabling multiple users to access and edit shared documents, databases, and project management tools in real-time.
- Remote Access: Networks allow users to remotely access resources and applications from anywhere with an internet connection, enabling flexible working arrangements and remote management of devices and systems.
- File Sharing: Networks facilitate file sharing and transfer between devices using protocols such as File Transfer Protocol (FTP), Network File System (NFS) etc..

# Types of Computer Network

- Computer networks can be classified into various types based on their size, geographical scope, and the way they are organized.
- Here are three main types of computer networks:
- Local Area Network (LAN)
- Metropolitan Area Network (MAN)
- Wide Area Network (WAN)

# Local Area Network (LAN)

- A LAN is a network that covers a small geographical area, such as a single building, office, or campus.
- LANs typically use high-speed wired technologies like Ethernet or wireless technologies like Wi-Fi.
- They are commonly used in homes, offices, schools, and small businesses to connect devices within a limited area.

![img-0.jpeg](img-0.jpeg)

# Metropolitan Area Network (MAN)

- A metropolitan area network is a network that covers a larger geographic area by interconnecting a different LAN to form a larger network.
- Government agencies use MAN to connect to the citizens and private industries.
- In MAN, various LANs are connected to each other through a telephone exchange line.
- It has a higher range than Local Area Network(LAN).

![img-1.jpeg](img-1.jpeg)

# Wide Area Network (WAN)

- A Wide Area Network is a network that extends over a large geographical area such as states or countries.
- A Wide Area Network is quite bigger network than the LAN.
- A Wide Area Network is not limited to a single location, but it spans over a large geographical area through a telephone line, fibre optic cable or satellite links.
- The internet is one of the biggest WAN in the world.
- A Wide Area Network is widely used in the field of Business, government, and education.

![img-2.jpeg](img-2.jpeg)

# Network Terminology

- Network Topology
- Links
- Media
- Network Protocol

# Network Topology

- A Network Topology is the arrangement with which computer systems or network devices are connected to each other.
- Topologies may define both physical and logical aspect of the network.
- Both logical and physical topologies could be same or different in a same network.

# Network Topology – Bus Topology

- The bus topology is designed in such a way that all the stations are connected through a single cable known as a backbone cable.
- Each node is either connected to the backbone cable by drop cable or directly connected to the backbone cable.
- When a node wants to send a message over the network, it puts a message over the network. All the stations available in the network will receive the message whether it has been addressed or not.
- The configuration of a bus topology is quite simpler as compared to other topologies.
- The backbone cable is considered as a "single lane" through which the message is broadcast to all the stations.

![img-3.jpeg](img-3.jpeg)

# Bus Topology cont..

## Advantages :

- Requires minimal cable compared to other topologies, making it inexpensive to set up.
- Easy to install, especially for small networks.
- New devices can be added to the bus without disrupting the entire network.
- Reduces dependency on expensive devices like switches or hubs.

## Disadvantages :

- If the central bus cable fails, the entire network goes down.
- Identifying the exact point of failure is challenging because all devices share the same cable.
- Adding too many devices can overload the bus and degrade performance.
- Since all devices share the same cable, data collisions are common in large networks, reducing efficiency.
- As the cable length increases, signals weaken, limiting the size of the network.

# Network Topology – Ring Topology

- Ring topology is like a bus topology, but with connected ends.
- The node that receives the message from the previous computer will retransmit to the next node.
- The data flows in one direction, i.e., it is unidirectional.
- The data flows in a single loop continuously known as an endless loop.
- It has no terminated ends, i.e., each node is connected to other node and having no termination point.
- The data in a ring topology flow in a clockwise direction.

![img-4.jpeg](img-4.jpeg)

# Ring Topology cont..

## Advantages :

- Data flows in one direction (or two, in a bidirectional ring), reducing the chances of collisions.
- Works well for networks with fewer devices, as data travels through fewer hops.
- Unlike star topology, it doesn't rely on a central hub or switch.
- The time to transfer data is predictable since each device processes data in sequence.

## Disadvantages :

- If one device or connection fails, it can disrupt the entire network (unless a dual-ring system is used).
- Identifying the point of failure can be challenging, as the signal passes through each device.
- Adding or removing devices requires temporarily breaking the ring, which disrupts network communication.
- The more devices in the ring, the longer the data takes to reach its destination

# Network Topology – Star Topology

- Star topology is a type of network configuration where all devices (nodes) are connected to a central device, such as a hub, switch, or router.
- The hub receives data from a device and forwards it to the intended recipient device.
- If the hub or switch is intelligent (e.g., a network switch), it can direct traffic only to the target device, improving efficiency.

## Star Topology

- All hosts in Star topology are connected to a central device, known as hub device, using a point-to-point connection.
- Point-to-point connection between hosts and hub.

![img-5.jpeg](img-5.jpeg)

# Star Topology cont..

## Advantages :

- Simple to set up and configure, especially for small networks.
- If a single cable or device fails, the rest of the network remains unaffected.
- Devices can be easily added or removed without disrupting the network.
- Switches can direct data specifically to the target device, reducing congestion.
- Makes monitoring and troubleshooting simpler.

## Disadvantages :

- If the central hub/switch fails, the entire network becomes inoperable.
- Requires more cables (one per device) and a central device, increasing setup costs.
- The performance of the network depends on the capacity of the hub/switch.
- Requires more cabling compared to simpler topologies like bus topology.

# Network Topology – Mesh Topology

- Mesh topology is a network configuration where every device (node) is interconnected with every other device, either directly (fully connected mesh) or through multiple paths (partially connected mesh).

![img-6.jpeg](img-6.jpeg)

# Mesh Topology cont..

## Advantages:

- Multiple redundant paths ensure the network remains operational even if a device or connection fails.
- Since data can travel through alternate routes, the network is more robust compared to star or bus topologies.
- Direct connections between devices can ensure faster data transfer.
- Devices can be added without disrupting the existing network.
- Data travels through dedicated links, reducing the chances of interception.

## Disadvantages:

- Requires a large number of cables and network interfaces, especially in a fully connected mesh.
- Many links may remain unused, leading to inefficiency in resource utilization.
- As the number of devices increases, the complexity and cost grow exponentially.

# Network Topology – Hybrid Topology

- A network structure whose design contains more than one topology is said to be hybrid topology.
- Hybrid topology inherits merits and demerits of all the incorporating topologies.

![img-7.jpeg](img-7.jpeg)

# Links

- Links refer to the connections between network devices that enable communication.
- These connections can be physical or logical.
- A link defines the path over which data travels between devices in a network.
- Links can be categorized based on various factors, including their physical characteristics (e.g., wired vs. wireless), topology (e.g., point-to-point, multipoint), and transmission speed.
- Examples of links include Ethernet connections between computers and routers, wireless connections between devices and access points etc..

# Media

- Media, on the other hand, refers to the physical substances or materials through which data is transmitted between network devices.
- It represents the actual physical medium or channel over which data signals propagate.
- Network media include copper cables (e.g., twisted-pair cables, coaxial cables), fiber optic cables, wireless spectrum (e.g., radio frequencies, light waves), and satellite links.
- Different types of media have distinct characteristics in terms of bandwidth, transmission speed, distance limitations, susceptibility to interference, and cost.

# Network Protocol

- Network protocols define rules and conventions for communication between devices in a network.
- They specify how data is formatted, transmitted, routed, and received across networks.
- An example of common protocol architecture is the TCP/IP protocol suite.

# Network Software

- Network software refers to a broad category of software applications, protocols, and services designed to facilitate communication, management, and control within computer networks.
- Network software can be categorized into several types based on their functions and purposes:
- Network Operating Systems (NOS)
- Network Management Software
- Network Security Software
- Network Utilities and Tools
- Collaboration and Communication Software
- Network File Sharing and Storage Software

# Network Software – Network Operating Systems

- A Network Operating System (NOS) is a specialized software designed to manage and coordinate network resources and services for devices connected to a network.
- It provides an environment where multiple computers can share resources, communicate with each other, and work together within a network.
- Examples include Microsoft Windows Server, Linux distributions like Ubuntu Server and CentOS, and Novell NetWare (now deprecated).

# Network Software – Network Management Software

- Network management software provides tools and utilities for monitoring, analyzing, configuring, and managing network devices and services.
- Examples include SolarWinds Network Performance Monitor, Cisco Prime Infrastructure, and Nagios.

# Network Software – Network Security Software

- Network security software encompasses tools and solutions aimed at protecting networks from unauthorized access, data breaches, malware, and other security threats.
- Examples include firewalls, intrusion detection/prevention systems (IDS/IPS), antivirus software, VPN (Virtual Private Network) clients and servers, and encryption software.

# Network Software – Network Utilities and Tools

- Network utilities and tools are software applications used for network troubleshooting, diagnostics, performance optimization, and administration.
- Examples include Ping, Traceroute, nslookup, Wireshark (packet analyzer), Netcat, Nmap (network scanner), and iperf (network performance measurement tool).

# Network Software – Collaboration and Communication Software

- Collaboration and communication software facilitate real-time communication, collaboration, and file sharing among users within a network.
- Examples include email servers (e.g., Microsoft Exchange, Postfix), instant messaging/chat applications (e.g., Slack, Microsoft Teams), video conferencing software (e.g., Zoom, Microsoft Teams), and document collaboration platforms (e.g., Google Workspace, Microsoft SharePoint).

# Network Software – Network File Sharing and Storage Software

- Network file sharing and storage software enable users to share and access files and resources stored on network-attached storage (NAS) devices or file servers.
- Examples include Network File System (NFS), Server Message Block (SMB)/Common Internet File System (CIFS), and distributed file systems like Hadoop Distributed File System (HDFS) and GlusterFS.

# Transmission Media

- Transmission media in networking refer to the physical pathways or channels used to transmit data signals between devices in a network.
- Three main transmission media:
- Metalic Cable:
- Twisted Pair Cable
- Coaxial Cable
- Optical Fibre
- Wireless

# Transmission Media – Twisted Pair Cable

- Twisted pair is a physical media made up of a pair of cables twisted with each other.
- A twisted pair cable is cheap as compared to other transmission media.
- Installation of the twisted pair cable is easy, and it is a lightweight cable.
- The frequency range for twisted pair cable is from 0 to 3.5KHz.
- A twisted pair consists of two insulated copper wires arranged in a regular spiral pattern.

![img-8.jpeg](img-8.jpeg)

# Transmission Media – Coaxial Cable

- Coaxial cable is very commonly used transmission media, for example, TV wire is usually a coaxial cable.
- The name of the cable is coaxial as it contains two conductors parallel to each other.
- It has a higher frequency as compared to Twisted pair cable.
- The inner conductor of the coaxial cable is made up of copper, and the outer conductor is made up of copper mesh. The middle core is made up of non-conductive cover that separates the inner conductor from the outer conductor.
- The middle core is responsible for the data transferring whereas the copper mesh prevents from the EMI(Electromagnetic interference).

![img-9.jpeg](img-9.jpeg)

# Transmission Media – Optical Fiber

- Fiber optic cable, also known as optical fiber cable, is a type of transmission medium used in networking to transmit data signals using light pulses.
- It consists of one or more optical fibers, which are thin strands of glass or plastic that carry data over long distances with high bandwidth and low attenuation (signal loss).
- Main components of fiber optic cable:
- Core
- Cladding
- Jacket

![img-10.jpeg](img-10.jpeg)

![img-11.jpeg](img-11.jpeg)

# Network Interface Card - NIC

- A network interface card (NIC) is a hardware component without which a computer cannot be connected over a network.
- It is a circuit board installed in a computer that provides a dedicated network connection to the computer.
- It is also called network interface controller, network adapter or LAN adapter.
- NIC allows both wired and wireless communications.
- NIC allows communications between computers connected via local area network (LAN) as well as communications over large-scale network through Internet Protocol (IP).

![img-12.jpeg](img-12.jpeg)

# Client

- A client is a device or software application that requests services or resources from another device or application called a server.
- Clients typically initiate communication with servers to perform tasks such as accessing files, retrieving data from databases, sending emails, browsing web pages, or downloading files.
- Examples of clients include computers, smartphones, tablets, web browsers, email clients, and FTP (File Transfer Protocol) clients.

# Server

- A server is a device or software application that provides services, resources, or data to clients in response to their requests.
- Servers are dedicated machines or processes designed to handle multiple client requests simultaneously, serving as central repositories or hosts for shared resources.
- Examples of servers include file servers, web servers, email servers, database servers, print servers, and application servers.

# Peer

- In peer-to-peer (P2P) networking, the term "peer" refers to any device or software application that can both request and provide services or resources to other peers within the network.
- Peers in a P2P network have equal status and can act as both clients and servers, sharing resources directly with each other without the need for centralized servers.
- Examples of P2P applications include file-sharing programs (e.g., BitTorrent) etc..

Thank You

![img-13.jpeg](img-13.jpeg)