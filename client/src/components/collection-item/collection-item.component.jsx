import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  DescriptionContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, pricingText, shortDescription, imageUrl } = item;

  return (
    <CollectionItemContainer>

      <BackgroundImage className='image' imageUrl={imageUrl} alt="product"/>
      <NameContainer><span>{name}{' '}</span>
        <PriceContainer>{`$` + `${pricingText}`}</PriceContainer><br /><br />
        </NameContainer>
      <CollectionFooterContainer className="CollectionFooter">
        <DescriptionContainer>{shortDescription}</DescriptionContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
