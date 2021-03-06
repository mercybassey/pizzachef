import React, {useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';


import {  selectCurrentUser} from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import Footer from './components/footer/footer.component';


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  exact path='/checkout' component={CheckoutPage} />
        <Route  exact 
        path='/signin' 
        render={() => 
          currentUser ? (
          <Redirect to='/' />
          ) : (
          <SignIn />
          )
          }
        />
        <Route  path='/signup' render={() => currentUser ? (<Redirect to='/' />) : (<SignUp /> )} />
      </Switch>
      <Footer/>
    </div>
  );

  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);




