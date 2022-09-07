import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import {Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const SideBarContainer = styled.aside`
    position:fixed;
    z-index:999;
    height:100%;
    width:100%;
    display:grid;
    align-items:center;
    background:#0d0d0d;
    transition: 0.3s ease-in-out;
    left:0px;
    top:${({isOpen})=>(isOpen?'0':'-100%')};
    opacity:${({isOpen})=>(isOpen?'100%':'0%')}
    `
    export const CloseIcon = styled(FaTimes)`
        color:white;
    `
    export const Icon = styled.div`
        position:absolute;
        top:1.2rem;
        right:1.5rem;
        background:transparent;
        cursor:pointer;
        outline:none;
        font-size:2rem;
    `
    export const SideBarWrapper = styled.div`
        color:white;

    `
    export const SideBarMenu = styled.div`
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:repeat(6,80px);
        text-align:center;
    @media screen and(max-width:480px){

        grid-template-rows:repeat(6,60px);
    }
    `
    export const SideBarLink = styled(LinkS)`
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        cursor:pointer;
        text-decoration:none;
        list-style:none;
        transition:0.2s ease-in-out;
        font-size:1.5rem;

&:hover{
    color:#01bf71;
    transition:0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`
export const SideBarRoute = styled(LinkR)`
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    background:#01bf71;
    border-radius:50px;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    white-space:nowrap;
    cursor:pointer;

&:hover{
    transition:all 0.2s ease-in-out;
    background:white;
    color:#010606;
}
`