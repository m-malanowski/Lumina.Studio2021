import React from "react"

import SocialLinks from "../constants/socialLinks"
import arrow from "../assets/icons/right-arrow.svg"
import orbitFooter from "../assets/icons/orbitFooter.png"
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="footer-bottom">
          <h3 className="motto">Studio for <br/> ambitious <br/> <em>brands</em></h3>

          <ul>
            <h4>Wrocław</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Buforowa 101A</li>
            <li>52-131 Wrocław</li>
            {/*<li className="learn-more sw-right show-on-map">*/}
            {/*  <a href="#" className="mr-3">Sprawdź więcej</a>*/}
            {/*  <img width="23" src={arrow} alt="" />*/}
            {/*</li>*/}
          </ul>

          <ul>
            <h4>Elbląg</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Królewiecka 21B</li>
            <li>82-300 Elbląg</li>
            {/*<li className="learn-more sw-right show-on-map">*/}
            {/*  <a href="#" className="mr-3">Sprawdź więcej</a>*/}
            {/*  <img width="23" src={arrow} alt="" />*/}
            {/*</li>*/}

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
