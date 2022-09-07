import styled from "styled-components";
export const InfoContainer = styled.div`
color:${({lightText})=>(lightText?'white':'black')};
background:${({lightBg})=>(lightBg?'#f9f9f9':'#010606')};

@media screen and(max-width:768px){
    padding:100px 0px;
}
`
export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin:left:auto;
    padding:0 24px;
    justify-content:center;
`
export const InfoRow = styled.div`
    display:grid;
    grid-auto-column:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1  col2 '`)};

@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart?`'col2 col2' 'col1 col1'`:`'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area:col1;

`

export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area:col2;
   
`
export const  TextWrapper = styled.div`
max-width:540;
margin-top:100px;
position:relative;
left:${({imgStart})=>(imgStart?'300px':'0px')};
padding-top:0;
padding-bottom:60px;
@media screen and (max-width:768px){ 
    left:${({imgStart})=>(imgStart?'0px':'0px')};
    
}

`
export const TopLine =styled.p`
color: #01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`
export const Heading = styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText?'#f7f8fa':'010606')};
@media screen and (max-width:400px){
    font-size:32px;
}
`
export const Subtitle =styled.p`
    max-width:440;
    margin-bottom:35px;
    font-size:18px;
    font-weight:700;
    line-height:24px;
    color:${({darkText})=>(darkText?'#010606':'white')};
`
export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;
`
export const Imgwrap = styled.div`
    max-width:555px;
    height:100%;
`
export const Img= styled.img`
width:640px;
height:450px;
margin:20px 0 10px 0px;
padding-right:0;
@media screen and (max-width:768px){
    position:relative;
    top:${({adjustment})=>(adjustment?'-100px':'100px')};
    left:60px;
    width:400px;
    height:300px;
position:relative;
right:100px;
bottom:100px;
}
`