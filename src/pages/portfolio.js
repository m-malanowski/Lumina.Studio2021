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
import smallStar from "../assets/icons/smallStar.svg"
import orbitAboutPage from "../assets/icons/orbitPortfolioPage.svg"

// ...GatsbyImageSharpFluid
const Portfolio = ({ data }) => {

  const containerRef = useRef(null)
  // const image = getImage(data.project.cover)

  return (
    <>

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >

        <main className="works-page container-fluid" data-scroll-container ref={containerRef}>
          <section className="works-page-container">

            {/*<div className="subsec-header">*/}
            {/*  <TriggerText threshold=".5" delay=".1">*/}
            {/*    <h5 className="">01.</h5>*/}
            {/*  </TriggerText>*/}
            {/*  <TriggerText threshold=".5" delay=".1">*/}
            {/*    <h2 className="subsec-title">Nasze prace</h2>*/}
            {/*  </TriggerText>*/}
            {/*</div>*/}

            <section className="section-portfolio-container">
              <div className="main-container">

                <TriggerText threshold=".5" delay=".2">
                  <h2
                    data-scroll
                    data-scroll-speed="-1"
                    data-scroll-direction="horizontal"
                  >Nasze</h2>
                </TriggerText>

                {/*<TriggerText threshold=".5" delay=".25">*/}
                {/*  <span>into</span>*/}
                {/*  <h2>Van</h2>*/}
                {/*</TriggerText>*/}

                <TriggerText threshold=".5" delay=".3">
                  <h2
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-direction="horizontal"
                  >Prace</h2>
                </TriggerText>

                <TriggerImg delay={1}>
                  <img
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-position="top"
                    className="orbit-blog" width="70%" src={orbitAboutPage} alt="" />
                </TriggerImg>
              </div>
            </section>

            <div className="main-works-container mt-5">

              {data.allStrapiProjects.nodes.map(node => (
                <div     key={node.id}>
                  {/*<TriggerLine threshold=".5" delay=".5">*/}
                  {/*  <hr className="animated" />*/}
                  {/*</TriggerLine>*/}
                  <div
                    className="single-work">
                    <div className="singe-work-left">
                      <p></p>

                      <TriggerText threshold=".5" delay=".8">
                        <h2>{node.title}</h2>
                      </TriggerText>

                      <TriggerText threshold=".5" delay=".9">
                        <p>{node.services}</p>
                      </TriggerText>

                    </div>

                    <TriggerImg threshold=".8" delay="1">
                      <img width="100%" src={node.cover.url} alt="" />
                    </TriggerImg>

                    {/*<GatsbyImage image={node.cover} alt="elo elo" />*/}

                    <div className="singe-work-right">
                      <div className="learn-more">

                        <TriggerText threshold=".5" delay=".2">
                          <Link className="" to={"/portfolio/" + node.slug}>
                            <span>Sprawdź</span>
                            <span />
                            <span>Więcej</span>
                          </Link>
                        </TriggerText>

                      </div>
                    </div>
                  </div>

                  <TriggerLine threshold=".5" delay=".5">
                    <hr className="animated" />
                  </TriggerLine>
                </div>

              ))}
              {/*<TriggerLine threshold=".5" delay=".5">*/}
              {/*  <hr className="animated" />*/}
              {/*</TriggerLine>*/}

            </div>
          </section>

          <section className="section-show-more">

            <div className="constellation">
              <div className="stars-wrapper">
                <img src={smallStar} width={50} alt=""
                     data-scroll
                     data-scroll-speed="-2"
                />
                <img src={smallStar} width={40} alt=""
                     data-scroll
                     data-scroll-speed="-1"
                />
                <img src={smallStar} width={30} alt=""
                     data-scroll
                     data-scroll-speed="-2"
                />
              </div>
            </div>

            <div className="main-container">

              <TriggerText threshold=".5" delay=".2">
                <h2>Stwó</h2>
              </TriggerText>
              <TriggerText threshold=".5" delay=".25">
                <h2 className="pseudo-line">rzmy</h2>
              </TriggerText>

              <TriggerText threshold=".5" delay=".3">
                <h2>Razem</h2>
                <span className="ml-5">Coś</span>
              </TriggerText>

              <TriggerText threshold=".5" delay=".35">
                {/*<h2 className="pseudo-line">Ciekawego</h2>*/}
                <h2>Fajnego</h2>
                <Link to="/kontakt">
                  <img src={arrow} alt="" width="120px" className="ml-5" />
                </Link>
              </TriggerText>

            </div>
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

export default Portfolio
