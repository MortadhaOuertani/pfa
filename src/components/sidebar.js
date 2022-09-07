
import React from "react";
import {Icon, CloseIcon, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper, SideBtnWrap } from "./css/sidebar";

const Sidebar = ({toggle,isOpen}) => {
  return (  
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about"onClick={toggle}>About</SideBarLink>
        
          <SideBarLink to="discover"onClick={toggle}>Discover</SideBarLink>
        
          <SideBarLink to="services"onClick={toggle}>Services</SideBarLink>
       
          <SideBarLink to="signup"onClick={toggle}>Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">
            Sign In
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
