import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import './Orders.css'

import Order from '../order';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthProvider';

function Orders() {

    const [orders, setOrders] = useState();

    const history = useHistory();
    const { currentUser } = useAuth();

    useEffect(() => {
        if(currentUser){
            db
            .collection('users')
            .doc(currentUser.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        else {
            setOrders([])
        };
    },[currentUser])
    console.log(orders)
    return (
        <div className='orders'>
            {
                orders?.length > 0 &&
                    <p className='orders__head'>Your Orders</p>
            }
            {
                orders?.length < 1 &&
                    <div className='orders__noOrder'>
                        <img src='https://i.pinimg.com/originals/74/c1/85/74c1853896c88c0a2bff2948efd5f034.png' alt='no_order'/>
                        <div className='orders__noOrder__description'>
                        <p className='orders__noOrder__description__head'>No Amazon orders found.</p>
                        <p className='orders__noOrder__description__body'>You have not placed any orders in past 3 months.</p>
                        </div>
                    </div>
            }
            {
                currentUser 
                ? 
                orders?.map(order => {
                    return (
                        <Order key={uuid()} order={order}/>
                    )
                })
                :
                history.push('/signin')
            }
        </div>
    )
}

export default Orders;
