import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import logo from '../../assets/images/amazon-logo.png';
import { useStateValue } from '../../contexts/StateProvider';

import { useAuth } from '../../contexts/AuthProvider';

function Header() {
    
    const [{cart}, dispatch] = useStateValue();
    const { currentUser, signout } = useAuth();
    const history = useHistory();

    const handleSigninSignout = () => {
        if(currentUser) {
            dispatch({
                type: 'EMPTY_CART'
            })
            return signout();
        }
        else {
            history.push('/signin');
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src={logo}
                    alt=''
                />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'></input>
                <button className='header__searchIcon'><SearchIcon /></button>
            </div>
            <div className='header__nav'>
                
                    <div onClick={handleSigninSignout} className='nav__option'>
                        <span className='option__lineFirst'>
                            Hello {currentUser ? currentUser.displayName : 'Guest'}
                        </span>
                        <span className='option__lineSecond'>
                            {currentUser ? 'Sign Out' : 'Sign In'}
                        </span> 
                    </div>
               
                <div onClick={() => history.push('/orders')} className='nav__option'>
                    <span className='option__lineFirst'>
                        Returns
                    </span>
                    <span className='option__lineSecond'>
                        & Orders
                    </span>
                </div>
                <Link to='/cart' style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <div className='nav__optionCart'>
                        <ShoppingCartIcon />
                        <span className='option__cartCount'>
                        {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
