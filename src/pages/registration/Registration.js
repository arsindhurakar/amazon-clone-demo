import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Registration.css';

import { Colors } from '../../constants/colors';
import Button from '../../components/button';
import Input from '../../components/input';
import { useAuth } from '../../contexts/AuthProvider';
import { logoAmazon } from '../../utils/logoAmazon';

function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        if(password !== confirmPassword){
            return setError('Passwords do not match');
        }
        try{
            setError('');
            setSuccess('');
            setLoading(true);
            await register(name, email, password);       
            setSuccess('Email registered successfully.');
            setTimeout(() => {
                history.push('/')
            }, 1000);
        }
        catch{
            setError('Email already registered');
            setLoading(false);
        }
    }
    
    return (
        <div className='registration'>
            <Link to='/'>
                <img className='registration__logo' src={logoAmazon} alt='form-logo'/>
            </Link>
            {
                success && 
                <div className='registration__success'>
                    <p style={{fontSize: '17px', color: Colors.GREEN}}>Successful</p>
                    <p style={{fontSize: '13px', marginTop: '8px'}}>{success}</p>
                </div>
            }
            <div className='registration__container'>
                <p className='registration__head'>Create Account</p>
                <form onSubmit={handleSubmit}>
                    <div className='registration__input'>
                        <p>Name</p>
                        <Input type='text' value={name} onChange={e => setName(e.target.value)} required autoFocus/>
                    </div>
                    <div className='registration__input'>
                        <p>Email</p>
                        <Input type='email' value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className='registration__input'>
                        <p>Password</p>
                        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    <p style={{color:Colors.GRAY, fontSize: '12px'}}>Passwords must be at least 6 characters.</p>
                    <div className='registration__input'>
                        <p>Re-enter Password</p>
                        <Input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                    </div>
                    {error && <p style={{color: Colors.RED, fontSize: '12px'}}>{error}</p>}
                    <div className='registration__btn'>
                        <Button disabled={loading} type='submit'>Create your Amazon Account</Button>
                    </div>
                </form>
                <p className='registration__conditions__privacy'>By creating an account, you agree to Amazon's <span style={{color: 'blue'}}>Conditions of Use</span> and <span style={{color: 'blue'}}>Privacy Notice</span>.</p>
            </div>
            <p style={{fontSize: '13px'}}>Already have an account? <Link style={{color: Colors.BLUE, textDecoration: 'inherit'}} to='/signin'>Sign-In</Link></p>
        </div>
    )
}

export default Registration;
