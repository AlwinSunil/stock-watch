import React from "react";
import { Navigate, Link } from "react-router-dom";
import LoginLogic from "./LoginLogic";
import "./Login.scss";

function Login() {
    const {
        email,
        password,
        userAccount,
        loginwithGoogle,
        showPassword,
        loginSubmit,
        handleEmailChange,
        handlePasswordChange,
    } = LoginLogic();

    if (userAccount) {
        return <Navigate to="/" />;
    }

    return (
        <div className="auth">
            <div className="auth__card">
                <div className="auth__logo">
                    <img src="/assets/icons/logo-opt.svg" alt="" />
                </div>
                <div className="auth__header">
                    <h3>Log in</h3>
                    <button onClick={loginwithGoogle}>
                        <img src="/assets/icons/google-logo.svg" alt="" />
                        Log in with Google
                    </button>
                </div>
                <form className="auth__form">
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                        id="loginPassInput"
                    />
                    <div className="auth__form-terms">
                        <input
                            id="terms"
                            type="checkbox"
                            onClick={showPassword}
                        />
                        <label htmlFor="terms">Show Password</label>
                    </div>
                    <input
                        className="auth__form-submit"
                        type="submit"
                        value="Log in"
                        disabled={!email || !password}
                        onClick={loginSubmit}
                    />
                </form>
                <div className="auth__login">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
