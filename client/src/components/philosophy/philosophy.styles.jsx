import styled from 'styled-components';

/* Page Frame */
export const PhilosophyContainer = styled.div`
   min-height: 100%;
   color: #333";
   padding: 16vh 8vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   max-width: 1200px;
   margin: 0 auto;
   
   @media (max-width: 767px) {
    padding: 40px;
  }
`;

/* Main Content Grid */
export const PhilosophyText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: start;
  .text-section {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    .text-section {
      max-width: 500px;
    }
  }
`;

export const PhilosophyLeft = styled.div`
  font-family: 'Melodrama', serif;
  color: #904868;
  font-size: 32px;
  margin-bottom: 20px;

  .vision-body {
    font-family: 'Nunito', serif;
    color: #333333;
    line-height: 1.7;
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
`;

export const PhilosophyImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;
