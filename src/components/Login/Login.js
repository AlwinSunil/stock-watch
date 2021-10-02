import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Redirect, Link } from "react-router-dom";
import "./Login.scss";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userAccount] = useState();

    const provider = new GoogleAuthProvider()
    const auth = getAuth();

    function signupwithGoogle() {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(result.user);
            console.log("Token :" + token);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error);
            console.log(errorCode + " : " + errorMessage);
            console.log("Credential : " + credential);
            console.log(error.email);
        });
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        document.title = "Log in - Stock Watch"
        document.getElementById('app').style.overflow = 'auto';
        document.getElementById('app').style.height = '100vh';
    }, []);

    if (userAccount) {
        return <Redirect to="/" />
    }

    return (
        <div className="auth">
            <div className="auth__card">
                <div className="auth__logo">
                    <img src="/assets/icons/logo-opt.svg" alt="" />
                </div>
                <div className="auth__header">
                    <h3>Log in</h3>
                    <button onClick={signupwithGoogle}><img src="/assets/icons/google-logo.svg" alt="" />Log in with Google</button>
                </div>
                <form className="auth__form">
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                    <input className="auth__form-submit" type="submit" value="Log in" disabled={!email || !password} />
                </form>
                <div className="auth__login">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
