import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  background: linear-gradient(to left, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.06) 100%);
 box-shadow: 4px 2.5px 6px rgba(0, 0, 0, 0.22);
 border: 1px solid linear-gradient(to-right, rgba(255,255,255,0.33), rgba(255,255,255,0.16));
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
 
  max-width: 100%;
width: 40%;
  min-height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: visible;
  position: absolute;
  top: 0vh;
  right: 8vw;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 30px;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: -0.03em;
  color: var(--text-light);
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-light);
`;

export const ProductPrice = styled.span`
  font-size: 2rem;
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
  background: var(--color-primary);
  color: var(--text-dark);
  font-size: 0.9rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  flex: ${props => props.primary ? '2' : '1'};
  background: ${props => props.primary ? "var(--color-primary)": "var(--color-secondary)"};
  color: ${props => props.primary ? 'var(--text-light)' : 'var(--text-dark)'};
  border: none;
  border-radius: 5px;

  padding: 5px 15px;
  font-size: ${props => props.primary ? '13px' : '18px'};
  font-weight: 700;
  text-transform: ${props => props.primary ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.primary ? '1px' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-right: ${props => props.primary ? 'none' : '1px solid var(--bg-dark)'};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.primary ? 'var(--color-highlight)' : 'bg-dark'};
    color: ${props => props.primary ? 'var(--text-light)' : 'var(--color-highlight)'};
  }
  
  &:last-child {
    border-right: none;
  }
`;
export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductMetaLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-medium);
`;
