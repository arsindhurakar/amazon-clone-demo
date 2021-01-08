import React from 'react';
import './CheckoutProduct.css';

import ButtonLink from '../../components/buttonLink';
import { Colors } from '../../constants/colors';
import { useStateValue } from '../../contexts/StateProvider';

function CheckoutProduct(props) {

    const { id, title, img, alt, price, ordered } = props;
    
    const [{ cart }, dispatch] = useStateValue(); 
    
    const handleRemoveFromList = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id
        })
    }

    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__image'>
                <img src={img} 
                    className="d__image" 
                    alt={alt}
                />
            </div>
            <div className='checkoutProduct__description'>
                <p style={{color: Colors.BLUE}} className='checkoutProduct__title'>{title}</p>                
                {
                    !ordered && 
                    <>
                        <p style={{color: Colors.GREEN}} className='checkoutProduct__availability'>In Stock</p>
                        <div className='checkoutProduct__gift'>
                            <input type='checkbox' />
                            <label>This is a Gift <span style={{color: Colors.BLUE}}>Learn More</span></label>
                        </div> 
                        <div className='btn__remove'>
                            <ButtonLink style={{color: Colors.RED}} onClick={() => handleRemoveFromList()}>Remove</ButtonLink>
                        </div> 
                        <div className='checkoutProduct__price'>
                            <p><small>$</small><strong>{price}</strong></p>
                        </div>
                    </>
                }        
            </div>
            
        </div>
    )
}

export default CheckoutProduct;
