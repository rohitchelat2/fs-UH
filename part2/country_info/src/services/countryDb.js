import axios from 'axios'
const baseUrl = 'http://localhost:3001/'

const getAll = (i) => {
  
    const request =  axios.get(baseUrl+i)

        return( 
          
          request.then(response=>response.data)
        
        )
    }

    export default  getAll