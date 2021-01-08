import React from 'react';
import './Input.css';

function Input({ type, value, placeholder, onChange, style, required, autoFocus }) {
    return (
       <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
            required = {required}
            autoFocus={autoFocus}
            className='inputField'
            />
    )
}

export default Input;
