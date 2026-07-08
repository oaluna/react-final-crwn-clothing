import styled from 'styled-components';

export const PhilosophyContainer = styled.div`
   min-height: 100%;
   color: #333;
   padding: 16vh 8vw;

   
   justify-content: space-around;
   max-width: 1200px;
   margin: 0 auto;
   
   @media (max-width: 767px) {
   padding: 20px 8px;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex-wrap: no-wrap;
    
  }
`;

/* Main Content Grid */
export const PhilosophyText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
         background-color: var(--bg-light);
  align-items: start;
  .text-section {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    gap: 60px;
    .text-section {
      max-width: 500px;
    }
  }
    @media (min-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
margin: 0px 8px;
    flex-wrap: no-wrap;
      width: 100vw;
    
  }
`;

export const PhilosophyLeft = styled.div`
  font-family: 'Melodrama', serif;
  color: #904868;
  font-size: 32px;
  margin-bottom: 20px;
      background: var(--bg-light);

  .vision-body {
    font-family: 'Nunito', serif;
    color: #333333;
    line-height: 1;
    font-size: 12px;

  }

  .icon-pair {
    margin-top: 20px;
    color: #904868;
  }

  @media (min-width: 768px) {
    font-size: 42px;
    margin-bottom: 30px;
    .icon-pair {
      margin-top: 30px;
    }
  }
    @media (min-width: 350px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    flex-wrap: no-wrap;
    padding: 20px 12px;
  }
`;

export const PhilosophyImg = styled.div`
img {
    display: block;
    width: 100%;
    height: auto;
}
`;
