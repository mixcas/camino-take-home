import React from 'react'

import './Stepper.css'

const Stepper = ({currentStep, totalSteps}) => {
  return (
    <div className='stepper-container'>
      Step {currentStep} of {totalSteps}
      <div class='stepper-steps'>
        {[...Array(totalSteps).keys()].map( (val, index) => {
          return (
            <span className={`stepper-step ${currentStep === index + 1 ? 'active-step': ''}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Stepper
