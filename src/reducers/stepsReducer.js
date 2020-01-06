import STEPS from 'lib/steps'

export const INCREASE_STEP = 'INCREASE_STEP'

const initialState = {
  currentStep: 1,
  stepTitle: STEPS[1].title,
  stepDescription: STEPS[1].description,
  totalSteps: Object.keys(STEPS).length,
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
    default:
      return state
  }
}

export default stepsReducer
