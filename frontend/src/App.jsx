import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/login" element={<Login />} /> */}

      </Routes>
    /*</Router>*/
  )
}

export default App