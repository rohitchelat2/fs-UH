import { useState, useEffect } from 'react'
import Search from './Compenents/Search'
import List from './Compenents/List'
import Preview from './Compenents/Preview'
import getAll from './services/countryDb'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesFD, setCountriesFD] = useState([])

  const [filteredList, setfilteredList] = useState([])
  const [searchStr, setsearchStr] = useState('')
  const [autoSelectdcountry, setautoSelectdcountry] = useState(null)
  var selectdCountry = [] 

  //Downloading the country list
  useEffect(() => {
    var countryName = []
    var countryFull = []

    for(let i=0; i<250 ; i++){
    getAll(i).then(response => {
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
    
    
  }

  //If only one country in list activating base info
  if(filteredList.length===1)
    {
     selectdCountry = countriesFD.find(country => country.name.common === filteredList[0] )
     
    }


  return (
    <div className='whole'>
      <div className='country_list'>
        <Search value={searchStr} handleSearch={handleSearch} />
        <List names={filteredList}/>
        <Preview country={selectdCountry}/>
      </div>

      <div className='base_info'></div>
    </div>
  )
}

export default App
