import React from "react"
import SocialLinks from "../constants/socialLinks"
import arrow from "../assets/icons/right-arrow.svg"
import orbitFooter from "../assets/icons/orbitFooter.png"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
const Footer = () => {
  return (
    <>

      <footer className="container-fluid">
        <div className="footer-top">
          <div>
            {/*<h5><em>Nawiąż</em> kontakt</h5>*/}
            <TriggerText threshold=".5" delay=".5">
              <span className="subsec-title">Zadzwoń <br/>   +(48) 123 456 789    </span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5 className="mt-3"><a href="mailto:hello@lumina.studio">hello@lumina.studio</a></h5>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <button type="button" className="mt-5 button outline footer-button">Wyślij wiadomość</button>
            </TriggerText>

            <TriggerImg>
              <img className="orbit" width="400" src={orbitFooter} alt="" />
            </TriggerImg>
          </div>
          <div className="footer-top-right">
            <TriggerText threshold=".5" delay=".5">
              <h5 className="">05.</h5>
            </TriggerText>
          </div>
        </div>

        <div className="footer-bottom">
          <TriggerText threshold=".5" delay=".5">
            <h3 className="motto">Studio for <br/> ambitious <br/> <em>brands</em> </h3>
          </TriggerText>
          <TriggerText threshold=".5" delay=".7">
            <ul>
              <h4>Wrocław</h4>
              {/*<li>Wrocław</li>*/}
              <li>
                <a href="" className="social-link link link--kale">
                  hello@lumina.studio
                </a>
              </li>
              <li>+(48) 000 000 000 </li>
              <li>Buforowa 101A</li>
              <li>52-131 Wrocław</li>
              {/*<li className="learn-more sw-right show-on-map">*/}
              {/*  <a href="#" className="mr-3">Zobacz na mapie</a>*/}
              {/*  <img width="23" src={arrow} alt="" />*/}
              {/*</li>*/}
            </ul>
          </TriggerText>
          <TriggerText threshold=".5" delay=".9">
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
          </TriggerText>
          <TriggerText threshold=".5" delay="1.1">

          <h4>Śledź nas</h4>
            {/*<li>Śledź nas</li>*/}
            <SocialLinks/>
          </TriggerText>

        </div>
      </footer>
    </>
  )
}

export default Footer
