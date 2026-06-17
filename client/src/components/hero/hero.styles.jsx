import styled, { keyframes } from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  font-family: 'Yellowtail', cursive;
  display: flex;
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

export const HeaderHeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.75);
  z-index: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const HeroText = styled.h1`
  font-weight: 500;
  color: white;
  z-index: 21;
  margin: 0;
  line-height: 0;
  padding: 0;
  font-size: 84px;
  position: absolute;
  top: 20%;
  left: 8%;
  max-width: 600px;

  @media (max-width: 800px) {
    width: 70%;
    margin: 0;
    font-size: 56px;
    text-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.65);
    opacity: 1;
    z-index: 5;
    animation: ${FadeInAnimation} 0.3s ease-in;
  }
`;

export const HeroDescription = styled.p`
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 50%;
  left: 8%;
  max-width: 1000px;
  text-align: left;
  line-height: 1.5;
  z-index: 21;
  color: white;
  margin: 0;
  padding-right: 2rem;

  @media (max-width: 800px) {
    font-size: 14px;
    max-width: 90%;
    top: 55%;
    left: 5%;
  }
`;
