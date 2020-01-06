import React from 'react'

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

const Step1 = ({ description, nextStep, setFieldValue, formValues }) => {
  const onSubmit = e => {
    e.preventDefault()
    nextStep()
  }

  return (
    <>
      <p className='step-description'>{description}</p>
      <div className='input-container'>
        <label className='required' for='first-name'>First Name</label>
        <input
          id='first-name'
          name='first-name'
          type='text'
          onChange={ e => setFieldValue('firstName', e.target.value) }
          value={formValues.firstName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='last-name'>Last Name</label>
        <input
          id='last-name'
          name='last-name'
          type='text'
          onChange={ e => setFieldValue('lastName', e.target.value) }
          value={formValues.lastName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='email'>Best Contact Email</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={ e => setFieldValue('email', e.target.value)}
          value={formValues.email}
        />
      </div>

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

      <div className='input-container'>
        <label className='required' for='business-name'>Business Name</label>
        <input
          id='business-name'
          name='business-name'
          type='text'
          onChange={ e => setFieldValue('businessName', e.target.value)}
          value={formValues.businessName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='loan-amount'>Desired Loan Amount</label>
        <input
          id='loan-amount'
          name='loan-amount'
          type='text'
          onChange={ e => setFieldValue('loanAmount', e.target.value) }
          value={formValues.loanAmount}
        />
      </div>

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
