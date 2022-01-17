import React, { useState, useEffect} from 'react'
import axios from 'axios' 
import Search from './component/Search'
import Countriestoshow from './component/Countriestoshow'



const App = () => {
  const [filter,setFilter] = useState("")
  const [country, setCountry] = useState([])
  const countriestoshow = filter === "" ?country :country.filter(x => x.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const data = response.data.map(res => res.name.common)
        setCountry(data)
      })
  }, [])

  return (
    <div>
      <Search function = {handleFilterChange} filter = {filter}/>
      <Countriestoshow countrylist = {countriestoshow} filter = {filter}/>
    </div>
  )
}

export default App