import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
    useEffect(() => {
        document.title = "Log in - Stock Watch"
        document.getElementById('app').style.overflow = 'auto';
        document.getElementById('app').style.height = '100vh';
    }, []);

    return (
        <div className="auth">
            <div className="auth__card">
                <div className="auth__header">
                    <h3>Log in</h3>
                    <button><img src="/assets/icons/google-logo.svg" alt="" />Log in with Google</button>
                </div>
                <form className="auth__form">
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    {/* <div className="auth__form-terms">
                        <input id="terms" type="checkbox" />
                        <label for="terms">I agree with Terms and Privacy</label>
                    </div> */}
                    <input className="auth__form-submit" type="submit" value="Sign up" />
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
