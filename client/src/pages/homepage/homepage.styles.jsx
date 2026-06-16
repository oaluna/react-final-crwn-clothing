import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const HomeProductGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 8vw;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, minmax(220px, 1fr));
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
