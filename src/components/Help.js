import React from 'react'
import { connect } from 'react-redux'
import { toggleHelp } from  'actions/helpActions'
import ContactButton from 'components/ContactButton'

import './Help.css'

const Help = ({ open, toggleHelp }) => {
  const drawerStyle = {
    height: open ? 164 : 0,
    opacity: open ? 1 : 0,
  }

  return (
    <div className='help dark-blue-background'>
      <div class='container'>
        <button className='help-toggle' onClick={toggleHelp}>
          { open ? (
            <img src='up-chevron.svg' alt='Hide help'/>
          ) : (
            <>
              <img src='help.svg' alt='Show help'/>
              <span>Help</span>
            </>
          )}
        </button>
        <div className='help-drawer-container'>
          <div className='help-drawer' style={drawerStyle}>
            <p className='help-text'>Need help? Call or chat with us directly</p>
            <div className='contact-buttons'>
              <ContactButton
                text='Call'
                href='tel:8008520655'
                icon={<img src='call.svg'/>}
              />
              <ContactButton
                text='Email'
                href='mailto:info@caminofinancial.com'
                icon={<img src='chat.svg'/>}
              />
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    toggleHelp: () => dispatch(toggleHelp())
  }
}

const mapStateToProps = ({ help }) => {
  return help
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)
