import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


const Cover = styled.div`
// background-image :url("https://i.pinimg.com/originals/0c/2c/ee/0c2cee91dccf390fa8c4aa2f6fe980e3.png");
width: "100w";
// height: "50rem";
background-size: "contain"
// backgroundColor: "black"
`

const HeroComponent = styled.header `
padding: 5rem 0;
height: 20vh;

background-position: center center;
background-repeat: no-repeat;
background-size:cover;
//  width: 200vw
`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
// padding: 3rem;
color: gold;
width: 37.5rem;
height: 12rem

`;
const Header = styled.h1`
font-size: 1rem
`

const SubHeading = styled.h3`
margin: 1rem 0;
font-weight: 100

`
const Hero = () => {
    return( 
        <Cover>
        <HeroComponent>
            <Container>
                <HeaderContainer>
                    <Header>
                        Are you reliable as a trained biker?
                    </Header>
                    <SubHeading>
                        Join our team of bikers today and make money
                    </SubHeading>
                  <div style={{marginLeft: "2rem"}}> <Link to="/purchaseform"> <Button variant="info"style={{marginLeft: "-2rem"}}>Hire purchase</Button></Link>
                    <Link to="joboffer"><Button variant="warning" style={{marginLeft: "1rem"}}>Job offer</Button></Link>{''}
                    <Link to="signinsignup"><Button variant="warning" style={{marginLeft: "1rem"}}>Courier Service</Button></Link>
                    <Link to="register"><Button variant="info" style={{fontSize: "1rem",marginLeft: "1rem"}}>Contact Us</Button>{''}</Link>
</div>
                </HeaderContainer>
            </Container>
        </HeroComponent>
        </Cover>
    ) 
};

export default Hero