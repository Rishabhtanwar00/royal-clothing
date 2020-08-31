import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) =>(
     <div className='shop-page'>
       <CollectionOverview/>
       <Route exact path={`${match.path}`}  Component={CollectionOverview} />
       <Route path = {`${match.path}/:collectionID`} component={CollectionPage}/>
     </div>
);

export default ShopPage; 