import { useState } from 'react'
import './App.css'
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background" >
    <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
