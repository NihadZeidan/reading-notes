# Component Based UI

## Name 5 Javascript UI Frameworks (other than React)
 - Angular JS
 - Vue JS
 - Ember
 - Svelte
 - Ext 


## What’s the difference between a framework and a library?
 Framework: provide us with all the basic needs (skelton) of we need to build apps, and it contain using libraries. example: Express, React
 Library: do so specific task in your code, and you call it whenever you want. example: JQuery.

 ![](https://anarsolutions.com/wp-content/uploads/2019/02/Library-and-Framework.jpg)



## Rendering:
  Is when we run (execute) the code in the browser.

## Templates:
 Are set of rules that we pre-define and use them many times differently in the code.

## State:
  Is an object (instance) from the main React component, and it has properties that change and control the behavior of the main component.




Which 3 things had you heard about previously and now have better clarity on?
 React, State and a component.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
 React.js, using component with different states.

What are you most excited about trying to implement or see how it works?
 Implementing React JS 

-------------------------------------------------------------


JSX: (syntax extension to JavaScript): HTML and JS. 
example:
```
const element = <h1>Hello, world!</h1>;
```


Component: HTML tags and logic together.


Embedding Expressions in JSX: declaring variables/ functions and use them in JSX in curly braces.

we can use JSX in if statement or for loop, and we can set attribute to the tags inside JSX

`React.clearElement()` ---> to clear JSX


Elements:  are the smallest building blocks of React apps. An element describes what you want to see on the screen.
Component: group of elements.

To render a React element into a root DOM node, pass both to ReactDOM.render():

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

React elements are immutable (unable to change) and the only way to change element is by calling ReactDOM.render() many times:

[Simple React clock !](https://codepen.io/pen?&editors=0010)





  