import React from 'react';
import'./nav.css';
import {useState} from 'react';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul>...</ul>
    </nav>
  )
}

export default Navbar