import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

import { Colors } from '../../constants/colors';
import Button from '../../components/button';
import Input from '../../components/input';
import { useAuth } from '../../contexts/AuthProvider';
import { logoAmazon } from '../../utils/logoAmazon';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState();

    const { reset } = useAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            setError('');
            setSuccess('');
            setLoading(true);
            await reset(email);
            setSuccess('Check inbox for further process')
        }
        catch{
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <div className='forgotPassword'>
           <Link to='/'>
                <img className='forgotPassword__logo' src={logoAmazon} alt='form-logo'/>
            </Link>
            {
                error && 
                <div className='forgotPassword__error'>
                    <p style={{fontSize: '17px', color: Colors.RED}}>There was a problem</p>
                    <p style={{fontSize: '13px', marginTop: '8px'}}>{error}</p>
                </div>
            }
            {
                success && 
                <div className='forgotPassword__success'>
                    <p style={{fontSize: '17px', color: Colors.GREEN}}>Successful</p>
                    <p style={{fontSize: '13px', marginTop: '8px'}}>{success}</p>
                </div>
            }
            <div className='forgotPassword__container'>
                <p className='forgotPassword__head'>Password Assistance</p>
                <form onSubmit={handleSubmit}>
                    <div className='forgotPassword__input'>
                        <p>Email</p>
                        <Input type='text' value={email} onChange={e => setEmail(e.target.value)} autoFocus/>
                    </div>
                    <div className='forgotPassword__btn'>
                        <Button disabled={loading} type='submit'>Continue</Button>
                    </div>
                </form>
            </div>
            <p style={{fontSize: '13px'}}>Back to <Link style={{color: Colors.BLUE, textDecoration: 'inherit'}} to='/signin'>Sign-In</Link></p>
        </div>
    )
}

export default ForgotPassword;
