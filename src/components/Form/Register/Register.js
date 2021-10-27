import React from 'react';
import logo from "../../../logos/Group 1329.png";
import googleLogo from "../../../logos/google-logo-9824-32x32.ico";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
   const { googleSign } = useAuth();
   return (
     <div>
       <div className="container mt-5 pt-5">
         <div>
           <img src={logo} alt="" className="img-fluid w-25" />
         </div>
         <section className="border border-2 rounded mt-5 w-50 mx-auto">
           <div className="py-3">
             <h3 className="fw-bold py-5">Register With</h3>
             <div>
               <button
                 className="border w-50 mx-auto py-2 btn rounded-pill fw-bold position-relative"
                 onClick={googleSign}
               >
                 <img
                   src={googleLogo}
                   alt=""
                   className="position-absolute top-50 start-0 translate-middle-y"
                 />
                 Continue with Google
               </button>
             </div>
             <p className="py-4">
               Already have an account?
               <Link to="/login">Login</Link>
             </p>
           </div>
         </section>
       </div>
     </div>
   );
};

export default Register;