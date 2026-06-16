import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: start;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  min-height: 420px;
  border-radius: 16px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: -0.03em;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
`;

export const ProductPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const ProductCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export const ProductCategory = styled.span`
  display: inline-flex;
  padding: 10px 14px;
  border-radius: 999px;
  background: #f2f2f2;
  color: #555;
  font-size: 0.9rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductMetaLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
`;
