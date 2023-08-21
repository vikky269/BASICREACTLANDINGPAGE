import React from 'react'
import reactLogo from "../assets/react.svg"

export function Navbar(props) {
    
   
    return (
      <>
        <nav className={props.darkMode ? "dark" : ""} >
          <div className="nav">
            <div className="nav-box">
              <img src={reactLogo} className="nav-icon" alt="react-logo" />
              <h3 className="nav-logo-text"> REACT FACTS</h3>
            </div>
            

            <div className="toggler">
              <p className="toggler--light">Light</p>
              <div className="toggler--slider" onClick={props.toggleDarkMode}>
                <div className="toggler--slider--circle"></div>
              </div>
              <p className="toggler--dark">Dark</p>
            </div>
          </div>
        </nav>
      </>
    );
}

