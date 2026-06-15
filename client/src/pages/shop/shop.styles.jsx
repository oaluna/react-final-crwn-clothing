import styled from 'styled-components';

export const ShopPageContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ShopProductGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(240px, 1fr));
  gap: 24px;

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
