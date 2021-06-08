import React from "react"
import { motion, AnimatePresence } from "framer-motion"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Footer from "./Footer"
import { layoutVariants, transition } from '../components/Variants'

const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <AnimatePresence initial={true} exitBeforeEnter>
        <motion.div
          location={location}
          key={location.key}
          variants={layoutVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={transition}
        >
          {/*{console.log(location)}*/}
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout
