import React from 'react'

const Search = (props) =>{
    return(
      <h1>find countries <input value = {props.filter} onChange={props.function}></input></h1>
    )
  }
  export default Search