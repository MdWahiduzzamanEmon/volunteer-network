import React from 'react';
import logo from '../../../logos/Group 1329.png'
import googleLogo from '../../../logos/google-logo-9824-32x32.ico'
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
const Login = () => {
    const { googleSign, setUser } = useAuth();
    const location = useLocation();
    const re_uri = location?.state?.from||'/home';
    const history = useHistory();

    const redirectGoogle = () => {
        googleSign()
            .then((result) => {
              history.push(re_uri)
            const user = result.user;
            setUser(user);
            // ...
          })
          .catch((error) => {
            toast.error(error.message);
          });
    }
    return (
      <div>
        <div className="container mt-5 py-5">
          <div>
            <img src={logo} alt="" className="img-fluid w-25" />
          </div>
          <section className="border border-2 rounded mt-5 mx-auto login-width ">
            <div className="py-3">
              <h3 className="fw-bold py-5">Login With</h3>
              <div>
                <button
                  className="border btn-width mx-auto py-2 btn rounded-pill fw-bold position-relative"
                  onClick={redirectGoogle}
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
                Don't have an account?
                <Link to="/register">Create an account</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Login;