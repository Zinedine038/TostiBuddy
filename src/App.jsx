import { useState } from 'react'
import './App.css'
import { ThemeSelector } from './components/ThemeSelector.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Tosti } from './pages/Tosti.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Storage } from './pages/Storage.jsx'
import { Result } from './pages/Result.jsx'
import { FourOhFour } from './pages/FourOhFour.jsx'

function RoutesWrapper() {
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <PageWrapper>
            <Home />
          </PageWrapper>
          } />
        <Route path='/about' element={
          <PageWrapper>
            <About />
          </PageWrapper>
          } />
        <Route path='/tosti' element={
          <PageWrapper>
            <Tosti />
          </PageWrapper>
          } />
        <Route path='/storage' element={
          <PageWrapper>
            <Storage />
          </PageWrapper>
          } />
        <Route path='/result' element={
          <PageWrapper>
            <Result />
          </PageWrapper>
          } />
        <Route path='*' element={
          <PageWrapper>
              <FourOhFour/>
          </PageWrapper>
          } />
      </Routes>
    </AnimatePresence>
    </>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <RoutesWrapper />
    </>
  )
}

export default App
