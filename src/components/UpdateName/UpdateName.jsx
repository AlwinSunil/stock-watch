import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import AlertModal from "../AlertModal/AlertModal"
import "./UpdateName.scss"

function UpdateName() {
    const [isActive, setIsActive] = useState(false)
    const [profileName, setProfileName] = useState("")

    const [err, setErr] = useState()
    const [success, setSuccess] = useState()

    const updateProfileName = (e) => {
        e.preventDefault()
        const auth = getAuth()
        updateProfile(auth.currentUser, {
            displayName: profileName,
        })
            .then(() => {
                setProfileName(null)
                setSuccess(true)
            })
            .catch((error) => {
                setProfileName(null)
                setErr(true)
            })
    }

    return (
        <>
            {success && (
                <AlertModal
                    alert="Successfully updated profile name"
                    state="success"
                />
            )}
            {err && (
                <AlertModal alert="Failed to update profile name" state="err" />
            )}
            <div className="usersettings-holder">
                <div
                    className="usersettings-btn menu"
                    onClick={() => setIsActive(!isActive)}
                >
                    <p>Update Name</p>
                </div>
                {isActive && (
                    <form className="profileupdate__form auth__form profileupdate__open">
                        <label>Enter new Display Name</label>
                        <input
                            value={profileName}
                            type="text"
                            onChange={(e) => setProfileName(e.target.value)}
                        />
                        <input
                            className="auth__form-submit"
                            type="submit"
                            value="Update Name"
                            onClick={(e) => updateProfileName(e)}
                        />
                    </form>
                )}
            </div>
        </>
    )
}

export default UpdateName
