import React from 'react'

const Country = (props) => {
    console.log(props.countrylist);
    return(<div>
      {props.countrylist.map(country => <h3 key = {country}>{country}</h3>)}
      </div>)
  }
  export default Country