
import { useState } from 'react'
import ListPeople from './ListPeople'

const Filter = (props) =>{

var newfilterPersons= {}

const persons = props.persons  

const [newFilter, setNewFilter] = useState('')
const [filterPersons, setfilterPersons] = useState(persons)
const [status, setNewStatus] = useState(persons.length)


if(status < persons.length) {
    
        newfilterPersons = persons
       
        setNewFilter('')
        setNewStatus(persons.length)
        setfilterPersons(newfilterPersons)
   }
    else{ 
        newfilterPersons = filterPersons
      
    }


const handleFilter = (event) => {
    const filterStr = event.target.value
    setNewFilter(filterStr)
    newfilterPersons = persons.filter(person => person.name.toLowerCase().includes(filterStr.toLowerCase()))
    setfilterPersons(newfilterPersons)
    setNewStatus(persons.length)
  }


return(
 <div>
    <h2>Numbers</h2>
    <div>Filter: <input  value={newFilter} onChange={handleFilter} /></div>
    <ul> {newfilterPersons.map( person => (<ListPeople key={person.name} name={person.name} number={person.number}/>))}</ul>
</div> 

)}
  export default Filter