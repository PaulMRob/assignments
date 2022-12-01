import { useState } from 'react'


function App() {
  const [inputText, setInputText] = useState("")
  const [namesArray, setNamesArray] = useState(["Paul", "Layla"])

  function inputChangeHandler(event) {
    setInputText(event.target.value)
  }

  function addName(event) {
    event.preventDefault()
    setNamesArray(prevNames => {
      return [...prevNames, inputText]
    })
  }

  const namesElement = namesArray.map(name => <li key={name}>{name}</li>)

  return (
    <div className="App">
      <form >
        <input 
          type="text"
          value={inputText}
          onChange={inputChangeHandler}
        />
      </form>
      {inputText && <h1>{inputText}</h1>}
      <button onClick={addName}>Submit</button>
      <ol>
        {namesElement}
      </ol>
    </div>
  )
}

export default App
