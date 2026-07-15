import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  ItemName
} from './cart-item.styles';

const CartItem = ({ item: { imgUrl, price, name, quantity }}) => (
  <CartItemContainer>
    <CartItemImage src={imgUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemName>{name}</ItemName>{' '}{' '}
      <span>
        {quantity}{' '}<small>x</small>{' '}${price.toFixed(2)}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
