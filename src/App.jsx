import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
import VantaBg from './components/VantaBg'
import PageNotFound from './pages/PageNotFound'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PulseLoader from './components/PulseLoader';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <VantaBg>
          <Suspense fallback={<PulseLoader />}>
            <AnimatePresence mode='wait'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                {/* unknown route */}
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
          <ToastContainer />

        </VantaBg>
      </BrowserRouter>

    </>
  )
}

export default App