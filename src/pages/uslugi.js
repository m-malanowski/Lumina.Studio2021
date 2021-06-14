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
import SectionMarquee from "../components/SectionMarquee"
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

        <SectionMarquee firstTape={true} secondTape={true} thirdTape={true}/>

        <Worldwide/>
      </main>
      <LowerFooter/>
    </>
)
}

export default Services
