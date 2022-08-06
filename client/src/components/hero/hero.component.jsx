import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeaderHeroImg, HeroText } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
        <HeroText>Quality floral arrangements in San Francisco.</HeroText>
      <Parallax translateY={[-15,15]}>
        <HeaderHeroImg
          src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
          alt="flower arrangements"
        />
      </Parallax>
    </StyledHero>
  );
};

export default Hero;
