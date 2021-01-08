import React from 'react';
import { useHistory } from 'react-router-dom';
import './Ads.css';

import ad from '../../assets/images/ad-image.jpg';
import Button from '../../components/button';

function Ads() {

    const history = useHistory();

    return (
        <div className='ads'>
            <div className='ads__signIn'>
                <p>
                    <strong>Sign in for the best experience</strong>
                </p>
                <Button onClick={() => history.push('/signin')}>Sign in securely</Button>
            </div>
            <div className='ads__image__container'>
                    <img className='ads__image' src={ad} alt='' />
            </div>
        </div>
    )
}

export default Ads;
