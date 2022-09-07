import React from "react";
import Footer from "../Footer";
import Hero from "../hero";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjfour,
} from "../infoSections/Data";
import InfoSection from "../infoSections/infoSection";
const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjfour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
