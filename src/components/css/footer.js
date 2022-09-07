import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footercontainer = styled.div`
  background-color: #101522;
`;
export const Footerwrap = styled.div`
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
    margin: 0 auto;
  max-width: 1100px;
`;
export const Footerlinkscontainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and(max-width:820px) {
    padding-top: 32px;
  }
`;

export const Footerlinkswrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const Footerlinkitems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  maring: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: 420px) {
    maring: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const Footerlinktitle = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const Footerlink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
export const Socialmedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;
export const Socialwrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0px 300px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 40px auto 0px auto;
  }
`;
export const Sociallogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  white-space: nowrap;
  padding-right: 20px;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: #01bf71;
  }
`;
export const Websiterights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
