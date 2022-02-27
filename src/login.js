import React from "react";
import './App.css';

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
                <a href="#">Sign up</a>
                </div>

                <input type="button" value="Login" id="log-btn"></input>
            </form> 
            </div>
        </div>
    );
}

export default Login;