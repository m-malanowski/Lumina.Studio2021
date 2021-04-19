import React from "react"
import globe from "../assets/icons/globe.svg"
import star from "../assets/icons/star.svg"
import starSm from "../assets/icons/starSmall.svg"
import arrow from "../assets/icons/right-arrow.svg"

import { graphql } from "gatsby"
import Footer from "../components/Footer"
import MainScene2 from "../components/MainScene2"
import SocialLinks from "../constants/socialLinks"
// import Layout from "../components/Layout"
// import Hero from "../components/Hero"
// import Services from "../components/Services"
// import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
export default () => {
  return (
    <>
      <main className="index-page container-fluid">
          {/*<MainScene2/>*/}
        <section>
          <div className="main-container">
            <h2>Design creates <em>culture</em>. Culture shapes <em>values</em>. <br/> Values determine <br/>  <em>the future</em></h2>
          </div>
          <div class="bg-circles">
            <div className="blurry-circle bc-1"></div>
            <div className="blurry-circle bc-2"></div>
            <div className="blurry-circle bc-3"></div>
          </div>
        </section>

        <section className="section-worldwide">
          <div className="worldwide-container">
            <img className="star" width="550" src={star} alt="Agencja interaktywna lumina studio" />
            <h2>Lumina - studio</h2>
            <h3>worldwide</h3>
            <img className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
          </div>
        </section>

        <section className="section-skew-marquee">

        </section>

        <section className="section-main-services">
          <h5>Usługi</h5>
          <div className="main-services-container">
            <ul>
              <li><img src={starSm} width="100" alt="Agencja interaktywna" /></li>
              <li><h4>Web development</h4></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>
            </ul>

            <ul>
              <li><img src={starSm} width="100" alt="Agencja interaktywna" /></li>
              <li><h4 className="break">Branding</h4></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
            </ul>

            <ul>
              <li><img src={starSm} width="100" alt="Agencja interaktywna" /></li>
              <li><h4>Visual identity</h4></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
            </ul>

            <ul>
              <li><img src={starSm} width="100" alt="Agencja interaktywna" /></li>
              <li><h4>Social media</h4></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
              <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="30" src={arrow} alt="" /></a></li>
            </ul>

          </div>
        </section>

        <section className="section-marquee">
          <div className="marquee-container">
            <div><span>Together | Together | Together | Together | </span></div>
            <div><span>Work | Work | Work | Work | Work | Work | Work | </span></div>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}
// ...GatsbyImageSharpFluid
