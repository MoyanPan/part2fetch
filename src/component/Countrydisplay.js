import {useEffect , React} from 'react'
import axios from 'axios' 

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
  export default Countrydisplay