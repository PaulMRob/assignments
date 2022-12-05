import React, {useState, useEffect} from 'react'
import Badge from "./components/Badge"

function App() {
  
  const initialBadgeData = {
    // firstName: "",
    // lastName: "",
    // email: "",
    // phone: "",
    // birthPlace: "",
    // favoriteFood: "",
    // about: ""
  }

  const [bool, setBool] = useState(false)

  const [badgeData, setBadgeData] = useState(
    initialBadgeData
  )

  useEffect(() => { 
    console.log(badgeData)
    if (Object.keys(badgeData).length > 3) {
      setBool(true)
    } else {
      setBool(false)
    }}, [badgeData])

  const [badgesArray, setBadgesArray] = useState([])

  function handleChange(event) {
    const {name, value} = event.target
    setBadgeData(prevBadgeData => {
      return {...prevBadgeData, [name]: value}
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setBadgesArray(prevBadgeArray => {
      return [...prevBadgeArray, badgeData]
    })
    setBadgeData(initialBadgeData)
  }

  const badgesElement = badgesArray.map(data => <Badge data={data}/>)

  return (
    <div className="App">
      <form 
        onSubmit={handleSubmit}
        className="container"
      >
        
          <input 
            type="text" 
            placeholder="First Name"
            name="firstName"
            value={badgeData.firstName} 
            onChange={handleChange}
            pattern="[A-Za-z]{3,}"
            required
          />
          <input 
            type="text" 
            placeholder="Last Name"
            name="lastName"
            value={badgeData.lastName} 
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            placeholder="Email"
            name="email"
            value={badgeData.email} 
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            placeholder="Place of Birth"
            name="birthPlace" 
            value={badgeData.birthPlace}
            onChange={handleChange}
            required
          />
          <input 
            type="tel"
            placeholder="Phone"
            name="phone"
            value={badgeData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <input 
            type="text" 
            placeholder="Favorite Food"
            name="favoriteFood"
            value={badgeData.favoriteFood} 
            onChange={handleChange}
            required
          />
          <textarea 
            className="about-yourself"
            placeholder="Tell us about yourself"
            name="about"
            type={badgeData.about}
            onChange={handleChange}
            required
          />
        
        {bool ? <button className="button green" type="submit" >Submit</button> : <button className="button gray" type="submit" >Submit</button>}
      </form>
      {badgesElement}
    </div>
  )
}

export default App
