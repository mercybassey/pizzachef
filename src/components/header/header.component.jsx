import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import  {selectCurrentUser} from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/peppes-pizza.svg';

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from '../header/header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='rotate' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact' >
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}> 
                SIGN OUT
                </OptionLink>
            ):(
                <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown />
        }
   
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);