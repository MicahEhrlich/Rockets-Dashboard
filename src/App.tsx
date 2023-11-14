import { useState } from 'react'
import './App.css'
import { Rockets } from './components/rockets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Rockets />
    </>
  )
}

export default App
