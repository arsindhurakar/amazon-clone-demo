import React from 'react';
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';
import './Cart.css';

import Subtotal from '../../views/subtotal';
import CheckoutProduct from '../../views/checkoutProduct';
import { useStateValue } from '../../contexts/StateProvider';
import { useAuth } from '../../contexts/AuthProvider';
import { Colors } from '../../constants/colors';
import Button from '../../components/button';

function Cart() {

    const [{ cart }] = useStateValue();
    const { currentUser } = useAuth();

    const history = useHistory();

    return (
        <div className='cart'>
                    {   
                        !currentUser 
                        ?
                        <div className='cart__noUser'>
                            <img src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' alt='empty_cart'/>
                            <div className='cart__noUser__right'>
                                <p>Your Amazon Cart is empty</p>
                                <span>Shop today's deal</span>
                                <div className='cart__noUser__btns'>
                                    <div className='cart__noUser__btnLeft'>
                                        <Button onClick={() => history.push('/signin')}>Sign in to your account</Button>
                                    </div>
                                    <div className='cart__noUser__btnRight'>
                                        <Button onClick={() => history.push('/registration')} normal>Sign up now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        cart.length < 1 
                        ?
                        <div className='cart__empty'>
                            <p className='cart__empty__head'>Your Amazon Cart is empty.</p>
                            <p className='cart__empty__body'>
                                Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                                Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.
                            </p>
                        </div>
                        :
                        <div className='cart__container'>
                            <div className='cart__left'>
                                <div className='cart__product'>
                                    <h2>Shopping Cart</h2>
                                    <p className='cart__priceLabel' style={{color: Colors.GRAY}}>Price</p>
                                    {
                                        cart.map(data => {
                                        return <CheckoutProduct 
                                            key={uuid()}
                                            id={data.id}
                                            title={data.title}
                                            img={data.img}
                                            alt={data.alt}
                                            price={data.price}
                                        />
                                        })
                                    }
                                </div>
                            </div>
                            <div className='cart__right'>
                                <Subtotal />
                            </div>
                        </div>
                    }
        </div>
        
    )
}

export default Cart;
