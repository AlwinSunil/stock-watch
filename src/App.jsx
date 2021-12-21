import React from "react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProfileContext } from "./context/UserProfileContext";
import Loading from "./components/Loading";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import About from "./pages/About";
import ProfileUpdate from "./pages/ProfileUpdate";
import "./firebase.jsx";
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
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage loggedin={userLoggedIn} />}
                        />
                        <Route path="/addstock" element={<Search />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/updateprofile" element={<About />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </UserProfileContext.Provider>
            </div>
        );
    } else if (userLoggedIn === false) {
        return (
            <div className="app" id="app">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        );
    }

    return <Loading />;
}

export default App;
