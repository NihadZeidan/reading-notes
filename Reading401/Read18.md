# AWS: API, Dynamo and Lambda

## What are serverless functions?
Functions that run on the cloud and do some specific job for our main server based on events.

## If you were to create a system that emulated Lambda functions, how would you do it?
First I should write the serverless function then I need a platform that allow this service for example I can use AWS Lambda, then I need to add a trigger into another service that will invoke this function upon certain event.

## Describe how a CDN works
Content Delivery Network make a copy of the the content server and separate it to different locations around the world, when a user hit that server instead of going to that server it would send him to the closest server (CDN) to him, that process will make access to the content faster. 

## Serverless Functions
Functions that run on the cloud and do some specific job for our main server based on events.

## Cloud Storage: 
Is using some kind of database but in off-site location, on another server (cloud) that you access over the internet.

## CDN
Content Delivery Network, is a geographically distributed network of the server and their data centers.




Which 3 things had you heard about previously and now have better clarity on?
CDN, Serverless and cloud storage

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
CDN, Lambda

What are you most excited about trying to implement or see how it works?
AWS APIs and Dynamo


-----------------------------------------


## Amazon API Gateway is 
a managed service that allows developers to define the HTTP endpoints of a REST API or a WebSocket API and connect those endpoints with the corresponding backend business logic. it placed between your backend API and the users, and it can integrate with other AWS services like 

AWS Lambda: run Lambda functions to generate HTTP API responses.
AWS SNS: publish SNS notifications when an HTTP API endpoint is accessed.
Amazon Cognito: provide authentication and authorization for your HTTP APIs.

API types: RESTful API and Websocket API 

![](https://d1.awsstatic.com/serverless/New-API-GW-Diagram.c9fc9835d2a9aa00ef90d0ddc4c6402a2536de0d.png)


## DynamoDB: 
is a No-SQL database provided by AWS. key-value and document database that delivers single-digit millisecond performance at any scale.

DynamoDB is a particularly good fit for the following use cases:

  Applications with large amounts of data and strict latency requirements.
  Serverless applications using AWS Lambda.
  Data sets with simple, known access patterns.

Dynamoose is a tool that allow you to model AWS DynamoDB 
Key Features#
  Type safety
  High level API
  Easy to use syntax
  Ability to transform data before saving or retrieving documents
  Strict data modeling (validation, required attributes, and more)
  Support for DynamoDB Transactions
  Powerful Conditional/Filtering Support
  Callback & Promise support
