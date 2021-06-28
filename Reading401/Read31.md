# Redux - Combined Reducers

![](https://i.morioh.com/210122/b8872fab.webp)

`Why choose Redux instead of the Context API for global state?`
Redux is the industry standard.

`What is the purpose of a reducer?`
To change the State by taking in a state and a spicifec action then return new state accordingly

`What does an action contain?`
action in Redux is an objects that contain `type` which is a string, and the `payload` which is whatever you pass in.

`Why do we need to copy the state in a reducer?`
Because reducers are pure functions, meaning they do not has side effect and do not change the input itself.
and to not affect the original state and return it by default.

`immutable state` --> state can not be changed

`time travel in redux` -> The Redux DevTools records dispatched actions and the state of the Redux store at every point in time. ... This makes it possible to inspect the state and travel back in time to a previous application state without reloading the page or restarting the app.

`action creator` --> is an object that has type and payload property.

`reducer` --> pure function that takes in an action and state, return new state based on the action

`dispatch` --> dispatch is a function of the Redux store. to dispatch an action to components. This is the only way to trigger a state change. With React Redux, your components never access the store directly, you need to dispatch actions to component than use actions to change the state.

---

`combineReducers` --> It is an example of a higher-order reducer, which takes an object full of slice reducer functions, and returns a new reducer function.

```
export default theDefaultReducer = (state = 0, action) => state

export const firstNamedReducer = (state = 1, action) => state

export const secondNamedReducer = (state = 2, action) => state

// rootReducer.js
import { combineReducers, createStore } from 'redux'

import theDefaultReducer, {
 firstNamedReducer,
 secondNamedReducer
} from './reducers'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
 theDefaultReducer,
 firstNamedReducer,
 secondNamedReducer
})

const store = createStore(rootReducer)
```

Note : `combineReducers` will check your reducers by passing undefined to them; this is done even if you specify initial state to Redux.createStore(combineReducers(...), initialState). Therefore, you must ensure your reducers work properly when receiving undefined as state, even if you never intend for them to actually receive undefined in your own code.
