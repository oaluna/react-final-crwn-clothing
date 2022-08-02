import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, route }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${route}`)}>
      {title}
    </TitleContainer>
    <PreviewContainer>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
