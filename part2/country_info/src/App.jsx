import { useState, useEffect } from 'react'
import Search from './Compenents/Search'
import List from './Compenents/List'
import Preview from './Compenents/Preview'
import dbimport from './services/countryDb'
import Notification from './Compenents/notification'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesFD, setCountriesFD] = useState([])
  const [filteredList, setfilteredList] = useState([])
  const [weather, setweather] = useState([])
  const [country, setCountry] = useState([])
  const [searchStr, setsearchStr] = useState('')
  const [notification, setNotification] = useState([null,null])

  var selectdCountry = [] 


  //Downloading the country list
  useEffect(() => {
    var countryName = []
    var countryFull = []

    for(let i=0; i<250 ; i++){
      dbimport.getAll(i).then(response => {
      countryName.push(response.name.common)
      countryFull.push(response)

    }
  )}
    setCountries(countryName)
    setCountriesFD(countryFull)
      
  }, [])

  
  




  //Name filter
  const handleSearch = (event) => {
    const newSearchStr = event.target.value
    const filteredCountryList = countries.filter(country => country.toLowerCase().includes(newSearchStr.toLowerCase()))
    setsearchStr(newSearchStr)
    setfilteredList(filteredCountryList)
    setCountry("")
    setweather("")
    
 
  }


  const previewCountry = (countryName) =>{
    selectdCountry = countriesFD.find(country => country.name.common === countryName )
    dbimport.getWeather(selectdCountry.capital).then(response=>{
    setCountry(selectdCountry)
    const tempWeather = [response.main.temp/10, response.wind.speed, response.weather[0].icon]
    setweather(tempWeather)
    }).catch(error => {
      const tempWeather = [0,0,0]
      setCountry(selectdCountry)
      setweather(tempWeather)
      setNotification([`Weather data couldn't be loaded`, 1])
      setTimeout(() => {setNotification([null,null])}, 5000)
      })
  
  }

  //If only one country in list activating base info
  if(filteredList.length===1&&weather==="")
    {
      
      previewCountry(filteredList[0])
     
    }

    const showCoutnry = (event) => {
      previewCountry(event.target.id)
    }




   // const convert = (response) =>{      weather.temp = response.main.temp     weather.wind = response.wind.speed      weather.icon = response.weather[0].icon  }
     
    
  return (
    <><Notification message={notification[0]} code={notification[1]} />
    <div className='whole'>
      <div className='country_list'>
        <Search value={searchStr} handleSearch={handleSearch} />
        <List names={filteredList} showCoutnry={showCoutnry}/>
        
      </div>

      <div className='base_info'>
      <Preview country={country} weather={weather} />
      </div>
    </div></>
  )
}

export default App
