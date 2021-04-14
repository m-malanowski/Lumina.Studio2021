import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const ServicesSlider = (props) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 service-slide">
        <h5>11-04-2021</h5>
        <div className="ss-bottom">
          <h2>Post numerI</h2>
          <p>lorem ipsum coś tam, coś tam</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2 service-slide">
        <h5>01-04-2021</h5>
        <div className="ss-bottom">
          <h2>Post numerII</h2>
          <p>lorem ipsum coś tam, coś tam</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3 service-slide">
        <h5>04-03-2021</h5>
        <div className="ss-bottom">
          <h2>Post numerIII</h2>
          <p>Elo Elo trzy dwa zero</p>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4 service-slide">4</div>
      <div className="keen-slider__slide number-slide5 service-slide">5</div>
    </div>
  )
}
export default ServicesSlider