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

    const isValidEmail = email => {
      const valid = emailRegex.test(email)
      console.log(valid)
      return valid
    }

    Object.keys(fields).forEach( key => {
      const value = fields[key]

      // Check for emptyness
      if (value === '' || value === null) {
        errors[key] = 'This field is required'
      } else if (key === 'email' && !isValidEmail(value) ) {
        errors[key] = 'Value should be a valid email'
      } else {
        errors[key] = false
      }

    })

    setErrors(errors)

    return Object.keys(errors).filter( key => {
      return errors[key]
    }).length ? false : true
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
      <p className='required-notice'>* required</p>
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

      <Input
        required
        label='Mobile Phone Number'
        name='mobilePhoneNumber'
        type='mobilePhoneNumber'
        onChange={ e => setFieldValue('mobilePhoneNumber', e.target.value) }
        value={formValues.mobilePhoneNumber}
        error={errors['mobilePhoneNumber']}
      />

      <Input
        required
        label='Do you own a business?'
        name='own-bussines'
        type='radio-select'
        onChange={ e => setFieldValue('ownBusiness', e.target.value) }
        value={formValues.ownBusiness}
        error={errors['ownBusiness']}
        options={{
          'Yes': 'true',
          'No': 'false',
        }}
      />

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

      <Input
        required
        label='Purpose of Loan'
        name='purpose-of-loan'
        type='select'
        onChange={ e => setFieldValue('purpose', e.target.value) }
        value={formValues.purpose}
        error={errors['purpose']}
        options={loanPurposes}
      />


      <Input
        required
        label='Have you been in business for at least 9 months??'
        name='nine-months-business'
        type='radio-select'
        onChange={ e => setFieldValue('nineMonthsBusiness', e.target.value) }
        value={formValues.nineMonthsBusiness}
        error={errors['nineMonthsBusiness']}
        options={{
          'Yes': 'true',
          'No': 'false',
        }}
      />

      <button className='form-button' onClick={onSubmit}>Next</button>
    </>
  )
}

export default Step1
