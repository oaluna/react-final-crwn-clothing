import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, pricingText, name, quantity }}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span style={{width:'50%'}}>{name}</span>{' '}{' '}
      <span>
        {quantity}{' '}<small>x</small>{' '}${pricingText.toFixed(2)}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
