import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Signin.css';

import { Colors } from '../../constants/colors';
import Button from '../../components/button';
import Input from '../../components/input';
import { useAuth } from '../../contexts/AuthProvider';
import { logoAmazon } from '../../utils/logoAmazon';

function Signin() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signin } = useAuth();

    const handleCreateAccount = () => {
        history.push('/registration');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setError('');
            setLoading(true);
            await signin(email, password);
            history.push('/')
        }
        catch{
            setError('Invalid Email or Password')
        }
        setLoading(false);
    }

    return (
        <div className='signin'>
            <Link to='/'>
                <img className='signin__logo' src={logoAmazon} alt='form-logo'/>
            </Link>
            {error && <div className='signin__error'>
                <p style={{fontSize: '17px', color: Colors.RED}}>There was a problem</p>
                <p style={{fontSize: '13px', marginTop: '8px'}}>{error}</p>
            </div>}
            <div className='signin__container'>
                <p className='signin__head'>Sign-In</p>
                <form onSubmit={handleSubmit}>
                    <div className='signin__input'>
                        <p>Email</p>
                        <Input type='text' value={email} onChange={e => setEmail(e.target.value)} required autoFocus/>
                    </div>
                    <div className='signin__input'>
                        <p>Password</p>
                        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div> 
                    <div className='signin__btn'>
                        <Button disabled={loading} type='submit'>Continue</Button>
                    </div>
                    <p className='signin__conditions__privacy'>By continuing, you agree to Amazon's <span style={{color: 'blue'}}>Conditions of Use</span> and <span style={{color: 'blue'}}>Privacy Notice</span>.</p>
                </form>
                <Link style={{color: Colors.BLUE, textDecoration: 'inherit'}} to='/forgot-password'>
                        <span className='signin__forgotPassword'>Forgot your password?</span>
                </Link>  
            </div>
            <div className='signin__new__account'>
                <p style={{color: Colors.GRAY}}>New to Amazon?</p>
                <Button onClick={handleCreateAccount} normal>Create your Amazon account</Button>
            </div>
        </div>
    )
}

export default Signin;
