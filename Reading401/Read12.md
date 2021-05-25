# Socket.io


## What is the benefit of transforming data into packets?

To allow easy maintenance and more scalability on the applications data.
Packet-based networks not only enable new innovations, services, and business opportunities, they are also the most cost-effective, efficient, and scalable networks for content delivery.

## UDP is often refereed to as a connectionless protocol. Why is this?


The User Datagram Protocol (UDT) is a connectionless protocol that is designed to stream data. When a UDP connection occurs, there is no beginning, middle, or end to the conversation. Data simply begins to flow between the two systems. UDP is a very simple protocol and is used when speed is an issue. UDP packet receipt is not verified. An example of a use of the UDP protocol is DNS queries. When you attempt to use your Web browser to access www.syngress.com, it must first resolve the name to an IP address. This would require a DNS query. 

## Can a socket server application have multiple socket connections?

Yes it can.

## Can a socket connection application be connected to multiple socket servers?

No it can't, a server socket listens on a single port.

## Can an application be both a socket server and a socket connection?

Yes you can have socket app for both socket-server and socket connection.

---------------------------------------------------------------------


## Observer Pattern:
The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

## Listener:
is a function who listen to specific action to be triggered, then fire a call back function.

## Event Handler:
is a call back function that is fired when a specific event been triggered.

## Event Driven Programming:
Is a programming paradigm (style) in which we add events listener to specific triggers and connect them with call back functions. In which the flow of the program is determined by events such as user actions, sensor outputs, or message passing from other programs or threads.

## Event Loop:

is like a continues loop for the event listener that keep waiting for the event to happen then fire the call back function.
is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop works by making a request to some internal or external "event provider", then calls the relevant event handler.

## Event Queue:
An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. it follows FIFO approach.

## Call Stack:
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.


## Emit/Raise/Trigger:
Is the event starter action,  that when it happened the event will listen to it and fire a call back.

## Subscribe:
The Publish/Subscribe pattern, also known as pub/sub, is an architectural design pattern that provides a framework for exchanging messages between publishers and subscribers. This pattern involves the publisher and the subscriber relying on a message broker that relays messages from the publisher to the subscribers. The host (publisher) publishes messages (events) to a channel that subscribers can then sign up to.

## database: 
is like a store for our data, there are two main types of the databases 1. SQL database (relational) 2. NoSql database.



-------------------------------------------------------------------------------------


Which 3 things had you heard about previously and now have better clarity on?
Event loop, call stack and Event Queue.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
socket.io, Subscribe/publisher and 

What are you most excited about trying to implement or see how it works?
Socket.io


--------------------------------------------------------------------------------------

TCP (Transmission Control Protocol) --> is a protocol to establish connection between the client and the server using 3-ways handshakes.

WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. 

[WebSocket](https://en.wikipedia.org/wiki/WebSocket)
[Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)
[Socket.io vs WebSocket](https://www.educba.com/websocket-vs-socket-io/)

[OSL Model](https://www.youtube.com/watch?v=vv4y_uOneC0)
