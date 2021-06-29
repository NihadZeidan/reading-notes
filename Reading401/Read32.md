# Redux - Asynchronous Actions

![](https://miro.medium.com/max/600/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg)

### How granular should your reducers be?

it should be pure functions with no side-effects

### Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched

is a pro thing because it will help in letting reducers communicate with each other in kind a way.

### Name a strategy for preventing the above

using different actions.

### store :

is where the initial state, reducer and actions are placed in one place in Redux.

### combined reducers:

is the process of using more than one reducer in our store.

---

## Redux MiddleWares :

Redux also allows for middleware that sits between an action being dispatched and the action reaching the reducers.

### Redux Thunk MiddleWare :

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed.

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store. (Thunk is a programming concept where a function is used to delay the evaluation/calculation of an operation.)

`npm install redux-thunk@2.3.0`

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));
```

![](https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)
