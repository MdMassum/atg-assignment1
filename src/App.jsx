import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
