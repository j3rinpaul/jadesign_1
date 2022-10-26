import React from 'react'
import NavBar from './Navbar/navBar'
import Footer from './Footer/fooTer'

function App() {
  return (
    <div>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  )
}

export default App
























/*
  import {useState} from 'react';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(event, num) {
    setCount(count + num);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>
        event is used here to call another function

        first the jsx element function is called and inside that a props named handleClick is called and as the props using event tag
        the handleClick function is passed along with params
      <Child handleClick={event => handleClick(event, 100)} />
    </div>
  );
}


*/