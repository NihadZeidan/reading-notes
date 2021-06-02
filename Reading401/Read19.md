# AWS: Events


## Describe the similarities between AWS API Gateway + Lambda functions and an ExpressJS Server
In Express server you connect and send HTTP requests to a specific endpoints and connect them with handler functions on the same server, while using AWS you can saperate the routing process and the function handler, where you send the HTTP request using AWS API Gateway and integrate them with Lambda functions as they will be triggered when specific route been hit, and all this process will be serverless (using AWS cloud as a server for your app).

## List the AWS Database offerings and talk about the pros and cons of each
AWS Dynamo --> is a No-SQL database allow you to store data and manipulate it, also it has a package called Dynamoose will allow you to connect with DynamoDB more easily.

AWS S3 --> Simple Storage service, allow you to store specific issues or maybe back-up your data for later time. 

## What’s the difference between a FIFO and a standard queue?
FIFO --> is a data flow approach which is First In First Out.

Queue --> is a data structure (data storing method) that follow FIFO data flow approach and allow you to add different method in it like peek, isEmpty, enqueue, dequeue ...


### How can the server be assured a message was properly received?
By adding to the server Messaging Queue in which all the requests will be added to this Queue before being processed then add an event to this Queue that whenever a client received a message delete from the Queue (also add the trigger in the client side), by that we can insure that the data is not lost and all the client received it properly.




## Serverless API
An API server that deal with HTTP request and responses but on another server (not locally in our app).

## Triggers
An event triggers that will invoke the function handler in the event listener.

## Dynamo vs Mongo
They are booth No-SQL database and both of them have a package that will help us in connecting to the DB and manipulating the data (Mangoose and Dynamoose).

## Dynamoose vs Mongoose
Packages to connect to MongoDB and DynamoDB and manipulate the data more easily.


Which 3 things had you heard about previously and now have better clarity on?
DunamoDB, Serverless API and FIFO

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
SNS and SQS

What are you most excited about trying to implement or see how it works?
AWS SNS and AWS SQS

----------------------------------------------------------------------------------------------------------------------------------

## AWS SQS 
A service from amazon (Simple Queue Service) they are two Queue services provided the first one is Standard Queue that is scalable as the usage need. Second FIFO Queue this will ensure the order of sending messages, and it uses messaging groups to support scalability.

![](https://miro.medium.com/max/1700/1*7eL3udb6Cto4I9Ly1sN8oA.jpeg)



## AWS SNS
Pub/Sub message (which sending messages from a publisher to a certain topic then the sub will receive a copy from all different messages) the subscribers could be another AWS services such as Lambda functions, SQS or API. Async

![](https://miro.medium.com/max/1004/1*mdUPKzrfJFuXa4d43KhKUQ.png)


SQS : Pull Mechanism — Consumers poll messages from SQS.
SNS : Push Mechanism — SNS pushes messages to consumers.

SQS : Messages are persisted for some duration is no consumer available. The retention period value is from 1 minute to 14 days. The default is 4 days.
SNS : No persistence. Whichever consumer is present at the time of message arrival, get the message and the message is deleted. If no consumers available then the message is lost.
In SQS the message delivery is guaranteed but in SNS it is not.

AWS for making microServices

messages Streams (AWS Kinesis) it differs from message queue in a way that messages in streams are persistent (will not be removed). And we use it when we want to do analysis for the sequence of the messages