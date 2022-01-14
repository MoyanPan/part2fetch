import React, { useState, useEffect} from 'react'
import axios from 'axios' 
import Search from './component/Search'
import Countriestoshow from './component/Countriestoshow'



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter,setFilter] = useState("")
  const [country,setCountry] = useState([])
  const [one,setOne] = useState(false)
  console.log(country);
  const countriestoshow = filter === ""
  ? countries
  : countries.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data.map(res => res.name.common)
        setCountries(data)
      })
  }
  
  useEffect(hook, [])

  return (
    <div>
      <Search function = {handleFilterChange} filter = {filter}></Search>
      <Countriestoshow setCountry = {setCountry} countrylist = {countriestoshow}></Countriestoshow>
    </div>
  )
}

export default App