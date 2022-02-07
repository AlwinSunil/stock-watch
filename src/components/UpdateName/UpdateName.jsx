import React, {useState} from "react"
import "./UpdateName.scss"

function UpdateName() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="usersettings-holder">
            <div
                className="usersettings-btn"
                onClick={() => setIsActive(!isActive)}
            >
                <p>Update Name</p>
            </div>
            {isActive && (
                <form className="profileupdate__form auth__form profileupdate__open">
                    <label>Enter new Display Name</label>
                    <input type="text" />
                    <input
                        className="auth__form-submit"
                        type="submit"
                        value="Update Name"
                    />
                </form>
            )}
        </div>
    )
}

export default UpdateName
