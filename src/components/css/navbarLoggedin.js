import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Navbar = styled.nav`
  background: black;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 5;
  box-shadow: 2px 4px 10px 4px grey;

  @media screen and(max-width:960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  display: flex;
  color: white;
  justify-self: start;
  margin-left: 24px;
  text-decoration: none;
  justify-content: center;
  margin-top: 5px;
  font-weight: bold;
  align-items: center;
  font-size: 1.2rem;
  &:hover {
    color: #01bf71;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 100%);
  }
`;
export const Navmenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;
export const Menuitems = styled.li`
  height: 80px;
`;

export const Menuitemst = styled.li`
  height: 80px;
  margin-left: 100px;
  margin-top: 60px;
`;
export const BtnLink = styled(LinkR)`
  margin-top: 50px;
  color: white;
  text-decoration: none;
  font-weight: 650;
  &:hover {
    color: #d9d8d9;
  }
`;
export const Btn = styled.button`
  margin-top: 20px;
  color: white;
  border: none;
  background-color: black;
  &:hover {
    background-color: inherit;
  }
`;
export const Navlinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #01bf71;
  }
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  align-items: center;
  align-self: center;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #14c2c5;
    color: white;
  }
`;
export const Rolebutton = styled(LinkR)`
  text-decoration: none;
  color: white;
  margin-left: 20px;
  align-items: center;
  font-size: 1rem;
  &:hover {
    color: white;
  }
`;
export const NavLogoM = styled(LinkR)`
  display: none;
  &:hover {
    color: #01bf71;
  }
  @media screen and (max-width: 786px) {
    display: flex;
    color: white;
    justify-self: start;
    margin-left: 30%;
    text-decoration: none;
    justify-content: center;
    margin-top: 5px;
    font-weight: bold;
    align-items: center;
    font-size: 1.2rem;
  }
`;