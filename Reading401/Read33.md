# Redux ToolKit


It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.


it will help you by combine everything of Redux (reducer, state, actions) into one obj

How to install it:
 `npx create-react-app my-app --template redux`

An Existing App
 `npm install @reduxjs/toolkit`


 What's Included#
Redux Toolkit includes these APIs:

 - `configureStore()`: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
 - `createReducer()`: that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
 - `createAction()`: generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.
 - `createSlice()`: accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
 - `createAsyncThunk`: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
 - `createEntityAdapter`: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.


Alternative State Managers instead of Redux:
[Mob](https://mobx.js.org/getting-started.html)
[HookState](https://hookstate.js.org/)

