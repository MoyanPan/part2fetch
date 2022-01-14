import React, { useState, useEffect} from 'react'
import axios from 'axios' 

const Country = (props) => {
  return(<div>
    {props.countrylist.map(country => {<h3>{country}</h3>})}
    </div>)
}
const Countrydisplay = (props) => {
  const hook = () => {
    axios.get(`https://restcountries.com/v3.1/name/${props.name}`)
    .then(res => {
      props.setCountry(res.data)
      })
  }
  useEffect(hook,[])
  return (
    <div>
      <h1>{}</h1>
    </div>
  )
}
const Search = (props) =>{
  return(
    <h1>find countries <input value = {props.filter} onChange={props.function}></input></h1>
  )
}
const Countriestoshow = (props) => {
  if(props.countrylist.length == 1){
  return (
    <Countrydisplay></Countrydisplay>
  )}
  else{
    return <Country countrylist = {props.countrylist}></Country>
  }

}

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