import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "./context/UserProfileContext";
import Loading from "./components/Loading";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import About from "./pages/About";
import ProfileUpdate from "./pages/ProfileUpdate";
import "./firebase.js";
import "./App.scss";

function App() {
    const [loader, setLoader] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState();
    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("User found : " + uid);
                setUserProfile([user.providerData[0]]);
                setUserLoggedIn(true);
            } else {
                console.log("No user found");
                setUserLoggedIn(false);
            }
        });
        setLoader(false);
    }, []);

    if (loader) {
        return <Loading />;
    }

    if (userLoggedIn === true) {
        return (
            <div className="app" id="app">
                <UserProfileContext.Provider value={[userProfile]}>
                    <Route path="/" exact>
                        <HomePage loggedin={userLoggedIn} />
                    </Route>
                    <Route path="/addstock" component={Search} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/about" component={About} exact />
                    <Route
                        path="/updateprofile"
                        component={ProfileUpdate}
                        exact
                    />
                    <Redirect from="*" to="/" />
                </UserProfileContext.Provider>
            </div>
        );
    } else if (userLoggedIn === false) {
        return (
            <div className="app" id="app">
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} exact />
                <Redirect from="/" to="/login" />
            </div>
        );
    }

    return <Loading />;
}

export default App;
