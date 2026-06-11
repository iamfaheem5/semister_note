# Outline

- Bandwidth
- Switching
- Hub, Switch, Router, Bridges, Repeaters, Gateway, Firewall
- Internet and how does it works?
- ARPANET
- Intranet
- Internet vs Intranet
- Extranet
- IP Address
- URL and Structure of URL

# Bandwidth

- Bandwidth refers to the capacity or rate of data transfer across a network or communication channel, and it plays a critical role in determining the speed and efficiency of data transmission in computer networks and telecommunications systems.
- Measured in bits per second (bps), kilobits per second (kbps), megabits per second (Mbps), or gigabits per second (Gbps).

# Switching

- In computer networking, Switching is the process of transferring data packets from one device to another in a network, or from one network to another.
- Three types of switching :
- Circuit Switching
- Message Switching
- Packet Switching

# Switching – Circuit Switching

- When two nodes communicate with each other over a dedicated communication path, it is called circuit switching.
- There is a need of pre-specified route from which data will travels and no other data is permitted.
- In circuit switching, to transfer the data, circuit must be established so that the data transfer can take place.
- Applications which use circuit switching may have to go through three phases:
- Establish a circuit
- Transfer the data
- Disconnect the circuit

# Switching – Circuit Switching cont..

- Circuit switching was designed for voice applications.
- Telephone is the best suitable example of circuit switching.
- Before a user can make a call, a virtual path between caller and callee is established over the network.

![img-0.jpeg](img-0.jpeg)

# Switching – Message Switching

- Message Switching is a type of data communication method in which the entire message is sent from the source to an intermediate station (or switching node) for storage before it is forwarded to the next station.
- In message switching, the whole message is stored temporarily at each intermediate station before being passed on to the next hop toward its destination.

![img-1.jpeg](img-1.jpeg)

# Message Switching - How it Works

- **Message Creation**: The sender creates the entire message and sends it to the first switching node (or intermediate station).
- **Message Storage**: The intermediate node stores the message temporarily in its memory or buffer until the next node is available or the connection is free.
- **Forwarding**: Once the node is ready, it forwards the entire message to the next station in the network. The message may pass through multiple intermediate stations before reaching the final destination.
- **Store-and-Forward**: Message switching is often referred to as a store-and-forward method because the message is stored at each intermediate station before forwarding. This ensures that the data is transmitted to the next node only when it's ready..

# Message Switching - Example

- Suppose a user in New York wants to send a message to a user in Los Angeles. The steps would be as follows:
- Sender in New York creates a message.
- The message is sent to the first switching station, located in Chicago.
- The switching station in Chicago temporarily stores the message in its buffer.
- Once the channel between Chicago and Los Angeles becomes available (or once the switch in Chicago is free), it forwards the message to the next station.
- This process continues until the message reaches the final destination in Los Angeles.
- The recipient in Los Angeles receives the entire message.

# Switching – Packet Switching

- Packet Switching is a method of data transmission where messages are broken down into smaller, manageable units called packets.
- These packets are sent independently over the network, potentially taking different routes to reach the destination.
- Once all the packets arrive at the destination, they are reassembled into the original message.

![img-2.jpeg](img-2.jpeg)

# Hub

- A hub is a physical layer networking device which is used to connect multiple devices in a network.
- They are generally used to connect computers in a LAN.
- A hub has many ports in it.
- A computer which intends to be connected to the network is plugged in to one of these ports.
- When a data frame arrives at a port, it is broadcast to every other port, without considering whether it is destined for a particular destination or not.

# Hub cont..

![img-3.jpeg](img-3.jpeg)

# Switch

- A switch is a hardware device that connects multiple devices on a computer network.
- A Switch contains more advanced features than Hub.
- The Switch contains the updated table that decides where the data is transmitted or not.
- Switch delivers the message to the correct destination based on the physical address present in the incoming message.
- A Switch does not broadcast the message to the entire network like the Hub.
- It determines the device to whom the message is to be transmitted.
- Therefore, we can say that switch provides a direct connection between the source and destination.

# Switch cont..

![img-4.jpeg](img-4.jpeg)

# Router

- A router is a layer 3 or network layer device.
- It connects different networks together and sends data packets from one network to another.
- A router can be used both in LANs (Local Area Networks) and WANs (Wide Area Networks).
- Routers have a routing table in it that is refreshed periodically according to the changes in the network. In order to transmit data packets, it consults the table and uses a routing protocol.
- Routers are more expensive than other networking devices like hubs, bridges and switches.

# Router cont..

![img-5.jpeg](img-5.jpeg)

# Bridge

- A bridge is a network device that connects multiple subnetworks to create a single network.
- It provides interconnection with other computer networks that use the same protocol.
- Through a bridge, multiple LANs can be connected to form a larger and extended LAN.
- This function of creating a single aggregate network from multiple network segments is called network bridging.
- It works in the data link layer, which is the second network layer in the OSI model.

# Bridge cont..

![img-6.jpeg](img-6.jpeg)

# Difference between Router and Bridge

|  Routers | Bridges  |
| --- | --- |
|  Routers operates in network layer of OSI Model. | Bridge operates in data link layer of OSI Model.  |
|  Router is use to connect the LAN and WAN. | Bridge is use to connect two different LAN segments.  |
|  Router transmits data in the form of packets. | Bridge transmit data in the form frames.  |
|  Router reads the IP Address of a device. | Bridge reads the MAC Address of a device.  |
|  Router has more ports compare to bridge. | Bridge has only two ports.  |
|  Router uses routing table for sending data. | Bridge does not use any routing table for sending data.  |

# Repeaters

- Repeaters are network devices operating at physical layer of the OSI model that amplify or regenerate an incoming signal before retransmitting it.
- They are incorporated in networks to expand its coverage area.
- They are also known as signal boosters.

![img-7.jpeg](img-7.jpeg)

# Firewall

- A Firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization’s previously established security policies.
- At its most basic, a firewall is essentially the barrier that sits between a private internal network and the public Internet.
- A firewall’s main purpose is to allow non-threatening traffic in and to keep dangerous traffic out.

![img-8.jpeg](img-8.jpeg)

# Internet

- Internet is a world-wide global system of interconnected computer networks.
- Every computer in internet is identified by a unique IP address.
- IP Address is a unique set of numbers (such as 110.22.33.114) which identifies a computer location.
- A special computer DNS (Domain Name Server) is used to give name to the IP Address so that user can locate a computer by a name.
- For example, a DNS server will resolve a name http://www.tutorialspoint.com to a particular IP address to uniquely identify the computer on which this website is hosted.
- Internet is accessible to every user all over the world.

# How does Internet Works?

- It's important to realize that the Internet is a global network of physical cables, which can include copper telephone wires, TV cables, and fiber optic cables.
- Even wireless connections like Wi-Fi and 3G/4G rely on these physical cables to access the Internet.
- When you visit a website, your computer sends a request over these wires to a server.
- A server is where websites are stored, and it works a lot like your computer's hard drive.
- Once the request arrives, the server retrieves the website and sends the correct data back to your computer.

# ARPANET

- The origin of Internet devised from the concept of Advanced Research Project Agency Network (ARPANET).
- ARPANET was developed by United States Department of Defense.
- Basic purpose of ARPANET was to provide communication among the various bodies of government.
- Initially, there were only four nodes, formally called Hosts.
- In 1972, the ARPANET spread over the globe with 23 nodes located at different countries and thus became known as Internet.
- By the time, with invention of new technologies such as TCP/IP protocols, DNS, WWW, browsers, scripting languages etc., Internet provided a medium to publish and access information over the web.

# Intranet

- Intranet is system in which multiple PCs are networked to be connected to each other.
- PCs in intranet are not available to the world outside of the intranet.
- For example, a large company with multiple offices in different cities could create an intranet by connecting the LANs in each office.
- Employees in each office would then be able to access the same information and resources, such as company databases, file servers, and applications, as if they were in the same location.
- This allows for greater collaboration and communication among employees, regardless of their physical location.

# Intranet - Advantages

![img-9.jpeg](img-9.jpeg)

# Intranet vs Internet

|  Intranet | Internet  |
| --- | --- |
|  Localized Network. | Worldwide Network  |
|  Doesn't have access to Internet | Have access to Internet.  |
|  More Expensive | Less Expensive  |
|  More Safe | Less Safe  |
|  More Reliability | Less Reliability  |

# Extranet

- An extranet is a private network that extends access to specific partners, customers, or suppliers outside of an organization, using the Internet or other WAN technologies.
- An example of an extranet is a secure online portal for a bank's business customers.
- The portal allows business customers to view account information, transfer funds, and manage their finances from a single, centralized location.
- The portal is connected to the bank's internal network and uses encryption and other security measures to protect sensitive financial information.

![img-10.jpeg](img-10.jpeg)

# Internet Protocol (IP) Address

- An IP address is a unique address that identifies a device on the internet or a local network.
- IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.
- IP address is 32 bits (4 bytes) long.
- IP address consists of two components: network component and host component.

## Example :

☑ IPv4 (Internet Protocol version 4): A 32-bit address divided into four octets (separated by dots).
☑ Example: 192.168.1.1

# Uniform Resource Locator (URL)

- A URL (Uniform Resource Locator) is the address of a specific web page or file on the Internet.
- It is used to locate and access web content, such as HTML pages, images, videos, and other multimedia content.
- A URL is typed into a web browser's address bar to access a particular web page or file.

# Structure of URL

The structure of a URL typically consists of several parts:

- Protocol: The protocol is the method used to access the resource, such as "http" or "https".
- Domain Name: The domain name is the name of the website, such as "www.example.com".
- Path: The path is the specific location of the file or page on the website, such as "/index.html".
- Query String: The query string is optional and is used to pass parameters to the resource, such as "?q=searchterm".
- Example: "https://www.example.com/index.html"
- In this URL, "https" is the protocol, "www.example.com" is the domain name, "/index.html" is the path, and there is no query string.

Thank You

![img-11.jpeg](img-11.jpeg)