import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
      <header>
        <nav className="nav-bar">
            <Link to="/" id="logo" style={{ textDecoration: 'none' }}>
                <img src="https://i.imgur.com/Tbe2Klk.png" alt="logo"/>
                
            </Link>
            <NavLink to="/favorites" className="nav-links">Favorites</NavLink>
            <NavLink to="/profile" className="nav-links">Profile</NavLink>
        </nav>
  </header>
  )
}

export default Navbar