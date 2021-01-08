import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

import Input from '../../components/input';
import Button from '../../components/button';
import { getCartTotal } from '../../dataLayer/reducer';
import { useStateValue } from '../../contexts/StateProvider';
import { useAuth } from '../../contexts/AuthProvider';
import axios from '../../utils/axios';
import { db } from '../../firebase';

function Checkout() {
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [addressPrimary, setAddressPrimary] = useState('');
    const [addressSecondary, setAddressSecondary] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const [{ cart }, dispatch] = useStateValue();
    const { currentUser } = useAuth();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    // console.log(currentUser)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `checkout/create?total=${getCartTotal(cart)*100}`
            })
            setClientSecret(response.data.clientSecret)
            // console.log(response)
        }
        getClientSecret();
    }, [cart])

    console.log('clientSecret>>>>>>>', clientSecret)
    // console.log('cart>>>>>>', cart)
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent }) => {
            db
                .collection('users')
                .doc(currentUser.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                    name,
                    phone,
                    addressPrimary,
                    addressSecondary,
                    city,
                    state,
                    zip
                })

            setSucceeded(true);
            setError(null);
            setLoading(false);

            dispatch({
                type: 'EMPTY_CART'
            });

            history.replace('/orders');
        })
        setLoading(false);
    }
        
    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error ? error.message : '')
    }

    return (
        <div className='checkout'>
            <p>{error}</p>
            <div className='checkout__container'>
                <img className='logo' src='https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/checkout-spc-address-banner._CB485941369_.gif' alt='checkout-amazon-logo' />
                <div className='checkout__title'>
                    <p>Select a shipping address</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='checkout__input'>
                        <label>Full name (First and Last name)</label>
                        <Input onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='checkout__input'>
                        <label>Phone number</label>
                        <Input onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div className='checkout__input'>
                        <label>Address</label>
                        <Input onChange={(e) => setAddressPrimary(e.target.value)} placeholder='Street Adress or P.O. Box' required/>
                        <Input onChange={(e) => setAddressSecondary(e.target.value)} style={{marginTop: '6px'}} placeholder='Apt, Suite, Unit, Building, Floor, etc' requried/>
                    </div>
                    <div className='checkout__input__csz'>
                        <div className='checkout__input'>
                            City
                            <Input onChange={(e) => setCity(e.target.value)} required/>
                        </div>
                        <div className='checkout__input'>
                            State
                            <Input onChange={(e) => setState(e.target.value)} required/>
                        </div>
                        <div className='checkout__input'>
                            Zip Code
                            <Input onChange={(e) => setZip(e.target.value)} required/>
                        </div>
                    </div>
                    <div className='payment__details'>
                        <p>Card Details</p>
                        <div className='payment__cardDetail'>
                            <CardElement 
                                onChange={handleChange}
                                options={{
                                    style: {
                                      base: {
                                        fontSize: '12px',
                                        color: '#424770',
                                        '::placeholder': {
                                          color: '#aab7c4',
                                        },
                                      },
                                      invalid: {
                                        color: '#9e2146',
                                      },
                                    },
                                  }}
                                />
                        </div>
                        <div className='payment__cost'>
                            <CurrencyFormat 
                                renderText={value => {
                                    return <p>Order Cost: {value}</p>
                                }}
                                value={getCartTotal(cart)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        </div>
                    </div>
                    <Button disabled={disabled || loading} type='submit'>{loading ? 'Processing' : 'Buy Now'}</Button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;



// useEffect(() => {
//     const getClientSecret = async () => {
//         const response = await axios({
//             method: 'post',
//             //stripe expects the total in currencies subunits
//             url: `checkout/create?total=${getCartTotal(cart)*100}`
//         })
//         console.log(response)
//         setClientSecret(response.data.clientSecret)
//     }
//     getClientSecret();
// }, [cart])

// console.log('Client secret >>>>>>', clientSecret)

// const handleSubmit = async (e) => {
//    e.preventDefault();
//    setLoading(true);
   
//    const payload = await stripe.confirmCardPayment(clientSecret, {
//        payment_method: {
//            card: elements.getElement(CardElement)
//        }
//    })
//    .then(({ paymentIntent }) => {
//         setSucceeded(true);
//         setError(false);
//         setLoading(false);

//         dispatch({
//             type: 'EMPTY_CART'
//         })
        
//         history.replace('/')
//    })
//    setLoading(false);
// }