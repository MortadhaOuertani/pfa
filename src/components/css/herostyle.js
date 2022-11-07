import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward } from 'react-icons/md';


export const HeroContainer = styled.div`
    height:100vh;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:1;
    display:flex;
    :before{
        content:'';
        height:100vh;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index:2;
    }
 `
export const HeroBg = styled.div`

    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    width:100%;
    height:100vh;
    overflow:hidden;

`
export const HeroVideo = styled.video`
    width:100%;
    height:100%;
    object-fit:cover;
    -o-object-fit:cover;
    background:#232a34;
`
export const HeroContent = styled.div`
    max-width:1200px;
    z-index:3;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:absolute;
`
export const HeroH1 = styled.h1`
    color:white;
    text-align:center;
    font-size:48px;
    
    
`
export const HeroP = styled.p`
    color:white;
    text-align:center;
    max-width:600px;
    font-size:24px;
    margin-top:24px;
`
export const HeroBtnWraper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:8px;
    font-size:20px;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;

`