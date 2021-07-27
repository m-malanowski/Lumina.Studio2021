import React, { useRef } from "react"
import ArticlesSlider from "../components/ArticlesSlider"
// import { graphql } from "gatsby"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import TriggerImg from "../components/TriggerImg"
import orbitAboutPage from "../assets/icons/orbitBlogPage.svg"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid

const Blog = () => {
  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | Blog"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
      <main className="blog-page container-fluid"  data-scroll-container ref={containerRef}>
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

        <section className="section-blog-container">
          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2>blog</h2>
            </TriggerText>

            {/*<TriggerText threshold=".5" delay=".25">*/}
            {/*  <span>into</span>*/}
            {/*  <h2>Van</h2>*/}
            {/*</TriggerText>*/}

            {/*<TriggerText threshold=".5" delay=".3">*/}
            {/*  <h2>Gogh's</h2>*/}
            {/*</TriggerText>*/}

            {/*<TriggerText threshold=".5" delay=".35">*/}
            {/*  <h2>World</h2>*/}
            {/*</TriggerText>*/}
            <TriggerImg delay={1}>
              <img
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
                className="orbit-blog" width="70%" src={orbitAboutPage} alt="" />
            </TriggerImg>
          </div>
        </section>

        <section>
          <div className="">
            <div className="subsec-body">
              <div className="ss-body-first">
              </div>
              <div className="ss-body-second">
                <TriggerText threshold="0" delay=".5">
                  <p> Nasza agencja specjializuję się w tworzeniu aplikacji internetowych oraz <em> identyfikacji wizualnej </em> dla firm. Coś tam napisać o blogu.
                  </p>
                </TriggerText>

                <TriggerText threshold="0" delay=".35">
                  <span className="subsec-span">Aktualności</span>
                </TriggerText>
              </div>
            </div>
          </div>
        </section>

        <section className="services-page-slider break-out">
          <ArticlesSlider/>
        </section>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide />
        <LowerFooter />

      </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Blog
