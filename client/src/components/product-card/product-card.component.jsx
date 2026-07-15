import React, { useState } from 'react';

import {
  CardWrapper,
  ImageContainer,
  Tag,
  PriceTag,
  ContentArea,
  Title,
  ButtonRow,
  cardActionButtonProps
} from './product-card.styles';
import { ActionButton } from '../../styles/action-button.styles';

const ProductCard = ({ product, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    const bottomElement = document.querySelector('.bottom');
    bottomElement.appendChild(document.querySelector('.inside'));
    setClicked(true);
    console.log(clicked);
  }

  const { name, description, price, imgUrl, category } = product;

    const [selectedColor, setSelectedColor] = useState('#272b3f');
    
    const colors = ['#272b3f', '#c9c2b6', '#872a31'];
  
    return (
    
        <CardWrapper onClick ={onClick}>
          
          <ImageContainer>
            <img src={imgUrl} />
            <Tag>New</Tag>
            <PriceTag>
              <span>${price.toFixed(2)}</span>
            </PriceTag>
          </ImageContainer>
  
          {/* Bottom Content Section */}
          <ContentArea>
            <Title>{name}</Title>
  
            
  
            {/* Action Buttons */}
            <ButtonRow>
              <ActionButton aria-label="Add to wishlist" {...cardActionButtonProps}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ActionButton>
              <ActionButton primary onClick={onClick} {...cardActionButtonProps}>
                Add to Cart
              </ActionButton>
            </ButtonRow>
  
          </ContentArea>
        </CardWrapper>
        )
      }

      export default ProductCard;