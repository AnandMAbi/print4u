import React from 'react';

function Signup() {
    return ( 
      <div className="Signup">
       <div className="top">
        <h1>Create an account</h1>
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
          <div className="form-cnfmpw">
            <label for="Confirm Password">Password</label>
            <input type="text" name="Password" id="Confirm Password"></input>
          </div>
          <div className="login-btn">
            <label for="signup">Already have an account?</label>
            <a href="#">Login</a>
          </div>
  
          <input type="button" value="Sign up" id="sgn-btn"></input>
        </form> 
      </div>
      </div>
    );
  }
  
  export default Signup;
  