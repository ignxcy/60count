import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  let isLightMode = false;

  const pass = () => {
    null
  }

  const toggleMode = () => {
    if (isLightMode) {
      darkMode();
      isLightMode = false;
    } else {
      lightMode();
      isLightMode = true;
    }
  };
  
  const lightMode = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    // Additional styles for light mode
    // ...
  };
  
  const darkMode = () => {
    document.body.style.backgroundColor = '#242424';
    document.body.style.color = 'white';
    // Additional styles for dark mode
    // ...
  };
  
  // Set the default mode to dark
  darkMode();

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const decrementCount = () => {
    if (count !== 0) {
      setCount(prevCount => prevCount - 1)
    }
    else {
    }
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={resetCount}>0</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <div>
        <label htmlFor="lightmode">light mode</label>
        <input type="checkbox" id="lightmode" checked={isLightMode} onChange={toggleMode} />
      </div>
    </>
  )
}