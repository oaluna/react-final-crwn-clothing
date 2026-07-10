import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
 
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  font-family: 'Roboto', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 540px) {
    margin: 0vh 0vw;
    height: 100vh;
  }
`;
const RainbowAnimation = keyframes`
   0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
    margin-left: 40vw;
    animation-delay: 0.3s;
  }
  50% {
    opacity: 0;
    margin-left: 20vw;
  }
  100% {
    opacity: 1;
    float: none;
    transition: 3s ease-in;
  }
`;

export const HeroMask = styled.span`
  width: 100%;
  height: 100%;
  -webkit-mask-image: -webkit-gradient(linear, left 0%, left bottom, from(rgb(255, 255, 255)), to(rgba(0,0,0,0)));
`;

export const HeaderHeroImg = styled.img`
  width: 100%;
  height: 100%;
 clip-path: inset(0 0 60% 0);
  overflow: hidden;
  

  z-index: 1;
  position:relative;

`;

export const HeroText = styled.h1`
font-size: 48px;
position: absolute;
left: 8vw;
top: 20vh;
color: white;
`;

export const HeroDescription = styled.span`
    width: 100%;
height: auto;

background: #a44a3f;
top: 0vh;
opacity: 1;
z-index: 100;
`;
