import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Header from '../components/header';
import Home from '../pages/home';
import Cart from '../pages/cart';
import GamingAccessories from '../pages/gamingAccessories';
import LaptopsAndTablets from '../pages/laptopsAndTablets';
import BeautyPicks from '../pages/beautyPicks';
import ComputersAndAccessories from '../pages/computersAndAccessories';
import GetFitAtHome from '../pages/getFitAtHome';
import FindYourIdealTv from '../pages/findYourIdealTv';
import StartOnYourHolidayEarly from '../pages/startOnYourHolidayEarly';
import Signin from '../pages/signin';
import Registration from '../pages/registration';
import ForgotPassword from '../pages/forgotPassword';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders';

const stripePromise = loadStripe('pk_test_51I4halH0OQ8P8A4gpM2AuGcxJAIH4Zw1IxJ8ZyUgJWkf2Q5HstyJHYH1KPlyswqXuZTcPkoznIL4Y8xpeFJSKS6800dZWxOH2P');
 
function Router() {
    return(
        <BrowserRouter>
           
            <Switch>
                <Route path='/cart'>
                    <Header />
                    <Cart />
                </Route>
                <Route path='/gaming-accessories'>
                    <Header />
                    <GamingAccessories />
                </Route>
                <Route path='/laptops-and-tablets'>
                    <Header />
                    <LaptopsAndTablets />
                </Route>
                <Route path='/beauty-picks'>
                    <Header />
                    <BeautyPicks />
                </Route>
                <Route path='/computers-and-accessories'>
                    <Header />
                    <ComputersAndAccessories />
                </Route>
                <Route path='/get-fit-at-home'>
                    <Header />
                    <GetFitAtHome />
                </Route>
                <Route path='/find-your-ideal-tv'>
                    <Header />
                    <FindYourIdealTv />
                </Route>
                <Route path='/start-on-your-holiday-early'>
                    <Header />
                    <StartOnYourHolidayEarly />
                </Route>
                <Route path='/signin'>
                    <Signin />
                </Route>
                <Route path='/registration'>
                    <Registration />
                </Route>
                <Route path='/forgot-password'>
                    <ForgotPassword />
                </Route>
                <Route path='/checkout'>
                    <Elements stripe={stripePromise}>
                        <Checkout />
                    </Elements>
                </Route>
                <Route path='/orders'>
                    <Header />
                    <Orders />
                </Route>
                <Route exact path='/'>
                    <Header />
                    <Home /> 
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;