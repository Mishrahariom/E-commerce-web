import React from "react";
import "./register.css"

export const Register = () => {
  return (
    <div>
    <div className="login-page">
        <div className="login-container">
            <div className="signin" id="signin">
                <h2>Register</h2>
                <div className="form">
                    <div className="user-box">
                        <input type="text" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" />
                        <label>Password</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">Remember me</label>
                    </div>
                    <div className="submit-btn">
                        <button>SIGN UP</button>
                    </div>
                </div>
                <span>Not a member? </span>
                <a href="/">Sign up now.</a>
            </div>
            </div>
           
       
    </div>
</div>
  );
};
