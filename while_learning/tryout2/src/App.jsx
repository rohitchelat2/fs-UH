import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  var stat = true
  const [count, setCount] = useState(0)
  const addNote = (event) => {
    event.preventDefault()
    stat=!stat
    console.log(stat)
  }
  return (
    <>
      <div>
       
      <form onSubmit={addNote}>
        <input />
        <button type="submit">save</button>
      </form> 
      </div>
      
    </>
  )
}

export default App
