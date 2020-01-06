import { combineReducers } from 'redux'

import helpReducer from './helpReducer.js'

// Setup root reducer
const rootReducer = combineReducers({
  help: helpReducer,
})

export default rootReducer
