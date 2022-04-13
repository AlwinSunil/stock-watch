import React from "react"
import Navigation from "../../components/Navigation"
import UpdateDP from "../../components/UpdateDP"
import UpdateName from "../../components/UpdateName"
import "./ProfileUpdate.scss"

function UpdateProfile() {
    return (
        <>
            <Navigation header="Update Profile" />
            <div className="profileupdate">
                <UpdateName />
                <UpdateDP />
            </div>
        </>
    )
}

export default UpdateProfile
