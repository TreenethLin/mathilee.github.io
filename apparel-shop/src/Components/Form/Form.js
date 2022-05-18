import { useState } from "react"

import arrow from "../../images/arrow.svg"

function Form() {
  const [email, setEmail]= useState('');

  function onChange(event) {
      setEmail(event.target.value)
  }
  

  return (
   <div className="email-button">   
    <label>
        <input className="Input__Field" type="text" placeholder="Email Address" value={ email } onChange={ onChange }/>
        <button><img src={ arrow } alt="arrow"/></button>
    </label>
    </div>
  )
}

export default Form