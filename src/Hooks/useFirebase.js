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
    const auth = getAuth();


    const googleSign = () => { 
        signInWithPopup(auth, provider)
          .then((result) => {
           
              const user = result.user;
              setUser(user);
            // ...
          })
          .catch((error) => {
            toast.error(error.message);
          });
    }

     React.useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user);
         } else {
           setUser({});
         }
       });
       return unsubscribe;
     }, []);
//signout 

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      
  }
    return {
      googleSign,
      user,
      logout,
    };
};

export default useFirebase;