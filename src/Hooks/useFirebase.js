import React from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast} from "react-toastify"
initializeFirebase()

const provider = new GoogleAuthProvider();

const useFirebase = () => {

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
    const auth = getAuth();


  const googleSign = () => {
      setLoading(true)
       return signInWithPopup(auth, provider)
          
    }

  React.useEffect(() => {
       setLoading(true)
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user);
         } else {
           setUser({});
         }
         setLoading(false)
       });
       return unsubscribe;
     }, []);
//signout 

  const logout = () => {
  setLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
        
      })
      setLoading(false);
  }
    return {
      googleSign,
      setUser,
      user,
      logout,
      loading,
      setLoading,
    };
};

export default useFirebase;