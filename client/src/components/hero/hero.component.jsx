import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeroMask, HeaderHeroImg, HeroText, HeroDescription } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
       <HeroDescription>
        <p style={{color: "white"}}>
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
     <a href="#shop"><button style={{position: 'absolute', top: "40vh",left: "20vw",color:"white", background: "pink", zIndex: 100 }}>Shop Now</button></a>
      </Parallax>
    </StyledHero>
  );
};

export default Hero;
