import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  const [countReset, setCountReset] = useState(0)

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
      console.warn("Cannot go under zero.")
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
    </>
  )
}