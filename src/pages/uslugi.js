import React from "react"
import ServicesSlider from "../components/ServicesSlider"
import arrowDown from "../assets/icons/arrowDown.svg"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import LowerFooter from "../components/LowerFooter"
import orbitAbout from "../assets/icons/orbitAbout.png"
import handDown from "../assets/icons/handDown.svg"
// ...GatsbyImageSharpFluid
const Services = () => {
  return (
    <>
      <main className="services-page container-fluid">
        <div className="page-content">
          <div className="subsec-header">
            <h5 className="">01.</h5>
            <h2 className="subsec-title">Services</h2>
          </div>

          <div className="subsec-body">
            {/*<div className="ss-body-first"/>*/}
            <div className="ss-body-second">
              <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. Slow-carb tofu wolf, <em> ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>
              <span>Things we made</span>
            </div>
          </div>
          <div className="scroll-down-pages">
            <img width="100" src={arrowDown} alt="" />
            {/*<img width="150" src={handDown} alt="" />*/}
          </div>
        </div>

        <section className="services-page-slider break-out">
          <ServicesSlider/>
        </section>

        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>
            <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>
          </div>
        </section>


      </main>
      <LowerFooter/>
    </>
)
}

export default Services
