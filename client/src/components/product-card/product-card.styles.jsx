import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: transform 1.05s ease, box-shadow 1.05s ease;
  min-height: 240px;

  &:hover {
    transform: translateY(-4px) scale(1.2);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 270px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  min-height: 160px;
  
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #2f2f2f;
  line-height: 1.2;
  position: absolute;
  margin: 12px 0;
`;

export const ProductDescription = styled.p`
  color: #6b6b6b;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.span`
  font-weight: 700;
  color: #8b1d3a;
  font-size: 24px;
  text-align: right;
`;

export const ProductCategoryContainer = styled.div`
 
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  
  p: {
    font-size: 10;
    color: black;
  };
`;

export const ProductCategory = styled.span`
  background-color: #8b1d3a;
  text-align: left;
  float: left;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  height: 16px;
  max-width: 130px;
  text-align: center;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: row-wrap;
  ;`