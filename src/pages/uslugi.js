import React from "react"
import ServicesSlider from "../components/ServicesSlider"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
  return (
    <main className="page-content-wrapper services-page container-fluid">
      <div className="page-content">
        <div className="pc-first-element">
          <h2 className="page-name">Usługi</h2>
        </div>
        <div className="pc-second-element">
          <p className="pc-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo ipsum iusto neque nisi nobis repellendus veniam. <em>Aspernatur beatae enim iste nihil odio officia omnis</em> quasi quisquam, repudiandae, saepe voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur at aut deserunt enim error eum id in modi nostrum numquam perspiciatis recusandae.</p>
          <div className="pc-scroll">
            <p>Scroll</p>
          </div>
        </div>
      </div>
      <ServicesSlider/>

    </main>
  )
}

export default About
