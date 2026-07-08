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
  object-position: center;
 object-fit: cover;
position: absolute;
  @media (max-width: 800px) {
    width: 100vw;
    position: relative;
    height: 100vh;
    z-index: 10;
  object-fit: cover;
  object-position: center;
  margin-top: -55vh;

  }
`;

export const HeroText = styled.h1`
 
  color: white;
  font-size: 68px;
  top: 20vh;
  overflow: hidden;
  max-width: 100%;
  padding: 0vh 8vw;
  text-align: left;
  z-index: 51;
  animation: ${FadeInAnimation} 0.3s ease-in;

  .rainbow {
    background: linear-gradient(90deg, #ff0051, #ff7300, #ffeb00, #2cff65, #00d6ff, #6b5bff, #ff00b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
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
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 14px;
  position: relative;
  top: 55%;
  width: 100vw;
  text-align: center;
  line-height: 2;
  z-index: 21;
  color: white;
  margin: 0;
  padding-right: 2.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  @media (max-width: 540px) {
    font-size: 12px;
    color: white;
    text-align: center;

    position: absolute;
    z-index: 31;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5%;
  top: -44vh;
  }
`;
