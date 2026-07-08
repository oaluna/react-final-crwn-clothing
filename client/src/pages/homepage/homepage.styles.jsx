import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
  margin-left: 0vw;
  }
`;

export const HomeProductGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 8vw;
  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0vw;
  }
`;
