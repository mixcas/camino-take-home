import React from 'react'

const Header = () => {
  return (
    <header className='header dark-blue-background'>
      <div className='container'>
        <img className='logo' src='logo_white.svg' alt='Camino Financial'/>
        <button className='language-button'>Español</button>
      </div>
    </header>
  );
}

export default Header
