import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';
import { colors, media } from '../../styles/theme';

export const CartContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;
  object-fit: contain;
  `;

export const CartGlyph = styled.i`
  color: ${colors.rust};
  text-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.11);
  padding: 5px;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
  background: none;
  align-items: center;
  color: ${colors.warning}
  fill: ${colors.warning};
  transform: scale(0.3);

  &:hover {
  color: ${colors.success}  
  fill: ${colors.success};
  }

  ${media.mobile`
    padding: 45px 0 0 0;
    width: 24px;
    height: 24px;
    object-fit: contain;
  `}
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: ${colors.black};
  background: ${colors.white};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 31;
`;
