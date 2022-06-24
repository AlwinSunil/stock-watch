import React, { useContext, useEffect, useState } from "react"
import { UserProfileContext } from "@context/UserProfileContext"
import Navigation from "@components/Navigation"
import UpdateName from "@components/UpdateName"
import UpdatePassword from "@components/UpdatePassword"
import "./ProfileUpdate.scss"

function UpdateProfile() {
    const [userProfile] = useContext(UserProfileContext)
    const [loginProviderGoogle, setLoginProviderGoogle] = useState()

    useEffect(() => {
        if (userProfile) {
            console.log(userProfile[0])
            if (userProfile[0].providerId === "google.com") {
                setLoginProviderGoogle(true)
                console.log("Provider : Google.com")
            } else {
                setLoginProviderGoogle(false)
            }
        }
    }, [userProfile])

    return (
        <>
            <Navigation header="Update Profile" />
            <div className="profileupdate">
                <UpdateName />
                {loginProviderGoogle ? null : <UpdatePassword />}
            </div>
        </>
    )
}

export default UpdateProfile
