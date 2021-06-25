# Application State with Redux


What are the advantages of storing tokens in “Cookies” vs “Local Storage”?
 Cookies:
  - Default expiration time
  - You can access them from both the back-end (req.headers.cookie) and front-end 
  - has 4094 byte per cookie

Local Storage:
 - No expiration time, you have to delete them manually (from the browser)
 - 5 MB per domain
 - Data is only accessed from the local browser. Server can't access local storage unless a request been send (POST or GET)

 
Explain 3rd party cookies.
  Third-party cookies are cookies that are set by a website other than the one you are currently on. For example, you can have a "Like" button on your website which will store a cookie on a visitor's computer, that cookie can later be accessed by Facebook to identify visitors and see which websites they visited.


How do pixel tags work?
   Pixel tags are typically single pixel, transparent GIF images that are added to a web page. 

    the web page is served from the website’s domain while the image (Pixel tag) is served from the marketer server’s domain. This allows the marketer to read and record the cookie with the unique ID and the extended information it needs to record. 


---

Cookies: are a block of data that are placed on the user's website or in user's device (third-party cookies) that is used to store data about the user behavior on that website.

Authorization: is the process of giving the user different authorizes (capabilities) after he/she been authenticated.

Access control: is giving the user different level of access types that will allow the user to interact differently with the website based on user's role or other condition.

Conditional rendering: rendering the UI based on different conditions, in React, it happens when we use IF component that has a condition if met the children of that component will be rendered.




---
Redux is an open-source JavaScript library for managing application state.
  
  Principles of Redux (Redux Store):
  - State Tree
  - Action
  - Reducer Function

Redux use state or state tree which is simply an object that hold any changing happening in the UI. the state tree is redundant in Redux, meaning you can not modify it, instead you need to use an Action (which is another object that describe the change).

State tree --> object represent the data.
Action --> Object represent the change to that data. (it should has type property)

Pure function --> function that return value based on the arguments, and does not modify the argument data it self and has no side effect (do not use another operation (calling DB, calling the network))
Impure function --> functions that modify the argument data and has side effect.

Reducer Function --> is a PURE function that is used in Redux, takes in the previous state obj and the Action been dispatched and return the new state.

---

 Redux Store:
 `store.getState()`
 `store.dispatch({type: " "})`
 `store.subscribe( () => {})`