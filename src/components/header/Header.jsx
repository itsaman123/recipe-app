import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from './logo.svg'
import { useState } from 'react'
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const dropdownRef = useRef(null);



  const handleHamburgerMenu = () => {
    setHamburgerIsOpen(!hamburgerIsOpen)
  }



  return (
    <header className='header'>
      <div className="header-wrapper container">
        <Link className='logo' to={"/"}><img src={logo} /></Link>
        <span onClick={handleHamburgerMenu} className="hamburger">
          <FaBars />
        </span>

        <nav className={`nav-links${hamburgerIsOpen ? " hamburger-is-active" : ""}`}>
          <span onClick={handleHamburgerMenu} className="close">
            <CgClose />
          </span>
          <li><Link to={"/"}>Home</Link></li>
        </nav>
      </div>

    </header >
  )
}

export default Header