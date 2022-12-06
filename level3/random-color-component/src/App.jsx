import { useState } from 'react'
import axios from "axios"

function App() {
  const [colorsData, setColorsData] = useState()

  function getData() {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => setColorsData(response.data))
      .catch(error => console.log(error))
  }
  return (
    <div style={{ backgroundColor: `#${colorsData?.colors[0]?.hex}` }}>
      <button onClick={getData}>NEW COLOR</button>
    </div>
  )
}

export default App
