import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
 
   
    

    
    // create account 

    const createAccount = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update Profile 

    const userProfileUpdate = (name,image) =>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL:image})
    }

    //  Login 

    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign in with google 
    const signInWithPop =(provider)=>{
        setLoading(true)

        return signInWithPopup(auth,provider)
    }

    const LogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    // on auth state change 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // if(currentUser){
                setLoading(false)
            // }
            setUser(currentUser)
            console.log(currentUser)

            
        });
        return ()=>{
            unSubscribe()
        }
     },[])

    //  Log Out 

    

    // all tourists spots

    
    
    
    
    


    const authInfo = {
        user,
        createAccount,
        logInUser,
        signInWithPop,
        loading,
        setLoading,
        LogOut,
        userProfileUpdate,
        setUser,
  
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}