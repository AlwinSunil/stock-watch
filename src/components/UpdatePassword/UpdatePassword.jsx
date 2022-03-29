import React from "react"
import UpdatePasswordLogic from "./UpdatePasswordLogic.jsx"

function UpdatePassword() {
    const { isActive, setIsActive, showPassword } = UpdatePasswordLogic()

    return (
        <div className="usersettings-holder">
            <div
                className="usersettings-btn menu"
                onClick={() => setIsActive(!isActive)}
            >
                <p>Update Password</p>
            </div>
            {isActive && (
                <form className="profileupdate__form auth__form profileupdate__open">
                    <label>New Password</label>
                    <input type="password" id="updatepassword" />
                    <label>Re-enter Password</label>
                    <input type="password" id="updatepassword-re" />
                    <div className="auth__form-terms">
                        <input
                            id="terms"
                            type="checkbox"
                            onClick={showPassword}
                        />
                        <label htmlFor="terms">Show Password</label>
                    </div>
                    <input
                        className="auth__form-submit"
                        type="submit"
                        value="Update Password"
                    />
                </form>
            )}
        </div>
    )
}

export default UpdatePassword
