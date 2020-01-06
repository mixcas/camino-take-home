import { combineReducers } from 'redux'

import helpReducer from './helpReducer.js'
import stepsReducer from './stepsReducer.js'

// Setup root reducer
const rootReducer = combineReducers({
  help: helpReducer,
  steps: stepsReducer,
})

export default rootReducer
