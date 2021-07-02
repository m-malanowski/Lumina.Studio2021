import React from "react"
import Footer from "../components/Footer"
import orbitSingleProject from "../assets/icons/orbitSingleProject.png"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import LowerFooter from "../components/LowerFooter"
import malva from "../assets/imgs/malva.png"
import malva2 from "../assets/imgs/malva2.png"

import arrowDown from "../assets/icons/arrowDown.svg"
import ServicesSlider from "../components/ServicesSlider"
import arrow from "../assets/icons/right-arrow.svg"
import orbitMain from "../assets/icons/orbitMainView.png"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return (
    <>
      <main className="single-project-page container-fluid">
        <div className="page-content">
          <img className="orbit" width="700" src={orbitSingleProject} alt="" />

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
            <img className="" width="900" src={malva} alt="" />

            <div className="subsec-header">
              <h5 className="">02.</h5>
              <h2 className="subsec-title">About</h2>
            </div>
            <img className="" width="900" src={malva2} alt="" />
          </div>

          <section className="section-more-projects">
            <div className="subsec-header">
              <h5 className="">03.</h5>
              <h2 className="subsec-title">Więcej <br/> projektów</h2>
            </div>

            <div className="more-projects-single mt-5">
              <div className="more-left">
                <span>2019</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign, Banding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Carra</h5>
              </div>
              <p className="more-right"> Webdesign, Strategy </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Radca prawny tomczak</h5>
              </div>
              <p className="more-right"> Webdesign, Branding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

            {/*<div className="learn-more">*/}
            {/*  <a href="/portfolio">*/}
            {/*    <span>Sprawdź</span>*/}
            {/*    <span/>*/}
            {/*    <span>Więcej</span>*/}
            {/*  </a>*/}
            {/*</div>*/}

          </section>
        </div>


        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>


      </main>
    </>
  )
}

export default Blog
