import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import "./ProfileUpdate.scss";

function UpdateProfile() {
    return (
        <>
            <Navigation header="Update Profile" />
            <div className="profileupdate">
                <Link className="usersettings-btn" to="/updateprofile">
                    <p>Update Name</p>
                </Link>
                <Link className="usersettings-btn" to="/updateprofile">
                    <p>Update Password</p>
                </Link>
                <Link className="usersettings-btn" to="/updateprofile">
                    <p>Update Display Profile</p>
                </Link>
                {/* <form className="profileupdate__form auth__form">
                    <label>Password</label>
                    <input type="email" />
                    <label>Re-enter Password</label>
                    <input type="password" id="loginPassInput" />
                    <div className="auth__form-terms">
                        <input id="terms" type="checkbox" />
                        <label htmlFor="terms">Show Password</label>
                    </div>
                    <input
                        className="auth__form-submit"
                        type="submit"
                        value="Log in"
                    />
                </form> */}
            </div>
        </>
    );
}

export default UpdateProfile;
