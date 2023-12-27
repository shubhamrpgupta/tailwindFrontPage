import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(5);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1)
    } else {
      setCount(count)
    }
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(count)
    }
  }

  let dataObj = { lastName: "Gupta", age: 48 };
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">The Count is: {count}</h1>

      <button onClick={addValue}>Add 1</button>
      <br />
      <button onClick={removeValue}>Remove 1</button>
      <Card userName="Shubham" btnText="Click here" />
      <Card userName="Gupta" btnText="Visit me" />
    </>
  )
}

export default App
