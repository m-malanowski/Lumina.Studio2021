import React from "react"
import PageLinks from "../constants/links"
import { motion } from "framer-motion"

const Navbar = ({ toggleSideBar, isOpen }) => {
  return (
    <nav className="navbar container-fluid">
      <div className="nav-header">
        <h3>
          <a href="/" className="navbar-logo">LUMINA - STUDIO</a>
        </h3>
      </div>
      {/*<PageLinks styleClass="nav-links"/>*/}
      <div className="navbar-right">
        <div className="btn-wrapper">
          <button type="button" className="button outline">Rozpocznij projekt</button>
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSideBar} aria-label="menu-button">
          <div className={`nav-icon ${isOpen? "transformed" : ""}`}>
            <div/>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
