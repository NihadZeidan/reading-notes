# Component Composition


 # Can a parent component access the state of a child component?
   Yes it can

## What can be passed along in a prop variable?
  Function or an object, in the prop we usually change the state (setState) of the parent  which will change the other children's state.

## How can a child component “know” the state of another component?
  By passing a prop to other children that will trigger the parent on any change of their state, and that child will be listening to the parent state and by that it will know when a state of other children has changed.

## component props
  Are functions or objects that the child receive from parent.

## component state
  An object of a set of observable properties that control the behavior of the component.

## application state
  Represents the totality of everything necessary to keep your application running.


Which 3 things had you heard about previously and now have better clarity on?
State, Prop and parent, child

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
Dealing with props more

What are you most excited about trying to implement or see how it works?
Component Composition


------------------------------------------------

Component LifeCycle 
![](https://cdn-media-1.freecodecamp.org/images/1*U13Mlxz_ktcajaeJCyYkwg.png)


Mounting : Render the changes on the real DOM 


A higher-order component (HOC) is a function that takes a component and returns a new component.
What HOCs allow us to do is abstract shared logic between components into a single overarching component. A good use case for an HOC is authorization. You could write your authentication code in every single component that needs it.

`setState` is asynchronous. and it takes an object and a function.


Passing setState a function gives us two benefits. The first is it allows us to take a static copy of our state that will never change on its own (prevState). The second is that it will queue the setState calls so they run in order.

The React context API allows you to create global context objects that can be given to any component you make. This allows you to share data without having to pass props down all the way through the DOM tree.
   - const ContextObject = React.createContext({ foo: "bar" })


`this.props.children` it is used to display whatever you include between the opening and closing tags when invoking a component.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.