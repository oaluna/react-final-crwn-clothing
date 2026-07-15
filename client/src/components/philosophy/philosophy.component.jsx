import React from 'react';
import {
  PhilosophyContainer,
  PhilosophyText,
  PhilosophyLeft,
  PhilosophyImg,
  SignatureText,
  ArtistImage,
  PhilosophyMain,
  PhilosophyTitle,
  ExploreRow,
  ExploreButton
} from './philosophy.styles';

export default function Philosophy() {
  return (
    <PhilosophyContainer>
   
      <PhilosophyMain>
      <PhilosophyTitle>
              My Vision
            </PhilosophyTitle>
        <PhilosophyLeft
          >
          
           

            <div className="vision-body">
              
             

              <PhilosophyText>
                <p className="text-section">
                I design the way an artist paints across a canvas, intuitively, fearlessly, and with deep respect for 
                texture, shape, color and space. Inspired by the energy of Balinese culture and San Francisco's 
                weather, my work is warm, architectural, diverse, tropical, and fueled by raw creativity. My floral 
                composition moves between modern sculpture and living poetry. As a florist and an artist, authenticity 
                is the center of my practice. I create from instinct, cultural influence, and emotional storytelling. Every 
                curve, every unexpected bloom exists to create movement and evoke emotion. Each arrangement 
                becomes a floating installation, alive for a moment and unforgettable forever. Flowers are temporary 
                by nature, and that impermanence is what makes them sacred. My work honors that feeling of 
                beauty. I want people to remember not only what they saw but what they felt standing in front of my 
                design.
              </p>
          <a href="/shop">
            <ExploreButton>
              Explore My Work
            </ExploreButton>
            </a>

          <ExploreRow>
           
                      <PhilosophyImg>
          <ArtistImage
            src="https://ik.imagekit.io/glowingflowers/the-art-of-bouquet?updatedAt=1779831132473"
            alt="Sculptural floral arrangement on a concrete pedestal"
          />
        </PhilosophyImg>
          </ExploreRow>
          </PhilosophyText>
   
        </div>
     

        </PhilosophyLeft>

       
      </PhilosophyMain>

      

    </PhilosophyContainer>
  );
} 
