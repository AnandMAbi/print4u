import React from "react";
import './App.css';
import {Link} from 'react-router-dom';

function Login () {
    return (
        <div className="Login">
            <div className="top">
            <h1>Welcome</h1>

            <h4>Login to continue</h4>
            </div>
            <div className="form-container">
            <form action="">
                <div className="form-email">
                <label for="email">Email</label>
                <input type="text" name="email" id="email"></input>
                </div>
                <div className="form-pw">
                <label for="Password">Password</label>
                <input type="text" name="Password" id="Password"></input>
                </div>
                <div className="sign-btn">
                <label for="signup">Don't have an account? </label>
                <Link to='/signup'>
                    <p>Sign up</p>
                </Link>
                </div>

                <Link to='/'>
                    <input type="button" value="Login" id="log-btn"></input>
                </Link>
            </form> 
            </div>
        </div>
    );
}

export default Login;