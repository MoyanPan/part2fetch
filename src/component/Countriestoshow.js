import React from 'react'
import Country from './Country'
import Countrydisplay from './Countrydisplay'

const Countriestoshow = (props) => {
  if(props.countrylist.length == 1){
  return (
    <Countrydisplay></Countrydisplay>
  )}
  else{
    return <Country countrylist = {props.countrylist}></Country>
  }

}
  export default Countriestoshow