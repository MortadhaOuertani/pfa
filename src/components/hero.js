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
        <HeroH1>Making money never been easier</HeroH1>
        <HeroP>
          Signup and become A Milionaire today just for 100$ and live your
          idieal life
        </HeroP>
        <HeroBtnWraper>
          <Button to="signup" primary="true" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWraper>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;
