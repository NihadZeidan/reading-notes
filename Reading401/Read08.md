# Access Control (ACL)


When is Basic Authorization used vs. Bearer Authorization?
Basic Authorization --> in the sign in process, to verify the username and password
Bearer Authorization --> after sign in process to ensure that the user still logged in. 

What does the JSON Web Token package do?
It allow us to generate (Sing) tokens and define it's payload and secret, also allow us to verify the tokens of the user.


What considerations should we make when creating and storing a SECRET?
- Security of the secret (encrypt it)
- Save it in an environmental variable (dotenv)



encryption : is the process of converting data and information into a secret code to hide it's true meaning.

token : is like a password given to the user that refer that the user has an access or permission to a given operation. it consists of Header (holds the algorithm and type of the token) Payload (information about the user) Signature (token security issues)

bearer : is an authentication type that holds a token with it and used after the sing in process.

secret : is a private data between your app/api and the authorization server that grant token only to the eligible users.

JSON Web Token : JWT is a package that allow us to define generate and verify tokens to the user.



Which 3 things had you heard about previously and now have better clarity on?
- Tokens 
- Bearer Authentication
- encryption 

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
- Secret
- JWT

What are you most excited about trying to implement or see how it works?
RBAC ---> Role Based Access Control.


---------------------------------------

[RBAC Video](https://www.youtube.com/watch?v=C4NP8Eon3cA)


Authenticate the user ---> Role ---> Rights based on the role.


RBAC ---> the process of giving rights/access to resources to the user based on their roles in the organization. (restricting system access to the authorized users based on their role)

ABAC ---> the process of defining different attributes like user's department, time, location ... to give rights/access to the user to different resources.

ACL --->  is a means of defining access rights by a given user or user group, to a specific object, such as a document. like read only or read and write.


Benefits of RBAC :

- Policy
- Least Privilege to each user (less harm or damage)
- Organization

