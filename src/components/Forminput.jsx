import React, { useState } from 'react'
import '../styles/ui/forminput.scss'

const Forminput = (props) => {

  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className="form-input">
      <label>{label}</label>
      <input className="input"  {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} />
      <span>{errorMessage}</span>
    </div>
  )
}

export default Forminput