import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe;
    },[])

    const register = async (name, email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
           return auth.currentUser.updateProfile({
               displayName: name
           })
    }
    
    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const reset = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const signout = () => {
        return auth.signOut()
    }

    const value = {
        currentUser,
        register,
        signin,
        reset,
        signout
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}