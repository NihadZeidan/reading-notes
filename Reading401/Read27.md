# Context API

## Describe use cases for useMemo() and useReducer()?

we use `useReducer()` when we have complex states.

## Why do custom hooks need the use prefix?

it's a naming convention to all custom hooks + because both components and hooks are JS function so it's a way to differentiate between them.

## What do custom hooks usually do?

Custom hooks allow us to have cleaner functional components, remove logic from the UI layer, and prevent code duplication by bringing common use cases to reusable hooks.

## Using any list of custom hooks, research and name one that you think will be useful in your applications

`react-fetch-hook.`

## Describe how a hook that fetches API data might work?

It may have async functions that await to fetching data from API, it may use `fetch`, `axios` or `superagent`, then it handles the received data maybe be sending them to a state and use this state inside JSX.

---

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

We use Context to share data that are Global in our Application such as: theme, Authenticated user ...

React will read the most close context from Provider.
`const MyContext = React.createContext(defaultValue);`
`<MyContext.Provider value={/* some value */}>`

The propagation from Provider to its descendant consumers (including .contextType and useContext)

`contextType` --> MyContext = you can access contextType by referring to `this.context`

`<MyContext.Consumer>` ---> subscribers to the context Provider

`MyContext.displayName` --> to name the context.
