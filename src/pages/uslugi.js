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
import Worldwide from "../components/Worldwide"
import arrow from "../assets/icons/right-arrow.svg"
import thumbUp from "../assets/icons/thumbUp.svg"
// ...GatsbyImageSharpFluid
const Services = () => {
  return (
    <>
      <main className="services-page container-fluid">
        <div className="page-content">
          {/*<div className="subsec-header">*/}
          {/*  <h5 className="">01.</h5>*/}
          {/*  <h2 className="subsec-title">Services</h2>*/}
          {/*</div>*/}

          {/*<div className="subsec-body">*/}
          {/*  /!*<div className="ss-body-first"/>*!/*/}
          {/*  <div className="ss-body-second">*/}
          {/*    <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. Slow-carb tofu wolf, <em> ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
          {/*    <span>Things we made</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <section className="section-main-works">
            <div>
              <div className="subsec-header">
                <h5 className="">01.</h5>
                <h2 className="subsec-title">Works</h2>
              </div>
              <div className="subsec-body">
                {/*<div className="ss-body-first"/>*/}
                <div className="ss-body-second">
                  <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>
                  <span>Things we made</span>
                </div>
              </div>
              <div className="main-works-container">
                <div className="single-work">
                  <div>
                    <h5>01.</h5>
                    <h3>Web development</h3>
                  </div>
                  <div>
                    <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>
                    <div className="learn-more sw-right">
                      <a href="#">Sprawdź więcej</a>
                      <img width="30" src={arrow} alt="" />
                    </div>
                  </div>
                </div>

                <div className="single-work">
                  <div>
                    <h5>02.</h5>
                    <h3>Branding</h3>
                  </div>
                  <div>
                    <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>
                    <div className="learn-more sw-right">
                      <a href="#">Sprawdź więcej</a>
                      <img width="30" src={arrow} alt="" />
                    </div>
                  </div>
                </div>

                <div className="single-work">
                  <div>
                    <h5>03.</h5>
                    <h3>Design</h3>
                  </div>
                  <div>
                    <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>
                    <div className="learn-more sw-right">
                      <a href="#">Sprawdź więcej</a>
                      <img width="30" src={arrow} alt="" />
                    </div>
                  </div>
                </div>

                <div className="single-work">
                  <div>
                    <h5>04.</h5>
                    <h3>Strategy</h3>
                  </div>
                  <div>
                    <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>
                    <div className="learn-more sw-right">
                      <a href="#">Sprawdź więcej</a>
                      <img width="30" src={arrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*<img width="200" src={handDown} alt="" />*/}
        {/*<img className="hand" width="200" src={thumbUp} alt="" />*/}



        {/*<section className="section-main-works">*/}
        {/*  <div className="main-works-container">*/}
        {/*    <h5>Nasz proces</h5>*/}
        {/*    /!*<h2 className="subsec-title">Our latest projects</h2>*!/*/}
        {/*    <div className="main-works">*/}

        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Kogi mustache</h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3> Distillery glossier </h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Copper mug</h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Ramps vape </h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}



        {/*<section className="section-more-projects">*/}
        {/*  <div>*/}
        {/*    <div className="subsec-header">*/}
        {/*      <h5 className="">02.</h5>*/}
        {/*      <h2 className="subsec-title">Services</h2>*/}
        {/*    </div>*/}
        {/*    /!*<div className="subsec-body">*!/*/}
        {/*    /!*  /!*<div className="ss-body-first"/>*!/*!/*/}
        {/*    /!*  <div className="ss-body-second">*!/*/}
        {/*    /!*    <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*!/*/}
        {/*    /!*    <span>Things we made</span>*!/*/}
        {/*    /!*  </div>*!/*/}
        {/*    /!*</div>*!/*/}
        
        {/*    <div className="more-projects-single mt-5">*/}
        {/*      <div className="more-left">*/}
        {/*        <span>2019</span>*/}
        {/*        <h5>Antyegzekucja</h5>*/}
        {/*      </div>*/}
        {/*      <p className="more-right"> Webdesign, Banding </p>*/}
        {/*    </div>*/}
        
        {/*    <div className="more-projects-single ">*/}
        {/*      <div className="more-left">*/}
        {/*        <span>2020</span>*/}
        {/*        <h5>Carra</h5>*/}
        {/*      </div>*/}
        {/*      <p className="more-right"> Webdesign, Strategy </p>*/}
        {/*    </div>*/}
        
        {/*    <div className="more-projects-single ">*/}
        {/*      <div className="more-left">*/}
        {/*        <span>2020</span>*/}
        {/*        <h5>Radca prawny tomczak</h5>*/}
        {/*      </div>*/}
        {/*      <p className="more-right"> Webdesign, Branding </p>*/}
        {/*    </div>*/}
        
        {/*    <div className="more-projects-single ">*/}
        {/*      <div className="more-left">*/}
        {/*        <span>2021</span>*/}
        {/*        <h5>Antyegzekucja</h5>*/}
        {/*      </div>*/}
        {/*      <p className="more-right"> Webdesign  </p>*/}
        {/*    </div>*/}
        
        {/*    <div className="more-projects-single ">*/}
        {/*      <div className="more-left">*/}
        {/*        <span>2021</span>*/}
        {/*        <h5>Coś tam</h5>*/}
        {/*      </div>*/}
        {/*      <p className="more-right"> Webdesign  </p>*/}
        {/*    </div>*/}
        
        {/*  </div>*/}
        
        {/*  <div className="learn-more">*/}
        {/*    <a href="/portfolio">*/}
        {/*      <span>Zobacz</span>*/}
        {/*      <span/>*/}
        {/*      <span>Wszystkie</span>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>
            <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>
          </div>
        </section>

        <Worldwide/>
      </main>
      <LowerFooter/>
    </>
)
}

export default Services
