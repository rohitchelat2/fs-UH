import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Compenents/Filter'
import AddPeople from './Compenents/AddPeople'

const App = () => {
  
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


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