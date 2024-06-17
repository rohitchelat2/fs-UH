import { useState } from 'react'
import Filter from './Compenents/Filter'
import AddPeople from './Compenents/AddPeople'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const checkName = (newName, newNum) => {
    const names= persons.map(person=>person.name)
    names.includes(newName)?alert(newName+ ' already exist in the phonebook') : newName ? addName(newName, newNum) : alert('Name cannot be blank') }
    const addName = (newName, newNum) => {
    const nameObject= {name: newName, number: newNum}
    setPersons(persons.concat(nameObject))
 }


  return (
    <div>
      <h2>Phonebook</h2>
      <AddPeople checkName={checkName} />
      <Filter persons={persons} status={status}/>

    </div>
  )
}

export default App