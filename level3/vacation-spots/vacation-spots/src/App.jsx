import { useState } from 'react'
import data from "./data"
import Card from "./assets/Card"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      {cards}
    </div>
  )
}

export default App
