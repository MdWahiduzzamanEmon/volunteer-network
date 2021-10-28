import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../logos/PikPng.com_error-png_2277573.png'
const Error = () => {
    return (
      <div className="my-5 py-5 d-flex flex-column w-50 mx-auto">
        <img src={error} alt="error" className="img-fluid my-md-5 my-0" />
        <Link to="/">
          <button className="btn btn-danger mt-4 w-50 mx-auto">Home</button>
        </Link>
      </div>
    );
};

export default Error;