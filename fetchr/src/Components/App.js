import React from 'react'
import HomePage from './HomePage'
import Favorites from './Favorites'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (

      <Router>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          {/* <Link to="/about">About</Link> */}
        </nav>

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>

  )
}

export default App