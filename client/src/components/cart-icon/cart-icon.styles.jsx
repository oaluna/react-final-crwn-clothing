import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

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

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
  background: none;
  align-items: center;
  fill: var(--text-light);

transform: scale(0.3);
  &:hover {
    fill: var(--color-accent);
  }

@media (max-width: 540px) {
  padding: 45px 0 0 0;
    width: 24px;
  height: 24px;
  object-fit: contain;
  
}
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: var(--text-dark);
  background: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 31;
`;
