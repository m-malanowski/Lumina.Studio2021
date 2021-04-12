import React from "react"
import Links from "../constants/links"

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar  ${isOpen? "show-sidebar" : ""}`}>
        <div className="side-container container-fluid"  onClick={toggleSideBar}>
          <Links styleClass="sidebar-links"/>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar