import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
       <Nav />
      </BrowserRouter>
      <Home />
      <Footer />
      </div>
    </>
  )
}

export default App
