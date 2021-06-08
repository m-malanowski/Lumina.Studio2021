import React from "react"
import Footer from "../components/Footer"
import SocialLinks from "../constants/socialLinks"
import ArticlesSlider from "../components/ArticlesSlider"
import LowerFooter from "../components/LowerFooter"
import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
import smallStar from "../assets/icons/smallStar.svg"
import arrow from "../assets/icons/right-arrow.svg"
import Worldwide from "../components/Worldwide"

const contact = () => {
  return (
    <>
      <main className="contact-page container-fluid">
          <section className="section-contact-container">
            <div className="main-container">
              <div>
                <h5 className="">01.</h5>
                <h2 className="subsec-title">
                  <span>Napis do nas</span>
                  <span>hello@</span>
                  <span>lumina.studio</span>
                </h2>
              </div>
              {/*<img className="orbit" width="900" src={orbitAboutPage} alt="" />*/}
              {/*<img className="small-star" width="50" src={smallStar} alt="" />*/}
            </div>
            <Worldwide/>

            <div className="contact-details">
              <ul>
                <h4>Social</h4>
                <li><a href="" className="link link--kale">Behance</a></li>
                <li><a href="" className="link link--kale">Dribbble</a></li>
                <li><a href="" className="link link--kale">Instagram</a></li>
                <li><a href="" className="link link--kale">Facebook</a></li>
                <li><a href="" className="link link--kale">Linkedin</a></li>
              </ul>

              <ul>
                <h4>Adres</h4>
                <li><a href="" className="link link--kale">Buforowa 101A, Wrocław</a></li>
                <li><a href="" className="link link--kale">Królewiecka 21B, Elbląg</a></li>
              </ul>


              <ul>
                <h4>Email</h4>
                <li><a href="" className="link link--kale">hello@lumina.studio</a></li>
              </ul>

              <ul>
                <h4>Phone</h4>
                <li> +(48) 506 870 672 </li>
              </ul>
            </div>

          </section>
      </main>
      {/*<LowerFooter/>*/}
    </>
  )
}

export default contact
