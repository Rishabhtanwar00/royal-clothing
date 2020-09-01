import React from 'react';

import './App.css';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import CheckOutPage from './pages/checkout/checkout.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { Route , Switch , Redirect } from 'react-router-dom'; 

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth =null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
      setCurrentUser({ userAuth });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route  path='/shop' component={ ShopPage }/>
          <Route excat path='/checkout' component={ CheckOutPage }/>
          <Route excat path='/signin' component={  SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps , mapDispatchToProps)(App);
