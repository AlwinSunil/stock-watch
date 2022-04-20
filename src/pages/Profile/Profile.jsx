import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../../components/Navigation"
import "./Profile.scss"
import ProfileLogic from "./ProfileLogic"

function Profile() {
    const { userProfile, signOutUser } = ProfileLogic()

    return (
        <>
            <Navigation header="Profile" />
            <div className="profile">
                {userProfile && (
                    <>
                        <div className="profile__card" key="profile__card">
                            <div className="profile__card-img">
                                <img
                                    src={`https://avatars.dicebear.com/api/initials/${userProfile[0].displayName}.svg`}
                                    alt=""
                                />
                            </div>
                            <h3>{userProfile[1]}</h3>
                            <p>{userProfile[0].email}</p>
                        </div>
                    </>
                )}
                <div className="profile__settings">
                    <Link className="usersettings-btn menu" to="/updateprofile">
                        <p>Update Profile</p>
                    </Link>
                    <div
                        className="usersettings-btn usersettings-logout menu"
                        onClick={signOutUser}
                    >
                        <p>Log Out</p>
                    </div>
                </div>
                <div className="profile__settings">
                    <Link className="usersettings-btn menu" to="/about">
                        <p>About</p>
                    </Link>
                    <div className="usersettings-btn version usersettings-btn-disable">
                        <p className="version-title">Version</p>
                        <p className="version-v">1.0.0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
