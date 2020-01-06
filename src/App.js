import React from 'react'
import './App.css'
import Steps from 'components/Steps'
import Header from 'components/Header'
import Help from 'components/Help'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Help/>
      <Steps/>
    </div>
  )
}

export default App
