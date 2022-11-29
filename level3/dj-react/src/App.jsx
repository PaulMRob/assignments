import { useState } from 'react'
import Square from "./components/Square"

function App() {
  const [colorsArray, setColorsArray] = useState(["black", "white", "white", "white"])

  function smallTime() {
    setColorsArray(prevColorArray => prevColorArray.map(color => color === "black" ? "white" : "black"))
  }

  function partyDj() {
    setColorsArray(prevColorArray => {
      let newColorArr = ["purple", "purple", prevColorArray[2], prevColorArray[3]]
      return newColorArr
    })
  }

  function bottomLeft() {
    setColorsArray(prevColorArray => {
      let newColorArr = [prevColorArray[0], prevColorArray[1], "blue", prevColorArray[3]]
      return newColorArr 
    })
  }

  function bottomRight() {
    setColorsArray(prevColorArray => {
      let newColorArr = [prevColorArray[0], prevColorArray[1], prevColorArray[2], "blue"]
      return newColorArr
    })
  }
 
  const squares = colorsArray.map(color => <Square color={color}/>)

  return (
    <div className="App">
      {squares}
      <button onClick={smallTime}>Small Time DJ</button>
      <button onClick={partyDj}>Party DJ</button>
      <button onClick={bottomLeft}>Bottom Left</button>
      <button onClick={bottomRight}>Bottom Right</button>
    </div>
  )
}

export default App
