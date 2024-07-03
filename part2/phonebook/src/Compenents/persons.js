import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request =  axios.get(baseUrl)
    return request.then(response => response.data)
  }

  const createNew = newContact => {
    const request =  axios.post(baseUrl, newContact)
    return request.then(response => response.data)
  }
  
  const deleteOne = (id) => {
    
    const request =  axios.delete(baseUrl +'/'+ id)
    return request.then(response => response.data)

}

const update = (changedPerson) => {
 
  const request = axios.put(baseUrl +'/'+ changedPerson.id, changedPerson)
  return request.then(response => response.data)

}




  export default { getAll, createNew, deleteOne, update}