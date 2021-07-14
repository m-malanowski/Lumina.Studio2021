import React, { useEffect, useRef, useState } from "react"
// import cn from "classnames"
// import globe from "../assets/icons/globe.svg"
// import star from "../assets/icons/star.svg"
// import starSm from "../assets/icons/starSmall.svg"
import orbitProcess from "../assets/icons/orbitProcess.png"
// import arrow from "../assets/icons/right-arrow.svg"
import { Link } from "gatsby"
import orbitMain from "../assets/icons/orbitMainViewNew.svg"
import handDown from "../assets/icons/handDown.svg"
// import thumbUp from "../assets/icons/thumbUp.svg"
// import arrowDown from "../assets/icons/arrowDown.svg"
// import serviceStickers from "../assets/icons/serviceStickers.svg"
import SEO from "../components/SEO"
// import ProjectsSubsection from "../components/ProjectsSubsection"
import ProjectsSubsectionNew from "../components/ProjectsSubsectionNew"
import Worldwide from "../components/Worldwide"
// import MainScene3 from "../components/MainScene3"
// import SocialLinks from "../constants/socialLinks"
// import ServicesSlider from "../components/ServicesSlider"
// import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
import smallStar from "../assets/icons/smallStar.svg"
// import smallLuminaStar from "../assets/icons/smallLuminaStar.svg"
// import { motion } from "framer-motion"
// import { SplitText } from "../components/SplitText"
import TriggerText from "../components/TriggerText"
// import TriggerLine from "../components/TriggerLine"
import TriggerImg from "../components/TriggerImg"
// import { TriggerSplit } from "../components/TriggerSplit"
// import { splitTextVariants, transition } from "../components/Variants"
import SectionMarquee from "../components/SectionMarquee"
import LowerFooter from "../components/LowerFooter"
import arrow from "../assets/icons/right-arrow.svg"
// import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
// import ArticlesSlider from "../components/ArticlesSlider"
// import Marquee from "react-fast-marquee";
// import gsap from "gsap";
// import SplitText from "../utils/Split";
// import useOnScreen from "../hooks/useOnScreen";
// import CurtainSlider from "../components/curtain-slider/CurtainSlider";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// const useSize = () => {
//   const { scroll } = useLocomotiveScroll()
//
//   useEffect(() => {
//     console.log(scroll)
//   })
// }

const HomePage = ()  => {
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


  const containerRef = useRef(null)

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
  // const  { scroll } = useLocomotiveScroll()
  // console.log(scroll)
  //
  // React.useEffect(() => {
  //   console.log(scroll)
  //
  //   setTimeout(() => {
  //     console.log(scroll)
  //     console.log('4 sek mineły')
  //   }, 4000);
  //
  //   // scroll.on('scroll', (obj) => {
  //   //   // updateScroll(obj.scroll.x, obj.scroll.y);
  //   //   // render scene
  //   //   console.log(scroll)
  //   // });
  //
  // }, []);
  return (

    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna"
           description="LUMINA STUDIO | Agencja Interaktywna"
           schemaMarkup={schema}
      />

      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            getDirection: true,
          }
        }
        watch={
          [

          ]
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

            <TriggerText threshold=".5" delay=".2">
              <span
                data-scroll
                data-scroll-speed="2"
                data-scroll-direction="horizontal"
              >z</span>
              <h2
                data-scroll
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
              >Duchem</h2>
            </TriggerText>


            <TriggerText threshold=".5" delay=".2">
              <h2
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="horizontal"
              >Czasu</h2>
            </TriggerText>


            {/*<TriggerText threshold=".5" delay=".2">*/}
            {/*  <h2*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="-2"*/}
            {/*    data-scroll-direction="horizontal"*/}
            {/*  >Rozwi</h2>*/}
            {/*</TriggerText>*/}

            {/*<TriggerText threshold=".5" delay=".2">*/}
            {/*  <h2*/}
            {/*    // data-scroll*/}
            {/*    // data-scroll-speed="-2"*/}
            {/*    // data-scroll-direction="horizontal"*/}
            {/*    className="pseudo-line"*/}
            {/*  >Jamy</h2>*/}
            {/*</TriggerText>*/}

            {/*<TriggerText threshold=".5" delay=".25">*/}
            {/*  <h2*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="1"*/}
            {/*    data-scroll-direction="horizontal"*/}
            {/*  >Marki</h2>*/}
            {/*  <span*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="-3"*/}
            {/*    data-scroll-direction="horizontal"*/}
            {/*  >naszych</span>*/}
            {/*</TriggerText>*/}

            {/*<TriggerText threshold=".5" delay=".3">*/}
            {/*  <h2*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="4"*/}
            {/*    data-scroll-direction="horizontal"*/}
            {/*  > Klientów </h2>*/}
            {/*</TriggerText>*/}

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

        {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}*/}
        {/*                secondTapeScroll={true} />*/}

        <SectionMarquee firstTape={false} secondTape={true} thirdTape={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollSpeed="2"/>


        <section className="section-main-process">
          <div className="">
            <div className="subsec-header">
              <TriggerText threshold=".5" delay=".5">
                <h5 className="">01.</h5>
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
                    // data-scroll-position="bottom"
                    // data-scroll-offset="bottom"
                    // data-scroll-delay="2"
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

        {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} />*/}

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                        secondTapeScroll={true} />

        {/*<ProjectsSubsection/>*/}

        <ProjectsSubsectionNew/>

        <section className="section-show-more">
          <div className="constellation">
            <div className="stars-wrapper">
              <img src={smallStar} width={50} alt=""
                   data-scroll
                   data-scroll-speed="-2"
              />
              <img src={smallStar} width={40} alt=""
                   data-scroll
                   data-scroll-speed="-1"
              />
              <img src={smallStar} width={30} alt=""
                   data-scroll
                   data-scroll-speed="-2"
              />
            </div>
          </div>

          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2>Stwó</h2>
            </TriggerText>
            <TriggerText threshold=".5" delay=".25">
              <h2 className="pseudo-line">rzmy</h2>
            </TriggerText>

            {/*<TriggerText threshold=".5" delay=".25">*/}
            {/*  /!*<span>the</span>*!/*/}
            {/*  <h2>Razem</h2>*/}
            {/*</TriggerText>*/}


            <TriggerText threshold=".5" delay=".3">
              <h2>Razem</h2>
              <span className="ml-5">Coś</span>
            </TriggerText>


            <TriggerText threshold=".5" delay=".35">
              {/*<h2 className="pseudo-line">Ciekawego</h2>*/}
              <h2>Fajnego</h2>
              <Link to="/portfolio">
                <img src={arrow} alt="" width="120px" className="ml-5"/>
              </Link>
            </TriggerText>


            {/*<TriggerText threshold=".5" delay=".3">*/}
            {/*  /!*<h2 className="pseudo-line">Ciekawego</h2>*!/*/}
            {/*  <h2 className="pseudo-line">Wego</h2>*/}
            {/*  <Link to="/portfolio">*/}
            {/*    <img src={arrow} alt="" width="100px" />*/}
            {/*  </Link>*/}
            {/*</TriggerText>*/}


          </div>
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

        {/*<section className="services-page-slider break-out">*/}
        {/*  <ArticlesSlider/>*/}
        {/*</section>*/}
        {/*<SectionMarquee firstTape={false} secondTape={true} thirdTape={true} secondTapeScroll={true}*/}
        {/*                thirdTapeScroll={true} dataScrollSpeed="2"/>*/}

        {/*<section className="section-main-about">*/}
        {/*  <div className="main-about-container">*/}
        {/*    <div className="subsec-header">*/}
        {/*      <TriggerText threshold=".5" delay=".5">*/}
        {/*        <h5 className="">01.</h5>*/}
        {/*      </TriggerText>*/}
        {/*      <TriggerText threshold=".5" delay=".5">*/}
        {/*        <h2 className="subsec-title">Proces</h2>*/}
        {/*      </TriggerText>*/}
        {/*      <img*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="1"*/}
        {/*        className="small-star" width="35" src={smallLuminaStar} alt="" />*/}
        {/*    </div>*/}
        {/*    <div className="subsec-body">*/}
        {/*      <div className="ss-body-first">*/}
        {/*        <TriggerImg>*/}
        {/*          <img*/}
        {/*            data-scroll*/}
        {/*            data-scroll-speed="-1"*/}
        {/*            data-scroll-position="top"*/}
        {/*            className="orbit" width="800" src={orbitAbout} alt="" />*/}
        {/*        </TriggerImg>*/}
        {/*      </div>*/}
        {/*      <div className="ss-body-second">*/}
        {/*        <TriggerText threshold=".2" delay=".5">*/}
        {/*          <p>*/}
        {/*            Jako zespół specjalistów w swojej branży wiemy, że spójny wizerunek i obecność w sieci to  obowiązkaowy*/}
        {/*            element w dzisiejszym świecie  dla skutecznego rozwoju każdej firmy.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}

        {/*        <TriggerText threshold=".2" delay=".35">*/}
        {/*          <span className="subsec-span">Jak działamy</span>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="main-about-services">*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}

        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Branding</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie*/}
        {/*            elementy identyfikacji wizualnej były spójne ze sobą jak również odzwierciedlały branżę lub*/}
        {/*            sprzedawany produkt.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Web <br /> dev</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania*/}
        {/*            responsywnych stron internetowych.*/}
        {/*            Realizujemy projekty dla klientów korporacyjnych oraz małych firm.*/}
        {/*            Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania*/}
        {/*            treścią.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Digital</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Zajmujemy się tworzeniem profesjonalnych sklepów internetowych, dopracowanych pod względem*/}
        {/*            mechanizmów sprzedażowych. Tworzone przez nas sklepy internetowe oparte są wyłącznie o*/}
        {/*            sprawdze, a przy tym niezawodne, rozwiązania e-commerce.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Social <br /> media</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie.*/}
        {/*            Idealnym rozwiązaniem są kampanie Google Ads, Facebook oraz pozycjonowanie stron*/}
        {/*            internetowych.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    /!*<TriggerImg threshold="0" delay={1}>*!/*/}
        {/*    /!*  <img*!/*/}
        {/*    /!*    data-scroll*!/*/}
        {/*    /!*    data-scroll-speed="-1"*!/*/}
        {/*    /!*    // data-scroll-position="bottom"*!/*/}
        {/*    /!*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*!/*/}
        {/*    /!*</TriggerImg>*!/*/}

        {/*  </div>*/}
        {/*</section>*/}

        {/*<section>*/}
        {/*  <TriggerImg threshold="0" delay={1}>*/}
        {/*    <img*/}
        {/*      data-scroll*/}
        {/*      data-scroll-speed="-1"*/}
        {/*      // data-scroll-position="bottom"*/}
        {/*      className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}
        {/*  </TriggerImg>*/}
        {/*</section>*/}


        {/*<ProjectsSubsectionOld/>*/}
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

        {/*<section className="section-main-process-new">*/}
        {/*  <div>*/}
        {/*    <div className="subsec-header">*/}
        {/*      <TriggerText threshold=".5" delay=".1">*/}
        {/*        <h5 className="">03.</h5>*/}
        {/*      </TriggerText>*/}
        {/*      <TriggerText threshold=".5" delay=".1">*/}
        {/*        <h2 className="subsec-title">Proces</h2>*/}
        {/*      </TriggerText>*/}
        {/*    </div>*/}
        {/*    /!*<div className="subsec-body">*!/*/}
        {/*    /!*  /!*<div className="ss-body-first"/>*!/*!/*/}
        {/*    /!*  <div className="ss-body-second">*!/*/}
        {/*    /!*    <TriggerText threshold="0" delay=".6">*!/*/}
        {/*    /!*      <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*!/*/}
        {/*    /!*    </TriggerText>*!/*/}
        {/*    /!*    <TriggerText threshold="0" delay=".35">*!/*/}
        {/*    /!*      <span className="subsec-span">Jak działamy</span>*!/*/}
        {/*    /!*    </TriggerText>*!/*/}

        {/*    /!*  </div>*!/*/}
        {/*    /!*</div>*!/*/}

        {/*    /!*<TriggerImg threshold="0" delay={1}>*!/*/}
        {/*    /!*  <img*!/*/}
        {/*    /!*    data-scroll*!/*/}
        {/*    /!*    data-scroll-speed="-1"*!/*/}
        {/*    /!*    // data-scroll-position="bottom"*!/*/}
        {/*    /!*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*!/*/}
        {/*    /!*</TriggerImg>*!/*/}


        {/*    <div className="section-main-process-container">*/}

        {/*      <TriggerImg>*/}
        {/*        <img*/}
        {/*          data-scroll*/}
        {/*          data-scroll-speed="-1"*/}
        {/*          // data-scroll-position="bottom"*/}
        {/*          // data-scroll-offset="bottom"*/}
        {/*          // data-scroll-delay="2"*/}
        {/*          className="orbit" width="800" src={orbitTwo} alt="" />*/}
        {/*      </TriggerImg>*/}

        {/*      <div className="single-process">*/}
        {/*        <div className="header">*/}
        {/*          <TriggerText threshold="0" delay=".4">*/}
        {/*            <span>I.</span>*/}
        {/*          </TriggerText>*/}
        {/*          <TriggerText threshold="0" delay=".6">*/}
        {/*            <h5>Chillwave knausgaard lo-fi try-hard disrupt. flannel quinoa, YOLO pinterest cliche af DIY four dollar toast. </h5>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}
        {/*        <div className="body">*/}
        {/*          <TriggerText threshold="0" delay=".8">*/}
        {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut eaque eos exercitationem ipsam mollitia nihil quis rerum? Consequatur facilis id iusto modi nemo nesciunt nihil odit provident sapiente, sit.</p>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}

        {/*        <TriggerLine threshold=".5" delay=".4">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*      </div>*/}

        {/*      <div className="single-process">*/}
        {/*        <div className="header">*/}
        {/*          <TriggerText threshold="0" delay=".64">*/}
        {/*            <span>II.</span>*/}
        {/*          </TriggerText>*/}
        {/*          <TriggerText threshold="0" delay=".6">*/}
        {/*            <h5>Disrupt. flannel quinoa, YOLO pinterest cliche af DIY four dollar toast. </h5>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}
        {/*        <div className="body">*/}
        {/*          <TriggerText threshold="0" delay=".8">*/}
        {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut eaque eos exercitationem ipsam mollitia nihil quis rerum? Consequatur facilis id iusto modi nemo nesciunt nihil odit provident sapiente, sit.</p>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}

        {/*        <TriggerLine threshold=".5" delay=".4">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*      </div>*/}

        {/*      <div className="single-process">*/}
        {/*        <div className="header">*/}
        {/*          <TriggerText threshold="0" delay=".4">*/}
        {/*            <span>III.</span>*/}
        {/*          </TriggerText>*/}
        {/*          <TriggerText threshold="0" delay=".6">*/}
        {/*            <h5>YOLO pinterest cliche af DIY four dollar toast. </h5>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}
        {/*        <div className="body">*/}
        {/*          <TriggerText threshold="0" delay=".8">*/}
        {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut eaque eos exercitationem ipsam mollitia nihil quis rerum? Consequatur facilis id iusto modi nemo nesciunt nihil odit provident sapiente, sit.</p>*/}
        {/*          </TriggerText>*/}
        {/*        </div>*/}

        {/*        <TriggerLine threshold=".5" delay=".4">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <TriggerText threshold=".5" delay=".4">*/}
        {/*    <div className="learn-more">*/}
        {/*      <a href="/single-project">*/}
        {/*        <span>Sprawdź</span>*/}
        {/*        <span />*/}
        {/*        <span>Więcej</span>*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </TriggerText>*/}

        {/*  /!*<TriggerImg threshold="0" delay={1}>*!/*/}
        {/*  /!*  <img*!/*/}
        {/*  /!*    data-scroll*!/*/}
        {/*  /!*    data-scroll-speed="-1"*!/*/}
        {/*  /!*    // data-scroll-position="bottom"*!/*/}
        {/*  /!*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*!/*/}
        {/*  /!*</TriggerImg>*!/*/}

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
        
        {/*  /!*<TriggerImg threshold="0" delay={1}>*!/*/}
        {/*  /!*  <img*!/*/}
        {/*  /!*    data-scroll*!/*/}
        {/*  /!*    data-scroll-speed="-1"*!/*/}
        {/*  /!*    // data-scroll-position="bottom"*!/*/}
        {/*  /!*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*!/*/}
        {/*  /!*</TriggerImg>*!/*/}
        
        {/*</section>*/}
        
        {/*<section className="services-page-slider break-out">*/}
        {/*  <ArticlesSlider/>*/}
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
