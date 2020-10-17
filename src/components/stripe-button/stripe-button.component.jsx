import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51HJI7xJPUg8KT8AHyj5WA9rZMFB24k9uWw6RudcQKdqVBw7z22l9lKpMIbcZHGOyEuvAjoarByNfLMblIkCKwlPn00LTpPzAb3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


   return (
       <StripeCheckout
       label='Pay Now'
       name='Peppe Pizza'
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/Nz1.svg'
       description={`Your total is ${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
    //    allowRememberMe
       />
       
   );

};

export default StripeCheckoutButton;