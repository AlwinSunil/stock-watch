import { getAuth, signOut } from "firebase/auth";
import "./Navbar.scss";

function Navbar() {

    function signOutUser() {
        const auth = getAuth();
        signOut(auth).then(() => { }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="navbar">
            <img src="/assets/icons/logo-mobile.svg" alt="" />
            <div className="navbar__avatar-container">
                <img onClick={signOutUser} className="navbar__avatar" src="/assets/icons/avatar.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar;
