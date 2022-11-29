import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContex= createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [loading, setLoading]= useState(true)
    const [user, setUser]= useState('')

    // create user 

    const createUser=(email,password)=>{ 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     // user  login
   
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
         setLoading(true)
        const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
             console.log('user obserbing')
             setUser(currentUser)
             setLoading(false)
             console.log("user observing")
          })
          return ()=>{
              unsubscribe()
          }
      },[])

//logOUt

      const logOut =()=>{
        setLoading(true)
         return signOut(auth)
       } 
    //send to all
    const authInfo={
       createUser,
       login,
       loading,
       setLoading,
       user,
       logOut,
   }
    return (
        <AuthContex.Provider value={authInfo}>
          {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;