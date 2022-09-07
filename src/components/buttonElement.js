import styled from "styled-components";
import {Link} from "react-scroll";

export const Button=styled(Link)`
text-decoration: none;
border-radius:55px;
background:${({primary})=> (primary?'black':'#01BF71')};
white-space:nowrap;
padding:${({big})=>(big?"14px 48px":"12px 30px")};
font-size:${({fontbig})=>(fontbig?"20px":"16px")};
color:white;
font-weight:700;

border:none;
cursor:pointer;
display:${({show})=>(show?"flex":"none")};
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
&:hover{
    transition:all 0.23s ease-in-out;
    background:${({primary})=> (primary?'#01BF71':'#14C2C5')};
    color:white;
    
}
`
