import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item : { imageUrl , name , price , quantity } }) => (
    <div className="cart-item">
        <img src={ imageUrl } alt="item"/>
        <div className="item-details">
          <span className="name">{name}</span>
          <div className="price">{quantity} X ${price}</div>
        </div>
    </div>
)

export default CartItem;