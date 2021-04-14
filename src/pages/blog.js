import React from "react"
import Footer from "../components/Footer"
import ArticlesSlider from "../components/ArticlesSlider"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return (
    <>
      <main className="page-content-wrapper blog-page container-fluid">
        <div className="page-content">
          <div className="pc-first-element">
            <h2 className="page-name">Blog</h2>
          </div>
          <div className="pc-second-element">
            <p className="pc-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo ipsum iusto neque nisi nobis repellendus veniam. <em>Aspernatur beatae enim iste nihil odio officia omnis</em> quasi quisquam, repudiandae, saepe voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aspernatur at aut deserunt enim error eum id in modi nostrum numquam perspiciatis recusandae.</p>
            <div className="pc-scroll">
              <p>Scroll</p>
            </div>
          </div>
        </div>
        <ArticlesSlider/>
      </main>
      <Footer/>
    </>
  )
}

export default Blog
