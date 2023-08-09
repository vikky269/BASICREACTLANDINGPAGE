import React from 'react'
import reactLogo from "../assets/react.svg"

export function Navbar() {
    
   
    return (
        <>

        <nav className='nav'>
            <div className='nav-box'>
               <img src={reactLogo}  className='nav-icon' alt='react-logo'/>
               <h3 className='nav-logo-text'> REACT FACTS</h3>
            </div>
                 <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
            
        </>
    )
}

