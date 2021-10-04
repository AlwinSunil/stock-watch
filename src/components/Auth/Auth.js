import { Link } from "react-router-dom";
import "./Auth.scss";

function Auth() {
  return (
    <div className="auth">
      <div className="auth__card">
        <div className="auth__header">
          <h3>Sign up</h3>
          <button>
            <img src="/assets/icons/google-logo.svg" alt="" /> Sign up with
            Google
          </button>
        </div>
        <form className="auth__form">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <div className="auth__form-terms">
            <input id="terms" type="checkbox" />
            <label for="terms">I agree with Terms and Privacy</label>
          </div>
          <input className="auth__form-submit" type="submit" value="Sign up" />
        </form>
        <div className="auth__login">
          <p>Already have an account?</p>
          <Link>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
