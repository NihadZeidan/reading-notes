# Event Driven Architecture


### What’s the difference between a FIFO and a standard queue?
FIFO is a data flow way in wish the first in data will be the first out.
queue --> is a data structure that following the FIFO flow of data approach and it has additional methods for checking the front value `peek()` or checking if the queue is empty or not `isEmpty()`

### How can the server be assured a message was properly received?
By adding a message queue into our server that will be listening to received event for example from the client side, and when that event emitted from the client it will delete the request from the queue in the server.

Message Queues are so useful to store the data and make sure nothing is lost in case any other server went down.



### What classic design pattern is best represented by event driven programming?
Behavioral (Observer) design pattern

### How do you test an event driven system?

- Start the application under test.
- Send some input events to the server.
- in the server try to console log each event data.
- Wait until the application has listened to the events been send.
- Assert that the data is logged and as you want.


-----------------------------------------------------



FIFO Queue  ---> is a data structure that following the FIFO flow of data approach (First value in will be the first to go out) and it has additional methods for checking the front value `peek()` or checking if the queue is empty or not `isEmpty()` beside `enqueue(val)` and `dequeue()` methods

Pub/Sub --->  publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead categorize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.


------------------------------------------------


Which 3 things had you heard about previously and now have better clarity on?
FIFO Queue, event-driven programming and messaging queue.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Pub/Sub, Design patterns 

What are you most excited about trying to implement or see how it works?
Event Driven Architecture and using AWS 



-----------------------------

# Notes for me 

### Types of Design patterns in Programming

- Creational: These patterns are designed for class instantiation. ...
- Structural: These patterns are designed with regard to a class's structure and composition. ...
- Behavioral: These patterns are designed depending on how one class communicates with others.


### Pub/Sub
representing the stream of messages (data) from a single, specific topic (publisher), to be delivered to the subscribing application.
Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.
You can use Pub/Sub as messaging-oriented middleware or event ingestion and delivery for streaming analytics pipelines.
Pub/Sub offers durable message storage and real-time message delivery with high availability and consistent performance at scale.