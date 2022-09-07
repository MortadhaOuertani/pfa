import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../buttonElement'
import { BtnWrap, Column1, Column2, Heading, Img, Imgwrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../css/infosection'

const InfoSection = ({lightBg,show,adjustment,primary,dark,id,headline,description,imgStart,alt,img,topLine,buttonLabel,darkText,lightText}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper  imgStart={imgStart}>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button show={show?1:0} smooth={true} duration={500} spy={true} exact='true'offset={-80} primary={primary?1:0} dark={dark?1:0} to='home'><Link style={{ textDecoration: 'none', color:'inherit' }} to="blog">{buttonLabel}</Link></Button>
                        </BtnWrap>
                    </TextWrapper>
               
                </Column1>
                <Column2 adjustment={adjustment}>
                    <Imgwrap>
                        <Img adjustment={adjustment} src={img} alt={alt}/>
                    </Imgwrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection