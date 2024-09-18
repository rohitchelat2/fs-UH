import { useState, useEffect } from 'react'
import Filter from './Compenents/Filter'
import AddPeople from './Compenents/AddPeople'
import ListPeople from './Compenents/ListPeople'
import contact from './persons'
import Notification from './Compenents/notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterStr, setfilterStr] = useState([]) 
  const [filterPerson, setfilterPerson] = useState([])
  const [notification, setNotification] = useState([null,null])
  
  useEffect(() => {
    contact.getAll().then(response => {
        setPersons(response)
        setfilterPerson(response)
      })
  }, [])

// adding name and updating funvtions together
  const checkName = (newName, newNum) => {
    const names= persons.map(person=>person.name)
    
    //checking if name exist in the Db already, if them updation called rather than creating new, also checking if its blank
    names.includes(newName)?nameExist (newName, newNum) : newName? addName(newName, newNum) : alert('Name cannot be blank') }
    
    //function for updating the contact
    const nameExist = (oldName, newNum) => {
    if (window.confirm(`Do you want to update ${oldName} phone number ?`))
        {
          const updatePerson = persons.find(person => person.name === oldName) 
          const changedPerson = { ...updatePerson, number: newNum }
          contact.update(changedPerson).then(updatedContact =>{
          const newfilterPersons =  persons.map(person => person.name === updatedContact.name ? updatedContact : person )
          setfilterPerson(newfilterPersons)
          setPersons(newfilterPersons)
         // const message = 
          setNotification([`${updatedContact.name}'s phone number udpated`,1])
          setTimeout(() => {setNotification([null,null])}, 5000)
          setfilterStr(filterStr)}).catch(error => {
            // this is the way to access the error message
            setNotification([error.response.data.error,0])
            setTimeout(() => {setNotification([null,null])}, 5000)
           
          })
    }}
    
    //Creating new contact    
    const addName = (newName, newNum) => {
    const nameObject= {name: newName, number: newNum}
    contact.createNew(nameObject).then(newContact =>{
    setPersons(persons.concat(newContact))
    setfilterPerson(persons.concat(newContact))
    setfilterStr("")
    setNotification([`${newContact.name} added to the contact list`,1])
    setTimeout(() => {setNotification([null,null])}, 5000)
  }).catch(error => {
    // this is the way to access the error message

    setNotification([error.response.data.error,0])
    setTimeout(() => {setNotification([null,null])}, 5000)
   
  })
 }

//Function for filtering the list based on text box
 const handleFilter = (event) => {
  const filterStr = event.target.value
  const newfilterPersons = persons.filter(person => person.name.toLowerCase().includes(filterStr.toLowerCase()))
  setfilterPerson(newfilterPersons)
  setfilterStr(filterStr)
}

//Function for deleting
 const deleteOne = (event) => {
    const id = event.target.id
    const deleteObject = persons.find(person => person.id === id)
    if (window.confirm(`Do you want to delete ${deleteObject.name} ?`))
    {
    contact.deleteOne(id).then(response  => {
    const newfilterPersons = persons.filter(person => person.id !== id)
    const deletedContact = persons.filter(person => person.id == id)
    setfilterPerson(newfilterPersons)
    setPersons(newfilterPersons)
    setNotification([`${deletedContact[0].name} deleted from contact list`, 1])
    setTimeout(() => {setNotification([null,null])}, 5000)
    setfilterStr("")})
    .catch(error => {
      const newfilterPersons = persons.filter(person => person.id !== id)
      setfilterPerson(newfilterPersons)
      setPersons(newfilterPersons)
      setNotification([`${deleteObject.name} has been already deleted`, 0])
      setTimeout(() => {setNotification([null,null])}, 5000)
      setfilterStr("")
    })}}

   



  return (
    
      <div><Notification message={notification[0]} code={notification[1]} />
      <div className='phonebook'>
      
      <AddPeople checkName={checkName} />
      
      <div className='contactList'><h2>Numbers</h2>
      <Filter value={filterStr} handleFilter={handleFilter}/>
      <ul> {filterPerson.map( person => (<ListPeople key={person.name} name={person.name} number={person.number} id={person.id} deleteOne={deleteOne}/>))}</ul>

    </div></div></div>
  )
}

export default App