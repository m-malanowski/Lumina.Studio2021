import star from "../assets/icons/star.svg"
import globe from "../assets/icons/globe.svg"
import React from "react"
const Worldwide = () => {
  return (
    <section className="section-worldwide">
      {/*<div className="bg-circles-section">*/}
      {/*  <div className="blurry-circle bc-4"/>*/}
      {/*</div>*/}
      <div className="worldwide-container">
        <img className="star" width="550" src={star} alt="Agencja interaktywna lumina studio" />
        <h2 className=" w-100">Lumina - studio</h2>
        <h3>worldwide</h3>
        <img className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
      </div>
    </section>
  )
}

export default Worldwide


