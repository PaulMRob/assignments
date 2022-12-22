import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

export default function Header(props) {

    const { color } = useContext(ThemeContext)

    return (
        <div className={`header-${color}`}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    )
}
