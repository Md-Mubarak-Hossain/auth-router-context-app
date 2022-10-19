import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
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
     Google Login /Google SignIn
      ..........................*/
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    /*........................
   Log out /Sign out
   ..........................*/
    const logOut = () => { return signOut(auth); }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;