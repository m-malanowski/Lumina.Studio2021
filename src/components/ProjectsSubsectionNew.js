import React, { useCallback, useLayoutEffect } from "react"
import { useEffect, useState, useRef } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import ProjectsData from "./SampleData"
import { Link } from "gatsby"

// import ImgPlane from "./plane/plane";
import smallStar from "../assets/icons/smallStar.svg"
import TriggerImg from "./TriggerImg"

const useMousePosition = () => {
  const [ mousePosition, setMousePosition ] = React.useState({x:0,y:0})

  useEffect(()=>{

    const updateMousePosition = event => {
      setMousePosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove',updateMousePosition)
  }, [])

  return mousePosition;
}

const getDimensionObject = node => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  }
}

const useSize = () => {
  const [ dimensions, setDimensions] = useState({});
  const [ node, setNode ] = useState(null);

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(()=>{
    if(node){
      const measure = () => setDimensions(getDimensionObject(node))
      measure()
    }
  }, [node])
  return [ref, dimensions]
}


const ProjectsSubsection = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const { x, y } = useMousePosition();
  // console.log(x, y)
  return (
    <>
      {/*<ImgPlane/>*/}
      <section className="section-more-projects" >

        {/*<TriggerImg delay={1.5}>*/}
        {/*  <img*/}
        {/*    data-scroll*/}
        {/*    data-scroll-speed="2"*/}
        {/*    data-scroll-position="top"className="small-star" width="50" src={smallStar} alt="" />*/}
        {/*</TriggerImg>*/}

        {/*<div className="constellation">*/}
        {/*  <div className="stars-wrapper">*/}
        {/*    <img src={smallStar} width={50} alt="" />*/}
        {/*    <img src={smallStar} width={40} alt="" />*/}
        {/*    <img src={smallStar} width={30} alt="" />*/}
        {/*  </div>*/}
        {/*</div>*/}


        <div className="subsec-header mb-5">
          <TriggerText threshold=".5" delay=".5">
            <h5 className="">02.</h5>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">Projekty</h2>
          </TriggerText>
        </div>

        <div className="projects-wrapper">

          {ProjectsData.map(({title, year, imgPath, services}, index) => (
            <Desc key={index} title={title} year={year} imgPath={imgPath} services={services} setActiveIndex={setActiveIndex} index={index} />
          ))}

          <div className="project-img">
            {ProjectsData.map(({src}, index) => {
              const isActive = index === activeIndex;
              const xPos = isActive ? x : 0;
              const yPos = isActive ? y : 0;

              return  <Image key={index} src={src} active={isActive} x={xPos} y={yPos}/>
            })}
          </div>
        </div>

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

export const Desc = ({title, year, services, imgPath, setActiveIndex, index}) => {
  return(
    <div>
      <div className="more-projects-single"
           onMouseEnter={()=>setActiveIndex(index)}
           onMouseLeave={()=>setActiveIndex(-1)}
      >
        <TriggerLine threshold=".5" delay=".5">
          <hr className="animated" />
        </TriggerLine>
        <div className="more-left">
          <TriggerText threshold=".5" delay=".5">
            <span>{year}</span>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h5><Link to={imgPath}>{title}</Link></h5>
          </TriggerText>
        </div>
        <TriggerText threshold=".5" delay=".5">
          <p className="more-right">{services}</p>
        </TriggerText>
      </div>

      <TriggerLine threshold=".5" delay=".5">
        <hr className="animated" />
      </TriggerLine>
    </div>
  )
}

export const Image = ({src, active, x, y}) => {
  const [ref, {width, height}] = useSize();
  return(
    <img
      width="400px"
      className={ active ? 'is-active' : ''}
      src={src}
      ref={ref}
      style={{
        transform: `translate(${ x - width/3 }px, ${ y - height/2 }px)`,
      }}
    />
  )
}

export default ProjectsSubsection
