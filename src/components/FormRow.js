import React from "react"

const FormRow = ({ type, name, value, labeltext, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labeltext || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
