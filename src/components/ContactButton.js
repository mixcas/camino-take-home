import React from 'react'
import './ContactButton.css'

const ContactButton = ({text, icon, href}) => {
  return (
    <button
      className='contact-button'
      onClick={ e => window.location = href}
    >
      {icon ? <span className='contact-button-icon'>{icon}</span> : null}
      {text ? <span className='contact-button-text'>{text}</span> : null}
    </button>
  )
}

export default ContactButton
