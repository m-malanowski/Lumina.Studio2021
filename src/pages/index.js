import React, { useEffect, useRef, useState } from "react"
import cn from "classnames"
// import globe from "../assets/icons/globe.svg"
// import star from "../assets/icons/star.svg"
// import starSm from "../assets/icons/starSmall.svg"
// import arrow from "../assets/icons/right-arrow.svg"
import orbitProcess from "../assets/icons/orbitProcess.png"
import orbitAbout from "../assets/icons/orbitAbout.png"
import orbitMain from "../assets/icons/orbitMainView.png"
import handDown from "../assets/icons/handDown.svg"
// import thumbUp from "../assets/icons/thumbUp.svg"
// import arrowDown from "../assets/icons/arrowDown.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import ProjectsSubsection from "../components/ProjectsSubsection"
import Worldwide from "../components/Worldwide"
import Footer from "../components/Footer"
// import MainScene3 from "../components/MainScene3"
// import SocialLinks from "../constants/socialLinks"
// import ServicesSlider from "../components/ServicesSlider"
// import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
// import smallStar from "../assets/icons/smallStar.svg"
import { motion } from "framer-motion"
import { SplitText } from "../components/SplitText"
import TriggerText from "../components/TriggerText"
import TriggerLine from "../components/TriggerLine"
import TriggerImg from "../components/TriggerImg"
import { TriggerSplit } from "../components/TriggerSplit"
import { splitTextVariants, transition } from "../components/Variants"
import SectionMarquee from "../components/SectionMarquee"
import LowerFooter from "../components/LowerFooter"
// import Marquee from "react-fast-marquee";
// import gsap from "gsap";
// import SplitText from "../utils/Split";
// import useOnScreen from "../hooks/useOnScreen";


export default () => {
  // const banner = {
  //   animate: {
  //     transition: {
  //       delayChildren: 0.4,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };
  // const letterAni = {
  //   initial: { y: 400 },
  //   animate: {
  //     y: 0,
  //     transition: {
  //       ease: [0.6, 0.01, -0.05, 0.95],
  //       duration: 1,
  //     },
  //   },
  // };
  // const AnimatedLetters = ({ title, disabled }) => (
  //   <motion.span
  //     className='row-title'
  //     variants={disabled ? null : banner}
  //     initial='initial'
  //     animate='animate'>
  //     {[...title].map((letter) => (
  //       <motion.span
  //         className='row-letter'
  //         variants={disabled ? null : letterAni}>
  //         {letter}
  //       </motion.span>
  //     ))}
  //   </motion.span>
  // );
  // const ref = useRef(null);
  //
  // const [reveal, setReveal] = useState(false);
  // const onScreen = useOnScreen(ref);
  //
  // useEffect(() => {
  //   if (onScreen) setReveal(onScreen);
  // }, [onScreen]);
  //
  // useEffect(() => {
  //   if (reveal) {
  //     const split = new SplitText("#headline", { type: "lines" });
  //
  //     gsap.to(split.lines, {
  //       duration: 3,
  //       y: -20,
  //       opacity: 1,
  //       stagger: 0.2,
  //       ease: "power4.out",
  //       // onComplete: () => split.revert(),
  //     });
  //   }
  // }, [reveal]);


  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumina Studio Agencja Interaktywna",
    "alternateName": "Lumina Studio Agencja Interaktywna"
    // "url": "https://radcaprawnytomczak.pl",
    // "logo": "https://radcaprawnytomczak.pl/MichałTomczakRadcaPrawny.png",
    // "sameAs": [
    //   "https://www.google.com/maps/d/u/0/edit?mid=1GCWjyo1AqP3O0iREMdxbuDu-HYKiDmeS&usp=sharing",
    //   "https://www.facebook.com/Radca-Prawny-Gda%C5%84sk-Micha%C5%82-Tomczak-110583451087567"
    // ]
  }

  return (
    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna"
           description="LUMINA STUDIO | Agencja Interaktywna"
           schemaMarkup={schema}
      />
      <main className="index-page container-fluid">
        <section className="section-main-container">
          <div className="main-container">
            <div className="tag-container">
              {/*<h5 className="">01.</h5>*/}

              {/*<AnimatedLetters title="meggings footruck Shoredith" />*/}

              <h2 className="subsec-title">
                {/*<span>meggings </span>*/}
                {/*<span>foo truck</span>*/}
                {/*<span>Shoredith</span>*/}
                <SplitText
                  initial={{ y: "100%" }}
                  animate="visible"
                  exit="hidden"
                  variants={splitTextVariants}>
                  meggings footruck Shoredith
                </SplitText>
              </h2>
            </div>
            {/*<p className="mt-5">Adaptogen cardigan pop-up mumblecore, wolf scenester jianbing small  typewriter edison bulb pug etsy. Crucifix salvia stumptown fingerstache migas, snackwave mustache authentic ramps everyday carry forage skateboard taiyaki  <em>pop-up tumblr</em>.</p>*/}

            {/*<div className="small-tag-container">*/}
            {/*  <TriggerText threshold=".5" delay=".5">*/}
            {/*    <p className="mt-5">*/}
            {/*      Adaptogen cardigan pop-up mumblecor. Ovia stumptown fingerstache migas, snackwave mustache authentic ramps everyday carry forage skateboard taiyaki >pop-up tumblr.*/}
            {/*    </p>*/}
            {/*  </TriggerText>*/}
            {/*</div>*/}
            <TriggerImg delay={1}>
              <img className="orbit" width="900" src={orbitMain} alt="" />
            </TriggerImg>
            {/*<img className="small-star" width="50" src={smallStar} alt="" />*/}
          </div>
          <div className="scroll-down">
            {/*<img width="100" src={arrowDown} alt="" />*/}
            {/*<img width="100" src={arrowDown} alt="" />*/}
            {/*<img width="70" src={arrowDown} alt="" />*/}
            <TriggerImg delay={1.2}>
              <img width="125" src={handDown} alt="" />
            </TriggerImg>
          </div>
        </section>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                        secondTapeScroll={true} />

        <section className="section-main-about">
          <div className="main-about-container">
            <div className="subsec-header">
              <TriggerText threshold=".5" delay=".5">
                <h5 className="">02.</h5>
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <h2 className="subsec-title">About</h2>
              </TriggerText>
            </div>
            <div className="subsec-body">
              <div className="ss-body-first">
                <TriggerImg>
                  <img className="orbit" width="800" src={orbitAbout} alt="" />
                </TriggerImg>
              </div>
              <div className="ss-body-second">
                {/*<p ref={ref} id="headline" className={cn({ "is-reveal": reveal }, "to-trigger")}>Distillery type write brunch wayfarers letter press hammock meggings  bulb forage. Man on the polaroid thunder cats hashtae subway tile. </p>*/}
                <TriggerText threshold=".5" delay=".5">
                  <p>
                    {/*<TriggerSplit>*/}
                    Cool Distillery type write brunch wayfa rers letter press hammock meggings <em> polaroid bulb </em>
                    for age. Man on the polaroid thunder cats hashtae subway tile.
                    {/*</TriggerSplit>*/}
                  </p>
                </TriggerText>
                {/*<p ref={ref} id="headline" className={cn({ "is-reveal": reveal }, "to-trigger")}>Distillery type write brunch wayfarers letter press hammock meggings  bulb forage. Man on the polaroid thunder cats hashtae subway tile. </p>*/}
                {/*<p ref={ref} id="headline" className={cn({ "is-reveal": reveal }, "to-trigger")}>Distillery type write brunch wayfarers letter press hammock meggings  bulb forage. Man on the   <em> polaroid </em> thundercats hashtae subway tile. </p>*/}

                {/*<br/><br/><br/>*/}
                {/*<p ref={ref} id="headline" className={cn({ "is-reveal": reveal }, "to-trigger")}>*/}
                {/*  Flirty Flowers is a blog about flowers and the floral designers who make*/}
                {/*  them into art. Creativity and the art of ‘making’ require dialogue. The*/}
                {/*  full purpose of the Flirty Flowers blog is to encourage and inspire. We*/}
                {/*  value art, we value insight, and we value opinion.*/}
                {/*</p>*/}
                <TriggerText threshold=".5" delay=".5">
                  <span className="subsec-span">Who we are</span>
                </TriggerText>
              </div>
            </div>

            <div className="main-about-services">
              <div className="single-service">
                <TriggerLine threshold=".5" delay=".5">
                  <hr className="animated" />
                </TriggerLine>

                <TriggerText threshold=".5" delay="1.0">
                  <h3>Branding</h3>
                </TriggerText>
                <TriggerText threshold=".5" delay="1.2">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                </TriggerText>
              </div>
              <div className="single-service">
                <TriggerLine threshold=".5" delay=".5">
                  <hr className="animated" />
                </TriggerLine>
                <TriggerText threshold=".5" delay="1.0">
                  <h3>Web <br /> dev</h3>
                </TriggerText>
                <TriggerText threshold=".5" delay="1.2">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                </TriggerText>
              </div>
              <div className="single-service">
                <TriggerLine threshold=".5" delay=".5">
                  <hr className="animated" />
                </TriggerLine>
                <TriggerText threshold=".5" delay="1.0">
                  <h3>Digital</h3>
                </TriggerText>
                <TriggerText threshold=".5" delay="1.2">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                </TriggerText>
              </div>
              <div className="single-service">
                <TriggerLine threshold=".5" delay=".5">
                  <hr className="animated" />
                </TriggerLine>
                <TriggerText threshold=".5" delay="1.0">
                  <h3>Social <br /> media</h3>
                </TriggerText>
                <TriggerText threshold=".5" delay="1.2">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                </TriggerText>
              </div>
            </div>

            <TriggerImg threshold="0" delay={1}>
              <img className="service-stickers" width="100%" src={serviceStickers} alt="" />
            </TriggerImg>

          </div>
        </section>

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} />

        <ProjectsSubsection/>

        <SectionMarquee firstTape={false} secondTape={true} thirdTape={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollSpeed="2"/>

        <section className="section-main-process">
          <div className="">
            <div className="subsec-header">
              <TriggerText threshold=".5" delay=".5">
                <h5 className="">04.</h5>
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <h2 className="subsec-title">Process</h2>
              </TriggerText>
            </div>
            <div className="subsec-body">
              <div className="ss-body-second">
                <TriggerText threshold=".5" delay=".5">
                  <p>Distillery type write brunch wayfarers letter press hammock meggings food truck hell o tomy
                    edison <em>on the polaroid. </em> Man osubway tile. </p>
                </TriggerText>
                <TriggerText threshold=".5" delay=".5">
                  <span className="subsec-span">How we do</span>
                </TriggerText>

                <TriggerImg>
                  <img className="orbit" width="600" src={orbitProcess} alt="" />
                </TriggerImg>

              </div>
              <div className="ss-body-first">
                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Briefieng</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Pok pok live-edge biodiesel gluten-free, dison bulb cornhole. Woke hashtag actually cloud bread
                      listicle letterpress.</p>
                  </TriggerText>

                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <a href="/single-project">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </a>
                    </div>
                  </TriggerText>

                </div>

                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Design</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard chia venmo edison bulb cornhole. Woke
                      hashtag actually cloud bread listicle letterpress.</p>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <a href="/single-project">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </a>
                    </div>
                  </TriggerText>

                </div>

                <div className="single-process">
                  <TriggerText threshold=".5" delay=".5">
                    <h3>Implementation</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                      edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                  </TriggerText>
                  <TriggerText threshold=".5" delay=".5">
                    <div className="learn-more">
                      <a href="/single-project">
                        <span>Sprawdź</span>
                        <span />
                        <span>Więcej</span>
                      </a>
                    </div>
                  </TriggerText>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/*  <Worldwide />*/}

      {/*  <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}*/}
      {/*                  thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="-2"/>*/}

      {/*</main>*/}
      {/*<Footer />*/}

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide />

      </main>

      <LowerFooter />
    </>
  )
}
// ...GatsbyImageSharpFluid
