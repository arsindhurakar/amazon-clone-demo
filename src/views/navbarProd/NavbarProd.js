import React from 'react';
import './NavbarProd.css'

function NavbarProd({ departments }) {
    return (
        <div className='navbarProd'>
            <div className='nav__section'>
                <strong>Department</strong>
                <ul>
                {departments.map((department, index) => {
                        return <li className='department' key={`department-${index}`}>{department}</li>
                    }      
                )}
                </ul>    
            </div>
            
            <div className='nav__section'>
                <strong>Price</strong>
                <ul className='nav__list'>
                    <li>Under $10</li>
                    <li>$10 to $15</li>
                    <li>$15 to $25</li>
                    <li>25 to $35</li>
                    <li>$35 & Above</li>
                </ul>
            </div>      
             
            <div className='nav__section'> 
                <strong>Availabilty</strong>
                <ul className='nav__list'>
                    <li><input type='checkbox'/>Include Out of Stock</li>
                </ul>
            </div> 
        </div>
    )
}

export default NavbarProd;