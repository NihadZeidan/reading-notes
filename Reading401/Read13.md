# Message Queues

### What does it mean that web sockets are bidirectional? Why is this useful?
This means there are 2 way communication between the server and client side, this is so useful when someone is building real-time app to sind and receive data between the server and the client.

### Does socket.io use HTTP? Why?
Yes, socket use HTTP at the beginning to initialize the connection between the server and the client then after establish connection it start using TCP. Also if the TCP fall down socket io will start using HTTP.

### What happens when a client emits an event?
when the client side emits an event the server side will be listening to that event and then handle the data received form the client via call back function.


### What happens when a server emits an event?
when the server side emits an event the client side will be listening to that event and then handle the data received form the server via call back function.


### What happens if a client “misses” an event?
this means there are no listening to that event or the emitter accrue before the listener, in this case the trigger will not find any listener to receive and handle the data. 

### How can we mitigate this?
I think TCP it will send feedback to the emitter itself, that the event missed the emit. So the emit will be called again to the event, or we can replace them to make the emitter after the event being established. 


--------------------------------------------------------------------------

### Socket:

### Web Socket:
Is a protocol to create full dublex communication between the server and the client, so they can send and receive real time data.


### Socket.io:
Is a package that allow you to connect the client side with the web-socket server, and send and receive data between them


### Client:
is the front-end ---> web browser


### Server:
is the back-end ---> behind the scene 

### OSI Model:
(Open Systems Interconnection) is a model that describes seven layers that computer systems use to communicate over a network. these layers are:
(Please Do Not Throw SUSAGE PIZZA Away)
 1. Application 
 2. Presentation
 3. Session
 4. Transport
 5. Network 
 6. Data Link
 7. Physical 

![](https://media.fs.com/images/community/wp-content/uploads/2017/11/seven-layers-of-OSI-model.png)



### TCP Model:
Transmission Control Protocol Model is a transport protocol that is used on top of IP to ensure reliable transmission of packets. it is more reliable than OSI model but cost more.

### TCP:
 It is known to provide reliable and error-free communication between end systems. It performs sequencing and segmentation of data. It also has acknowledgment feature and controls the flow of the data through flow control mechanism. It is a very effective protocol but has a lot of overhead due to such features. Increased overhead leads to increased cost. TCP includes mechanisms to solve many of the problems that arise from packet-based messaging, such as lost packets, out of order packets, duplicate packets, and corrupted packets.
TCP is suitable for real-time apps that needs to maintain the data 


![](https://static.javatpoint.com/tutorial/computer-network/images/tcp2.png)



### UDP:

User Datagram Protocol: is a communications protocol that is primarily used for establishing low-latency and loss-tolerating connections between applications on the internet. It speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party. it is suitable for streaming and gaming.

![](https://i.ibb.co/GpRn5gn/tcpvsudp.jpg)

### Packets: 
is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. ... As an example, e-mails and web pages will make use of network packets to send information back and forth to the user and recipients.

Packets are intended to transfer data reliably and efficiently. Instead of transferring a large file as a single block of data, sending smaller packets helps ensure each section is transmitted successfully. If a packet is not received or is "dropped," only the dropped packet needs to be resent.

![](https://cdn.ttgtmedia.com/rms/onlineimages/whatis-packet_structure_half_column_mobile.png)




--------------------------------------------------------------------------------


Which 3 things had you heard about previously and now have better clarity on?
TCP, Socket.io and web sockets.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Packets, OSI model and UDP

What are you most excited about trying to implement or see how it works?
real-time messaging apps


-----------------------------------------------------------
## Message Queue

![](https://i0.wp.com/robtiffany.com/wp-content/uploads/2009/10/message_queue.png?fit=623%2C242&ssl=1)


Rooms
A room is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of clients.

 - You can call join to subscribe the socket to a given channel:

```
io.on('connection', socket => {
  socket.join('some room');
});
```

 - And then simply use to or in (they are the same) when broadcasting or emitting:

```
io.to('some room').emit('some event');
```


 - Disconnection

```
io.on('connection', socket => {
  socket.on('disconnecting', () => {
    console.log(socket.rooms); // the Set contains at least the socket ID
  });

  socket.on('disconnect', () => {
    // socket.rooms.size === 0
  });
});
```

-----------------------------------------------------------------

### Notes for me 


Event loop:
it is like a loop to wait until the event is being triggered.

The event loop got its name because of how it's usually implemented, which usually resembles:
while (queue.waitForMessage()) {
  queue.processNextMessage()
}

EVENT Queue:
An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. it follows FIFO approach.


The call stack: works based on the LIFO principle last-in-first-out. ... When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing. The script will stop when the call stack is empty.
