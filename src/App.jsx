import React from "react"
import {useState, useEffect} from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {UserProfileContext} from "./context/UserProfileContext"
import {UserLoggedInContext} from "./context/UserLoggedInContext"
import LoggedInRoutes from "./routes/LoggedInRoutes"
import GuestRoutes from "./routes/GuestRoutes"
import Loading from "./components/Loading"
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
                const uid = user.uid
                console.log("User found : " + uid)
                setUserLoggedIn(true)
                setUserProfile([user.providerData[0]])
                const doc = {
                    _id: user.providerData[0].uid,
                    _type: "user",
                    userName: user.providerData[0].displayName,
                    email: user.providerData[0].email,
                    userId: user.providerData[0].uid,
                    image: user.providerData[0].photoURL,
                }
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
