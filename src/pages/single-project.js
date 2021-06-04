import React from "react"
import Footer from "../components/Footer"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import LowerFooter from "../components/LowerFooter"
import malva from "../assets/imgs/malva.png"
import malva2 from "../assets/imgs/malva2.png"

import arrowDown from "../assets/icons/arrowDown.svg"
import ServicesSlider from "../components/ServicesSlider"
import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return (
    <>
      <main className="single-project-page container-fluid">
        <div className="page-content">

          <div className="subsec-header">
            {/*<h5 className="">01.</h5>*/}
            <h2 className="subsec-title">Radca Tomczak</h2>
          </div>

          <div className="subsec-body">
            <div>
              <p>Webdesign, branding</p>
            </div>
            <div className="subsec-desc">
              <p>Butcher keytar truffaut, artisan pitchfork meditation activated charcoal hexagon mumblecore try-hard palo santo quinoa brunch. Shabby chic pinterest marfa letterpress fanny pack truffaut, four loko scenester hexagon raw denim kinfolk gentrify. Tote bag flexitarian roof party shoreditch, sriracha offal direct trade listicle echo park pop-up enamel pin artisan mlkshk glossier. </p>
            </div>
            <div>
              <span>02/2021</span>
            </div>
          </div>

          <div className="single-project-body">
            <div className="subsec-header">
              <h5 className="">01.</h5>
              <h2 className="subsec-title">Główny widok</h2>
            </div>
            <img className="orbit" width="900" src={malva} alt="" />

            <div className="subsec-header">
              <h5 className="">02.</h5>
              <h2 className="subsec-title">About</h2>
            </div>
            <img className="orbit" width="900" src={malva2} alt="" />
          </div>

          <div className="subsec-header">
            <h5 className="">03.</h5>
            <h2 className="subsec-title">Więcej <br/> projektów</h2>
          </div>
        </div>

        {/*<section className="section-marquee break-out">*/}
        {/*  <div className="marquee-container">*/}
        {/*    <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>*/}
        {/*    <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>*/}
        {/*    <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
      {/*<LowerFooter />*/}
    </>
  )
}

export default Blog
