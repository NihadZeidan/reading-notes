# Hooks API


## Why do we not need more .html pages in a multi-page React app?
   Because in React we can develop SPA (Single page application) which is single page that render multiple components based on user's interaction instead of re-render the whole page.


## If we wanted a component to show up on every page, where would we put it and why?

   Inside the <BrowserRouter />, outside a <Route />
   we have to put the whole app inside the <BrowserRouter /> to wrap it inside React router, then the component that we want it to render on all pages should not be inside any <Route /> meaning it does not need any specific path to render.


## What does props.children contain?
   All the elements between the opening and closing component's tag.



## Composition:
  is the process of adding wrapping component together and creating parent and child components.


## Children / Child Components:
  Component(s) between opening and closing other component (parent) tag.


## Hash Routing
  When we use <HashRouter /> instead of <BrowserRouter /> in React Routing using react-router-dom, and it appears in the URL like this `https://www.example.com/#link`

## Link Routing
  Is the process of creating <Link /> tags with specific path to link our UI to the URL in React applications.



Which 3 things had you heard about previously and now have better clarity on?
 Composition, React Routing and Hooks.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
 Hooks

What are you most excited about trying to implement or see how it works?
 using useState and other Hooks.




--------------------------------------------------------------------------------


