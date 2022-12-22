import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { ThemeContextProvider } from './components/ThemeContext'

function App(props) {

    return (
        <>
            <ThemeContextProvider>
                <Header />
                <Body />
                <Footer />
            </ThemeContextProvider>
        </>
    )
}

export default App