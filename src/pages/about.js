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
import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
import smallStar from "../assets/icons/smallStar.svg"
import arrow from "../assets/icons/right-arrow.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import Worldwide from "../components/Worldwide"
import aboutServiceStar1 from "../assets/icons/aboutServiceStar1.svg"
import aboutServiceStar2 from "../assets/icons/aboutServiceStar2.svg"


// ...GatsbyImageSharpFluid
const About = () => {
  return (
    <>
      <main className="about-page container-fluid">

        <section className="section-about-container">
          <div className="main-container">
            <div>
              <h5 className="">01.</h5>
              <h2 className="subsec-title">
                <span>wayfaresers </span>
                <span>hammock dan</span>
                <span>Shoreditch</span>
              </h2>
            </div>
            <img className="orbit" width="900" src={orbitAboutPage} alt="" />
            <img className="small-star" width="50" src={smallStar} alt="" />
          </div>
        </section>

        <section>
          <div className="page-content">
            <div className="subsec-body">
              <div className="ss-body-first">
              </div>
              <div className="ss-body-second">
                <p>Distillery type write brunch wayfarers letter  ham mock meggings food truck <em> bulb forage</em>. Man on the polaroid thundercats hashtae subway tile. </p>
                <span>Who we are</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-process">
          <div className="subsec-header">
            <h5 className="">02.</h5>
            <h2 className="subsec-title">Our Vision</h2>
          </div>
          <div className="about-process-single mt-5">
            <div>
              <span>01.</span>
              <p>Gochujang letterpress poutine</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
          <div className="about-process-single">
            <div>
              <span>02.</span>
              <p>bitters intelligentsia</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
          <div className="about-process-single">
            <div>
              <span>03.</span>
              <p>taiyaki art party jean shorts XOXO</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
          <div className="about-process-single">
            <div>
              <span>04.</span>
              <p>Cold-pressed polaroid venmo squid</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
          <div className="about-process-single">
            <div>
              <span>05.</span>
              <p>Squid cred</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
          <div className="about-process-single">
            <div>
              <span>06.</span>
              <p>Godard chillwave cardigan</p>
            </div>
            <img width="30" src={arrow} alt="" />
          </div>
        </section>

        <div>
          <img className="service-stickers" width="100%" src={serviceStickers} alt="" />
        </div>


        <section className="about-page-process">
          <div className="subsec-header">
            <h5 className="">03.</h5>
            <h2 className="subsec-title">Our services</h2>
          </div>

          <div className="about-page-services">
            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar1} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>01.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>02.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar1} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>03.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar2} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>04.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar1} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>01.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

            <div className="about-single">
              <div className="about-single-left">
                <img className="small-star" width="150" src={aboutServiceStar1} alt="" />
              </div>
              <div className="about-single-right">
                <div>
                  <span>01.</span>
                  <h3>Web dev</h3>
                </div>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>

          </div>

        </section>

        <Worldwide/>

        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>
            <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>
          </div>
        </section>


      </main>
      <LowerFooter/>
    </>
  )
}

export default About
