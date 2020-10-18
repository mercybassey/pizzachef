import React from 'react';
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
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {  selectCurrentUser} from './redux/user/user.selector';
import Footer from './components/footer/footer.component';


class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
       
      }
      setCurrentUser(userAuth);
      
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
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
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignIn />
            )
            }
          />
          <Route  path='/signup' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignUp />)} />
        </Switch>
        <Footer/>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
