import { useState } from 'react'

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import BlogList from "./components/BlogList"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
  const blogPost = data.map(item =>{
    return (
      <BlogPost
        key={item.id}
        {...item}
      />  
    )
  })
  
  return (
    <div className="App">
      <Header />
        
      <BlogList />
      <hr />
      <Footer />
    </div>
  )
}

export default App
