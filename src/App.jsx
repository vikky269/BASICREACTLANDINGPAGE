import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }


  return (
    <>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
     <Home darkMode={darkMode}  />
    </>
  )
}

export default App
