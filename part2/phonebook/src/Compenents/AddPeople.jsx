import { useState } from 'react'


const AddPeople = (props) => {

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumChange = (event) => {
        setNewNum(event.target.value)
      }
    

      const checkName = (event) => {
        event.preventDefault()
        
        props.checkName(newName, newNum)
        setNewName('') 
        setNewNum('')  }


    return(

        <form onSubmit={checkName}>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <input  value={newNum} onChange={handleNumChange} /></div>
        
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}

export default AddPeople