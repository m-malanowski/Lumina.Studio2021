import star from "../assets/icons/star.svg"
import globe from "../assets/icons/globe.svg"
import React from "react"
import thumbUp from "../assets/icons/thumbUp.svg"
import {motion, useTransform, useViewportScroll} from "framer-motion";
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
      <img width="150" className="thumb-up" src={thumbUp} alt="" />
      <div className="worldwide-container">
        <motion.img
          // style={{elo}}
          // style={{
          //   rotate: scaleAnim,
          // }}
          className="star" width="550" src={star} alt="Agencja interaktywna lumina studio" />
        <h2 className=" w-100">Lumina - studio</h2>
        <h3>worldwide</h3>
        <img className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
      </div>
    </section>
  )
}

export default Worldwide


