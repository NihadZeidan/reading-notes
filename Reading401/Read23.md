# Routing 

Do child components have direct access to props/state from the parent?
 Yes, children can access parent's state and props from parent

When a component “wraps” another component, how does the child component’s output get rendered?
 You can set like an if statement or using React-if with condition as an prop for the parent component, and when that condition met you can say `props.children` which will render all the wrapped children inside of it.


Can a component, such as <Content />, which is a child also be used as a standalone component elsewhere in the application?
 It's a stand alone component and you can render it any where else in the app as long as it's content do not depend on the parent content.

What trick can a parent use to share all props with it’s children?
 `super(props)`





`props.children` --> all the children content or other component wrapped between the opening and closing parent element 

`composition`  --> is the process of wrapping parent with children component (component composition) and then control the appearance of the children by the parent.





Which 3 things had you heard about previously and now have better clarity on?
 props, component, composition.
Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
 more about composition.

What are you most excited about trying to implement or see how it works?
 Routing.




 -------------------------------------------------


React Router is the standard routing library for React. ... “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.


 React Router has been broken into three packages: `react-router`, `react-router-dom`, and `react-router-native`

 The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).



 What does the <Route> render?
Routes have three props that can be used to define what should be rendered when the route’s path matches. Only one should be provided to a <Route> element.

component — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
render — A function that returns a React element 5. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
children — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.


our application needs a way to navigate between pages. If we were to create links using anchor elements, clicking on them would cause the whole page to reload. React Router provides a <Link> component to prevent that from happening.

[React Router Docs](https://reactrouter.com/web/api)