import React, { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Footer from "./Footer"
import { layoutVariants, transition } from '../components/Variants'
import Scroll from "./LocomotiveScroll"
import starTransition from "../assets/icons/clover.svg"
import ProjectsSubsection from "./ProjectsSubsection"
// import { Curtains } from "react-curtains";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/*<Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>*/}
      <Navbar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />

      {/*<Scroll callbacks={location}  />*/}

      {/*<LocomotiveScrollProvider*/}
      {/*  options={*/}
      {/*    {*/}
      {/*      smooth: true,*/}
      {/*      // ... all available Locomotive Scroll instance options*/}
      {/*    }*/}
      {/*  }*/}
      {/*  watch={*/}
      {/*    [*/}
      {/*      //...all the dependencies you want to watch to update the scroll*/}
      {/*    ]*/}
      {/*  }*/}
      {/*  containerRef={containerRef}*/}
      {/*>*/}

      {/*<AnimatePresence  >*/}
      {/*  <motion.img*/}
      {/*    location={location}*/}
      {/*    key={location.key}*/}
      {/*    initial="enter"*/}
      {/*    animate="enter"*/}
      {/*    exit="hidden"*/}
      {/*    variants={{*/}
      {/*      enter: {  scale: .001, display: 'none',*/}
      {/*        transition: {  duration: 1.0, ease: [.17,.67,.83,.67]}*/}
      {/*      },*/}
      {/*      hidden: {  display: "block" ,  scale: 20,  transformOrigin: "center",*/}
      {/*        transition: { delay:  .4 , duration: .9, ease: [.17,.67,.83,.67]}*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    data-scroll data-scroll-sticky*/}
      {/*    className="star-transition" src={starTransition} width="1220" alt=""/>*/}
      {/*</AnimatePresence>*/}


      <AnimatePresence initial={true} exitBeforeEnter>

        <motion.div
          id="elo"
          location={location}
          key={location.key}
          variants={layoutVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={transition}
          // data-scroll-container
          // ref={containerRef}
        >
          {/*{console.log(location)}*/}
          {children}
        </motion.div>
      </AnimatePresence>
      {/*</LocomotiveScrollProvider>*/}
      {/*</Curtains>*/}
    </>
  )
}

export default Layout
