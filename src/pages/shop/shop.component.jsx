import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectColletions } from  '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/Collection-Preview/collection-preview.component';

const ShopPage = ({ collections }) =>(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            )
            )}
        </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectColletions
})


export default connect(mapStateToProps)(ShopPage);