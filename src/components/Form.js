import React, { useReducer } from 'react'


// Error Initial state
const errorInitialState = {
  firstName: false,
}

// Initial state
const initialState = {
  formValues: {
    firstName: '',
    lastName: '',
    email: '',
    mobilePhoneNumber: '',
    ownBusiness: null,
    businessName: '',
    loanAmount: '',
    nineMonthsBusiness: null,
  },
  error: errorInitialState,
}


const SET_FORM_VALUE = 'SET_FORM_VALUE'

const formReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case SET_FORM_VALUE:
      const { formValues } = state
      return {
        ...state,
        formValues: {
          ...formValues,
          [action.field]: action.data,
        },
      }
    default:
      return state
  }
}

const setFieldValue = (field, data) => {
  return {
    type: SET_FORM_VALUE,
    field,
    data,
  }
}

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

const Form = () => {
  const [formState, dispatch] = useReducer(
    formReducer,  // Our Reducer
    initialState,
  )

  const { formValues } = formState

  return (
    <form>
      <div className='input-container'>
        <label className='required' for='first-name'>First Name</label>
        <input
          id='first-name'
          name='first-name'
          type='text'
          onChange={ e => { dispatch(setFieldValue('firstName', e.target.value)) } }
          value={formValues.firstName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='last-name'>Last Name</label>
        <input
          id='last-name'
          name='last-name'
          type='text'
          onChange={ e => { dispatch(setFieldValue('lastName', e.target.value)) } }
          value={formValues.lastName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='email'>Best Contact Email</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={ e => { dispatch(setFieldValue('email', e.target.value)) } }
          value={formValues.email}
        />
      </div>

      <div className='radio-select'>
        <h2 className='required'>Do you own a business?</h2>
        <input
          id='own-business-yes'
          type='radio'
          onChange={ e => { dispatch(setFieldValue('ownBusiness', true)) } }
          checked={ formValues.ownBusiness === true }
        />
        <label for='own-business-yes'>Yes</label>

        <input
          id='own-business-no'
          type='radio'
          onChange={ e => { dispatch(setFieldValue('ownBusiness', false)) } }
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
          onChange={ e => { dispatch(setFieldValue('businessName', e.target.value)) } }
          value={formValues.businessName}
        />
      </div>

      <div className='input-container'>
        <label className='required' for='loan-amount'>Desired Loan Amount</label>
        <input
          id='loan-amount'
          name='loan-amount'
          type='text'
          onChange={ e => { dispatch(setFieldValue('loanAmount', e.target.value)) } }
          value={formValues.loanAmount}
        />
      </div>

      <label for='purpose-of-loan' className='required'>Purpose of Loan</label>
      <select
        id='purpose-of-loan'
        onChange={ e => { dispatch(setFieldValue('purpose', e.target.value)) } }
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
          onChange={ e => { dispatch(setFieldValue('nineMonthsBusiness', true)) } }
          checked={ formValues.nineMonthsBusiness === true }
        />
        <label for='nine-months-business-yes'>Yes</label>

        <input
          id='nine-months-business-no'
          type='radio'
          onChange={ e => { dispatch(setFieldValue('nineMonthsBusiness', false)) } }
          checked={ formValues.nineMonthsBusiness === false }
        />
        <label for='nine-months-business-no'>No</label>
      </div>

      <button>Next</button>
    </form>
  )
}

export default Form
