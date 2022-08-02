import React from 'react';
import { StyledHero, HeaderHeroImg, HeroText } from './hero.styles';

const Hero = () => (
  <StyledHero>
    <HeroText>Quality floral arrangements in San Francisco.</HeroText>
    <HeaderHeroImg
      src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
      alt="flower arrangements"
    />
  </StyledHero>
);


export default Hero;
