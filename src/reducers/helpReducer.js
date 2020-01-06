export const TOGGLE_HELP = 'TOGGLE_HELP'

const initialState = {
  open: false,
}

const helpReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_HELP:
      return {
        open: !state.open,
      }
    default:
      return state
  }
}

export default helpReducer
