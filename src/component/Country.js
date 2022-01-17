import React from 'react'

const Country = (props) => {
    return(<div>
      {props.countrylist.map(country => <h3 key = {country}>{country}</h3>)}
      </div>)
  }
  export default Country