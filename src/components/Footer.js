import React from "react"
import SocialLinks from "../constants/socialLinks"
import arrow from "../assets/icons/right-arrow.svg"
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <h5>Kontakt</h5>
        <span className="subsec-title">Zadzwoń <br/>   +(48) 123 456 789    </span>
        <h5 className="mt-3"><a href="mailto:hello@lumina.studio" >hello@lumina.studio</a></h5>
        <button type="button" className="mt-3 button outline footer-button">Wyślij wiadomość</button>
        <div className="footer-bottom">
          <h3 className="motto">Studio for <br/> ambitious <br/> brands</h3>
          <ul>
            <h4>Elbląg</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Królewiecka 21B</li>
            <li>82-300 Elbląg</li>
            <br/>
            {/*<li className="show-on-map link link--kale">Zobacz na mapie</li>*/}
            <li className="footer-arrow"><a href=""><p className="show-on-map">Zobacz na mapie</p> <img height="20" src={arrow} alt="" /></a></li>
          </ul>

          <ul>
            <h4>Wrocław</h4>
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Buforowa 101A</li>
            <li>52-131 Wrocław</li>
            <br/>
            {/*<li className="show-on-map link link--kale">Zobacz na mapie</li>*/}
            <li className="footer-arrow"><a href=""><p className="show-on-map">Zobacz na mapie</p> <img height="20" src={arrow} alt="" /></a></li>

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
