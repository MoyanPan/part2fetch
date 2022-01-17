import React from 'react'
import Country from './Country'
import Countrydisplay from './Countrydisplay'


const Countriestoshow = (props) => {

	if(props.countrylist.length === 1){
		return (
			<Countrydisplay country = {props.countrylist[0]}/>
		)
	}else if(props.countrylist.length >= 10 && props.filter !== ""){
		return(<><h3>Too many countries</h3></>)
	}else{
		return (
			<Country countrylist = {props.countrylist}/>
		)
	}

}
export default Countriestoshow