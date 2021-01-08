import React from 'react';
import { useHistory } from 'react-router-dom';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import Button from '../../components/button';

import { useStateValue } from '../../contexts/StateProvider';
import { getCartTotal } from '../../dataLayer/reducer';

function Subtotal() {

    const [{ cart }] = useStateValue();

    const history = useHistory();

    return (
        <div className='subtotal__container'>
            <CurrencyFormat 
                renderText={
                    (value) => (
                        <>
                            <p>
                                Subtotal ({cart?.length} items): <strong>{value}</strong>
                            </p>
                            <small className='subtotal__gift'>
                                <input type='checkbox' />
                                This order contains a gift
                            </small>
                        </>
                    )
                }
                displayType={'text'}
                thousandSeparator={true}
                decimalSepartor={2}
                prefix={'$'}
                value={getCartTotal(cart)}                 
            />
            <Button onClick={() => history.push('/checkout')}>Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal;
