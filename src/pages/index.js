import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/Footer"
import MainScene2 from "../components/MainScene2"
// import Layout from "../components/Layout"
// import Hero from "../components/Hero"
// import Services from "../components/Services"
// import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
export default () => {
  return (
    <>
      <main className="index-page container-fluid">
          {/*<MainScene2/>*/}
        <div className="main-container">
          <h2>Design creates <em>culture</em>. Culture shapes <em>values</em>. <br/> Values determine <em>the future</em></h2>
        </div>
        <div class="bg-circles">
          <div className="blurry-circle bc-1"></div>
          <div className="blurry-circle bc-2"></div>
          <div className="blurry-circle bc-3"></div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
// ...GatsbyImageSharpFluid
