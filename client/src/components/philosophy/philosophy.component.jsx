import React from 'react'
import styled from 'styled-components';

const PhilosophyContainer = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  line-height: 1.8;
  color: #333;
`;

const PhilosophyTitle = styled.h2`
  font-family: 'Yellowtail', cursive;
  font-size: 48px;
  margin-bottom: 30px;
  color: #ff0051;
`;

const PhilosophyText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
const Philosophy = () => {
    return (
      <PhilosophyContainer>
        <PhilosophyTitle>My Vision</PhilosophyTitle>
        <PhilosophyText>
          I design the way an artist paints across a canvas, intuitively, fearlessly, and with deep respect for texture, shape, color and space. Inspired by the energy of Balinese culture and San Francisco's weather, my work is warm, architectural, diverse, tropical, and fueled by raw creativity. 
        </PhilosophyText>
        <PhilosophyText>
          My floral composition moves between modern sculpture and living poetry. As a florist and an artist, authenticity is the center of my practice. I create from instinct, cultural influence, and emotional storytelling. Every curve, every unexpected bloom exists to create movement and evoke emotion. Each arrangement becomes a floating installation, alive for a moment and unforgettable forever.
        </PhilosophyText>
        <PhilosophyText>
          Flowers are temporary by nature, and that impermanence is what makes them sacred. My work honors that feeling of beauty. I want people to remember not only what they saw but what they felt standing in front of my design.
        </PhilosophyText>
      </PhilosophyContainer>
    );
  };
  
  export default Philosophy;