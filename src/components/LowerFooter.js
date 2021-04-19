import React from "react"

import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="footer-bottom">
          <h3 className="motto">Studio for <br/> ambitious <br/> brands</h3>
          <ul>
            <h4>Elbląg</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Królewiecka 21B</li>
            <li>82-300 Elbląg</li>
            <br/>
            <li className="show-on-map link link--kale">Zobacz na mapie </li>

          </ul>

          <ul>
            <h4>Wrocław</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Buforowa 101A</li>
            <li>52-131 Wrocław</li>
            <br/>
            <li className="show-on-map link link--kale">Zobacz na mapie </li>
          </ul>

          <div>
            <h4>Śledź nas</h4>
            <SocialLinks/>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
