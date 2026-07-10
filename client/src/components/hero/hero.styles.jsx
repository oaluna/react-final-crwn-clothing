import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  font-family: 'Melodrama', serif;
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
  z-index: 0;
`;

export const HeroText = styled.h1`
font-size: 280px;
  position: absolute;
  top: 0;
  left: 4vw;
  color: white;
  margin-top: 28vh;
  overflow: hidden;
  max-width: 100%;
  text-align: left;
  z-index: 51;
  animation: ${FadeInAnimation} 1.3s ease-in;
line-height: 0.8;
letter-spacing: 0px;
transform: skewX(1.5deg) scaleY(1.3);
text-transform: uppercase;
  .rainbow {
       background:linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);

  animation: ${RainbowAnimation} 8s ease-in-out infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    background-size: 400% 400%;
  }

  @media (max-width: 540px) {
line-height: 1.2;
    position: relative;
    font-size: 84px;
    margin-top: 5vh;
    padding: 0;
    text-align: center;
    z-index: 0;
    animation: none;
    margin-top: -100vh;
    max-width: auto;
  }
`;

export const HeroDescription = styled.span`
    width: 100%;
height: auto;

background: #a44a3f;
position: absolute;
top: 0vh;
opacity: 1;
z-index: 100;
`;
