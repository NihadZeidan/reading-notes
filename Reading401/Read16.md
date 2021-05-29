# AWS: Cloud Servers



## Describe the Web-Request-Response-Cycle
WRRC is a cycle that show the flow of data when a user or server make request to specific site then this request will go to the ISP (internet service provider) to check the DNS (Domain name server, which is basically a lot of IP addresses) and find to you the IP address of the server you are requesting then send request to that server and that server will check this request and check the databases then back with a response to your ISP and back to you with the final results.

## Explain what a “server” is, as it relates to the WRRC
SERVER is simply a computer that runs all the time and deal with requests (HTTP) and responses form clients or other servers, also sending requests to the database and back to the clients with responses.


## What does it mean to “deploy” an application?
It means to run the application on a specific domain or using cloud service providers domains to run the app, for example (HEROKU)




## Server
SERVER is simply a computer that runs all the time and deal with requests (HTTP) and responses form clients or other servers, also sending requests to the database and back to the clients with responses.

## Pub/Sub
Publisher/ Subscribers is a messaging service that allow streaming of data from single publisher or event to multi subscribers (applications) and its asynchronous service, and stream the data in real-time and in high availability and consistent performance. 

![](https://mk0dashbirdioprthk8x.kinstacdn.com/wp-content/uploads/2021/01/pub-sub-messaging.png)

## WRRC
Web-Request-Response-Cycle is a cycle that show the flow of data when a user or server make request to specific site then this request will go to the ISP (internet service provider) to check the DNS (Domain name server, which is basically a lot of IP addresses) and find to you the IP address of the server you are requesting then send request to that server and that server will check this request and check the databases then back with a response to your ISP and back to you with the final results.




Which 3 things had you heard about previously and now have better clarity on?
Pub/Sub, WRRC and Server

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
AWS

What are you most excited about trying to implement or see how it works?
AWS Cloud Services


------------------------------------


## Virtual Machine : 
Is a software that will allow you to run more than one OS (operating System, is a software that allow you to control the Hardware) on the same computer! 
We use VM to try another OS, Test application on another OS or to run applications that need different/older OS.

VM manager also called (Hypervisor) --> software allow us to create VM.

## Cloud Computing: 
is a server that run the VM for use (the server is more powerful than usual computer) and this server exists in the data center (a physical place for servers). When you use another server to run your app this is Cloud Computing 

## Amazon EC2:
Amazon Elastic Compute Cloud it is a service that provides Cloud Computing in secure, resizable compute capacity. Amazon EC2 offer the fastest processors in the cloud and the only cloud with 400 Gbps ethernet networking. and you connect to it using CLI, SSH.

## AMI 
Amazon Machine Image (AMI) is the OS for your cloud computing server (VM).

## AWS EBS
Amazon Elastic Block Storage is an external storage that you can attack to your Virtual machine in case you shut down the server or (VM) the data will not be lost.

## AWS BeanStalk :
(it's like Heroku) Service to deploy, manage and scale Web Apps, mobile apps or APIS servers. it automatically scale and manage the app as needed. Elastic BeanStalk is free and you only pay for the additional AWS recourses you put in it.

----------------------------
## Notes For ME 

The Secure Shell Protocol (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.