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
        <div className='createContact'>
          <h2>Create Contact</h2>
        <form onSubmit={checkName}>
        <div>Name:<br></br> <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <br></br><input  value={newNum} onChange={handleNumChange} /></div>
        
        <div>
         <br></br> <button type="submit">Add</button>
        </div>
      </form></div>
    )
}

export default AddPeople