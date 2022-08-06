import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 5em;
height: 80vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Yellowtail', cursive;
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

export const HeaderHeroImg = styled.img`
  opacity: 1;
  z-index: 0;
  width: 100%;
  margin-top: 0;

  @media (max-width: 800px) {
    margin-top: 5em;
  }
`;

export const HeroText = styled.h1`
  font-weight: 500;
  color: white;
  z-index: 21;
  margin-bottom: 25px;
  font-size: 84px;
position: absolute;
top: 50%;left: 8%;
  @media (max-width: 800px) {
    width: 70%;
    margin: 45vh 15vw;
    font-size: 56px;
    text-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.65);

    opacity: 1;
    z-index: 5;
    animation: ${FadeInAnimation} 0.3s ease-in;
  }
`;
