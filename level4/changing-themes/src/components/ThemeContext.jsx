import React, {useState} from 'react'

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    const [color, setColor] = useState("fire")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "fire" ? "ice" : "fire")
    }

    return (
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
        {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}