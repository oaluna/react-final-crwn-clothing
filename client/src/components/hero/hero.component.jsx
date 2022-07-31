import React from 'react';
import { StyledHero, HeaderHeroImg, HeroText } from './hero.styles';

const Hero = () => (
    <StyledHero>
      <HeroText>Quality floral arrangements in San Francisco.</HeroText>
      <HeaderHeroImg src="https://images.pexels.com/photos/950251/pexels-photo-950251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flower arrangements"
      />
    </StyledHero>
  );


export default Hero;
