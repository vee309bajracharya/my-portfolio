import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import VantaBg from './components/VantaBg'
import PageNotFound from './pages/PageNotFound'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <VantaBg>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            {/* unknown route */}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <ToastContainer/>

        </VantaBg>
      </BrowserRouter>

    </>
  )
}

export default App