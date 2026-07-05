import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  margin: 0vh 0vw;
  padding: 0;
  height: 80vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Melodrama', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


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
-webkit-mask-image: -webkit-gradient(linear, left 0%, left bottom, from(rgb(255, 255, 255)), to(rgba(0,0,0,0)))

`
export const HeaderHeroImg = styled.img`
position: relative;
  width: 100vw;
  height: 100%;
  object-position: center;
  object-fit: cover;
  z-index: 10;
margin-top: 0vh;
}


  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const HeroText = styled.h1`
  font-weight: 500;
  color: white;
  z-index: 21;
  letter-spacing: -4px;
  font-size: 260px;
  margin: 30vh 8vw;
  letter-spacing: -5px;
  line-height: 1;
  transform: skewX(-25deg);
  padding: 0;
  position: relative;
  margin-top: -100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  text-align: center;


  .rainbow {
    background: linear-gradient(90deg, #ff0051, #ff7300, #ffeb00, #2cff65, #00d6ff, #6b5bff, #ff00b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    color: transparent;
  }

  @media (max-width: 800px) {
    margin: 0;
    font-size: 56px;
    opacity: 1;
    z-index: 5;
    animation: ${FadeInAnimation} 0.3s ease-in;
  }
`;

export const HeroDescription = styled.p`
  font-size: 24px;
  position: relative;
  top: 25%;
  width: 100vw;
  text-align: center;
  line-height: 2;
  z-index: 21;
  color: white;
  margin: 0;
  padding-right: 2.2rem;
  display: flex;
  flex-wrap: rowwrap;
  align-items: center;
  justify-content: center;
margin-top: 25px;

  @media (max-width: 800px) {
    font-size: 14px;
    max-width: 90%;
    top: 55%;
    left: 5%;
  }
`;
