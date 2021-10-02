import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss"

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [termsCheckbox, setTermsCheckbox] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTermsChange = (event) => {
        setTermsCheckbox(!termsCheckbox);
    };

    useEffect(() => {
        document.title = "Sign up - Stock Watch"
        document.getElementById('app').style.overflow = 'auto';
        document.getElementById('app').style.height = 'auto';
    }, []);

    return (
        <div className="auth">
            <div className="auth__card">
                <div className="auth__logo">
                    <img src="/assets/icons/logo-opt.svg" alt="" />
                </div>
                <div className="auth__header">
                    <h3>Sign up</h3>
                    <button><img src="/assets/icons/google-logo.svg" alt="" /> Sign up with Google</button>
                </div>
                <form className="auth__form">
                    <label>Name</label>
                    <input type="text" onChange={handleNameChange} value={name} />
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                    <div className="auth__form-terms">
                        <input id="terms" type="checkbox" onChange={handleTermsChange} value={termsCheckbox} disabled={!name || !email || !password} />
                        <label htmlFor="terms">I agree with Terms and Privacy</label>
                    </div>
                    <input className="auth__form-submit" type="submit" value="Sign up" disabled={!name || !email || !password || !termsCheckbox} />
                </form>
                <div className="auth__login">
                    <p>Already have an account?</p>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
