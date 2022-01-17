import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios' 

const Countrydisplay = (props) => {
    const [countryDetail, setCountryDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/name/${props.country}`)
		.then(res => {
            let tempList = []
            tempList.push(props.country,res.data[0].capital,res.data[0].population,Object.values(res.data[0].languages),res.data[0].flags.png)
            setCountryDetail(tempList);

            setLoading(true);
		})
	},[])

    return (
        <>
        {loading && <div>
            <div>
                <h1><strong>{countryDetail[0]}</strong></h1>
                <h3>capital {countryDetail[1]}</h3>
                <h3>polulation {countryDetail[2]}</h3>
            </div>
            <div>
                <h2><strong>languages</strong></h2>
                <ul>
                    {countryDetail[3].map(x => <li key = {x}>{x}</li>)}
                </ul>
                <img src = {countryDetail[4]} size="50%"/>
            </div>
        </div>}
        </>
    )
}

export default Countrydisplay


