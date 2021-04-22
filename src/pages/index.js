import React from "react"
import globe from "../assets/icons/globe.svg"
import star from "../assets/icons/star.svg"
import starSm from "../assets/icons/starSmall.svg"
import arrow from "../assets/icons/right-arrow.svg"
import lightSingle from "../assets/icons/light-single.svg"
import clover from "../assets/icons/clover.svg"
import starThin from "../assets/icons/starThin.svg"


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
        <section className="section-main-container">
          <div className="main-container">
            {/*<h2>Design creates <em>culture</em>. Culture shapes <em>values</em>. <br/> Values determine <br/>  <em>the future</em></h2>*/}
            <div className="tag-container">
              <h2>Individuals <br/> creates <br/> <em>the future</em></h2>
              {/*<h2>Design creates <em>culture</em>. <br/> Culture shapes values. <br/> Values determine   <em>the future</em></h2>*/}
              {/*<h2>DIGITAL <br/> CREATIVE <br/> <span>AGENCY</span></h2>*/}
              {/*<h3>Innovative  <br/> solusions <br/> for your <br/> <em>brand</em></h3>*/}

              {/*<h2> Chicha  vexil lologist fashion axe palo santo  craft beer </h2>*/}
              {/*<h2>fashion <br/> axe  palo <br/> santo</h2>*/}
              {/*<h3>Innovative  <br/> solusions <br/> for your <br/> <em>brand</em></h3>*/}

            </div>

            <div className="brand">
              <a href="#" target="_blank">
                <img
                src={lightSingle} width="55" className="image-circle"
                alt="Agencja interaktywna" />
              </a>
              <div className="brand-label">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 300 300"
                     aria-hidden="true">
                  <defs>
                    <path id="a" d="M90 150a60 60 0 01120 0 60 60 0 01-120 0" />
                  </defs>
                  <use xlinkHref="#a" fill="none" />
                  <text>
                    <textPath xlinkHref="#a"> Scroll down  &bull; Scroll down &bull; </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/*<div className="scroll-down">*/}
            {/*  <img src={lightSingle} width="50" alt="" />*/}
            {/*</div>*/}

            <div className="main-container-marquee break-out">
              <div><span className="marquee-span"> <span>Branding</span> <span>Web design</span> <span>Visual identity</span>  <span>Social media</span>  <span>Welcome</span><span>Elo Elo 3-2-0</span>  <span>Cześć</span><span>Ciao!</span><span>Benvenuto</span><span>Guten Morgen</span><span>Bon dia</span><span>Bonjour</span></span></div>
            </div>
          </div>
          {/*<div className="bg-circles-main">*/}
          {/*  <div className="blurry-circle bc-1"/>*/}
          {/*  /!*<div className="blurry-circle bc-2"></div>*!/*/}
          {/*  <div className="blurry-circle bc-3"/>*/}
          {/*</div>*/}
        </section>

        <section className="section-skew-marquee break-out">
          <div className="marquee-container">
            <div><span className="marquee-span">Branding | Branding | Branding | Branding | </span></div>
            <div><span className="marquee-span">Webdesign | Webdesign | Webdesign | Webdesign |  </span></div>
            <div><span className="marquee-span">Visual identity | Visual identity | Visual identity | </span></div>
          </div>
        </section>



        {/*<section>*/}
        {/*  <div className="scroll-down">*/}
        {/*    <img src={lightSingle} width="250" alt="" />*/}
        {/*    <img src={starThin} width="450" alt="" />*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="section-main-works break-out">*/}
        {/*  <div className="main-works-container">*/}
        {/*    <div className="bg-circles-section">*/}
        {/*      <div className="blurry-circle bc-4"/>*/}
        {/*    </div>*/}
        {/*    <p className="pc-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo ipsum iusto neque nisi nobis repellendus veniam. Aspernatur beatae enim iste nihil odio officia omnis quasi quisquam, repudiandae, saepe voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur at aut deserunt enim error eum id in modi nostrum numquam perspiciatis recusandae.</p>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="section-main-about">*/}
        {/*  <div className="main-about-container">*/}
        {/*    <p className="pc-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo ipsum iusto neque nisi nobis repellendus veniam. Aspernatur beatae enim iste nihil odio officia omnis quasi quisquam, repudiandae, saepe voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur at aut deserunt enim error eum id in modi nostrum numquam perspiciatis recusandae.</p>*/}
        {/*    /!*<h5>O Lumina</h5>*!/*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="section-worldwide">*/}
        {/*  <div className="worldwide-container">*/}
        {/*    <img className="star" width="550" src={star} alt="Agencja interaktywna lumina studio" />*/}
        {/*    <h2>Lumina - studio</h2>*/}
        {/*    <h3>worldwide</h3>*/}
        {/*    <img className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="section-main-works ">
          <div className="main-works-container">
            <h5>Works</h5>
            <h2 className="subsec-title">Our latest projects</h2>
            <div className="main-works">

              <div className="single-work-container break-out">
                <div className="single-work container-fluid">
                  {/*<hr/>*/}
                  <div class="sw-left"><h3>Kogi mustache</h3></div>
                  <div class="sw-right">
                    <p> Visual identity, web design, branding </p>
                    <img width="40" src={arrow} alt="" />
                  </div>
                </div>
              </div>

              <div className="single-work-container break-out">
                <div className="single-work container-fluid">
                  {/*<hr/>*/}
                  <div class="sw-left"><h3> Distillery glossier </h3></div>
                  <div class="sw-right">
                    <p> Visual identity, web design, branding </p>
                    <img width="40" src={arrow} alt="" />
                  </div>
                </div>
              </div>

              <div className="single-work-container break-out">
                <div className="single-work container-fluid">
                  {/*<hr/>*/}
                  <div class="sw-left"><h3>Copper mug</h3></div>
                  <div class="sw-right">
                    <p> Visual identity, web design, branding </p>
                    <img width="40" src={arrow} alt="" />
                  </div>
                </div>
              </div>

              <div className="single-work-container break-out">
                <div className="single-work container-fluid">
                  {/*<hr/>*/}
                  <div class="sw-left"><h3>Ramps vape bushwick</h3></div>
                  <div class="sw-right">
                    <p> Visual identity, web design, branding </p>
                    <img width="40" src={arrow} alt="" />
                  </div>
                </div>
              </div>

              {/*<div className="single-work">*/}
              {/*  <div class="sw-left"><h3> Ramps vape bushwick </h3></div>*/}
              {/*  <div class="sw-right">*/}
              {/*    <p> Visual identity, web design, branding </p>*/}
              {/*    <img width="40" src={arrow} alt="" />*/}
              {/*  </div>*/}
              {/*</div>*/}

            </div>
          </div>
        </section>


        {/*<section className="section-main-works">*/}
        {/*  <div className="main-works-container">*/}
        {/*    <h5>Works</h5>*/}
        {/*    <h2 className="subsec-title">Our latest projects</h2>*/}
        {/*    <div className="main-works">*/}
        {/*      <p className="pc-description">*/}
        {/*        Pug hexagon ethical edison bulb dreamcatcher iceland. Slow-carb freegan adaptogen intelligentsia, small batch sartorial etsy food truck pitchfork. Twee umami freegan 3 wolf moon master cleanse.Asymmetrical gentrify gastropub farm-to-table butcher pok pok vice brooklyn stump*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}


        {/*<section className="section-skew-marquee break-out">*/}
        {/*  <div className="marquee-container">*/}
        {/*    <div><span className="marquee-span">Branding | Branding | Branding | Branding | </span></div>*/}
        {/*    <div><span className="marquee-span">Webdesign | Webdesign | Webdesign | Webdesign |  </span></div>*/}
        {/*    <div><span className="marquee-span">Visual identity | Visual identity | Visual identity | </span></div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="section-main-services">
          <h5>Works</h5>
          <h2 className="subsec-title">Our Services</h2>
          <div className="main-works">
            <p className="pc-description">
              Pug hexagon ethical edison bulb dreamcatcher iceland. Small batch sartorial etsy food truck pitchfork. Dawolf moon master cleanse.Asymmetrical gentrify gastropub farm-to-table butcher pok pok vice brooklyn stump
            </p>
          </div>
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

        <section className="section-worldwide">
          <div className="bg-circles-section">
            <div className="blurry-circle bc-4"/>
          </div>
          <div className="worldwide-container">
            <img className="star" width="550" src={star} alt="Agencja interaktywna lumina studio" />
            <h2 className=" w-100">Lumina - studio</h2>
            <h3>worldwide</h3>
            <img className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
          </div>
        </section>

        <section className="section-marquee break-out">
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
