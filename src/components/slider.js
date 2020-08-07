import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"

import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/custom-animations/cube-animation.css"
import "react-awesome-slider/dist/custom-animations/fall-animation.css"
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css"
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css"
import "react-awesome-slider/dist/custom-animations/open-animation.css"
import "./styles/slider.scss"

const AutoplaySlider = withAutoplay(AwesomeSlider)
const ANIMATIONS = [
  "cubeAnimation",
  "fallAnimation",
  "openAnimation",
  "foldOutAnimation",
]

const Slider = ({ type, photos, change = false, autoPlay = false }) => {
  const [animation, setAnimation] = useState(type)

  const changeAnimation = e => {
    if (change) {
      setAnimation(ANIMATIONS[e.currentIndex])
    }
  }
  return (
    <AutoplaySlider
      play={autoPlay}
      animation={animation}
      interval={3000}
      onTransitionEnd={changeAnimation}
    >
      <div className="slider-block">
        <BackgroundImage
          Tag="section"
          fluid={photos[0].childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className="bg-image"
        ></BackgroundImage>
      </div>
      <div className="slider-block">
        <BackgroundImage
          Tag="section"
          fluid={photos[1].childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className="bg-image"
        ></BackgroundImage>
      </div>
      <div className="slider-block">
        <BackgroundImage
          Tag="section"
          fluid={photos[2].childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className="bg-image"
        ></BackgroundImage>
      </div>
      <div className="slider-block">
        <BackgroundImage
          Tag="section"
          fluid={photos[3].childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className="bg-image"
        ></BackgroundImage>
      </div>
    </AutoplaySlider>
  )
}

export default Slider
