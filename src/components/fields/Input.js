import React from 'react'
import './Input.css'

const Input = ({
  name,
  type = 'text',
  error,
  label,
  onChange,
  value,
  required,
  options,
}) => {
  switch (type) {
    case 'radio-select':
      return (
        <div className='input-container radio-select'>
          <h2 className={ required ? 'required' : ''}>{label}</h2>
          {Object.keys(options).map( (key) => {
            const fieldValue = options[key]
            return (
              <label key={`${name}-${fieldValue}`} htmlFor={`${name}-${fieldValue}`}>
                <input
                  id={`${name}-${fieldValue}`}
                  type='radio'
                  onChange={onChange}
                  checked={ value === fieldValue }
                  value={fieldValue}
                />
                {key}
              </label>
            )
          })}
          {error ? <p className='field-error'>{error}</p> : null}
        </div>
      )

    case 'select':
      return (
        <div className='input-container select'>
          <label className={ required ? 'required' : ''} htmlFor={name}>{label}</label>
          <select
            id={name}
            onChange={onChange}
          >
            <option value=''>Select</option>
            {options.map( (label, index) => {
              return (
                <option value={index} key={index}>{label}</option>
              )
            })}
          </select>
          {error ? <p className='field-error'>{error}</p> : null}
        </div>
      )

    default:
      return (
        <div className='input-container'>
          <label className={ required ? 'required' : ''} htmlFor={name}>{label}</label>
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
}

export default Input
