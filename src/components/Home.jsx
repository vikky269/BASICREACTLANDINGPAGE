import React from 'react'

export function Home(props) {
    

    return (
        <>
         <main className={props.darkMode ? "dark" : ""} >
            <div className='container'>
                <h1 className='container-text'>Fun Facts about React</h1>
                <ul className='container-list'>
                    <li>Was first released in 2013</li>
                    <li>Was Originally created by jordan walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by facebook</li>
                    <li>Powers thousands of enterprise apps including mobile apps</li>
                </ul>
            </div>
        </main>
        </>
    )
}
