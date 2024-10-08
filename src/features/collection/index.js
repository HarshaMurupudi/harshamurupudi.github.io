import React from 'react';

import ImageCollection from '../../components/elements/ImageCollection';

import { collectionData } from '../../data/collection';

const Collection = ({ onDrawerContentClick }) => {
  return (
    <div>
      <ImageCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Art'}
        collection={collectionData}
      />
    </div>
  );
};

export default Collection;
