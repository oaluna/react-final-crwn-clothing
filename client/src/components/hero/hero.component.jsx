import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeroMask, HeaderHeroImg, HeroText, HeroDescription } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
      <Parallax>
      <HeroMask>
      <HeaderHeroImg
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
        alt="flower arrangements"
      />
      </HeroMask>

      <HeroText>The <span className="rainbow">Artistry</span> of Blooms</HeroText>
      <HeroDescription>
This is more than floral design. It's "LIVING ART".
      </HeroDescription>
      </Parallax>
    </StyledHero>
  );
};

export default Hero;
