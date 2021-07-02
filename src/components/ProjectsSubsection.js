import React from "react"
import { useEffect, useState, useRef } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion"
import CurtainSlider from "./curtain-slider/CurtainSlider"


const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Factivewear-3.jpg?alt=media&token=45174749-6fc9-4a23-b671-4fba4ca2d0f6",
    alt: "elo"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fbeach-wear.jpg?alt=media&token=e21ab7bb-0ca3-4780-9243-25c0484e89a8",
    alt: "elo"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fdresses.jpg?alt=media&token=0cad3820-b2c9-43a0-8503-66eb81db7dab",
    alt: "elo"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fheels.jpg?alt=media&token=e8a42ce6-3242-4f27-9c24-404b3c0eaf15",
    alt: "elo"
  }
]


const ProjectsSubsection = () => {
  return (
    <>
      <section className="projects-subsection">

        <div className="subsec-header">
          <TriggerText threshold=".5" delay=".5">
            <h5 className="">02.</h5>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">Projekty</h2>
          </TriggerText>
        </div>


        <CurtainSlider/>

        {/*<motion.div className="imgs-wrapper">*/}
        {/*  <img src={images[1].src} alt="" />*/}
        {/*  <img src={images[2].src} alt="" />*/}
        {/*  <img src={images[3].src} alt="" />*/}
        {/*  <img src={images[0].src} alt="" />*/}
        {/*</motion.div>*/}


      </section>
    </>
  )
}

export default ProjectsSubsection
