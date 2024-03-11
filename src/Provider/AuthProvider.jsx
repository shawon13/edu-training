import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const userUpdate = (user, name, photoUrl) => {
        return updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
    }
    //Email verification
    const emailVerify = (user) => {
        return sendEmailVerification(user)
    }
    //Login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
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
    //facebook login
    const fbLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userUpdate,
        emailVerify,
        loginUser,
        logOut,
        fbLogin,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;