# Express 


### What’s the difference between PUT and PATCH?

Put and Patch are HTTP methods. PUT is used to update (modifies) the entire resource data (it will overwrites the entire entities), whereas Patch applies a partial update to the resource where you can update only one value without affecting others.

If you send Put method with one value to 4 values entity it will overwrite everything and you will have only one new value.

### Provide links to 3 services or tools that allow you to “mock” an API for development like json-server? 

`https://www.mockable.io/`

`https://insomnia.rest/`

`https://www.postman.com/downloads/`


### Compare and contrast Swagger and APIDoc.js 1 Which HTTP status codes should be sent with each type of (un)successful API call?

Swagger allows you to describe the structure of your APIs so that machines can read them. and it gives the API the ability to describe it's own structure so you can automatically build API documentation.

APIDoc.js : allow you to create documentation for your API in the source code. these are the required info to document your API: 

to install APIDOC = `npm install apidoc -g`
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */


APIDoc.js :  successful HTTP status code (200), unsuccessful HTTP status code (500) internal server error.



Swagger :   responses:
        '200':
          description: OK
        '400':
          description: Bad request. User ID must be an integer and larger than 0.
        '401':
          description: Authorization information is missing or invalid.
        '404':
          description: A user with the specified ID was not found.
        '5XX':
          description: Unexpected error.


### Compare and contrast SOAP and ReST

Rest : Representational State Transfer, it is architectural style that gives a recommendations (guidelines) when building web servers that use HTTP protocol.
To create a REST API, you need to follow six architectural constraints:

- Uniform interface 
- Client-server separation 
- Statelessness 
- Cacheable resources 
- Layered system 
- Code on demand [optional]


SOAP (Subjective, Objective, Assessment and Plan) is a standardized protocol that sends messages using other protocols such as HTTP and SMTP. As SOAP is an official protocol, it comes with strict rules and advanced security features. Higher complexity, it requires more bandwidth and resources which can lead to slower page load times.

REST was created to address the problems of SOAP. REST allows different messaging formats, such as HTML, JSON, XML, and plain text, while SOAP only allows XML.




### Document the following Vocabulary Terms

Web Server : computer that run all the time, that handle the requisites coming form an api.

Express : is a backend web app Framework that is used to build node.js app (meaning it gives you features to help you building you web app . It provides mechanisms to:
- Write routes (path) to handle different HTTP requests.
- Integrate with "view" rendering engines like (EJS).
- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
- Add additional request processing "middleware".

Routing : is the paths that you use in your server app.

WRRC : Web Request/Response Cycle , the flow of sending requests over the internet and receiving responses.

--------------------------

Which 3 things had you heard about previously and now have better clarity on?
WRRC, Node.js and the server or web server.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
API documentations, Swagger, BIG-O

What are you most excited about trying to implement or see how it works?
API Documentation.

---------------------------------------

##### Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. 


##### NPM : Node Package Manager, its an open-source software to share and borrow packages 
npm consists of three distinct components:

the website `https://www.npmjs.com/`
the Command Line Interface (CLI) `https://docs.npmjs.com/cli/v7/commands/npm`
the registry `https://docs.npmjs.com/cli/v7/using-npm/registry`


##### “Test-driven development” TDD : it is a style of programming that consist of 3 activities Coding, Testing and Designing (refactor)


##### (CI / CD) Continuous Integration Continuous Delivery : CI is a work flow strategy to ensure everyone's changing (new codes) will integrate to the main brach (help to reduce merge conflicts and catch bugs) and it does that by using webhooks or APIs that will take each commit and test it and back to you with a message weather passed or not.
##### Continuous Delivery to develop softwares can be released at anytime, Continues Deployment is an extension of the continues delivery and help you to deploy immediately.
