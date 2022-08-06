import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  DescriptionContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, shortDescription, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} alt="product" />
      <NameContainer>
        <span>{name} </span>
        <PriceContainer>{`$` + `${pricingText.toFixed(2)}`}</PriceContainer>
        <br />
        <br />
      </NameContainer>
      <CollectionFooterContainer className="CollectionFooter">
        <DescriptionContainer>
          <NameContainer style={{flexDirection: 'row',alignItems:'flex-start'}}>
            <span>{name} </span>
            <br />
            <br />
            <PriceContainer>{`$` + `${pricingText.toFixed(2)}`}</PriceContainer>
          </NameContainer>
            {shortDescription}
          <br />
          <br />
        </DescriptionContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
