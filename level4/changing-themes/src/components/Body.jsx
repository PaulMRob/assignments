import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

function Body(props) {

    const { color, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={`body-${color}`}>
            <h1>Click the button to change the theme!</h1>
            <button onClick={toggleTheme}>Change Theme</button>
            <h3>You are currently in the {color} theme.</h3>
        </div>
    )
}

export default Body