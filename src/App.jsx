import React, { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { UserLoggedInContext } from "./context/UserLoggedInContext"
import { UserProfileContext } from "./context/UserProfileContext"
import Loading from "./components/Loading"
import GuestRoutes from "./routes/GuestRoutes"
import LoggedInRoutes from "./routes/LoggedInRoutes"
import "./firebase.jsx"
import "./App.scss"

function App() {
    const [loader, setLoader] = useState(true)
    const [userLoggedIn, setUserLoggedIn] = useState()
    const [userProfile, setUserProfile] = useState()

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User found : " + user.uid)
                console.log(user)
                setUserLoggedIn(true)
                setUserProfile([user.providerData[0]])
            } else {
                console.log("No user found")
                setUserLoggedIn(false)
            }
        })

        setLoader(false)
    }, [])

    if (loader) {
        return <Loading />
    }

    if (userLoggedIn === true) {
        return (
            <div className="app" id="app">
                <UserLoggedInContext.Provider value={[userLoggedIn]}>
                    <UserProfileContext.Provider value={[userProfile]}>
                        <LoggedInRoutes />
                    </UserProfileContext.Provider>
                </UserLoggedInContext.Provider>
            </div>
        )
    } else if (userLoggedIn === false) {
        return (
            <div className="app" id="app">
                <GuestRoutes />
            </div>
        )
    }

    return <Loading />
}

export default App
