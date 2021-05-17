# Bearer Authorization 


OAuth is a (delegated authorization) framework for REST/APIs. like when using facebook and instagram.

Write the following steps in the correct order:

 1. Ask the client if they want to sign in via a third party.
 2. Make a request to a third-party API endpoint.
 3. Register your application to get a client_id and client_secret.
 4. Redirect to a third party authentication endpoint.
 5. Receive authorization code.
 6. Make a request to the access token endpoint.
 7. Receive access token.



What can you do with an authorization code?
It allows the user to get access for Tokens.

What can you do with an access token?
It allow the applications to make API requests on behalf of the user, it represents the authorization for the user to get access for the data and it must be transferred and stored securely.

What’s a benefit of using OAuth instead of your own basic authentication?
   - it enables apps to gain limited access to user's data.
   - no need to give a password.
   - it supports the authorizations from web app, desktop app and mobile.
   - More secure. (complex tokens)





Client ID   ---> is simple a public identifer for apps. (32-character hex string)

Client Secret  ---> it is a secret between your app and the authorization server, it only grant tokens to the eligible users.

Authentication Endpoint  ---> it's a path or mechanism used to identify or authenticate an external devices to connect to a service.

Access Token Endpoint   ---> is the place where apps make a request to receive access tokens.

API Endpoint  --->  is the point or the place for an application program interface, APIs used to send and receive requests from web app or web server (communicate between apps)

Authorization Code ---> is a temporary code for the user to access token. it's obtained from the authorization server.

Access Token ---> is like the password it defines the user authorization to access specific (scope) information or data or it allows apps to access APIs.


Which 3 things had you heard about previously and now have better clarity on?
Tokens, OAuth, client secret.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Authorization code, full cycle of accessing tokens, access token and authorization endpoints.

What are you most excited about trying to implement or see how it works?
how to generate access tokens.

---------------------------------------


What is JSON Web Token?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

JWTs consist of three parts separated by dots ---> header.payload.signature  `xxxxx.yyyyy.zzzzz`


JWTs can be either signed, encrypted or both. 