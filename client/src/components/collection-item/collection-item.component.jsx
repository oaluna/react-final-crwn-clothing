import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  NameContainerRow,
  PriceContainer,
  DescriptionContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem, history, collectionRoute }) => {
  const { name, price, shortDescription, imgUrl, id } = item;

  const handleNavigate = () => {
    history.push(`/shop/${id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(item);
  };

  return (
    <CollectionItemContainer onClick={handleNavigate}>
      <BackgroundImage className="image" imageUrl={imgUrl} alt="product" />
      <NameContainer>
        <span>{name} </span>
        <PriceContainer>{`$` + `${Number(price).toFixed(2)}`}</PriceContainer>
        <br />
        <br />
      </NameContainer>
      <CollectionFooterContainer className="CollectionFooter">
        <DescriptionContainer>
          <NameContainerRow>
            <span>{name} </span>
            <br />
            <br />
            <PriceContainer>{`import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  NameContainerRow,
  PriceContainer,
  DescriptionContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem, history, collectionRoute }) => {
  const { name, price, shortDescription, imgUrl, id } = item;

  const handleNavigate = () => {
    history.push(`/shop/${id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(item);
  };

  return (
    <CollectionItemContainer onClick={handleNavigate}>
      <BackgroundImage className="image" imageUrl={imgUrl} alt="product" />
      <NameContainer>
        <span>{name} </span>
        <PriceContainer>{`$` + `${Number(price).toFixed(2)}`}</PriceContainer>
        <br />
        <br />
      </NameContainer>
      <CollectionFooterContainer className="CollectionFooter">
        <DescriptionContainer>
          <NameContainerRow>
            <span>{name} </span>
            <br />
            <br />
 + `${Number(price).toFixed(2)}`}</PriceContainer>
          </NameContainerRow>
            {shortDescription}
          <br />
          <br />
        </DescriptionContainer>
        <AddButton onClick={handleAdd} inverted>
          Add to cart
        </AddButton>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CollectionItem));