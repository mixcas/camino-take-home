import { INCREASE_STEP, SET_FORM_VALUE } from 'reducers/stepsReducer'

export const increaseStep = () => {
  return {
    type: INCREASE_STEP,
  }
}

export const setFieldValue = (field, data) => {
  console.log(field,data)
  return {
    type: SET_FORM_VALUE,
    field,
    data,
  }
}

