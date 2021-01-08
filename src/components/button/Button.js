import React from 'react';
import './Button.css';

import { Colors } from './../../constants/colors';

function Button({ onClick, children, type, disabled, normal }) {
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor: !normal && Colors.ORANGE }} 
            type={type}
            disabled={disabled}
            className='btn-primary'
            >
                { children }
            </button>
    )
}

export default Button;
