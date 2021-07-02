import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import arrow from "../assets/icons/right-arrow.svg"
import LowerFooter from "../components/LowerFooter"
import carra from "../assets/imgs/carra.jpg"
import drewstal from "../assets/imgs/drewstal.jpg"
import adwokat from "../assets/imgs/adwokat.jpg"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"

// ...GatsbyImageSharpFluid
const Portfolio = () => {
  return (
    <>
      <main className="works-page container-fluid">
        <section className="page-content works-page-container">

            <div className="subsec-header">
              <h5 className="">01.</h5>
              <h2 className="subsec-title">Works</h2>
            </div>

            <div className="main-works-container mt-5">
              <div className="single-work">
                <div className="singe-work-left">
                  <p>Webdesign, strategy</p>
                  <h2>Radca Tomczak</h2>
                  <p>01.</p>
                </div>

                <img width="100%" src={carra} alt="" />

                <div className="singe-work-right">
                  <div className="learn-more">
                    <Link className="" to="/single-project">
                      <span>Sprawdź</span>
                      <span/>
                      <span>Więcej</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="single-work">
                <div className="singe-work-left">
                  <p>Webdesign</p>
                  <h2>Drewstal</h2>
                  <p>02.</p>
                </div>

                <img width="100%" src={drewstal} alt="" />

                <div className="singe-work-right">
                  <div className="learn-more">
                    <Link className="" to="/single-project">
                      <span>Sprawdź</span>
                      <span/>
                      <span>Więcej</span>
                    </Link>
                  </div>
                </div>
              </div>


            </div>
        </section>


        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide/>
      </main>
      <LowerFooter/>
    </>
  )
}

export default Portfolio
