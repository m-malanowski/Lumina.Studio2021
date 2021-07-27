import React, { useEffect, useRef, useState } from "react"
import orbitProcess from "../assets/icons/orbitProcess.png"
import { Link } from "gatsby"
import orbitMain from "../assets/icons/orbitMainViewNew.svg"
import handDown from "../assets/icons/handDown.svg"
import SEO from "../components/SEO"
import ProjectsSubsectionNew from "../components/ProjectsSubsectionNew"
import Worldwide from "../components/Worldwide"
import smallStar from "../assets/icons/smallStar.svg"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import SectionMarquee from "../components/SectionMarquee"
import LowerFooter from "../components/LowerFooter"
import arrow from "../assets/icons/right-arrow.svg"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import orbitMoreSection from "../assets/icons/orbitMoreSection.svg"

const HomePage = ()  => {

  const containerRef = useRef(null)

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "lumina.studio - Tworzenie Stron Internetowych",
    "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=10Zl8pYoh3_82OvkSYeae7nnzrYM-XZAh&usp=sharing",
    "image": "https://lumina.studio/facebook.jpg",
    "@id": "",
    "url": "https://lumina.studio",
    "telephone": "+ 48 506 870 672",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Królewiecka 21B",
      "addressLocality": "Elbląg",
      "postalCode": "82-300",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.163358,
      "longitude": 19.400674
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/luminastudio2",
      "https://www.facebook.com/hello.lumina.studio",
      "https://www.instagram.com/_luminastudio/",
      "https://www.youtube.com/channel/UCwZ6P8-qBseEI32njO-8PcA",
      "https://www.linkedin.com/company/luminastudio/",
      "https://www.google.com/maps/d/u/0/edit?mid=10Zl8pYoh3_82OvkSYeae7nnzrYM-XZAh&usp=sharing"
    ]
  }

  return (

    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna"
           description="Na Czas Naszej Współpracy Stajemy Się Twoją Prywatną Agencją Interaktywną. Tworzymy Sklepy Internetowe Oraz Nowoczesne Strony WWW Dla Firm. Oferujemy Także Marketing Internetowy I Kampanie Reklamowe."
           schemaMarkup={schema}
      />

      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            getDirection: true,
            smartphone: {
              smooth: true
            },
            mobile: {
              smooth: true
            }
          }
        }
        watch={
          []
        }
        containerRef={containerRef}
      >

      <main className="index-page container-fluid"  data-scroll-container ref={containerRef}>
        <section className="section-main-container">
          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2
                data-scroll
                data-scroll-speed="-1"
                data-scroll-direction="horizontal"
              >Idziemy</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".25">
              {/*<span*/}
              {/*  data-scroll*/}
              {/*  data-scroll-speed="2"*/}
              {/*  data-scroll-direction="horizontal"*/}
              {/*>z</span>*/}
              <h2
                data-scroll
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
              >z Duchem</h2>
            </TriggerText>


            <TriggerText threshold=".5" delay=".3">
              <h2
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="horizontal"
              >Czasu</h2>
            </TriggerText>


            <TriggerImg delay={1}>
              <img
                data-scroll
                data-scroll-speed="-1"
                data-scroll-position="top"
                className="orbit" width="85%" src={orbitMain} alt="" />
            </TriggerImg>
            <TriggerImg delay={1.5}>
              <img
                data-scroll
                data-scroll-speed="2"
                data-scroll-position="top"className="small-star" width="50" src={smallStar} alt="" />
            </TriggerImg>
            <div className="scroll-down">
              <TriggerImg delay={1.2}>
                <img width="85" src={handDown} alt="" />
              </TriggerImg>
            </div>
          </div>
        </section>

        <SectionMarquee firstTape={false} secondTape={true} thirdTape={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollSpeed="2"/>

        <section className="section-main-process">
          <div className="">
            <div className="subsec-header">
              <TriggerText threshold=".5" delay=".5">
                <span className="">01.</span>
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <h2 className="subsec-title">O nas</h2>
              </TriggerText>
            </div>
            <div className="subsec-body">
              <div className="ss-body-second">
                <TriggerText threshold=".5" delay=".5">
                  <p>
                    Jeżeli tak jak my uważasz, że większość stron internetowych dostępnych w internecie jest nudna i bez polotu, to <em>dobrze trafiłeś.</em>
                    </p>
                </TriggerText>
                <TriggerText threshold=".5" delay=".5">
                  <span className="subsec-span">Kim jesteśmy</span>
                </TriggerText>

                <TriggerImg>
                  <img
                    data-scroll
                    data-scroll-speed="-2"
                    className="orbit" width="600" src={orbitProcess} alt="" />
                </TriggerImg>

              </div>
              <div className="ss-body-first">
                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Branding</h3>
                    {/*<span>01</span>*/}
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy identyfikacji wizualnej były spójne ze sobą jak
                      również odzwierciedlały branżę lub sprzedawany produkt.</p>
                  </TriggerText>

                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <Link to="/uslugi">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </Link>
                    </div>
                  </TriggerText>

                </div>

                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Web Development</h3>
                    {/*<span>02</span>*/}
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania responsywnych stron internetowych.
                      Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania treścią.</p>
                  </TriggerText>

                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <Link to="/uslugi">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </Link>
                    </div>
                  </TriggerText>

                </div>

                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Social media</h3>
                    {/*<span>03</span>*/}
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem są kampanie Google Ads,
                      Facebook oraz pozycjonowanie stron internetowych.</p>
                  </TriggerText>

                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <Link to="/uslugi">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </Link>
                    </div>
                  </TriggerText>

                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                        secondTapeScroll={true} />

        <ProjectsSubsectionNew/>

        <section className="section-show-more index">
          <div className="main-container">
            <TriggerText threshold=".5" delay=".2">
              <h2>Stwó</h2>
            </TriggerText>
            <TriggerText threshold=".5" delay=".25">
              <h2 className="pseudo-line">rzmy</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".3">
              <h2>Razem</h2>
              <span className="ml-5">Coś</span>
            </TriggerText>

            <TriggerText threshold=".5" delay=".35">
              <h2>Fajnego</h2>
              <Link to="/kontakt">
                <img src={arrow} alt="" width="120px" className="ml-5"/>
              </Link>
            </TriggerText>
          </div>

          <TriggerImg delay={.01} threshold={0}>
            <img
              data-scroll
              data-scroll-speed="1"
              data-scroll-position="top"
              className="orbit" width="95%" src={orbitMoreSection} alt="" />
           </TriggerImg>
        </section>

        {/*<section className="experimento ">*/}
        {/*  <div className="single">*/}
        {/*    <h6> News December 2nd, 2020</h6>*/}
        {/*    <h5>What governs your deon, Co-Founder and Creative</h5>*/}
        {/*    <p>s  creativity and innovation. Incorporating the process of play into their work ensures that they enjoy what they make and that their clients do too.</p>*/}
        {/*    <img src="" alt="" />*/}
        {/*  </div>*/}
        
        {/*  <div className="single">*/}
        {/*    <h6> News December 2nd, 2020</h6>*/}
        {/*    <h5>What governs your desigKenjiro Kirton, Co-Founder and Creative</h5>*/}
        {/*    <p>Kivity and innovation. Incorporating the process of play into their work ensures that they enjoy what they make and that their clients do too.</p>*/}
        {/*    <img src="" alt="" />*/}
        {/*  </div>*/}
        
        {/*  <div className="single">*/}
        {/*    <h6> News December 2nd, 2020</h6>*/}
        {/*    <h5> DesignThinkers 2020, Kenjiro Kirton, Co-Founder and Creative</h5>*/}
        {/*    <p>Ken talk ofe process of play into their work ensures that they enjoy what they make and that their clients do too.</p>*/}
        {/*    <img src="" alt="" />*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="section-about-container">*/}
        {/*  <div className="main-container">*/}
        
        {/*    <TriggerText threshold=".5" delay=".2">*/}
        {/*      <h2>Step</h2>*/}
        {/*    </TriggerText>*/}
        
        {/*    <TriggerText threshold=".5" delay=".25">*/}
        {/*      <span>into</span>*/}
        {/*      <h2>Van</h2>*/}
        {/*    </TriggerText>*/}
        
        {/*    <TriggerText threshold=".5" delay=".3">*/}
        {/*      <h2>Gogh's</h2>*/}
        {/*    </TriggerText>*/}
        
        {/*    <TriggerText threshold=".5" delay=".35">*/}
        {/*      <h2>World</h2>*/}
        {/*    </TriggerText>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide />

        <LowerFooter />

      </main>
      </LocomotiveScrollProvider>

    </>
  )
}
// ...GatsbyImageSharpFluid

export default HomePage;
