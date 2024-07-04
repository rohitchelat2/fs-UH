import axios from 'axios'
const baseUrl = 'http://localhost:3001/'
const openweathermap = 'https://api.openweathermap.org/data/2.5/weather?q='

const getAll = (i) => {
  
    const request =  axios.get(baseUrl+i)

        return( 
          
          request.then(response=>response.data)
        
        )
    }

const getWeather = (city) =>{
            
            const api_key = import.meta.env.VITE_SOME_KEY
            const weatherRequest = axios.get(openweathermap+city+"&appid="+api_key)
            
            return(
                weatherRequest.then(response=>response.data)
            )
            
}

    export default  {getAll, getWeather}