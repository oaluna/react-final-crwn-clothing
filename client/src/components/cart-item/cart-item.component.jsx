import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imgUrl, price, name, quantity }}) => (
  <CartItemContainer>
    <CartItemImage src={imgUrl} alt='item' />
    <ItemDetailsContainer>
      <span style={{width:'50%'}}>{name}</span>{' '}{' '}
      <span>
        {quantity}{' '}<small>x</small>{' '}${price.toFixed(2)}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
