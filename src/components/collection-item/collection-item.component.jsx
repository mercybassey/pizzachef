import React from 'react';
import { connect } from 'react-redux';
// import {Redirect} from 'react-router-dom';


import { addItem } from '../../redux/cart/cart.actions';
import  {selectCurrentUser} from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


import {
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

import SignIn from '../../pages/sign-in/sign-in.component';



const CollectionItem = ({ item, addItem, currentUser }) => {
    const { imageUrl, name, price } = item;
    
    return (
      <CollectionItemContainer>
        <BackgroundImage className='background-image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton
          className='add-button'
          onClick={() => currentUser  ? (addItem(item)) : (alert('SignIn to continue'))}
         >
          ADD TO CART
        </AddButton>
      </CollectionItemContainer>
    );
};

// {currentUser ? (
//   <AddButton
//   className='add-button'
//   onClick={() =>(addItem(item))}
//  >
//   ADD TO CART
// </AddButton>)
// : ( <Route  path='/signup' render={() => (<SignUp /> )}   />)
// }
  

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);



