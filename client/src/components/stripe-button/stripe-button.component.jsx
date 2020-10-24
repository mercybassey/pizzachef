import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51HJI7xJPUg8KT8AHyj5WA9rZMFB24k9uWw6RudcQKdqVBw7z22l9lKpMIbcZHGOyEuvAjoarByNfLMblIkCKwlPn00LTpPzAb3';

    const onToken = token => {
       axios({
           url:'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       }).then(response => {
           alert('Payment successful')
       }).catch(error => {
           console.log('Payment error: ', JSON.parse(error));
           alert(
               'There was an issue with your payment. Please make sure you use the provided credit card.'
           );
       });
    };


   return (
       <StripeCheckout
       label='Pay Now'
       name='Peppe Pizza'
       billingAddress
       shippingAddress
       image='/img/peppes-pizza.svg'
       description={`Your total is ${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
       />
       
   );

};

export default StripeCheckoutButton;