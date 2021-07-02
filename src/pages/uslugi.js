import React from "react"
import ServicesSlider from "../components/ServicesSlider"
import arrowDown from "../assets/icons/arrowDown.svg"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import orbitService from "../assets/icons/orbitServicesPage.svg"
import LowerFooter from "../components/LowerFooter"
import orbitAbout from "../assets/icons/orbitAbout.png"
import handDown from "../assets/icons/handDown.svg"
import Worldwide from "../components/Worldwide"
import arrow from "../assets/icons/right-arrow.svg"
import thumbUp from "../assets/icons/thumbUp.svg"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import TriggerLine from "../components/TriggerLine"

import orbitMain from "../assets/icons/orbitMainViewNew.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import aboutServiceStar1 from "../assets/icons/aboutServiceStar1.svg"
import aboutServiceStar2 from "../assets/icons/aboutServiceStar2.svg"
// ...GatsbyImageSharpFluid
const Services = () => {
  return (
    <>
      <main className="services-page container-fluid">
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

        <TriggerImg threshold="0" delay={1}>
          <img
            // data-scroll
            // data-scroll-speed="-1"
            // data-scroll-position="bottom"
            className="service-stickers" width="100%" src={serviceStickers} alt="" />
        </TriggerImg>

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

              <TriggerLine threshold=".5" delay=".35">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar1} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>01.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
                    <h3>Web dev</h3>
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
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>02.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
                    <h3>Branding</h3>
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
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>03.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
                    <h3>Social media</h3>
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
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>04.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
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
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>05.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
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
                <TriggerImg threshold="0" delay={.2}>
                  <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
                </TriggerImg>
              </div>
              <div className="about-single-right">
                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>06.</span>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".45">
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

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide/>
      </main>
      <LowerFooter/>
    </>
)
}

export default Services
