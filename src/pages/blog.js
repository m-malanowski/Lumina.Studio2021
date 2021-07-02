import React from "react"
import Footer from "../components/Footer"
import ArticlesSlider from "../components/ArticlesSlider"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import LowerFooter from "../components/LowerFooter"
import arrowDown from "../assets/icons/arrowDown.svg"
import ServicesSlider from "../components/ServicesSlider"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return (
    <>
      <main className="blog-page container-fluid">
        {/*<div className="page-content">*/}

        {/*  <div className="subsec-header">*/}
        {/*    <h5 className="">01.</h5>*/}
        {/*    <h2 className="subsec-title">Blog</h2>*/}
        {/*  </div>*/}


        {/*  <div className="subsec-body">*/}
        {/*    /!*<div className="ss-body-first"/>*!/*/}
        {/*    <div className="ss-body-second">*/}
        {/*      <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. Slow-carb tofu wolf, <em> ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
        {/*      <span>Things we made</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="scroll-down-pages">*/}
        {/*    <img width="100" src={arrowDown} alt="" />*/}
        {/*    /!*<img width="150" src={handDown} alt="" />*!/*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<section className="services-page-slider break-out">*/}
        {/*  <ArticlesSlider/>*/}
        {/*</section>*/}

        {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}*/}
        {/*                thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>*/}
        {/*<Worldwide/>*/}

        <section className="section-about-container">
          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2>Step</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".25">
              <span>into</span>
              <h2>Van</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".3">
              <h2>Gogh's</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".35">
              <h2>World</h2>
            </TriggerText>

          </div>

        </section>

        <section className="services-page-slider break-out">
          <ArticlesSlider/>
        </section>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide />

      </main>
      <LowerFooter />
    </>
  )
}

export default Blog
