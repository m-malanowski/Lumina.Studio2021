import React, { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"

const SectionMarquee = ({ firstTape, secondTape, thirdTape }) => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])


  return (
    <>
      <section className="section-marquee break-out">
        <div className="tapes-container">
          {
            firstTape ? (
              <FirstTape />
            ) : null
          }
          {
            secondTape ? (
              <SecondTape />
            ) : null
          }
          {
            thirdTape ? (
              <ThirdTape />
            ) : null
          }

        </div>
      </section>
    </>
  )
}


const FirstTape = ({ title }) => {
  return (
    <>
      <div className="first-tape marquee animate">
        <span className="marquee__inner"> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span>  <span>Together</span>  </span>
      </div>
    </>
  )
}

const SecondTape = ({ title }) => {
  return (
    <>
      <div className="second-tape marquee animate">
        <span className="marquee__inner backwards"> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> </span>
      </div>
    </>
  )
}

const ThirdTape = ({ title }) => {
  return (
    <>
      <div className="third-tape marquee animate">
        <span className="marquee__inner "> <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span> </span>
      </div>
    </>
  )
}

export default SectionMarquee