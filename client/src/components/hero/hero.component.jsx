import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeroMask, HeaderHeroImg, HeroText, HeroDescription, ShopNowButton } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
       <HeroDescription>
        <p>
This is more than floral design. It's "LIVING ART".
</p>
      </HeroDescription>
      <Parallax>
      <HeroMask>
      <HeaderHeroImg
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
        alt="flower arrangements"
      />
      </HeroMask>

      <HeroText> The Artistry of Blooms</HeroText>
     <a href="#shop"><ShopNowButton>Shop Now</ShopNowButton></a>
      </Parallax>
    </StyledHero>
  );
};

export default Hero;
