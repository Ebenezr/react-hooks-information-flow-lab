import React from 'react'

const Header=({theme, isDarkMode})=> {
    
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={theme}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
  )
}

export default Header