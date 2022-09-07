import styled from "styled-components";
import { Link } from "react-router-dom";

export const Signincontainer = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:0;
    overflow:hidden;
    background:linear-gradient(108deg,rgba(1,147,86,1) 0%,rgba(10,201,122,1) 100%);
`
export const Formwrap = styled.div`
    display:flex;
    width:40%;
    margin-left:470px;
    flex-direction:column;
    justify-content:center;
@media screen and (max-width:400px){
height:80%
}
`
export const Icons = styled(Link)`
    margin-top:32px;
    margin-left:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

@media screen and (max-width:400px){
    margin-left:16px;
    margin-top:8px;
}
&:hover{
    color:black;
}

`
export const Formcontent = styled.div`
    display:flex;
    background:black;
    justify-content:center;
    flex-direction:column;
    height:100%;
@media screen and (max-width:400px){
    padding:10px;
}
`
export const Form = styled.form`
    display:grid;
    padding:80px 32px;
    height:auto;
    width:100%;
    z-index:1;
    margin:0 auto;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width:400px){
    padding:32px;
}
`
export const Formh = styled.h1`
color:#fff;
margin-bottom:40px;
font-size:20px;
font-weight:400px;
text-align:center;
`
export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#fff;
`
export const Forminput = styled.input`
padding:16px;
margin-bottom:32px;
border:none;
border-radius:4px;
`
export const Formbutton = styled.button`
background:#01bf71;
padding:16px  0;
border:none;
border-radius:4px;
color:#fff;
font-size:20px;
cursor:pointer;
&:hover{
    background:#029e5d;
}
`
export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`
