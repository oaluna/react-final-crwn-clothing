import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import LogoFlowers from '../../assets/logo-flowers.svg';
import {
  HeaderContainer,
  LogoContainer,
  HeaderTitle,
  OptionsContainer,
  OptionLink
} from './header.styles'

const Logo = () => <img src={LogoFlowers} alt="glowing-flowers" style={{position: "relative", width: "300px", height: "250px"}}/>


const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
 
 <Link to='/'>

        <LogoContainer>
         <span><Logo /></span>
   </LogoContainer>

   </Link>



<OptionsContainer className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
 
      <OptionLink to='/shop'><li>SHOP</li></OptionLink>
    
     
      <OptionLink to='/contact'><li>CONTACT</li></OptionLink>
    
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          <li>SIGN OUT</li>
        </OptionLink>
      ) : (
        <OptionLink to='/signin'><li>SIGN IN</li></OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
