# Event Driven Applications

![](https://www.abbreviations.com/images/2157246_EDP.png)



## Why is access control important?

To give different levels of access to the users to the app data in which can be more secure and reduce the risks on the web app data.


## Describe an application that would need access control.

Companies recourses apps or companies registrations app, in which each user should be access only limited data of the company and has different actions they can do to the data.


## What is a role used for?

The Role used in the RBAC to define each user access authority based on their role in the company.


## Why is role based access control more scalable than discretionary or mandatory access control?

Because MAC is strictest of all levels of control, and the controlling settings defined by the system administrator. And DAC is giving access to users based on the identity or the groups they are in. While RBAC we give access for users based on their role and over time we can change the role of that user in the organization while we cant easily change his/her group. Also over time we can update the ALC (Access Control) unit and increase or decrease the authority given to each user' role.


--------------------------------------------------------------------------


## Authorization: is the process of give the user the authority over a specific app data or methods based on his/her authentication/


## Role Based Access Control: is the process of giving the users different access over the app data and recourses based on their ROLE in the company of organization.


## Capabilities: is the authority that each user has based on his/her role in the organization (What that user capable to do with the organization's resources) for example and admin can read, write, update and delete data whereas the user can only read.




-----------------------------------------------------------------------------



Which 3 things had you heard about previously and now have better clarity on?
RBAC, Rule based access control and Authorization.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Event-driven apps, Capabilities.

What are you most excited about trying to implement or see how it works?
Event-driven Apps.

---------------------------------------------------------------------------


![](https://1.bp.blogspot.com/-jaryJZON2JA/WKVu7cm5t9I/AAAAAAAAARk/E6MG8t5xZBoJygS82GmHHZjE3gKTmcoQQCLcB/s1600/download.png)



[Events-Driven Programming Video](https://www.youtube.com/watch?v=fpphnWwMrug)

[Node.js Events Docs](https://nodejs.org/api/events.html)


`Event Emitter` ---> an action that happens. (onclick, hover, keydown ...)

`Event listeners` ---> A main loop that listens to an event emitter and calls the event handlers.

`Event Handlers` ---> is a call back function the run when an event been triggered.


there is an event module in JS that we can use to make our own event emitter


```
const EventEmitter = require('events').EventEmitter;
const myEventEmitter = new EventEmitter;

```

to remove event listener in event emitter `removeListener` or `removeAllListeners`


We can make benefit of the EDP paradigm (event driven programming), with our OOP paradigm.