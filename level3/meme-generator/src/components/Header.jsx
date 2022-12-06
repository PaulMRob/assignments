import React from "react"
import axios from "axios"

export default function Header() {

    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}