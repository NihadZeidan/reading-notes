# Custom Hooks


Five Important Rules for Hooks 

Never call Hooks from inside a loop, condition or nested function
Hooks should sit at the top-level of your component
Only call Hooks from React functional components
Never call a Hook from a regular function
Hooks can call other Hooks

`const ProfileContext = React.createContext();`
`const context = useContext(ProfileContext)`

 Context allows this sharing of values between components without having to explicitly pass a prop through every level of the tree. 
 ![](https://imgur.com/MEx6Rdi.gif)


We can use `Async`/`Await` in our functional component when we are making requests from another API.

 We cannot use 'async' keyword with 'useEffect' callback method. It will result in race conditions.


`useReducer` is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 

`const [state, dispatch] = useReducer(reducer, initialArg, init);`

You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 

`useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).`


useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
`const refContainer = useRef(initialValue);`

Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```




When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 

Do two components using the same Hook share state? No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

[Use Hooks](https://usehooks.com/)
[Hooks List](https://github.com/rehooks/awesome-react-hooks)
[10 essential react hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d)