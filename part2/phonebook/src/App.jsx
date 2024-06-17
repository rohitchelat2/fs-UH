import { useState } from 'react'
import Filter from './Compenents/Filter'


const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [status, setNewStatus] = useState(0)
 
 


  const checkName = (event) => {
    event.preventDefault()
    const names= persons.map(person=>person.name)
    names.includes(newName)?alert(newName+ ' already exist in the phonebook') : newName ? addName(event) : alert('Name cannot be blank') }

  const addName = (event) => {
     const nameObject= {name: newName, number: newNum}
    setPersons(persons.concat(nameObject))
    setNewName('') 
    setNewNum('')  
    setNewStatus(1)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }






  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkName}>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <input  value={newNum} onChange={handleNumChange} /></div>
        
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Filter persons={persons} status={status}/>

    </div>
  )
}

export default App