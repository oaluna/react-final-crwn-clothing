import styled from 'styled-components';

export const PhilosophyContainer = styled.div`
   height: 100%;
   color: #333;
   padding: 16vh 8vw;
   justify-content: space-evenly;
   align-items: center;
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
  gap: 20px;


  .text-section {
    width: 100%;
      font-size: 16px;
  line-height: 1.5;
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
      text-align: left;
    
  }
`;

export const PhilosophyLeft = styled.div`
  font-family: 'Roboto', serif;
  color: #a44a3f;
  font-size: 32px;
  margin-bottom: 20px;
  margin-right: 30vw;
      background: lightgrey;
      padding: 20px 12px;
      border-radius: 15px;
      box-shadow: 0px 1.5px 5px rgba(0,0,0,0.3)
    max-width: 1200px;
position: relative;
align-items: center;
margin-top: -40vh;
  .vision-body {
    font-family: 'Arial', serif;
    color: #333333;
    line-height: 1.2;
    font-size: 16px;
text-align: left;
display: flex;
flex-direction: column;
align-items: flex-start;

  }

  .icon-pair {
    margin-top: 20px;
    color: #a44a3f;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    margin-bottom: 30px;
    .icon-pair {
      margin-top: 30px;
    }
  }
    @media (max-width: 350px) {
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
background: gray;
img {
    display: block;
    width: 100%;
    height: auto;
  
}
`;
