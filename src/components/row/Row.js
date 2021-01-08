import React from 'react';
import './Row.css';

function Row({ children }) {
    return (
        <div className='row'>
            {children}
        </div>
    )
}

export default Row;
