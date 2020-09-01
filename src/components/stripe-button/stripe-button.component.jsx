import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 	'pk_test_51HMAidFxDK6SljMwokN8yw0qIZGWVGJOWi2mY5MqEPBSeZY1TUKXhGP2cWdb9Gqt8yylboBencj6pbS7dzSgFPsO00Z3dAfu9O'
    const onToken = token =>{
        console.log(token)
        alert('payment Successful');
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='Royal Clothing'
          billingAddress
          shippingAddress
          image=''
          description={`Your total is $${price}`}
          amount={ priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
