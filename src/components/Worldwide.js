import star from "../assets/icons/star.svg"
import globe from "../assets/icons/globe.svg"
import mickyAnimation from "../assets/imgs/mickey-main.gif"
import React from "react"
import thumbUp from "../assets/icons/thumbUp.svg"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import {motion, useTransform, useViewportScroll} from "framer-motion"
import orbitMain from "../assets/icons/orbitMainView.png"
const Worldwide = () => {

  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [ .1, .2, 120])

  const text0 = () => {
    console.log('elo')
  }

  return (
    <section
      data-scroll data-scroll-call="text0"
      className="section-worldwide"
    >
      {/*<div className="bg-circles-section">*/}
      {/*  <div className="blurry-circle bc-4"/>*/}
      {/*</div>*/}
      <img width="150" className="thumb-up" src={mickyAnimation} alt="" />
      <div className="worldwide-container">
        <TriggerImg delay={.1}>
          <img
            // data-scroll
            // data-scroll-speed="2"
            className="star" width="500" src={star} alt="Agencja interaktywna lumina studio"
          />
        </TriggerImg>


        <TriggerText threshold=".2" delay=".5">
          <h2 className=" w-100">Lumina - studio</h2>
        </TriggerText>
        <TriggerText threshold=".2" delay=".5">
          <h3>worldwide</h3>
        </TriggerText>

        <TriggerImg delay={1} threshold={0}>
          {/*<img*/}
          {/*  data-scroll*/}
          {/*  data-scroll-speed="-2"*/}
          {/*  data-scroll-position="top"*/}
          {/*  className="orbit" width="900" src={orbitMain} alt="" />*/}
          <img
            data-scroll
            data-scroll-speed="2"
            className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
        </TriggerImg>

      </div>
    </section>
  )
}

export default Worldwide


