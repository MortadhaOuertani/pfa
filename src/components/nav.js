import React, { useState, useEffect } from "react";
import {
  Menuitems,
  Navlinks,
  MobileIcon,
  Navbar,
  NavContainer,
  NavLogo,
  Navmenu,
  NavBtn,
  NavBtnLink,
  Rolebutton
} from "./css/navstyle";
import { FaBars } from "react-icons/fa";
import { animateScroll as Scroll } from "react-scroll/modules";
import { useDispatch } from "react-redux";
import { Logout } from "../redux/action/authactions";
import { Navigate, useNavigate } from "react-router-dom";

const Navv = ({ toggle, user }) => {
  const [invis, setinvis] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setinvis(true);
    else setinvis(false);
  };
 const navigate=useNavigate()
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const ToggleHome = () => {
    Scroll.scrollToTop();
  };
const dispatch=useDispatch()
const LogoutHandler=()=>{
  dispatch(Logout())
  navigate.to("/")
  window.location.reload()
}

  return (
    <>
      <Navbar invis={invis}>
        <NavContainer>
          <Navmenu style={{marginTop:"50px"}}>
            <Menuitems>
              <NavLogo onClick={ToggleHome} to="/">
                Dice n Win
              </NavLogo>
            </Menuitems>
            <Menuitems>
            {
            user.role==="ADMIN"?(<Rolebutton to="#">Admin</Rolebutton>
            ):(""
            )
            }
            </Menuitems>
          </Navmenu>
          <MobileIcon onClick={toggle}>
            <FaBars size={25} />
          </MobileIcon>
          <Navmenu>
            <Menuitems>
              <Navlinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                about
              </Navlinks>
            </Menuitems>
            <Menuitems>
              <Navlinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                discover
              </Navlinks>
            </Menuitems>
            <Menuitems>
              <Navlinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                services
              </Navlinks>
            </Menuitems>
            <Menuitems>
            </Menuitems>
          </Navmenu>
         {
          !user.isConnected?(<> <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn></>):<NavBtn>
            <NavBtnLink to="/" onClick={LogoutHandler}>Logout</NavBtnLink>
          </NavBtn>
         }
          
        </NavContainer>
      </Navbar>
    </>
  );
};

export default Navv;
