import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';

import { Colors } from '../../constants/colors';
import ButtonLink from '../../components/buttonLink';
import { useStateValue } from '../../contexts/StateProvider';
import { useAuth } from '../../contexts/AuthProvider';

function Product(props) {

    const {id, title, img, alt, by, price, specificity, rating } = props;
    
    const [{ cart }, dispatch] = useStateValue();
    const { currentUser } = useAuth();
    
    const handleAddToList = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                img,
                alt,
                by,
                price,
                specificity,
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__image'>
                <img src={img} 
                    className="s__image" 
                    alt={alt}
                />
            </div>
            <div className='product__description'>
                <p className='product__title'>{title}</p>
                {by && <p className='by' style={{color: Colors.GRAY}}>by {by}</p>}
                <p><small>$</small><strong>{price}</strong></p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i} style={{color: Colors.ORANGE}}><StarIcon /></span>
                        ))}
                </div>
                <p className='specificity' style={{color: Colors.BLUE}}>
                    {specificity}
                </p>
                <div className='btn__add'>
                    <ButtonLink disabled={!currentUser} style={{color: '#0074D9'}} onClick={() => handleAddToList()}>Add to List</ButtonLink>
                </div> 
            </div>
        </div>
    )
}

export default Product;
