import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ProductPage from './pages/product/product.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import HeaderComponent from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const stripePromise = loadStripe("pk_live_51TgAN5AcBppNH3ZcxevkP9WaHkdEl02gH599i7qwMIfRbigWD0i9wFZunSuVQDyD6JNcsLazdLQeUfeZtlWRlTai007KMHMIfS");

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    return (
        <div>
            <Elements stripe={stripePromise}>
                <HeaderComponent />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path=' /shop' component={ShopPage} />           <Route path='/shop/:productId' component={ProductPage} />
                    <Route path='/contact' component={ContactPage} />           <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin' render={() => currentUser ? (
                        <Redirect to='/' />
                    ) : (<SignInAndSignUpPage />
                    )} />
                </Switch>
                <footer>
                    <p>&copy; 2022 by <a href="https://oscarluna.dev ">Oscar Armando Luna</a></p>
                </footer>
            </Elements>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);