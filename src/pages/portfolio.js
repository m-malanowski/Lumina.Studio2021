import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import arrow from "../assets/icons/right-arrow.svg"
// ...GatsbyImageSharpFluid
const Portfolio = () => {
  return (
    <>
      <main className="services-page container-fluid">
        <section className="section-main-works">
          <div>
            <div className="subsec-header">
              <h5 className="">02.</h5>
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
                  <h5>01/</h5>
                  <h3>Carra</h3>
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
                  <h5>02/</h5>
                  <h3>Radca Prawny Tomczak</h3>
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
                  <h5>03/</h5>
                  <h3>Adwokat Mikulak</h3>
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
      </main>
    </>
  )
}

export default Portfolio
