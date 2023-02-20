import React from 'react';
import "./index.scss";
import {useNavigate} from "react-router-dom";

import GoogleLogin from "react-google-login";
import {useGoogleLogout} from "react-google-login";

const Login = ({ }) => {
  const navigate = useNavigate();

  const responseGoogleSuccess = response => {
    console.log("Login Success")
    localStorage.setItem("username", "Anita");
    navigate("/");
  };

  const responseGoogle = response => {
    console.log("Login Failed");
  };

  return (
    <div className="login-form">
      <div>
        <h1>Akkio</h1>
        <GoogleLogin
          className='login-form-google-btn'
          clientId="642970808155-mkd61gb2b32op0rhjmhmpq2c1m6s777s.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

Login.propTypes = {

};

export default Login;
