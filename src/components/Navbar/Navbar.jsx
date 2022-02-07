import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <img src="/assets/icons/logo-mobile.svg" alt="" />
            <div className="navbar__avatar-container">
                <Link to="/profile" className="navbar__avatar-link">
                    <img
                        className="navbar__avatar"
                        src="/assets/icons/avatar.svg"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
