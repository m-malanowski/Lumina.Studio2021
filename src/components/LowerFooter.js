import React from "react"
import SocialLinks from "../constants/socialLinks"
// import arrow from "../assets/icons/right-arrow.svg"
// import orbitFooter from "../assets/icons/orbitFooter.png"
import TriggerText from "./TriggerText"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-bottom">
          <TriggerText threshold="0" delay=".5">
            <h3 className="motto">Studio for <br/> ambitious <br/> <em>brands</em> </h3>
          </TriggerText>
          <TriggerText threshold="0" delay=".7">
            <ul>
              <li><h4>Wrocław</h4></li>
              <li>
                <a href="mailto:hello@lumina.studio" className="social-link link link--kale">
                  hello@lumina.studio
                </a>
              </li>
              <li>+(48) 606 304 224 </li>
              <li>Buforowa 101A</li>
              <li>52-131 Wrocław</li>
            </ul>
          </TriggerText>
          <TriggerText threshold="0" delay=".9">
            <ul>
              <li><h4>Elbląg</h4></li>
              <li>
                <a href="mailto:info@lumina.studio" className="social-link link link--kale">
                  info@lumina.studio
                </a>
              </li>
              <li> +(48) 506 870 672 </li>
              <li>Królewiecka 21B</li>
              <li>82-300 Elbląg</li>
            </ul>
          </TriggerText>
          <TriggerText threshold="0" delay="1.1">
            <h4 className="follow-us">Śledź nas</h4>
            <SocialLinks/>
          </TriggerText>
        </div>
      </footer>
    </>
  )
}

export default Footer
