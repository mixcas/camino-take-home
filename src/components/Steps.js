import React from 'react'
import { connect } from 'react-redux'
import { increaseStep, setFieldValue, setErrors } from 'actions/stepsActions'
import './Steps.css'

import Stepper from 'components/steps/Stepper'
import Step1 from 'components/steps/Step1'

const Steps = ({
  currentStep,
  stepTitle,
  stepDescription,
  totalSteps,
  increaseStep,
  formValues,
  setFieldValue,
  setErrors,
  errors,
}) => {

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1
          description={stepDescription}
          nextStep={increaseStep} setFieldValue={setFieldValue}
          formValues={formValues}
          errors={errors}
          setErrors={setErrors}
        />
      case 2:
        return (
          <p>This would be step 2 form</p>
        )
      default:
        break
    }
  }

  return (
    <div className='steps'>
      <header className='steps-header'>
        <div className='container steps-header-container'>
          <h2 className='step-title'>Step {currentStep}: <span className='bold'>{stepTitle}</span></h2>
          <Stepper currentStep={currentStep} totalSteps={totalSteps}/>
        </div>
      </header>
      <div className='container step-container'>
        {renderStep()}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increaseStep: () => dispatch(increaseStep()),
    setFieldValue: (field,data) => dispatch(setFieldValue(field, data)),
    setErrors: (errors) => dispatch(setErrors(errors)),
  }
}

const mapStateToProps = ({ steps }) => {
  const { currentStep, stepDescription, stepTitle, totalSteps, formValues, errors } = steps
  return {
    currentStep,
    stepTitle,
    stepDescription,
    totalSteps,
    formValues,
    errors,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
