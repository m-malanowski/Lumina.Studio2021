import React, { useState } from "react"
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
import { SplitText } from "../components/SplitText"
import { splitTextVariants } from "../components/Variants"
import SectionMarquee from "../components/SectionMarquee"
// import memoji from "../assets/icons/giphy.gif"
import { motion } from "framer-motion"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid
const About = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)


  const transition = { delay: .1, duration: .4, ease: [0.6, 0.01, -0.05, 0.9] }
  const variantsPlus = {
    open: { rotate: 90, opacity: 1 },
    closed: { opacity: 1 },
    hover: { opacity: .4 }
  }
  const variantsDesc1 = {
    open: { opacity: 1, height: "auto", visibility: "visible" },
    closed: { opacity: 0, height: 0, visibility: "hidden" }
  }
  return (
    <>
      {/*<SEO title="LUMINA STUDIO | Agencja Interaktywna"*/}
      {/*     description="LUMINA STUDIO | Agencja Interaktywna"*/}
      {/*     // schemaMarkup={schema}*/}
      {/*/>*/}

      <main className="about-page container-fluid">

        <section className="section-about-container">
          <div className="main-container">
            <div className="tag-container">
              <h5 className="">01.</h5>
              <h2 className="subsec-title">
                <SplitText
                  initial={{ y: "100%" }}
                  animate="visible"
                  exit="hidden"
                  variants={splitTextVariants}>
                  meggings footruck Shoredith
                </SplitText>
              </h2>
            </div>
            <img className="orbit" width="900" src={orbitAboutPage} alt="" />
            <img className="small-star" width="50" src={smallStar} alt="" />
          </div>
        </section>

        <section>
          <div className="">
            <div className="subsec-body">
              <div className="ss-body-first">
              </div>
              <div className="ss-body-second">
                <p>Distillery type write brunch wayfarers letter ham mock meggings food truck <em> bulb forage</em>. Man
                  on the polaroid thundercats hashtae subway tile. </p>
                <span className="subsec-span">Who we are</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-process">
          <div className="subsec-header">
            <h5 className="">02.</h5>
            <h2 className="subsec-title">Our <br /> Vision</h2>
          </div>

          <div className="about-process-single mt-5">
            <div className="about-process-single-top">
              <div>
                <span>01.</span>
                <p onClick={() => setIsOpen1(!isOpen1)}>Gochujang letterpress poutine</p>
              </div>
              <motion.img
                animate={isOpen1 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen1(!isOpen1)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen1 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>


          <div className="about-process-single">
            <div className="about-process-single-top">
              <div>
                <span>02.</span>
                <p onClick={() => setIsOpen2(!isOpen2)}>Migas meditation </p>
              </div>
              <motion.img
                animate={isOpen2 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen2(!isOpen2)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen2 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5 ">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-process-single">
            <div className="about-process-single-top">
              <div>
                <span>03.</span>
                <p onClick={() => setIsOpen3(!isOpen3)}>polaroid banh mi tbh</p>
              </div>
              <motion.img
                animate={isOpen3 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen3(!isOpen3)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen3 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5 ">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-process-single">
            <div className="about-process-single-top">
              <div>
                <span>04.</span>
                <p onClick={() => setIsOpen4(!isOpen4)}>Hashtag tousled ethical</p>
              </div>
              <motion.img
                animate={isOpen4 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen4(!isOpen4)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen4 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5 ">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-process-single">
            <div className="about-process-single-top">
              <div>
                <span>05.</span>
                <p onClick={() => setIsOpen5(!isOpen5)}>sold out vice</p>
              </div>
              <motion.img
                animate={isOpen5 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen5(!isOpen5)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen5 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5 ">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-process-single">
            <div className="about-process-single-top">
              <div>
                <span>06.</span>
                <p onClick={() => setIsOpen6(!isOpen6)}>bitters intelligentsia</p>
              </div>
              <motion.img
                animate={isOpen6 ? "open" : "closed"}
                variants={variantsPlus}
                transition={transition}
                onClick={() => setIsOpen6(!isOpen6)}
                whileHover="hover"
                width="30"
                src={arrow} alt="" />
            </div>

            <motion.div
              animate={isOpen6 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5 ">
                <div className="">
                  {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                  {/*<br />*/}
                  <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                    dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                    vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                    intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                    humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                    vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        <div>
          <img className="service-stickers" width="100%" src={serviceStickers} alt="" />
          {/*<img className="service-stickers" width="100%" src={memoji} alt="" />*/}
        </div>

        <section className="about-page-process">
          <div className="subsec-header">
            <h5 className="">03.</h5>
            <h2 className="subsec-title">Our <br /> services</h2>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
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
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                  edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                  stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                  kickstarter XOXO. Skateboard kombucha waistcoat. </p>
              </div>
            </div>
          </div>
        </section>


        <SectionMarquee firstTape={true} secondTape={true} thirdTape={true} />


        {/*<section className="section-marquee break-out">*/}
        {/*  <div className="marquee-container">*/}
        {/*    <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>*/}
        {/*    <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>*/}
        {/*    <div className="third-tape"><span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <Worldwide />

      </main>
      <LowerFooter />
    </>
  )
}

export default About
