import React from 'react';
import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductCategoryContainer,
  ProductCategory
} from './product-card.styles';

const ProductCard = ({ product, onClick }) => {
  const { name, description, price, imgUrl, category } = product;

  return (
    <ProductCardContainer onClick={onClick}>
      <ProductImage imageUrl={imgUrl} />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>${Number(price).toFixed(2)}</ProductPrice>
        <br />
        <ProductCategoryContainer>
        <p>Tags: </p>
        <ProductCategory>
        {category}</ProductCategory>
        </ProductCategoryContainer>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
