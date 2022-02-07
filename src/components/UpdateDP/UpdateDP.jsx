import React, {useState} from "react"
import "./UpdateDP.scss"

function UpdateDP() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="usersettings-holder">
            <div
                className="usersettings-btn"
                onClick={() => setIsActive(!isActive)}
            >
                <p>Update Display Profile</p>
            </div>
            {isActive && (
                <form className="profileupdate__form auth__form profileupdate__open">
                    <label>Upload new Display Profile</label>
                    <input type="file" name="" id="" />
                    <input
                        className="auth__form-submit"
                        type="submit"
                        value="Upload File"
                    />
                </form>
            )}
        </div>
    )
}

export default UpdateDP
