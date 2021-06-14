# Props and State

## Does a deployed React application require a server?

Not necessary needed a server for React App

## Why do we prefer to test a React application at the behavior rather than the unit level?

Because we want to test all the behavior that the final user may do on our website and see the changing on the UI.

## What does `npm run build` do?

`npm run build` creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html.

## Describe the actual composition / architecture of a React application

React app is a set of component (component-Based) that change according to different states, and gather together to create the whole UI interface.

## BDD

Behavior-driven development is an agile software development process that encourages collaboration among developers, quality assurance testers, and customer representatives in a software project.

## Acceptance Tests

a type of testing done by users, customers, or other authorised entities to determine application/software needs and business processes. It is also known as user acceptance testing (UAT), operational acceptance testing (OAT), and end-user testing.

## mounting

Mounting is the process of outputting the virtual representation of a component into the final UI representation (e.g. DOM or Native Components). In a browser that would mean outputting a React Element into an actual DOM element.

## build

Building the server for your react app.

Which 3 things had you heard about previously and now have better clarity on?
Mounting, Component and Acceptance test.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
BDD, Behavioral testing and build.

What are you most excited about trying to implement or see how it works?
BDD

---

`setState()` is the only legitimate way to update state after the initial state setup.

The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state.(two trees and compare them together)

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
example :

   ```
    <button onClick={activateLasers}>  
    Activate Lasers 
    </button>
   ```

You need to `bind` the methods used inside the class or use arrow function to use `this` properly.

[Forms](https://reactjs.org/docs/forms.html)

[State and lifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)

[Components and Props](https://reactjs.org/docs/components-and-props.html)

[Testing React App](https://thomaslombart.com/beginner-guide-testing-react-apps/)


