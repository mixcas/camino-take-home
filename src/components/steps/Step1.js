import React from 'react'
import Input from 'components/fields/Input'

const loanPurposes = [
  'Expansion',
  'Working capital',
  'Payroll',
  'Purchase a business',
  'Purchase a franchise',
  'Equipment',
  'Real estate',
  'Buy out a partner',
  'Start a business',
  'Finance Accounts Receivable',
  'Other',
]

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm

const Step1 = ({
  description,
  nextStep,
  setFieldValue,
  formValues,
  setErrors,
  errors,
}) => {
  const isValid = fields => {
    const errors = {}

    Object.keys(fields).forEach( key => {
      const value = fields[key]

      // Check for emptyness
      if (value === '' || value === null) {
        errors[key] = 'This field is required'
      } else if (key === 'email' && !emailRegex.test(value) ) {
        errors[key] = 'Value should be a valid email'
      } else {
        errors[key] = false
      }

    })

    setErrors(errors)

    return Object.keys(errors).length ? false : true
  }
  const onSubmit = e => {
    e.preventDefault()
    if(isValid(formValues)) {
      nextStep()
    }
  }

  return (
    <>
      <p className='step-description'>{description}</p>
      <Input
        required
        label='First Name'
        name='first-name'
        type='text'
        onChange={ e => setFieldValue('firstName', e.target.value) }
        value={formValues.firstName}
        error={errors['firstName']}
      />

      <Input
        required
        label='Last Name'
        name='last-name'
        type='text'
        onChange={ e => setFieldValue('lastName', e.target.value) }
        value={formValues.lastName}
        error={errors['lastName']}
      />

      <Input
        required
        label='Email'
        name='email'
        type='email'
        onChange={ e => setFieldValue('email', e.target.value) }
        value={formValues.email}
        error={errors['email']}
      />

      <div className='radio-select'>
        <h2 className='required'>Do you own a business?</h2>
        <input
          id='own-business-yes'
          type='radio'
          onChange={ e => setFieldValue('ownBusiness', true)}
          checked={ formValues.ownBusiness === true }
        />
        <label for='own-business-yes'>Yes</label>

        <input
          id='own-business-no'
          type='radio'
          onChange={ e => setFieldValue('ownBusiness', false) }
          checked={ formValues.ownBusiness === false }
        />
        <label for='own-business-no'>No</label>
      </div>

      <Input
        required
        label='Business Name'
        name='business-name'
        type='text'
        onChange={ e => setFieldValue('businessName', e.target.value) }
        value={formValues.businessName}
        error={errors['businessName']}
      />

      <Input
        required
        label='Desired Loan Amount'
        name='loan-amount'
        type='text'
        onChange={ e => setFieldValue('loanAmount', e.target.value) }
        value={formValues.loanAmount}
        error={errors['loanAmount']}
      />

      <label for='purpose-of-loan' className='required'>Purpose of Loan</label>
      <select
        id='purpose-of-loan'
        onChange={ e => setFieldValue('purpose', e.target.value) }
      >
        {loanPurposes.map( (label, index) => {
          return (
            <option value={index} key={index}>{label}</option>
          )
        })}
      </select>

      <div className='radio-select'>
        <h2 className='required'>Have you been in business for at least 9 months?</h2>
        <input
          id='nine-months-business-yes'
          type='radio'
          onChange={ e => setFieldValue('nineMonthsBusiness', true) }
          checked={ formValues.nineMonthsBusiness === true }
        />
        <label for='nine-months-business-yes'>Yes</label>

        <input
          id='nine-months-business-no'
          type='radio'
          onChange={ e => setFieldValue('nineMonthsBusiness', false) }
          checked={ formValues.nineMonthsBusiness === false }
        />
        <label for='nine-months-business-no'>No</label>
      </div>

      <button onClick={onSubmit}>Next</button>
    </>
  )
}

export default Step1
