import React, { useState } from 'react';
import Hero from '../../components/hero/hero.component';
//import Directory from '../../components/directory/directory.component';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import SHOP_DATA from '../shop/shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


import { HomePageContainer } from './homepage.styles';

const HomePage = ({ fetchCollectionsStart, match, ...props }) => {
    const [collections, setCollections] = useState(SHOP_DATA);
    return (
      <HomePageContainer>
        <Hero />
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </HomePageContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(HomePage);
