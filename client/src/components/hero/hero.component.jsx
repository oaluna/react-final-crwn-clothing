import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StyledHero, HeaderHeroImg, HeroText, HeroDescription } from './hero.styles';

const Hero = () => {
  return (
    <StyledHero>
      <HeaderHeroImg
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1658961605/arrangements/pexels-photo-1158783_zyt4l2.jpg"
        alt="flower arrangements"
      />
      <HeroText>The 
        <h1 id="gradient">Artistry of Blooms</h1></HeroText>
      <HeroDescription>
Every stem I touch carries a story of resilience, transformation, longing, celebration of love and joy. My floral work isn't about perfection. It's about feeling. I design the way an artist paints across a canvas, intuitively, fearlessly, and with deep respect for texture, shape, color and space.

Inspired by the energy of Balinese culture and San Francisco' weather, it's warm, fogs, architectural, diversity's , tropical, and raw creativity. My floral composition moves between modern sculpture and living poetry. As a florist and an artist, authenticity is the center of my practice. I create from instinct, cultural influence, and emotional story telling. Every curve, every unexpected bloom exists to create movement and evoke emotion. Each arrangement becomes a floating installation, a life for a moment and unforgettable forever.

Flowers are temporary by nature and that impermanence is what makes them sacred. My work honors that feeling of beauty. I want people to remember not only what they saw but what they felt standing in front of my design. This is more than floral design. It's "LIVING ART".
      </HeroDescription>
    </StyledHero>
  );
};

export default Hero;
