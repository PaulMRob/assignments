import { useState } from 'react'
import './App.css'
import Callout from "./Callout"

//question 2) how to get gradient box to show up? css?

function App() {
  
  const [gradient, setGradient] = useState({
    color1: "#000000",
    color2: "#FFFFFF",
    angle: "0"
  })

  let colorCode = `linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2})
  -moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2}); 
  -webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2})`

  function changeHandler(e) {
    console.log(e)
    const {name, value} = e.target
    
    setGradient(prevGradient => {
      return {
        ...prevGradient,
        [name]: value
      }
    })
    console.log(gradient)
  }

  return (
    <div className="App">
      <h1>CSS Gradient Code Generator</h1>
      <Callout>
        <div className='gradient-box'>
          <div className='color-box' style={{ background: `linear-gradient(${gradient.angle}deg, ${gradient.color1} ,${gradient.color2})` }}></div>
          <textarea readOnly value={colorCode} cols="60" rows="5"></textarea>
        </div>
      </Callout>
      <Callout>
        <h2>OPTIONS</h2>
        <form>
          <h4>Color 1: </h4>
          <h4>{gradient.color1}</h4>
          <input 
            className='color-input'
            type="color" 
            name='color1'
            value={gradient.color1}
            onChange={changeHandler}
          />
          
          <h4>Color 2: </h4>
          <h4>{gradient.color2}</h4>
          <input 
            className='color-input'
            type="color" 
            name='color2'
            value={gradient.color2}
            onChange={changeHandler}
          />

          <h4>Angle:</h4>
          <input 
            className='angle-input'
            type="number" 
            min="0" 
            max="180"
            name="angle"
            value={gradient.angle}
            onChange={changeHandler}  
          />
        </form>
      </Callout>
    </div>
  )
}

export default App


  