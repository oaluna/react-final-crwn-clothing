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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;
