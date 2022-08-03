import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  top: 0;
  left: 0;
  margin-bottom: 3vh;
  height: 75vh;
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
  @media (min-width: 300px) {
    display: flex;
    height: 60%;
    width: 100%;
    img {
      overflow-x: none;
    }
  }
  @media (min-width: 768px) {
    height: 70vh;
    object-fit: cover;
  }
`;

export const HeroText = styled.h1`
  font-weight: 500;
  color: white;
  z-index: 21;
  margin-bottom: 25px;
  font-size: 72px;
  @media (min-width: 300px) {
    position: absolute;
    font-size: 42px;
    margin: 15vh auto;
  }
  @media (min-width: 768px) {
    width: 40%;
    margin: 45vh 15vw;
    font-size: 56px;
    text-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.65);

    opacity: 1;
    z-index: 5;
    animation: ${FadeInAnimation} 0.3s ease-in;
  }
`;
