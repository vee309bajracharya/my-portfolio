import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import VantaBg from './components/VantaBg'


const App = () => {
  return (
    <>
      <BrowserRouter basename='/my-portfolio'>
        <VantaBg>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>


        </VantaBg>
      </BrowserRouter>

    </>
  )
}

export default App