import React, { useState, useEffect } from "react"

const SectionMarquee = ({ firstTape, secondTape, thirdTape, onScroll, firstTapeScroll, secondTapeScroll, thirdTapeScroll  }) => {
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
            firstTape && !firstTapeScroll
              ? (<FirstTape/>)
              : ( firstTapeScroll ? ( <FirstTapeScroll/> ) : null)
          }
          {
            secondTape && !secondTapeScroll
              ? (<SecondTape/>)
              : ( secondTapeScroll ? ( <SecondTapeScroll/> ) : null)
          }
          {
            thirdTape && !thirdTapeScroll
              ? (<ThirdTape/>)
              : ( thirdTapeScroll ? ( <ThirdTapeScroll/> ) : null)
          }
        </div>
      </section>
    </>
  )
}

const FirstTape = () => {
  return (
    <>
      <div className="first-tape-wrapper">
        <div className="first-tape animate marquee ">
          <span className="marquee__inner"> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span>  <span>Together</span>  </span>
        </div>
      </div>
    </>
  )
}

const FirstTapeScroll = () => {
  return (
    <>
      <div className="first-tape-wrapper">
        <div className="first-tape"
             data-scroll
             data-scroll-speed="2"
             data-scroll-position="top"
             data-scroll-direction="horizontal"
        >
          <span className="marquee__inner"> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span>  <span>Together</span>  </span>
        </div>
      </div>
    </>
  )
}

const SecondTape = () => {
  return (
    <>
      <div className="second-tape-wrapper">
        <div className="second-tape marquee animate">
          <span className="marquee__inner backwards"> <span>Work</span> <span>Work</span>  <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> </span>
        </div>
      </div>
    </>
  )
}

const SecondTapeScroll = () => {
  return (
    <>
      <div className="second-tape-wrapper">
        <div className="second-tape"
          data-scroll
          data-scroll-speed="-1"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          <span className="marquee__inner"> <span>Work</span> <span>Work</span>  <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> </span>
        </div>
      </div>
    </>
  )
}

const ThirdTape = () => {
  return (
    <>
      <div className="third-tape-wrapper">
        <div className="third-tape">
          <span className="marquee__inner "> <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span> </span>
        </div>
      </div>
    </>
  )
}

const ThirdTapeScroll = () => {
  return (
    <>
      <div className="third-tape-wrapper"
           data-scroll
           data-scroll-speed="-1"
           data-scroll-position="top"
           data-scroll-direction="horizontal"
      >
        <div className="third-tape">
          <span className="marquee__inner"> <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span> </span>
        </div>
      </div>
    </>
  )
}


export default SectionMarquee
