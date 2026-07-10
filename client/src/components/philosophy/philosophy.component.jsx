import React from 'react';
import { PhilosophyContainer, PhilosophyText, PhilosophyLeft, PhilosophyImg } from './philosophy.styles';

export default function Philosophy() {
  return (
    <PhilosophyContainer>
   
      <main style={{background: "#c7ac92", borderRadius: "15px"}}>
        
        <PhilosophyLeft
          >
          
            <h1 
            style={{fontSize: "36px", color: "#803858", marginBottom: "8px", fontWeight: "700", textAlign: "center", letterSpacing: "0px", fontStyle: "normal"}}>
              My Vision
            </h1>

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
         

          <div style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "flex-end"}}>
            <a href="/shop">
            <button style={{background: "#7b1838", color: "white", padding: "15px 25px"}}>
              Explore My Work
            </button>
            </a>
            
            <div className="font-serif italic text-2xl md:text-3xl text-[#7a7a7a] select-none">
              - Artist Signature
            </div>
          </div>
          </PhilosophyText>
        </div>
        </PhilosophyLeft>

        <PhilosophyImg className="lg:col-span-5 bg-[#eae5d9] relative min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <img 
          style={{position: "absolute", right: "12vw", top: "72vh", maxWidth: "40%", height: "auto", objectFit: "contain", display: "flex"}}
            src="https://ik.imagekit.io/glowingflowers/the-art-of-bouquet?updatedAt=1779831132473" 
            alt="Sculptural floral arrangement on a concrete pedestal" 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </PhilosophyImg>

      </main>

      

    </PhilosophyContainer>
  );
} 
