import STEPS from 'lib/steps'
const CHANGE_STEP = 'CHANGE_STEP'

const initialState = {
  currentStep: 1,
}

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_STEP:
      return {
        currentStep: action.step,
        stepText: STEPS[action.step]
      }
    default:
      return state
  }
}

export default stepsReducer
