# AWS: S3 and Lambda

## Describe “The Cloud”
Is using another server/computer that is settled remotely as it's your own. 

## What is a container (as it relates to computers and servers)?
container is the entire runtime environment, it consists of an app, packages, dependencies, libraries and config files. containers make the app runs quickly and reliably from one computing environment to another.

## What is auto-scaling?
Is the process of modifying the resources that is needed to the app automatically.

## What is bandwidth?
Is the maximum data to transfer across a given path. (network bandwidth, data bandwidth).

## How do cloud providers compute service costs?
The cost is calculated based on the resources the company or individual may use in the VM in order to run their apps/services smoothly.
These recourses may be storage, processor, bandwidth and RAM.


------------------------------------------

## Server Instances: 
An instance is a single copy of the software running on a single physical or virtual server. If you run two copies of the software on the same physical or virtual server, that counts as two instances.


## Containers:
Is a complete unit of the code (the entire runtime environment). it makes the apps run more faster and reliable from one cloud to another.

## Cloud Services:
Is a service that will allow the users to use different remote computers/VM as they own it, the benefits of Cloud services:
 - Reduce costs of hardware/software.
 - Load Balance.
 - Mobility.
 - Data access/ Backup.
 - maintenance.
 - More security and speed.
 - Collaboration.

Types of Cloud Services:
SaaS --> Software as a service. (google drive, gmail)
Paas --> platform as a service. (GitHub, Heroku, AWS Elastic beanstalk, Netlify)
Iaas --> Infrastructure as a service. (AWS EC2, Azure)

 
## Cloud Architecture
it refer to the set of softwares, applications, databases, recourses that the cloud can have to leverage its capabilities. It isn't only define the component but the relationship between them.


## AWS:
Amazon Web Services, a (huge) collection of services that Amazon provide as a cloud computing, some of the AWS services are AWS EC2, Elastic Beanstalk and IAM ...

## EC2/Beanstalk vs Heroku:
Elastic Compute cloud is a IaaS service that allow the user to control the app, data, runtime, middleware and OS
BeanStalk is a PaaS that allow the user to control only the application and the data.
Heroku is also a Paas. 


---------------------------------------------


Which 3 things had you heard about previously and now have better clarity on?
EC2, Beanstalk and Cloud services

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Cloud architecture, more AWS services and Server instance.

What are you most excited about trying to implement or see how it works?
AWS S3, Lambda and Lambda functions.


----------------------------------------------

## AWS S3: 
Amazon Simple Storage Service, is SaaS that offer object storage service, the Benefits of AWS S3:

 - cost-effective.
 - Security.
 - Easy manage data and access control.
 - Query in place (you can use SQL to analyze and interact with data).
 - Industry-leading performance, scalability, availability, and durability.


## AWS Lambda:
Is a Serverless service provided by AWS, in which the users write Lambda function, application written in one of the supported languages and runtime and upload them to Lambda.

Serverless : means You do not need to maintain your own server, but instead you use cloud services like Lambda that will take care of all the infrastructure, OS, and network layer.

How Lambda Calculate the costs:
 1. create Lambda function
 2. Lambda will put the function into container and calculate the RAM and CPU needed for it.
 3. Lambda then execute the function and once it finishes Lambda multiply the RAM with the time that function needed to run (Runtime)
 4. The customers then get charged based on the allocated memory and the amount of run time the function took to complete.

Benefits of using AWS Lambda:
 1. Pay per use.
 2. Fully managed infrastructure. 
 3. Automatic scaling. 
 4. Tight integration with other AWS products. 

 ![](https://d1.awsstatic.com/product-marketing/Lambda/Diagrams/product-page-diagram_Lambda-HowItWorks.68a0bcacfcf46fccf04b97f16b686ea44494303f.png)



## CDNs 
Content Delivery Network is a geographically distributed group of servers that work together to provide fast delivery of Internet content. A CDN allows for the fast transfer of data needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

How it works :
When a user requests a webpage that is part of a content delivery network, the CDN will redirect the request from the originating site’s server to a server in the CDN that is closest to the user and deliver the cached content. CDNs will also communicate with the originating server to deliver any content that has not been previously cached.


Benefits of using CDNs:
 1. Increase Speed.
 2. Decrease Load on the server.
 3. Uptime.
 4. Increase server security.

 A smaller company probably doesn’t need to improve website load speeds with a CDN as they typically don’t have an overwhelming amount of traffic.

----------------------------------
### Notes 


Runtime is:
The length of time a program takes to run.

Serverless computing:
is a method of providing backend services on an as-used basis. Servers are still used, but a company that gets backend services from a serverless vendor is charged based on usage, not a fixed amount of bandwidth or number of servers.