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
            //$env:VITE_SOME_KEY="13324c256219db2f668282310e2745a3"
            const api_key = import.meta.env.VITE_SOME_KEY
            const weatherRequest = axios.get(openweathermap+city+"&appid="+api_key)
            console.log(weatherRequest)
            return(
                weatherRequest.then(response=>response.data)
            )
            
}

    export default  {getAll, getWeather}