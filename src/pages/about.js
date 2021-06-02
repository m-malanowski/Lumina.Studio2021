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
import orbitMain from "../assets/icons/orbitMain.png"
// ...GatsbyImageSharpFluid
const About = () => {
  return (
    <>
      <main className="about-page container-fluid">

        <section className="section-about-container">
          <div className="main-container">
            <h2 className="subsec-title">
              <span>wayfarers glossier</span>
              <span>knausgaard</span>
              <span>Shoreditch</span>
            </h2>
            <p>Adaptogen cardigan pop-up mumblecore, wolf scenester jianbing small batch chartreuse typewriter edison bulb pug etsy</p>
            <img className="orbit" width="900" src={orbitMain} alt="" />
          </div>
          <div className="scroll-down">
            {/*<img width="100" src={arrowDown} alt="" />*/}
            {/*<img width="100" src={arrowDown} alt="" />*/}
            <img width="100" src={arrowDown} alt="" />
            {/*<img width="150" src={handDown} alt="" />*/}
          </div>
        </section>

        <div className="page-content">
          <div className="subsec-body">
            {/*<div className="ss-body-first"/>*/}
            <div className="ss-body-second">
              <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. Slow-carb tofu wolf, <em> ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>
              <span>We are lumina</span>
            </div>
          </div>
          <div className="scroll-down-pages">
            <img width="100" src={arrowDown} alt="" />
            {/*<img width="150" src={handDown} alt="" />*/}
          </div>
        </div>


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

export default About
