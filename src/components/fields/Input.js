import React from 'react'

const Input = ({
  name,
  id,
  type = 'text',
  error,
  label,
  onChange,
  value,
  required,
}) => {
  return (
    <div className='input-container'>
      <label className={ required ? 'required' : ''} for={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error ? <p className='field-error'>{error}</p> : null}
    </div>
  )
}

export default Input
