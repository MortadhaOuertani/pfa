import React from "react";
import {
  Footercontainer,
  Footerlink,
  Footerlinkitems,
  Footerlinkscontainer,
  Footerlinkswrapper,
  Footerlinktitle,
  Footerwrap,
  Sociallogo,
  Socialmedia,
  Socialwrap,
  Websiterights,
} from "./css/footer";

const Footer = () => {
  return (
    <Footercontainer>
      <Footerwrap>
        <Footerlinkscontainer>
          <Footerlinkswrapper>
            <Footerlinkitems>
              <Footerlinktitle>About Us</Footerlinktitle>
              <Footerlink to="/signin">How It Works</Footerlink>
              <Footerlink to="/signin">Testamonials</Footerlink>
              <Footerlink to="/signin">Careers</Footerlink>
              <Footerlink to="/signin">Investors</Footerlink>
              <Footerlink to="/signin">Terms Of Services</Footerlink>
            </Footerlinkitems>
            <Footerlinkitems>
              <Footerlinktitle>About Us</Footerlinktitle>
              <Footerlink to="/signin">How It Works</Footerlink>
              <Footerlink to="/signin">Testamonials</Footerlink>
              <Footerlink to="/signin">Careers</Footerlink>
              <Footerlink to="/signin">Investors</Footerlink>
              <Footerlink to="/signin">Terms Of Services</Footerlink>
            </Footerlinkitems>
          </Footerlinkswrapper>
          <Footerlinkswrapper>
            <Footerlinkitems>
              <Footerlinktitle>About Us</Footerlinktitle>
              <Footerlink to="/signin">How It Works</Footerlink>
              <Footerlink to="/signin">Testamonials</Footerlink>
              <Footerlink to="/signin">Careers</Footerlink>
              <Footerlink to="/signin">Investors</Footerlink>
              <Footerlink to="/signin">Terms Of Services</Footerlink>
            </Footerlinkitems>
            <Footerlinkitems>
              <Footerlinktitle>About Us</Footerlinktitle>
              <Footerlink to="/signin">How It Works</Footerlink>
              <Footerlink to="/signin">Testamonials</Footerlink>
              <Footerlink to="/signin">Careers</Footerlink>
              <Footerlink to="/signin">Investors</Footerlink>
              <Footerlink to="/signin">Terms Of Services</Footerlink>
            </Footerlinkitems>
          </Footerlinkswrapper>
        </Footerlinkscontainer>
        <Socialmedia>
          <Socialwrap>
            <Sociallogo to="">Dice</Sociallogo>
            <Websiterights>
              Dice N Win © {new Date().getFullYear()} All rights reserved
            </Websiterights>
          </Socialwrap>
        </Socialmedia>
      </Footerwrap>
    </Footercontainer>
  );
};

export default Footer;
