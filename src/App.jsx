import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="about" element={<Header />} />
      <Route path="media" element={<Header />} />
      <Route path="projects" element={<Header />} />
      <Route path="contact" element={<Header />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
