# **React Notes**
In this markdown I store the notes from [react.dev](https://react.dev/learn).

## Quick Start
### Components
**Components:** This is what React apps are made out of. These can be buttons or the entire page. They are represented using javascript functions that retunr elements.
```
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

You can show components like this:
```
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
*Capital first letter means component. HTML tags are all lowercase*

**"export default":** specify the main component in the file.

### JSX 
**Javascript XML** is a markup syntax extenstion for javascript. They are optional but are used for most React projects.

It differs from HTML by:
- It is stricter
- You have to clse tags like `<br />`
- Components can return only a single JSX tag or an empty wrapper like so `<>...</>`

You can convert JSX to HTML and vice versa

You can add css styles like classes or id like html.

### Data and Logic
JSX lets you put markup into JS. You use culry braces to insert data like so `{user.name}`

React uses normal conditional statements.

### Lists
Use map() function and regular for loops to transrform lists of objects into react components.

```
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

The key is the unique identifier for that row ina list, use it to deal with the data.

### Events
You can decalre event handler functions inside your components.

```function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```
for `onclick` there `handleClick` doesnt have `()`, so you pass the function but don't call it.

### Updating the screen
`import { useState } from 'react';`

useState lets you keep track of states withing you project, like counters.

```function MyButton() {
  const [count, setCount] = useState(0);
  // ...
```

- count: the counter
- setCount: function to update the count
- useState(0): sets the new state at 0.

If you use the component multiple times a new state will be assigned to each instance.

### Using Hooks
**Hooks:** These are functions that allow you to access and create certain functionalitie without creating classes. They are denoted using use like so `useEffect()`.

### Sharing data with components
The easiest way to achieve this is to go up in the component hierarchy to a common link and use that for data storage or transfer.

## Tutorial: Tic-Tac-Toe
Here I store notes for a practice project where I create a React game.