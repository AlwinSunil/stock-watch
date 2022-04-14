import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import AlertModal from "../AlertModal/AlertModal"
import HorizontalLoading from "../HorizontalLoading/HorizontalLoading"
import "./UpdateName.scss"

function UpdateName() {
    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [profileName, setProfileName] = useState("")

    const [alertErr, setAlertErr] = useState()
    const [alertSuccess, setAlertSuccess] = useState()

    const updateProfileName = (e) => {
        setIsLoading(true)
        setProfileName("")
        e.preventDefault()
        const auth = getAuth()
        updateProfile(auth.currentUser, {
            displayName: profileName,
        })
            .then(() => {
                setAlertSuccess(true)
                setIsLoading(false)
            })
            .catch(() => {
                setAlertErr(true)
                setIsLoading(false)
            })
    }

    return (
        <>
            {alertSuccess && (
                <AlertModal
                    alert="Successfully updated profile name"
                    state="success"
                />
            )}
            {alertErr && (
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
                        {isLoading ? (
                            <div className="profileupdate__loader">
                                <HorizontalLoading />
                            </div>
                        ) : (
                            <>
                                <label>Enter new Display Name</label>
                                <input
                                    value={profileName}
                                    type="text"
                                    onChange={(e) =>
                                        setProfileName(e.target.value)
                                    }
                                />
                                <input
                                    className="auth__form-submit"
                                    type="submit"
                                    value="Update Name"
                                    onClick={(e) => updateProfileName(e)}
                                />
                            </>
                        )}
                    </form>
                )}
            </div>
        </>
    )
}

export default UpdateName
