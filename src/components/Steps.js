import React from 'react'
import { connect } from 'react-redux'
import { increaseStep, setFieldValue } from 'actions/stepsActions'
import './Steps.css'

import Stepper from 'components/steps/Stepper'
import Step1 from 'components/steps/Step1'

const Steps = ({currentStep, stepTitle, stepDescription,totalSteps, increaseStep, formValues, setFieldValue}) => {

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1 description={stepDescription} nextStep={increaseStep} setFieldValue={setFieldValue} formValues={formValues}/>
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
      <div className='step-container'>
        {renderStep()}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increaseStep: () => dispatch(increaseStep()),
    setFieldValue: (field,data) => dispatch(setFieldValue(field, data)),
  }
}

const mapStateToProps = ({ steps }) => {
  const { currentStep, stepDescription, stepTitle, totalSteps, formValues, error } = steps
  return {
    currentStep,
    stepTitle,
    stepDescription,
    totalSteps,
    formValues,
    error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
