import React from 'react';
import moment from 'moment';
import uuid from 'react-uuid';
import './Order.css';

import CheckoutProduct from '../../views/checkoutProduct';

function Order({ order }) {
    console.log(order)
    return (
        <div className='order'>
            <p className='order__id'>{order.id}</p>
            <p className='order__date'>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
                      
            {order.data.cart.map(item => {
                return <CheckoutProduct 
                            key={uuid()}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            alt={item.alt}
                            price={item.price}
                            ordered
                        />
                })}
        </div>
    )
}

export default Order;
