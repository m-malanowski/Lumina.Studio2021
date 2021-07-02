import React from "react"
import { useEffect, useState, useRef } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion"


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
  const [mouse, setMouse] = useState([0, 0, false])
  const [mx, my, isActive] = mouse
  return (
    <>
      <section className="section-more-projects"
        // onMouseMove={e => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
        // onMouseMove={e => console.log(mouseInfo.now =  { x: e.pageX, y: e.pageY })}
        // onMouseMove={handleMouse}
      >

        {/*<ImagePlaceholder*/}
        {/*  // position={imagePositions}*/}
        {/*/>*/}
        <AnimatePresence>
        {images.map((item, id) => (
          isActive && (
            <motion.img
              key={id}
              className="main-img"
              initial={{
                opacity: 0
              }}
              animate={{
                x: mx,
                y: my,
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              src={item.src}
              alt="activewear" data-image="activewear"
            />
          )
        ))}
        </AnimatePresence>


        {/*<AnimatePresence>*/}
        {/*  {isActive && (*/}
        {/*    <motion.img*/}
        {/*      className="main-img"*/}
        {/*      initial={{*/}
        {/*        opacity: 0,*/}
        {/*      }}*/}
        {/*      animate={{*/}
        {/*        x: mx,*/}
        {/*        y: my,*/}
        {/*        opacity: 1,*/}
        {/*      }}*/}
        {/*      exit={{*/}
        {/*        opacity: 0,*/}
        {/*      }}*/}
        {/*      src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Factivewear-3.jpg?alt=media&token=45174749-6fc9-4a23-b671-4fba4ca2d0f6"*/}
        {/*      alt="activewear" data-image="activewear"*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</AnimatePresence>*/}


        <div className="subsec-header">

          <TriggerText threshold=".5" delay=".5">
            <h5 className="">02.</h5>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">Prace</h2>
          </TriggerText>
        </div>

        <motion.div className="more-projects-single mt-5" data-label="dresses"
                    onMouseMove={e => {
                      const { offsetTop, offsetLeft } = e.currentTarget
                      setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true])
                    }}
                    onMouseEnter={() => setMouse([mx, my, true])}
                    onMouseLeave={() => setMouse([mx, my, false])}
        >
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2019</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5><a href="@">Antyegzekucja</a></h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Banding </p>
          </TriggerText>
        </motion.div>

        <div className="more-projects-single"
             data-label="heels"
             onMouseMove={e => {
               const { offsetTop, offsetLeft } = e.currentTarget
               setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true])
             }}
             onMouseEnter={() => setMouse([mx, my, true])}
             onMouseLeave={() => setMouse([mx, my, false])}
        >
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2020</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Carra</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Strategy </p>
          </TriggerText>
        </div>

        <div className="more-projects-single">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2020</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Radca prawny tomczak</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Branding </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" data-label="joggers">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2021</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Antyegzekucja</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" data-label="kimonos">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2021</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Odszkodowania</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign </p>
          </TriggerText>
        </div>

        <TriggerLine threshold=".5" delay=".5">
          <hr className="animated" />
        </TriggerLine>

        <TriggerText threshold=".5" delay=".4">
          <div className="learn-more">
            <a href="/portfolio">
              <span>Sprawdź</span>
              <span />
              <span>Więcej</span>
            </a>
          </div>
        </TriggerText>

      </section>
    </>
  )
}

export default ProjectsSubsection
