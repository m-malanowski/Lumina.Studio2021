import React from "react"
import SocialLinks from "../constants/socialLinks"
import arrow from "../assets/icons/right-arrow.svg"
import orbitFooter from "../assets/icons/orbitFooter.png"
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="footer-top">
          <div>
            {/*<h5><em>Nawiąż</em> kontakt</h5>*/}
            <span className="subsec-title">Zadzwoń <br/>   +(48) 123 456 789    </span>
            <h5 className="mt-3"><a href="mailto:hello@lumina.studio">hello@lumina.studio</a></h5>
            <button type="button" className="mt-4 button outline footer-button">Wyślij wiadomość</button>
            <img className="orbit" width="400" src={orbitFooter} alt="" />
          </div>
          <div className="footer-top-right">
            <h5 className="">05.</h5>
          </div>
        </div>

        <div className="footer-bottom">
          <h3 className="motto">Studio for <br/> ambitious <br/> brands </h3>
          <ul>
            <h4>Wrocław</h4>
            {/*<li>Wrocław</li>*/}
            <li>hello@lumina.studio</li>
            <li>+(48) 000 000 000 </li>
            <li>Buforowa 101A</li>
            <li>52-131 Wrocław</li>
            {/*<li className="learn-more sw-right show-on-map">*/}
            {/*  <a href="#" className="mr-3">Zobacz na mapie</a>*/}
            {/*  <img width="23" src={arrow} alt="" />*/}
            {/*</li>*/}
          </ul>
          <ul>
            <h4>Elbląg</h4>
            {/*<li>Elbląg</li>*/}
            <li>
              <a href="" className="social-link link link--kale">
                hello@lumina.studio
              </a>
            </li>
            <li> +(48) 506 870 672 </li>
            <li>Królewiecka 21B</li>
            <li>82-300 Elbląg</li>
            {/*<li className="learn-more sw-right show-on-map">*/}
            {/*  <a href="#" className="mr-3">Zobacz na mapie</a>*/}
            {/*  <img width="23" src={arrow} alt="" />*/}
            {/*</li>*/}
          </ul>

          <div>
            <h4>Śledź nas</h4>
            {/*<li>Śledź nas</li>*/}
            <SocialLinks/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
