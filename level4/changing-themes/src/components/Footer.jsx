import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

export default function Footer(props) {

    const { color } = useContext(ThemeContext)

    return (
        <div className={`footer-${color}`}>
            <p>A classy footer</p>
        </div>
    )
}