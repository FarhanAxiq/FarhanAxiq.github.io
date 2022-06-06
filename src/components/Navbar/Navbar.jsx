import React from 'react';
import'./nav.css';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import {useState} from 'react';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false);
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? ( <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} /> ) 
        : (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}></ul>
    </nav>
  )
}

export default Navbar