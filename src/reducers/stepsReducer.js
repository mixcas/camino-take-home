import STEPS from 'lib/steps'

export const INCREASE_STEP = 'INCREASE_STEP'
export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const SET_ERRORS = 'SET_ERRORS'

const initialState = {
  currentStep: 1,
  stepTitle: STEPS[1].title,
  stepDescription: STEPS[1].description,
  totalSteps: Object.keys(STEPS).length,
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
  errors: {},
}

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_STEP:
      const newStep = state.currentStep + 1
      return {
        ...state,
        currentStep: newStep,
        stepTitle: STEPS[newStep].title,
        stepDescription: STEPS[newStep].description,
      }
    case SET_FORM_VALUE:
      const { formValues } = state
      return {
        ...state,
        formValues: {
          ...formValues,
          [action.field]: action.data,
        },
      }

    case SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.data,
        }
      }
    default:
      return state
  }
}

export default stepsReducer
