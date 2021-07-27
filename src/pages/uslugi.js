import React, { useRef } from "react"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import TriggerLine from "../components/TriggerLine"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import orbitMain from "../assets/icons/orbitServicesViewNew.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"
// import aboutServiceStar1 from "../assets/icons/aboutServiceStar1.svg"
// import aboutServiceStar2 from "../assets/icons/aboutServiceStar2.svg"
import SEO from "../components/SEO"

import serviceOrbit1 from "../assets/icons/serviceOrbit1.svg"
import serviceOrbit2 from "../assets/icons/serviceOrbit2.svg"
import serviceOrbit3 from "../assets/icons/serviceOrbit3.svg"
import serviceOrbit4 from "../assets/icons/serviceOrbit4.svg"
import serviceOrbit5 from "../assets/icons/serviceOrbit5.svg"
import serviceOrbit6 from "../assets/icons/serviceOrbit6.svg"


// ...GatsbyImageSharpFluid
const Uslugi = () => {

  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | Usługi"
           description="Zadzwoń I Umów Się Na Bezpłatną Konultację. Tel. 506 870 672. Sklepy internetowe. Projektowanie I Tworzenie Sklepów Internetowych, Profesjonalny Sklep Internetowy"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
      <main className="services-page container-fluid"  data-scroll-container ref={containerRef}>
        <section className="section-services-container">
          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2
                data-scroll
                data-scroll-speed="2"
                data-scroll-direction="horizontal"
              >Rozwi</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".3">
              <h2 className="pseudo-line"
                  data-scroll
                  data-scroll-speed="-1"
                  data-scroll-direction="horizontal"
              >jamy</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".25">
              <span
                data-scroll
                data-scroll-speed="3"
                data-scroll-direction="horizontal"
              >Się</span>
              <h2
                data-scroll
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
              >dla</h2>
            </TriggerText>

            <TriggerText threshold=".5" delay=".35">
              <h2
                data-scroll
                data-scroll-speed="-4"
                data-scroll-direction="horizontal"
              >Ciebie</h2>
            </TriggerText>

            <TriggerImg delay={1}>
              <img
                data-scroll
                data-scroll-speed="-2"
                data-scroll-position="top"
                className="orbit" width="75%" src={orbitMain} alt="" />
            </TriggerImg>
            {/*<TriggerText threshold=".5" delay=".2">*/}
            {/*  <h2>Step</h2>*/}
            {/*</TriggerText>*/}

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

          </div>
        </section>

        {/*<TriggerImg threshold="0" delay={1}>*/}
        {/*  <img*/}
        {/*    // data-scroll*/}
        {/*    // data-scroll-speed="-1"*/}
        {/*    // data-scroll-position="bottom"*/}
        {/*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}
        {/*</TriggerImg>*/}

        <section className="about-page-process">
          <div className="subsec-header">

            <TriggerText threshold=".5" delay=".35">
              <h5 className="">01.</h5>
            </TriggerText>
            <TriggerText threshold=".5" delay=".45">
              <h2 className="subsec-title">Nasze <br /> Usługi</h2>
            </TriggerText>
          </div>

          <div className="about-page-services">
            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit1} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>01.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Web dev</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania responsywnych stron internetowych.
                    Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania treścią.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>02.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Branding</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy identyfikacji wizualnej były spójne ze sobą jak
                    również odzwierciedlały branżę lub sprzedawany produkt.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit3} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>03.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Social media</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem są kampanie Google Ads,
                    Facebook oraz pozycjonowanie stron internetowych.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit4} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>04.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>SEO</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit5} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>05.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Digital</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={1.2}>
                  <img className="small-star" width="150" src={serviceOrbit6} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>06.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Design</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>
          </div>
        </section>

        <TriggerImg threshold="0" delay={1}>
          <img
            className="service-stickers" width="100%" src={serviceStickers} alt="" />

          <img
            className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="" />
        </TriggerImg>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide/>

        <LowerFooter/>

      </main>
      </LocomotiveScrollProvider>

    </>
)}

export default Uslugi
