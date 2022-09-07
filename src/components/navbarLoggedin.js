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
const dispatch=useDispatch()
const LogoutHandler=()=>{
  dispatch(Logout())
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

export default Navbarloggedin;
