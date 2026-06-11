# Outline

- IP and MAC Address
- Domain Name
- DNS
- Name vs IP
- Basic Newtork Tools :
- Ipconfig, ping, traceroute, nslookup, netstat, tcpdump, wireshart, nmap
- File and File System

# IP Address

- An IP address (Internet Protocol address) is a unique numerical identifier assigned to every device connected to a network that uses the Internet Protocol for communication.
- It is a series of numbers separated by periods, such as 192.168.1.1.
- IP addresses are used to identify and communicate with devices on a network, allowing them to send and receive data.

# MAC Address

- A MAC address (Media Access Control address) is a unique identifier assigned to network interfaces for communications on a physical network.
- It is a series of six pairs of hexadecimal digits separated by colons, such as 00:1A:2B:3C:4D:5E.
- MAC addresses are used to identify specific devices on a local network, such as a Wi-Fi network or an Ethernet network.
- Unlike IP addresses, which can be changed or reassigned, MAC addresses are typically hard-coded into a device's hardware and cannot be modified.

# Domain Name

- A domain name is a unique name that identifies a website or other online resource on the Internet.
- It is a human-readable name that is easier to remember and use than an IP address.
- For example, the domain name "google.com" is used to identify the website of the Google search engine.
- When a user types "google.com" into their web browser, their computer uses the Domain Name System (DNS) to look up the IP address associated with that domain name, which is used to establish a connection to the server hosting the website.

# Domain Name cont..

- Domain names are typically made up of two or more parts, separated by dots.
- The rightmost part of the domain name is the top-level domain (TLD), which identifies the type of organization or the country associated with the domain.
- For example, in "google.com", the TLD is ".com", which is a generic top-level domain (gTLD) that is commonly used for commercial websites.
- The other parts of the domain name are referred to as the second-level domain (SLD) and the subdomain. In "google.com", the SLD is "google", and there is no subdomain.
- However, a domain name like "mail.google.com" would have the subdomain "mail" and the SLD "google".

# DNS (Domain Name System)

- DNS stands for Domain Name System, and it is a system that translates human-readable domain names into machine-readable IP addresses.
- In simple terms, DNS is like a phonebook for the Internet that helps computers and other devices find and communicate with each other.
- When you type a website address into your web browser, such as www.example.com, your computer first sends a request to a DNS resolver to look up the IP address associated with that domain name.
- The DNS resolver checks its own cache of previously resolved domain names and, if the address is not found, it sends a query to other DNS servers to find the IP address associated with the domain name.

# DNS (Domain Name System) cont..

- Once the IP address is found, your computer can use it to establish a connection to the website's server and request the content you want to see.
- This entire process happens behind the scenes, and it allows us to access websites by their easy-to-remember names rather than having to remember a long string of numbers.

![img-0.jpeg](img-0.jpeg)

# Basic Network Tools - ipconfig

- Ipconfig is a command-line utility used in Microsoft Windows operating systems to display the current configuration of network interfaces on a local computer.
- By typing "ipconfig" in the command prompt or PowerShell, a user can retrieve information about the computer's IP address, subnet mask, default gateway etc..

```html
|  Connection-specific DNS Suffix  |
| --- |
|  Link-local IPv6 Address  |
|  IPv4 Address  |
|  Subnet Mask  |
|  Default Gateway  |

|  fe80::2d4c:7247:8aa6:8a61%15  |
| --- |
|  192.168.0.132  |
|  255.255.255.0  |
|  192.168.0.1  |

# Basic Network Tools – ipconfig/all

- "ipconfig/all" is a command that can be used in Windows operating systems to display detailed information about the computer's network configuration.

- computer's IP address, subnet mask, default gateway, DHCP server, DNS servers, physical address (also known as the MAC address) etc.

Wireless LAN adapter Wi-Fi:

|  Connection-specific DNS Suffix . :  |   |
| --- | --- |
|  Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Intel(R) Dual Band Wireless-AC 3168  |
|  Physical Address. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | A0-A4-C5-1A-3D-12  |
|  DHCP Enabled. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Yes  |
|  Autoconfiguration Enabled . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Yes  |
|  Link-local IPv6 Address . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | ef80::2d4c:7247:8aa6:8a61%15(Preferred)  |
|  IPv4 Address. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 192.168.0.132(Preferred)  |
|  Subnet Mask . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 255.255.255.0  |
|  Lease Obtained. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Sunday, February 19, 2023 11:41:16 AM  |
|  Lease Expires . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Monday, February 20, 2023 11:41:17 AM  |
|  Default Gateway . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 192.168.0.1  |
|  DHCP Server . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 192.168.0.1  |
|  DHCPv6 IAID . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 262186181  |
|  DHCPv6 Client DUID. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 00-01-00-01-28-29-E6-0D-E4-E7-49-41-FC-57  |
|  DNS Servers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 192.168.0.1  |
|  NetBIDS over Tcpip. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Enabled  |

# Basic Network Tools – nslookup

"nslookup" command include:
- Retrieving the IP address associated with a domain name
- Retrieving the domain name associated with an IP address
- Checking whether a DNS server is responding to queries
- Troubleshooting DNS resolution issues etc..

C:\Users\Suman Reza&gt;nslookup
Default Server: UnKnown
Address: 192.168.0.1

&gt; www.google.com
Server: UnKnown
Address: 192.168.0.1

Non-authoritative answer:
Name: www.google.com
Addresses: 2404:6800:4009:827::2004
142.250.193.36

# Basic Network Tools – tracert

"tracert" (short for "trace route") is a command-line tool used in Windows operating systems to trace the path that an IP packet takes from the sender device to the recipient device over the network.

- It works similarly to the "traceroute" command used in other operating systems.

|  TobersLuman ReactTracert 103.163.210.131  |   |   |   |   |
| --- | --- | --- | --- | --- |
|  Tracing route to 103.163.210.131 over a maximum of 30 hops  |   |   |   |   |
|  1 | 1 ms | 1 ms | 1 ms | 192.168.0.1  |
|  2 | 2 ms | 1 ms | 1 ms | 172-5-1-1.lightspeed.oshkwi.sbcglobal.net [172.5.1.1]  |
|  3 | 4 ms | 5 ms | 3 ms | 103.138.173.106  |
|  4 | 14 ms | " | " | 10.56.75.141  |
|  5 | 13 ms | 13 ms | 12 ms | 157.119.185.197.summitiig.net [157.119.185.197]  |
|  6 | 12 ms | 11 ms | 11 ms | 103.199.87.36.summitiig.net [103.199.87.36]  |
|  7 | 21 ms | 20 ms | " | 115.108.48.12.static-mumbai.vsnl.net.in [115.108.48.12]  |
|  8 | 18 ms | 22 ms | 20 ms | 115.108.48.3.static-mumbai.vsnl.net.in [115.108.48.3]  |
|  9 | 66 ms | 65 ms | 67 ms | 115.108.48.211.static-mumbai.vsnl.net.in [115.108.48.211]  |
|  10 | 65 ms | 65 ms | 64 ms | 103.124.224.237  |
|  11 | 66 ms | 70 ms | 64 ms | 103.124.224.254  |
|  12 | 83 ms | 75 ms | 74 ms | 43.228.208.210  |
|  13 | 71 ms | 67 ms | 70 ms | 43.224.112.38  |
|  14 | 67 ms | 67 ms | 66 ms | 172.17.2.113  |
|  15 | 72 ms | 74 ms | 79 ms | 103.163.210.131  |
|  16 | " | " | " | Request timed out.  |
|  17 | " | " | " | Request timed out.  |
|  18 | 77 ms | 69 ms | 69 ms | 103.163.210.131  |
|  19 | 70 ms | 92 ms | 105 ms | 103.163.210.131  |
|  20 | 66 ms | 71 ms | 67 ms | 103.163.210.131  |
|  trace complete.  |   |   |   |   |

# Basic Network Tools – ping

- "ping" is a command used to test the connectivity between two network devices.
- When a "ping" command is sent from one device to another, the sender device sends a small packet of data to the recipient device, and the recipient device sends a response back to confirm that it received the packet.
- The "ping" command is useful for troubleshooting network connectivity issues and determining the latency or delay in network communication.

```html
|  LY\Users\Suman Reza>ping 103.163.210.131  |
| --- |
|  Pinging 103.163.210.131 with 32 bytes of data:  |
|  Reply from 103.163.210.131: bytes=32 time=68ms TTL=44  |
|  Reply from 103.163.210.131: bytes=32 time=69ms TTL=44  |
|  Reply from 103.163.210.131: bytes=32 time=71ms TTL=44  |
|  Reply from 103.163.210.131: bytes=32 time=67ms TTL=44  |
|  Ping statistics for 103.163.210.131:  |
|  Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),  |
|  Approximate round trip times in milli-seconds:  |
|  Minimum = 67ms, Maximum = 71ms, Average = 68ms  |

# Files

- A file is a named collection of data or information that is stored on a computer or other digital device.
- A file can contain text, images, audio, video, or any other type of digital data.

# Some Examples of Different Types of Files

## Text files :
- These are files that contain plain text, such as documents, scripts, and configuration files.

## Image files :
- These are files that contain graphics or pictures, such as JPEG, PNG, and GIF files.

## Audio files :
- These are files that contain sound or music, such as MP3, WAV, and AAC files.

# Some Examples of Different Types of Files cont..

## Video files :
- These are files that contain moving images, such as AVI, MP4, and MOV files.

## Program files :
- These are files that contain executable code or scripts, such as binary executables, shell scripts, or interpreted code files.

## Database files :
- These are files that contain structured data, such as SQL databases, spreadsheets, and CSV files.

## Archive files :
- These are files that contain one or more files that have been compressed and packaged together, such as ZIP, TAR, and RAR files.

# What is File System?

- A file system is a way for an operating system to organize and manage files and directories on a storage device, such as a hard disk drive, solid-state drive, or USB drive.
- A file system provides a structure for storing, retrieving, and accessing files and directories, and determines how data is stored and retrieved from a storage device.

# Different Types of File System

- There are many different types of file systems, each with their own features, advantages, and limitations.
- Here are some of the most common types of file systems:
- FAT (File Allocation Table)
- NTFS (New Technology File System)
- HFS+ (Hierarchical File System Plus)
- APFS (Apple File System)
- EXT (Extended File System)
- exFAT (Extended File Allocation Table) etc..

# Different Types of File System cont..

## FAT32 (File Allocation Table):

- FAT32 is widely supported across various operating systems, including Windows, macOS, Linux, and game consoles
- It is known for its compatibility with older hardware and software, but has limitations on maximum file size and storage capacity.
- FAT32 has a maximum file size limit of 4 GB, making it unsuitable for storing large individual files.

## NTFS (New Technology File System):

- NTFS is a more advanced file system used in Windows operating systems.
- It supports larger file sizes, better security features, and more efficient data storage and retrieval.
- NTFS includes features like journaling, which helps in recovering from system crashes and power failures, enhancing data integrity.

# Different Types of File System cont..

exFAT (Extended File Allocation Table):

- exFAT is a file system designed for use with flash drives and other removable storage devices.
- It supports larger file sizes and storage capacities than FAT, while maintaining compatibility with a wide range of devices and operating systems.

# Different Types of File System cont..

## HFS+ (Hierarchical File System Plus):

- HFS+ is a file system used by macOS.
- It provides support for advanced features such as file encryption, journaling, and case sensitivity, and allows for larger file sizes and storage capacities than the older HFS file system.

## APFS (Apple File System):

- APFS is a newer file system also used by macOS.
- It provides improved performance and reliability, supports features such as snapshots and cloning, and is optimized for use with solid-state drives (SSDs).

# Different Types of File System cont..

## EXT (Extended File System):

- EXT is a family of file systems used by Linux and other Unix-based operating systems.
- EXT2, EXT3, and EXT4 are the most common versions of the EXT file system, each with their own features and improvements.

Thank You

![img-1.jpeg](img-1.jpeg)