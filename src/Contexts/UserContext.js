import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Parve3' });
    /*........................
    Register /SignUp
    ..........................*/
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /*........................
   Login /SignIn
   ..........................*/
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    /*........................
   Log out /Sign out
   ..........................*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = { user, createUser, signIn };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;