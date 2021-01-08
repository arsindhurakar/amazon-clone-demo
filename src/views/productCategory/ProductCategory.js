import React from 'react';
import './ProductCategory.css';

import { Colors } from './../../constants/colors';

function ProductCategory({ title, image, extras, onClick }) {
    return (
        <div onClick={onClick} className='productCategory'>
            <div className='productCategory__description'>
                <p>
                    <strong>
                        {title}
                    </strong>
                </p>
            </div>
            <img className='productCategory__image' src={image} alt=''/>
            <div className='productCategory__extras'>
                <p style={{color: Colors.BLUE, textDecoration:'inherit'}}>{extras}</p>
            </div>
        </div>
    )
}

export default ProductCategory;
