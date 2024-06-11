import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { axiosCommon } from "../Hooks/useAxiosCommon";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    // create account 

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update Profile 

    const userProfileUpdate = (name, image) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: image })
    }

    //  Login 

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google 
    const signInWithPop = (provider) => {
        setLoading(true)

        return signInWithPopup(auth, provider)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // on auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser)

            if(currentUser){
                // set token 
                axiosCommon.post('jwt',{email:currentUser.email})
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                // remove token
                localStorage.removeItem('access-token')
            }

            console.log(currentUser)
            setLoading(false)


        });
        return () => {
            unSubscribe()
        }
    }, [])

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