import React, { useState } from "react";
import { Button } from "./buttonElement";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWraper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroVideo,
} from "./css/herostyle";
import video from "./herovid.mp4";
const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Start a life full of adventure and excitement</HeroH1>
        <HeroP>Chekout new interesting places to visit</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;
