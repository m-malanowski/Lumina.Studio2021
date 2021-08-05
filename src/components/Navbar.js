import React from "react"
import PageLinks from "../constants/links"
import { motion } from "framer-motion"
import contrast from "../assets/icons/contrast.svg"
import logo from "../assets/imgs/lumina-logo.png"

const Navbar = ({ toggleSideBar, isOpen }) => {
  return (
    <nav className="navbar container-fluid" data-scroll data-scroll-sticky data-scroll-target="#elo">
      <div className="nav-header">
        <a href="/" className={`navbar-logo ${isOpen? "closed" : "open"}`}>
          <img src={logo} width={200} alt="Lumina Studio - Agencja Interaktywna" />
        </a>
        {/*<h3>*/}
        {/*  <a href="/" className={`navbar-logo ${isOpen? "closed" : "open"}`}>LUMINA - STUDIO</a>*/}
        {/*</h3>*/}
      </div>
      {/*<PageLinks styleClass="nav-links"/>*/}
      <div className="navbar-right">
        {/*<div className="btn-wrapper">*/}
        {/*  <button type="button" className={`button outline ${isOpen? "closed" : "open"}`}>Wyślij brief</button>*/}
        {/*</div>*/}
        {/*<img src={contrast} width="38"  alt="Zmien kontrast" />*/}
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
