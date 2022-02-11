import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../../components/Navigation"
import UpdatePassword from "../../components/UpdatePassword"
import "./Profile.scss"
import ProfileLogic from "./ProfileLogic.jsx"

function Profile() {
    const { userProfile, loginProviderGoogle, signOutUser } = ProfileLogic()

    return (
        <>
            <Navigation header="Profile" />
            <div className="profile">
                {userProfile.map((user) => (
                    <div className="profile__card" key="profile__card">
                        <div className="profile__card-img">
                            <img
                                src={`https://avatars.dicebear.com/api/initials/${user.displayName}.svg`}
                                alt=""
                            />
                        </div>
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
                <div className="profile__settings">
                    {loginProviderGoogle ? null : <UpdatePassword />}
                    <Link className="usersettings-btn" to="/updateprofile">
                        <p>Update Profile</p>
                    </Link>
                    <div
                        className="usersettings-btn usersettings-logout"
                        onClick={signOutUser}
                    >
                        <p>Log Out</p>
                    </div>
                </div>
                <div className="profile__settings">
                    <div className="usersettings-btn">
                        <p>Open-source License</p>
                    </div>
                    <Link className="usersettings-btn" to="/about">
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
