import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import journalApp from '../../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(journalApp)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    
// create user 
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// signin
const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}

// signout 
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

/* const updateUserProfile = (name, photo) =>{
    console.log(name, photo)
 return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo});
} */


// onauthstate
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
    })
    return unSubscribe
}, [])


    const authinfo = {
        user,
        loading,
        createUser,
        logOut,
        signInUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;