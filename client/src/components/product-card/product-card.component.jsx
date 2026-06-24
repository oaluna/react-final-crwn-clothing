import React, { useState } from 'react';

import {
  ProductCardWrapper
} from './product-card.styles';

import { ShoppingIcon } from '../cart-icon/cart-icon.styles';

const ProductCard = ({ product, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    const bottomElement = document.querySelector('.bottom');
    bottomElement.appendChild(document.querySelector('.inside'));
    setClicked(true);
    console.log(clicked);
  }

  const { name, description, price, imgUrl, category } = product;

  return (
    <ProductCardWrapper>
      <div className="container">
        <div className="top">
          <h1>{name}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <div className="buy"><i className="material-icons">add_shopping_cart</i></div>
          </div>
          <div className="right">
            <div className="done"><i className="material-icons">done</i></div>
            <div className="details">
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove"><i className="material-icons">clear</i></div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons">info_outline</i></div>
        <div className="contents">
          <table>
            <thead></thead>
            <tbody>
            <tr>
             
              <td>Category</td>
              <td>{category}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{description}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£{price}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProductCardWrapper>
  )
};

export default ProductCard;
