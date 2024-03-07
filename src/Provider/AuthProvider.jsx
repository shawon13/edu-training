import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const userProfile = (user, name, photoUrl) => {
        return updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
    }
    //Email verification
    const emailVerification = (user) => {
        return sendEmailVerification(user)
    }
    //Login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    //LogOut
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        userProfile,
        emailVerification,
        loginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;