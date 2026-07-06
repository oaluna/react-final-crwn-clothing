const vars = {
    /* Design Tokens */
    colorBackground: '#f4f1ea',
    colorTextbody: '#333333',
    colorBrand: '#904868',    
    fontHeading:`${'Melodrama', serif}`,
    fontBody: `${'Nunito', serif}`,
    fontNav: `${'Nunito', serif}`
  }
  
  /* Page Frame */
export const PhilosophyContainer = styled.div`
    background-color: var(--color-background-cream);
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    border: 1px solid #d9d0c2; /* The inner gold border from the image */
  }
`;  
  
  /* Main Content Grid */
  export const PhilosophyText = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
   .text-section {
    max-width: 500px;
  }
  `;

  export const PhilosophyLeft = styled.div`
    font-family: var(--font-heading);
    color: var(--color-brand-fuchsia);
    font-size: 42px;
    margin-bottom: 30px;
  
  
  .vision-body {
    font-family: var(--font-body);
    color: var(--color-text-body);
    line-height: 1.7;
  }
  
  .icon-pair {
    margin-top: 30px;
    color: var(--color-brand-fuchsia);
  }
  `;
  
export const PhilosophyImg = styled.img`
    display: block;
`;