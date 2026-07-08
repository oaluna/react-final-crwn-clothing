import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeroMask, HeaderHeroImg, HeroText, HeroDescription } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
       <HeroDescription style={{background: "#7b1838", position: 'relative', marginTop: "0vh", width: "100%", marginLeft: 0, marginRight: 0}}>
This is more than floral design. It's "LIVING ART".
      </HeroDescription>
      <Parallax>
      <HeroMask>
      <HeaderHeroImg
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
        alt="flower arrangements"
      />
      </HeroMask>

      <HeroText><em>The <span className="rainbow">Artistry</span> of Blooms</em></HeroText>
     
      </Parallax>
    </StyledHero>
  );
};

export default Hero;
