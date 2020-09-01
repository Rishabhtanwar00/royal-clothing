import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const  Header = ({ currentUser , hidden }) => {
    console.log(currentUser)
    return(
    <div className="header">
       <Link className="logo-container" to="/">
           <Logo className='logo'/>
       </Link>
       <div className="options">
           <Link className="option" to="/shop">Shop</Link>
           <Link className="option" to="/">Contact</Link>
           {
               currentUser ?
               (
               <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
               ):
               (
               <Link className='option' to='/signin'>Sign In</Link>
               )
           }
           <CartIcon/>
       </div>
       {
         hidden? null : <CartDropdown/>
       }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);