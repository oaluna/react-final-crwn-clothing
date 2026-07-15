import styled from 'styled-components';
import { colors, media, flexColumn } from '../../styles/theme';

export const ProductPageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  ${flexColumn}
  background: linear-gradient(to left, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.06) 100%);
  box-shadow: 4px 2.5px 6px rgba(0, 0, 0, 0.22);
  gap: 32px;
`;

export const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: start;

  ${media.tabletLarge`
    grid-template-columns: 1fr;
  `}
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
  ${flexColumn}
  height: 100%;
  gap: 30px;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: -0.03em;
  color: ${colors.black};
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${colors.black};
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
  background: ${colors.white};
  color: ${colors.black};
  font-size: 0.9rem;
`;

export const ButtonRow = styled.div`
  ${flexColumn}
  align-items: flex-start;

  gap: 16px;
  flex-wrap: wrap;
`;

// `ActionButton` (primary/secondary toggle button) lives in
// `src/styles/action-button.styles.jsx` and is shared with the product card.
// This page uses a rounded, tightly-padded variant and swaps the secondary
// hover color for the brand highlight.
export const productActionButtonProps = {
  borderRadius: '5px',
  padding: '5px 15px',
  secondaryBg: colors.gray,
  secondaryBorder: colors.bgDark,
  secondaryHoverBg: colors.bgDark,
  secondaryHoverColor: colors.highlight
};

export const ProductMeta = styled.div`
  ${flexColumn}
  gap: 12px;
`;

export const ProductMetaLabel = styled.span`
  font-size: 0.9rem;
  color: ${colors.textMedium};
`;