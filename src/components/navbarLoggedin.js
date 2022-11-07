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
  Rolebutton,
  Btn,
  BtnLink,
  Menuitemst,
  NavLogoM,
} from "./css/navbarLoggedin";
import { FaBars } from "react-icons/fa";
import { animateScroll as Scroll } from "react-scroll/modules";
import { useDispatch } from "react-redux";
import { Logout } from "../redux/action/authactions";

const Navbarloggedin = ({ toggle, user }) => {
  const [invis, setinvis] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setinvis(true);
    else setinvis(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const ToggleHome = () => {
    Scroll.scrollToTop();
  };
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(Logout());
  };

  return (
    <>
      <Navbar invis={invis}>
        <NavContainer>
        <NavLogoM onClick={ToggleHome} to="/">
                Dreamscape Direct
              </NavLogoM>
          <Navmenu style={{ marginTop: "50px" }}>
            <Menuitems>
              <NavLogo onClick={ToggleHome} to="/">
                Dreamscape Direct
              </NavLogo>
              
            </Menuitems>
            <Menuitems>
              {user.role == "ADMIN" ? (
                <Rolebutton to="#">Admin</Rolebutton>
              ) : (
                ""
              )}
            </Menuitems>
          </Navmenu>
          <Navmenu>
            <Menuitemst>
            <BtnLink to="/more">Post</BtnLink>              
            </Menuitemst>
            <Menuitemst>
            <BtnLink to="/blog">blog</BtnLink>              
            </Menuitemst>
          </Navmenu>
          <MobileIcon onClick={toggle}>
          </MobileIcon>
          {!user.isConnected ? (
            <>
              {" "}
              <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
            </>
          ) : (
            <NavBtn>
              <NavBtnLink to="/" onClick={LogoutHandler}>
                Logout
              </NavBtnLink>
            </NavBtn>
          )}
        </NavContainer>
      </Navbar>
    </>
  );
};

export default Navbarloggedin;
