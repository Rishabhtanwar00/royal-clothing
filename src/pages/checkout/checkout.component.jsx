import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartItems , selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

import CartItem from '../../components/cart-item/cart-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({ cartItems , total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
         { cartItems.map(cartItem =>(
             <CheckoutItem key={ CartItem.id } cartItem={ cartItem }/>
         ))}
        <div className="total">Total: ${total}</div>
        <div className="test-warning">
         *Please use the following test credit cart for payment*
         <br/>
         4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);