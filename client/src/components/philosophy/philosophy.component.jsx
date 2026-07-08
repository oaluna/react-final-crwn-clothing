import React from 'react';
import { PhilosophyContainer, PhilosophyText, PhilosophyLeft, PhilosophyImg } from './philosophy.styles';

export default function Philosophy() {
  return (
    <PhilosophyContainer>
   
      <main style={{background: "var(--bg-light)", borderRadius: "15px"}}>
        
        <PhilosophyLeft
          >
          
          <PhilosophyText>
            <h1 
            style={{fontSize: "36px", color: "#803858", marginBottom: "8px", fontWeight: "700", textAlign: "center", letterSpacing: "0px", fontStyle: "normal"}}>
              My Vision
            </h1>

            <div className="flex gap-6 items-start">
              
              <div 
              style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: "space-evenly", gap: "5px", marginTop: "2px", fontSize: "#803858", flexGrow: 1, opacity: "0.8", width: "100%"
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: "64px", height: "64px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 9v12h16V9l-8-6zm0 0v18m-6-6h12M6 15h12" />
                  <path d="M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: "64px", height: "64px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M4 18v-8l8-4 8 4v8M8 18v-6m8 6v-6M12 6v12" />
                </svg>
              </div>

              <p style={{padding: "20px 8px"}}>
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
            </div>
          </PhilosophyText>

          <div>
            <button style={{background: "#803858", color: "white", background: "var(--bg-light)"}}>
              Explore My Work
            </button>
            
            <div className="font-serif italic text-2xl md:text-3xl text-[#7a7a7a] select-none">
              - Artist Signature
            </div>
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
