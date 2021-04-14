import React from "react"
import Footer from "../components/Footer"
import SocialLinks from "../constants/socialLinks"
import ArticlesSlider from "../components/ArticlesSlider"
import LowerFooter from "../components/LowerFooter"

const contact = () => {
  return (
    <>
      <main className="page-content-wrapper contact-page container-fluid">
        <div className="page-content">
          <div className="pc-first-element">
            <h2 className="page-name">Kontakt</h2>
          </div>
          <div className="pc-second-element">
            <h5>Kontakt</h5>
            <span>Zadzwoń <br/> +(48) 000 000 000</span>
            <h5 className="mt-3"><a href="mailto:hello@lumina.studio" className="link link--kale">hello@lumina.studio</a></h5>
            <button type="button" className="mt-3 button outline footer-button">Wyślij wiadomość</button>
          </div>
        </div>
      </main>
      <LowerFooter/>

    </>
  )
}

export default contact
