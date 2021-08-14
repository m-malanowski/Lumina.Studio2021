import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import arrow from "../assets/icons/right-arrow.svg"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import TriggerLine from "../components/TriggerLine"
import TriggerImg from "../components/TriggerImg"
// import smallStar from "../assets/icons/smallStar.svg"
import orbitAboutPage from "../assets/icons/orbitPortfolioPage.svg"
import orbitMoreSection from "../assets/icons/orbitMoreSection.svg"
import SEO from "../components/SEO"

// ...GatsbyImageSharpFluid
const AgencjaInteraktywnaRealizacje = ({ data }) => {

  const containerRef = useRef(null)
  // const image = getImage(data.project.cover)

  return (
    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna - Realizacje"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >

        <main className="works-page container-fluid" data-scroll-container ref={containerRef}>
          <div className="works-page-container">

            <section className="section-portfolio-container">
              <div className="main-container">

                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque nihil nulla quod sapiente! Aut culpa error esse expedita fuga illum itaque nesciunt obcaecati, placeat quod reiciendis, sint, veritatis voluptatibus?</h2>

                {/*<TriggerText threshold=".5" delay=".2">*/}
                {/*  <h2*/}
                {/*    data-scroll*/}
                {/*    data-scroll-speed="-1"*/}
                {/*    data-scroll-direction="horizontal"*/}
                {/*  >Nasze</h2>*/}
                {/*</TriggerText>*/}
                
                {/*<TriggerText threshold=".5" delay=".3">*/}
                {/*  <h2*/}
                {/*    data-scroll*/}
                {/*    data-scroll-speed="1"*/}
                {/*    data-scroll-direction="horizontal"*/}
                {/*  >Prace</h2>*/}
                {/*</TriggerText>*/}
                
                {/*<TriggerImg delay={1}>*/}
                {/*  <img*/}
                {/*    data-scroll*/}
                {/*    data-scroll-speed="1"*/}
                {/*    data-scroll-position="top"*/}
                {/*    className="orbit-blog" width="70%" src={orbitAboutPage} alt="" />*/}
                {/*</TriggerImg>*/}
                
              </div>
            </section>

            {/*<div className="main-works-container mt-5">*/}
            
            {/*  {data.allStrapiProjects.nodes.map(node => (*/}
            {/*    <div     key={node.id}>*/}
            {/*      /!*<TriggerLine threshold=".5" delay=".5">*!/*/}
            {/*      /!*  <hr className="animated" />*!/*/}
            {/*      /!*</TriggerLine>*!/*/}
            {/*      <div*/}
            {/*        className="single-work">*/}
            {/*        <div className="singe-work-left">*/}
            {/*          <span></span>*/}
            
            {/*          <TriggerText threshold=".5" delay=".8">*/}
            {/*            <h2>{node.title}</h2>*/}
            {/*          </TriggerText>*/}
            
            {/*          <TriggerText threshold=".5" delay=".9">*/}
            {/*            <p>{node.services}</p>*/}
            {/*          </TriggerText>*/}
            
            {/*        </div>*/}
            
            {/*        <TriggerImg threshold=".8" delay="1">*/}
            {/*          <img width="100%" src={node.cover.url} alt="" />*/}
            {/*        </TriggerImg>*/}
            
            {/*        /!*<GatsbyImage image={node.cover} alt="elo elo" />*!/*/}
            
            {/*        <div className="singe-work-right">*/}
            {/*          <div className="learn-more">*/}
            
            {/*            <TriggerText threshold=".5" delay=".2">*/}
            {/*              <Link className="" to={"/agencja-interaktywna-realizacje/" + node.slug}>*/}
            {/*                <span>Sprawdź</span>*/}
            {/*                <span />*/}
            {/*                <span>Więcej</span>*/}
            {/*              </Link>*/}
            {/*            </TriggerText>*/}
            
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            
            {/*      <TriggerLine threshold=".5" delay=".5">*/}
            {/*        <hr className="animated" />*/}
            {/*      </TriggerLine>*/}
            {/*    </div>*/}
            
            {/*  ))}*/}
            
            {/*</div>*/}

            <div className="new-section-works-container">
              {data.allStrapiProjects.nodes.map(node => (

                // <TriggerImg threshold=".8" delay="1">
                //   <img width="100%" src={node.cover.url} alt="" />
                <div style={{ backgroundImage: `url(${node.cover.url})` }}>
                  <Link to={"/agencja-interaktywna-realizacje/" + node.slug}>
                    <h2>{node.title}</h2>
                    <p>{node.services}</p>
                    {/*<h2>{node.title}</h2>*/}
                  </Link>
                </div>

                // </TriggerImg>
              ))}
            </div>

          </div>

          <section className="section-show-more">
            <div className="main-container">
              <TriggerText threshold=".5" delay=".2">
                <h2>Stwó</h2>
              </TriggerText>
              <TriggerText threshold=".5" delay=".25">
                <h2 className="pseudo-line">rzmy</h2>
              </TriggerText>

              <TriggerText threshold=".5" delay=".3">
                <h2>Razem coś</h2>
                {/*<span className="ml-5">Coś</span>*/}
              </TriggerText>

              <TriggerText threshold=".5" delay=".35">
                <h2>Fajnego</h2>
                <Link to="/kontakt">
                  <img src={arrow} alt="" width="120px" className="ml-5"/>
                </Link>
              </TriggerText>
            </div>

            <TriggerImg delay={.01} threshold={0} cName="orbit-wrapper">
              <img
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
                className="orbit" width="95%" src={orbitMoreSection} alt="" />
            </TriggerImg>
          </section>


          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                          secondTapeScroll={true}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />

          <Worldwide />

          <LowerFooter />

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      id
      title
      slug
      services
      cover{
        url
                 localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
      date
      desc
    }
  }
}
`

export default AgencjaInteraktywnaRealizacje
