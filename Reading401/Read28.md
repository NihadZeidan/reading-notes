# React Cookies and RBAC

### Why is the Context API useful?

it is useful because it helps in passing the data (states or others) from parent to all the children without the need of props.

### Can a component outside of a provider get its context?

No it can not

### What are some common use cases for using the Context API?

To put some specific configuration and allow changing it easily by the user.

### Describe “Context Hell”

the React Context hell is the nasty code you get taking advantage of the React Context API (Providers inside Providers ...).

---

### global state
State of Component that is used by other Component.

### global context
Context Provider that is used for the whole App and wrap all the components.

### provider
Context API that is considered as (parent) and share it's state to all its children.

### consumer
Context API that is considered as (Child) and have access to whatever the parent is sharing.


---

### Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network. Management Role scop, mid management, employees ...

### Benefits of RBAC:

- Reducing administrative work and IT support.
- Maximizing operational efficiency.
- Improving compliance.

### react-cookies --> to load and save cookies in React

`npm i react-cookies`

     ```
      componentWillMount() {
       this.state =  { userId: cookie.load('userId') }
     }

     onLogin(userId) {
       this.setState({ userId })
       cookie.save('userId', userId, { path: '/' })
     }

     onLogout() {
       cookie.remove('userId', { path: '/' })
     }
     ```

`npm i universal-cookie`

```
import Cookies from 'universal-cookie';

const cookies = new Cookies(); ||  const cookies = new Cookies(req.headers.cookie); for server usage.

cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman
```
