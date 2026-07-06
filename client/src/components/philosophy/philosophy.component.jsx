import React from 'react';

export default function Philosophy() {
  return (
    <div 
  
    style={{minHeight: "100%", color: "#333", padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>

      {/* --- MAIN CONTENT CARD --- */}
      <main 
      style={{flexGrow: 1, border: "1px solid #d9d0c2", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "grid", gridTemplateColumns: "repeat(2fr, 1fr)", gridGap: 2}}>
        
        <div 
          style={{ width: "50%", padding:"16px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderBottom: "1px solid #d9d0c2" }}>
          
          <div>
            {/* Section Title */}
            <h1 
            style={{fontSize: "36px", color: "#803858", marginBottom: "8px", fontWeight: "700", textAlign: "center", letterSpacing: "2px", fontStyle: "normal"}}>
              My Vision
            </h1>

            {/* Text & Icons Layout */}
            <div className="flex gap-6 items-start">
              
              {/* Decorative Cultural Icons Sidebar */}
              <div 
              style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", gap: "5px", marginTop: "2px", fontSize: "#803858", flexGrow: 1, opacity: "0.8", width: "100%"
              }}>
                {/* Balinese Temple/Gate Icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: "64px", height: "64px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 9v12h16V9l-8-6zm0 0v18m-6-6h12M6 15h12" />
                  <path d="M9 21v-4h6v4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {/* Bridge Icon (San Francisco) */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: "64px", height: "64px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M4 18v-8l8-4 8 4v8M8 18v-6m8 6v-6M12 6v12" />
                </svg>
              </div>

              {/* Body Paragraph */}
              <p 
              style={{ fontSize: "18px", lineHeight: 1.2, color: "#4a4a4a", textAlign: "justify", fontStyle: "normal", fontWeight: 400}}>
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
          </div>

          {/* Call to Action & Signature Footer */}
          <div 
          style={{marginTop: "12px", paddingTop: "6px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", gap: "6px"}}
          className="mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <button className="bg-[#803858] text-white px-8 py-3.5 text-xs tracking-widest uppercase font-semibold hover:bg-[#6a2d48] transition-all duration-300 shadow-sm">
              Explore My Work
            </button>
            
            <div className="font-serif italic text-2xl md:text-3xl text-[#7a7a7a] select-none">
              - Artist Signature
            </div>
          </div>

        </div>

        {/* Right Column: Featured Image (5 Cols) */}
        <div className="lg:col-span-5 bg-[#eae5d9] relative min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <img 
          style={{position: "absolute", right: "12vw", top: "72vh", maxWidth: "40%", height: "auto", objectFit: "contain", display: "flex"}}
            src="https://ik.imagekit.io/glowingflowers/the-art-of-bouquet?updatedAt=1779831132473" 
            alt="Sculptural floral arrangement on a concrete pedestal" 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

      </main>

      {/* --- PAGE FOOTER --- */}
      

    </div>
  );
}