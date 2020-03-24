import React from 'react';

import { CartItemContainer, CartItemDetails, CartItemName, CartItemImage } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <CartItemDetails>
      <CartItemName>{name}</CartItemName>
      <span className='price'>
        {quantity} * ${price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;