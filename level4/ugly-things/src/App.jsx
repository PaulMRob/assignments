import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import UglyList from './components/UglyList'
import { UglyContextProvider } from './components/ContextProvider'

function App(props) {

  return (
    <>
      <h1>Ugh... lee</h1>
      <UglyContextProvider>
        <Form />
        <UglyList />
      </UglyContextProvider>
    </>
  )
}

export default App
