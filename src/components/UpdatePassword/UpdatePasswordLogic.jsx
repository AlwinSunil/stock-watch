import React, {useState} from "react"

function UpdatePasswordLogic() {
    const [isActive, setIsActive] = useState(false)

    const showPassword = () => {
        const passwordInput = document.getElementById("updatepassword")
        const passwordInputReEnter =
            document.getElementById("updatepassword-re")
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        } else {
            passwordInput.type = "password"
        }
        if (passwordInputReEnter.type === "password") {
            passwordInputReEnter.type = "text"
        } else {
            passwordInputReEnter.type = "password"
        }
    }
    return {isActive, setIsActive, showPassword}
}

export default UpdatePasswordLogic
